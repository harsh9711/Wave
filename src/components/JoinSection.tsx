import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Users, Heart, BookOpen } from "lucide-react";

export const JoinSection = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Application Submitted! 🎉",
            description: "Thank you for joining WAVE. We'll contact you soon!",
        });
        setFormData({ name: "", email: "", phone: "", college: "", message: "" });
    };

    return (
        <section id="join" className="py-20 bg-gradient-to-br from-background to-muted">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Join Our Team
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ready to make an impact? Become a part of WAVE and help empower students across colleges.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left: Benefits */}
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Build Connections</h3>
                                <p className="text-muted-foreground">
                                    Connect with like-minded students from top colleges across the country.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                <Heart className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
                                <p className="text-muted-foreground">
                                    Lead workshops, organize events, and inspire positive change in your community.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Grow Together</h3>
                                <p className="text-muted-foreground">
                                    Access exclusive workshops, mentorship, and resources for personal growth.
                                </p>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden h-64 mt-8">
                            <img
                                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Full Name *</label>
                                <Input
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Enter your full name"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Email *</label>
                                <Input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your.email@example.com"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                                <Input
                                    required
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="+91 98765 43210"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">College/University *</label>
                                <Input
                                    required
                                    value={formData.college}
                                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                    placeholder="Enter your college name"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Why do you want to join?</label>
                                <Textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell us about your interests and goals..."
                                    className="w-full min-h-24"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-12"
                            >
                                Submit Application
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
