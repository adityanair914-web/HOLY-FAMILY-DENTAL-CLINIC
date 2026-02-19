
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://placehold.co/600x800?text=Clinic+Reception"
                                alt="Holy Family Dental Care Reception"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-accent hidden md:block">
                            <p className="text-4xl font-bold text-primary mb-1">13+</p>
                            <p className="text-gray-600 text-sm">Years Serving<br />Kuravilangad</p>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent font-bold tracking-widest text-sm uppercase">About Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                            Specialized Dental Care in the Heart of Kuravilangad
                        </h2>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Holy Family Dental Care has been serving the community of Kuravilangad
                            and Central Kerala since its establishment. Located at Central Junction
                            in the Chennanparambil Building — opposite Hotel Sanyo and near the
                            Kuravilangad bus station — our clinic is strategically accessible to
                            patients across the Kottayam district and beyond.
                        </p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Under the leadership of <span className="font-semibold text-primary">Dr. Thara Maria Joseph</span>, a BDS graduate from the
                            University of Calicut with 13 years of specialized experience in
                            Prosthodontics and Implantology, Holy Family Dental Care offers a full
                            spectrum of dental treatments. Our multi-doctor practice combines
                            technical excellence with a compassionate, patient-first approach —
                            evident in our 4.9-star rating across 110+ patient reviews.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "KSDC Registered Clinic",
                                "In-house Dental X-Ray",
                                "Emergency Care Available",
                                "Multi-Specialist Team"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-success flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;