import inquirer from "inquirer";
import chalk, { supportsColor } from "chalk";
import ora from "ora";
import { execSync } from "child_process";
import fs from "fs"
import path from "path";
import {execa} from 'execa';


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
    // "Combobox",
    "Command",
    "Context Menu",
    // "Data Table",
    // "Date Picker",
    "Dialog",
    "Drawer",
    "Dropdown Menu",
    "Empty",
    "Field",
    // "Form",
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
    // "Sidebar",
    "Skeleton",
    "Slider",
    "Sonner",
    "Spinner",
    "Switch",
    "Table",
    "Tabs",
    "Textarea",
    // "Toast",
    "Toggle",
    "Toggle Group",
    "Tooltip",
    // "Typography"
]

export async function main() {
    //clear 
    console.clear()

    console.log(chalk.cyanBright("Boxcn CLI -- add shadcn component"))

    const { component } = await inquirer.prompt([
        { type: "list", name: "component", message: "Choose the component you want :", choices: List }
    ])

     let importComponent = `\nimport {}`

    let component_name="";
    if(component==="Alert"){
        component_name="alert"
        importComponent=`\nimport { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert" ` 
    }else if(component==="Accordion"){
        component_name="accordion"
        importComponent=`\nimport { Accordion, AccordionContent,AccordionItem,AccordionTrigger,} from "@/components/ui/accordion" `

    }else if (component==="Alert Dialog"){
        component_name="alert-dialog"
        importComponent=`import {AlertDialog,AlertDialogAction, AlertDialogCancel,AlertDialogContent, AlertDialogDescription, AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"`
    }else if(component==="Aspect Ratio"){
        component_name="aspect-ratio"
        importComponent=`import { AspectRatio } from "@/components/ui/aspect-ratio"`
    }else if(component==="Avatar"){
        component_name="avatar"
        importComponent=`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"`
    }else if(component==="Badge"){
        component_name="badge"
        importComponent=`import { Badge } from "@/components/ui/badge"`
    }else if(component==="Breadcrumb"){
        component_name="breadcrumb"
        importComponent=`import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbPage,BreadcrumbSeparator,} from "@/components/ui/breadcrumb"`
    }else if(component==="Button"){
        component_name="button"
        importComponent=`import { Button } from "@/components/ui/button"`
    }else if(component==="Button Group"){
        component_name="button-group"
        importComponent=`import {ButtonGroup,ButtonGroupSeparator, ButtonGroupText,} from "@/components/ui/button-group"`
    }else if(component==="Calendar"){
        component_name="calendar"
        importComponent=`import { Calendar } from "@/components/ui/calendar"`
    }else if(component==="Card"){
        component_name="card"
        importComponent=`import {Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"`
    }else if(component==="Carousel"){
        component_name="carousel"
        importComponent=`import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"`
    }else if(component==="Chart"){
        component_name="chart"
        importComponent=`import { ChartConfig, ChartContainer,ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"`
    }else if(component==="Checkbox"){
        component_name="checkbox"
        importComponent=`import { Checkbox } from "@/components/ui/checkbox" `
    }else if(component==="Collapsible"){
        component_name="collapsible"
        importComponent=`import {Collapsible,CollapsibleContent,CollapsibleTrigger,} from "@/components/ui/collapsible"`
    }else if(component==="Command"){
        component_name="command"
        importComponent=`import {Command,CommandDialog,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList,CommandSeparator,CommandShortcut,} from "@/components/ui/command"`
    }else if(component==="Context Menu"){
        component_name="context-menu"
        importComponent=`import {ContextMenu,ContextMenuContent,ContextMenuItem,ContextMenuTrigger,} from "@/components/ui/context-menu"`
    }else if(component==="Dialog"){
        component_name="dialog"
        importComponent=`import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle, DialogTrigger,} from "@/components/ui/dialog"`
    }else if(component==="Drawer"){
        component_name="drawer"
        importComponent=`import { Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle, DrawerTrigger,} from "@/components/ui/drawer"`
    }else if(component==="Dropdown Menu"){
        component_name="dropdown-menu"
        importComponent=`import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"`
    }else if(component==="Empty"){
        component_name="empty"
        importComponent=`import {Empty,EmptyContent,EmptyDescription,EmptyHeader,EmptyMedia, EmptyTitle,} from "@/components/ui/empty"`
    }else if(component==="Field"){
        component_name="field"
        importComponent=`import {Field,FieldContent,FieldDescription,FieldError,FieldGroup,FieldLabel,FieldLegend,FieldSeparator,FieldSet,FieldTitle,} from "@/components/ui/field"`
    }else if(component==="Hover Card"){
        component_name="hover-card"
        importComponent=`import {HoverCard,HoverCardContent,HoverCardTrigger,} from "@/components/ui/hover-card"`
    }else if(component==="Input"){
        component_name="input"
        importComponent=`import { Input } from "@/components/ui/input"`
    }else if(component==="Input Group"){
        component_name="input-group"
        importComponent=`import {InputGroup,InputGroupAddon,InputGroupButton,InputGroupInput,InputGroupText,InputGroupTextarea,} from "@/components/ui/input-group"`
    }else if(component==="Input OTP"){
        component_name="input-otp"
        importComponent=`import {InputOTP,InputOTPGroup,InputOTPSeparator,InputOTPSlot,} from "@/components/ui/input-otp"`
    }else if(component==="Item"){
        component_name="item"
        importComponent=`import {Item,ItemActions,ItemContent,ItemDescription,ItemFooter,ItemHeader,ItemMedia,ItemTitle,} from "@/components/ui/item"`
    }else if(component==="Kbd"){
        component_name="kbd"
        importComponent=`import { Kbd } from "@/components/ui/kbd"`
    }else if(component==="Label"){
        component_name="label"
        importComponent=`import { Label } from "@/components/ui/label"`
    }else if(component==="Menubar"){
        component_name="menubar"
        importComponent=`import { Menubar,MenubarContent,MenubarItem, MenubarMenu,MenubarSeparator,MenubarShortcut,MenubarTrigger,} from "@/components/ui/menubar"`
    }else if(component==="Native Select"){
        component_name="native-select"
        importComponent=`import {NativeSelect,NativeSelectOptGroup, NativeSelectOption,} from "@/components/ui/native-select"`
    }else if(component==="Navigation Menu"){
        component_name="navigation-menu"
        importComponent=`import { NavigationMenu, NavigationMenuContent,NavigationMenuIndicator,NavigationMenuItem,NavigationMenuLink, NavigationMenuList,NavigationMenuTrigger,NavigationMenuViewport,} from "@/components/ui/navigation-menu"`
    }else if(component==="Pagination"){
        component_name="pagination"
        importComponent=`import {Pagination,PaginationContent,PaginationEllipsis,PaginationItem,PaginationLink,PaginationNext,PaginationPrevious,} from "@/components/ui/pagination"`
    }else if(component==="Popover"){
        component_name="popover"
        importComponent=`import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"`
    }else if(component==="Progress"){
        component_name="progress"
        importComponent=`import { Progress } from "@/components/ui/progress"`
    }else if(component==="Radio Group"){
        component_name="radio-group"
        importComponent=`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"`
    }else if(component==="Resizable"){
        component_name="resizable"
        importComponent=`import {ResizableHandle,ResizablePanel,ResizablePanelGroup,} from "@/components/ui/resizable"`
    }else if(component==="Scroll Area"){
        component_name="scroll-area"
        importComponent=`import { ScrollArea } from "@/components/ui/scroll-area"`
    }else if(component==="Select"){
        component_name="select"
        importComponent=`import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"`
    }else if(component==="Separator"){
        component_name="separator"
        importComponent=`import { Separator } from "@/components/ui/separator"`
    }else if(component==="Sheet"){
        component_name="sheet"
        importComponent=`import {Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet"`
    }else if(component==="Skeleton"){
        component_name="skeleton"
        importComponent=`import { Skeleton } from "@/components/ui/skeleton"`
    }else if(component==="Slider"){
        component_name="slider"
        importComponent=`import { Slider } from "@/components/ui/slider"`
    }else if(component==="Sonner"){
        component_name="sonner"
        importComponent=`import { toast } from "sonner"`
    }else if(component==="Spinner"){
        component_name="spinner"
        importComponent=`import { Spinner } from "@/components/ui/spinner"`
    }else if(component==="Switch"){
        component_name="switch"
        importComponent=`import { Switch } from "@/components/ui/switch"`
    }else if(component==="Table"){
        component_name="table"
        importComponent=`import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"`
    }else if(component==="Tabs"){
        component_name="tabs"
        importComponent=`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"`
    }else if(component==="Textarea"){
        component_name="textarea"
        importComponent=`import { Textarea } from "@/components/ui/textarea"`
    }else if(component==="Toggle"){
        component_name="toggle"
        importComponent=`import { Toggle } from "@/components/ui/toggle"`
    }else if(component==="Toggle Group"){
        component_name="toggle-group"
        importComponent=`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"`
    }else if(component==="Tooltip"){
        component_name="tooltip"
        importComponent=`import {Tooltip,TooltipContent,TooltipTrigger,} from "@/components/ui/tooltip"`
    }

    const spinner = ora(`install ${component} from Shadcn`).start()

    try {

        // await execa('npx', ['shadcn@latest', 'add', component], { stdio: 'inherit', shell: true });


         console.log(`Installing ${component}...`);
         //npx shadcn@latest add button
         //خلي احرف صغيره من list
         

  execSync(`npx shadcn@latest add ${component_name}`, { stdio: 'inherit' });
          spinner.succeed(chalk.green("It has been installed successfully"))


    } catch {
        spinner.fail(chalk.red("Something went wrong"))
        return

    }


    const { filePath } = await inquirer.prompt([
        { type: "input", name: "filePath", message: "Enter the path of the file you want to add the =>import<= to : ", default: "./src/App.tsx" }


    ])

    const resolvePath = path.resolve(filePath)


    if (!fs.existsSync(resolvePath)) {
        console.log(chalk.red(`File not found: ${resolvePath}`))
        return
    }


   

   

    let importText = importComponent

    const content = fs.readFileSync(resolvePath, "utf-8")

    if (!content.includes(importText.trim())) {
        const update = importText + "\n" + content
        fs.writeFileSync(resolvePath, update, "utf-8")
        console.log(chalk.green(`✅ Import added for ${component} Successfully`))

    } else {
        console.log(chalk.yellow(`⚠️ import for an existing ${component}.`))
    }


    console.log(chalk.cyanBright("🎉 Everything was successful!"))



}



