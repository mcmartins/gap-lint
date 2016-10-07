// Generated from gap.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "gap.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00038\u017a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0006\u00039\n\u0003\r\u0003\u000e\u0003",
    ":\u0003\u0004\u0003\u0004\u0005\u0004?\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "Z\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005_\n\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0006\u0007j\n\u0007\r\u0007\u000e\u0007",
    "k\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007q\n\u0007\f\u0007\u000e",
    "\u0007t\u000b\u0007\u0005\u0007v\n\u0007\u0003\b\u0003\b\u0003\b\u0005",
    "\b{\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0005\t\u0082\n\t\u0003",
    "\t\u0003\t\u0005\t\u0086\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0005\n",
    "\u008c\n\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0007\u000b\u0092",
    "\n\u000b\f\u000b\u000e\u000b\u0095\u000b\u000b\u0003\u000b\u0005\u000b",
    "\u0098\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0005\f\u00a0\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00a6\n",
    "\r\u0003\u000e\u0003\u000e\u0005\u000e\u00aa\n\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0007\u0010\u00b4\n\u0010\f\u0010\u000e\u0010\u00b7\u000b\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0007\u0011\u00bf\n\u0011\f\u0011\u000e\u0011\u00c2\u000b\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007",
    "\u0012\u00ca\n\u0012\f\u0012\u000e\u0012\u00cd\u000b\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00d4\n",
    "\u0013\f\u0013\u000e\u0013\u00d7\u000b\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0007\u0014\u00dc\n\u0014\f\u0014\u000e\u0014\u00df\u000b",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00f1",
    "\n\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00f5\n\u0015\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u00f9\n\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0005\u0015\u00ff\n\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u0104\n\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u010e\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0007\u0015\u0140\n\u0015\f\u0015\u000e\u0015",
    "\u0143\u000b\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u0147\n\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0007\u0017\u014f\n\u0017\f\u0017\u000e\u0017\u0152\u000b\u0017\u0003",
    "\u0017\u0006\u0017\u0155\n\u0017\r\u0017\u000e\u0017\u0156\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0007\u0018\u0161\n\u0018\f\u0018\u000e\u0018\u0164\u000b",
    "\u0018\u0005\u0018\u0166\n\u0018\u0003\u0018\u0003\u0018\u0006\u0018",
    "\u016a\n\u0018\r\u0018\u000e\u0018\u016b\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0006\u0019\u0174\n\u0019",
    "\r\u0019\u000e\u0019\u0175\u0003\u001a\u0003\u001a\u0003\u001a\u0002",
    "\u0003(\u001b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02\u0002\u0006\u0003\u000234\u0004",
    "\u0002--//\u0003\u000224\u0004\u0002\u001c\u001c $\u01ac\u00024\u0003",
    "\u0002\u0002\u0002\u00048\u0003\u0002\u0002\u0002\u0006Y\u0003\u0002",
    "\u0002\u0002\b[\u0003\u0002\u0002\u0002\nc\u0003\u0002\u0002\u0002\f",
    "e\u0003\u0002\u0002\u0002\u000ew\u0003\u0002\u0002\u0002\u0010~\u0003",
    "\u0002\u0002\u0002\u0012\u0089\u0003\u0002\u0002\u0002\u0014\u008f\u0003",
    "\u0002\u0002\u0002\u0016\u009b\u0003\u0002\u0002\u0002\u0018\u00a1\u0003",
    "\u0002\u0002\u0002\u001a\u00a7\u0003\u0002\u0002\u0002\u001c\u00ab\u0003",
    "\u0002\u0002\u0002\u001e\u00ad\u0003\u0002\u0002\u0002 \u00ba\u0003",
    "\u0002\u0002\u0002\"\u00c5\u0003\u0002\u0002\u0002$\u00d0\u0003\u0002",
    "\u0002\u0002&\u00d8\u0003\u0002\u0002\u0002(\u010d\u0003\u0002\u0002",
    "\u0002*\u0144\u0003\u0002\u0002\u0002,\u0154\u0003\u0002\u0002\u0002",
    ".\u0158\u0003\u0002\u0002\u00020\u0173\u0003\u0002\u0002\u00022\u0177",
    "\u0003\u0002\u0002\u000245\u0005\u0004\u0003\u000256\u0007\u0002\u0002",
    "\u00036\u0003\u0003\u0002\u0002\u000279\u0005\u0006\u0004\u000287\u0003",
    "\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002",
    ":;\u0003\u0002\u0002\u0002;\u0005\u0003\u0002\u0002\u0002<>\u0005(\u0015",
    "\u0002=?\u0007+\u0002\u0002>=\u0003\u0002\u0002\u0002>?\u0003\u0002",
    "\u0002\u0002?Z\u0003\u0002\u0002\u0002@A\u0005\n\u0006\u0002AB\u0007",
    "+\u0002\u0002BZ\u0003\u0002\u0002\u0002CD\u0005\f\u0007\u0002DE\u0007",
    "+\u0002\u0002EZ\u0003\u0002\u0002\u0002FG\u0005\u000e\b\u0002GH\u0007",
    "+\u0002\u0002HZ\u0003\u0002\u0002\u0002IJ\u0005\u0010\t\u0002JK\u0007",
    "+\u0002\u0002KZ\u0003\u0002\u0002\u0002LM\u0005\u0014\u000b\u0002MN",
    "\u0007+\u0002\u0002NZ\u0003\u0002\u0002\u0002OP\u0005\u001e\u0010\u0002",
    "PQ\u0007+\u0002\u0002QZ\u0003\u0002\u0002\u0002RS\u0005 \u0011\u0002",
    "ST\u0007+\u0002\u0002TZ\u0003\u0002\u0002\u0002UV\u0005\u0012\n\u0002",
    "VW\u0007+\u0002\u0002WZ\u0003\u0002\u0002\u0002XZ\u0005\"\u0012\u0002",
    "Y<\u0003\u0002\u0002\u0002Y@\u0003\u0002\u0002\u0002YC\u0003\u0002\u0002",
    "\u0002YF\u0003\u0002\u0002\u0002YI\u0003\u0002\u0002\u0002YL\u0003\u0002",
    "\u0002\u0002YO\u0003\u0002\u0002\u0002YR\u0003\u0002\u0002\u0002YU\u0003",
    "\u0002\u0002\u0002YX\u0003\u0002\u0002\u0002Z\u0007\u0003\u0002\u0002",
    "\u0002[^\u00074\u0002\u0002\\_\u00050\u0019\u0002]_\u0005*\u0016\u0002",
    "^\\\u0003\u0002\u0002\u0002^]\u0003\u0002\u0002\u0002^_\u0003\u0002",
    "\u0002\u0002_`\u0003\u0002\u0002\u0002`a\u0007\u0003\u0002\u0002ab\u0005",
    "(\u0015\u0002b\t\u0003\u0002\u0002\u0002cd\t\u0002\u0002\u0002d\u000b",
    "\u0003\u0002\u0002\u0002ei\t\u0002\u0002\u0002fg\u00052\u001a\u0002",
    "gh\t\u0002\u0002\u0002hj\u0003\u0002\u0002\u0002if\u0003\u0002\u0002",
    "\u0002jk\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002",
    "\u0002\u0002lu\u0003\u0002\u0002\u0002mr\u0007\u0018\u0002\u0002nq\u0005",
    "\f\u0007\u0002oq\u0005(\u0015\u0002pn\u0003\u0002\u0002\u0002po\u0003",
    "\u0002\u0002\u0002qt\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002",
    "rs\u0003\u0002\u0002\u0002sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002",
    "\u0002um\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002v\r\u0003",
    "\u0002\u0002\u0002wx\u00074\u0002\u0002xz\u0007)\u0002\u0002y{\u0005",
    "&\u0014\u0002zy\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{|",
    "\u0003\u0002\u0002\u0002|}\u0007*\u0002\u0002}\u000f\u0003\u0002\u0002",
    "\u0002~\u007f\u0007\u0004\u0002\u0002\u007f\u0081\u0007)\u0002\u0002",
    "\u0080\u0082\u0005$\u0013\u0002\u0081\u0080\u0003\u0002\u0002\u0002",
    "\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002",
    "\u0083\u0085\u0007*\u0002\u0002\u0084\u0086\u0005\u0004\u0003\u0002",
    "\u0085\u0084\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002",
    "\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0088\u0007\u0011\u0002\u0002",
    "\u0088\u0011\u0003\u0002\u0002\u0002\u0089\u008b\u0007\u000f\u0002\u0002",
    "\u008a\u008c\u0005\u0004\u0003\u0002\u008b\u008a\u0003\u0002\u0002\u0002",
    "\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002",
    "\u008d\u008e\u0007\u0010\u0002\u0002\u008e\u0013\u0003\u0002\u0002\u0002",
    "\u008f\u0093\u0005\u0016\f\u0002\u0090\u0092\u0005\u0018\r\u0002\u0091",
    "\u0090\u0003\u0002\u0002\u0002\u0092\u0095\u0003\u0002\u0002\u0002\u0093",
    "\u0091\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094",
    "\u0097\u0003\u0002\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0096",
    "\u0098\u0005\u001a\u000e\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0097",
    "\u0098\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099",
    "\u009a\u0005\u001c\u000f\u0002\u009a\u0015\u0003\u0002\u0002\u0002\u009b",
    "\u009c\u0007\u0007\u0002\u0002\u009c\u009d\u0005(\u0015\u0002\u009d",
    "\u009f\u0007\b\u0002\u0002\u009e\u00a0\u0005\u0004\u0003\u0002\u009f",
    "\u009e\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0",
    "\u0017\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\t\u0002\u0002\u00a2",
    "\u00a3\u0005(\u0015\u0002\u00a3\u00a5\u0007\b\u0002\u0002\u00a4\u00a6",
    "\u0005\u0004\u0003\u0002\u00a5\u00a4\u0003\u0002\u0002\u0002\u00a5\u00a6",
    "\u0003\u0002\u0002\u0002\u00a6\u0019\u0003\u0002\u0002\u0002\u00a7\u00a9",
    "\u0007\n\u0002\u0002\u00a8\u00aa\u0005\u0004\u0003\u0002\u00a9\u00a8",
    "\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u001b",
    "\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007\u000b\u0002\u0002\u00ac\u001d",
    "\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007\r\u0002\u0002\u00ae\u00af",
    "\u0005(\u0015\u0002\u00af\u00b0\u0007\u0012\u0002\u0002\u00b0\u00b1",
    "\u0005(\u0015\u0002\u00b1\u00b5\u0007\u000f\u0002\u0002\u00b2\u00b4",
    "\u0005\u0004\u0003\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b7",
    "\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b6",
    "\u0003\u0002\u0002\u0002\u00b6\u00b8\u0003\u0002\u0002\u0002\u00b7\u00b5",
    "\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\u0010\u0002\u0002\u00b9\u001f",
    "\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u000e\u0002\u0002\u00bb\u00bc",
    "\u0005(\u0015\u0002\u00bc\u00c0\u0007\u000f\u0002\u0002\u00bd\u00bf",
    "\u0005\u0004\u0003\u0002\u00be\u00bd\u0003\u0002\u0002\u0002\u00bf\u00c2",
    "\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1",
    "\u0003\u0002\u0002\u0002\u00c1\u00c3\u0003\u0002\u0002\u0002\u00c2\u00c0",
    "\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007\u0010\u0002\u0002\u00c4!",
    "\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007\u0013\u0002\u0002\u00c6\u00c7",
    "\u0005(\u0015\u0002\u00c7\u00cb\u0007\u0014\u0002\u0002\u00c8\u00ca",
    "\u0005\u0004\u0003\u0002\u00c9\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cd",
    "\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cb\u00cc",
    "\u0003\u0002\u0002\u0002\u00cc\u00ce\u0003\u0002\u0002\u0002\u00cd\u00cb",
    "\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007+\u0002\u0002\u00cf#\u0003",
    "\u0002\u0002\u0002\u00d0\u00d5\u00074\u0002\u0002\u00d1\u00d2\u0007",
    "-\u0002\u0002\u00d2\u00d4\u00074\u0002\u0002\u00d3\u00d1\u0003\u0002",
    "\u0002\u0002\u00d4\u00d7\u0003\u0002\u0002\u0002\u00d5\u00d3\u0003\u0002",
    "\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6%\u0003\u0002",
    "\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d8\u00dd\u0005(",
    "\u0015\u0002\u00d9\u00da\t\u0003\u0002\u0002\u00da\u00dc\u0005(\u0015",
    "\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00dc\u00df\u0003\u0002\u0002",
    "\u0002\u00dd\u00db\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002",
    "\u0002\u00de\'\u0003\u0002\u0002\u0002\u00df\u00dd\u0003\u0002\u0002",
    "\u0002\u00e0\u00e1\b\u0015\u0001\u0002\u00e1\u010e\u0005\b\u0005\u0002",
    "\u00e2\u00e3\u0007!\u0002\u0002\u00e3\u010e\u0005(\u0015#\u00e4\u00e5",
    "\u0007\u001d\u0002\u0002\u00e5\u010e\u0005(\u0015\"\u00e6\u00e7\u0007",
    "\u0015\u0002\u0002\u00e7\u010e\u0005(\u0015\u0011\u00e8\u010e\u0007",
    "3\u0002\u0002\u00e9\u00ea\t\u0002\u0002\u0002\u00ea\u00eb\u00071\u0002",
    "\u0002\u00eb\u010e\t\u0002\u0002\u0002\u00ec\u010e\u00072\u0002\u0002",
    "\u00ed\u010e\u00075\u0002\u0002\u00ee\u00f0\u0005\u000e\b\u0002\u00ef",
    "\u00f1\u00050\u0019\u0002\u00f0\u00ef\u0003\u0002\u0002\u0002\u00f0",
    "\u00f1\u0003\u0002\u0002\u0002\u00f1\u010e\u0003\u0002\u0002\u0002\u00f2",
    "\u00f4\u0005*\u0016\u0002\u00f3\u00f5\u00050\u0019\u0002\u00f4\u00f3",
    "\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5\u010e",
    "\u0003\u0002\u0002\u0002\u00f6\u00f8\u00074\u0002\u0002\u00f7\u00f9",
    "\u00050\u0019\u0002\u00f8\u00f7\u0003\u0002\u0002\u0002\u00f8\u00f9",
    "\u0003\u0002\u0002\u0002\u00f9\u010e\u0003\u0002\u0002\u0002\u00fa\u00fb",
    "\u0007)\u0002\u0002\u00fb\u00fc\u0005(\u0015\u0002\u00fc\u00fe\u0007",
    "*\u0002\u0002\u00fd\u00ff\u00050\u0019\u0002\u00fe\u00fd\u0003\u0002",
    "\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff\u010e\u0003\u0002",
    "\u0002\u0002\u0100\u0101\u0007\u0005\u0002\u0002\u0101\u0103\u0007)",
    "\u0002\u0002\u0102\u0104\u00075\u0002\u0002\u0103\u0102\u0003\u0002",
    "\u0002\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104\u0105\u0003\u0002",
    "\u0002\u0002\u0105\u010e\u0007*\u0002\u0002\u0106\u010e\u0005\u0010",
    "\t\u0002\u0107\u0108\u0007\f\u0002\u0002\u0108\u010e\t\u0004\u0002\u0002",
    "\u0109\u010a\u0007\u0006\u0002\u0002\u010a\u010e\u0005$\u0013\u0002",
    "\u010b\u010e\u0005,\u0017\u0002\u010c\u010e\u0005.\u0018\u0002\u010d",
    "\u00e0\u0003\u0002\u0002\u0002\u010d\u00e2\u0003\u0002\u0002\u0002\u010d",
    "\u00e4\u0003\u0002\u0002\u0002\u010d\u00e6\u0003\u0002\u0002\u0002\u010d",
    "\u00e8\u0003\u0002\u0002\u0002\u010d\u00e9\u0003\u0002\u0002\u0002\u010d",
    "\u00ec\u0003\u0002\u0002\u0002\u010d\u00ed\u0003\u0002\u0002\u0002\u010d",
    "\u00ee\u0003\u0002\u0002\u0002\u010d\u00f2\u0003\u0002\u0002\u0002\u010d",
    "\u00f6\u0003\u0002\u0002\u0002\u010d\u00fa\u0003\u0002\u0002\u0002\u010d",
    "\u0100\u0003\u0002\u0002\u0002\u010d\u0106\u0003\u0002\u0002\u0002\u010d",
    "\u0107\u0003\u0002\u0002\u0002\u010d\u0109\u0003\u0002\u0002\u0002\u010d",
    "\u010b\u0003\u0002\u0002\u0002\u010d\u010c\u0003\u0002\u0002\u0002\u010e",
    "\u0141\u0003\u0002\u0002\u0002\u010f\u0110\f!\u0002\u0002\u0110\u0111",
    "\u0007\u001c\u0002\u0002\u0111\u0140\u0005(\u0015\"\u0112\u0113\f \u0002",
    "\u0002\u0113\u0114\u0007\"\u0002\u0002\u0114\u0140\u0005(\u0015!\u0115",
    "\u0116\f\u001f\u0002\u0002\u0116\u0117\u0007#\u0002\u0002\u0117\u0140",
    "\u0005(\u0015 \u0118\u0119\f\u001e\u0002\u0002\u0119\u011a\u0007$\u0002",
    "\u0002\u011a\u0140\u0005(\u0015\u001f\u011b\u011c\f\u001d\u0002\u0002",
    "\u011c\u011d\u0007 \u0002\u0002\u011d\u0140\u0005(\u0015\u001e\u011e",
    "\u011f\f\u001c\u0002\u0002\u011f\u0120\u0007!\u0002\u0002\u0120\u0140",
    "\u0005(\u0015\u001d\u0121\u0122\f\u001b\u0002\u0002\u0122\u0123\u0007",
    "\u001a\u0002\u0002\u0123\u0140\u0005(\u0015\u001c\u0124\u0125\f\u001a",
    "\u0002\u0002\u0125\u0126\u0007\u001b\u0002\u0002\u0126\u0140\u0005(",
    "\u0015\u001b\u0127\u0128\f\u0019\u0002\u0002\u0128\u0129\u0007\u001e",
    "\u0002\u0002\u0129\u0140\u0005(\u0015\u001a\u012a\u012b\f\u0018\u0002",
    "\u0002\u012b\u012c\u0007\u001f\u0002\u0002\u012c\u0140\u0005(\u0015",
    "\u0019\u012d\u012e\f\u0017\u0002\u0002\u012e\u012f\u0007\u0018\u0002",
    "\u0002\u012f\u0140\u0005(\u0015\u0018\u0130\u0131\f\u0016\u0002\u0002",
    "\u0131\u0132\u0007\u0019\u0002\u0002\u0132\u0140\u0005(\u0015\u0017",
    "\u0133\u0134\f\u0015\u0002\u0002\u0134\u0135\u0007\u0017\u0002\u0002",
    "\u0135\u0140\u0005(\u0015\u0016\u0136\u0137\f\u0014\u0002\u0002\u0137",
    "\u0138\u0007\u0016\u0002\u0002\u0138\u0140\u0005(\u0015\u0015\u0139",
    "\u013a\f\u0013\u0002\u0002\u013a\u013b\u00070\u0002\u0002\u013b\u0140",
    "\u0005(\u0015\u0014\u013c\u013d\f\u0012\u0002\u0002\u013d\u013e\u0007",
    "\u0012\u0002\u0002\u013e\u0140\u0005(\u0015\u0013\u013f\u010f\u0003",
    "\u0002\u0002\u0002\u013f\u0112\u0003\u0002\u0002\u0002\u013f\u0115\u0003",
    "\u0002\u0002\u0002\u013f\u0118\u0003\u0002\u0002\u0002\u013f\u011b\u0003",
    "\u0002\u0002\u0002\u013f\u011e\u0003\u0002\u0002\u0002\u013f\u0121\u0003",
    "\u0002\u0002\u0002\u013f\u0124\u0003\u0002\u0002\u0002\u013f\u0127\u0003",
    "\u0002\u0002\u0002\u013f\u012a\u0003\u0002\u0002\u0002\u013f\u012d\u0003",
    "\u0002\u0002\u0002\u013f\u0130\u0003\u0002\u0002\u0002\u013f\u0133\u0003",
    "\u0002\u0002\u0002\u013f\u0136\u0003\u0002\u0002\u0002\u013f\u0139\u0003",
    "\u0002\u0002\u0002\u013f\u013c\u0003\u0002\u0002\u0002\u0140\u0143\u0003",
    "\u0002\u0002\u0002\u0141\u013f\u0003\u0002\u0002\u0002\u0141\u0142\u0003",
    "\u0002\u0002\u0002\u0142)\u0003\u0002\u0002\u0002\u0143\u0141\u0003",
    "\u0002\u0002\u0002\u0144\u0146\u0007\'\u0002\u0002\u0145\u0147\u0005",
    "&\u0014\u0002\u0146\u0145\u0003\u0002\u0002\u0002\u0146\u0147\u0003",
    "\u0002\u0002\u0002\u0147\u0148\u0003\u0002\u0002\u0002\u0148\u0149\u0007",
    "(\u0002\u0002\u0149+\u0003\u0002\u0002\u0002\u014a\u014b\u0007)\u0002",
    "\u0002\u014b\u0150\t\u0002\u0002\u0002\u014c\u014d\u0007-\u0002\u0002",
    "\u014d\u014f\t\u0002\u0002\u0002\u014e\u014c\u0003\u0002\u0002\u0002",
    "\u014f\u0152\u0003\u0002\u0002\u0002\u0150\u014e\u0003\u0002\u0002\u0002",
    "\u0150\u0151\u0003\u0002\u0002\u0002\u0151\u0153\u0003\u0002\u0002\u0002",
    "\u0152\u0150\u0003\u0002\u0002\u0002\u0153\u0155\u0007*\u0002\u0002",
    "\u0154\u014a\u0003\u0002\u0002\u0002\u0155\u0156\u0003\u0002\u0002\u0002",
    "\u0156\u0154\u0003\u0002\u0002\u0002\u0156\u0157\u0003\u0002\u0002\u0002",
    "\u0157-\u0003\u0002\u0002\u0002\u0158\u0159\u00074\u0002\u0002\u0159",
    "\u0169\u0007%\u0002\u0002\u015a\u015b\u0007\'\u0002\u0002\u015b\u0165",
    "\u0005(\u0015\u0002\u015c\u015d\u00071\u0002\u0002\u015d\u0166\u0005",
    "(\u0015\u0002\u015e\u015f\u0007-\u0002\u0002\u015f\u0161\u0005(\u0015",
    "\u0002\u0160\u015e\u0003\u0002\u0002\u0002\u0161\u0164\u0003\u0002\u0002",
    "\u0002\u0162\u0160\u0003\u0002\u0002\u0002\u0162\u0163\u0003\u0002\u0002",
    "\u0002\u0163\u0166\u0003\u0002\u0002\u0002\u0164\u0162\u0003\u0002\u0002",
    "\u0002\u0165\u015c\u0003\u0002\u0002\u0002\u0165\u0162\u0003\u0002\u0002",
    "\u0002\u0166\u0167\u0003\u0002\u0002\u0002\u0167\u0168\u0007(\u0002",
    "\u0002\u0168\u016a\u0003\u0002\u0002\u0002\u0169\u015a\u0003\u0002\u0002",
    "\u0002\u016a\u016b\u0003\u0002\u0002\u0002\u016b\u0169\u0003\u0002\u0002",
    "\u0002\u016b\u016c\u0003\u0002\u0002\u0002\u016c\u016d\u0003\u0002\u0002",
    "\u0002\u016d\u016e\u0007&\u0002\u0002\u016e/\u0003\u0002\u0002\u0002",
    "\u016f\u0170\u0007\'\u0002\u0002\u0170\u0171\u0005(\u0015\u0002\u0171",
    "\u0172\u0007(\u0002\u0002\u0172\u0174\u0003\u0002\u0002\u0002\u0173",
    "\u016f\u0003\u0002\u0002\u0002\u0174\u0175\u0003\u0002\u0002\u0002\u0175",
    "\u0173\u0003\u0002\u0002\u0002\u0175\u0176\u0003\u0002\u0002\u0002\u0176",
    "1\u0003\u0002\u0002\u0002\u0177\u0178\t\u0005\u0002\u0002\u01783\u0003",
    "\u0002\u0002\u0002\':>Y^kpruz\u0081\u0085\u008b\u0093\u0097\u009f\u00a5",
    "\u00a9\u00b5\u00c0\u00cb\u00d5\u00dd\u00f0\u00f4\u00f8\u00fe\u0103\u010d",
    "\u013f\u0141\u0146\u0150\u0156\u0162\u0165\u016b\u0175"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':='", "'function'", "'input'", "'local'", "'if'", 
                     "'then'", "'elif'", "'else'", "'fi'", "'return'", "'for'", 
                     "'while'", "'do'", "'od'", "'end'", "'in'", "'repeat'", 
                     "'until'", "'not'", "'or'", "'and'", null, "'<>'", 
                     "'>='", "'<='", "'^'", "'!'", "'>'", "'<'", "'+'", 
                     "'-'", "'*'", "'/'", "'%'", "'{'", "'}'", "'['", "']'", 
                     "'('", "')'", "';'", null, "','", "'?'", "':'", "'->'", 
                     "'..'" ];

