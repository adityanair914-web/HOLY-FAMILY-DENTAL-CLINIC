import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';

interface ServiceData {
    icon: React.ReactNode;
    title: string;
    desc: string;
    detail: string;
    image: string;
}

interface ServiceModalProps {
    service: ServiceData;
    onClose: () => void;
}

const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />

            {/* Modal Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 24 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 backdrop-blur rounded-full
                               flex items-center justify-center text-primary hover:bg-primary hover:text-white
                               transition-all duration-200 shadow-md"
                >
                    <FaTimes size={14} />
                </button>

                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-3xl">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center
                                        text-teal text-xl flex-shrink-0">
                            {service.icon}
                        </div>
                        <div>
                            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-primary leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-teal text-sm font-medium mt-0.5">{service.desc}</p>
                        </div>
                    </div>

                    {/* Detail */}
                    <p className="text-muted leading-relaxed mb-7">{service.detail}</p>

                    {/* CTA */}
                    <a
                        href="https://wa.me/919447XXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp w-full text-center"
                    >
                        <FaWhatsapp size={18} />
                        Book This Service
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ServiceModal;
