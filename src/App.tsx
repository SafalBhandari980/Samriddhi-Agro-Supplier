import React from 'react';
import { 
  Sprout, 
  Tractor, 
  Leaf, 
  Droplets, 
  Phone, 
  MapPin, 
  Clock, 
  CreditCard, 
  Truck, 
  Users, 
  ShieldCheck,
  ArrowRight,
  Store,
  Briefcase
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-brand-600 p-2 rounded-lg text-white">
                <Sprout size={28} />
              </div>
              <div>
                <h1 className="font-serif font-bold text-xl text-brand-900 leading-tight">Sambriddhi</h1>
                <p className="text-xs font-semibold text-brand-600 tracking-wider uppercase">Agro Suppliers</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-stone-600 hover:text-brand-700 font-medium transition-colors">About</a>
              <a href="#products" className="text-stone-600 hover:text-brand-700 font-medium transition-colors">Products</a>
              <a href="#services" className="text-stone-600 hover:text-brand-700 font-medium transition-colors">Services</a>
              <a href="#contact" className="text-stone-600 hover:text-brand-700 font-medium transition-colors">Contact</a>
            </div>
            <a href="https://wa.me/9779845096438" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full font-medium transition-all shadow-sm shadow-brand-600/20">
              <Phone size={18} className="w-4 h-4 md:w-[18px] md:h-[18px]" />
              <span className="text-sm md:text-base">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden" id="about">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop" 
            alt="Lush green agriculture field" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <ShieldCheck size={16} />
              <span>Est. 2016 • Simara, Bara</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Cultivating Growth, <br/>
              <span className="text-brand-400">Empowering Farmers.</span>
            </h2>
            <p className="text-lg text-stone-200 mb-8 leading-relaxed">
              Founded in 2016 by Dhurba Adhikari, Sambriddhi Agro Suppliers is a premier agriculture input supplier and distributor. We are deeply committed to empowering the Nepalese farming community by providing top-tier seeds, fertilizers, and modern farming equipment. We partner with farmers and cooperatives, offering expert consultation to ensure sustainable growth and maximum yield.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-3.5 rounded-full font-medium transition-all flex items-center gap-2">
                Explore Products
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-3.5 rounded-full font-medium transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats / Info Bar */}
      <div className="bg-brand-900 text-brand-50 py-8 border-b-4 border-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-800">
            <div className="flex flex-col items-center text-center px-4">
              <Store className="text-brand-400 mb-2" size={28} />
              <span className="text-2xl font-bold">2016</span>
              <span className="text-brand-200 text-sm">Year Established</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Users className="text-brand-400 mb-2" size={28} />
              <span className="text-xl font-bold">Dhurba Adhikari</span>
              <span className="text-brand-200 text-sm">Owner & Founder</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <ShieldCheck className="text-brand-400 mb-2" size={28} />
              <span className="text-xl font-bold">606131702</span>
              <span className="text-brand-200 text-sm">PAN/VAT No.</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Truck className="text-brand-400 mb-2" size={28} />
              <span className="text-xl font-bold">Bagmati Province</span>
              <span className="text-brand-200 text-sm">Delivery Coverage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Services</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Comprehensive Agricultural Support</h2>
            <p className="text-stone-600 text-lg">We provide end-to-end solutions for all your farming needs, ensuring quality and reliability at every step.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-lg hover:border-brand-200 transition-all group">
              <div className="w-14 h-14 bg-brand-100 text-brand-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Store size={28} />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3">Wholesale & Retail</h4>
              <p className="text-stone-600 leading-relaxed">
                Supplying premium agro products at competitive prices for both individual farmers and large-scale agricultural businesses.
              </p>
            </div>
            
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-lg hover:border-brand-200 transition-all group">
              <div className="w-14 h-14 bg-brand-100 text-brand-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Users size={28} />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3">Farmer Consultation</h4>
              <p className="text-stone-600 leading-relaxed">
                Expert guidance and support to help you choose the right seeds, fertilizers, and techniques for maximum crop yield.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-lg hover:border-brand-200 transition-all group">
              <div className="w-14 h-14 bg-brand-100 text-brand-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Briefcase size={28} />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3">Bulk Supply for Cooperatives</h4>
              <p className="text-stone-600 leading-relaxed">
                Dedicated supply chains and special pricing structures designed specifically to support agricultural cooperatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h3 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Products</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Premium Agricultural Inputs</h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-brand-700 font-medium hover:text-brand-800 transition-colors">
              Request a Quote <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 group">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop" alt="Seeds" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-brand-700 mb-3">
                  <Sprout size={20} />
                  <h4 className="text-lg font-bold text-stone-900">High-Yield Seeds</h4>
                </div>
                <p className="text-stone-600 text-sm">Premium hybrid maize, rice, and a wide variety of seasonal vegetable seeds.</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 group">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop" alt="Fertilizers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-brand-700 mb-3">
                  <Leaf size={20} />
                  <h4 className="text-lg font-bold text-stone-900">Fertilizers</h4>
                </div>
                <p className="text-stone-600 text-sm">High-quality organic and chemical fertilizers to enrich soil and boost growth.</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 group">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=800&auto=format&fit=crop" alt="Pesticides" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-brand-700 mb-3">
                  <Droplets size={20} />
                  <h4 className="text-lg font-bold text-stone-900">Crop Protection</h4>
                </div>
                <p className="text-stone-600 text-sm">Effective and safe pesticides and insecticides to protect your valuable harvest.</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 group">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?q=80&w=800&auto=format&fit=crop" alt="Farming Tools" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-brand-700 mb-3">
                  <Tractor size={20} />
                  <h4 className="text-lg font-bold text-stone-900">Tools & Equipment</h4>
                </div>
                <p className="text-stone-600 text-sm">Durable farming tools and modern irrigation equipment for efficient agriculture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations & Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-16 text-white">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-800 p-3 rounded-full shrink-0">
                      <MapPin className="text-brand-300" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-brand-100 mb-1">Location</h4>
                      <p className="text-stone-300 text-lg">Simara, Bara, Nepal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-800 p-3 rounded-full shrink-0">
                      <Phone className="text-brand-300" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-brand-100 mb-1">Phone</h4>
                      <p className="text-stone-300 text-lg">+977-9845096438</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-800 p-3 rounded-full shrink-0">
                      <Clock className="text-brand-300" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-brand-100 mb-1">Working Hours</h4>
                      <p className="text-stone-300 text-lg">9:00 AM – 6:00 PM</p>
                      <p className="text-brand-400 text-sm mt-1">Sunday – Friday</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-stone-50 p-10 md:p-16">
                <h3 className="text-2xl font-bold text-stone-900 mb-8">Business Information</h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-center gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                      <CreditCard size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">Payment Methods</h4>
                      <p className="text-stone-600 text-sm mt-1">Cash, Bank Transfer, eSewa, Khalti</p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-center gap-4">
                    <div className="bg-green-50 p-3 rounded-lg text-green-600">
                      <Truck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">Delivery Area</h4>
                      <p className="text-stone-600 text-sm mt-1">Available across Bagmati Province</p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-center gap-4">
                    <div className="bg-purple-50 p-3 rounded-lg text-purple-600">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">Registration</h4>
                      <p className="text-stone-600 text-sm mt-1">PAN/VAT No: 606131702</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sprout className="text-brand-600" size={24} />
            <span className="font-serif font-bold text-xl text-white">Sambriddhi Agro</span>
          </div>
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Sambriddhi Agro Suppliers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
