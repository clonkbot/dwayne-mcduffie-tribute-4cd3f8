import { useState, useEffect } from 'react';
import './styles.css';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface Work {
  title: string;
  role: string;
  years: string;
  description: string;
}

const timeline: TimelineEvent[] = [
  { year: '1962', title: 'Born in Detroit', description: 'Dwayne Glenn McDuffie was born on February 20, 1962, in Detroit, Michigan.' },
  { year: '1990', title: 'Damage Control', description: 'Wrote the cult-classic Marvel series about the company that cleans up after superhero battles.' },
  { year: '1993', title: 'Milestone Media Founded', description: 'Co-founded Milestone Media with Denys Cowan, Michael Davis, and Derek Dingle — a groundbreaking Black-owned comic company.' },
  { year: '1993', title: 'Static Debuts', description: 'Created Static, a teenage superhero who would later become one of the most beloved Black heroes in comics.' },
  { year: '2000', title: 'Static Shock Premieres', description: 'Static Shock animated series debuts on Kids WB, introducing Virgil Hawkins to millions.' },
  { year: '2004', title: 'Justice League Unlimited', description: 'Became story editor and writer for Justice League Unlimited, crafting some of its best episodes.' },
  { year: '2010', title: 'Ben 10 Franchise', description: 'Served as story editor for Ben 10: Ultimate Alien and wrote for the franchise.' },
  { year: '2011', title: 'Legacy Continues', description: 'Passed away on February 21, 2011, but his impact on comics and animation lives on forever.' },
];

const works: Work[] = [
  { title: 'Static', role: 'Creator & Writer', years: '1993-1997', description: 'The story of Virgil Hawkins, a teenager in Dakota City who gains electromagnetic powers. A landmark in diverse superhero representation.' },
  { title: 'Icon', role: 'Creator & Writer', years: '1993-1997', description: 'An alien stranded on Earth during slavery who becomes a superhero, partnered with the brilliant Rocket.' },
  { title: 'Hardware', role: 'Co-Creator', years: '1993-1997', description: 'Curtis Metcalf, a genius inventor who becomes an armored vigilante fighting corporate corruption.' },
  { title: 'Justice League Unlimited', role: 'Story Editor & Writer', years: '2004-2006', description: 'Penned acclaimed episodes including "The Great Brain Robbery" and "Epilogue."' },
  { title: 'Static Shock', role: 'Writer & Producer', years: '2000-2004', description: 'The Emmy-nominated animated series that brought Static to a new generation.' },
  { title: 'Ben 10: Ultimate Alien', role: 'Story Editor', years: '2010-2012', description: 'Guided the creative direction of the popular Cartoon Network series.' },
];

const quotes = [
  { text: "From where I sit, comics are for everybody... or at least they should be.", source: "Interview, 2008" },
  { text: "If you do a black character or a female character or an Asian character, then they aren't just that character. They represent that race or that gender.", source: "On representation in comics" },
  { text: "I want to make comics that are good enough that people won't even notice what color the characters are.", source: "Milestone Media launch" },
];