var symbolicNames = [ null, null, "Function", "Input", "Local", "If", "Then", 
                      "Elif", "Else", "Fi", "Return", "For", "While", "Do", 
                      "Od", "End", "In", "Repeat", "Until", "Not", "Or", 
                      "And", "Equals", "NEquals", "GTEquals", "LTEquals", 
                      "Pow", "Excl", "GT", "LT", "Add", "Subtract", "Multiply", 
                      "Divide", "Modulus", "OBrace", "CBrace", "OBracket", 
                      "CBracket", "OParen", "CParen", "SColon", "Assign", 
                      "Comma", "QMark", "Colon", "SHandFunc", "Range", "Boolean", 
                      "Number", "Identifier", "String", "Comment", "Space", 
                      "EOL" ];

var ruleNames =  [ "parse", "block", "statement", "assignment", "invocation", 
                   "operation", "functionCall", "functionDecl", "doStatement", 
                   "ifStatement", "ifStat", "elseIfStat", "elseStat", "fiIfStat", 
                   "forStatement", "whileStatement", "repeatStatement", 
                   "idList", "exprList", "expression", "list", "tuple", 
                   "listEvaluation", "indexes", "operator" ];

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
gapParser.T__0 = 1;
gapParser.Function = 2;
gapParser.Input = 3;
gapParser.Local = 4;
gapParser.If = 5;
gapParser.Then = 6;
gapParser.Elif = 7;
gapParser.Else = 8;
gapParser.Fi = 9;
gapParser.Return = 10;
gapParser.For = 11;
gapParser.While = 12;
gapParser.Do = 13;
gapParser.Od = 14;
gapParser.End = 15;
gapParser.In = 16;
gapParser.Repeat = 17;
gapParser.Until = 18;
gapParser.Not = 19;
gapParser.Or = 20;
gapParser.And = 21;
gapParser.Equals = 22;
gapParser.NEquals = 23;
gapParser.GTEquals = 24;
gapParser.LTEquals = 25;
gapParser.Pow = 26;
gapParser.Excl = 27;
gapParser.GT = 28;
gapParser.LT = 29;
gapParser.Add = 30;
gapParser.Subtract = 31;
gapParser.Multiply = 32;
gapParser.Divide = 33;
gapParser.Modulus = 34;
gapParser.OBrace = 35;
gapParser.CBrace = 36;
gapParser.OBracket = 37;
gapParser.CBracket = 38;
gapParser.OParen = 39;
gapParser.CParen = 40;
gapParser.SColon = 41;
gapParser.Assign = 42;
gapParser.Comma = 43;
gapParser.QMark = 44;
gapParser.Colon = 45;
gapParser.SHandFunc = 46;
gapParser.Range = 47;
gapParser.Boolean = 48;
gapParser.Number = 49;
gapParser.Identifier = 50;
gapParser.String = 51;
gapParser.Comment = 52;
gapParser.Space = 53;
gapParser.EOL = 54;

