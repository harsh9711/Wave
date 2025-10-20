import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        name: "Priya Sharma",
        college: "IIT Delhi",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
        text: "WAVE transformed my college experience. I've grown as a leader and made lifelong connections with amazing people across campuses.",
    },
    {
        name: "Rahul Verma",
        college: "BITS Pilani",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
        text: "The workshops and meditation sessions helped me find balance in my hectic college life. Highly recommend joining WAVE!",
    },
    {
        name: "Ananya Gupta",
        college: "DU",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
        text: "Being part of WAVE gave me opportunities to organize events and develop skills I never knew I had. It's been an incredible journey!",
    },
];

export const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((current + 1) % testimonials.length);
    const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What Students Say</h2>
                    <p className="text-lg text-muted-foreground">
                        Hear from our community members about their WAVE experience
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-card rounded-3xl shadow-2xl p-8 md:p-12 border border-border">
                        <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />

                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            <img
                                src={testimonials[current].image}
                                alt={testimonials[current].name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                            />

                            <div className="flex-1 text-center md:text-left">
                                <p className="text-lg md:text-xl text-foreground/90 mb-6 italic">
                                    "{testimonials[current].text}"
                                </p>
                                <div>
                                    <p className="font-bold text-xl">{testimonials[current].name}</p>
                                    <p className="text-muted-foreground">{testimonials[current].college}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4 mt-8">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={prev}
                                className="rounded-full"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Button>

                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrent(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-primary w-8" : "bg-muted-foreground/30"
                                            }`}
                                    />
                                ))}
                            </div>

                            <Button
                                variant="outline"
                                size="icon"
                                onClick={next}
                                className="rounded-full"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
