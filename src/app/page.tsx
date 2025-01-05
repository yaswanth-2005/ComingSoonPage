"use client";

import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 flex flex-col">
      {/* Header */}
      <header className="p-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold">
            Shyam Silks
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center py-6 sm:py-10 md:py-14 flex-grow">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Text Section */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-sm sm:text-base md:text-lg font-medium text-gray-600">
                — Our Offline Store is already Opened!!
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Online Store
                <br />
                Coming Soon!!
              </h1>
            </div>

            {/* Address Section */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-medium text-gray-600">
                — Address:
              </h2>
              <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-600">
                Sunday Market, Kurisetivari Street, Bhimavaram
              </h3>
            </div>

            {/* Venture Section */}
            <div className="space-y-4">
              <h2 className="font-bold text-lg sm:text-xl">
                Join us for a venture:
              </h2>
              <div className="flex justify-center lg:justify-start items-center space-x-4">
                <img
                  src="/syamsilks.png"
                  alt="syamsilks"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
                <img
                  src="/vishnuspire.png"
                  alt="vishnuspire"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-60 sm:h-60 bg-amber-300 rounded-full blur-3xl opacity-20" />
            <div className="relative">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <img
                  src="/image.jpg"
                  alt="Silk Saree Preview"
                  className="w-full rounded-lg"
                  width={320}
                  height={240}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Promo Section */}
        <div className="bg-white w-full rounded-2xl p-4 shadow-lg mt-8">
          <div className="bg-gray-100 rounded-lg">
            <h3 className="font-bold text-center text-base sm:text-lg md:text-2xl p-4">
              Come Explore Our Store for the Best Deals and Services
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
}
