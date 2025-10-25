#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const chalk_1 = __importDefault(require("chalk"));
// async function start(){
//    await main()
// }
// start()
const args = process.argv.slice(2);
async function start() {
    if (args.length === 0) {
        console.log("Write: Boxcn search");
    }
    else if (args[0] === "search") {
        try {
            await (0, index_1.main)();
            console.log(chalk_1.default.green("============================"));
        }
        catch (err) {
            console.log(chalk_1.default.red("error"));
            console.log(err);
        }
    }
    else if (args[0] === "edit") {
        try {
            (0, index_1.Edit)();
        }
        catch (err) {
            console.log(chalk_1.default.red("error"));
            console.log(err);
        }
    }
    else {
        console.log(chalk_1.default.red("❌ Unknown command."));
    }
}
start();
