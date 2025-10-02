"use client";

import React, { useRef } from "react";
import { Search, Heart, ShoppingBag } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleWatch = () => {
    const video = videoRef.current;
    if (video) {
      // Fullscreen support
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if ((video as any).webkitRequestFullscreen) {
        (video as any).webkitRequestFullscreen();
      } else if ((video as any).msRequestFullscreen) {
        (video as any).msRequestFullscreen();
      }

      // Play otomatis
      video.play();
    }
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Logo */}
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="flex justify-center w-full md:w-auto mb-4 md:mb-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="Nike Logo"
            className="h-6"
          />
        </div>

        {/* Navbar */}
        <nav className="flex justify-center space-x-6 font-medium w-full md:w-auto relative">
          {/* New & Featured */}
          <div className="group relative">
            <a href="#" className="hover:text-gray-600">
              New & Featured
            </a>
            <div className="absolute left-0 top-full hidden group-hover:block w-[900px] bg-white shadow-xl p-8 z-50">
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Featured</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      New Arrivals
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Bestsellers
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      SNKRS Launch
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Trending</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Air Force 1
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Air Jordan
                    </li>
                    <li className="hover:text-black cursor-pointer">Dunk</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Shop by Sport</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="hover:text-black cursor-pointer">Running</li>
                    <li className="hover:text-black cursor-pointer">
                      Basketball
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Football
                    </li>
                  </ul>
                </div>
                <div></div>
              </div>
            </div>
          </div>

          {/* Men */}
          <div className="group relative">
            <a href="#" className="hover:text-gray-600">
              Men
            </a>
            <div className="absolute left-0 top-full hidden group-hover:block w-[900px] bg-white shadow-xl p-8 z-50">
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Shoes</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>All Shoes</li>
                    <li>Lifestyle</li>
                    <li>Running</li>
                    <li>Basketball</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Clothing</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>T-Shirts</li>
                    <li>Hoodies</li>
                    <li>Shorts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Shop by Sport</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Football</li>
                    <li>Tennis</li>
                    <li>Golf</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Women */}
          <div className="group relative">
            <a href="#" className="hover:text-gray-600">
              Women
            </a>
            <div className="absolute left-0 top-full hidden group-hover:block w-[900px] bg-white shadow-xl p-8 z-50">
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Featured</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>New Arrivals</li>
                    <li>Bestsellers</li>
                    <li>Back to School</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Clothing</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Leggings</li>
                    <li>Sports Bras</li>
                    <li>Jackets</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Shoes</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Lifestyle</li>
                    <li>Running</li>
                    <li>Training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Kids */}
          <div className="group relative">
            <a href="#" className="hover:text-gray-600">
              Kids
            </a>
            <div className="absolute left-0 top-full hidden group-hover:block w-[900px] bg-white shadow-xl p-8 z-50">
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Featured</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>New Arrivals</li>
                    <li>Back to School</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Kids By Age</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Older Kids (7 - 14)</li>
                    <li>Younger Kids (4 - 7)</li>
                    <li>Toddlers (0 - 4)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Shop by Sport</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Football</li>
                    <li>Basketball</li>
                    <li>Running</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sale */}
          <div className="group relative">
            <a href="#" className="hover:text-gray-600">
              Sale
            </a>
            <div className="absolute left-0 top-full hidden group-hover:block w-[900px] bg-white shadow-xl p-8 z-50">
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Shop Deals</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Men’s Sale</li>
                    <li>Women’s Sale</li>
                    <li>Kids’ Sale</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Shoes</li>
                    <li>Clothing</li>
                    <li>Accessories</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Special Offers</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Extra 20% Off</li>
                    <li>Clearance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SNKRS */}
          <a href="#" className="hover:text-gray-600">
            SNKRS
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Search className="w-5 h-5 cursor-pointer" />
          <Heart className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
        </div>
      </header>

      {/* Video Slider Section */}
      <section className="w-full h-screen relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full h-full"
        >
          {/* Video 1 */}
          <SwiperSlide>
            <div className="relative w-full h-screen">
              <video
                className="w-full h-full object-cover"
                src="/LOLOLOLO.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/30"></div>
              {/* Teks di tengah agak bawah */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center text-white px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
                  VOMERO PREMIUM
                </h1>
                <p className="text-lg mt-4 max-w-xl mx-auto">
                  Experience a zero gravity running sensation
                </p>
                <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
                  Shop
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Video 2 */}
          <SwiperSlide>
            <div className="relative w-full h-screen">
              <video
                className="w-full h-full object-cover"
                src="/tenisnike.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
              <div className="absolute inset-0 bg-black/30"></div>
              {/* Teks di tengah agak bawah */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center text-white px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
                  JUST DO IT
                </h1>
                <p className="text-lg mt-4 max-w-xl mx-auto">
                  Greatness Favors The Bold
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
                    Watch
                  </button>
                  <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black">
                    Gear Up
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Shop by Sport */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Shop by Sport</h2>
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
          {[
            { name: "Basketball", img: "/nikebasket.jpeg" },
            { name: "Football", img: "/nikefootbal.jpeg" },
            { name: "Running", img: "/nikerunning.jpeg" },
            { name: "Tennis", img: "/niketenis.jpeg" },
            { name: "Golf", img: "/nikegolf.jpeg" },
            { name: "Skateboarding", img: "/nikeskateboard.jpeg" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[300px] overflow-hidden group"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[500px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-3 text-center font-semibold text-lg">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured</h2>
        <div className="grid md:grid-cols-2 gap-0">
          {[
            {
              title: "Built to Move Different",
              subtitle: "",
              img: "/mafianike.jpeg",
            },
            {
              title: "Coming Soon: Shox Z",
              subtitle: "Not Here to be liked",
              img: "/hitamputihshoes.jpeg",
            },
            {
              title: "Air Jordan: Dusty Rose",
              subtitle: "Never Been Done Is What We Do",
              img: "/pinkshoes.jpeg",
            },
            {
              title: "30 Sep - 02 Oct",
              subtitle: "3 Days of Drops",
              img: "/trisepatu.jpeg",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">{item.title}</h3>
                {item.subtitle && <p className="text-sm">{item.subtitle}</p>}
                <button className="mt-2 bg-white text-black px-4 py-1 rounded-full hover:bg-gray-200">
                  Shop
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Icons */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Icons</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="pb-10"
        >
          {[
            { name: "Air Jordan 1", img: "/aj1.jpeg" },
            { name: "Air Force 1", img: "/af1.jpeg" },
            { name: "V2K", img: "/p600.jpeg" },
            { name: "Metcon", img: "/metcon.jpeg" },
            { name: "Air Max Dn Roam", img: "/airmaxdnroam.jpeg" },
            { name: "Blazer", img: "/blazer.jpeg" },
            { name: "Dunk", img: "/dunk.jpeg" },
            { name: "Killshot", img: "/killshot.jpeg" },
            { name: "Cortez", img: "/cortez.jpeg" },
          ].map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-12 mt-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Find a Store</li>
              <li>Become a Member</li>
              <li>Send Us Feedback</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Nike</li>
              <li>News</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <ul className="space-y-2 text-sm">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-8">
          © 2025 Nike x FRIDOAVANALMUZAKI
        </p>
      </footer>
    </div>
  );
}
