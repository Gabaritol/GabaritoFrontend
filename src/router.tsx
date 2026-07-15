import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
} from "@tanstack/react-router";

import App from "./App";
import Login from "./routes/auth/Login";
import Generate from "./routes/gl/Generate";
import Upload from "./routes/gl/Upload";

const rootRoute = createRootRoute({
    component: () => (
        <main className="app-container">
            <Outlet />
        </main>
    ),
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: App,
});

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/login",
    component: Login,
});

const glCreateRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/gl/generate",
    component: Generate,
});

const glUploadRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/gl/upload",
    component: Upload,
});

const routeTree = rootRoute.addChildren([
    indexRoute,
    loginRoute,
    glCreateRoute,
    glUploadRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}
