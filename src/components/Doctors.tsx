
import { motion } from 'framer-motion';

const Doctors = () => {
    const doctors = [
        {
            name: "Dr. Thara Maria Joseph",
            role: "Lead Dentist & Owner",
            specialty: "Prosthodontics & Implantology",
            bio: "BDS, University of Calicut | 13 Years Experience | KSDC Reg. #11153 | Expert in Implants, Crowns & Restorative Dentistry",
            image: "https://placehold.co/400x400?text=Dr.+Thara",
            badge: "KSDC Reg. #11153"
        },
        {
            name: "Dr. Bijo Kurian",
            role: "Co-Owner",
            specialty: "Endodontics & Root Canal",
            bio: "Renowned for painless Root Canal Treatments. Trusted by hundreds of patients across Kottayam for precise, pain-free endodontic care.",
            image: "https://placehold.co/400x400?text=Dr.+Bijo",
            badge: "Root Canal Expert"
        },
        {
            name: "Dr. Rahul",
            role: "Associate Dentist",
            specialty: "General & Preventive Dentistry",
            bio: "Known for his caring and professional demeanor. Ensures every patient feels comfortable and well-informed throughout treatment.",
            image: "https://placehold.co/400x400?text=Dr.+Rahul",
            badge: "Patient Favorite"
        }
    ];

    return (
        <section id="doctors" className="py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-widest text-sm uppercase">Our Team</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
                        Meet Our Expert Doctors
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Highly qualified professionals dedicated to your smile and dental health.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {doctors.map((doc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="relative h-64 overflow-hidden bg-primary/5">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                                    {doc.badge}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-primary mb-1">{doc.name}</h3>
                                    <p className="text-accent font-medium text-sm">{doc.role}</p>
                                </div>

                                <div className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full mb-4 font-medium">
                                    {doc.specialty}
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {doc.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;