import type {Metadata} from "next";
import {auth} from "@/features/auth/api/auth";
import {Providers} from "./providers";
import "./globals.css";
import Header from "@/widgets/Header/Header";
import AppSidebar from "@/widgets/Sidebar/Sidebar";
import {Footer} from "@/widgets/Footer/Footer";
import React from "react";

export const metadata: Metadata = {
    title: "Мой DISCORD Сервер",
    description: "Комьюнити сайт~",
};

export default async function RootLayout({children}: { children: React.ReactNode }) {
    const session = await auth();
    return (
        <html lang="ru" suppressHydrationWarning>
        <body className="min-h-screen bg-background font-sans antialiased">
        <Providers session={session}>
            <div className="flex min-h-screen flex-1">
                {/* sidebar слева */}
                <AppSidebar/>

                {/* Правая колонка: хедер + контент */}
                <div className="flex flex-col flex-1">
                    <Header/>
                    <main className="flex-1 p-4 md:p-6">
                        {children}
                    </main>
                    <Footer/>
                </div>
            </div>
        </Providers>
        </body>
        </html>
    );
}