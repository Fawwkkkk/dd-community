import type { Metadata } from "next";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { SidebarProvider } from "@/shared/ui/sidebar";
import { TooltipProvider } from "@/shared/ui/tooltip";
import "./globals.css";
import Header from "@/widgets/Header/Header";
import AppSidebar from "@/widgets/Sidebar/Sidebar";

export const metadata: Metadata = {
    title: "Мой DISCORD Сервер",
    description: "Комьюнити сайт~",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" suppressHydrationWarning>
        <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
            <SidebarProvider>
                <TooltipProvider>
                    <div className="flex min-h-screen">
                        {/* Сайдбар слева */}
                        <AppSidebar />

                        {/* Правая колонка: хедер + контент */}
                        <div className="flex flex-col flex-1">
                            <Header />
                            <main className="flex-1 p-4 md:p-6">
                                {children}
                            </main>
                        </div>
                    </div>
                </TooltipProvider>
            </SidebarProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}