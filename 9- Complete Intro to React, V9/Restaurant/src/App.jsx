import { StrictMode } from "react"; // need useState
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen"

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

function App() {
    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </StrictMode>
    );
}

var container = document.getElementById("root");
var root = createRoot(container);
root.render(<App />);