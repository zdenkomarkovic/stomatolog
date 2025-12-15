"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  Shield,
  Wrench,
  Activity,
  Crown,
  Scissors,
  Heart,
  Sparkles,
  Baby,
  Calendar,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4 }
};

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Shield,
      title: t.services.preventive,
      description: t.services.preventiveDesc,
      items: t.services.preventiveList,
      image: "/images/WhatsApp Image 2025-12-13 at 17.30.08.jpeg",
      color: "blue"
    },
    {
      icon: Wrench,
      title: t.services.restorative,
      description: t.services.restorativeDesc,
      items: t.services.restorativeList,
      image: "/images/WhatsApp Image 2025-12-13 at 17.30.10 (1).jpeg",
      color: "green"
    },
    {
      icon: Activity,
      title: t.services.endodontics,
      description: t.services.endodonticsDesc,
      items: t.services.endodonticsList,
      image: "/images/WhatsApp Image 2025-12-13 at 17.30.11.jpeg",
      color: "red"
    },
    {
      icon: Crown,
      title: t.services.prosthetics,
      description: t.services.prostheticsDesc,
      items: t.services.prostheticsList,
      image: "/images/WhatsApp Image 2025-12-13 at 17.30.10.jpeg",
      color: "purple"
    },
    {
      icon: Scissors,
      title: t.services.surgery,
      description: t.services.surgeryDesc,
      items: t.services.surgeryList,
      image: "/images/WhatsApp Image 2025-12-13 at 17.30.12.jpeg",
      color: "orange"
    },
    {
      icon: Heart,
      title: t.services.periodontics,
      description: t.services.periodonticsDesc,
      items: t.services.periodonticsList,
      image: "/images/WhatsApp Image 2025-12-13 at 17.30.13.jpeg",
      color: "pink"
    },
    {
      icon: Sparkles,
      title: t.services.cosmetic,
      description: t.services.cosmeticDesc,
      items: t.services.cosmeticList,
      image: "/images/WhatsApp Image 2025-12-13 at 17.30.09.jpeg",
      color: "cyan"
    },
    {
      icon: Baby,
      title: t.services.pediatric,
      description: t.services.pediatricDesc,
      items: t.services.pediatricList,
      image: "/images/WhatsApp Image 2025-12-13 at 17.30.14.jpeg",
      color: "yellow"
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
              {t.services.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t.services.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                    </div>

                    <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-${service.color}-100 rounded-2xl flex items-center justify-center`}>
                          <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-lg text-gray-600 mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href="/kontakt">
                        <Button className="w-full lg:w-auto">
                          <Calendar className="w-5 h-5 mr-2" />
                          {t.services.bookNow}
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-cyan-600 text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t.home.ctaTitle}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t.home.ctaDescription}
            </p>
            <Link href="/kontakt">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
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
