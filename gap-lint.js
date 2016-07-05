// gap-lint.js - 2016-07-05
//
// Copyright (c) 2016 Manuel Martins
// Under License GNU GENERAL PUBLIC LICENSE - Version 2, June 1991
//
// GAPLint(options) is a module that takes an optional options argument.
// Valid options are:
//
//      options.rulesUrl          An URL to the json rules.
//      options.messageShowRule   A flag to whether show or not the rule name in the message.
//
// GAPLint returns an object containing a 'validate' function. This function
// accepts one argument, the text to validate, and returns an array of objects.
// These object are of type 'Flag' and contains information on the error/warning raised.
//
//      Flag.line                 The line where the flag was detected
//      Flag.column               The column where the flag starts
//      Flag.rule                 A rule object contains all the information on the trigger and instructions
//      Flag.getMessage           A function that returns the message formatted for the current flag
//
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
      return self.rule.then.map(function (r) {
        return '\'' + escapeRegex(r.regex) + '\'';
      }).join(', ');
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
