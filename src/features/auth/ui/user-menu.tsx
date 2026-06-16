"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/shared/ui/dropdown-menu";
import {Skeleton} from "@/shared/ui/skeleton";
import {Button} from "@/shared/ui/button";
import {Avatar, AvatarImage} from "@/shared/ui/avatar";

export function UserMenu() {
    const { data: session, status } = useSession()

    if (status === "loading") return <Skeleton />
    if (!session?.user) return <Button onClick={() => signIn("discord")}>Войти</Button>


    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar><AvatarImage src={session.user.image ?? ""} /></Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <div>{session.user.name}</div>
                <DropdownMenuItem onClick={() => signOut()}>Выйти</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}