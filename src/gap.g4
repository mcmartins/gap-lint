STRING: '"' (ESC|.)*? '"' ;
fragment
ESC : '\\"' | '\\\\' ; //