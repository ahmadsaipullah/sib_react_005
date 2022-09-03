//import

import {foo, kode, bar} from "foo";

//rename

import {foo as theFooFanc} from "foo";

theFooFanc();

export function bar() { }
export var x = 42;
export function baz() { }

import * as foo from "foo";

foo.bar();
foo.x;
foo.baz();