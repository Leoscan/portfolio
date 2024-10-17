import { ReactNode } from "react";
import Link from "next/link";
import { DasboardLinks } from "../components/DashboardLinks";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="min-h-screen w-full flex flex-col">
                <header className="flex h-14 items-center gap-4 bg-muted/100 lg:h-[60px] lg:px-6">
                    <div className="flex h-14 items-center  lg:h-[60px] lg:px-6 mx-5">
                        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                            <p className="text-xl font-bold">Leonardo Felix Scandura</p>
                        </Link>
                    </div>

                    <div className="ml-auto flex items-center gap-x-4 mx-5">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="flex flex-col">
                                <nav className="grid gap-2 mt-10">
                                    <DasboardLinks />
                                </nav>
                            </SheetContent>
                        </Sheet>

                        <div className="hidden md:flex items-center gap-x-4">
                            <DasboardLinks />
                        </div>
                        <ThemeToggle />
                    </div>
                </header>

                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </div>
        </>
    );
}
