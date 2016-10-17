// Generated from /media/sf_GitHub/gap-lint/gap.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "gap.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003;\u0114\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003-",
    "\n\u0003\r\u0003\u000e\u0003.\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004D\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005I\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005Q",
    "\n\u0005\r\u0005\u000e\u0005R\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0005\u0006Y\n\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0007\u0007_\n\u0007\f\u0007\u000e\u0007b\u000b\u0007\u0003\u0007",
    "\u0005\u0007e\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0005\bm\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\ts\n\t",
    "\u0003\n\u0003\n\u0005\nw\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u007f\n\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u0087\n\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u008f\n\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0007\u000e\u0094\n\u000e\f\u000e\u000e\u000e",
    "\u0097\u000b\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u009c",
    "\n\u000f\f\u000f\u000e\u000f\u009f\u000b\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u00a5\n\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u00ae\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u00bb\n\u0010\u0003\u0010\u0005\u0010\u00be",
    "\n\u0010\u0003\u0010\u0005\u0010\u00c1\n\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u00c7\n\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0007\u0010\u00cc\n\u0010\f\u0010\u000e\u0010\u00cf",
    "\u000b\u0010\u0003\u0011\u0003\u0011\u0005\u0011\u00d3\n\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007",
    "\u0012\u00db\n\u0012\f\u0012\u000e\u0012\u00de\u000b\u0012\u0003\u0012",
    "\u0006\u0012\u00e1\n\u0012\r\u0012\u000e\u0012\u00e2\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0006\u0013\u00ed\n\u0013\r\u0013\u000e\u0013\u00ee\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0007\u0013\u00fe\n\u0013\f\u0013\u000e\u0013\u0101\u000b\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0006\u0013\u0106\n\u0013\r\u0013\u000e",
    "\u0013\u0107\u0005\u0013\u010a\n\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0006\u0014\u0110\n\u0014\r\u0014\u000e\u0014\u0111",
    "\u0003\u0014\u0002\u0003\u001e\u0015\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0002\u0005\u0004\u0002",
    "--00\t\u0002\u0011\u0011\u0015\u001b\u001d#++..1133\u0004\u00025588",
    "\u012f\u0002(\u0003\u0002\u0002\u0002\u0004,\u0003\u0002\u0002\u0002",
    "\u0006C\u0003\u0002\u0002\u0002\bE\u0003\u0002\u0002\u0002\nV\u0003",
    "\u0002\u0002\u0002\f\\\u0003\u0002\u0002\u0002\u000eh\u0003\u0002\u0002",
    "\u0002\u0010n\u0003\u0002\u0002\u0002\u0012t\u0003\u0002\u0002\u0002",
    "\u0014x\u0003\u0002\u0002\u0002\u0016\u0082\u0003\u0002\u0002\u0002",
    "\u0018\u008a\u0003\u0002\u0002\u0002\u001a\u0090\u0003\u0002\u0002\u0002",
    "\u001c\u00a4\u0003\u0002\u0002\u0002\u001e\u00c6\u0003\u0002\u0002\u0002",
    " \u00d0\u0003\u0002\u0002\u0002\"\u00e0\u0003\u0002\u0002\u0002$\u0109",
    "\u0003\u0002\u0002\u0002&\u010f\u0003\u0002\u0002\u0002()\u0005\u0004",
    "\u0003\u0002)*\u0007\u0002\u0002\u0003*\u0003\u0003\u0002\u0002\u0002",
    "+-\u0005\u0006\u0004\u0002,+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002",
    "\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/\u0005\u0003",
    "\u0002\u0002\u000201\u0005\u001e\u0010\u000212\u0007*\u0002\u00022D",
    "\u0003\u0002\u0002\u000234\u0005\f\u0007\u000245\u0007*\u0002\u0002",
    "5D\u0003\u0002\u0002\u000267\u0005\u0014\u000b\u000278\u0007*\u0002",
    "\u00028D\u0003\u0002\u0002\u00029:\u0005\u0016\f\u0002:;\u0007*\u0002",
    "\u0002;D\u0003\u0002\u0002\u0002<=\u0005\n\u0006\u0002=>\u0007*\u0002",
    "\u0002>D\u0003\u0002\u0002\u0002?@\u0005\u0018\r\u0002@A\u0007*\u0002",
    "\u0002AD\u0003\u0002\u0002\u0002BD\u00077\u0002\u0002C0\u0003\u0002",
    "\u0002\u0002C3\u0003\u0002\u0002\u0002C6\u0003\u0002\u0002\u0002C9\u0003",
    "\u0002\u0002\u0002C<\u0003\u0002\u0002\u0002C?\u0003\u0002\u0002\u0002",
    "CB\u0003\u0002\u0002\u0002D\u0007\u0003\u0002\u0002\u0002EF\u0007\u0003",
    "\u0002\u0002FH\u0007(\u0002\u0002GI\u0005\u001a\u000e\u0002HG\u0003",
    "\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002",
    "JP\u0007)\u0002\u0002KQ\u0005\u0006\u0004\u0002LM\u0007\u0005\u0002",
    "\u0002MN\u0005\u001a\u000e\u0002NO\u0007*\u0002\u0002OQ\u0003\u0002",
    "\u0002\u0002PK\u0003\u0002\u0002\u0002PL\u0003\u0002\u0002\u0002QR\u0003",
    "\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002",
    "ST\u0003\u0002\u0002\u0002TU\u0007\u0010\u0002\u0002U\t\u0003\u0002",
    "\u0002\u0002VX\u0007\u000e\u0002\u0002WY\u0005\u0004\u0003\u0002XW\u0003",
    "\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002",
    "Z[\u0007\u000f\u0002\u0002[\u000b\u0003\u0002\u0002\u0002\\`\u0005\u000e",
    "\b\u0002]_\u0005\u0010\t\u0002^]\u0003\u0002\u0002\u0002_b\u0003\u0002",
    "\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ad\u0003",
    "\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002ce\u0005\u0012\n\u0002d",
    "c\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002",
    "\u0002fg\u0007\n\u0002\u0002g\r\u0003\u0002\u0002\u0002hi\u0007\u0006",
    "\u0002\u0002ij\u0005\u001e\u0010\u0002jl\u0007\u0007\u0002\u0002km\u0005",
    "\u0004\u0003\u0002lk\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002",
    "m\u000f\u0003\u0002\u0002\u0002no\u0007\b\u0002\u0002op\u0005\u001e",
    "\u0010\u0002pr\u0007\u0007\u0002\u0002qs\u0005\u0004\u0003\u0002rq\u0003",
    "\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002s\u0011\u0003\u0002\u0002",
    "\u0002tv\u0007\t\u0002\u0002uw\u0005\u0004\u0003\u0002vu\u0003\u0002",
    "\u0002\u0002vw\u0003\u0002\u0002\u0002w\u0013\u0003\u0002\u0002\u0002",
    "xy\u0007\f\u0002\u0002yz\u0005\u001e\u0010\u0002z{\u0007\u0011\u0002",
    "\u0002{|\u0005\u001e\u0010\u0002|~\u0007\u000e\u0002\u0002}\u007f\u0005",
    "\u0004\u0003\u0002~}\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002",
    "\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0081\u0007\u000f\u0002",
    "\u0002\u0081\u0015\u0003\u0002\u0002\u0002\u0082\u0083\u0007\r\u0002",
    "\u0002\u0083\u0084\u0005\u001e\u0010\u0002\u0084\u0086\u0007\u000e\u0002",
    "\u0002\u0085\u0087\u0005\u0004\u0003\u0002\u0086\u0085\u0003\u0002\u0002",
    "\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0007\u000f\u0002\u0002\u0089\u0017\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0007\u0012\u0002\u0002\u008b\u008c\u0005\u001e\u0010",
    "\u0002\u008c\u008e\u0007\u0013\u0002\u0002\u008d\u008f\u0005\u0004\u0003",
    "\u0002\u008e\u008d\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002",
    "\u0002\u008f\u0019\u0003\u0002\u0002\u0002\u0090\u0095\u00078\u0002",
    "\u0002\u0091\u0092\u0007-\u0002\u0002\u0092\u0094\u00078\u0002\u0002",
    "\u0093\u0091\u0003\u0002\u0002\u0002\u0094\u0097\u0003\u0002\u0002\u0002",
    "\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002",
    "\u0096\u001b\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002\u0002",
    "\u0098\u009d\u0005\u001e\u0010\u0002\u0099\u009a\t\u0002\u0002\u0002",
    "\u009a\u009c\u0005\u001e\u0010\u0002\u009b\u0099\u0003\u0002\u0002\u0002",
    "\u009c\u009f\u0003\u0002\u0002\u0002\u009d\u009b\u0003\u0002\u0002\u0002",
    "\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u00a5\u0003\u0002\u0002\u0002",
    "\u009f\u009d\u0003\u0002\u0002\u0002\u00a0\u00a1\u0005\u001e\u0010\u0002",
    "\u00a1\u00a2\u00072\u0002\u0002\u00a2\u00a3\u0005\u001e\u0010\u0002",
    "\u00a3\u00a5\u0003\u0002\u0002\u0002\u00a4\u0098\u0003\u0002\u0002\u0002",
    "\u00a4\u00a0\u0003\u0002\u0002\u0002\u00a5\u001d\u0003\u0002\u0002\u0002",
    "\u00a6\u00a7\b\u0010\u0001\u0002\u00a7\u00a8\u0007 \u0002\u0002\u00a8",
    "\u00c7\u0005\u001e\u0010\u0010\u00a9\u00aa\u0007\u0014\u0002\u0002\u00aa",
    "\u00c7\u0005\u001e\u0010\u000f\u00ab\u00ad\u0007\u000b\u0002\u0002\u00ac",
    "\u00ae\u0005\u001e\u0010\u0002\u00ad\u00ac\u0003\u0002\u0002\u0002\u00ad",
    "\u00ae\u0003\u0002\u0002\u0002\u00ae\u00c7\u0003\u0002\u0002\u0002\u00af",
    "\u00c7\u0005 \u0011\u0002\u00b0\u00c7\u0005\"\u0012\u0002\u00b1\u00c7",
    "\u0005\b\u0005\u0002\u00b2\u00c7\u0005$\u0013\u0002\u00b3\u00c7\u0007",
    ",\u0002\u0002\u00b4\u00c7\u00075\u0002\u0002\u00b5\u00c7\u00074\u0002",
    "\u0002\u00b6\u00c7\u00076\u0002\u0002\u00b7\u00bd\u00078\u0002\u0002",
    "\u00b8\u00ba\u0007(\u0002\u0002\u00b9\u00bb\u0005\u001c\u000f\u0002",
    "\u00ba\u00b9\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002",
    "\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00be\u0007)\u0002\u0002",
    "\u00bd\u00b8\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002",
    "\u00be\u00c0\u0003\u0002\u0002\u0002\u00bf\u00c1\u0005&\u0014\u0002",
    "\u00c0\u00bf\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002",
    "\u00c1\u00c7\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007(\u0002\u0002",
    "\u00c3\u00c4\u0005\u001e\u0010\u0002\u00c4\u00c5\u0007)\u0002\u0002",
    "\u00c5\u00c7\u0003\u0002\u0002\u0002\u00c6\u00a6\u0003\u0002\u0002\u0002",
    "\u00c6\u00a9\u0003\u0002\u0002\u0002\u00c6\u00ab\u0003\u0002\u0002\u0002",
    "\u00c6\u00af\u0003\u0002\u0002\u0002\u00c6\u00b0\u0003\u0002\u0002\u0002",
    "\u00c6\u00b1\u0003\u0002\u0002\u0002\u00c6\u00b2\u0003\u0002\u0002\u0002",
    "\u00c6\u00b3\u0003\u0002\u0002\u0002\u00c6\u00b4\u0003\u0002\u0002\u0002",
    "\u00c6\u00b5\u0003\u0002\u0002\u0002\u00c6\u00b6\u0003\u0002\u0002\u0002",
    "\u00c6\u00b7\u0003\u0002\u0002\u0002\u00c6\u00c2\u0003\u0002\u0002\u0002",
    "\u00c7\u00cd\u0003\u0002\u0002\u0002\u00c8\u00c9\f\r\u0002\u0002\u00c9",
    "\u00ca\t\u0003\u0002\u0002\u00ca\u00cc\u0005\u001e\u0010\u000e\u00cb",
    "\u00c8\u0003\u0002\u0002\u0002\u00cc\u00cf\u0003\u0002\u0002\u0002\u00cd",
    "\u00cb\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce",
    "\u001f\u0003\u0002\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00d0",
    "\u00d2\u0007&\u0002\u0002\u00d1\u00d3\u0005\u001c\u000f\u0002\u00d2",
    "\u00d1\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3",
    "\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007\'\u0002\u0002\u00d5",
    "!\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007(\u0002\u0002\u00d7\u00dc",
    "\t\u0004\u0002\u0002\u00d8\u00d9\u0007-\u0002\u0002\u00d9\u00db\t\u0004",
    "\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00db\u00de\u0003\u0002",
    "\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002",
    "\u0002\u0002\u00dd\u00df\u0003\u0002\u0002\u0002\u00de\u00dc\u0003\u0002",
    "\u0002\u0002\u00df\u00e1\u0007)\u0002\u0002\u00e0\u00d6\u0003\u0002",
    "\u0002\u0002\u00e1\u00e2\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002",
    "\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3#\u0003\u0002",
    "\u0002\u0002\u00e4\u00ec\u00078\u0002\u0002\u00e5\u00e6\u0007$\u0002",
    "\u0002\u00e6\u00e7\u0007&\u0002\u0002\u00e7\u00e8\u0005\u001c\u000f",
    "\u0002\u00e8\u00e9\u0007\'\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002",
    "\u0002\u00ea\u00eb\u0007%\u0002\u0002\u00eb\u00ed\u0003\u0002\u0002",
    "\u0002\u00ec\u00e5\u0003\u0002\u0002\u0002\u00ed\u00ee\u0003\u0002\u0002",
    "\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002",
    "\u0002\u00ef\u010a\u0003\u0002\u0002\u0002\u00f0\u0105\u00078\u0002",
    "\u0002\u00f1\u00f2\u0007$\u0002\u0002\u00f2\u00f3\u00078\u0002\u0002",
    "\u00f3\u00f4\u0007(\u0002\u0002\u00f4\u00f5\u0007&\u0002\u0002\u00f5",
    "\u00f6\u0005\u001c\u000f\u0002\u00f6\u00f7\u0007\'\u0002\u0002\u00f7",
    "\u00ff\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007-\u0002\u0002\u00f9",
    "\u00fa\u0007&\u0002\u0002\u00fa\u00fb\u0005\u001c\u000f\u0002\u00fb",
    "\u00fc\u0007\'\u0002\u0002\u00fc\u00fe\u0003\u0002\u0002\u0002\u00fd",
    "\u00f8\u0003\u0002\u0002\u0002\u00fe\u0101\u0003\u0002\u0002\u0002\u00ff",
    "\u00fd\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002\u0002\u0100",
    "\u0102\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0102",
    "\u0103\u0007)\u0002\u0002\u0103\u0104\u0007%\u0002\u0002\u0104\u0106",
    "\u0003\u0002\u0002\u0002\u0105\u00f1\u0003\u0002\u0002\u0002\u0106\u0107",
    "\u0003\u0002\u0002\u0002\u0107\u0105\u0003\u0002\u0002\u0002\u0107\u0108",
    "\u0003\u0002\u0002\u0002\u0108\u010a\u0003\u0002\u0002\u0002\u0109\u00e4",
    "\u0003\u0002\u0002\u0002\u0109\u00f0\u0003\u0002\u0002\u0002\u010a%",
    "\u0003\u0002\u0002\u0002\u010b\u010c\u0007&\u0002\u0002\u010c\u010d",
    "\u0005\u001e\u0010\u0002\u010d\u010e\u0007\'\u0002\u0002\u010e\u0110",
    "\u0003\u0002\u0002\u0002\u010f\u010b\u0003\u0002\u0002\u0002\u0110\u0111",
    "\u0003\u0002\u0002\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0111\u0112",
    "\u0003\u0002\u0002\u0002\u0112\'\u0003\u0002\u0002\u0002!.CHPRX`dlr",
    "v~\u0086\u008e\u0095\u009d\u00a4\u00ad\u00ba\u00bd\u00c0\u00c6\u00cd",
    "\u00d2\u00dc\u00e2\u00ee\u00ff\u0107\u0109\u0111"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'function'", "'input'", "'local'", "'if'", "'then'", 
                     "'elif'", "'else'", "'fi'", "'return'", "'for'", "'while'", 
                     "'do'", "'od'", "'end'", "'in'", "'repeat'", "'until'", 
                     "'not'", "'or'", "'and'", "'='", "'<>'", "'>='", "'<='", 
                     "'^'", "'!'", "'>'", "'<'", "'+'", "'-'", "'*'", "'/'", 
                     "'%'", "'{'", "'}'", "'['", "']'", "'('", "')'", "';'", 
                     "':='", null, "','", "'.'", "'?'", "':'", "'->'", "'..'", 
                     "'!.'" ];

