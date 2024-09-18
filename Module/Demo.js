
import { a } from "./Demo1.js";

console.log(a);

import { add, b } from "./Demo1.js";

add(10,20);
console.log(b);

import * as x from "./Demo1.js";
console.log(x.c);
console.log(x.d);
console.log(x.e);

import { c as y } from "./Demo2.js";

console.log(y);

