# 📦 Boxcn CLI — Smart Shadcn/UI Component Installer for React, Vite & Next.js
![NPM Version](https://img.shields.io/npm/v/@khalidabdi/boxcn)
![NPM Downloads](https://img.shields.io/npm/dm/@khalidabdi/boxcn)
![GitHub Stars](https://img.shields.io/github/stars/Khalidabdi1/Boxcn)


![Boxcn CLI Example](https://github.com/Khalidabdi1/Boxcn/blob/main/photo/example.png)

**Boxcn CLI** is a smart and developer-friendly **command-line tool** that helps you easily install and import [**Shadcn/UI**](https://ui.shadcn.com) components into your React, Vite, or Next.js projects.

With one simple command, **Boxcn** automatically:
- Installs your selected Shadcn component  
- Adds the correct `import` statements into your React file  
- Saves you time, effort, and endless manual setup ✨

---

## 🚀 Features

- ⚡ **Fast & Simple** — Install Shadcn components in seconds.  
- 🧩 **Smart Imports** — Automatically injects imports into your React files.  
- 🎨 **Interactive CLI** — Clean, user-friendly terminal experience.  
- 🔧 **Fully Compatible** — Works with Vite, Next.js, and CRA projects.  
- 🪄 **Automation Ready** — Great for large-scale projects and UI consistency.

---

## 🛠️ Installation

Before using Boxcn, make sure you have [**Shadcn/UI**](https://ui.shadcn.com/docs/installation) installed in your project.

### 🌍 Global Installation

```bash
npm install -g @khalidabdi/boxcn
```
📦 Local Installation
```bash
npm install @khalidabdi/boxcn
```

💡 Usage
🔍 Search for Components
```bash

Boxcn search
```
This opens an interactive CLI that allows you to select any Shadcn/UI component.
Boxcn will then:

Find and install the selected component using npx shadcn@latest add

Automatically add the correct import statement to your target React file

No need to browse documentation — everything happens in seconds ⚡

✨ New Command — Boxcn edit
You can now automatically insert a selected Shadcn/UI component directly inside your React file.

Add this marker where you want to insert the component:

```tsx

{/**after*/}
```
Then run:

```bash

Boxcn edit
```
Boxcn will:

Prompt you to choose a Shadcn component (e.g., Button, Card, Accordion).

Locate {/**after*/} inside your file.

Automatically insert the JSX for the component below that line.

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
Select: Button

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
💡 Notes:

The Boxcn edit command only works if {/**after*/} exists in your file.

Each added component is automatically imported and positioned correctly.

Default target file: ./src/App.tsx

Works perfectly with React, Vite, or Next.js projects.

🚀 Why It’s Awesome
Boxcn edit transforms Boxcn CLI from a simple installer into a powerful UI automation assistant.
It saves time, automates repetitive edits, and keeps your code organized.

Example Flow:

```bash
Boxcn edit
```

✅ Choose a Shadcn component
✅ Boxcn finds {/**after*/}
✅ Component is inserted instantly!

📸 Example Screenshot


🤝 Contributing
Contributions, pull requests, and feedback are welcome 💡
Help make Boxcn even better for the React developer community!

👉 Open an issue
👉 Submit a pull request

📜 License
Licensed under the MIT License © Khalid Abdi

🌟 Why Developers Love Boxcn
Boxcn CLI helps developers save time and automate repetitive setup tasks when working with Shadcn/UI components.
With a single command, you can integrate and import beautiful UI elements seamlessly into your React project.

🔍 SEO Keywords (for better discoverability)
shadcn ui, boxcn cli, react components, vite, nextjs, ui automation, frontend tools, component installer, shadcn cli, react shadcn, developer productivity, typescript, shadcn generator, ui builder

👨‍💻 Author
Created with ❤️ by Khalid Abdi
Follow for more developer tools and open-source projects 🚀

[📦 NPM Package](https://www.npmjs.com/package/@khalidabdi/boxcn)
[⭐ GitHub Repository](https://github.com/Khalidabdi1/Boxcn)
