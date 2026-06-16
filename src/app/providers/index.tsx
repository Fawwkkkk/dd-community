'use client';

import { SessionProvider } from "next-auth/react"


import { Session } from "next-auth";
import { ThemeProvider } from './theme-provider';
import { SidebarProvider } from '@/shared/ui/sidebar';
import { TooltipProvider } from '@/shared/ui/tooltip';
import React from "react";

export function Providers({ children, session }: { children: React.ReactNode; session?: Session | null }) {
    return (
        <SessionProvider session={session}>
            <ThemeProvider>
                <SidebarProvider>
                    <TooltipProvider>
                        {children}
                    </TooltipProvider>
                </SidebarProvider>
            </ThemeProvider>
        </SessionProvider>
    );
}
//