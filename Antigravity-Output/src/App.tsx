/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { Features } from './components/Features';
import { InterfaceTour } from './components/InterfaceTour';
import { CRMDashboard } from './components/CRMDashboard';
import { KeyMetrics } from './components/KeyMetrics';
import { CaseStudy } from './components/CaseStudy';
import { ClientVoices } from './components/ClientVoices';
import { ImplementationStrategy } from './components/ImplementationStrategy';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { SignupModal } from './components/SignupModal';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [signupTitle, setSignupTitle] = useState('14 Tage kostenlos testen');
  const [loggedInUser, setLoggedInUser] = useState<{ email: string; org: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenSignup = (title?: string) => {
    if (title) setSignupTitle(title);
    else setSignupTitle('14 Tage kostenlos testen');
    setIsSignupOpen(true);
  };

  const handleLoginSuccess = (email: string, org: string) => {
    setLoggedInUser({ email, org });
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] font-sans border-8 sm:border-12 border-white box-border flex flex-col">
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenSignup={() => handleOpenSignup()}
        loggedInUser={loggedInUser}
        onLogout={handleLogout}
      />
      
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <Features />
        <InterfaceTour />
        <CRMDashboard />
        <KeyMetrics />
        <CaseStudy />
        <ClientVoices />
        <ImplementationStrategy />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>

      <Footer />

      {/* Global Modals for full functioning homepage interactivity */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        title={signupTitle}
      />
    </div>
  );
}
