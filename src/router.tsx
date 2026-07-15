import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
} from "@tanstack/react-router";

import App from "./App";
import Login from "./routes/auth/Login";
import Generate from "./routes/gl/Generate";

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

const routeTree = rootRoute.addChildren([
    indexRoute,
    loginRoute,
    glCreateRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}
