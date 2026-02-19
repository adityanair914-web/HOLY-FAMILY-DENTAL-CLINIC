
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTooth, FaStar, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background with abstract mesh/gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f2c5c] via-[#1a4a8a] to-[#0f2c5c]">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                {/* Abstract Circles */}
                <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-blue-100 text-sm font-medium mb-6 border border-white/10">
                            <FaStar className="text-yellow-400" />
                            <span>4.9★ Rated • 13+ Years of Excellence</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                            Your Smile Is <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">
                                Our Passion
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-4 font-light">
                            Advanced Root Canal & Implant Centre
                        </p>

                        <p className="text-blue-200/80 mb-8 max-w-lg mx-auto md:mx-0">
                            Specialized dental care in Kuravilangad. Experience painless treatments
                            with Dr. Thara Maria Joseph & Team.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
                            <a
                                href="https://wa.me/91XXXXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-success text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1"
                            >
                                <FaWhatsapp size={22} />
                                Book Appointment
                            </a>
                            <a
                                href="#services"
                                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-white border-2 border-white/20 hover:bg-white/10 transition-all"
                            >
                                Explore Services
                                <FaArrowRight size={16} />
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mt-8">
                            <div className="text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-2 text-white font-medium mb-1">
                                    <FaTooth className="text-accent" />
                                    <span>Painless RCT</span>
                                </div>
                                <p className="text-xs text-blue-300">Single sitting options</p>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-2 text-white font-medium mb-1">
                                    <FaStar className="text-accent" />
                                    <span>Top Rated</span>
                                </div>
                                <p className="text-xs text-blue-300">110+ Reviews</p>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-2 text-white font-medium mb-1">
                                    <FaMapMarkerAlt className="text-accent" />
                                    <span>Central Loc</span>
                                </div>
                                <p className="text-xs text-blue-300">Near Bus Station</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image / Illustration Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:block relative"
                    >
                        <div className="relative z-10 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                            <img
                                src="https://placehold.co/800x600?text=Modern+Dental+Clinic+Interior"
                                alt="Holy Family Dental Care Clinic"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>

                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <FaTooth size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-dark">Dr. Thara's Practice</p>
                                    <p className="text-sm text-gray-500">Established 2013</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;