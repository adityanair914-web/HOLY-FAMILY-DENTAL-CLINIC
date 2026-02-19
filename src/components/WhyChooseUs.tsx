
import { FaSyringe, FaMicroscope, FaUserMd, FaMapMarkedAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaSyringe />,
            title: "Painless Treatments",
            desc: "Modern anesthesia for completely pain-free procedures"
        },
        {
            icon: <FaMicroscope />,
            title: "Advanced Equipment",
            desc: "In-house X-ray, modern instrumentation for precise care"
        },
        {
            icon: <FaUserMd />,
            title: "Specialist Doctors",
            desc: "Multi-doctor team with 13+ years combined expertise"
        },
        {
            icon: <FaMapMarkedAlt />,
            title: "Accessible Location",
            desc: "Central Junction, near bus station, easy for all patients"
        }
    ];

    return (
        <section className="py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-accent font-bold tracking-widest text-sm uppercase">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                            Experience the Difference in Dental Care
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            We combine advanced technology with a gentle, patient-centered approach
                            to ensure your dental visit is comfortable and effective.
                        </p>
                        <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                            Book Your Visit
                        </button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                                <div className="text-accent text-3xl mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-blue-100 text-sm">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;