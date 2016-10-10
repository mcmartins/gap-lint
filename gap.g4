grammar gap;

parse
 : block EOF
 ;

block
 : statement+
 ;

statement
 : expression SemiColon
 | expression Assign expression SemiColon
 | ifStatement SemiColon
 | forStatement SemiColon
 | whileStatement SemiColon
 | doStatement SemiColon
 | repeatStatement SemiColon
 | TrippleQuote
 ;

functionDecl
 : Function OParen idList? CParen (statement|Local idList SemiColon)+ End
 ;

doStatement
 : Do block? Od
 ;

ifStatement
 : ifStat elseIfStat* elseStat? Fi
 ;

ifStat
 : If expression Then block?
 ;

elseIfStat
 : Elif expression Then block?
 ;

elseStat
 : Else block?
 ;

forStatement
 : For expression In expression Do block? Od
 ;

whileStatement
 : While expression Do block? Od
 ;

repeatStatement
 : Repeat expression Until block?
 ;

idList
 : Identifier (Comma Identifier)*
 ;

exprList
 : (expression|functionDecl) ((Comma|Colon) (expression|functionDecl))*
 | expression Range expression
 ;

expression
 : Minus expression #unaryMinusExpression
 | Not expression #notExpression
 | Return expression #returnExpression
 | expression Pow expression#powerExpression
 | expression Star expression #multiplyExpression
 | expression Slash expression #divideExpression
 | expression Modulus expression#modulusExpression
 | expression Plus expression#addExpression
 | expression Minus expression #subtractExpression
 | expression GTEquals expression #gtEqExpression
 | expression LTEquals expression #ltEqExpression
 | expression GT expression #gtExpression
 | expression LT expression #ltExpression
 | expression Equals expression #eqExpression
 | expression NEquals expression #notEqExpression
 | expression And expression #andExpression
 | expression Or expression #orExpression
 | expression ShortHandFunction expression #shorthandFunctionCall
 | expression In expression #inExpression
 | list indexes? #listExpression
 | tuple #tupleDeclaration
 | functionDecl #functionDeclaration
 | listEvaluation #newListEvaluation
 | Number #numberExpression
 | Boolean #boolExpression
 | Quote #stringExpression
 | Identifier (OParen exprList? CParen)? indexes? #callExpression
 ;

list
 : OBracket exprList? CBracket
 ;

tuple
 : (OParen(Number|Identifier)(Comma(Number|Identifier))*CParen)+
 ;

listEvaluation
 : Identifier (OBrace (OBracket expression (Range expression|(Comma expression)*)CBracket) CBrace)+
 ;

indexes
 : (OBracket expression CBracket)+
 ;

Function : 'function';
Input: 'input';
Local: 'local';
If   : 'if';
Then : 'then';
Elif : 'elif';
Else : 'else';
Fi   : 'fi';
Return   : 'return';
For  : 'for';
While: 'while';
Do   : 'do';
Od   : 'od';
End  : 'end';
In   : 'in';
Repeat  : 'repeat';
Until: 'until';

Not  : 'not';
Or   : 'or';
And  : 'and';
Equals   : '=';
NEquals  : '<>';
GTEquals : '>=';
LTEquals : '<=';
Pow  : '^';
Excl : '!';
GT   : '>';
LT   : '<';
Plus  : '+';
Minus : '-';
Star : '*';
Slash   : '/';
Modulus  : '%';
OBrace   : '{';
CBrace   : '}';
OBracket : '[';
CBracket : ']';
OParen   : '(';
CParen   : ')';
SemiColon   : ';';
Assign   : ':=';
Comma: ',';
QuestionMark: '?';
Colon: ':';
ShortHandFunction: '->';
Range: '..';

Boolean
 : 'true'
 | 'false'
 ;

Number
 : Integer ('.' Digit+)?|('.' Digit+)
 ;

Identifier
 : [a-zA-Z0-9_@]+([\\]+[a-zA-Z0-9_@,.() ]+)*|([\\]+[a-zA-Z0-9_@,.() ]+)*[a-zA-Z0-9_@]+
 ;

Quote
 : '"' (ESC|.)*? '"'
 | '\'' (ESC|.)*? '\''
 ;

TrippleQuote
 : '"""' (ESC|.)*? '"""'
 ;

Comment
 : '#' .*? ('\r'|'\n')  -> skip
 ;

Space
 : [ \t\r\n\u000C] -> skip
 ;

EOL
 : [\r\n] -> skip
 ;

fragment ESC
 : '\\' [btnr"\\]
 ;

fragment Integer
 : [1-9] Digit*
 | '0'
 ;

fragment Digit
 : [0-9]
 ;
