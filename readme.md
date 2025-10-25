



# 📦 Boxcn CLI — Smart Shadcn/UI Component Installer

![Boxcn CLI Example](https://github.com/Khalidabdi1/Boxcn/blob/main/photo/example.png)

**Boxcn CLI** is a smart, developer-friendly **command-line tool** that helps you easily install and import [**Shadcn/UI**](https://ui.shadcn.com) components into your React, Vite, or Next.js project.

With one simple command, Boxcn handles:
- Installing your chosen Shadcn component  
- Automatically adding the correct `import` statement into your file  
- Saving you time, effort, and endless typing ✨

---

## 🚀 Features

- ⚡ **Fast & Simple** — Install Shadcn components in seconds.  
- 🧩 **Smart Imports** — Automatically injects imports into your React files.  
- 🎨 **Interactive CLI** — Beautiful, user-friendly terminal interface.  
- 🔧 **Fully Compatible** — Works with Vite, Next.js, and CRA projects.  
- 🪄 **Automation Ready** — Perfect for large-scale projects and UI consistency.

---

## 🛠️ Installation

Before installing, make sure you have [**Shadcn/UI**](https://ui.shadcn.com/docs/installation) set up in your project.

### Global Installation

```bash
npm install -g @khalidabdi/boxcn
````

### Local Installation

```bash
npm install @khalidabdi/boxcn
```

---

## 💡 Usage


### Search for Components

```bash
Boxcn search
```
-This will open an interactive CLI where you can select any Shadcn component.
Boxcn will then:

* Quickly find and add Shadcn components from the CLI without browsing documentation.
* Install it using `npx shadcn@latest add`
* Automatically insert the correct import statement into your target React file

---

## ✨ New Feature — `Boxcn edit`

Now you can **automatically insert your selected [Shadcn/UI](https://ui.shadcn.com) component element** directly inside your React file — exactly where you want it!

Just place a small comment marker in your file:


{/**after*/}
Then run the command below 👇

```bash
Boxcn edit
```
Boxcn will:

Prompt you to select a Shadcn component (e.g., Button, Card, Accordion, etc.)

Locate {/**after*/} in your chosen file

Automatically insert the component’s JSX code below it

🪄 Example
Before:

```tsx

export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      {/**after*/}
    </div>
  )
}
```
After running:

```bash

Boxcn edit
```
🧩 Select Button

Result:

```tsx

export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Button>Click me</Button>
    </div>
  )
}
```
💡 Notes
The Boxcn edit command only works if {/**after*/} exists in your file.

Each component is automatically imported and inserted in the correct position.

Works perfectly with any React, Vite, or Next.js project.

Default target file: ./src/App.tsx

🚀 Why It’s Awesome
Boxcn edit turns Boxcn CLI from a simple installer into a powerful UI assistant.
It saves time, automates repetitive edits, and keeps your code organized.

Example Command Flow:

```bash
Boxcn edit
```
✅ Choose a component
✅ Boxcn finds {/**after*/}
✅ Component added instantly!



## 📁 Example Screenshot

![Boxcn CLI Demo](https://github.com/Khalidabdi1/Boxcn/blob/main/photo/example.png)

---

## 🤝 Contributing

Want to make Boxcn better?
Pull requests, issues, and feature suggestions are always welcome 💡

👉 [Open an issue](https://github.com/Khalidabdi1/Boxcn/issues)
👉 [Submit a pull request](https://github.com/Khalidabdi1/Boxcn/pulls)

---

## 📜 License

**MIT License** © [Khalid Abdi](https://github.com/Khalidabdi1)

---

## 🌟 Why Boxcn?

> Boxcn CLI was built to help developers save time and automate repetitive setup tasks when working with Shadcn/UI components.
> With a single command, you can integrate and import UI elements seamlessly.

---

## 🔍 SEO Keywords

`shadcn ui`, `cli`, `boxcn`, `react components`, `vite`, `nextjs`, `ui automation`, `frontend tools`, `component installer`, `developer productivity`

---

### 💬 Author

Created with ❤️ by [**Khalid Abdi**](https://github.com/Khalidabdi1)
Follow for more tools and open-source projects 🚀