var symbolicNames = [ null, "Function", "Input", "Local", "If", "Then", 
                      "Elif", "Else", "Fi", "Return", "For", "While", "Do", 
                      "Od", "End", "In", "Repeat", "Until", "Not", "Or", 
                      "And", "Equals", "NEquals", "GTEquals", "LTEquals", 
                      "Pow", "Excl", "GT", "LT", "Plus", "Minus", "Star", 
                      "Slash", "Modulus", "OBrace", "CBrace", "OBracket", 
                      "CBracket", "OParen", "CParen", "SemiColon", "Assign", 
                      "Comparison", "Comma", "Dot", "QuestionMark", "Colon", 
                      "ShortHandFunction", "Range", "ComponentObject", "Boolean", 
                      "Number", "Quote", "TrippleQuote", "Identifier", "Comment", 
                      "Space", "EOL" ];

var ruleNames =  [ "parse", "block", "statement", "functionDecl", "doStatement", 
                   "ifStatement", "ifStat", "elseIfStat", "elseStat", "forStatement", 
                   "whileStatement", "repeatStatement", "idList", "exprList", 
                   "expression", "list", "tuple", "listEvaluation", "indexes" ];

function gapParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

gapParser.prototype = Object.create(antlr4.Parser.prototype);
gapParser.prototype.constructor = gapParser;

