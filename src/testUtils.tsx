import {QueryClient, QueryClientProvider} from "react-query";
import * as React from "react";
import {render} from "@testing-library/react";

const createTestQueryClient = () => new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
})


// Renderer for components
export function renderWithClient(ui: React.ReactElement) {
    const testQueryClient = createTestQueryClient()
    const { rerender, ...result } = render(
        <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
    )
    return {
        ...result,
        rerender: (rerenderUi: React.ReactElement) =>
            rerender(
                <QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>
            ),
    }
}


// Renderer for custom hooks
export function createWrapper() {
    const testQueryClient = createTestQueryClient()
    return ({ children }: {children: React.ReactNode}) => (
        <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
    )
}