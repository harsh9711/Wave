const galleryImages = [
    {
        url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",
        caption: "Leadership Workshop 2024",
    },
    {
        url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
        caption: "Annual Conference",
    },
    {
        url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800",
        caption: "Skill Development Session",
    },
    {
        url: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800",
        caption: "Team Building Activities",
    },
    {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
        caption: "Meditation Retreat",
    },
    {
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
        caption: "Community Gathering",
    },
];

export const GallerySection = () => {
    return (
        <section id="gallery" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
                    <p className="text-lg text-muted-foreground">
                        Moments captured from our events and activities
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
                        >
                            <img
                                src={image.url}
                                alt={image.caption}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <p className="text-white font-semibold p-6 text-lg">{image.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
