"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  Award,
  Heart,
  BookOpen,
  Target,
  Users,
  Calendar,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4 },
};

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t.about.valueQuality,
      description: t.about.valueQualityDesc,
      color: "blue",
    },
    {
      icon: Heart,
      title: t.about.valueCare,
      description: t.about.valueCareDesc,
      color: "red",
    },
    {
      icon: Users,
      title: t.about.valueTrust,
      description: t.about.valueTrustDesc,
      color: "green",
    },
    {
      icon: GraduationCap,
      title: t.about.valueEducation,
      description: t.about.valueEducationDesc,
      color: "purple",
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-cyan-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-600">{t.about.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/WhatsApp Image 2025-12-13 at 17.30.11 (1).jpeg"
                  alt="Dr Violeta Vladimirov"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-10 h-10 text-primary" />
                {t.about.story}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t.about.storyContent}
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-primary/5 rounded-2xl">
                  <p className="text-4xl font-bold text-primary mb-2">20+</p>
                  <p className="text-sm text-gray-600">
                    {t.home.statsExperience}
                  </p>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-2xl">
                  <p className="text-4xl font-bold text-primary mb-2">2000+</p>
                  <p className="text-sm text-gray-600">
                    {t.home.statsPatients}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="lg:order-2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/WhatsApp Image 2025-12-13 at 17.30.13 (1).jpeg"
                  alt="Stomatološka ordinacija"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="lg:order-1"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <GraduationCap className="w-10 h-10 text-primary" />
                {t.about.expertise}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.expertiseContent}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/milan.jpeg"
                  alt="Pristup pacijentima"
                  fill
                  className="object-cover object-[50%_30%]"
                />
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Heart className="w-10 h-10 text-primary" />
                {t.about.approach}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.approachContent}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-cyan-600 text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <Target className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-foreground">
              {t.about.mission}
            </h2>
            <p className="text-xl leading-relaxed opacity-90">
              {t.about.missionContent}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.about.values}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <value.icon
                        className={`w-8 h-8 text-${value.color}-600`}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t.home.ctaTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t.home.ctaDescription}
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                <Calendar className="w-5 h-5 mr-2" />
                {t.home.ctaButton}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
