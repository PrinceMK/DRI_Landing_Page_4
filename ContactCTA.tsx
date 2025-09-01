import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Phone, Mail, MapPin, Home } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-20 bg-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Ready to Transform Your Home?</h2>
            <p className="mb-8 text-lg opacity-90">
              Let's bring your dream home to life! Get a free consultation and personalized 
              recommendations for your space. Our home experts are here to help.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>hello@drihomedesign.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Design Plaza, Banjara Hills, Hyderabad, Telangana 500034</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <Home className="w-5 h-5" />
                <span className="font-medium">Free Home Visit Available</span>
              </div>
              <p className="text-sm opacity-90">Our design experts can visit your home for personalized consultation</p>
            </div>
          </div>
          
          <Card className="bg-white text-slate-900">
            <CardContent className="p-6">
              <h3 className="mb-6 text-slate-900">Get Your FREE Home Consultation</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Phone Number" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Your Area/City" />
                <Textarea placeholder="Tell us about your home project (rooms, budget, timeline)..." rows={4} />
                <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">
                  Get FREE Consultation
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  No spam, no hidden charges. Just expert advice for your home.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}