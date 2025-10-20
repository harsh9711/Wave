import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
    {
        title: "Leadership Workshop",
        date: "March 15, 2025",
        time: "2:00 PM - 5:00 PM",
        location: "IIT Delhi Campus",
        description: "Learn essential leadership skills and team management techniques.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    },
    {
        title: "Meditation & Mindfulness",
        date: "March 22, 2025",
        time: "6:00 AM - 7:30 AM",
        location: "DU North Campus",
        description: "Start your day with peace and clarity through guided meditation.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    },
    {
        title: "Skill Development Bootcamp",
        date: "April 5, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "BITS Pilani",
        description: "Hands-on workshops covering design, coding, and entrepreneurship.",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800",
    },
];

export const EventsSection = () => {
    return (
        <section id="events" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join us for transformative experiences that inspire growth and connection
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">{event.title}</h3>
                                <p className="text-sm text-muted-foreground">{event.description}</p>

                                <div className="space-y-2 pt-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                                    Register Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
