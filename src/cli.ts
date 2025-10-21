#!/usr/bin/env node
import { main } from "./index";
import chalk from "chalk";


// async function start(){
//    await main()
// }


// start()


const args =process.argv.slice(2)

if(args.length===0){
   console.log("Write: Boxcn search")
}else if(args[1]==="search"){
   main()
}else{
   console.log("error")
}


