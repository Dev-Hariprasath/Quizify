import React from "react";
import HeroSection from "../../components/HeroSection";
import AboutCompany from "../../components/AboutCompany";
import Technology from "../../components/Technology";
import QuizList from "../Quizzes/QuizList";
import Partners from "../../components/Partners";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutCompany />
      <Technology />
      <Partners />
      <Testimonials />
      <Contact />
    </div>
  );
}
