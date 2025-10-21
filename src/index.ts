import inquirer from "inquirer";
import chalk, { supportsColor } from "chalk";
import ora from "ora";
import { execSync } from "child_process";
import fs from "fs"
import path from "path";

let List = ["Accordion",
    "Alert",
    "Alert Dialog",
    "Aspect Ratio",
    "Avatar",
    "Badge",
    "Breadcrumb",
    "Button",
    "Button Group",
    "Calendar",
    "Card",
    "Carousel",
    "Chart",
    "Checkbox",
    "Collapsible",
    "Combobox",
    "Command",
    "Context Menu",
    "Data Table",
    "Date Picker",
    "Dialog",
    "Drawer",
    "Dropdown Menu",
    "Empty",
    "Field",
    "Form",
    "Hover Card",
    "Input",
    "Input Group",
    "Input OTP",
    "Item",
    "Kbd",
    "Label",
    "Menubar",
    "Native Select",
    "Navigation Menu",
    "Pagination",
    "Popover",
    "Progress",
    "Radio Group",
    "Resizable",
    "Scroll Area",
    "Select",
    "Separator",
    "Sheet",
    "Sidebar",
    "Skeleton",
    "Slider",
    "Sonner",
    "Spinner",
    "Switch",
    "Table",
    "Tabs",
    "Textarea",
    "Toast",
    "Toggle",
    "Toggle Group",
    "Tooltip",
    "Typography"]

export async function main() {
    //clear 
    console.clear()

    console.log(chalk.cyanBright("Boxcn CLI -- add shadcn component"))

    const { component } = await inquirer.prompt([
        { type: "list", name: "component", message: "add : ", choices: List }
    ])

    const spinner =ora(`install ${component} from Shadcn` ).start()

    try{
execSync(`npx shadcn@latest add ${component}`,{stdio:"inherit"})
spinner.succeed(chalk.green("It has been installed successfully"))

    }catch{
        spinner.fail(chalk.red("Something went wrong"))
        return

    }

    
}

main()