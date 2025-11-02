In Next.js, a page is a React Component exported from a (potentially nested) page.js file in the app directory. Next.js uses a file-systembased
router
where:
Folders are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the parent (root) 
folder down to a final child (leaf) folder that includes a page.js file. 
Files matching specific naming conventions are used to create UI that is shown for a route segment. This includes page.js but also
others for error handling, layout, and more.

The app folder handles all routing. We can still have regular components, hooks, context etc folders - but store these under the src folder, NOT in app.
In Next.js (App Router), the reason every route uses a file called page.js (or page.jsx / page.tsx) is that Next.js automatically turns that file into a route.
So, everything you want to see on the screen for that page (text, buttons, components, layout, etc.) must be inside this file.

The layout.js file defines the structure that wraps all pages inside that folder.
The root layout is defined in the top level app directory and applies to all routes. This layout is mandatory and enables
us to modify the initial HTML returned from the server.


🧩 1. In React (Vite)
Your App.jsx acts as the root wrapper:
It imports pages and routes.
It may include your navigation bar, footer, or global context.
It defines <Routes> and <Route> components with react-router-dom.

⚙️ 2. In Next.js
There is no App.jsx — Next.js replaces it with app/layout.jsx.
This file acts as the global wrapper for every page, automatically applied to all routes.




Folder structure:

src
-app
files:
page.js (replaces AppRoutes)
layout.js (replaces App.js)
not-found.jsx
providers.jsx
--about 
    files:
        page.js
        layout.jsx
--home
    ---login
        files:
        page.js
--context
    files:
    themeContext.jsx
    userContext.jsx
--components
    files:
    NavBar.js
    LoginForm.jsx