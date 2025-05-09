import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bhhs-navy text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div>
            <img 
              src="https://www.bhhsnv.com/site/assets/themes/ft-theme-realtor-corporate/content/header/bhhs-logo-horizontal.png" 
              alt="Berkshire Hathaway HomeServices Logo" 
              className="h-10 mb-4 invert"
            />
            <p className="text-white/70 text-sm mt-4 mb-6">
              Dr. Jan Duffy is Summerlin's premier real estate expert, combining doctoral credentials with unparalleled local knowledge.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-bhhs-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-bhhs-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-bhhs-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-bhhs-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white/70 hover:text-bhhs-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#listings" className="text-white/70 hover:text-bhhs-gold transition-colors">
                  Listings
                </a>
              </li>
              <li>
                <a href="#neighborhoods" className="text-white/70 hover:text-bhhs-gold transition-colors">
                  Neighborhoods
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-bhhs-gold transition-colors">
                  About Dr. Duffy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-bhhs-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-5">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-bhhs-gold transition-colors">
                  Buying in Summerlin
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-bhhs-gold transition-colors">
                  Selling Your Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-bhhs-gold transition-colors">
                  Market Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-bhhs-gold transition-colors">
                  Relocation Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-bhhs-gold transition-colors">
                  Luxury Properties
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-5">Contact</h3>
            <address className="not-italic text-white/70">
              <p className="mb-3">Dr. Jan Duffy</p>
              <p className="mb-3">
                8850 W Sunset Rd #200<br />
                Las Vegas, NV 89148
              </p>
              <p className="mb-3">
                <span className="block">Phone: (702) 500-1955</span>
                <span className="block">Email: drjanduffy@bhhs.com</span>
              </p>
            </address>
          </div>
        </div>
        
        {/* Copyright and disclaimers */}
        <div className="py-6 border-t border-white/10 text-sm text-white/50">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              &copy; {new Date().getFullYear()} Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-bhhs-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-bhhs-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-bhhs-gold transition-colors">
                Sitemap
              </a>
            </div>
          </div>
          <p className="mt-4">
            Berkshire Hathaway HomeServices and the Berkshire Hathaway HomeServices symbol are registered service marks of Columbia Insurance Company, a Berkshire Hathaway affiliate.
          </p>
          <div className="mt-6 text-center">
            <span className="block text-base font-semibold text-[#3A8DDE]">Dr. Jan Duffy</span>
            <span className="block text-sm text-white/80">REALTOR® License# S.0197614.LLC</span>
            <span className="block text-sm text-white/80 mt-1">Let Me Help You Realtor</span>
            <a
              href="https://g.co/kgs/QzrV3cB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[#3A8DDE] font-semibold underline hover:text-[#0A2540] transition-colors"
            >
              Learn more from satisfied clients
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
