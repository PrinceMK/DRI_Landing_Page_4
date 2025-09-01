import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="mb-4">Dezine Democracy</h3>
            <p className="text-sm opacity-80">
              Premium materials and expert consultation for designers, architects, and homeowners.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Material Sourcing</li>
              <li>Design Consultation</li>
              <li>Custom Solutions</li>
              <li>Trade Programs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Materials</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Natural Stone</li>
              <li>Engineered Woods</li>
              <li>Designer Ceramics</li>
              <li>Metal Finishes</li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>+91 98765 43210</li>
              <li>info@dezinedemocracy.com</li>
              <li>Design Plaza, Banjara Hills</li>
              <li>Hyderabad, Telangana 500034</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; 2025 Dezine Democracy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}