gapParser.RULE_parse = 0;
gapParser.RULE_block = 1;
gapParser.RULE_statement = 2;
gapParser.RULE_assignment = 3;
gapParser.RULE_invocation = 4;
gapParser.RULE_operation = 5;
gapParser.RULE_functionCall = 6;
gapParser.RULE_functionDecl = 7;
gapParser.RULE_doStatement = 8;
gapParser.RULE_ifStatement = 9;
gapParser.RULE_ifStat = 10;
gapParser.RULE_elseIfStat = 11;
gapParser.RULE_elseStat = 12;
gapParser.RULE_fiIfStat = 13;
gapParser.RULE_forStatement = 14;
gapParser.RULE_whileStatement = 15;
gapParser.RULE_repeatStatement = 16;
gapParser.RULE_idList = 17;
gapParser.RULE_exprList = 18;
gapParser.RULE_expression = 19;
gapParser.RULE_list = 20;
gapParser.RULE_tuple = 21;
gapParser.RULE_listEvaluation = 22;
gapParser.RULE_indexes = 23;
gapParser.RULE_operator = 24;

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
        this.state = 50;
        this.block();
        this.state = 51;
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 53;
        		this.statement();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 56; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
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

StatementContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};

StatementContext.prototype.operation = function() {
    return this.getTypedRuleContext(OperationContext,0);
};

StatementContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

StatementContext.prototype.functionDecl = function() {
    return this.getTypedRuleContext(FunctionDeclContext,0);
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




gapParser.StatementContext = StatementContext;

gapParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, gapParser.RULE_statement);
    try {
        this.state = 87;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 58;
            this.expression(0);
            this.state = 60;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
            if(la_===1) {
                this.state = 59;
                this.match(gapParser.SColon);

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 62;
            this.invocation();
            this.state = 63;
            this.match(gapParser.SColon);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 65;
            this.operation();
            this.state = 66;
            this.match(gapParser.SColon);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 68;
            this.functionCall();
            this.state = 69;
            this.match(gapParser.SColon);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 71;
            this.functionDecl();
            this.state = 72;
            this.match(gapParser.SColon);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 74;
            this.ifStatement();
            this.state = 75;
            this.match(gapParser.SColon);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 77;
            this.forStatement();
            this.state = 78;
            this.match(gapParser.SColon);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 80;
            this.whileStatement();
            this.state = 81;
            this.match(gapParser.SColon);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 83;
            this.doStatement();
            this.state = 84;
            this.match(gapParser.SColon);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 86;
            this.repeatStatement();
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

function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.Identifier = function() {
    return this.getToken(gapParser.Identifier, 0);
};

AssignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};

AssignmentContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};




