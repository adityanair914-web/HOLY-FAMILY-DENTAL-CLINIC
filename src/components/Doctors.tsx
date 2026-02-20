import { motion } from 'framer-motion';

const Doctors = () => {
    const doctors = [
        {
            name: 'Dr. Thara Maria Joseph',
            role: 'Lead Dentist & Owner',
            specialty: 'Prosthodontics & Implantology',
            bio: 'BDS, University of Calicut | 13 Years Experience | KSDC Reg. #11153 | Expert in Implants, Crowns & Restorative Dentistry',
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80',
            badge: 'KSDC Reg. #11153',
        },
        {
            name: 'Dr. Bijo Kurian',
            role: 'Co-Owner',
            specialty: 'Endodontics & Root Canal',
            bio: 'Renowned for painless Root Canal Treatments. Trusted by hundreds of patients across Kottayam for precise, pain-free endodontic care.',
            image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&q=80',
            badge: 'Root Canal Expert',
        },
        {
            name: 'Dr. Rahul',
            role: 'Associate Dentist',
            specialty: 'General & Preventive Dentistry',
            bio: 'Known for his caring and professional demeanor. Ensures every patient feels comfortable and well-informed throughout treatment.',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80',
            badge: 'Patient Favorite',
        },
    ];

    return (
        <section id="doctors" className="py-24 bg-mint">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-label mb-4">Our Team</span>
                    <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">
                        Meet Our Expert Doctors
                    </h2>
                    <p className="text-muted max-w-xl mx-auto">
                        Highly qualified professionals dedicated to your smile and dental health.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {doctors.map((doc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-teal-sm hover:shadow-teal-lg
                                       border border-border transition-all duration-350"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden bg-mint">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-teal-sm">
                                    {doc.badge}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-display text-2xl font-semibold text-primary mb-0.5">
                                    {doc.name}
                                </h3>
                                <p className="text-teal font-medium text-sm mb-3">{doc.role}</p>

                                <span className="inline-block bg-secondary/30 text-primary text-xs px-3 py-1 rounded-full mb-4 font-medium border border-secondary/40">
                                    {doc.specialty}
                                </span>

                                <p className="text-muted text-sm leading-relaxed">{doc.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;