// todo: try add component in file 
export async function Edit() {
    console.clear()
     const { component } = await inquirer.prompt([
        { type: "list", name: "component", message: "Choose the component you want :", choices: List }
    ])

      let component_name="";
      let importComponent=""

    if(component==="Alert"){
        component_name="alert"
        importComponent=`\n<Alert variant="default | destructive">
  <Terminal />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert> ` 
    }else if(component==="Accordion"){
        component_name="accordion"
        importComponent=`\nimport { Accordion, AccordionContent,AccordionItem,AccordionTrigger,} from "@/components/ui/accordion" `

    }else if (component==="Alert Dialog"){
        component_name="alert-dialog"
        importComponent=`import {AlertDialog,AlertDialogAction, AlertDialogCancel,AlertDialogContent, AlertDialogDescription, AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"`
    }else if(component==="Aspect Ratio"){
        component_name="aspect-ratio"
        importComponent=`import { AspectRatio } from "@/components/ui/aspect-ratio"`
    }else if(component==="Avatar"){
        component_name="avatar"
        importComponent=`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"`
    }else if(component==="Badge"){
        component_name="badge"
        importComponent=`import { Badge } from "@/components/ui/badge"`
    }else if(component==="Breadcrumb"){
        component_name="breadcrumb"
        importComponent=`import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbPage,BreadcrumbSeparator,} from "@/components/ui/breadcrumb"`
    }else if(component==="Button"){
        component_name="button"
        importComponent=`import { Button } from "@/components/ui/button"`
    }else if(component==="Button Group"){
        component_name="button-group"
        importComponent=`import {ButtonGroup,ButtonGroupSeparator, ButtonGroupText,} from "@/components/ui/button-group"`
    }else if(component==="Calendar"){
        component_name="calendar"
        importComponent=`import { Calendar } from "@/components/ui/calendar"`
    }else if(component==="Card"){
        component_name="card"
        importComponent=`import {Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"`
    }else if(component==="Carousel"){
        component_name="carousel"
        importComponent=`import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"`
    }else if(component==="Chart"){
        component_name="chart"
        importComponent=`import { ChartConfig, ChartContainer,ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"`
    }else if(component==="Checkbox"){
        component_name="checkbox"
        importComponent=`import { Checkbox } from "@/components/ui/checkbox" `
    }else if(component==="Collapsible"){
        component_name="collapsible"
        importComponent=`import {Collapsible,CollapsibleContent,CollapsibleTrigger,} from "@/components/ui/collapsible"`
    }else if(component==="Command"){
        component_name="command"
        importComponent=`import {Command,CommandDialog,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList,CommandSeparator,CommandShortcut,} from "@/components/ui/command"`
    }else if(component==="Context Menu"){
        component_name="context-menu"
        importComponent=`import {ContextMenu,ContextMenuContent,ContextMenuItem,ContextMenuTrigger,} from "@/components/ui/context-menu"`
    }else if(component==="Dialog"){
        component_name="dialog"
        importComponent=`import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle, DialogTrigger,} from "@/components/ui/dialog"`
    }else if(component==="Drawer"){
        component_name="drawer"
        importComponent=`import { Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle, DrawerTrigger,} from "@/components/ui/drawer"`
    }else if(component==="Dropdown Menu"){
        component_name="dropdown-menu"
        importComponent=`import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"`
    }else if(component==="Empty"){
        component_name="empty"
        importComponent=`import {Empty,EmptyContent,EmptyDescription,EmptyHeader,EmptyMedia, EmptyTitle,} from "@/components/ui/empty"`
    }else if(component==="Field"){
        component_name="field"
        importComponent=`import {Field,FieldContent,FieldDescription,FieldError,FieldGroup,FieldLabel,FieldLegend,FieldSeparator,FieldSet,FieldTitle,} from "@/components/ui/field"`
    }else if(component==="Hover Card"){
        component_name="hover-card"
        importComponent=`import {HoverCard,HoverCardContent,HoverCardTrigger,} from "@/components/ui/hover-card"`
    }else if(component==="Input"){
        component_name="input"
        importComponent=`import { Input } from "@/components/ui/input"`
    }else if(component==="Input Group"){
        component_name="input-group"
        importComponent=`import {InputGroup,InputGroupAddon,InputGroupButton,InputGroupInput,InputGroupText,InputGroupTextarea,} from "@/components/ui/input-group"`
    }else if(component==="Input OTP"){
        component_name="input-otp"
        importComponent=`import {InputOTP,InputOTPGroup,InputOTPSeparator,InputOTPSlot,} from "@/components/ui/input-otp"`
    }else if(component==="Item"){
        component_name="item"
        importComponent=`import {Item,ItemActions,ItemContent,ItemDescription,ItemFooter,ItemHeader,ItemMedia,ItemTitle,} from "@/components/ui/item"`
    }else if(component==="Kbd"){
        component_name="kbd"
        importComponent=`import { Kbd } from "@/components/ui/kbd"`
    }else if(component==="Label"){
        component_name="label"
        importComponent=`import { Label } from "@/components/ui/label"`
    }else if(component==="Menubar"){
        component_name="menubar"
        importComponent=`import { Menubar,MenubarContent,MenubarItem, MenubarMenu,MenubarSeparator,MenubarShortcut,MenubarTrigger,} from "@/components/ui/menubar"`
    }else if(component==="Native Select"){
        component_name="native-select"
        importComponent=`import {NativeSelect,NativeSelectOptGroup, NativeSelectOption,} from "@/components/ui/native-select"`
    }else if(component==="Navigation Menu"){
        component_name="navigation-menu"
        importComponent=`import { NavigationMenu, NavigationMenuContent,NavigationMenuIndicator,NavigationMenuItem,NavigationMenuLink, NavigationMenuList,NavigationMenuTrigger,NavigationMenuViewport,} from "@/components/ui/navigation-menu"`
    }else if(component==="Pagination"){
        component_name="pagination"
        importComponent=`import {Pagination,PaginationContent,PaginationEllipsis,PaginationItem,PaginationLink,PaginationNext,PaginationPrevious,} from "@/components/ui/pagination"`
    }else if(component==="Popover"){
        component_name="popover"
        importComponent=`import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"`
    }else if(component==="Progress"){
        component_name="progress"
        importComponent=`import { Progress } from "@/components/ui/progress"`
    }else if(component==="Radio Group"){
        component_name="radio-group"
        importComponent=`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"`
    }else if(component==="Resizable"){
        component_name="resizable"
        importComponent=`import {ResizableHandle,ResizablePanel,ResizablePanelGroup,} from "@/components/ui/resizable"`
    }else if(component==="Scroll Area"){
        component_name="scroll-area"
        importComponent=`import { ScrollArea } from "@/components/ui/scroll-area"`
    }else if(component==="Select"){
        component_name="select"
        importComponent=`import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"`
    }else if(component==="Separator"){
        component_name="separator"
        importComponent=`import { Separator } from "@/components/ui/separator"`
    }else if(component==="Sheet"){
        component_name="sheet"
        importComponent=`import {Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet"`
    }else if(component==="Skeleton"){
        component_name="skeleton"
        importComponent=`import { Skeleton } from "@/components/ui/skeleton"`
    }else if(component==="Slider"){
        component_name="slider"
        importComponent=`import { Slider } from "@/components/ui/slider"`
    }else if(component==="Sonner"){
        component_name="sonner"
        importComponent=`import { toast } from "sonner"`
    }else if(component==="Spinner"){
        component_name="spinner"
        importComponent=`import { Spinner } from "@/components/ui/spinner"`
    }else if(component==="Switch"){
        component_name="switch"
        importComponent=`import { Switch } from "@/components/ui/switch"`
    }else if(component==="Table"){
        component_name="table"
        importComponent=`import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"`
    }else if(component==="Tabs"){
        component_name="tabs"
        importComponent=`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"`
    }else if(component==="Textarea"){
        component_name="textarea"
        importComponent=`import { Textarea } from "@/components/ui/textarea"`
    }else if(component==="Toggle"){
        component_name="toggle"
        importComponent=`import { Toggle } from "@/components/ui/toggle"`
    }else if(component==="Toggle Group"){
        component_name="toggle-group"
        importComponent=`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"`
    }else if(component==="Tooltip"){
        component_name="tooltip"
        importComponent=`import {Tooltip,TooltipContent,TooltipTrigger,} from "@/components/ui/tooltip"`
    }


    let {edit}=await inquirer.prompt([{
        type:"list",name:"edit",choices:List,message:"Choose the component you want to put in file"
    }])


    const { filePath } = await inquirer.prompt([
        { type: "input", name: "filePath", message: "Enter the path of the file you want to add the =>import<= to : ", default: "./src/App.tsx" }


    ])

    const resolvePath = path.resolve(filePath)


    if (!fs.existsSync(resolvePath)) {
        console.log(chalk.red(`File not found: ${resolvePath}`))
        return
    }


   

   

    let after = " {/**after*/}"

    const content = fs.readFileSync(resolvePath, "utf-8")

    if (!content.includes(after.trim())) {
        //old
        // const update = importText + "\n" + content
        //new

        const update = importComponent + "\n" + content
        fs.writeFileSync(resolvePath, update, "utf-8")
        //${component}
        console.log(chalk.green(`✅  component element  Successfully add`))

    } else {
        console.log(chalk.yellow(`⚠️ component element  existing ${component}.`))
    }


    console.log(chalk.cyanBright("🎉 Everything was successful!"))

}

