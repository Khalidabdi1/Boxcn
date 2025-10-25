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


let editList=List
editList.push("Typography h1","Typography h2","Typography h3","Typography h4","Typography P","Typography blockquote","Typography list","Typography Inline code","Typography Lead")

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
    //  const { component } = await inquirer.prompt([
    //     { type: "list", name: "component", message: "Choose the component you want :", choices: List }
    // ])

      let component_name="";
      let importComponent=""



    let {edit}=await inquirer.prompt([{
        type:"list",name:"edit",choices:editList,message:"Choose the component you want to put in file"
    }])



    if(edit==="Alert"){
        component_name="alert"
        importComponent=`\n<Alert variant="default | destructive">
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert> ` 
    }else if(edit==="Accordion"){
        component_name="accordion"
        importComponent=`\n<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion> `

    }else if (edit==="Alert Dialog"){
        component_name="alert-dialog"
        importComponent=`<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`
    }else if(edit==="Aspect Ratio"){
        component_name="aspect-ratio"
        importComponent=`<AspectRatio ratio={16 / 9}>
   {/**put any Image here or use this */}
     {/**<Image src="..." alt="Image" className="rounded-md object-cover" />*/}
</AspectRatio>`
    }else if(edit==="Avatar"){
        component_name="avatar"
        importComponent=`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`
    }else if(edit==="Badge"){
        component_name="badge"
        importComponent=`<Badge variant="default | outline | secondary | destructive">Badge</Badge>`
    }else if(edit==="Breadcrumb"){
        component_name="breadcrumb"
        importComponent=`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`
    }else if(edit==="Button"){
        component_name="button"
        importComponent=`<Button variant="outline">Button</Button>`
    }else if(edit==="Button Group"){
        component_name="button-group"
        importComponent=` <ButtonGroup orientation="vertical" aria-label="Media controls" className="h-fit">
     {/** size =ls | icon-lg | icon-sm | sm | */}

      <Button variant="outline" size="icon">
          {/** put anything*/}
      </Button>
    </ButtonGroup>`
    // }else if(edit==="Calendar"){
    //     component_name="calendar"
    //     importComponent=`import { Calendar } from "@/components/ui/calendar"`
    }else if(edit==="Card"){
        component_name="card"
        importComponent=`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`
    }else if(edit==="Carousel"){
        component_name="carousel"
        importComponent=`<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`
    // }else if(edit==="Chart"){
    //     component_name="chart"
    //     importComponent=`import { ChartConfig, ChartContainer,ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"`
    }else if(edit==="Checkbox"){
        component_name="checkbox"
        importComponent=`<Checkbox />`
    }else if(edit==="Collapsible"){
        component_name="collapsible"
        importComponent=`<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution
    required.
  </CollapsibleContent>
</Collapsible>`
    }else if(edit==="Command"){
        component_name="command"
        importComponent=`<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`
    }else if(edit==="Context Menu"){
        component_name="context-menu"
        importComponent=`<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`
    }else if(edit==="Dialog"){
        component_name="dialog"
        importComponent=`<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`
    }else if(edit==="Drawer"){
        component_name="drawer"
        importComponent=`<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`
    }else if(edit==="Dropdown Menu"){
        component_name="dropdown-menu"
        importComponent=`<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`
    }else if(edit==="Empty"){
        component_name="empty"
        importComponent=`<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Icon />
    </EmptyMedia>
    <EmptyTitle>No data</EmptyTitle>
    <EmptyDescription>No data found</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Add data</Button>
  </EmptyContent>
</Empty>`
    }else if(edit==="Field"){
        component_name="field"
        importComponent=`<FieldSet>
  <FieldLegend>Profile</FieldLegend>
  <FieldDescription>This appears on invoices and emails.</FieldDescription>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="name">Full name</FieldLabel>
      <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
      <FieldDescription>This appears on invoices and emails.</FieldDescription>
    </Field>
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" autoComplete="off" aria-invalid />
      <FieldError>Choose another username.</FieldError>
    </Field>
    <Field orientation="horizontal">
      <Switch id="newsletter" />
      <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>
    </Field>
  </FieldGroup>
</FieldSet>`
    }else if(edit==="Hover Card"){
        component_name="hover-card"
        importComponent=`<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>`
    }else if(edit==="Input"){
        component_name="input"
        importComponent=`<Input type="email" placeholder="Email" />`
    }else if(edit==="Input Group"){
        component_name="input-group"
        importComponent=`<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon>
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupAddon align="inline-end">
    <InputGroupButton>Search</InputGroupButton>
  </InputGroupAddon>
</InputGroup>`
    }else if(edit==="Input OTP"){
        component_name="input-otp"
        importComponent=`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`
    }else if(edit==="Item"){
        component_name="item"
        importComponent=`<Item>
  <ItemHeader>Item Header</ItemHeader>
  <ItemMedia />
  <ItemContent>
    <ItemTitle>Item</ItemTitle>
    <ItemDescription>Item</ItemDescription>
  </ItemContent>
  <ItemActions />
  <ItemFooter>Item Footer</ItemFooter>
</Item>`
    }else if(edit==="Kbd"){
        component_name="kbd"
        importComponent=`<Kbd>Ctrl</Kbd>`
    }else if(edit==="Label"){
        component_name="label"
        importComponent=`<Label htmlFor="email">Your email address</Label>`
    }else if(edit==="Menubar"){
        component_name="menubar"
        importComponent=`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`
    }else if(edit==="Native Select"){
        component_name="native-select"
        importComponent=`<NativeSelect>
  <NativeSelectOption value="">Select a fruit</NativeSelectOption>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
  <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
  <NativeSelectOption value="grapes" disabled>
    Grapes
  </NativeSelectOption>
  <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
</NativeSelect>`
    }else if(edit==="Navigation Menu"){
        component_name="navigation-menu"
        importComponent=`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`
    }else if(edit==="Pagination"){
        component_name="pagination"
        importComponent=`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`
    }else if(edit==="Popover"){
        component_name="popover"
        importComponent=`<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>`
    }else if(edit==="Progress"){
        component_name="progress"
        importComponent=`<Progress value={33} />`
    }else if(edit==="Radio Group"){
        component_name="radio-group"
        importComponent=`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    {/**<Label htmlFor="option-one">Option One</Label>*/}
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
   {/** <Label htmlFor="option-two">Option Two</Label>*/}
  </div>
</RadioGroup>`
    }else if(edit==="Resizable"){
        component_name="resizable"
        importComponent=`<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>`
    }else if(edit==="Scroll Area"){
        component_name="scroll-area"
        importComponent=`<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        {/* change text*/}
  Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
  then, one day, the people of the kingdom discovered that the jokes left by
  Jokester were so funny that they couldn't help but laugh. And once they
  started laughing, they couldn't stop.
</ScrollArea>`
    }else if(edit==="Select"){
        component_name="select"
        importComponent=`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`
    }else if(edit==="Separator"){
        component_name="separator"
        importComponent=`<Separator />`
    }else if(edit==="Sheet"){
        component_name="sheet"
        importComponent=`<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`
    }else if(edit==="Skeleton"){
        component_name="skeleton"
        importComponent=`<Skeleton className="h-[20px] w-[100px] rounded-full" />`
    }else if(edit==="Slider"){
        component_name="slider"
        importComponent=`<Slider defaultValue={[33]} max={100} step={1} />`
    }else if(edit==="Sonner"){
        component_name="sonner"
        importComponent=`
        {/* import Button*/}
        <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>`
    }else if(edit==="Spinner"){
        component_name="spinner"
        importComponent=`<Spinner />`
    }else if(edit==="Switch"){
        component_name="switch"
        importComponent=`<Switch />`
    }else if(edit==="Table"){
        component_name="table"
        importComponent=`<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`
    }else if(edit==="Tabs"){
        component_name="tabs"
        importComponent=`<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>`
    }else if(edit==="Textarea"){
        component_name="textarea"
        importComponent=`<Textarea />`
    }else if(edit==="Toggle"){
        component_name="toggle"
        importComponent=`<Toggle>Toggle</Toggle>`
    }else if(edit==="Toggle Group"){
        component_name="toggle-group"
        importComponent=`<ToggleGroup type="single">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>`
    }else if(edit==="Tooltip"){
        component_name="tooltip"
        importComponent=`<Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>`
    }else if(edit==="Typography h1"){
        component_name="Typography h1"
        importComponent=`<h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      Taxing Laughter: The Joke Tax Chronicles
    </h1>`
    }else if(edit==="Typography h2"){
        component_name="Typography h2"
        importComponent=`<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      The People of the Kingdom
    </h2>`
    }else if(edit==="Typography h3"){
        component_name="Typography h3"
        importComponent=`<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      The Joke Tax
    </h3>`
    }else if(edit==="Typography h4"){
        component_name="Typography h4"
        importComponent=` <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      People stopped telling jokes
    </h4>`
    }else if(edit==="Typography blockquote"){
        component_name="Typography blockquote"
        importComponent=` <blockquote className="mt-6 border-l-2 pl-6 italic">
      &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
      it&apos;s only fair that they should pay for the privilege.&quot;
    </blockquote>`
    }else if(edit==="Typography list"){
        component_name="Typography list"
        importComponent=`<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>`
    }else if(edit==="Typography Inline code"){
        component_name="Typography Inline code"
        importComponent=` <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      @radix-ui/react-alert-dialog
    </code>`
    }else if(edit==="Typography Lead"){
        component_name="Typography Lead"
        importComponent=` <p className="text-muted-foreground text-xl">
      A modal dialog that interrupts the user with important content and expects
      a response.
    </p>`
    }

// editList.push("Typography h1","Typography h2","Typography h3","Typography h4","Typography P","Typography blockquote","Typography list","Typography Inline code","Typography Lead")


    const { filePath } = await inquirer.prompt([
        { type: "input", name: "filePath", message: "Enter the path of the file you want to add the =>import<= to : ", default: "./src/App.tsx" }


    ])

    const resolvePath = path.resolve(filePath)


    if (!fs.existsSync(resolvePath)) {
        console.log(chalk.red(`File not found: ${resolvePath}`))
        return
    }


   

   

    let after = "{/**after*/}"

    const content = fs.readFileSync(resolvePath, "utf-8")

    if (content.includes(after.trim())) {
        //old
        // const update = importText + "\n" + content
        //new

      const updatedContent = content.replace(after, `\n${importComponent}`)


        // const update = importComponent + "\n" + content

        fs.writeFileSync(resolvePath, updatedContent, "utf-8")
        //${component}
        console.log(chalk.green(`✅  component element  Successfully add`))

    } else {
        console.log(chalk.yellow(`⚠️ component element  existing ${edit}.`))
        console.log(chalk.red("don't forget to added {/**after*/}  after where you went to put component element"))
    }


    console.log(chalk.cyanBright("🎉 Everything was successful!"))

}