function HeroSection() {
  return (
    <section className="hero-section min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Halftone overlay */}
      <div className="halftone-overlay absolute inset-0 pointer-events-none" />

      {/* Comic panel lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-black transform -skew-x-12 hidden md:block" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-black transform skew-x-6 hidden lg:block" />
      </div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <div className="stagger-1">
          <span className="inline-block bg-milestone-yellow text-black px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 transform -rotate-2">
            1962 — 2011
          </span>
        </div>

        <h1 className="hero-title text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-4 md:mb-6 stagger-2">
          <span className="block text-white stroke-text">DWAYNE</span>
          <span className="block text-milestone-yellow">McDUFFIE</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed stagger-3 px-2">
          Writer. Visionary. <span className="text-milestone-blue font-bold">Revolutionary.</span>
        </p>

        <p className="text-base md:text-lg text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto stagger-4 px-2">
          Co-founder of Milestone Media. Creator of Static.
          The man who changed the face of comics and animation forever.
        </p>

        <div className="mt-8 md:mt-12 stagger-5">
          <div className="inline-flex items-center gap-2 md:gap-3 bg-black/50 border-2 border-milestone-red px-4 py-2 md:px-6 md:py-3">
            <span className="w-2 h-2 md:w-3 md:h-3 bg-milestone-red rounded-full animate-pulse" />
            <span className="text-milestone-red font-bold text-xs md:text-sm uppercase tracking-wider">
              Celebrating a Legend
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 stagger-6">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="quote-section py-16 md:py-24 lg:py-32 px-4 md:px-8 relative overflow-hidden">
      <div className="comic-burst absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] pointer-events-none opacity-10" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="speech-bubble bg-white p-6 md:p-8 lg:p-12 relative">
          <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-milestone-yellow transform rotate-45" />

          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 md:mb-6 transition-opacity duration-500">
            "{quotes[currentQuote].text}"
          </blockquote>

          <cite className="text-sm md:text-base text-gray-600 not-italic font-medium">
            — Dwayne McDuffie, {quotes[currentQuote].source}
          </cite>

          <div className="flex gap-2 mt-6 md:mt-8">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuote(idx)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  idx === currentQuote ? 'bg-milestone-red scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Quote ${idx + 1}`}
              >
                <span className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${idx === currentQuote ? 'bg-milestone-red' : 'bg-gray-300'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="timeline-section py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-gray-950 relative">
      <div className="action-lines absolute inset-0 pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4">
            THE <span className="text-milestone-yellow">TIMELINE</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">A life dedicated to changing the narrative</p>
        </div>

        <div className="relative">
          {/* Central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-milestone-blue via-milestone-yellow to-milestone-red md:-translate-x-1/2" />

          {timeline.map((event, idx) => (
            <div
              key={idx}
              className={`timeline-item relative flex items-center mb-8 md:mb-12 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Year marker */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-milestone-yellow rounded-full border-4 border-gray-950 z-10 md:-translate-x-1/2" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 lg:pr-16 md:text-right' : 'md:pl-12 lg:pl-16'}`}>
                <div className="comic-panel bg-gray-900 p-4 md:p-6 border-2 md:border-4 border-white relative">
                  <span className="absolute -top-3 md:-top-4 left-3 md:left-4 bg-milestone-red text-white px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-black">
                    {event.year}
                  </span>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorksSection() {
  const [activeWork, setActiveWork] = useState(0);

  return (
    <section className="works-section py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-milestone-blue relative overflow-hidden">
      <div className="halftone-overlay absolute inset-0 pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4">
            LEGENDARY <span className="text-milestone-yellow">WORKS</span>
          </h2>
          <p className="text-blue-100 text-base md:text-lg">The creations that changed everything</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Work selector - mobile horizontal scroll, desktop vertical */}
          <div className="lg:col-span-1 flex lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
            {works.map((work, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWork(idx)}
                className={`work-tab flex-shrink-0 w-48 md:w-auto text-left p-4 md:p-5 border-2 md:border-4 transition-all min-h-[60px] ${
                  activeWork === idx
                    ? 'bg-white text-gray-900 border-milestone-yellow scale-105'
                    : 'bg-transparent text-white border-white/30 hover:border-white/60'
                }`}
              >
                <h3 className="font-bold text-base md:text-lg">{work.title}</h3>
                <p className="text-xs md:text-sm opacity-70">{work.role}</p>
              </button>
            ))}
          </div>

          {/* Work details */}
          <div className="lg:col-span-2">
            <div className="comic-panel-large bg-white p-6 md:p-8 lg:p-12 border-4 md:border-8 border-black relative">
              <div className="absolute top-0 right-0 bg-milestone-red text-white px-3 py-1 md:px-4 md:py-2 font-black text-xs md:text-sm">
                {works[activeWork].years}
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 md:mb-4">
                {works[activeWork].title}
              </h3>

              <p className="text-milestone-blue font-bold text-lg md:text-xl mb-4 md:mb-6">
                {works[activeWork].role}
              </p>

              <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
                {works[activeWork].description}
              </p>

              {/* Decorative elements */}
              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex gap-1">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-milestone-yellow" />
                <div className="w-2 h-2 md:w-3 md:h-3 bg-milestone-blue" />
                <div className="w-2 h-2 md:w-3 md:h-3 bg-milestone-red" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneSection() {
  return (
    <section className="milestone-section py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <span className="inline-block bg-milestone-red text-white px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6">
              1993 — Present
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-tight">
              MILESTONE<br />
              <span className="text-milestone-yellow">MEDIA</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              In 1993, Dwayne McDuffie co-founded Milestone Media with Denys Cowan, Michael Davis, and Derek Dingle.
              It was the first major Black-owned comic book company in the industry.
            </p>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Milestone created heroes like Static, Icon, Hardware, and Blood Syndicate — characters that looked like the people reading them.
              The company's impact reverberates through comics and media to this day.
            </p>
          </div>

          <div className="milestone-logo-container relative">
            <div className="aspect-square bg-gradient-to-br from-milestone-blue via-milestone-yellow to-milestone-red p-1 md:p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-black flex items-center justify-center p-6 md:p-12">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 md:mb-4">M</div>
                  <div className="text-xs md:text-sm lg:text-base text-gray-400 tracking-[0.2em] md:tracking-[0.3em]">MILESTONE</div>
                  <div className="text-xs text-gray-600 mt-1 md:mt-2">EST. 1993</div>
                </div>
              </div>
            </div>

            {/* Decorative panels */}
            <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 border-4 border-milestone-yellow transform rotate-12 hidden md:block" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 md:w-20 md:h-20 bg-milestone-red transform -rotate-6 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LegacySection() {
  return (
    <section className="legacy-section py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
          THE <span className="text-milestone-yellow">LEGACY</span>
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-12">
          Dwayne McDuffie proved that diverse characters could lead their own stories,
          headline their own comics, and star in their own shows. He didn't just open doors —
          <span className="text-milestone-blue font-bold"> he built entirely new buildings.</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="stat-card bg-gray-800/50 p-6 md:p-8 border-l-4 border-milestone-yellow">
            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-milestone-yellow mb-2">200+</div>
            <div className="text-gray-400 text-sm md:text-base">Comics Written</div>
          </div>
          <div className="stat-card bg-gray-800/50 p-6 md:p-8 border-l-4 border-milestone-blue">
            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-milestone-blue mb-2">50+</div>
            <div className="text-gray-400 text-sm md:text-base">TV Episodes</div>
          </div>
          <div className="stat-card bg-gray-800/50 p-6 md:p-8 border-l-4 border-milestone-red">
            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-milestone-red mb-2">4</div>
            <div className="text-gray-400 text-sm md:text-base">Emmy Nominations</div>
          </div>
        </div>

        <div className="inline-block bg-milestone-yellow text-black px-6 py-3 md:px-8 md:py-4 font-bold text-base md:text-lg transform -rotate-1">
          "Representation matters. Always has. Always will."
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-8 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 bg-milestone-yellow" />
            <div className="w-2 h-2 bg-milestone-blue" />
            <div className="w-2 h-2 bg-milestone-red" />
          </div>

          <p className="text-gray-400 text-center text-sm md:text-base">
            In memory of Dwayne McDuffie (1962-2011)
          </p>

          <p className="text-gray-600 text-xs text-center">
            Requested by @stringer_kade · Built by @clonkbot
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-container bg-black min-h-screen overflow-x-hidden">
      <HeroSection />
      <QuoteSection />
      <TimelineSection />
      <WorksSection />
      <MilestoneSection />
      <LegacySection />
      <Footer />
    </div>
  );
}
