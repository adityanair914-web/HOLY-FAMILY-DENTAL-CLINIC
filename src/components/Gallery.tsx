import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { FaExpandAlt } from 'react-icons/fa';

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { src: 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=800&h=600&fit=crop&q=80', alt: 'Clinic Exterior' },
        { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&q=80', alt: 'Reception' },
        { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop&q=80', alt: 'Treatment Room' },
        { src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop&q=80', alt: 'Modern Equipment' },
        { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&q=80', alt: 'Comfortable Chairs' },
        { src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop&q=80', alt: 'Sterilization' },
        { src: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=600&fit=crop&q=80', alt: 'Waiting Area' },
        { src: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&h=600&fit=crop&q=80', alt: 'Smile Makeover' },
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