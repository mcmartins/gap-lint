var GapLint = (function GAPLint() {
  "use strict";

  var self = {};

  // TODO is it worth to add register and unregister methods for adding removing Rules externally?

  var Rule = function (name, when, then, severity, message) {
    this.name = name;
    this.when = when;
    this.then = then;
    this.severity = severity;
    this.message = message;

    var self = this;

    this.getMatches = function (text) {
      return self.when.regex.exec(text)
    };

    this.validate = function (text) {
      if (self.then[0] && !self.then[0].dontCheck && self.then[0].regex.exec(text)) {
        text = text.match(self.then[0].regex)[1];
        self.then.splice(0, 1);
      } else if (self.then[0].inline) {
        self.then[0].dontCheck = true;
      }
      return text;
    };

    this.isCompliant = function () {
      return self.then.length == 0;
    };

  };

  Rule.prototype = {
    Type: {
      WARNING: 'warning',
      ERROR: 'error'
    }
  };

  var Flag = function (line, string, rule) {
    this.rule = rule;
    this.line = line || 0;
    this.column = string ? string.indexOf(escapeRegex(rule.when.regex)) : 0;

    var self = this;

    function escapeRegex(string) {
      return string.toString().replace(/[|&$%@"<>()+.\/*\\b]/g, '')
    }

    this.message = function () {
      return self.rule.message || 'rule: ' + self.rule.name
        + ', line: ' + self.line + ', col: ' + self.column
        + ' - Missing ' + escapeRegex(self.rule.then.join(', ')) + '.'; //TODO fix the join as now then is an object!
    }();

  };

  // TODO is it worth to load a json file with rule objects? it would simplify a lot this code and the registration of new rules
  function getRules() {
    return [
      new Rule('IF', {regex: /\bif\b/}, [{regex: /\bthen\b(.*)/, inline: false}, {regex: /\bfi;(.*)/, inline: false}],
        Rule.prototype.Type.ERROR),
      new Rule('WHILE', {regex: /\bwhile\b/}, [{regex: /\bdo(.*)/, inline: false}, {regex: /\bod;(.*)/, inline: false}],
        Rule.prototype.Type.ERROR),
      new Rule('FUNCTION', {regex: /\bfunction\b/}, [{regex: /\breturn(.*)/, inline: false}, {regex: /\bend;(.*)/, inline: false}],
        Rule.prototype.Type.ERROR),
      new Rule('REPEAT', {regex: /\brepeat\b/}, [{regex: /\buntil;(.*)/, inline: false}],
        Rule.prototype.Type.ERROR),
      new Rule('FOR', {regex: /\bfor\b/}, [{regex: /\bdo\b(.*)/, inline: false}, {regex: /\bod;(.*)/, inline: false}],
        Rule.prototype.Type.ERROR),
      new Rule('ATOMIC', {regex: /\batomic\b/}, [{regex: /\bdo\b(.*)/, inline: false}, {regex: /\bod;(.*)/, inline: false}],
        Rule.prototype.Type.ERROR),
      new Rule('FUNCTION_SIGN', {regex: /\bfunction\b/}, [{regex: /\(.*\)(.*)/, inline: true}], Rule.prototype.Type.WARNING,
        'Something is wrong with the function signature.'),
      new Rule('TAB', {regex: /\t/}, [{regex: /\//, inline: false}], Rule.prototype.Type.WARNING,
        'Please use spaces instead of tabs.'),
      new Rule('LOCAL', {regex: /\blocal\b/}, [{regex: /;/, inline: true}], Rule.prototype.Type.WARNING,
        'Missing semicolon.')
    ];
  }

  self.validate = function validate(text) {
    if (!text) return [];
    // results array
    var flags = [];
    // split the text into lines
    var lines = text.split('\n');
    // might happen if there are no break lines
    if (!Array.isArray(lines)) lines = [lines];
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
          text = nextFlag.rule.validate(text);
          if (text) {
            if (!nextFlag.rule.isCompliant()) unMatchedFlags.unshift(nextFlag);
            // FIXME this causes an error when the code is all in the same line and the previous rule needs to be checked for compliance more than once
            nextFlag = flags.pop();
          } else {
            if (!nextFlag.rule.isCompliant()) unMatchedFlags.unshift(nextFlag);
          }
        }
        flags = flags.concat(unMatchedFlags);
      }
    });
    return flags;
  };

  return self;
}());