Object.defineProperty(gapParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

gapParser.EOF = antlr4.Token.EOF;
gapParser.Function = 1;
gapParser.Input = 2;
gapParser.Local = 3;
gapParser.If = 4;
gapParser.Then = 5;
gapParser.Elif = 6;
gapParser.Else = 7;
gapParser.Fi = 8;
gapParser.Return = 9;
gapParser.For = 10;
gapParser.While = 11;
gapParser.Do = 12;
gapParser.Od = 13;
gapParser.End = 14;
gapParser.In = 15;
gapParser.Repeat = 16;
gapParser.Until = 17;
gapParser.Not = 18;
gapParser.Or = 19;
gapParser.And = 20;
gapParser.Equals = 21;
gapParser.NEquals = 22;
gapParser.GTEquals = 23;
gapParser.LTEquals = 24;
gapParser.Pow = 25;
gapParser.Excl = 26;
gapParser.GT = 27;
gapParser.LT = 28;
gapParser.Plus = 29;
gapParser.Minus = 30;
gapParser.Star = 31;
gapParser.Slash = 32;
gapParser.Modulus = 33;
gapParser.OBrace = 34;
gapParser.CBrace = 35;
gapParser.OBracket = 36;
gapParser.CBracket = 37;
gapParser.OParen = 38;
gapParser.CParen = 39;
gapParser.SemiColon = 40;
gapParser.Assign = 41;
gapParser.Comparison = 42;
gapParser.Comma = 43;
gapParser.Dot = 44;
gapParser.QuestionMark = 45;
gapParser.Colon = 46;
gapParser.ShortHandFunction = 47;
gapParser.Range = 48;
gapParser.ComponentObject = 49;
gapParser.Boolean = 50;
gapParser.Number = 51;
gapParser.Quote = 52;
gapParser.TrippleQuote = 53;
gapParser.Identifier = 54;
gapParser.Comment = 55;
gapParser.Space = 56;
gapParser.EOL = 57;

gapParser.RULE_parse = 0;
gapParser.RULE_block = 1;
gapParser.RULE_statement = 2;
gapParser.RULE_functionDecl = 3;
gapParser.RULE_doStatement = 4;
gapParser.RULE_ifStatement = 5;
gapParser.RULE_ifStat = 6;
gapParser.RULE_elseIfStat = 7;
gapParser.RULE_elseStat = 8;
gapParser.RULE_forStatement = 9;
gapParser.RULE_whileStatement = 10;
gapParser.RULE_repeatStatement = 11;
gapParser.RULE_idList = 12;
gapParser.RULE_exprList = 13;
gapParser.RULE_expression = 14;
gapParser.RULE_list = 15;
gapParser.RULE_tuple = 16;
gapParser.RULE_listEvaluation = 17;
gapParser.RULE_indexes = 18;

function ParseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_parse;
    return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ParseContext.prototype.EOF = function() {
    return this.getToken(gapParser.EOF, 0);
};




gapParser.ParseContext = ParseContext;

gapParser.prototype.parse = function() {

    var localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, gapParser.RULE_parse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.block();
        this.state = 39;
        this.match(gapParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};




gapParser.BlockContext = BlockContext;

gapParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, gapParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 41;
            this.statement();
            this.state = 44; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Comparison - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)) | (1 << (gapParser.Identifier - 36)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

StatementContext.prototype.SemiColon = function() {
    return this.getToken(gapParser.SemiColon, 0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.forStatement = function() {
    return this.getTypedRuleContext(ForStatementContext,0);
};

StatementContext.prototype.whileStatement = function() {
    return this.getTypedRuleContext(WhileStatementContext,0);
};

StatementContext.prototype.doStatement = function() {
    return this.getTypedRuleContext(DoStatementContext,0);
};

StatementContext.prototype.repeatStatement = function() {
    return this.getTypedRuleContext(RepeatStatementContext,0);
};

StatementContext.prototype.TrippleQuote = function() {
    return this.getToken(gapParser.TrippleQuote, 0);
};




gapParser.StatementContext = StatementContext;

gapParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, gapParser.RULE_statement);
    try {
        this.state = 65;
        switch(this._input.LA(1)) {
        case gapParser.Function:
        case gapParser.Return:
        case gapParser.Not:
        case gapParser.Minus:
        case gapParser.OBracket:
        case gapParser.OParen:
        case gapParser.Comparison:
        case gapParser.Boolean:
        case gapParser.Number:
        case gapParser.Quote:
        case gapParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 46;
            this.expression(0);
            this.state = 47;
            this.match(gapParser.SemiColon);
            break;
        case gapParser.If:
            this.enterOuterAlt(localctx, 2);
            this.state = 49;
            this.ifStatement();
            this.state = 50;
            this.match(gapParser.SemiColon);
            break;
        case gapParser.For:
            this.enterOuterAlt(localctx, 3);
            this.state = 52;
            this.forStatement();
            this.state = 53;
            this.match(gapParser.SemiColon);
            break;
        case gapParser.While:
            this.enterOuterAlt(localctx, 4);
            this.state = 55;
            this.whileStatement();
            this.state = 56;
            this.match(gapParser.SemiColon);
            break;
        case gapParser.Do:
            this.enterOuterAlt(localctx, 5);
            this.state = 58;
            this.doStatement();
            this.state = 59;
            this.match(gapParser.SemiColon);
            break;
        case gapParser.Repeat:
            this.enterOuterAlt(localctx, 6);
            this.state = 61;
            this.repeatStatement();
            this.state = 62;
            this.match(gapParser.SemiColon);
            break;
        case gapParser.TrippleQuote:
            this.enterOuterAlt(localctx, 7);
            this.state = 64;
            this.match(gapParser.TrippleQuote);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_functionDecl;
    return this;
}

FunctionDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclContext.prototype.constructor = FunctionDeclContext;

FunctionDeclContext.prototype.Function = function() {
    return this.getToken(gapParser.Function, 0);
};

FunctionDeclContext.prototype.OParen = function() {
    return this.getToken(gapParser.OParen, 0);
};

FunctionDeclContext.prototype.CParen = function() {
    return this.getToken(gapParser.CParen, 0);
};

FunctionDeclContext.prototype.End = function() {
    return this.getToken(gapParser.End, 0);
};

FunctionDeclContext.prototype.idList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdListContext);
    } else {
        return this.getTypedRuleContext(IdListContext,i);
    }
};

FunctionDeclContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

FunctionDeclContext.prototype.Local = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Local);
    } else {
        return this.getToken(gapParser.Local, i);
    }
};


FunctionDeclContext.prototype.SemiColon = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.SemiColon);
    } else {
        return this.getToken(gapParser.SemiColon, i);
    }
};





gapParser.FunctionDeclContext = FunctionDeclContext;

gapParser.prototype.functionDecl = function() {

    var localctx = new FunctionDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, gapParser.RULE_functionDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(gapParser.Function);
        this.state = 68;
        this.match(gapParser.OParen);
        this.state = 70;
        _la = this._input.LA(1);
        if(_la===gapParser.Identifier) {
            this.state = 69;
            this.idList();
        }

        this.state = 72;
        this.match(gapParser.CParen);
        this.state = 78; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 78;
            switch(this._input.LA(1)) {
            case gapParser.Function:
            case gapParser.If:
            case gapParser.Return:
            case gapParser.For:
            case gapParser.While:
            case gapParser.Do:
            case gapParser.Repeat:
            case gapParser.Not:
            case gapParser.Minus:
            case gapParser.OBracket:
            case gapParser.OParen:
            case gapParser.Comparison:
            case gapParser.Boolean:
            case gapParser.Number:
            case gapParser.Quote:
            case gapParser.TrippleQuote:
            case gapParser.Identifier:
                this.state = 73;
                this.statement();
                break;
            case gapParser.Local:
                this.state = 74;
                this.match(gapParser.Local);
                this.state = 75;
                this.idList();
                this.state = 76;
                this.match(gapParser.SemiColon);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 80; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Local) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Comparison - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)) | (1 << (gapParser.Identifier - 36)))) !== 0));
        this.state = 82;
        this.match(gapParser.End);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DoStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_doStatement;
    return this;
}

DoStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DoStatementContext.prototype.constructor = DoStatementContext;

DoStatementContext.prototype.Do = function() {
    return this.getToken(gapParser.Do, 0);
};

DoStatementContext.prototype.Od = function() {
    return this.getToken(gapParser.Od, 0);
};

DoStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};




gapParser.DoStatementContext = DoStatementContext;

gapParser.prototype.doStatement = function() {

    var localctx = new DoStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, gapParser.RULE_doStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.match(gapParser.Do);
        this.state = 86;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Comparison - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)) | (1 << (gapParser.Identifier - 36)))) !== 0)) {
            this.state = 85;
            this.block();
        }

        this.state = 88;
        this.match(gapParser.Od);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.ifStat = function() {
    return this.getTypedRuleContext(IfStatContext,0);
};

IfStatementContext.prototype.Fi = function() {
    return this.getToken(gapParser.Fi, 0);
};

IfStatementContext.prototype.elseIfStat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElseIfStatContext);
    } else {
        return this.getTypedRuleContext(ElseIfStatContext,i);
    }
};

IfStatementContext.prototype.elseStat = function() {
    return this.getTypedRuleContext(ElseStatContext,0);
};




gapParser.IfStatementContext = IfStatementContext;

gapParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, gapParser.RULE_ifStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.ifStat();
        this.state = 94;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===gapParser.Elif) {
            this.state = 91;
            this.elseIfStat();
            this.state = 96;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 98;
        _la = this._input.LA(1);
        if(_la===gapParser.Else) {
            this.state = 97;
            this.elseStat();
        }

        this.state = 100;
        this.match(gapParser.Fi);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_ifStat;
    return this;
}

IfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatContext.prototype.constructor = IfStatContext;

IfStatContext.prototype.If = function() {
    return this.getToken(gapParser.If, 0);
};

IfStatContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStatContext.prototype.Then = function() {
    return this.getToken(gapParser.Then, 0);
};

IfStatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};




gapParser.IfStatContext = IfStatContext;

gapParser.prototype.ifStat = function() {

    var localctx = new IfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, gapParser.RULE_ifStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.match(gapParser.If);
        this.state = 103;
        this.expression(0);
        this.state = 104;
        this.match(gapParser.Then);
        this.state = 106;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Comparison - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)) | (1 << (gapParser.Identifier - 36)))) !== 0)) {
            this.state = 105;
            this.block();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseIfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_elseIfStat;
    return this;
}

ElseIfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseIfStatContext.prototype.constructor = ElseIfStatContext;

ElseIfStatContext.prototype.Elif = function() {
    return this.getToken(gapParser.Elif, 0);
};

ElseIfStatContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ElseIfStatContext.prototype.Then = function() {
    return this.getToken(gapParser.Then, 0);
};

ElseIfStatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};




gapParser.ElseIfStatContext = ElseIfStatContext;

gapParser.prototype.elseIfStat = function() {

    var localctx = new ElseIfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, gapParser.RULE_elseIfStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(gapParser.Elif);
        this.state = 109;
        this.expression(0);
        this.state = 110;
        this.match(gapParser.Then);
        this.state = 112;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Comparison - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)) | (1 << (gapParser.Identifier - 36)))) !== 0)) {
            this.state = 111;
            this.block();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_elseStat;
    return this;
}

ElseStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseStatContext.prototype.constructor = ElseStatContext;

ElseStatContext.prototype.Else = function() {
    return this.getToken(gapParser.Else, 0);
};

ElseStatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};




gapParser.ElseStatContext = ElseStatContext;

gapParser.prototype.elseStat = function() {

    var localctx = new ElseStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, gapParser.RULE_elseStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(gapParser.Else);
        this.state = 116;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Comparison - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)) | (1 << (gapParser.Identifier - 36)))) !== 0)) {
            this.state = 115;
            this.block();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_forStatement;
    return this;
}

ForStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStatementContext.prototype.constructor = ForStatementContext;

ForStatementContext.prototype.For = function() {
    return this.getToken(gapParser.For, 0);
};

ForStatementContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ForStatementContext.prototype.In = function() {
    return this.getToken(gapParser.In, 0);
};

ForStatementContext.prototype.Do = function() {
    return this.getToken(gapParser.Do, 0);
};

ForStatementContext.prototype.Od = function() {
    return this.getToken(gapParser.Od, 0);
};

ForStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};




gapParser.ForStatementContext = ForStatementContext;

gapParser.prototype.forStatement = function() {

    var localctx = new ForStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, gapParser.RULE_forStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.match(gapParser.For);
        this.state = 119;
        this.expression(0);
        this.state = 120;
        this.match(gapParser.In);
        this.state = 121;
        this.expression(0);
        this.state = 122;
        this.match(gapParser.Do);
        this.state = 124;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Comparison - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)) | (1 << (gapParser.Identifier - 36)))) !== 0)) {
            this.state = 123;
            this.block();
        }

        this.state = 126;
        this.match(gapParser.Od);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhileStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_whileStatement;
    return this;
}

WhileStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

WhileStatementContext.prototype.While = function() {
    return this.getToken(gapParser.While, 0);
};

WhileStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileStatementContext.prototype.Do = function() {
    return this.getToken(gapParser.Do, 0);
};

