
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Listings", href: "#listings" },
    { name: "Neighborhoods", href: "#neighborhoods" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="mr-2">
              <img 
                src="https://www.bhhsnv.com/site/assets/themes/ft-theme-realtor-corporate/content/header/bhhs-logo-horizontal.png" 
                alt="Berkshire Hathaway HomeServices Logo" 
                className="h-8 md:h-10"
              />
            </div>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-bhhs-navy hover:text-bhhs-gold transition duration-200 font-medium"
            >
              {link.name}
            </a>
          ))}
          <Button variant="default" className="bg-bhhs-gold hover:bg-bhhs-darkGold text-white">
            <Phone className="mr-2 h-4 w-4" /> (702) 555-8765
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-bhhs-navy"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-bhhs-navy hover:text-bhhs-gold transition duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" className="w-full bg-bhhs-gold hover:bg-bhhs-darkGold text-white mt-4">
              <Phone className="mr-2 h-4 w-4" /> (702) 555-8765
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
