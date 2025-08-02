"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  BookOpen,
  Heart,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Quote,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-80 delay-2000"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center md:text-left">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6 flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Mahesh Manzar</h3>
                  <p className="text-orange-400 text-sm font-medium">Autobiography</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center md:text-left">
                <div className="flex items-start gap-3 mb-4">
                  <Quote className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 italic leading-relaxed">
                    "A journey through politics, poetry, and the human spirit -
                    discover the untold story of a life dedicated to service and
                    literature."
                  </p>
                </div>
                <p className="text-orange-300 font-medium text-sm">— From the Pages of Truth</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-400">500+ Readers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="text-gray-400">Bestselling Author</span>
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg flex items-center justify-center md:justify-start gap-2">
                <BookOpen className="w-5 h-5 text-orange-400" />
                THE BOOK
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="hover:text-orange-400 transition-colors flex items-center justify-center md:justify-start gap-2">
                    <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                    About the Author
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-orange-400 transition-colors flex items-center justify-center md:justify-start gap-2">
                    <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                    Reader Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/form" className="hover:text-orange-400 transition-colors flex items-center justify-center md:justify-start gap-2">
                    <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                    Get Your Copy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Author's Journey */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg flex items-center justify-center md:justify-start gap-2">
                <Heart className="w-5 h-5 text-red-400" />
                THE JOURNEY
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "#politics", text: "Political Career" },
                  { href: "#poetry", text: "Poetry & Literature" },
                  { href: "#rajiv", text: "With Rajiv Gandhi" },
                  { href: "#sheila", text: "Sheila Dikshit Era" },
                  { href: "#spirituality", text: "Spiritual Quest" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-orange-400 transition-colors flex items-center justify-center md:justify-start gap-2">
                      <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect & Contact */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                CONNECT
              </h4>

              <div className="space-y-3 mb-6 flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>info@maheshmanzar.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>New Delhi, India</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h5 className="text-white font-semibold text-sm text-center md:text-left">
                  FOLLOW THE AUTHOR
                </h5>
                <div className="flex justify-center md:justify-start space-x-3">
                  <Link href="#" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all transform hover:scale-110">
                    <FaFacebookF className="text-white text-sm" />
                  </Link>
                  <Link href="#" className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center hover:from-red-500 hover:to-red-600 transition-all transform hover:scale-110">
                    <FaYoutube className="text-white text-sm" />
                  </Link>
                  <Link href="#" className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center hover:from-pink-500 hover:to-purple-500 transition-all transform hover:scale-110">
                    <FaInstagram className="text-white text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-6 border-t border-gray-800 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Mahesh Manzar Autobiography. All rights reserved. |
            <Link href="#privacy" className="hover:text-orange-400 ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#terms" className="hover:text-orange-400 ml-1">
              Terms of Service
            </Link>
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Powered By</span>
            <a
              href="https://www.rbshstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors underline"
            >
              RBSH Studio
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Link href="#top">
        <div className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-amber-500 w-12 h-12 rounded-full flex items-center justify-center text-white hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-110 shadow-2xl z-50 group">
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </div>
      </Link>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