gapParser.AssignmentContext = AssignmentContext;

gapParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, gapParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this.match(gapParser.Identifier);
        this.state = 92;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        if(la_===1) {
            this.state = 90;
            this.indexes();

        } else if(la_===2) {
            this.state = 91;
            this.list();

        }
        this.state = 94;
        this.match(gapParser.T__0);
        this.state = 95;
        this.expression(0);
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

function InvocationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_invocation;
    return this;
}

InvocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InvocationContext.prototype.constructor = InvocationContext;

InvocationContext.prototype.Identifier = function() {
    return this.getToken(gapParser.Identifier, 0);
};

InvocationContext.prototype.Number = function() {
    return this.getToken(gapParser.Number, 0);
};




gapParser.InvocationContext = InvocationContext;

gapParser.prototype.invocation = function() {

    var localctx = new InvocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, gapParser.RULE_invocation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        _la = this._input.LA(1);
        if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
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

function OperationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_operation;
    return this;
}

OperationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperationContext.prototype.constructor = OperationContext;

OperationContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Identifier);
    } else {
        return this.getToken(gapParser.Identifier, i);
    }
};


OperationContext.prototype.Number = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Number);
    } else {
        return this.getToken(gapParser.Number, i);
    }
};


OperationContext.prototype.operator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperatorContext);
    } else {
        return this.getTypedRuleContext(OperatorContext,i);
    }
};

OperationContext.prototype.Equals = function() {
    return this.getToken(gapParser.Equals, 0);
};

OperationContext.prototype.operation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperationContext);
    } else {
        return this.getTypedRuleContext(OperationContext,i);
    }
};

OperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};




gapParser.OperationContext = OperationContext;

gapParser.prototype.operation = function() {

    var localctx = new OperationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, gapParser.RULE_operation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        _la = this._input.LA(1);
        if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 103; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 100;
        		this.operator();
        		this.state = 101;
        		_la = this._input.LA(1);
        		if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        		this._errHandler.recoverInline(this);
        		}
        		else {
        		    this.consume();
        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 105; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 115;
        _la = this._input.LA(1);
        if(_la===gapParser.Equals) {
            this.state = 107;
            this.match(gapParser.Equals);
            this.state = 112;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 110;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
                    switch(la_) {
                    case 1:
                        this.state = 108;
                        this.operation();
                        break;

                    case 2:
                        this.state = 109;
                        this.expression(0);
                        break;

                    } 
                }
                this.state = 114;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
            }

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

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.Identifier = function() {
    return this.getToken(gapParser.Identifier, 0);
};

FunctionCallContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};




gapParser.FunctionCallContext = FunctionCallContext;

gapParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, gapParser.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(gapParser.Identifier);
        this.state = 118;
        this.match(gapParser.OParen);
        this.state = 120;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.Local) | (1 << gapParser.Return) | (1 << gapParser.Not) | (1 << gapParser.Excl) | (1 << gapParser.Subtract))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 119;
            this.exprList();
        }

        this.state = 122;
        this.match(gapParser.CParen);
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

FunctionDeclContext.prototype.End = function() {
    return this.getToken(gapParser.End, 0);
};

