grammar gap;

parse
 : block EOF
 ;

block
 : statement+
 ;

statement
 : expression SemiColon
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
 : ID (Comma ID)*
 ;

exprList
 : expression ((Comma|Colon) expression)*
 | expression Range expression
 ;

expression
 : Minus expression #unaryMinusExpression
 | Not  expression #notExpression
 | Return expression? #returnExpression
 | expression (Pow|Star|Slash|Modulus|Plus|Minus|GTEquals|LTEquals|GT|LT|Equals|NEquals|And|Or|In|ComponentObject|Dot|ShortHandFunction|Assign) expression #operationExpression
 | list #listExpression
 | tuple #tupleExpression
 | functionDecl #functionDeclarationExpression
 | listEvaluation #listEvaluationExpression
 | Comparison #comparisonObjects
 | Number #numberExpression
 | Boolean #booleanExpression
 | Quote #stringExpression
 | ID (OParen exprList? CParen)? indexes? #callExpression
 | '(' expression ')' # parenthesisExpression
 ;

list
 : OBracket exprList? CBracket
 ;

tuple
 : (OParen(Number|ID)(Comma(Number|ID))*CParen)+
 ;

listEvaluation
 : ID (OBrace (OBracket exprList CBracket) CBrace)+
 | ID (OBrace ID OParen (OBracket exprList CBracket) (Comma (OBracket exprList CBracket))* CParen CBrace)+
 ;

indexes
 : (OBracket expression CBracket)+
 ;

Function : 'function';
Input : 'input';
Local : 'local';
If : 'if';
Then : 'then';
Elif : 'elif';
Else : 'else';
Fi : 'fi';
Return : 'return';
For : 'for';
While : 'while';
Do : 'do';
Od : 'od';
End : 'end';
In : 'in';
Repeat : 'repeat';
Until : 'until';

Not : 'not';
Or : 'or';
And : 'and';
Equals : '=';
NEquals : '<>';
GTEquals : '>=';
LTEquals : '<=';
Pow : '^';
Excl : '!';
GT : '>';
LT : '<';
Plus : '+';
Minus : '-';
Star : '*';
Slash : '/';
Modulus : '%';
OBrace : '{';
CBrace : '}';
OBracket : '[';
CBracket : ']';
OParen : '(';
CParen : ')';
SemiColon : ';';
Assign : ':=';
Comparison : '=' | '.' | ':' | '<';
Comma : ',';
Dot : '.' ;
QuestionMark : '?';
Colon : ':';
ShortHandFunction : '->';
Range : '..';
ComponentObject : '!.' ;

Boolean
 : 'true'
 | 'false'
 ;

Number
 : Integer ('.' Digit+)?|('.' Digit+)
 ;

Quote
 : '"' (ESC|.)*? '"'
 | '\'' (ESC|.)*? '\''
 ;

TrippleQuote
 : '"""' (ESC|.)*? '"""'
 ;

fragment
DIGIT
 :  '0'..'9' ;

ID
 :   (LETTER|DIGIT|'_'|'@'|'\\ ')+LETTER?
 ;

fragment
LETTER
 : [a-zA-Z]
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
