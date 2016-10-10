// Generated from gap.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "gap.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00038\u0138\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003-",
    "\n\u0003\r\u0003\u000e\u0003.\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004I\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005N\n\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005V\n\u0005\r\u0005",
    "\u000e\u0005W\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0005",
    "\u0006^\n\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0007",
    "\u0007d\n\u0007\f\u0007\u000e\u0007g\u000b\u0007\u0003\u0007\u0005\u0007",
    "j\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\br\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tx\n\t\u0003\n\u0003\n",
    "\u0005\n|\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u0084\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u008c\n\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0005\r\u0094\n\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0007\u000e\u0099\n\u000e\f\u000e\u000e\u000e\u009c\u000b",
    "\u000e\u0003\u000f\u0003\u000f\u0005\u000f\u00a0\n\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u00a5\n\u000f\u0007\u000f\u00a7",
    "\n\u000f\f\u000f\u000e\u000f\u00aa\u000b\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u00b0\n\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u00bb\n\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u00c6\n\u0010\u0003\u0010\u0005\u0010\u00c9",
    "\n\u0010\u0003\u0010\u0005\u0010\u00cc\n\u0010\u0005\u0010\u00ce\n\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0007\u0010\u0100\n\u0010\f\u0010\u000e\u0010\u0103\u000b\u0010\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u0107\n\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u010f\n",
    "\u0012\f\u0012\u000e\u0012\u0112\u000b\u0012\u0003\u0012\u0006\u0012",
    "\u0115\n\u0012\r\u0012\u000e\u0012\u0116\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007",
    "\u0013\u0121\n\u0013\f\u0013\u000e\u0013\u0124\u000b\u0013\u0005\u0013",
    "\u0126\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0006",
    "\u0013\u012c\n\u0013\r\u0013\u000e\u0013\u012d\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0006\u0014\u0134\n\u0014\r\u0014\u000e\u0014",
    "\u0135\u0003\u0014\u0002\u0003\u001e\u0015\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0002\u0004\u0004",
    "\u0002,,..\u0003\u000223\u0162\u0002(\u0003\u0002\u0002\u0002\u0004",
    ",\u0003\u0002\u0002\u0002\u0006H\u0003\u0002\u0002\u0002\bJ\u0003\u0002",
    "\u0002\u0002\n[\u0003\u0002\u0002\u0002\fa\u0003\u0002\u0002\u0002\u000e",
    "m\u0003\u0002\u0002\u0002\u0010s\u0003\u0002\u0002\u0002\u0012y\u0003",
    "\u0002\u0002\u0002\u0014}\u0003\u0002\u0002\u0002\u0016\u0087\u0003",
    "\u0002\u0002\u0002\u0018\u008f\u0003\u0002\u0002\u0002\u001a\u0095\u0003",
    "\u0002\u0002\u0002\u001c\u00af\u0003\u0002\u0002\u0002\u001e\u00cd\u0003",
    "\u0002\u0002\u0002 \u0104\u0003\u0002\u0002\u0002\"\u0114\u0003\u0002",
    "\u0002\u0002$\u0118\u0003\u0002\u0002\u0002&\u0133\u0003\u0002\u0002",
    "\u0002()\u0005\u0004\u0003\u0002)*\u0007\u0002\u0002\u0003*\u0003\u0003",
    "\u0002\u0002\u0002+-\u0005\u0006\u0004\u0002,+\u0003\u0002\u0002\u0002",
    "-.\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002",
    "\u0002/\u0005\u0003\u0002\u0002\u000201\u0005\u001e\u0010\u000212\u0007",
    "*\u0002\u00022I\u0003\u0002\u0002\u000234\u0005\u001e\u0010\u000245",
    "\u0007+\u0002\u000256\u0005\u001e\u0010\u000267\u0007*\u0002\u00027",
    "I\u0003\u0002\u0002\u000289\u0005\f\u0007\u00029:\u0007*\u0002\u0002",
    ":I\u0003\u0002\u0002\u0002;<\u0005\u0014\u000b\u0002<=\u0007*\u0002",
    "\u0002=I\u0003\u0002\u0002\u0002>?\u0005\u0016\f\u0002?@\u0007*\u0002",
    "\u0002@I\u0003\u0002\u0002\u0002AB\u0005\n\u0006\u0002BC\u0007*\u0002",
    "\u0002CI\u0003\u0002\u0002\u0002DE\u0005\u0018\r\u0002EF\u0007*\u0002",
    "\u0002FI\u0003\u0002\u0002\u0002GI\u00075\u0002\u0002H0\u0003\u0002",
    "\u0002\u0002H3\u0003\u0002\u0002\u0002H8\u0003\u0002\u0002\u0002H;\u0003",
    "\u0002\u0002\u0002H>\u0003\u0002\u0002\u0002HA\u0003\u0002\u0002\u0002",
    "HD\u0003\u0002\u0002\u0002HG\u0003\u0002\u0002\u0002I\u0007\u0003\u0002",
    "\u0002\u0002JK\u0007\u0003\u0002\u0002KM\u0007(\u0002\u0002LN\u0005",
    "\u001a\u000e\u0002ML\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002",
    "NO\u0003\u0002\u0002\u0002OU\u0007)\u0002\u0002PV\u0005\u0006\u0004",
    "\u0002QR\u0007\u0005\u0002\u0002RS\u0005\u001a\u000e\u0002ST\u0007*",
    "\u0002\u0002TV\u0003\u0002\u0002\u0002UP\u0003\u0002\u0002\u0002UQ\u0003",
    "\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002",
    "WX\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002YZ\u0007\u0010\u0002",
    "\u0002Z\t\u0003\u0002\u0002\u0002[]\u0007\u000e\u0002\u0002\\^\u0005",
    "\u0004\u0003\u0002]\\\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002",
    "^_\u0003\u0002\u0002\u0002_`\u0007\u000f\u0002\u0002`\u000b\u0003\u0002",
    "\u0002\u0002ae\u0005\u000e\b\u0002bd\u0005\u0010\t\u0002cb\u0003\u0002",
    "\u0002\u0002dg\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002ef\u0003",
    "\u0002\u0002\u0002fi\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002",
    "hj\u0005\u0012\n\u0002ih\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002",
    "\u0002jk\u0003\u0002\u0002\u0002kl\u0007\n\u0002\u0002l\r\u0003\u0002",
    "\u0002\u0002mn\u0007\u0006\u0002\u0002no\u0005\u001e\u0010\u0002oq\u0007",
    "\u0007\u0002\u0002pr\u0005\u0004\u0003\u0002qp\u0003\u0002\u0002\u0002",
    "qr\u0003\u0002\u0002\u0002r\u000f\u0003\u0002\u0002\u0002st\u0007\b",
    "\u0002\u0002tu\u0005\u001e\u0010\u0002uw\u0007\u0007\u0002\u0002vx\u0005",
    "\u0004\u0003\u0002wv\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002",
    "x\u0011\u0003\u0002\u0002\u0002y{\u0007\t\u0002\u0002z|\u0005\u0004",
    "\u0003\u0002{z\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u0013",
    "\u0003\u0002\u0002\u0002}~\u0007\f\u0002\u0002~\u007f\u0005\u001e\u0010",
    "\u0002\u007f\u0080\u0007\u0011\u0002\u0002\u0080\u0081\u0005\u001e\u0010",
    "\u0002\u0081\u0083\u0007\u000e\u0002\u0002\u0082\u0084\u0005\u0004\u0003",
    "\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002",
    "\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0086\u0007\u000f\u0002",
    "\u0002\u0086\u0015\u0003\u0002\u0002\u0002\u0087\u0088\u0007\r\u0002",
    "\u0002\u0088\u0089\u0005\u001e\u0010\u0002\u0089\u008b\u0007\u000e\u0002",
    "\u0002\u008a\u008c\u0005\u0004\u0003\u0002\u008b\u008a\u0003\u0002\u0002",
    "\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0007\u000f\u0002\u0002\u008e\u0017\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0007\u0012\u0002\u0002\u0090\u0091\u0005\u001e\u0010",
    "\u0002\u0091\u0093\u0007\u0013\u0002\u0002\u0092\u0094\u0005\u0004\u0003",
    "\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002",
    "\u0002\u0094\u0019\u0003\u0002\u0002\u0002\u0095\u009a\u00073\u0002",
    "\u0002\u0096\u0097\u0007,\u0002\u0002\u0097\u0099\u00073\u0002\u0002",
    "\u0098\u0096\u0003\u0002\u0002\u0002\u0099\u009c\u0003\u0002\u0002\u0002",
    "\u009a\u0098\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002",
    "\u009b\u001b\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002",
    "\u009d\u00a0\u0005\u001e\u0010\u0002\u009e\u00a0\u0005\b\u0005\u0002",
    "\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u009e\u0003\u0002\u0002\u0002",
    "\u00a0\u00a8\u0003\u0002\u0002\u0002\u00a1\u00a4\t\u0002\u0002\u0002",
    "\u00a2\u00a5\u0005\u001e\u0010\u0002\u00a3\u00a5\u0005\b\u0005\u0002",
    "\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002",
    "\u00a5\u00a7\u0003\u0002\u0002\u0002\u00a6\u00a1\u0003\u0002\u0002\u0002",
    "\u00a7\u00aa\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00b0\u0003\u0002\u0002\u0002",
    "\u00aa\u00a8\u0003\u0002\u0002\u0002\u00ab\u00ac\u0005\u001e\u0010\u0002",
    "\u00ac\u00ad\u00070\u0002\u0002\u00ad\u00ae\u0005\u001e\u0010\u0002",
    "\u00ae\u00b0\u0003\u0002\u0002\u0002\u00af\u009f\u0003\u0002\u0002\u0002",
    "\u00af\u00ab\u0003\u0002\u0002\u0002\u00b0\u001d\u0003\u0002\u0002\u0002",
    "\u00b1\u00b2\b\u0010\u0001\u0002\u00b2\u00b3\u0007 \u0002\u0002\u00b3",
    "\u00ce\u0005\u001e\u0010\u001d\u00b4\u00b5\u0007\u0014\u0002\u0002\u00b5",
    "\u00ce\u0005\u001e\u0010\u001c\u00b6\u00b7\u0007\u000b\u0002\u0002\u00b7",
    "\u00ce\u0005\u001e\u0010\u001b\u00b8\u00ba\u0005 \u0011\u0002\u00b9",
    "\u00bb\u0005&\u0014\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002\u00ba",
    "\u00bb\u0003\u0002\u0002\u0002\u00bb\u00ce\u0003\u0002\u0002\u0002\u00bc",
    "\u00ce\u0005\"\u0012\u0002\u00bd\u00ce\u0005\b\u0005\u0002\u00be\u00ce",
    "\u0005$\u0013\u0002\u00bf\u00ce\u00072\u0002\u0002\u00c0\u00ce\u0007",
    "1\u0002\u0002\u00c1\u00ce\u00074\u0002\u0002\u00c2\u00c8\u00073\u0002",
    "\u0002\u00c3\u00c5\u0007(\u0002\u0002\u00c4\u00c6\u0005\u001c\u000f",
    "\u0002\u00c5\u00c4\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002",
    "\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u00c9\u0007)\u0002",
    "\u0002\u00c8\u00c3\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002",
    "\u0002\u00c9\u00cb\u0003\u0002\u0002\u0002\u00ca\u00cc\u0005&\u0014",
    "\u0002\u00cb\u00ca\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002",
    "\u0002\u00cc\u00ce\u0003\u0002\u0002\u0002\u00cd\u00b1\u0003\u0002\u0002",
    "\u0002\u00cd\u00b4\u0003\u0002\u0002\u0002\u00cd\u00b6\u0003\u0002\u0002",
    "\u0002\u00cd\u00b8\u0003\u0002\u0002\u0002\u00cd\u00bc\u0003\u0002\u0002",
    "\u0002\u00cd\u00bd\u0003\u0002\u0002\u0002\u00cd\u00be\u0003\u0002\u0002",
    "\u0002\u00cd\u00bf\u0003\u0002\u0002\u0002\u00cd\u00c0\u0003\u0002\u0002",
    "\u0002\u00cd\u00c1\u0003\u0002\u0002\u0002\u00cd\u00c2\u0003\u0002\u0002",
    "\u0002\u00ce\u0101\u0003\u0002\u0002\u0002\u00cf\u00d0\f\u001a\u0002",
    "\u0002\u00d0\u00d1\u0007\u001b\u0002\u0002\u00d1\u0100\u0005\u001e\u0010",
    "\u001b\u00d2\u00d3\f\u0019\u0002\u0002\u00d3\u00d4\u0007!\u0002\u0002",
    "\u00d4\u0100\u0005\u001e\u0010\u001a\u00d5\u00d6\f\u0018\u0002\u0002",
    "\u00d6\u00d7\u0007\"\u0002\u0002\u00d7\u0100\u0005\u001e\u0010\u0019",
    "\u00d8\u00d9\f\u0017\u0002\u0002\u00d9\u00da\u0007#\u0002\u0002\u00da",
    "\u0100\u0005\u001e\u0010\u0018\u00db\u00dc\f\u0016\u0002\u0002\u00dc",
    "\u00dd\u0007\u001f\u0002\u0002\u00dd\u0100\u0005\u001e\u0010\u0017\u00de",
    "\u00df\f\u0015\u0002\u0002\u00df\u00e0\u0007 \u0002\u0002\u00e0\u0100",
    "\u0005\u001e\u0010\u0016\u00e1\u00e2\f\u0014\u0002\u0002\u00e2\u00e3",
    "\u0007\u0019\u0002\u0002\u00e3\u0100\u0005\u001e\u0010\u0015\u00e4\u00e5",
    "\f\u0013\u0002\u0002\u00e5\u00e6\u0007\u001a\u0002\u0002\u00e6\u0100",
    "\u0005\u001e\u0010\u0014\u00e7\u00e8\f\u0012\u0002\u0002\u00e8\u00e9",
    "\u0007\u001d\u0002\u0002\u00e9\u0100\u0005\u001e\u0010\u0013\u00ea\u00eb",
    "\f\u0011\u0002\u0002\u00eb\u00ec\u0007\u001e\u0002\u0002\u00ec\u0100",
    "\u0005\u001e\u0010\u0012\u00ed\u00ee\f\u0010\u0002\u0002\u00ee\u00ef",
    "\u0007\u0017\u0002\u0002\u00ef\u0100\u0005\u001e\u0010\u0011\u00f0\u00f1",
    "\f\u000f\u0002\u0002\u00f1\u00f2\u0007\u0018\u0002\u0002\u00f2\u0100",
    "\u0005\u001e\u0010\u0010\u00f3\u00f4\f\u000e\u0002\u0002\u00f4\u00f5",
    "\u0007\u0016\u0002\u0002\u00f5\u0100\u0005\u001e\u0010\u000f\u00f6\u00f7",
    "\f\r\u0002\u0002\u00f7\u00f8\u0007\u0015\u0002\u0002\u00f8\u0100\u0005",
    "\u001e\u0010\u000e\u00f9\u00fa\f\f\u0002\u0002\u00fa\u00fb\u0007/\u0002",
    "\u0002\u00fb\u0100\u0005\u001e\u0010\r\u00fc\u00fd\f\u000b\u0002\u0002",
    "\u00fd\u00fe\u0007\u0011\u0002\u0002\u00fe\u0100\u0005\u001e\u0010\f",
    "\u00ff\u00cf\u0003\u0002\u0002\u0002\u00ff\u00d2\u0003\u0002\u0002\u0002",
    "\u00ff\u00d5\u0003\u0002\u0002\u0002\u00ff\u00d8\u0003\u0002\u0002\u0002",
    "\u00ff\u00db\u0003\u0002\u0002\u0002\u00ff\u00de\u0003\u0002\u0002\u0002",
    "\u00ff\u00e1\u0003\u0002\u0002\u0002\u00ff\u00e4\u0003\u0002\u0002\u0002",
    "\u00ff\u00e7\u0003\u0002\u0002\u0002\u00ff\u00ea\u0003\u0002\u0002\u0002",
    "\u00ff\u00ed\u0003\u0002\u0002\u0002\u00ff\u00f0\u0003\u0002\u0002\u0002",
    "\u00ff\u00f3\u0003\u0002\u0002\u0002\u00ff\u00f6\u0003\u0002\u0002\u0002",
    "\u00ff\u00f9\u0003\u0002\u0002\u0002\u00ff\u00fc\u0003\u0002\u0002\u0002",
    "\u0100\u0103\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002",
    "\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u001f\u0003\u0002\u0002\u0002",
    "\u0103\u0101\u0003\u0002\u0002\u0002\u0104\u0106\u0007&\u0002\u0002",
    "\u0105\u0107\u0005\u001c\u000f\u0002\u0106\u0105\u0003\u0002\u0002\u0002",
    "\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002",
    "\u0108\u0109\u0007\'\u0002\u0002\u0109!\u0003\u0002\u0002\u0002\u010a",
    "\u010b\u0007(\u0002\u0002\u010b\u0110\t\u0003\u0002\u0002\u010c\u010d",
    "\u0007,\u0002\u0002\u010d\u010f\t\u0003\u0002\u0002\u010e\u010c\u0003",
    "\u0002\u0002\u0002\u010f\u0112\u0003\u0002\u0002\u0002\u0110\u010e\u0003",
    "\u0002\u0002\u0002\u0110\u0111\u0003\u0002\u0002\u0002\u0111\u0113\u0003",
    "\u0002\u0002\u0002\u0112\u0110\u0003\u0002\u0002\u0002\u0113\u0115\u0007",
    ")\u0002\u0002\u0114\u010a\u0003\u0002\u0002\u0002\u0115\u0116\u0003",
    "\u0002\u0002\u0002\u0116\u0114\u0003\u0002\u0002\u0002\u0116\u0117\u0003",
    "\u0002\u0002\u0002\u0117#\u0003\u0002\u0002\u0002\u0118\u012b\u0007",
    "3\u0002\u0002\u0119\u011a\u0007$\u0002\u0002\u011a\u011b\u0007&\u0002",
    "\u0002\u011b\u0125\u0005\u001e\u0010\u0002\u011c\u011d\u00070\u0002",
    "\u0002\u011d\u0126\u0005\u001e\u0010\u0002\u011e\u011f\u0007,\u0002",
    "\u0002\u011f\u0121\u0005\u001e\u0010\u0002\u0120\u011e\u0003\u0002\u0002",
    "\u0002\u0121\u0124\u0003\u0002\u0002\u0002\u0122\u0120\u0003\u0002\u0002",
    "\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0123\u0126\u0003\u0002\u0002",
    "\u0002\u0124\u0122\u0003\u0002\u0002\u0002\u0125\u011c\u0003\u0002\u0002",
    "\u0002\u0125\u0122\u0003\u0002\u0002\u0002\u0126\u0127\u0003\u0002\u0002",
    "\u0002\u0127\u0128\u0007\'\u0002\u0002\u0128\u0129\u0003\u0002\u0002",
    "\u0002\u0129\u012a\u0007%\u0002\u0002\u012a\u012c\u0003\u0002\u0002",
    "\u0002\u012b\u0119\u0003\u0002\u0002\u0002\u012c\u012d\u0003\u0002\u0002",
    "\u0002\u012d\u012b\u0003\u0002\u0002\u0002\u012d\u012e\u0003\u0002\u0002",
    "\u0002\u012e%\u0003\u0002\u0002\u0002\u012f\u0130\u0007&\u0002\u0002",
    "\u0130\u0131\u0005\u001e\u0010\u0002\u0131\u0132\u0007\'\u0002\u0002",
    "\u0132\u0134\u0003\u0002\u0002\u0002\u0133\u012f\u0003\u0002\u0002\u0002",
    "\u0134\u0135\u0003\u0002\u0002\u0002\u0135\u0133\u0003\u0002\u0002\u0002",
    "\u0135\u0136\u0003\u0002\u0002\u0002\u0136\'\u0003\u0002\u0002\u0002",
    "#.HMUW]eiqw{\u0083\u008b\u0093\u009a\u009f\u00a4\u00a8\u00af\u00ba\u00c5",
    "\u00c8\u00cb\u00cd\u00ff\u0101\u0106\u0110\u0116\u0122\u0125\u012d\u0135"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'function'", "'input'", "'local'", "'if'", 
                     "'then'", "'elif'", "'else'", "'fi'", "'return'", "'for'", 
                     "'while'", "'do'", "'od'", "'end'", "'in'", "'repeat'", 
                     "'until'", "'not'", "'or'", "'and'", "'='", "'<>'", 
                     "'>='", "'<='", "'^'", "'!'", "'>'", "'<'", "'+'", 
                     "'-'", "'*'", "'/'", "'%'", "'{'", "'}'", "'['", "']'", 
                     "'('", "')'", "';'", "':='", "','", "'?'", "':'", "'->'", 
                     "'..'" ];

