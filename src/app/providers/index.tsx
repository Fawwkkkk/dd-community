'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from './theme-provider';
import { SidebarProvider } from '@/shared/ui/sidebar';
import { TooltipProvider } from '@/shared/ui/tooltip';
import React from "react";
import type { Session } from 'next-auth';

interface ProvidersProps {
    children: React.ReactNode;
    session?: Session | null;
}

export function Providers({ children, session }: ProvidersProps) {
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