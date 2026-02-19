
import { FaMapMarkerAlt, FaClock, FaLandmark } from 'react-icons/fa';

const Directions = () => {
    return (
        <section className="py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Map Column */}
                    <div className="h-96 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15730.0!2d76.5722!3d9.8024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDgnMDguNiJOIDc2wrAzNCcyMC4wIkU!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin&q=Holy+Family+Dental+Care+Kuravilangad+Kerala"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Clinic Location"
                        ></iframe>
                    </div>

                    {/* Info Column */}
                    <div className="flex flex-col justify-center">
                        <span className="text-accent font-bold tracking-widest text-sm uppercase">Visit Us</span>
                        <h2 className="text-3xl font-bold text-primary mt-2 mb-8">
                            Easy to Find, Ready to Serve
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full text-accent shadow-sm">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark text-lg">Address</h3>
                                    <p className="text-gray-600">
                                        Chennanparambil Building, 1st Floor,<br />
                                        Central Junction, Kuravilangad,<br />
                                        Kottayam, Kerala — 686633
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full text-accent shadow-sm">
                                    <FaLandmark size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark text-lg">Landmark</h3>
                                    <p className="text-gray-600">
                                        Opposite Hotel Sanyo<br />
                                        Near Kuravilangad Bus Station
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full text-accent shadow-sm">
                                    <FaClock size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark text-lg">Timings</h3>
                                    <p className="text-gray-600">
                                        Monday – Saturday: 9:00 AM – 7:00 PM<br />
                                        <span className="text-red-500 text-sm">Sunday: Closed</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-blue-50 p-4 rounded-xl border border-blue-100 inline-block">
                            <p className="text-primary font-medium text-sm">
                                💬 Consultation Fee: <span className="font-bold">₹150</span> (approx)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Directions;