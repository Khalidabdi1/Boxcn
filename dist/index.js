"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
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
    setTimeout(() => {
        spinner.stop();
    }, 3000);
}
main();