FunctionDeclContext.prototype.idList = function() {
    return this.getTypedRuleContext(IdListContext,0);
};

FunctionDeclContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};




gapParser.FunctionDeclContext = FunctionDeclContext;

gapParser.prototype.functionDecl = function() {

    var localctx = new FunctionDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, gapParser.RULE_functionDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.match(gapParser.Function);
        this.state = 125;
        this.match(gapParser.OParen);
        this.state = 127;
        _la = this._input.LA(1);
        if(_la===gapParser.Identifier) {
            this.state = 126;
            this.idList();
        }

        this.state = 129;
        this.match(gapParser.CParen);
        this.state = 131;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.Local) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Excl) | (1 << gapParser.Subtract))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 130;
            this.block();
        }

        this.state = 133;
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
    this.enterRule(localctx, 16, gapParser.RULE_doStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.match(gapParser.Do);
        this.state = 137;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.Local) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Excl) | (1 << gapParser.Subtract))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
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

IfStatementContext.prototype.fiIfStat = function() {
    return this.getTypedRuleContext(FiIfStatContext,0);
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
    this.enterRule(localctx, 18, gapParser.RULE_ifStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.ifStat();
        this.state = 145;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===gapParser.Elif) {
            this.state = 142;
            this.elseIfStat();
            this.state = 147;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 149;
        _la = this._input.LA(1);
        if(_la===gapParser.Else) {
            this.state = 148;
            this.elseStat();
        }

        this.state = 151;
        this.fiIfStat();
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
    this.enterRule(localctx, 20, gapParser.RULE_ifStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.match(gapParser.If);
        this.state = 154;
        this.expression(0);
        this.state = 155;
        this.match(gapParser.Then);
        this.state = 157;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.Local) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Excl) | (1 << gapParser.Subtract))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 156;
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
    this.enterRule(localctx, 22, gapParser.RULE_elseIfStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(gapParser.Elif);
        this.state = 160;
        this.expression(0);
        this.state = 161;
        this.match(gapParser.Then);
        this.state = 163;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.Local) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Excl) | (1 << gapParser.Subtract))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 162;
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
    this.enterRule(localctx, 24, gapParser.RULE_elseStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.match(gapParser.Else);
        this.state = 167;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.Local) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Excl) | (1 << gapParser.Subtract))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 166;
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

function FiIfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_fiIfStat;
    return this;
}

FiIfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FiIfStatContext.prototype.constructor = FiIfStatContext;

FiIfStatContext.prototype.Fi = function() {
    return this.getToken(gapParser.Fi, 0);
};




gapParser.FiIfStatContext = FiIfStatContext;

gapParser.prototype.fiIfStat = function() {

    var localctx = new FiIfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, gapParser.RULE_fiIfStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
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

ForStatementContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};




gapParser.ForStatementContext = ForStatementContext;

gapParser.prototype.forStatement = function() {

    var localctx = new ForStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, gapParser.RULE_forStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.match(gapParser.For);
        this.state = 172;
        this.expression(0);
        this.state = 173;
        this.match(gapParser.In);
        this.state = 174;
        this.expression(0);
        this.state = 175;
        this.match(gapParser.Do);
        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.Local) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Excl) | (1 << gapParser.Subtract))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 176;
            this.block();
            this.state = 181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 182;
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

WhileStatementContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};




gapParser.WhileStatementContext = WhileStatementContext;

gapParser.prototype.whileStatement = function() {

    var localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, gapParser.RULE_whileStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(gapParser.While);
        this.state = 185;
        this.expression(0);
        this.state = 186;
        this.match(gapParser.Do);
        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.Local) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Excl) | (1 << gapParser.Subtract))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 187;
            this.block();
            this.state = 192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 193;
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

RepeatStatementContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};




gapParser.RepeatStatementContext = RepeatStatementContext;

gapParser.prototype.repeatStatement = function() {

    var localctx = new RepeatStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, gapParser.RULE_repeatStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(gapParser.Repeat);
        this.state = 196;
        this.expression(0);
        this.state = 197;
        this.match(gapParser.Until);
        this.state = 201;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.Local) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Excl) | (1 << gapParser.Subtract))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 198;
            this.block();
            this.state = 203;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 204;
        this.match(gapParser.SColon);
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





gapParser.IdListContext = IdListContext;

gapParser.prototype.idList = function() {

    var localctx = new IdListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, gapParser.RULE_idList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.match(gapParser.Identifier);
        this.state = 211;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 207;
                this.match(gapParser.Comma);
                this.state = 208;
                this.match(gapParser.Identifier); 
            }
            this.state = 213;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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




gapParser.ExprListContext = ExprListContext;

