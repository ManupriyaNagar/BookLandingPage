import AboutBook from "@/components/Hero/About";
import DiscoverInside from "@/components/Hero/DiscoverInside";
import HeroSection from "@/components/Hero/Hero";
import Hero1 from "@/components/Hero/Hero1";
import MeetAuthor from "@/components/Hero/MeetAuthor";
import PhotoGallery from "@/components/Hero/Photo";
import QuoteHighlight from "@/components/Hero/QuoteHighlight";
import SecureYourCopy from "@/components/Hero/SecureCopy";

import TestimonialsSection from "@/components/Hero/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>
       <Hero1/>

    <AboutBook/>
    <DiscoverInside/>
    <QuoteHighlight/>
    <TestimonialsSection/>
    <MeetAuthor/>
    <PhotoGallery/>
    <SecureYourCopy/>
 
   </div>
  );
}
