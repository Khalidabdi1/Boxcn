#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// async function start(){
//    await main()
// }
// start()
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Write: Boxcn search");
}
else if (args[1] === "search") {
    (0, index_1.main)();
}
else {
    console.log("error");
}
