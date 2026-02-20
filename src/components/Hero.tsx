import { motion } from 'framer-motion';
import { FaWhatsapp, FaTooth, FaStar, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">

            {/* Decorative blobs */}
            <motion.div
                animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-16 right-[-80px] w-[420px] h-[420px] blob bg-secondary/20 opacity-60"
            />
            <motion.div
                animate={{ scale: [1, 1.06, 1], rotate: [0, -6, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-[-60px] left-[-100px] w-[500px] h-[500px] blob bg-accent/15"
            />
            {/* Fine texture overlay */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
                <div className="grid md:grid-cols-2 gap-14 items-center">

                    {/* ── Text Content ── */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center md:text-left"
                    >
                        {/* Rating badge */}
                        <motion.div variants={itemVariants}>
                            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-1.5 rounded-full text-sm font-medium text-secondary mb-6">
                                <FaStar className="text-amber-300" />
                                4.9★ Rated &nbsp;·&nbsp; 13+ Years of Excellence
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={itemVariants}
                            className="font-display text-5xl md:text-7xl font-semibold text-white leading-tight mb-6"
                        >
                            Your Smile Is{' '}
                            <br />
                            <span className="italic text-secondary">Our Passion</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-xl text-white/70 font-light mb-2">
                            Advanced Root Canal &amp; Implant Centre
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-white/50 mb-10 max-w-md mx-auto md:mx-0 leading-relaxed">
                            Specialized dental care in Kuravilangad. Painless treatments with
                            Dr.&nbsp;Thara Maria Joseph &amp; Team.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-14">
                            <a
                                href="https://wa.me/919447XXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp text-base px-8 py-4 shadow-teal-lg"
                            >
                                <FaWhatsapp size={20} />
                                Book Appointment
                            </a>
                            <a href="#services" className="btn-outline border-white/30 text-white hover:border-white hover:bg-white/10 text-base px-8 py-4">
                                Explore Services
                                <FaArrowRight size={14} />
                            </a>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                            {[
                                { icon: <FaTooth />, title: 'Painless RCT', sub: 'Single sitting options' },
                                { icon: <FaStar />, title: 'Top Rated', sub: '110+ Reviews' },
                                { icon: <FaMapMarkerAlt />, title: 'Central Loc', sub: 'Near Bus Station' },
                            ].map((badge) => (
                                <div key={badge.title} className="text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-2 text-secondary font-semibold mb-0.5 text-sm">
                                        <span className="text-accent">{badge.icon}</span>
                                        {badge.title}
                                    </div>
                                    <p className="text-xs text-white/40">{badge.sub}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ── Hero Visual ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden md:block relative"
                    >
                        {/* Floating ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            className="absolute -inset-6 rounded-full border border-secondary/20 border-dashed"
                        />

                        <div className="relative z-10 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-teal-lg border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&q=80"
                                alt="Holy Family Dental Care Clinic Interior"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

                            {/* Bottom info card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                                className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 shadow-teal-md"
                            >
                                <div className="bg-secondary p-3 rounded-full text-primary">
                                    <FaTooth size={22} />
                                </div>
                                <div>
                                    <p className="font-display font-semibold text-primary text-lg leading-none">Dr. Thara's Practice</p>
                                    <p className="text-sm text-muted mt-1">Established 2013 · Kuravilangad</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating stat pill */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-6 -left-8 bg-white rounded-2xl shadow-teal-md px-5 py-3 flex items-center gap-3 z-20"
                        >
                            <div className="bg-amber-50 p-2 rounded-xl text-amber-400 text-xl">⭐</div>
                            <div>
                                <p className="font-bold text-primary text-base leading-none">4.9 / 5</p>
                                <p className="text-xs text-muted">Google Rating</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;