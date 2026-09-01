import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { ProcessFlow } from './components/ProcessFlow';
import { About } from './components/About';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafcff] text-slate-900 selection:bg-blue-500 selection:text-white flex flex-col justify-between">
      {/* Top Sticky Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Page Content Flow: Projects → Skills → Experience → Methodology → About → Contact */}
      <main className="flex-grow">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Projects />
        <Skills />
        <Experience />
        <ProcessFlow />
        <About />
        <Services />
        <Education />
        <Achievements />
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Executive Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Giant Luxury Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
