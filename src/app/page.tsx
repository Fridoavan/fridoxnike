"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Search, Heart, ShoppingBag } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleWatch = () => {
    const video = videoRef.current;
    if (!video) return;

    // Coba masuk fullscreen
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ("webkitRequestFullscreen" in video) {
      (
        video as HTMLVideoElement & { webkitRequestFullscreen(): void }
      ).webkitRequestFullscreen();
    } else if ("msRequestFullscreen" in video) {
      (
        video as HTMLVideoElement & { msRequestFullscreen(): void }
      ).msRequestFullscreen();
    }

    // Play video
    video.play().catch((e) => console.warn("Autoplay gagal:", e));
  };

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      {/* Topbar */}
      <div className="w-full bg-gray-100 text-xs text-gray-600 flex justify-between items-center px-6 py-2">
        {/* Jordan Logo kiri */}
        <div className="flex items-center">
          <Image
            src="/jordanlogo.jpg"
            alt="Jordan Logo"
            width={24}
            height={24}
            className="h-5 w-auto"
          />
        </div>

        {/* Menu kanan */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-black">
            Find a Store
          </a>
          <span>|</span>
          <a href="#" className="hover:text-black">
            Help
          </a>
          <span>|</span>
          <a href="#" className="hover:text-black">
            Join Us
          </a>
          <span>|</span>
          <a href="#" className="hover:text-black">
            Sign In
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-b border-gray-200 sticky top-0 bg-white z-50">
        {/* Logo Jordan + Nike */}
        <div className="flex items-center space-x-4 w-full md:w-auto mb-4 md:mb-0">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="Nike Logo"
            width={100}
            height={24}
            className="h-6 w-auto"
          />
        </div>

        {/* Navbar */}
        <nav className="flex justify-center space-x-6 font-medium w-full md:w-auto relative">
          {[
            {
              title: "New & Featured",
              columns: [
                {
                  heading: "Featured",
                  items: ["New Arrivals", "Bestsellers", "SNKRS Launch"],
                },
                {
                  heading: "Trending",
                  items: ["Air Force 1", "Air Jordan", "Dunk"],
                },
                {
                  heading: "Shop by Sport",
                  items: ["Running", "Basketball", "Football"],
                },
                { heading: "", items: [] },
              ],
            },
            {
              title: "Men",
              columns: [
                {
                  heading: "Shoes",
                  items: ["All Shoes", "Lifestyle", "Running", "Basketball"],
                },
                {
                  heading: "Clothing",
                  items: ["T-Shirts", "Hoodies", "Shorts"],
                },
                {
                  heading: "Shop by Sport",
                  items: ["Football", "Tennis", "Golf"],
                },
                { heading: "", items: [] },
              ],
            },
            {
              title: "Women",
              columns: [
                {
                  heading: "Featured",
                  items: ["New Arrivals", "Bestsellers", "Back to School"],
                },
                {
                  heading: "Clothing",
                  items: ["Leggings", "Sports Bras", "Jackets"],
                },
                {
                  heading: "Shoes",
                  items: ["Lifestyle", "Running", "Training"],
                },
                { heading: "", items: [] },
              ],
            },
            {
              title: "Kids",
              columns: [
                {
                  heading: "Featured",
                  items: ["New Arrivals", "Back to School"],
                },
                {
                  heading: "Kids By Age",
                  items: [
                    "Older Kids (7 - 14)",
                    "Younger Kids (4 - 7)",
                    "Toddlers (0 - 4)",
                  ],
                },
                {
                  heading: "Shop by Sport",
                  items: ["Football", "Basketball", "Running"],
                },
                { heading: "", items: [] },
              ],
            },
            {
              title: "Sale",
              columns: [
                {
                  heading: "Shop Deals",
                  items: ["Men’s Sale", "Women’s Sale", "Kids’ Sale"],
                },
                {
                  heading: "Categories",
                  items: ["Shoes", "Clothing", "Accessories"],
                },
                {
                  heading: "Special Offers",
                  items: ["Extra 20% Off", "Clearance"],
                },
                { heading: "", items: [] },
              ],
            },
          ].map((menu, idx) => (
            <div key={idx} className="group relative">
              <a href="#" className="hover:text-gray-600">
                {menu.title}
              </a>
              <div className="absolute left-0 top-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out max-w-[900px] bg-white shadow-xl p-8 z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="grid grid-cols-4 gap-6">
                  {menu.columns.map((col, cIdx) => (
                    <div key={cIdx}>
                      {col.heading && (
                        <h3 className="font-semibold mb-3">{col.heading}</h3>
                      )}
                      <ul className="space-y-2 text-sm text-gray-700">
                        {col.items.map((item, iIdx) => (
                          <li
                            key={iIdx}
                            className="hover:text-black cursor-pointer transition-all duration-300 ease-in-out translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <a href="#" className="hover:text-gray-600">
            SNKRS
          </a>
        </nav>

        {/* Icons + Search */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black text-sm"
            />
          </div>
          <Heart className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
        </div>
      </header>

      {/* Promo Bar */}
      <div className="w-full bg-white text-black text-sm border-b border-gray-200 py-2 text-center">
        <p>
          New Members Enjoy <span className="font-semibold">15% Off</span> On
          The Nike App. Use: <span className="font-semibold">APP15</span>{" "}
          <a href="#" className="underline hover:text-black">
            Download Now
          </a>
        </p>
      </div>

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
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/LOLOLOLO.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/30"></div>
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
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/tenisnike.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-36 left-1/2 -translate-x-1/2 text-center text-white px-4">
                <h2 className="text-sm text-white mb-2">
                  The you that knows you can is 26.2 miles away.
                </h2>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                  JUST DO IT.
                </h1>
                <div className="flex justify-center gap-4 mt-6">
                  <button
                    onClick={handleWatch}
                    className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
                  >
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
              <Image
                src={item.img}
                alt={item.name}
                width={300}
                height={500}
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
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={500}
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
                <Image
                  src={item.img}
                  alt={item.name}
                  width={280}
                  height={280}
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-800 px-6 py-12 border-t border-gray-200 mt-12">
        <div className="grid md:grid-cols-5 gap-6">
          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-black cursor-pointer">Find A Store</li>
              <li className="hover:text-black cursor-pointer">
                Become A Member
              </li>
              <li className="hover:text-black cursor-pointer">
                Running Shoe Finder
              </li>
              <li className="hover:text-black cursor-pointer">Nike Coaching</li>
              <li className="hover:text-black cursor-pointer">
                Education Discounts
              </li>
              <li className="hover:text-black cursor-pointer">
                Send Us Feedback
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-black cursor-pointer">Get Help</li>
              <li className="hover:text-black cursor-pointer">Order Status</li>
              <li className="hover:text-black cursor-pointer">Delivery</li>
              <li className="hover:text-black cursor-pointer">Returns</li>
              <li className="hover:text-black cursor-pointer">
                Payment Options
              </li>
              <li className="hover:text-black cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-black cursor-pointer">About Nike</li>
              <li className="hover:text-black cursor-pointer">News</li>
              <li className="hover:text-black cursor-pointer">Careers</li>
              <li className="hover:text-black cursor-pointer">Investors</li>
              <li className="hover:text-black cursor-pointer">
                Sustainability
              </li>
              <li className="hover:text-black cursor-pointer">Impact</li>
              <li className="hover:text-black cursor-pointer">
                Report a Concern
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-bold mb-4">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-black cursor-pointer">Terms of Sale</li>
              <li className="hover:text-black cursor-pointer">Terms of Use</li>
              <li className="hover:text-black cursor-pointer">
                Nike Privacy Policy
              </li>
              <li className="hover:text-black cursor-pointer">
                Privacy Settings
              </li>
            </ul>
          </div>

          {/* Indonesia */}
          <div className="text-right">
            <h3 className="font-bold mb-4">Indonesia</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-black cursor-pointer">
                Visit Nike Indonesia
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-8 text-center">
          © 2025 Nike x Frido Avan Almuzaki
        </p>
      </footer>
    </div>
  );
}
