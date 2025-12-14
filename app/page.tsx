"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Shield,
  Sparkles,
  Users,
  CheckCircle2,
  Calendar,
  Phone,
  Smile,
  Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  {t.home.statsExperience.replace('20+', '20+')}
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {t.home.heroTitle}
              </h1>

              <p className="text-xl lg:text-2xl text-primary font-semibold mb-4">
                {t.home.heroSubtitle}
              </p>

              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                {t.home.heroDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt">
                  <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                    <Calendar className="w-5 h-5 mr-2" />
                    {t.home.heroCTA}
                  </Button>
                </Link>
                <Link href="/usluge">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
                    {t.home.heroSecondaryCTA}
                  </Button>
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-4 border-white"></div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Preko 2000 zadovoljnih pacijenata</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/WhatsApp Image 2025-12-13 at 17.30.07.jpeg"
                  alt="Stomatološka ordinacija"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">98%</p>
                    <p className="text-sm text-gray-600">Uspešnost</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">20+</p>
                    <p className="text-sm text-gray-600">Godina</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Award, number: "20+", label: t.home.statsExperience },
              { icon: Users, number: "2000+", label: t.home.statsPatients },
              { icon: Heart, number: "15+", label: t.home.statsServices },
              { icon: Smile, number: "98%", label: t.home.statsSatisfaction },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <p className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-sm lg:text-base opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.home.whyTitle}
            </h2>
            <p className="text-xl text-gray-600">{t.home.whySubtitle}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Award, title: t.home.whyExpertise, desc: t.home.whyExpertiseDesc, color: "blue" },
              { icon: Sparkles, title: t.home.whyTechnology, desc: t.home.whyTechnologyDesc, color: "cyan" },
              { icon: Shield, title: t.home.whyComfort, desc: t.home.whyComfortDesc, color: "green" },
              { icon: Heart, title: t.home.whyAffordable, desc: t.home.whyAffordableDesc, color: "purple" },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-${item.color}-100 rounded-2xl flex items-center justify-center mb-4`}>
                      <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.home.servicesTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-8">{t.home.servicesSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: t.services.preventive, image: "/images/WhatsApp Image 2025-12-13 at 17.30.08.jpeg" },
              { title: t.services.cosmetic, image: "/images/WhatsApp Image 2025-12-13 at 17.30.09.jpeg" },
              { title: t.services.prosthetics, image: "/images/WhatsApp Image 2025-12-13 at 17.30.10.jpeg" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/usluge">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
                {t.home.viewAllServices}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-cyan-600 text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t.home.ctaTitle}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t.home.ctaDescription}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/kontakt">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
                  <Calendar className="w-5 h-5 mr-2" />
                  {t.home.ctaButton}
                </Button>
              </Link>
              <Link href="tel:+381628561867">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-white text-white hover:bg-white hover:text-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  +381 62 856 1867
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