gapParser.prototype.exprList = function() {

    var localctx = new ExprListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, gapParser.RULE_exprList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214;
        this.expression(0);
        this.state = 219;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===gapParser.Comma || _la===gapParser.Colon) {
            this.state = 215;
            _la = this._input.LA(1);
            if(!(_la===gapParser.Comma || _la===gapParser.Colon)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 216;
            this.expression(0);
            this.state = 221;
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

function ReturnDeclarationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReturnDeclarationContext.prototype = Object.create(ExpressionContext.prototype);
ReturnDeclarationContext.prototype.constructor = ReturnDeclarationContext;

gapParser.ReturnDeclarationContext = ReturnDeclarationContext;

ReturnDeclarationContext.prototype.Return = function() {
    return this.getToken(gapParser.Return, 0);
};

ReturnDeclarationContext.prototype.Identifier = function() {
    return this.getToken(gapParser.Identifier, 0);
};

ReturnDeclarationContext.prototype.Number = function() {
    return this.getToken(gapParser.Number, 0);
};

ReturnDeclarationContext.prototype.Boolean = function() {
    return this.getToken(gapParser.Boolean, 0);
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

function LocalDeclarationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LocalDeclarationContext.prototype = Object.create(ExpressionContext.prototype);
LocalDeclarationContext.prototype.constructor = LocalDeclarationContext;

gapParser.LocalDeclarationContext = LocalDeclarationContext;

LocalDeclarationContext.prototype.Local = function() {
    return this.getToken(gapParser.Local, 0);
};

LocalDeclarationContext.prototype.idList = function() {
    return this.getTypedRuleContext(IdListContext,0);
};

function IdentifierExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExpressionContext.prototype = Object.create(ExpressionContext.prototype);
IdentifierExpressionContext.prototype.constructor = IdentifierExpressionContext;

gapParser.IdentifierExpressionContext = IdentifierExpressionContext;

IdentifierExpressionContext.prototype.Identifier = function() {
    return this.getToken(gapParser.Identifier, 0);
};

IdentifierExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
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

NotExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

NotExpressionContext.prototype.Not = function() {
    return this.getToken(gapParser.Not, 0);
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

MultiplyExpressionContext.prototype.Multiply = function() {
    return this.getToken(gapParser.Multiply, 0);
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

StringExpressionContext.prototype.String = function() {
    return this.getToken(gapParser.String, 0);
};

function ExpressionExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionExpressionContext.prototype.constructor = ExpressionExpressionContext;

gapParser.ExpressionExpressionContext = ExpressionExpressionContext;

ExpressionExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
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

function FunctionCallExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionCallExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FunctionCallExpressionContext.prototype.constructor = FunctionCallExpressionContext;

gapParser.FunctionCallExpressionContext = FunctionCallExpressionContext;

FunctionCallExpressionContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

FunctionCallExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
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

function AssignmentExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignmentExpressionContext.prototype.constructor = AssignmentExpressionContext;

gapParser.AssignmentExpressionContext = AssignmentExpressionContext;

AssignmentExpressionContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
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

DivideExpressionContext.prototype.Divide = function() {
    return this.getToken(gapParser.Divide, 0);
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

UnaryMinusExpressionContext.prototype.Subtract = function() {
    return this.getToken(gapParser.Subtract, 0);
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

ShorthandFunctionCallContext.prototype.SHandFunc = function() {
    return this.getToken(gapParser.SHandFunc, 0);
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

AddExpressionContext.prototype.Add = function() {
    return this.getToken(gapParser.Add, 0);
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

SubtractExpressionContext.prototype.Subtract = function() {
    return this.getToken(gapParser.Subtract, 0);
};

function RangeExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RangeExpressionContext.prototype = Object.create(ExpressionContext.prototype);
RangeExpressionContext.prototype.constructor = RangeExpressionContext;

gapParser.RangeExpressionContext = RangeExpressionContext;

RangeExpressionContext.prototype.Range = function() {
    return this.getToken(gapParser.Range, 0);
};

RangeExpressionContext.prototype.Number = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Number);
    } else {
        return this.getToken(gapParser.Number, i);
    }
};


RangeExpressionContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Identifier);
    } else {
        return this.getToken(gapParser.Identifier, i);
    }
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

function InputExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InputExpressionContext.prototype = Object.create(ExpressionContext.prototype);
InputExpressionContext.prototype.constructor = InputExpressionContext;

gapParser.InputExpressionContext = InputExpressionContext;

InputExpressionContext.prototype.Input = function() {
    return this.getToken(gapParser.Input, 0);
};

InputExpressionContext.prototype.String = function() {
    return this.getToken(gapParser.String, 0);
};


gapParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 38;
    this.enterRecursionRule(localctx, 38, gapParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AssignmentExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 223;
            this.assignment();
            break;

        case 2:
            localctx = new UnaryMinusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 224;
            this.match(gapParser.Subtract);
            this.state = 225;
            this.expression(33);
            break;

        case 3:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 226;
            this.match(gapParser.Excl);
            this.state = 227;
            this.expression(32);
            break;

        case 4:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 228;
            this.match(gapParser.Not);
            this.state = 229;
            this.expression(15);
            break;

        case 5:
            localctx = new NumberExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 230;
            this.match(gapParser.Number);
            break;

        case 6:
            localctx = new RangeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 231;
            _la = this._input.LA(1);
            if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 232;
            this.match(gapParser.Range);
            this.state = 233;
            _la = this._input.LA(1);
            if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            break;

        case 7:
            localctx = new BoolExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 234;
            this.match(gapParser.Boolean);
            break;

        case 8:
            localctx = new StringExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 235;
            this.match(gapParser.String);
            break;

        case 9:
            localctx = new FunctionCallExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 236;
            this.functionCall();
            this.state = 238;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
            if(la_===1) {
                this.state = 237;
                this.indexes();

            }
            break;

        case 10:
            localctx = new ListExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 240;
            this.list();
            this.state = 242;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
            if(la_===1) {
                this.state = 241;
                this.indexes();

            }
            break;

        case 11:
            localctx = new IdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 244;
            this.match(gapParser.Identifier);
            this.state = 246;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
            if(la_===1) {
                this.state = 245;
                this.indexes();

            }
            break;

        case 12:
            localctx = new ExpressionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 248;
            this.match(gapParser.OParen);
            this.state = 249;
            this.expression(0);
            this.state = 250;
            this.match(gapParser.CParen);
            this.state = 252;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
            if(la_===1) {
                this.state = 251;
                this.indexes();

            }
            break;

        case 13:
            localctx = new InputExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 254;
            this.match(gapParser.Input);
            this.state = 255;
            this.match(gapParser.OParen);
            this.state = 257;
            _la = this._input.LA(1);
            if(_la===gapParser.String) {
                this.state = 256;
                this.match(gapParser.String);
            }

            this.state = 259;
            this.match(gapParser.CParen);
            break;

        case 14:
            localctx = new FunctionDeclarationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 260;
            this.functionDecl();
            break;

        case 15:
            localctx = new ReturnDeclarationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 261;
            this.match(gapParser.Return);
            this.state = 262;
            _la = this._input.LA(1);
            if(!(((((_la - 48)) & ~0x1f) == 0 && ((1 << (_la - 48)) & ((1 << (gapParser.Boolean - 48)) | (1 << (gapParser.Number - 48)) | (1 << (gapParser.Identifier - 48)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            break;

        case 16:
            localctx = new LocalDeclarationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 263;
            this.match(gapParser.Local);
            this.state = 264;
            this.idList();
            break;

        case 17:
            localctx = new TupleDeclarationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 265;
            this.tuple();
            break;

        case 18:
            localctx = new NewListEvaluationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 266;
            this.listEvaluation();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 319;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 317;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowerExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 269;
                    if (!( this.precpred(this._ctx, 31))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 31)");
                    }
                    this.state = 270;
                    this.match(gapParser.Pow);
                    this.state = 271;
                    this.expression(32);
                    break;

                case 2:
                    localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 272;
                    if (!( this.precpred(this._ctx, 30))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 30)");
                    }
                    this.state = 273;
                    this.match(gapParser.Multiply);
                    this.state = 274;
                    this.expression(31);
                    break;

                case 3:
                    localctx = new DivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 275;
                    if (!( this.precpred(this._ctx, 29))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 29)");
                    }
                    this.state = 276;
                    this.match(gapParser.Divide);
                    this.state = 277;
                    this.expression(30);
                    break;

                case 4:
                    localctx = new ModulusExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 278;
                    if (!( this.precpred(this._ctx, 28))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
                    }
                    this.state = 279;
                    this.match(gapParser.Modulus);
                    this.state = 280;
                    this.expression(29);
                    break;

                case 5:
                    localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 281;
                    if (!( this.precpred(this._ctx, 27))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
                    }
                    this.state = 282;
                    this.match(gapParser.Add);
                    this.state = 283;
                    this.expression(28);
                    break;

                case 6:
                    localctx = new SubtractExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 284;
                    if (!( this.precpred(this._ctx, 26))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
                    }
                    this.state = 285;
                    this.match(gapParser.Subtract);
                    this.state = 286;
                    this.expression(27);
                    break;

                case 7:
                    localctx = new GtEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 287;
                    if (!( this.precpred(this._ctx, 25))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                    }
                    this.state = 288;
                    this.match(gapParser.GTEquals);
                    this.state = 289;
                    this.expression(26);
                    break;

                case 8:
                    localctx = new LtEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 290;
                    if (!( this.precpred(this._ctx, 24))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                    }
                    this.state = 291;
                    this.match(gapParser.LTEquals);
                    this.state = 292;
                    this.expression(25);
                    break;

                case 9:
                    localctx = new GtExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 293;
                    if (!( this.precpred(this._ctx, 23))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                    }
                    this.state = 294;
                    this.match(gapParser.GT);
                    this.state = 295;
                    this.expression(24);
                    break;

                case 10:
                    localctx = new LtExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 296;
                    if (!( this.precpred(this._ctx, 22))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                    }
                    this.state = 297;
                    this.match(gapParser.LT);
                    this.state = 298;
                    this.expression(23);
                    break;

                case 11:
                    localctx = new EqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 299;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
                    this.state = 300;
                    this.match(gapParser.Equals);
                    this.state = 301;
                    this.expression(22);
                    break;

                case 12:
                    localctx = new NotEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 302;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 303;
                    this.match(gapParser.NEquals);
                    this.state = 304;
                    this.expression(21);
                    break;

                case 13:
                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 305;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 306;
                    this.match(gapParser.And);
                    this.state = 307;
                    this.expression(20);
                    break;

                case 14:
                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 308;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 309;
                    this.match(gapParser.Or);
                    this.state = 310;
                    this.expression(19);
                    break;

                case 15:
                    localctx = new ShorthandFunctionCallContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 311;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 312;
                    this.match(gapParser.SHandFunc);
                    this.state = 313;
                    this.expression(18);
                    break;

                case 16:
                    localctx = new InExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 314;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 315;
                    this.match(gapParser.In);
                    this.state = 316;
                    this.expression(17);
                    break;

                } 
            }
            this.state = 321;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
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

ListContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};




gapParser.ListContext = ListContext;

gapParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, gapParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 322;
        this.match(gapParser.OBracket);
        this.state = 324;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.Local) | (1 << gapParser.Return) | (1 << gapParser.Not) | (1 << gapParser.Excl) | (1 << gapParser.Subtract))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 323;
            this.exprList();
        }

        this.state = 326;
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





gapParser.TupleContext = TupleContext;

gapParser.prototype.tuple = function() {

    var localctx = new TupleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, gapParser.RULE_tuple);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 328;
        		this.match(gapParser.OParen);
        		this.state = 329;
        		_la = this._input.LA(1);
        		if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        		this._errHandler.recoverInline(this);
        		}
        		else {
        		    this.consume();
        		}
        		this.state = 334;
        		this._errHandler.sync(this);
        		_la = this._input.LA(1);
        		while(_la===gapParser.Comma) {
        		    this.state = 330;
        		    this.match(gapParser.Comma);
        		    this.state = 331;
        		    _la = this._input.LA(1);
        		    if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        		    this._errHandler.recoverInline(this);
        		    }
        		    else {
        		        this.consume();
        		    }
        		    this.state = 336;
        		    this._errHandler.sync(this);
        		    _la = this._input.LA(1);
        		}
        		this.state = 337;
        		this.match(gapParser.CParen);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 340; 
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





