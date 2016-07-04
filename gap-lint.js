/**
 * TODO properly comment this module
 * TODO add options including the url to load rules and other useful stuff, such as don't include rule in error message etc
 * TODO improve performance by changing the way this works. The algorithm should match words in each line using one regex
 * that is the or of all the rules and use the match group to get the position of the rule and instantiate it.
 * This will improve the algorithm by not iterating through rules!
 */
var GapLint = (function GAPLint() {
  'use strict';

  var self = {};
  var loadedRules = [];

  var loadJsonFromUrl = function (url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
      if (xhr.status == 200) {
        loadedRules = loadedRules.concat(xhr.response.rules);
      } else {
        throw new Error('Could not load the resource from: ' + url + '. HTML Status Code: ' + xhr.status);
      }
    };
    xhr.send();
  };

  // load default rules
  loadJsonFromUrl('https://rawgit.com/mcmartins/gap-lint/master/rules/rules.json');

  function getRules() {
    var res = [];
    loadedRules.forEach(function each(rule) {
      res.push(new Rule(JSON.parse(JSON.stringify(rule))));
    });
    return res;
  }

  var Rule = function Rule(rule) {
    this.name = rule.name;
    this.when = rule.when;
    this.then = rule.then || [];
    this.severity = rule.severity;
    this.message = rule.message;

    var self = this;

    this.getMatches = function (text) {
      return new RegExp(self.when.regex, 'm').exec(text)
    };

    this.comply = function (text) {
      if (self.then[0] && !self.then[0].checked && new RegExp(self.then[0].regex, 'm').exec(text)) {
        text = text.match(new RegExp(self.then[0].regex, 'm'))[1];
        self.then.splice(0, 1);
      } else if (self.then[0] && self.then[0].inline) {
        self.then[0].checked = true;
      }
      return text;
    };

    this.isCompliant = function () {
      return self.then.length == 0;
    };

  };

  var Flag = function Flag(line, string, rule) {
    this.rule = rule;
    this.line = line || 0;
    this.column = string ? string.indexOf(escapeRegex(rule.when.regex)) : 0;

    var self = this;

    function getThenParametersString() {
      return escapeRegex(self.rule.then.map(function (r) {
        return r.regex;
      }).join(', '));
    }

    function escapeRegex(string) {
      return string.toString().replace(/[|&$%@"<>()+.\/*\\b]/g, '')
    }

    this.getMessage = function () {
      return 'rule: {1}, line: {2}, col: {3} - {4}'
        .replace('{1}', self.rule.name).replace('{2}', self.line + 1).replace('{3}', self.column)
        .replace('{4}', self.rule.message.replace("{}", getThenParametersString()));
    };

  };

  self.validate = function validate(text) {
    if (!text) return [];
    // results array
    var flags = [];
    // split the text into lines
    var lines = text.split('\n');
    // might happen if there are no break lines
    if (!Array.isArray(lines)) lines = [lines];
    // get fresh array of rules each time
    var rules = getRules();
    lines.forEach(function each(text, lineIndex) {
      rules.forEach(function each(rule, ruleIndex) {
        var matches = rule.getMatches(text);
        if (matches) {
          for (var i = 0; i < matches.length; i++) {
            // get fresh instances of Rule and Flag
            var newRule = getRules()[ruleIndex];
            var match = new Flag(lineIndex, text, newRule);
            flags.push(match);
          }
        }
      });
      if (text) {
        var nextFlag = flags.pop();
        var unMatchedFlags = [];
        while (nextFlag && text) {
          text = nextFlag.rule.comply(text);
          // FIXME this causes an error when the code is all in the same line and the previous rule needs to be checked for compliance more than one instruction
          if (!nextFlag.rule.isCompliant()) unMatchedFlags.unshift(nextFlag);
          if (text) nextFlag = flags.pop();
        }
        flags = flags.concat(unMatchedFlags);
      }
    });
    return flags;
  };

  return self;
}());
