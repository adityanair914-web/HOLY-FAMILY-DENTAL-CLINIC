import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { FaExpandAlt } from 'react-icons/fa';

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: 'https://placehold.co/800x600/E8F0F1/2F3E3C?text=Clinic+Exterior', alt: 'Clinic Exterior' },
        { src: 'https://placehold.co/800x600/BDDBD1/2F3E3C?text=Reception+Area', alt: 'Reception' },
        { src: 'https://placehold.co/800x600/C7E7EC/2F3E3C?text=Treatment+Room', alt: 'Treatment Room' },
        { src: 'https://placehold.co/800x600/E7E9E3/2F3E3C?text=Advanced+Equipment', alt: 'Modern Equipment' },
        { src: 'https://placehold.co/800x600/FBF9F1/2F3E3C?text=Dental+Chair', alt: 'Comfortable Chairs' },
        { src: 'https://placehold.co/800x600/E8F0F1/2F3E3C?text=Sterilization+Area', alt: 'Sterilization' },
        { src: 'https://placehold.co/800x600/BDDBD1/2F3E3C?text=Waiting+Area', alt: 'Waiting Area' },
        { src: 'https://placehold.co/800x600/C7E7EC/2F3E3C?text=Smile+Result', alt: 'Smile Makeover' },
    ];

    return (
        <section id="gallery" className="py-24 bg-mint">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="section-label mb-4">Our Environment</span>
                    <h2 className="font-display text-4xl md:text-5xl text-primary mt-3">
                        Inside Our Clinic
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group
                                       border border-border shadow-teal-sm hover:shadow-teal-md transition-all duration-300"
                            onClick={() => { setIndex(i); setOpen(true); }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300
                                            flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <FaExpandAlt className="text-white text-2xl" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 bg-gradient-to-t from-primary/80 to-transparent
                                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xs font-medium">{img.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={images}
                    styles={{ container: { backgroundColor: 'rgba(28, 43, 41, 0.95)' } }}
                />
            </div>
        </section>
    );
};

export default Gallery;