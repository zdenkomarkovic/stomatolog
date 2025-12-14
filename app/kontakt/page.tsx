"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  MessageCircle
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function ContactPage() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.address,
      content: t.contact.addressValue,
      link: "https://maps.google.com/?q=Subotica",
      color: "red"
    },
    {
      icon: Phone,
      title: t.contact.phone,
      content: "+381 62 856 1867",
      link: "tel:+381628561867",
      color: "green"
    },
    {
      icon: Mail,
      title: t.contact.email,
      content: "dr.milan.vladimirov@gmail.com",
      link: "mailto:dr.milan.vladimirov@gmail.com",
      color: "blue"
    },
    {
      icon: Clock,
      title: t.contact.hours,
      content: t.contact.hoursValue,
      color: "purple"
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-cyan-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-600">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-${info.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <info.icon className={`w-8 h-8 text-${info.color}-600`} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary transition-colors whitespace-pre-line"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t.contact.form}
              </h2>
              <ContactForm />
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t.contact.map}
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45192.65390573282!2d19.62234447910156!3d46.10066479999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474339d32e765525%3A0x400c4290c1e1260!2sSubotica%2C%20Serbia!5e0!3m2!1sen!2sus!4v1702000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-cyan-50 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t.footer.followUs}
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/381628561867"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
