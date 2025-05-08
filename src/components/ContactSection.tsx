
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="mb-2 inline-block">
            <div className="px-4 py-1 bg-bhhs-gold/10 rounded-full">
              <span className="text-bhhs-gold font-medium">Get In Touch</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bhhs-navy">
            Contact Dr. Jan Duffy
          </h2>
          <p className="text-gray-600">
            Whether you're looking to buy, sell, or simply have questions about Summerlin real estate, I'm here to help
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact form */}
          <div className="lg:w-2/3 bg-gray-50 rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-white border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white border-gray-200"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="Your phone" 
                    className="bg-white border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can I help you?" 
                    className="bg-white border-gray-200"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your real estate needs" 
                  className="bg-white border-gray-200 min-h-[120px]"
                />
              </div>
              
              <Button className="bg-bhhs-navy hover:bg-bhhs-navy/90 text-white w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact info */}
          <div className="lg:w-1/3">
            <div className="bg-bhhs-cream rounded-xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6 text-bhhs-navy">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-bhhs-gold/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-bhhs-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="font-medium text-bhhs-navy">(702) 555-8765</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-bhhs-gold/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-bhhs-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="font-medium text-bhhs-navy">drjanduffy@bhhs.com</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-bhhs-gold/10 rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-bhhs-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Office Address</p>
                    <p className="font-medium text-bhhs-navy">
                      Berkshire Hathaway HomeServices<br />
                      8850 W Sunset Rd #200<br />
                      Las Vegas, NV 89148
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-bhhs-navy mb-4">Office Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Sunday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
