import { Instagram, Youtube, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/config";

export const Footer = () => {
    return (
        <footer className="bg-foreground text-background py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* About */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-foreground font-bold text-xl">
                                W
                            </div>
                            <span className="text-xl font-bold">{SITE.name}</span>
                        </div>
                        <p className="text-background/70 text-sm leading-relaxed">
                            {SITE.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about" className="text-background/70 hover:text-background transition">About Us</a></li>
                            <li><a href="#events" className="text-background/70 hover:text-background transition">Events</a></li>
                            <li><a href="#gallery" className="text-background/70 hover:text-background transition">Gallery</a></li>
                            <li><a href="#join" className="text-background/70 hover:text-background transition">Join Us</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2 text-background/70">
                                <Mail className="w-4 h-4" />
                                <span>{SITE.email}</span>
                            </li>
                            <li className="flex items-center gap-2 text-background/70">
                                <Phone className="w-4 h-4" />
                                <span>{SITE.phone}</span>
                            </li>
                            <li className="flex items-center gap-2 text-background/70">
                                <MapPin className="w-4 h-4" />
                                <span>Delhi NCR, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
                        <div className="flex gap-3">
                            <a
                                href={SITE.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={SITE.social.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a
                                href={SITE.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href={SITE.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
                    <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved. Made with ❤️ for students.</p>
                </div>
            </div>
        </footer>
    );
};
