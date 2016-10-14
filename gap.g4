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
 : Identifier (Comma Identifier)*
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
 | tuple #tupleDeclarationExpression
 | functionDecl #functionDeclarationExpression
 | listEvaluation #newListEvaluationExpression
 | Number #numberExpression
 | Boolean #booleanExpression
 | Quote #stringExpression
 | Identifier (OParen exprList? CParen)? indexes? #callExpression
 | '(' expression ')' # parenthesisExpression
 ;

list
 : OBracket exprList? CBracket
 ;

tuple
 : (OParen(Number|Identifier)(Comma(Number|Identifier))*CParen)+
 ;

listEvaluation
 : Identifier (OBrace (OBracket exprList CBracket) CBrace)+
 | Identifier (OBrace Identifier OParen (OBracket exprList CBracket) (Comma (OBracket exprList CBracket))* CParen CBrace)+
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

Identifier
 : [a-zA-Z0-9_@]+([\\]+[a-zA-Z0-9_@,.() ]+)*|([\\]+[a-zA-Z0-9_@,.()\ ]+)*[a-zA-Z0-9_@]+
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
