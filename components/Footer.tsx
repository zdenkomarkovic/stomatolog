"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/android-chrome-192x192.png";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { title: t.nav.home, href: "/" },
    { title: t.nav.services, href: "/usluge" },
    { title: t.nav.about, href: "/o-nama" },
    { title: t.nav.contact, href: "/kontakt" },
  ];

  const services = [
    t.services.preventive,
    t.services.cosmetic,
    t.services.prosthetics,
    t.services.pediatric,
  ];

  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 pt-16 pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src={Logo}
                alt="Dr Violeta Vladimirov"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="font-bold text-lg text-white">Dr Violeta Vladimirov</p>
                <p className="text-xs text-gray-400">Stomatološka ordinacija</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/381628561867"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.footer.servicesTitle}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/usluge"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.contact.info}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Subotica, Srbija</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+381628561867"
                  className="text-sm hover:text-primary transition-colors"
                >
                  +381 62 856 1867
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:dr.milan.vladimirov@gmail.com"
                  className="text-sm hover:text-primary transition-colors break-all"
                >
                  dr.milan.vladimirov@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Dr Violeta Vladimirov. {t.footer.rights}
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
