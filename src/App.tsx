import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Doctors from './components/Doctors';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Directions from './components/Directions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import WaveDivider from './components/WaveDivider';

// Colour palette tokens (must match tailwind.config.js)
const C = {
    primary: '#2F3E3C',
    secondary: '#BDDBD1',
    light: '#FBF9F1',
    mint: '#E8F0F1',
};

function App() {
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
                if (targetId) {
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }, []);

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Holy Family Dental Care",
        "image": "https://holyfamilydentalcare.com/og-image.jpg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Chennanparambil Building, 1st Floor, Central Junction",
            "addressLocality": "Kuravilangad",
            "addressRegion": "Kerala",
            "postalCode": "686633",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 9.8024,
            "longitude": 76.5722
        },
        "url": "https://holyfamilydentalcare.com",
        "openingHours": "Mo-Sa 09:00-19:00",
        "priceRange": "₹",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "110"
        }
    };

    return (
        <div className="font-sans antialiased text-dark bg-light overflow-x-hidden selection:bg-secondary selection:text-primary">
            <Helmet>
                <title>Holy Family Dental Care | Best Dental Clinic in Kuravilangad, Kottayam</title>
                <meta name="description" content="Advanced Root Canal, Implants & Cosmetic Dentistry in Kuravilangad, Kottayam. 4.9★ rated. 13+ years experience. Dr. Thara Maria Joseph & Dr. Bijo Kurian. Book appointment: ₹150 consultation." />
                <meta name="keywords" content="dental clinic kuravilangad, root canal kottayam, dental implants kuravilangad, dentist kuravilangad, holy family dental, Dr Thara Maria Joseph, best dentist kottayam kerala" />

                {/* Open Graph */}
                <meta property="og:title" content="Holy Family Dental Care | Kuravilangad" />
                <meta property="og:description" content="Advanced Root Canal & Implant Centre. 4.9★ rated. Painless treatments. Central Junction, Kuravilangad." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:image" content="https://placehold.co/1200x630?text=Holy+Family+Dental+Care" />

                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            <Navbar />

            <main>
                {/* Hero — bg: gradient-hero (dark teal) */}
                <Hero />

                {/* StatsBar — bg: secondary (#BDDBD1) */}
                <StatsBar />

                {/* Wave: secondary → light */}
                <WaveDivider topColor={C.secondary} bottomColor={C.light} />

                {/* About — bg: light (#FBF9F1) */}
                <About />

                {/* Wave: light → mint */}
                <WaveDivider topColor={C.light} bottomColor={C.mint} />

                {/* Doctors — bg: mint (#E8F0F1) */}
                <Doctors />

                {/* Wave: mint → light */}
                <WaveDivider topColor={C.mint} bottomColor={C.light} />

                {/* Services — bg: light (#FBF9F1) */}
                <Services />

                {/* Wave: light → primary (WhyChooseUs dark section) */}
                <WaveDivider topColor={C.light} bottomColor={C.primary} />

                {/* WhyChooseUs — bg: gradient-dental (primary) */}
                <WhyChooseUs />

                {/* Wave: primary → light */}
                <WaveDivider topColor={C.primary} bottomColor={C.light} />

                {/* Testimonials — bg: light */}
                <Testimonials />

                {/* Wave: light → mint */}
                <WaveDivider topColor={C.light} bottomColor={C.mint} />

                {/* Gallery — bg: mint  */}
                <Gallery />

                {/* Wave: mint → light */}
                <WaveDivider topColor={C.mint} bottomColor={C.light} />

                {/* Directions — bg: light */}
                <Directions />

                {/* Contact — bg: light */}
                <Contact />

                {/* Wave into footer */}
                <WaveDivider topColor={C.light} bottomColor={C.primary} />
            </main>

            <Footer />
            <FloatingWhatsApp />
            <ScrollToTop />
        </div>
    );
}

export default App;