#!/usr/bin/env node
import { main } from "./index";
import chalk from "chalk";


// async function start(){
//    await main()
// }


// start()


const args =process.argv.slice(2)


async function start(){
if(args.length===0){
   console.log("Write: Boxcn search")
}else if(args[0]==="search"){
   try{
  await main()
console.log(chalk.green("============================"))
   }catch(err){
      console.log(chalk.red("error"))
      console.log(err)
   }
}else{
   console.log(chalk.red("❌ Unknown command."))
}

}


start()

