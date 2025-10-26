import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 px-6 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-2">Company</h3>
          <p className="text-gray-400 mb-2 text-sm">
            Building exceptional digital experiences with cutting-edge technology.
          </p>
          <div className="flex gap-3">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Developers */}
        <div>
          <h3 className="text-lg font-bold mb-2">Developers</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                Open Source
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail size={16} />
              <span>info@company.com</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-sm">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={16} />
              <span>123 Tech Street, Silicon Valley, CA</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2025 Your Company. All rights reserved.
        </p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white text-sm transition">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