gapParser.ListEvaluationContext = ListEvaluationContext;

gapParser.prototype.listEvaluation = function() {

    var localctx = new ListEvaluationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, gapParser.RULE_listEvaluation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 342;
        this.match(gapParser.Identifier);
        this.state = 343;
        this.match(gapParser.OBrace);
        this.state = 359; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 344;
            this.match(gapParser.OBracket);
            this.state = 345;
            this.expression(0);
            this.state = 355;
            switch(this._input.LA(1)) {
            case gapParser.Range:
                this.state = 346;
                this.match(gapParser.Range);
                this.state = 347;
                this.expression(0);
                break;
            case gapParser.CBracket:
            case gapParser.Comma:
                this.state = 352;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===gapParser.Comma) {
                    this.state = 348;
                    this.match(gapParser.Comma);
                    this.state = 349;
                    this.expression(0);
                    this.state = 354;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 357;
            this.match(gapParser.CBracket);
            this.state = 361; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===gapParser.OBracket);
        this.state = 363;
        this.match(gapParser.CBrace);
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




gapParser.IndexesContext = IndexesContext;

gapParser.prototype.indexes = function() {

    var localctx = new IndexesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, gapParser.RULE_indexes);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 365;
        		this.match(gapParser.OBracket);
        		this.state = 366;
        		this.expression(0);
        		this.state = 367;
        		this.match(gapParser.CBracket);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 371; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,36, this._ctx);
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

function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;

OperatorContext.prototype.Add = function() {
    return this.getToken(gapParser.Add, 0);
};

OperatorContext.prototype.Subtract = function() {
    return this.getToken(gapParser.Subtract, 0);
};

OperatorContext.prototype.Multiply = function() {
    return this.getToken(gapParser.Multiply, 0);
};

OperatorContext.prototype.Divide = function() {
    return this.getToken(gapParser.Divide, 0);
};

OperatorContext.prototype.Modulus = function() {
    return this.getToken(gapParser.Modulus, 0);
};

OperatorContext.prototype.Pow = function() {
    return this.getToken(gapParser.Pow, 0);
};




gapParser.OperatorContext = OperatorContext;

gapParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, gapParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 373;
        _la = this._input.LA(1);
        if(!(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (gapParser.Pow - 26)) | (1 << (gapParser.Add - 26)) | (1 << (gapParser.Subtract - 26)) | (1 << (gapParser.Multiply - 26)) | (1 << (gapParser.Divide - 26)) | (1 << (gapParser.Modulus - 26)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
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


gapParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 19:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

gapParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 31);
		case 1:
			return this.precpred(this._ctx, 30);
		case 2:
			return this.precpred(this._ctx, 29);
		case 3:
			return this.precpred(this._ctx, 28);
		case 4:
			return this.precpred(this._ctx, 27);
		case 5:
			return this.precpred(this._ctx, 26);
		case 6:
			return this.precpred(this._ctx, 25);
		case 7:
			return this.precpred(this._ctx, 24);
		case 8:
			return this.precpred(this._ctx, 23);
		case 9:
			return this.precpred(this._ctx, 22);
		case 10:
			return this.precpred(this._ctx, 21);
		case 11:
			return this.precpred(this._ctx, 20);
		case 12:
			return this.precpred(this._ctx, 19);
		case 13:
			return this.precpred(this._ctx, 18);
		case 14:
			return this.precpred(this._ctx, 17);
		case 15:
			return this.precpred(this._ctx, 16);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.gapParser = gapParser;