WhileStatementContext.prototype.Od = function() {
    return this.getToken(gapParser.Od, 0);
};

WhileStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};




gapParser.WhileStatementContext = WhileStatementContext;

gapParser.prototype.whileStatement = function() {

    var localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, gapParser.RULE_whileStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(gapParser.While);
        this.state = 129;
        this.expression(0);
        this.state = 130;
        this.match(gapParser.Do);
        this.state = 132;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Comparison - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)) | (1 << (gapParser.Identifier - 36)))) !== 0)) {
            this.state = 131;
            this.block();
        }

        this.state = 134;
        this.match(gapParser.Od);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RepeatStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_repeatStatement;
    return this;
}

RepeatStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepeatStatementContext.prototype.constructor = RepeatStatementContext;

RepeatStatementContext.prototype.Repeat = function() {
    return this.getToken(gapParser.Repeat, 0);
};

RepeatStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RepeatStatementContext.prototype.Until = function() {
    return this.getToken(gapParser.Until, 0);
};

RepeatStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};




gapParser.RepeatStatementContext = RepeatStatementContext;

gapParser.prototype.repeatStatement = function() {

    var localctx = new RepeatStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, gapParser.RULE_repeatStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.match(gapParser.Repeat);
        this.state = 137;
        this.expression(0);
        this.state = 138;
        this.match(gapParser.Until);
        this.state = 140;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Comparison - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)) | (1 << (gapParser.Identifier - 36)))) !== 0)) {
            this.state = 139;
            this.block();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_idList;
    return this;
}

IdListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdListContext.prototype.constructor = IdListContext;

IdListContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Identifier);
    } else {
        return this.getToken(gapParser.Identifier, i);
    }
};


IdListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Comma);
    } else {
        return this.getToken(gapParser.Comma, i);
    }
};





gapParser.IdListContext = IdListContext;

gapParser.prototype.idList = function() {

    var localctx = new IdListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, gapParser.RULE_idList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(gapParser.Identifier);
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===gapParser.Comma) {
            this.state = 143;
            this.match(gapParser.Comma);
            this.state = 144;
            this.match(gapParser.Identifier);
            this.state = 149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_exprList;
    return this;
}

ExprListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprListContext.prototype.constructor = ExprListContext;

ExprListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExprListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Comma);
    } else {
        return this.getToken(gapParser.Comma, i);
    }
};


ExprListContext.prototype.Colon = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Colon);
    } else {
        return this.getToken(gapParser.Colon, i);
    }
};


ExprListContext.prototype.Range = function() {
    return this.getToken(gapParser.Range, 0);
};




gapParser.ExprListContext = ExprListContext;

gapParser.prototype.exprList = function() {

    var localctx = new ExprListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, gapParser.RULE_exprList);
    var _la = 0; // Token type
    try {
        this.state = 162;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 150;
            this.expression(0);
            this.state = 155;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===gapParser.Comma || _la===gapParser.Colon) {
                this.state = 151;
                _la = this._input.LA(1);
                if(!(_la===gapParser.Comma || _la===gapParser.Colon)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
                this.state = 152;
                this.expression(0);
                this.state = 157;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 158;
            this.expression(0);
            this.state = 159;
            this.match(gapParser.Range);
            this.state = 160;
            this.expression(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function NewListEvaluationExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewListEvaluationExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NewListEvaluationExpressionContext.prototype.constructor = NewListEvaluationExpressionContext;

gapParser.NewListEvaluationExpressionContext = NewListEvaluationExpressionContext;

NewListEvaluationExpressionContext.prototype.listEvaluation = function() {
    return this.getTypedRuleContext(ListEvaluationContext,0);
};

function ComparisonObjectsContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComparisonObjectsContext.prototype = Object.create(ExpressionContext.prototype);
ComparisonObjectsContext.prototype.constructor = ComparisonObjectsContext;

gapParser.ComparisonObjectsContext = ComparisonObjectsContext;

ComparisonObjectsContext.prototype.Comparison = function() {
    return this.getToken(gapParser.Comparison, 0);
};

function NumberExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NumberExpressionContext.prototype.constructor = NumberExpressionContext;

gapParser.NumberExpressionContext = NumberExpressionContext;

NumberExpressionContext.prototype.Number = function() {
    return this.getToken(gapParser.Number, 0);
};

function ParenthesisExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesisExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ParenthesisExpressionContext.prototype.constructor = ParenthesisExpressionContext;

gapParser.ParenthesisExpressionContext = ParenthesisExpressionContext;

ParenthesisExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

function NotExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NotExpressionContext.prototype.constructor = NotExpressionContext;

gapParser.NotExpressionContext = NotExpressionContext;

NotExpressionContext.prototype.Not = function() {
    return this.getToken(gapParser.Not, 0);
};

NotExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

function FunctionDeclarationExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionDeclarationExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FunctionDeclarationExpressionContext.prototype.constructor = FunctionDeclarationExpressionContext;

gapParser.FunctionDeclarationExpressionContext = FunctionDeclarationExpressionContext;

FunctionDeclarationExpressionContext.prototype.functionDecl = function() {
    return this.getTypedRuleContext(FunctionDeclContext,0);
};

function BooleanExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BooleanExpressionContext.prototype.constructor = BooleanExpressionContext;

gapParser.BooleanExpressionContext = BooleanExpressionContext;

BooleanExpressionContext.prototype.Boolean = function() {
    return this.getToken(gapParser.Boolean, 0);
};

function UnaryMinusExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryMinusExpressionContext.prototype = Object.create(ExpressionContext.prototype);
UnaryMinusExpressionContext.prototype.constructor = UnaryMinusExpressionContext;

gapParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

UnaryMinusExpressionContext.prototype.Minus = function() {
    return this.getToken(gapParser.Minus, 0);
};

UnaryMinusExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

function StringExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringExpressionContext.prototype = Object.create(ExpressionContext.prototype);
StringExpressionContext.prototype.constructor = StringExpressionContext;

gapParser.StringExpressionContext = StringExpressionContext;

StringExpressionContext.prototype.Quote = function() {
    return this.getToken(gapParser.Quote, 0);
};

function CallExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CallExpressionContext.prototype = Object.create(ExpressionContext.prototype);
CallExpressionContext.prototype.constructor = CallExpressionContext;

gapParser.CallExpressionContext = CallExpressionContext;

CallExpressionContext.prototype.Identifier = function() {
    return this.getToken(gapParser.Identifier, 0);
};

CallExpressionContext.prototype.OParen = function() {
    return this.getToken(gapParser.OParen, 0);
};

CallExpressionContext.prototype.CParen = function() {
    return this.getToken(gapParser.CParen, 0);
};

CallExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};

CallExpressionContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};

function TupleDeclarationExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TupleDeclarationExpressionContext.prototype = Object.create(ExpressionContext.prototype);
TupleDeclarationExpressionContext.prototype.constructor = TupleDeclarationExpressionContext;

gapParser.TupleDeclarationExpressionContext = TupleDeclarationExpressionContext;

TupleDeclarationExpressionContext.prototype.tuple = function() {
    return this.getTypedRuleContext(TupleContext,0);
};

function OperationExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OperationExpressionContext.prototype = Object.create(ExpressionContext.prototype);
OperationExpressionContext.prototype.constructor = OperationExpressionContext;

gapParser.OperationExpressionContext = OperationExpressionContext;

OperationExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

OperationExpressionContext.prototype.Pow = function() {
    return this.getToken(gapParser.Pow, 0);
};

OperationExpressionContext.prototype.Star = function() {
    return this.getToken(gapParser.Star, 0);
};

OperationExpressionContext.prototype.Slash = function() {
    return this.getToken(gapParser.Slash, 0);
};

OperationExpressionContext.prototype.Modulus = function() {
    return this.getToken(gapParser.Modulus, 0);
};

OperationExpressionContext.prototype.Plus = function() {
    return this.getToken(gapParser.Plus, 0);
};

OperationExpressionContext.prototype.Minus = function() {
    return this.getToken(gapParser.Minus, 0);
};

OperationExpressionContext.prototype.GTEquals = function() {
    return this.getToken(gapParser.GTEquals, 0);
};

OperationExpressionContext.prototype.LTEquals = function() {
    return this.getToken(gapParser.LTEquals, 0);
};

OperationExpressionContext.prototype.GT = function() {
    return this.getToken(gapParser.GT, 0);
};

OperationExpressionContext.prototype.LT = function() {
    return this.getToken(gapParser.LT, 0);
};

OperationExpressionContext.prototype.Equals = function() {
    return this.getToken(gapParser.Equals, 0);
};

OperationExpressionContext.prototype.NEquals = function() {
    return this.getToken(gapParser.NEquals, 0);
};

OperationExpressionContext.prototype.And = function() {
    return this.getToken(gapParser.And, 0);
};

OperationExpressionContext.prototype.Or = function() {
    return this.getToken(gapParser.Or, 0);
};

OperationExpressionContext.prototype.In = function() {
    return this.getToken(gapParser.In, 0);
};

OperationExpressionContext.prototype.ComponentObject = function() {
    return this.getToken(gapParser.ComponentObject, 0);
};

OperationExpressionContext.prototype.Dot = function() {
    return this.getToken(gapParser.Dot, 0);
};

OperationExpressionContext.prototype.ShortHandFunction = function() {
    return this.getToken(gapParser.ShortHandFunction, 0);
};

OperationExpressionContext.prototype.Assign = function() {
    return this.getToken(gapParser.Assign, 0);
};

function ReturnExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReturnExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ReturnExpressionContext.prototype.constructor = ReturnExpressionContext;

gapParser.ReturnExpressionContext = ReturnExpressionContext;

ReturnExpressionContext.prototype.Return = function() {
    return this.getToken(gapParser.Return, 0);
};

ReturnExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

function ListExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ListExpressionContext.prototype.constructor = ListExpressionContext;

gapParser.ListExpressionContext = ListExpressionContext;

ListExpressionContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};


gapParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 28;
    this.enterRecursionRule(localctx, 28, gapParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryMinusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 165;
            this.match(gapParser.Minus);
            this.state = 166;
            this.expression(14);
            break;

        case 2:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 167;
            this.match(gapParser.Not);
            this.state = 168;
            this.expression(13);
            break;

        case 3:
            localctx = new ReturnExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 169;
            this.match(gapParser.Return);
            this.state = 171;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
            if(la_===1) {
                this.state = 170;
                this.expression(0);

            }
            break;

        case 4:
            localctx = new ListExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 173;
            this.list();
            break;

        case 5:
            localctx = new TupleDeclarationExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 174;
            this.tuple();
            break;

        case 6:
            localctx = new FunctionDeclarationExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 175;
            this.functionDecl();
            break;

        case 7:
            localctx = new NewListEvaluationExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 176;
            this.listEvaluation();
            break;

        case 8:
            localctx = new ComparisonObjectsContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 177;
            this.match(gapParser.Comparison);
            break;

        case 9:
            localctx = new NumberExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 178;
            this.match(gapParser.Number);
            break;

        case 10:
            localctx = new BooleanExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 179;
            this.match(gapParser.Boolean);
            break;

        case 11:
            localctx = new StringExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 180;
            this.match(gapParser.Quote);
            break;

        case 12:
            localctx = new CallExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 181;
            this.match(gapParser.Identifier);
            this.state = 187;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
            if(la_===1) {
                this.state = 182;
                this.match(gapParser.OParen);
                this.state = 184;
                _la = this._input.LA(1);
                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Return) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Comparison - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.Identifier - 36)))) !== 0)) {
                    this.state = 183;
                    this.exprList();
                }

                this.state = 186;
                this.match(gapParser.CParen);

            }
            this.state = 190;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
            if(la_===1) {
                this.state = 189;
                this.indexes();

            }
            break;

        case 13:
            localctx = new ParenthesisExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 192;
            this.match(gapParser.OParen);
            this.state = 193;
            this.expression(0);
            this.state = 194;
            this.match(gapParser.CParen);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 203;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new OperationExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                this.state = 198;
                if (!( this.precpred(this._ctx, 11))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                }
                this.state = 199;
                _la = this._input.LA(1);
                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.In) | (1 << gapParser.Or) | (1 << gapParser.And) | (1 << gapParser.Equals) | (1 << gapParser.NEquals) | (1 << gapParser.GTEquals) | (1 << gapParser.LTEquals) | (1 << gapParser.Pow) | (1 << gapParser.GT) | (1 << gapParser.LT) | (1 << gapParser.Plus) | (1 << gapParser.Minus) | (1 << gapParser.Star))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (gapParser.Slash - 32)) | (1 << (gapParser.Modulus - 32)) | (1 << (gapParser.Assign - 32)) | (1 << (gapParser.Dot - 32)) | (1 << (gapParser.ShortHandFunction - 32)) | (1 << (gapParser.ComponentObject - 32)))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
                this.state = 200;
                this.expression(12); 
            }
            this.state = 205;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.OBracket = function() {
    return this.getToken(gapParser.OBracket, 0);
};

