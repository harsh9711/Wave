import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, SITE } from "@/lib/config";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        if (href.startsWith("#")) {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                            W
                        </div>
                        <span className="text-xl font-bold text-foreground">{SITE.name}</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.href)}
                                className={`text-sm font-medium transition-colors hover:text-primary ${item.label === "Join Us" ? "text-primary" : "text-foreground/80"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            variant="secondary"
                            className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold"
                            onClick={() => scrollToSection("#donate")}
                        >
                            Donate ❤️
                        </Button>
                        <Button
                            variant="default"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                            onClick={() => scrollToSection("#join")}
                        >
                            REGISTER
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
                        <div className="flex flex-col gap-4">
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`text-left px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${item.label === "Join Us" ? "text-primary" : "text-foreground/80"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="flex flex-col gap-2 px-4 pt-2">
                                <Button
                                    variant="secondary"
                                    className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold w-full"
                                    onClick={() => scrollToSection("#donate")}
                                >
                                    Donate ❤️
                                </Button>
                                <Button
                                    variant="default"
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full"
                                    onClick={() => scrollToSection("#join")}
                                >
                                    REGISTER
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
