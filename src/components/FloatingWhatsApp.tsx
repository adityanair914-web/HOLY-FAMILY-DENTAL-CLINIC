import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWhatsApp = () => {
    const [showLabel, setShowLabel] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show after 1.5s
        const t = setTimeout(() => setVisible(true), 1500);
        // Auto show label for 3s then hide
        const tLabel = setTimeout(() => {
            setShowLabel(true);
            setTimeout(() => setShowLabel(false), 3500);
        }, 2500);
        return () => { clearTimeout(t); clearTimeout(tLabel); };
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
                >
                    {/* Tooltip label */}
                    <AnimatePresence>
                        {showLabel && (
                            <motion.div
                                initial={{ opacity: 0, x: 16, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 16, scale: 0.9 }}
                                transition={{ duration: 0.25 }}
                                className="bg-white text-primary text-sm font-semibold px-4 py-2.5 rounded-2xl
                                           shadow-teal-md border border-border whitespace-nowrap"
                            >
                                💬 Book Appointment
                                <span className="block text-xs text-muted font-normal">Chat with us on WhatsApp</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Button */}
                    <motion.a
                        href="https://wa.me/919447XXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.88 }}
                        onHoverStart={() => setShowLabel(true)}
                        onHoverEnd={() => setShowLabel(false)}
                        className="relative bg-success text-white p-4 rounded-full shadow-teal-lg flex items-center justify-center"
                        aria-label="Chat on WhatsApp"
                    >
                        {/* Dual-ring pulse */}
                        <span className="absolute -inset-1 rounded-full bg-success/30 animate-ping" />
                        <span className="absolute -inset-2 rounded-full bg-success/15 animate-pulse-slow" />
                        <FaWhatsapp size={28} className="relative z-10" />
                    </motion.a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingWhatsApp;