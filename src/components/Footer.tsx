import { motion } from 'framer-motion';
import { Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Videos', href: '#videos' },
  { name: 'Packages', href: '#packages' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/armenn.ar/', label: 'Instagram' },

  { icon: Linkedin, href: 'https://www.linkedin.com/in/armen-arakelyan-423488340/', label: 'LinkedIn' },
];

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-noise">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-display font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Armen Arakelyan
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
   
      </div>
    </footer>
  );
};
