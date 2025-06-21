import { Hero } from '@/components/home/hero';
import { AboutSection } from '@/components/home/about-section';
import { ServicesSection } from '@/components/home/services-section';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { ContactSection } from '@/components/home/contact-section';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}