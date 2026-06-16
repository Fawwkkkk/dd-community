"use client";

import {Home, FileText, Users, Calendar, Trophy} from 'lucide-react';
import Link from 'next/link';
import {useSidebar} from "@/shared/ui/sidebar";
import gsap from "gsap";

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
import {useEffect, useRef} from "react";

// Наши пункты меню: иконка, название, ссылка
const menuItems = [
    {title: "Главная", url: "/", icon: Home},
    {title: "Блог", url: "/blog", icon: FileText},
    {title: "Игроки", url: "/members", icon: Users},
    {title: "Ивенты", url: "/events", icon: Calendar},
    {title: "Турниры", url: "/tournaments", icon: Trophy},
];

export default function AppSidebar() {
    const {open} = useSidebar();
    const sidebarItemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const sidebarLabelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(sidebarLabelRef.current,
            {y: 30, opacity: 0, scale: 0.95},
            {y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(0.6)"},
        );

        sidebarItemRefs.current.forEach((item) => {
            if (item) {
                tl.fromTo(item,
                    {y: 30, opacity: 0},
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "back.out(0.6)"
                    },
                    `-=0.4`
                )
            }
        });
    }, []);

    // Анимация при сворачивании/разворачивании sidebar
    useEffect(() => {
        // Анимация лейбла
        if (sidebarLabelRef.current) {
            gsap.to(sidebarLabelRef.current, {
                opacity: open ? 1 : 0,
                duration: 0.02,
                ease: "power2.out"
            });
        }
    }, [open]);

    return (
        <Sidebar collapsible="icon">
            <div className={`flex ${open ? 'px-5 pt-6' : 'px-4 pt-6'} transition-all duration-200`}>
                <SidebarTrigger className="h-4 w-4"/>
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
                    <SidebarGroupLabel ref={sidebarLabelRef}>Навигация</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item, index) => (
                                <SidebarMenuItem key={item.title} ref={el => {
                                    sidebarItemRefs.current[index] = el
                                }}>
                                    <SidebarMenuButton asChild tooltip={item.title}>
                                        {/* asChild и Link из Next.js обеспечивают быстрый переход без перезагрузки */}
                                        <Link href={item.url}>
                                            <item.icon/>
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