var symbolicNames = [ 'null', "Function", "Input", "Local", "If", "Then", 
                      "Elif", "Else", "Fi", "Return", "For", "While", "Do", 
                      "Od", "End", "In", "Repeat", "Until", "Not", "Or", 
                      "And", "Equals", "NEquals", "GTEquals", "LTEquals", 
                      "Pow", "Excl", "GT", "LT", "Plus", "Minus", "Star", 
                      "Slash", "Modulus", "OBrace", "CBrace", "OBracket", 
                      "CBracket", "OParen", "CParen", "SemiColon", "Assign", 
                      "Comma", "QuestionMark", "Colon", "ShortHandFunction", 
                      "Range", "Boolean", "Number", "Identifier", "Quote", 
                      "TrippleQuote", "Comment", "Space", "EOL" ];

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
gapParser.Comma = 42;
gapParser.QuestionMark = 43;
gapParser.Colon = 44;
gapParser.ShortHandFunction = 45;
gapParser.Range = 46;
gapParser.Boolean = 47;
gapParser.Number = 48;
gapParser.Identifier = 49;
gapParser.Quote = 50;
gapParser.TrippleQuote = 51;
gapParser.Comment = 52;
gapParser.Space = 53;
gapParser.EOL = 54;

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
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Identifier - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)))) !== 0));
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

StatementContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

StatementContext.prototype.SemiColon = function() {
    return this.getToken(gapParser.SemiColon, 0);
};

StatementContext.prototype.Assign = function() {
    return this.getToken(gapParser.Assign, 0);
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
        this.state = 70;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 46;
            this.expression(0);
            this.state = 47;
            this.match(gapParser.SemiColon);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 49;
            this.expression(0);
            this.state = 50;
            this.match(gapParser.Assign);
            this.state = 51;
            this.expression(0);
            this.state = 52;
            this.match(gapParser.SemiColon);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 54;
            this.ifStatement();
            this.state = 55;
            this.match(gapParser.SemiColon);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 57;
            this.forStatement();
            this.state = 58;
            this.match(gapParser.SemiColon);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 60;
            this.whileStatement();
            this.state = 61;
            this.match(gapParser.SemiColon);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 63;
            this.doStatement();
            this.state = 64;
            this.match(gapParser.SemiColon);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 66;
            this.repeatStatement();
            this.state = 67;
            this.match(gapParser.SemiColon);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 69;
            this.match(gapParser.TrippleQuote);
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
        this.state = 72;
        this.match(gapParser.Function);
        this.state = 73;
        this.match(gapParser.OParen);
        this.state = 75;
        _la = this._input.LA(1);
        if(_la===gapParser.Identifier) {
            this.state = 74;
            this.idList();
        }

        this.state = 77;
        this.match(gapParser.CParen);
        this.state = 83; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 83;
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
            case gapParser.Boolean:
            case gapParser.Number:
            case gapParser.Identifier:
            case gapParser.Quote:
            case gapParser.TrippleQuote:
                this.state = 78;
                this.statement();
                break;
            case gapParser.Local:
                this.state = 79;
                this.match(gapParser.Local);
                this.state = 80;
                this.idList();
                this.state = 81;
                this.match(gapParser.SemiColon);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 85; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Local) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Identifier - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)))) !== 0));
        this.state = 87;
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
        this.state = 89;
        this.match(gapParser.Do);
        this.state = 91;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Identifier - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)))) !== 0)) {
            this.state = 90;
            this.block();
        }

        this.state = 93;
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
        this.state = 95;
        this.ifStat();
        this.state = 99;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===gapParser.Elif) {
            this.state = 96;
            this.elseIfStat();
            this.state = 101;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 103;
        _la = this._input.LA(1);
        if(_la===gapParser.Else) {
            this.state = 102;
            this.elseStat();
        }

        this.state = 105;
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
        this.state = 107;
        this.match(gapParser.If);
        this.state = 108;
        this.expression(0);
        this.state = 109;
        this.match(gapParser.Then);
        this.state = 111;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Identifier - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)))) !== 0)) {
            this.state = 110;
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
        this.state = 113;
        this.match(gapParser.Elif);
        this.state = 114;
        this.expression(0);
        this.state = 115;
        this.match(gapParser.Then);
        this.state = 117;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Identifier - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)))) !== 0)) {
            this.state = 116;
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
        this.state = 119;
        this.match(gapParser.Else);
        this.state = 121;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Identifier - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)))) !== 0)) {
            this.state = 120;
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
        this.state = 123;
        this.match(gapParser.For);
        this.state = 124;
        this.expression(0);
        this.state = 125;
        this.match(gapParser.In);
        this.state = 126;
        this.expression(0);
        this.state = 127;
        this.match(gapParser.Do);
        this.state = 129;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Identifier - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)))) !== 0)) {
            this.state = 128;
            this.block();
        }

        this.state = 131;
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
        this.state = 133;
        this.match(gapParser.While);
        this.state = 134;
        this.expression(0);
        this.state = 135;
        this.match(gapParser.Do);
        this.state = 137;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Identifier - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)))) !== 0)) {
            this.state = 136;
            this.block();
        }

        this.state = 139;
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
        this.state = 141;
        this.match(gapParser.Repeat);
        this.state = 142;
        this.expression(0);
        this.state = 143;
        this.match(gapParser.Until);
        this.state = 145;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Identifier - 36)) | (1 << (gapParser.Quote - 36)) | (1 << (gapParser.TrippleQuote - 36)))) !== 0)) {
            this.state = 144;
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
        this.state = 147;
        this.match(gapParser.Identifier);
        this.state = 152;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===gapParser.Comma) {
            this.state = 148;
            this.match(gapParser.Comma);
            this.state = 149;
            this.match(gapParser.Identifier);
            this.state = 154;
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

ExprListContext.prototype.functionDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionDeclContext);
    } else {
        return this.getTypedRuleContext(FunctionDeclContext,i);
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
        this.state = 173;
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 157;
            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
            switch(la_) {
            case 1:
                this.state = 155;
                this.expression(0);
                break;

            case 2:
                this.state = 156;
                this.functionDecl();
                break;

            }
            this.state = 166;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===gapParser.Comma || _la===gapParser.Colon) {
                this.state = 159;
                _la = this._input.LA(1);
                if(!(_la===gapParser.Comma || _la===gapParser.Colon)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
                this.state = 162;
                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 160;
                    this.expression(0);
                    break;

                case 2:
                    this.state = 161;
                    this.functionDecl();
                    break;

                }
                this.state = 168;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 169;
            this.expression(0);
            this.state = 170;
            this.match(gapParser.Range);
            this.state = 171;
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

function GtExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GtExpressionContext.prototype = Object.create(ExpressionContext.prototype);
GtExpressionContext.prototype.constructor = GtExpressionContext;

gapParser.GtExpressionContext = GtExpressionContext;

GtExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

GtExpressionContext.prototype.GT = function() {
    return this.getToken(gapParser.GT, 0);
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

function ModulusExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ModulusExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ModulusExpressionContext.prototype.constructor = ModulusExpressionContext;

gapParser.ModulusExpressionContext = ModulusExpressionContext;

ModulusExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ModulusExpressionContext.prototype.Modulus = function() {
    return this.getToken(gapParser.Modulus, 0);
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

function MultiplyExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplyExpressionContext.prototype = Object.create(ExpressionContext.prototype);
MultiplyExpressionContext.prototype.constructor = MultiplyExpressionContext;

gapParser.MultiplyExpressionContext = MultiplyExpressionContext;

MultiplyExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MultiplyExpressionContext.prototype.Star = function() {
    return this.getToken(gapParser.Star, 0);
};

function GtEqExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GtEqExpressionContext.prototype = Object.create(ExpressionContext.prototype);
GtEqExpressionContext.prototype.constructor = GtEqExpressionContext;

gapParser.GtEqExpressionContext = GtEqExpressionContext;

GtEqExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

GtEqExpressionContext.prototype.GTEquals = function() {
    return this.getToken(gapParser.GTEquals, 0);
};

function AndExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AndExpressionContext.prototype.constructor = AndExpressionContext;

gapParser.AndExpressionContext = AndExpressionContext;

AndExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

AndExpressionContext.prototype.And = function() {
    return this.getToken(gapParser.And, 0);
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

function TupleDeclarationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TupleDeclarationContext.prototype = Object.create(ExpressionContext.prototype);
TupleDeclarationContext.prototype.constructor = TupleDeclarationContext;

gapParser.TupleDeclarationContext = TupleDeclarationContext;

TupleDeclarationContext.prototype.tuple = function() {
    return this.getTypedRuleContext(TupleContext,0);
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

ListExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};

function LtEqExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LtEqExpressionContext.prototype = Object.create(ExpressionContext.prototype);
LtEqExpressionContext.prototype.constructor = LtEqExpressionContext;

gapParser.LtEqExpressionContext = LtEqExpressionContext;

LtEqExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LtEqExpressionContext.prototype.LTEquals = function() {
    return this.getToken(gapParser.LTEquals, 0);
};

function LtExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LtExpressionContext.prototype = Object.create(ExpressionContext.prototype);
LtExpressionContext.prototype.constructor = LtExpressionContext;

gapParser.LtExpressionContext = LtExpressionContext;

LtExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LtExpressionContext.prototype.LT = function() {
    return this.getToken(gapParser.LT, 0);
};

function BoolExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BoolExpressionContext.prototype.constructor = BoolExpressionContext;

gapParser.BoolExpressionContext = BoolExpressionContext;

BoolExpressionContext.prototype.Boolean = function() {
    return this.getToken(gapParser.Boolean, 0);
};

function NotEqExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotEqExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NotEqExpressionContext.prototype.constructor = NotEqExpressionContext;

gapParser.NotEqExpressionContext = NotEqExpressionContext;

NotEqExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

NotEqExpressionContext.prototype.NEquals = function() {
    return this.getToken(gapParser.NEquals, 0);
};

function DivideExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivideExpressionContext.prototype = Object.create(ExpressionContext.prototype);
DivideExpressionContext.prototype.constructor = DivideExpressionContext;

gapParser.DivideExpressionContext = DivideExpressionContext;

DivideExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

DivideExpressionContext.prototype.Slash = function() {
    return this.getToken(gapParser.Slash, 0);
};

function NewListEvaluationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewListEvaluationContext.prototype = Object.create(ExpressionContext.prototype);
NewListEvaluationContext.prototype.constructor = NewListEvaluationContext;

gapParser.NewListEvaluationContext = NewListEvaluationContext;

NewListEvaluationContext.prototype.listEvaluation = function() {
    return this.getTypedRuleContext(ListEvaluationContext,0);
};

function OrExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExpressionContext.prototype = Object.create(ExpressionContext.prototype);
OrExpressionContext.prototype.constructor = OrExpressionContext;

gapParser.OrExpressionContext = OrExpressionContext;

OrExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

OrExpressionContext.prototype.Or = function() {
    return this.getToken(gapParser.Or, 0);
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

function PowerExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowerExpressionContext.prototype = Object.create(ExpressionContext.prototype);
PowerExpressionContext.prototype.constructor = PowerExpressionContext;

gapParser.PowerExpressionContext = PowerExpressionContext;

PowerExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

PowerExpressionContext.prototype.Pow = function() {
    return this.getToken(gapParser.Pow, 0);
};

function EqExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqExpressionContext.prototype = Object.create(ExpressionContext.prototype);
EqExpressionContext.prototype.constructor = EqExpressionContext;

gapParser.EqExpressionContext = EqExpressionContext;

EqExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

EqExpressionContext.prototype.Equals = function() {
    return this.getToken(gapParser.Equals, 0);
};

function InExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InExpressionContext.prototype = Object.create(ExpressionContext.prototype);
InExpressionContext.prototype.constructor = InExpressionContext;

gapParser.InExpressionContext = InExpressionContext;

InExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

InExpressionContext.prototype.In = function() {
    return this.getToken(gapParser.In, 0);
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

function ShorthandFunctionCallContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ShorthandFunctionCallContext.prototype = Object.create(ExpressionContext.prototype);
ShorthandFunctionCallContext.prototype.constructor = ShorthandFunctionCallContext;

gapParser.ShorthandFunctionCallContext = ShorthandFunctionCallContext;

ShorthandFunctionCallContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ShorthandFunctionCallContext.prototype.ShortHandFunction = function() {
    return this.getToken(gapParser.ShortHandFunction, 0);
};

function AddExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AddExpressionContext.prototype.constructor = AddExpressionContext;

gapParser.AddExpressionContext = AddExpressionContext;

AddExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

AddExpressionContext.prototype.Plus = function() {
    return this.getToken(gapParser.Plus, 0);
};

function SubtractExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubtractExpressionContext.prototype = Object.create(ExpressionContext.prototype);
SubtractExpressionContext.prototype.constructor = SubtractExpressionContext;

gapParser.SubtractExpressionContext = SubtractExpressionContext;

SubtractExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

SubtractExpressionContext.prototype.Minus = function() {
    return this.getToken(gapParser.Minus, 0);
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

function FunctionDeclarationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionDeclarationContext.prototype = Object.create(ExpressionContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

gapParser.FunctionDeclarationContext = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.functionDecl = function() {
    return this.getTypedRuleContext(FunctionDeclContext,0);
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
        this.state = 203;
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryMinusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 176;
            this.match(gapParser.Minus);
            this.state = 177;
            this.expression(27);
            break;

        case 2:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 178;
            this.match(gapParser.Not);
            this.state = 179;
            this.expression(26);
            break;

        case 3:
            localctx = new ReturnExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 180;
            this.match(gapParser.Return);
            this.state = 181;
            this.expression(25);
            break;

        case 4:
            localctx = new ListExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 182;
            this.list();
            this.state = 184;
            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
            if(la_===1) {
                this.state = 183;
                this.indexes();

            }
            break;

        case 5:
            localctx = new TupleDeclarationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 186;
            this.tuple();
            break;

        case 6:
            localctx = new FunctionDeclarationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 187;
            this.functionDecl();
            break;

        case 7:
            localctx = new NewListEvaluationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 188;
            this.listEvaluation();
            break;

        case 8:
            localctx = new NumberExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 189;
            this.match(gapParser.Number);
            break;

        case 9:
            localctx = new BoolExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 190;
            this.match(gapParser.Boolean);
            break;

        case 10:
            localctx = new StringExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 191;
            this.match(gapParser.Quote);
            break;

        case 11:
            localctx = new CallExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 192;
            this.match(gapParser.Identifier);
            this.state = 198;
            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
            if(la_===1) {
                this.state = 193;
                this.match(gapParser.OParen);
                this.state = 195;
                _la = this._input.LA(1);
                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Return) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Identifier - 36)) | (1 << (gapParser.Quote - 36)))) !== 0)) {
                    this.state = 194;
                    this.exprList();
                }

                this.state = 197;
                this.match(gapParser.CParen);

            }
            this.state = 201;
            var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
            if(la_===1) {
                this.state = 200;
                this.indexes();

            }
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 255;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 253;
                var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowerExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 205;
                    if (!( this.precpred(this._ctx, 24))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                    }
                    this.state = 206;
                    this.match(gapParser.Pow);
                    this.state = 207;
                    this.expression(25);
                    break;

                case 2:
                    localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 208;
                    if (!( this.precpred(this._ctx, 23))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                    }
                    this.state = 209;
                    this.match(gapParser.Star);
                    this.state = 210;
                    this.expression(24);
                    break;

                case 3:
                    localctx = new DivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 211;
                    if (!( this.precpred(this._ctx, 22))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                    }
                    this.state = 212;
                    this.match(gapParser.Slash);
                    this.state = 213;
                    this.expression(23);
                    break;

                case 4:
                    localctx = new ModulusExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 214;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
                    this.state = 215;
                    this.match(gapParser.Modulus);
                    this.state = 216;
                    this.expression(22);
                    break;

                case 5:
                    localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 217;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 218;
                    this.match(gapParser.Plus);
                    this.state = 219;
                    this.expression(21);
                    break;

                case 6:
                    localctx = new SubtractExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 220;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 221;
                    this.match(gapParser.Minus);
                    this.state = 222;
                    this.expression(20);
                    break;

                case 7:
                    localctx = new GtEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 223;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 224;
                    this.match(gapParser.GTEquals);
                    this.state = 225;
                    this.expression(19);
                    break;

                case 8:
                    localctx = new LtEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 226;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 227;
                    this.match(gapParser.LTEquals);
                    this.state = 228;
                    this.expression(18);
                    break;

                case 9:
                    localctx = new GtExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 229;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 230;
                    this.match(gapParser.GT);
                    this.state = 231;
                    this.expression(17);
                    break;

                case 10:
                    localctx = new LtExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 232;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 233;
                    this.match(gapParser.LT);
                    this.state = 234;
                    this.expression(16);
                    break;

                case 11:
                    localctx = new EqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 235;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 236;
                    this.match(gapParser.Equals);
                    this.state = 237;
                    this.expression(15);
                    break;

                case 12:
                    localctx = new NotEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 238;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 239;
                    this.match(gapParser.NEquals);
                    this.state = 240;
                    this.expression(14);
                    break;

                case 13:
                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 241;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 242;
                    this.match(gapParser.And);
                    this.state = 243;
                    this.expression(13);
                    break;

                case 14:
                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 244;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 245;
                    this.match(gapParser.Or);
                    this.state = 246;
                    this.expression(12);
                    break;

                case 15:
                    localctx = new ShorthandFunctionCallContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 247;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 248;
                    this.match(gapParser.ShortHandFunction);
                    this.state = 249;
                    this.expression(11);
                    break;

                case 16:
                    localctx = new InExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 250;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 251;
                    this.match(gapParser.In);
                    this.state = 252;
                    this.expression(10);
                    break;

                } 
            }
            this.state = 257;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
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
        this.state = 258;
        this.match(gapParser.OBracket);
        this.state = 260;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Return) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (gapParser.OBracket - 36)) | (1 << (gapParser.OParen - 36)) | (1 << (gapParser.Boolean - 36)) | (1 << (gapParser.Number - 36)) | (1 << (gapParser.Identifier - 36)) | (1 << (gapParser.Quote - 36)))) !== 0)) {
            this.state = 259;
            this.exprList();
        }

        this.state = 262;
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
        this.state = 274; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 264;
        		this.match(gapParser.OParen);
        		this.state = 265;
        		_la = this._input.LA(1);
        		if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        		this._errHandler.recoverInline(this);
        		}
        		else {
        		    this.consume();
        		}
        		this.state = 270;
        		this._errHandler.sync(this);
        		_la = this._input.LA(1);
        		while(_la===gapParser.Comma) {
        		    this.state = 266;
        		    this.match(gapParser.Comma);
        		    this.state = 267;
        		    _la = this._input.LA(1);
        		    if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        		    this._errHandler.recoverInline(this);
        		    }
        		    else {
        		        this.consume();
        		    }
        		    this.state = 272;
        		    this._errHandler.sync(this);
        		    _la = this._input.LA(1);
        		}
        		this.state = 273;
        		this.match(gapParser.CParen);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 276; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,28, this._ctx);
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

