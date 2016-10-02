grammar gap;

parse
 : block EOF
 ;

block
 : statement+
 ;

statement
 : expression ';'?
 | assignment ';'
 | invocation ';'
 | operation ';'
 | functionCall ';'
 | functionDecl ';'
 | ifStatement ';'
 | forStatement ';'
 | whileStatement ';'
 | repeatStatement
 ;

assignment
 : Identifier (indexes|list)? ':=' expression
 ;

invocation
 : (Identifier|Number)
 ;

operation
 : (Identifier | Number) (operator (Identifier | Number))+ (Equals (operation|expression)*)?
 ;

functionCall
 : Identifier '(' exprList? ')'
 ;

functionDecl
 : Function '(' idList? ')' block? End
 ;

ifStatement
 : ifStat elseIfStat* elseStat? fiIfStat
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

fiIfStat
 : Fi
 ;

forStatement
 : For expression In expression Do block* Od
 ;

whileStatement
 : While expression Do block* Od
 ;

repeatStatement
 : Repeat expression Until block* ';'
 ;

idList
 : Identifier (',' Identifier)*
 ;

exprList
 : expression (',' expression)*
 ;

expression
 : Subtract expression                      #unaryMinusExpression
 | '!' expression                           #notExpression
 | expression Pow expression                #powerExpression
 | expression Multiply expression           #multiplyExpression
 | expression Divide expression             #divideExpression
 | expression Modulus expression            #modulusExpression
 | expression Add expression                #addExpression
 | expression Subtract expression           #subtractExpression
 | expression GTEquals expression           #gtEqExpression
 | expression LTEquals expression           #ltEqExpression
 | expression GT expression                 #gtExpression
 | expression LT expression                 #ltExpression
 | expression Equals expression             #eqExpression
 | expression NEquals expression            #notEqExpression
 | expression And expression                #andExpression
 | expression Or expression                 #orExpression
 | expression SHandFunc expression          #shorthandFunctionCall
 | expression In expression                 #inExpression
 | Number                                   #numberExpression
 | Number Range Number                      #rangeExpression
 | Boolean                                  #boolExpression
 | String                                   #stringExpression
 | functionCall indexes?                    #functionCallExpression
 | list indexes?                            #listExpression
 | Identifier indexes?                      #identifierExpression
 | '(' expression ')' indexes?              #expressionExpression
 | Input '(' String? ')'                    #inputExpression
 | functionDecl                             #functionDeclaration
 | Return (Identifier|Number)               #returnDeclaration
 | Local idList                             #localDeclaration
 | tuple                                    #tupleDeclaration
 | listEvaluation                           #newListEvaluation
 ;

list
 : '[' exprList? ']'
 ;

tuple
 : ('(' (Number|Identifier) (',' (Number|Identifier))* ')')+
 ;

listEvaluation
 : Identifier '{' ( '[' (Number|Identifier) (Range (Number|Identifier) | (','(Number|Identifier))*) ']' )+ '}'
 ;

indexes
 : ('[' expression ']')+
 ;

operator
 : Add
 | Subtract
 | Multiply
 | Divide
 | Modulus
 | Pow
 ;

Function : 'function';
Input    : 'input';
Local    : 'local';
If       : 'if';
Then     : 'then';
Elif     : 'elif';
Else     : 'else';
Fi       : 'fi';
Return   : 'return';
For      : 'for';
While    : 'while';
Do       : 'do';
Od       : 'od';
End      : 'end';
In       : 'in';
Repeat   : 'repeat';
Until    : 'until';

Or       : 'or';
And      : 'and';
Equals   : '=';
NEquals  : '<>';
GTEquals : '>=';
LTEquals : '<=';
Pow      : '^';
Excl     : '!';
GT       : '>';
LT       : '<';
Add      : '+';
Subtract : '-';
Multiply : '*';
Divide   : '/';
Modulus  : '%';
OBrace   : '{';
CBrace   : '}';
OBracket : '[';
CBracket : ']';
OParen   : '(';
CParen   : ')';
SColon   : ';';
Assign   : '=';
Comma    : ',';
QMark    : '?';
Colon    : ':';
SHandFunc: '->';
Range    : '..';

Boolean
 : 'true'
 | 'false'
 ;

Number
 : Integer ('.' Digit+)? | ('.' Digit+)
 ;

Identifier
 : [a-zA-Z0-9_@]+([\\]+[a-zA-Z0-9_@,.() ]+)*|([\\]+[a-zA-Z0-9_@,.() ]+)*[a-zA-Z0-9_@]+
 ;

String
 : '"' .*? '"'
 | '"""' .*? '"""'
 ;

Comment
 : '#' .*? ('\r' | '\n')  -> skip
 ;

Space
 : [ \t\r\n\u000C] -> skip
 ;

EOL
 : [\r\n] -> skip
 ;

fragment Integer
 : [1-9] Digit*
 | '0'
 ;

fragment Digit
 : [0-9]
 ;