ListContext.prototype.CBracket = function() {
    return this.getToken(gapParser.CBracket, 0);
};

ListContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};




gapParser.ListContext = ListContext;

gapParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, gapParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.match(gapParser.OBracket);
        this.state = 208;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Return) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Comparison - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.Identifier - 36)))) !== 0)) {
            this.state = 207;
            this.exprList();
        }

        this.state = 210;
        this.match(gapParser.CBracket);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TupleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_tuple;
    return this;
}

TupleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleContext.prototype.constructor = TupleContext;

TupleContext.prototype.OParen = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.OParen);
    } else {
        return this.getToken(gapParser.OParen, i);
    }
};


TupleContext.prototype.CParen = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.CParen);
    } else {
        return this.getToken(gapParser.CParen, i);
    }
};


TupleContext.prototype.Number = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Number);
    } else {
        return this.getToken(gapParser.Number, i);
    }
};


TupleContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Identifier);
    } else {
        return this.getToken(gapParser.Identifier, i);
    }
};


TupleContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Comma);
    } else {
        return this.getToken(gapParser.Comma, i);
    }
};





gapParser.TupleContext = TupleContext;

gapParser.prototype.tuple = function() {

    var localctx = new TupleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, gapParser.RULE_tuple);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 212;
        		this.match(gapParser.OParen);
        		this.state = 213;
        		_la = this._input.LA(1);
        		if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        		this._errHandler.recoverInline(this);
        		}
        		else {
        		    this.consume();
        		}
        		this.state = 218;
        		this._errHandler.sync(this);
        		_la = this._input.LA(1);
        		while(_la===gapParser.Comma) {
        		    this.state = 214;
        		    this.match(gapParser.Comma);
        		    this.state = 215;
        		    _la = this._input.LA(1);
        		    if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        		    this._errHandler.recoverInline(this);
        		    }
        		    else {
        		        this.consume();
        		    }
        		    this.state = 220;
        		    this._errHandler.sync(this);
        		    _la = this._input.LA(1);
        		}
        		this.state = 221;
        		this.match(gapParser.CParen);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 224; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,25, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListEvaluationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_listEvaluation;
    return this;
}

ListEvaluationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListEvaluationContext.prototype.constructor = ListEvaluationContext;

ListEvaluationContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Identifier);
    } else {
        return this.getToken(gapParser.Identifier, i);
    }
};


ListEvaluationContext.prototype.OBrace = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.OBrace);
    } else {
        return this.getToken(gapParser.OBrace, i);
    }
};


ListEvaluationContext.prototype.CBrace = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.CBrace);
    } else {
        return this.getToken(gapParser.CBrace, i);
    }
};


ListEvaluationContext.prototype.OBracket = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.OBracket);
    } else {
        return this.getToken(gapParser.OBracket, i);
    }
};


ListEvaluationContext.prototype.exprList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprListContext);
    } else {
        return this.getTypedRuleContext(ExprListContext,i);
    }
};

ListEvaluationContext.prototype.CBracket = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.CBracket);
    } else {
        return this.getToken(gapParser.CBracket, i);
    }
};


ListEvaluationContext.prototype.OParen = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.OParen);
    } else {
        return this.getToken(gapParser.OParen, i);
    }
};


ListEvaluationContext.prototype.CParen = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.CParen);
    } else {
        return this.getToken(gapParser.CParen, i);
    }
};


ListEvaluationContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Comma);
    } else {
        return this.getToken(gapParser.Comma, i);
    }
};





gapParser.ListEvaluationContext = ListEvaluationContext;

gapParser.prototype.listEvaluation = function() {

    var localctx = new ListEvaluationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, gapParser.RULE_listEvaluation);
    var _la = 0; // Token type
    try {
        this.state = 263;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 226;
            this.match(gapParser.Identifier);
            this.state = 234; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 227;
            		this.match(gapParser.OBrace);

            		this.state = 228;
            		this.match(gapParser.OBracket);
            		this.state = 229;
            		this.exprList();
            		this.state = 230;
            		this.match(gapParser.CBracket);
            		this.state = 232;
            		this.match(gapParser.CBrace);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 236; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,26, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 238;
            this.match(gapParser.Identifier);
            this.state = 259; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 239;
            		this.match(gapParser.OBrace);
            		this.state = 240;
            		this.match(gapParser.Identifier);
            		this.state = 241;
            		this.match(gapParser.OParen);

            		this.state = 242;
            		this.match(gapParser.OBracket);
            		this.state = 243;
            		this.exprList();
            		this.state = 244;
            		this.match(gapParser.CBracket);
            		this.state = 253;
            		this._errHandler.sync(this);
            		_la = this._input.LA(1);
            		while(_la===gapParser.Comma) {
            		    this.state = 246;
            		    this.match(gapParser.Comma);

            		    this.state = 247;
            		    this.match(gapParser.OBracket);
            		    this.state = 248;
            		    this.exprList();
            		    this.state = 249;
            		    this.match(gapParser.CBracket);
            		    this.state = 255;
            		    this._errHandler.sync(this);
            		    _la = this._input.LA(1);
            		}
            		this.state = 256;
            		this.match(gapParser.CParen);
            		this.state = 257;
            		this.match(gapParser.CBrace);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 261; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,28, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IndexesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_indexes;
    return this;
}

IndexesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndexesContext.prototype.constructor = IndexesContext;

IndexesContext.prototype.OBracket = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.OBracket);
    } else {
        return this.getToken(gapParser.OBracket, i);
    }
};


IndexesContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

IndexesContext.prototype.CBracket = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.CBracket);
    } else {
        return this.getToken(gapParser.CBracket, i);
    }
};





gapParser.IndexesContext = IndexesContext;

gapParser.prototype.indexes = function() {

    var localctx = new IndexesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, gapParser.RULE_indexes);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 265;
        		this.match(gapParser.OBracket);
        		this.state = 266;
        		this.expression(0);
        		this.state = 267;
        		this.match(gapParser.CBracket);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 271; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,30, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


gapParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 14:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

gapParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.gapParser = gapParser;
