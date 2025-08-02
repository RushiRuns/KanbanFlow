# Project Overview

This is a Kanban board application designed for individuals to organize tasks effortlessly. The application is built with a React frontend and a backend (the backend code is not included in this analysis).

The frontend is a single-page application (SPA) built with [React](https://react.dev/) and [Vite](https://vitejs.dev/). It uses [React Router](https://reactrouter.com/) for routing and has a clean, modern UI built with [Tailwind CSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/). The application features drag-and-drop functionality for tasks, allowing users to move them between different boards (e.g., "To Do", "In Progress", "Done").

## Key Technologies

*   **Frontend:**
    *   [React](https://react.dev/)
    *   [Vite](https://vitejs.dev/)
    *   [React Router](https://reactrouter.com/)
    *   [Tailwind CSS](https://tailwindcss.com/)
    *   [Shadcn UI](https://ui.shadcn.com/)
    *   [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) (for drag-and-drop)
*   **Backend:**
    *   (Not included in this analysis)

# Building and Running

To build and run the frontend application, you will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server and open the application in your default browser at `http://localhost:5173/`.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a `dist` directory with the production-ready files.

4.  **Lint the code:**
    ```bash
    npm run lint
    ```
    This will run ESLint to check for any code quality issues.

5.  **Preview the production build:**
    ```bash
    npm run preview
    ```
    This will start a local server to preview the production build.

# Development Conventions

The project follows a modular structure, with a clear separation of concerns between components, modules, hooks, and other files.

*   **Components:** Pure presentational/stateless components are located in the `src/components` directory.
*   **assets:** holds assets like images, icons, etc. which are located in `src/assets` directory.
*   **Modules:** Business logic, state management, and API handlers are located in the `src/modules` directory.
*   **Hooks:** Custom reusable React hooks are located in the `src/hooks` directory.
*   **Context:** React Context API providers and logic are located in the `src/context` directory.
*   **API:** Network logic for talking to the backend API is located in the `src/api` directory.
*   **Utils:** Helpers, formatting functions, and constants are located in the `src/utils` directory.
*   **Routes:** Route and navigation logic is located in the `src/routes` directory.
*   **Styles:** CSS files are located in the `src/styles` directory.

The project uses [ESLint](https://eslint.org/) for code linting and follows the standard React/JavaScript coding conventions.
