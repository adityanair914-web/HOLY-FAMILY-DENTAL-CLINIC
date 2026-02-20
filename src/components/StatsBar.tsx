import { motion } from 'framer-motion';

const StatsBar = () => {
    const stats = [
        { label: 'Years Experience', value: '13+' },
        { label: 'Happy Patients', value: '1000+' },
        { label: 'Average Rating', value: '4.9★' },
        { label: 'Google Reviews', value: '110+' },
    ];

    return (
        <section className="bg-secondary py-12 relative z-20">
            {/* Subtle top edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-white/30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center pl-4 first:pl-0"
                        >
                            <h3 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-1">
                                {stat.value}
                            </h3>
                            <p className="text-primary/60 text-xs font-semibold uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBar;