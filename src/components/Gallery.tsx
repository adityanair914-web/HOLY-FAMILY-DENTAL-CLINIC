import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaPlus } from 'react-icons/fa';

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: "https://placehold.co/800x600?text=Clinic+Exterior", alt: "Clinic Exterior" },
        { src: "https://placehold.co/800x600?text=Reception+Area", alt: "Reception" },
        { src: "https://placehold.co/800x600?text=Treatment+Room+1", alt: "Treatment Room" },
        { src: "https://placehold.co/800x600?text=Advanced+Equipment", alt: "Modern Equipment" },
        { src: "https://placehold.co/800x600?text=Dental+Chair", alt: "Comfortable Chairs" },
        { src: "https://placehold.co/800x600?text=Sterilization+Area", alt: "Sterilization" },
        { src: "https://placehold.co/800x600?text=Patient+Waiting", alt: "Waiting Area" },
        { src: "https://placehold.co/800x600?text=Smile+Result", alt: "Smile Makeover" },
    ];

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-widest text-sm uppercase">Our Environment</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
                        Inside Our Clinic
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                            onClick={() => { setIndex(i); setOpen(true); }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <FaPlus className="text-white text-3xl" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm font-medium">{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={images}
                    styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
                />
            </div>
        </section>
    );
};

export default Gallery;