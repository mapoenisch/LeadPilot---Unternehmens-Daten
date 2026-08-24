import { useState, useEffect } from 'react';
import { Menu, X, User, LogOut, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenLogin?: () => void;
  onOpenSignup?: () => void;
  loggedInUser?: { email: string; org: string } | null;
  onLogout?: () => void;
}

const navLinks = [
  { href: '#problem', label: 'Problem' },
  { href: '#funktionen', label: 'Funktionen' },
  { href: '#dashboard', label: 'Dashboard', dot: true },
  { href: '#preise', label: 'Preise' },
];

export function Navbar({ onOpenLogin, onOpenSignup, loggedInUser, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection('#' + entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    ['problem', 'funktionen', 'dashboard', 'preise'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLoginClick = () => {
    setIsOpen(false);
    if (onOpenLogin) onOpenLogin();
  };

  const handleSignupClick = () => {
    setIsOpen(false);
    if (onOpenSignup) onOpenSignup();
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#F9F8F6]/90 backdrop-blur-md border-b border-[#1A1A1A]/10 shadow-sm'
          : 'bg-[#F9F8F6] border-b border-[#1A1A1A]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Nav Links — centered */}
          <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-widest font-bold">
            {navLinks.map(({ href, label, dot }) => {
              const isActive = activeSection === href;
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative flex items-center gap-1.5 transition-colors pb-1 ${
                    isActive ? 'text-[#E56014]' : 'text-[#1A1A1A] hover:text-[#E56014]'
                  }`}
                >
                  {label}
                  {dot && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isActive ? 'bg-[#E56014]' : 'bg-[#23BAA4]'
                      }`}
                    />
                  )}
                  {/* Active underline bar */}
                  <span
                    className={`absolute -bottom-px left-0 h-px bg-[#E56014] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA & Auth status */}
          <div className="hidden md:flex items-center gap-6">
            {loggedInUser ? (
              <div className="flex items-center gap-3">
                <a
                  href="#dashboard"
                  className="flex items-center gap-2 bg-[#23BAA4]/15 border border-[#23BAA4]/40 text-[#126b5f] px-3.5 py-2 rounded text-[10px] font-bold uppercase tracking-wider hover:bg-[#23BAA4]/25 transition-colors"
                >
                  <User className="w-3.5 h-3.5" />
                  <span className="max-w-[140px] truncate">{loggedInUser.org || loggedInUser.email}</span>
                </a>
                <button
                  onClick={onLogout}
                  title="Abmelden"
                  className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/50 hover:text-[#E56014] flex items-center gap-1 p-2 transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={handleLoginClick}
                  className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#E56014] transition-colors relative group cursor-pointer"
                >
                  Login
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#E56014] transition-all duration-300 group-hover:w-full" />
                </button>
                <button
                  onClick={handleSignupClick}
                  className="relative overflow-hidden bg-[#E56014] text-white px-7 py-3.5 text-[10px] uppercase tracking-widest font-bold transition-all group hover:bg-[#c95310] cursor-pointer shadow-sm"
                >
                  <span className="relative z-10">14 Tage Testen</span>
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1A1A1A] hover:text-[#E56014] transition-colors p-1"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F9F8F6] border-t border-[#1A1A1A]/10 px-4 pt-4 pb-8 space-y-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-3 border-b border-[#1A1A1A]/5 text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#E56014] transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-[#E56014]" />
              {label}
            </a>
          ))}
          <div className="pt-6 flex flex-col gap-4">
            {loggedInUser ? (
              <div className="flex flex-col gap-2">
                <div className="p-3 bg-[#23BAA4]/15 border border-[#23BAA4]/40 rounded text-xs font-bold text-[#136a5e] flex items-center justify-between">
                  <span>Workspace: {loggedInUser.org}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#23BAA4]" />
                </div>
                <button
                  onClick={onLogout}
                  className="w-full text-center py-2 text-xs uppercase font-bold text-[#1A1A1A]/60 hover:text-[#E56014]"
                >
                  Abmelden
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={handleLoginClick}
                  className="w-full text-left text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#E56014] transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={handleSignupClick}
                  className="w-full text-center bg-[#E56014] text-white px-4 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-[#c95310] transition-colors"
                >
                  Kostenlos testen
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
