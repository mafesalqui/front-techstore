'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useCart } from "@/components/cart-context";
import CartSheetContent from "@/components/cart-sheet-content";

export default function Header() {
    const pathName = usePathname();
    const navigation = [
        { name: "Inicio", href: "/" },
        { name: "Laptops y Computadores", href: "/categoria/laptops-y-computadores" },
        { name: "Smartphones y tablets", href: "/categoria/smartphones-y-tablets" },
        { name: "Accesorios y Gadgets", href: "/categoria/accesorios-y-gadgets" },
        { name: "Componentes y Almacenamiento", href: "/categoria/componentes-y-almacenamiento" },
    ];

    const { items } = useCart();
    const totalItems = items.length;

    return (
        <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur-supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center mx-auto lg:max-w-[1200px] xl:max-w-[1400px]">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Abrir Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetTitle>
                            <nav className="grid gap-6 p-4 text-lg font-medium">
                                Menu
                            </nav>
                        </SheetTitle>
                        <nav className="grid gap-6 p-4 text-lg font-medium">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="hover:text-foreground/80"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <SignedIn>
                                <Link
                                    href="/admin/pedidos"
                                    className="hover:text-foreground/80"
                                >
                                    Panel de administración
                                </Link>
                            </SignedIn>
                        </nav>
                    </SheetContent>
                </Sheet>

                <div className="ml-4 ">
                    <Link href="/" className="font-bold text-xl">
                        TechStore
                    </Link>
                </div>

                <nav className="mx-6 hidden md:flex md:items-center md:gap-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium ${pathName === item.href
                                ? "text-foreground"
                                : "text-foreground/60 hover:text-foreground/80"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4 ml-auto">
                    <form className="hidden md:flex items-center">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Buscar productos..."
                                className="w-64 pl-8 bg-background"
                            />
                        </div>
                    </form>
                    <ModeToggle />

                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Button variant="ghost" size="icon">
                                <User className="h-5 w-5" />
                                <span className="sr-only">Iniciar sesión</span>
                            </Button>
                        </SignInButton>
                    </SignedOut>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="relative">
                                <ShoppingCart className="h-5 w-5" />
                                <span className="sr-only">Ver Carrito</span>
                                {totalItems > 0 && (
                                    <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-[10px] flex items-center justify-center text-white">
                                        {totalItems}
                                    </span>
                                )}
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[400px] sm:w-[540px]">
                            <SheetTitle>
                                <div className="grid gap-6 p-4 text-lg font-medium">
                                    Tu carrito
                                </div>
                            </SheetTitle>
                            <CartSheetContent />
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </header>
    );
}