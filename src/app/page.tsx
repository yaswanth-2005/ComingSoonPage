"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200">
      <header className="p-4 md:p-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Shyam Silks
          </Link>
          {/* <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm font-medium hover:text-amber-800"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-amber-800"
            >
              Services
            </Link>
            <Link
              href="/retainership"
              className="text-sm font-medium hover:text-amber-800"
            >
              Retainership
            </Link>
            <Button
              variant="default"
              className="bg-black text-white hover:bg-black/90"
            >
              Shop <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div> */}
        </nav>
      </header>

      <main className="max-w-7xl mx-auto mt-0 px-4 py-5 md:py-10 lg:py-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-600">
                — Our Offline Store is already Opened!!
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Online Store
                <br />
                Coming Soon!!
              </h1>
            </div>
            <div className="max-w-md space-y-4">
              <h2 className="text-lg font-medium text-gray-600">— Address:</h2>
              <h3 className="text-lg font-medium text-gray-600">
                Sunday Market, Kurisetivari Street, Bhimavaram
              </h3>
            </div>
          </div>
          <div className="relative hidden lg:block max-w-screen max-h-screen overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-300 rounded-full blur-3xl opacity-20" />

            <div className="relative space-y-6 p-4">
              <div className="bg-white rounded-2xl  p-4 shadow-lg w-90">
                <img
                  src="/image.jpg"
                  alt="Silk Saree Preview"
                  className="w-full rounded-lg"
                  width={320}
                  height={240}
                />
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg ml-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Premium Silk Collection</h3>
                  <span className="text-amber-600">₹15,999</span>
                </div>
                <div className="h-16 bg-gray-100 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-8 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-6">
            <Link href="https://facebook.com" className="hover:text-amber-800">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://twitter.com" className="hover:text-amber-800">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://instagram.com" className="hover:text-amber-800">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://youtube.com" className="hover:text-amber-800">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
          <div className="flex gap-8 text-sm">
            <Link href="/faq" className="hover:text-amber-800">
              FAQ
            </Link>
            <Link href="/privacy" className="hover:text-amber-800">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-amber-800">
              Email Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
