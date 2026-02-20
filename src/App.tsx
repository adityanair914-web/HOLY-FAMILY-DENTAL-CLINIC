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

function App() {
    // Smooth scroll fix for anchor links
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
                if (targetId) {
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
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
                {/* TODO: Add real OG Image URL */}
                <meta property="og:image" content="https://placehold.co/1200x630?text=Holy+Family+Dental+Care" />

                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            <Navbar />

            <main>
                <Hero />
                <StatsBar />
                <About />
                <Doctors />
                <Services />
                <WhyChooseUs />
                <Testimonials />
                <Gallery />
                <Directions />
                <Contact />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}

export default App;