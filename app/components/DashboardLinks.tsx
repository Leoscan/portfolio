"use client";

import { cn } from "@/lib/utils";
import { ArchiveIcon, FolderGit2, HomeIcon, Users2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const dashboardLinks = [
    {
        id: 0,
        name: "Home",
        href: "/dashboard",
        icon: HomeIcon,
    },
    {
        id: 1,
        name: "Projetos",
        href: "/dashboard/projetos",
        icon: FolderGit2,
    },
    {
        id: 2,
        name: "Blog",
        href: "/dashboard/blog",
        icon: ArchiveIcon,
    }
];

export function DasboardLinks() {
    const pathname = usePathname();
    return (
        <>
            {dashboardLinks.map((link) => (
                <Link
                    key={link.id}
                    href={link.href}
                    className={cn(
                        pathname === link.href
                            ? "text-primary variant='link'/10"
                            : "text-muted-foreground hover:text-foreground",
                        "flex items-center gap-3 rounded-lg px-3 py-2  transition-all  hover:text-primary"
                    )}
                >
                    <link.icon className="h-4 w-4" />
                    {link.name}
                </Link>
            ))}
        </>
    );
}