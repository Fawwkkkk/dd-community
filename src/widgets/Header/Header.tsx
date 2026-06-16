import Image from "next/image";
import Link from "next/link";
import { UserMenu } from "@/features/auth/ui/user-menu";

export default function Header() {
    return (
        <header className="border-b border-border bg-background/95 px-4 md:px-6">
            <div className="flex h-16 items-center justify-between">
                {/* Левая часть: лого + название */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/ds-ava.jpg"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-xl"
                    />
                    <span className="font-bold text-xl hidden sm:inline-block">
                        DD <span className="text-primary">Dynasty</span>
                    </span>
                </Link>

                {/* Центр: навигация */}
                <nav className="hidden md:flex items-center gap-6 -ml-36">
                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                        Blog
                    </Link>
                    <Link href="/widget" className="text-sm font-medium hover:text-primary transition-colors">
                        Widget
                    </Link>
                </nav>

                <UserMenu />
            </div>
        </header>
    );
}