ListEvaluationContext.prototype.Identifier = function() {
    return this.getToken(gapParser.Identifier, 0);
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


ListEvaluationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
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


ListEvaluationContext.prototype.Range = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Range);
    } else {
        return this.getToken(gapParser.Range, i);
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
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        this.match(gapParser.Identifier);
        this.state = 297; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 279;
        		this.match(gapParser.OBrace);

        		this.state = 280;
        		this.match(gapParser.OBracket);
        		this.state = 281;
        		this.expression(0);
        		this.state = 291;
        		switch(this._input.LA(1)) {
        		case gapParser.Range:
        		    this.state = 282;
        		    this.match(gapParser.Range);
        		    this.state = 283;
        		    this.expression(0);
        		    break;
        		case gapParser.CBracket:
        		case gapParser.Comma:
        		    this.state = 288;
        		    this._errHandler.sync(this);
        		    _la = this._input.LA(1);
        		    while(_la===gapParser.Comma) {
        		        this.state = 284;
        		        this.match(gapParser.Comma);
        		        this.state = 285;
        		        this.expression(0);
        		        this.state = 290;
        		        this._errHandler.sync(this);
        		        _la = this._input.LA(1);
        		    }
        		    break;
        		default:
        		    throw new antlr4.error.NoViableAltException(this);
        		}
        		this.state = 293;
        		this.match(gapParser.CBracket);
        		this.state = 295;
        		this.match(gapParser.CBrace);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 299; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,31, this._ctx);
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
        this.state = 305; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 301;
        		this.match(gapParser.OBracket);
        		this.state = 302;
        		this.expression(0);
        		this.state = 303;
        		this.match(gapParser.CBracket);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 307; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,32, this._ctx);
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
			return this.precpred(this._ctx, 24);
		case 1:
			return this.precpred(this._ctx, 23);
		case 2:
			return this.precpred(this._ctx, 22);
		case 3:
			return this.precpred(this._ctx, 21);
		case 4:
			return this.precpred(this._ctx, 20);
		case 5:
			return this.precpred(this._ctx, 19);
		case 6:
			return this.precpred(this._ctx, 18);
		case 7:
			return this.precpred(this._ctx, 17);
		case 8:
			return this.precpred(this._ctx, 16);
		case 9:
			return this.precpred(this._ctx, 15);
		case 10:
			return this.precpred(this._ctx, 14);
		case 11:
			return this.precpred(this._ctx, 13);
		case 12:
			return this.precpred(this._ctx, 12);
		case 13:
			return this.precpred(this._ctx, 11);
		case 14:
			return this.precpred(this._ctx, 10);
		case 15:
			return this.precpred(this._ctx, 9);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.gapParser = gapParser;
