"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
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
    "Typography"];
async function main() {
    //clear 
    console.clear();
    console.log(chalk_1.default.cyanBright("Boxcn CLI -- add shadcn component"));
    const { component } = await inquirer_1.default.prompt([
        { type: "list", name: "component", message: "add : ", choices: List }
    ]);
    const spinner = (0, ora_1.default)(`install ${component} from Shadcn`).start();
    try {
        // await execa('npx', ['shadcn@latest', 'add', component], { stdio: 'inherit', shell: true });
        console.log(`Installing ${component}...`);
        (0, child_process_1.execSync)(`npx shadcn@latest add ${component}`, { stdio: 'inherit' });
        spinner.succeed(chalk_1.default.green("It has been installed successfully"));
    }
    catch {
        spinner.fail(chalk_1.default.red("Something went wrong"));
        return;
    }
    const { filePath } = await inquirer_1.default.prompt([
        { type: "input", name: "filePath", message: "Enter the path of the file you want to add the =>import<= to : ", default: "./src/App.tsx" }
    ]);
    const resolvePath = path_1.default.resolve(filePath);
    if (!fs_1.default.existsSync(resolvePath)) {
        console.log(chalk_1.default.red(`File not found: ${resolvePath}`));
        return;
    }
    let importComponent = `\nimport {}`;
    if (component === "Button") {
        importComponent = `\nimport { Button } from "@/components/ui/button"`;
    }
    let importText = importComponent;
    const content = fs_1.default.readFileSync(resolvePath, "utf-8");
    if (!content.includes(importText.trim())) {
        const update = importText + "\n" + content;
        fs_1.default.writeFileSync(resolvePath, update, "utf-8");
        console.log(chalk_1.default.green(`✅ Import added for ${component} Successfully`));
    }
    else {
        console.log(chalk_1.default.yellow(`⚠️ import for an existing ${component}.`));
    }
    console.log(chalk_1.default.cyanBright("🎉 Everything was successful!"));
}
