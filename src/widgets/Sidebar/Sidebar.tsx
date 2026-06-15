"use client";

import { Home, FileText, Users, Calendar, Trophy } from 'lucide-react';
import Link from 'next/link';
import { useSidebar } from "@/shared/ui/sidebar";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/shared/ui/sidebar"

// Наши пункты меню: иконка, название, ссылка
const menuItems = [
    { title: "Главная", url: "/", icon: Home },
    { title: "Блог", url: "/blog", icon: FileText },
    { title: "Игроки", url: "/members", icon: Users },
    { title: "Ивенты", url: "/events", icon: Calendar },
    { title: "Турниры", url: "/tournaments", icon: Trophy },
];

export default function AppSidebar() {
    const { open } = useSidebar();
    return (
        <Sidebar className="z-1000 " collapsible="icon">
            <div className={`flex ${open ? 'px-5 pt-6' : 'px-4 pt-6'} transition-all duration-200`}>
                <SidebarTrigger className="h-4 w-4" />
                <span className={`
                    ml-2 text-sm -mt-0.5 
                    transition-all duration-200 
                    whitespace-nowrap overflow-hidden
                    ${open
                    ? 'opacity-100 max-w-[100px] delay-100'
                    : 'opacity-0 max-w-0 p-0 m-0'
                }
                `}>
                    Sidebar
                </span>
            </div>
            <SidebarContent>
                <SidebarGroup className="my-26">
                    <SidebarGroupLabel>Навигация</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild tooltip={item.title}>
                                        {/* asChild и Link из Next.js обеспечивают быстрый переход без перезагрузки */}
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}