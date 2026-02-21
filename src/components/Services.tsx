import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaTooth,
    FaMagic,
    FaCrown,
    FaSmile,
    FaUserInjured,
    FaBaby,
    FaFirstAid,
    FaXRay,
    FaTeethOpen,
    FaArrowRight
} from 'react-icons/fa';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { GiJawbone } from 'react-icons/gi';
import ServiceModal from './ServiceModal';

const Services = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const services = [
        {
            icon: <FaTooth />,
            title: 'Root Canal Treatment',
            desc: 'Painless, same-day relief from tooth pain',
            detail: 'Root canal treatment (endodontic therapy) saves a severely infected or damaged tooth by removing the inflamed pulp tissue inside, cleaning and disinfecting the canals, then sealing them with a biocompatible material. At Holy Family Dental Care, we use modern rotary instruments and advanced anesthesia techniques to make the procedure virtually painless — often completed in a single sitting. This preserves your natural tooth and eliminates the need for extraction.',
            image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop&q=80',
        },
        {
            icon: <GiJawbone />,
            title: 'Dental Implants',
            desc: 'Permanent, natural-looking tooth replacement',
            detail: 'Dental implants are titanium posts surgically placed into the jawbone to act as artificial tooth roots. Once integrated with the bone (osseointegration), a custom-made crown is placed on top, giving you a tooth that looks, feels, and functions just like a natural one. Implants prevent bone loss, maintain facial structure, and can last a lifetime with proper care. Our experienced team ensures precise placement for optimal results.',
            image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=500&fit=crop&q=80',
        },
        {
            icon: <FaCrown />,
            title: 'Crowns & Bridges',
            desc: 'High-quality ceramic restorations',
            detail: 'Dental crowns are custom-fitted caps placed over damaged or weakened teeth to restore their shape, strength, and appearance. Bridges replace one or more missing teeth by anchoring artificial teeth to the adjacent natural teeth. We use premium ceramic and zirconia materials that match your natural tooth color perfectly, providing both durability and an aesthetic, seamless result.',
            image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=500&fit=crop&q=80',
        },
        {
            icon: <FaSmile />,
            title: 'Smile Designing',
            desc: 'Transform your smile with cosmetic procedures',
            detail: 'Smile designing (also called smile makeover) is a comprehensive cosmetic approach that combines multiple procedures — such as veneers, teeth whitening, bonding, and gum contouring — to create your ideal smile. Our dentists perform a detailed analysis of your facial features, tooth alignment, and gum line to design a smile that is harmonious, natural, and uniquely yours.',
            image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&h=500&fit=crop&q=80',
        },
        {
            icon: <FaUserInjured />,
            title: 'Dentures',
            desc: 'Comfortable metal-based partial & full dentures',
            detail: 'Dentures are removable prosthetic devices designed to replace missing teeth and surrounding tissues. We offer both complete dentures (for patients who have lost all teeth) and partial dentures (metal-based frameworks that fill gaps between remaining natural teeth). Our dentures are custom-crafted for a comfortable fit, natural appearance, and restored ability to eat and speak confidently.',
            image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop&q=80',
        },
        {
            icon: <FaMagic />,
            title: 'Teeth Whitening',
            desc: 'Professional-grade whitening treatments',
            detail: 'Professional teeth whitening uses clinically proven bleaching agents at concentrations far stronger than over-the-counter products, delivering dramatically whiter teeth in a single visit. Our in-office treatment safely removes deep stains caused by coffee, tea, smoking, and aging while protecting your enamel and gums. Results are immediate and can lighten your teeth by several shades.',
            image: 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=800&h=500&fit=crop&q=80',
        },
        {
            icon: <FaTeethOpen />,
            title: 'Orthodontics & Braces',
            desc: 'Metal, ceramic braces & Invisalign',
            detail: 'Orthodontic treatment corrects misaligned teeth and jaw irregularities to improve both function and aesthetics. We offer traditional metal braces for reliable results, discreet ceramic braces that blend with your tooth color, and Invisalign clear aligners for a virtually invisible treatment experience. Our orthodontic solutions address crowding, spacing, overbites, underbites, and crossbites for patients of all ages.',
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop&q=80',
        },
        {
            icon: <MdOutlineHealthAndSafety />,
            title: 'Gum Treatment',
            desc: 'Periodontal care for healthy gums',
            detail: 'Gum (periodontal) treatment addresses diseases of the tissues surrounding and supporting your teeth. From non-surgical deep cleaning (scaling and root planing) to advanced surgical procedures, we treat gingivitis, periodontitis, and gum recession. Healthy gums are the foundation of a healthy mouth — early treatment prevents tooth loosening, bone loss, and more serious systemic health issues.',
            image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=500&fit=crop&q=80',
        },
        {
            icon: <FaUserInjured />,
            title: 'Oral Surgery',
            desc: 'Wisdom tooth removal & surgical procedures',
            detail: 'Our oral surgery services include wisdom tooth extraction, impacted tooth removal, surgical tooth extractions, cyst removal, and minor jaw procedures. Using modern surgical techniques and effective local anesthesia, we ensure minimal discomfort during and after the procedure. Detailed post-operative care instructions are provided for a smooth and speedy recovery.',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop&q=80',
        },
        {
            icon: <FaXRay />,
            title: 'Dental X-Ray',
            desc: 'In-house imaging for accurate diagnosis',
            detail: 'Our clinic is equipped with in-house dental X-ray (radiograph) facilities for instant, accurate diagnosis. Digital X-rays reveal hidden dental structures, cavities between teeth, bone loss, infections, and impacted teeth that are invisible during a standard examination. Digital radiography uses significantly lower radiation than traditional film X-rays while producing clearer, more detailed images.',
            image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=500&fit=crop&q=80',
        },
        {
            icon: <FaBaby />,
            title: 'Pediatric Dentistry',
            desc: 'Gentle care for children',
            detail: 'Pediatric dentistry focuses on the oral health of children from infancy through teen years. Our gentle, child-friendly approach helps young patients feel comfortable and safe during dental visits. Services include routine cleanings, fluoride treatments, dental sealants, cavity fillings, and guidance on proper oral hygiene habits. Early dental care sets the foundation for a lifetime of healthy smiles.',
            image: 'https://images.unsplash.com/photo-1612349316228-5942a9b489c2?w=800&h=500&fit=crop&q=80',
        },
        {
            icon: <FaFirstAid />,
            title: 'Emergency Dental Care',
            desc: 'Available during clinic hours',
            detail: 'Dental emergencies — severe toothaches, broken teeth, knocked-out teeth, abscesses, or trauma — require immediate attention. Our clinic provides prompt emergency dental care during working hours (Mon–Sat, 9 AM – 7 PM). We prioritize emergency patients to relieve pain quickly, prevent further damage, and start the appropriate treatment as soon as possible. Contact us immediately via WhatsApp for urgent cases.',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=500&fit=crop&q=80',
        },
    ];

    return (
        <section id="services" className="py-24 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-label mb-4">Our Services</span>
                    <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">
                        Comprehensive Dental Care
                    </h2>
                    <p className="text-muted max-w-lg mx-auto leading-relaxed">
                        Everything you need for a healthy, beautiful smile — all under one roof.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            onClick={() => setSelectedIndex(index)}
                            className="group p-7 rounded-2xl bg-white border border-border shadow-teal-sm
                                       hover:shadow-teal-md hover:-translate-y-1.5 hover:border-secondary
                                       transition-all duration-350 cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center
                                            text-teal text-xl mb-5 group-hover:bg-primary group-hover:text-white
                                            transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="font-display text-xl font-semibold text-primary mb-2 group-hover:text-teal transition-colors duration-200">
                                {service.title}
                            </h3>
                            <p className="text-muted text-sm leading-relaxed mb-4">
                                {service.desc}
                            </p>
                            <span className="inline-flex items-center gap-1.5 text-teal text-sm font-semibold
                                            group-hover:gap-2.5 transition-all duration-300">
                                Learn More <FaArrowRight size={12} />
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedIndex !== null && (
                        <ServiceModal
                            service={services[selectedIndex]}
                            onClose={() => setSelectedIndex(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Services;