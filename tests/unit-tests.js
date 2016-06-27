QUnit.test('Window Load Module', function (assert) {
  assert.ok(window.GapLint !== undefined, 'Making sure the modules gets imported into the page.');
});

QUnit.test('Null', function (assert) {
  var text = null;
  assert.ok(window.GapLint.validate(null).length == 0, 'Testing text: ' + text + ' - should return 0 results.');
});

QUnit.test('Undefined', function (assert) {
  var text = undefined;
  assert.ok(window.GapLint.validate(null).length == 0, 'Testing text: ' + text + ' - should return 0 results.');
});

QUnit.test('Empty', function (assert) {
  var text = '';
  assert.ok(window.GapLint.validate(null).length == 0, 'Testing text: ' + text + ' - should return 0 results.');
});

QUnit.test('If statement', function (assert) {
  var text = 'if then \n fi;';
  assert.ok(window.GapLint.validate(text).length == 0, 'Testing text: ' + text + ' - should return 0 results.');
});

QUnit.test('While statement', function (assert) {
  var text = 'while do \n od;';
  assert.ok(window.GapLint.validate(text).length == 0, 'Testing text: ' + text + ' - should return 0 results.');
});

QUnit.test('Function creation', function (assert) {
  var text = 'a := function ()\n return b;\n end;';
  assert.ok(window.GapLint.validate(text).length == 0, 'Testing text: ' + text + ' - should return 0 results.');
});

QUnit.test('Repeat statement', function (assert) {
  var text = 'repeat \nuntil;';
  assert.ok(window.GapLint.validate(text).length == 0, 'Testing text: ' + text + ' - should return 0 results.');
});

QUnit.test('For statement', function (assert) {
  var text = 'for do \nod;';
  assert.ok(window.GapLint.validate(text).length == 0, 'Testing text: ' + text + ' - should return 0 results.');
});

QUnit.test('Chunk of code', function (assert) {
  var text = '# Literals\n1234\n.123\n7\n2147483647\n(1,2,3)(4,5,6)\n\n"String literals"\n\n"""\nMultiline\nstring\nliterals\n"""\n9123really\w\ eir\_identifier := 5;\n\n\nf := function(a,b,c)\n\n local x,y,z,g\n\nreturn x;\nend;';
  var results = window.GapLint.validate(text);
  assert.ok(results.length == 1, 'Testing text: ' + text + ' - should return 1 results.');
  assert.ok(results[0].rule.severity == 'warning', 'Testing text: ' + text + ' - should return severity warning.');
  assert.ok(results[0].line == 19, 'Testing text: ' + text + ' - should return line 19.');
  assert.ok(results[0].column == 1, 'Testing text: ' + text + ' - should return column 1.');
});

QUnit.test('Chunk of code', function (assert) {
  var text = '# Literals\n1234\n.123\n7\n2147483647\n(1,2,3)(4,5,6)\n\n"String literals"\n\n"""\nMultiline\nstring\nliterals\n"""\n9123really\w\ eir\_identifier := 5;\n\n\nf := function(a,b,c)\n\nlocal x,y,z,g;\n\nreturn x;\nend;';
  assert.ok(window.GapLint.validate(text).length == 0, 'Testing text: ' + text + ' - should return 0 results.');
});

