import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import SocialLinks from "@/components/SocialLinks";
import {
  ArrowIcon,
  BookOpenIcon,
  BrainIcon,
  CheckIcon,
  ClockIcon,
  GlobeIcon,
  MailIcon,
  MicIcon,
  PhoneIcon,
  ShieldIcon,
  StarCrescentIcon,
  TeacherIcon,
  UserVeilIcon,
  UsersIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { site, waLink } from "@/lib/site";

const courses = [
  {
    title: "Quran Nazra",
    sub: "Reading with Tajweed",
    urdu: "قرآن ناظرہ",
    urduSub: "تجوید کے ساتھ",
    text: "Start from Noorani Qaida and progress to fluent, correct recitation of the complete Quran.",
    Icon: BookOpenIcon,
    color: "#1f8a4c",
  },
  {
    title: "Quran Hifz",
    sub: "Memorization",
    urdu: "قرآن حفظ",
    urduSub: "حفظ کرنے کے لیے",
    text: "A structured memorization plan with daily sabaq, sabqi and manzil revision under a qualified Hafiz.",
    Icon: BrainIcon,
    color: "#1d5fbf",
  },
  {
    title: "Tajweed Classes",
    sub: "Correct Pronunciation",
    urdu: "تجوید کی کلاسز",
    urduSub: "درست تلفظ کے لیے",
    text: "Master Makharij, Sifaat and the rules of Tajweed to recite the Quran as it was revealed.",
    Icon: MicIcon,
    color: "#7a3fb8",
  },
  {
    title: "Basic Islamic Studies",
    sub: "For All Ages",
    urdu: "اسلامی بنیادی تعلیمات",
    urduSub: "ہر عمر کے لیے",
    text: "Salah, duas, Kalimas, Seerah and the essentials of faith — taught simply and lovingly.",
    Icon: StarCrescentIcon,
    color: "#e0701d",
  },
  {
    title: "Special Female Classes",
    sub: "Separate & Comfortable",
    urdu: "خواتین کے لیے خصوصی کلاسز",
    urduSub: "الگ اور آرام دہ انتظامات کے ساتھ",
    text: "Female teachers for sisters and girls, in a private and respectful learning environment.",
    Icon: UserVeilIcon,
    color: "#1a9a8f",
  },
];

const features = [
  { title: "Qualified & Experienced Teachers", urdu: "ماہر اور تجربہ کار اساتذہ", Icon: TeacherIcon },
  { title: "Flexible Timing", urdu: "آپ کے وقت کے مطابق", Icon: ClockIcon },
  { title: "Online Classes", urdu: "آن لائن کلاسز", sub: "Zoom / Meet / WhatsApp", Icon: GlobeIcon },
  { title: "Safe & Trusted Environment", urdu: "محفوظ اور قابلِ اعتماد ماحول", Icon: ShieldIcon },
  { title: "Individual Attention", urdu: "ہر طالب علم پر خصوصی توجہ", Icon: UsersIcon },
];

const whyUs = [
  "Authentic Islamic Learning",
  "Simple & Easy Methods",
  "Personalized Learning Plan",
  "Progress Reports for Parents",
  "Worldwide Access — All Time Zones",
  "Free Trial Class Before You Join",
];

const steps = [
  { n: "01", title: "Message us on WhatsApp", text: "Tell us the student's name, age and the course you're interested in." },
  { n: "02", title: "Book a free trial", text: "Meet your teacher online. We assess the level and answer your questions." },
  { n: "03", title: "Get your schedule", text: "Pick days and times that suit your family, in your own time zone." },
  { n: "04", title: "Start learning", text: "Live one-to-one classes with regular progress updates for parents." },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top">
        {/* ───────────── HERO ───────────── */}
        <section className="hero">
          <div className="hero-pattern" aria-hidden />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="hero-hadith">
                <span>“The best among you are those who learn the Qur’an and teach it.”</span>
                <small>— Sahih al-Bukhari</small>
              </p>

              <p className="urdu hero-urdu-top">اب گھر بیٹھے قرآن سیکھیں</p>

              <h1>
                Learn the Quran
                <br />
                <em>from the comfort</em> of your home
              </h1>

              <p className="motto">
                {site.motto.map((m, i) => (
                  <span key={m}>
                    {m}
                    {i < site.motto.length - 1 && <i aria-hidden>•</i>}
                  </span>
                ))}
              </p>

              <p className="lead">
                Live one-to-one online Quran classes with qualified teachers — Nazra, Hifz, Tajweed and Islamic Studies
                for children, sisters and adults, anywhere in the world.
              </p>

              <div className="hero-ctas">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  <WhatsAppIcon /> Book a Free Trial
                </a>
                <a href="#courses" className="btn btn-ghost btn-lg">
                  Explore Courses <ArrowIcon width={20} height={20} />
                </a>
              </div>

              <ul className="hero-badges">
                <li><CheckIcon width={18} height={18} /> Free trial class</li>
                <li><CheckIcon width={18} height={18} /> Male &amp; female teachers</li>
                <li><CheckIcon width={18} height={18} /> All ages</li>
              </ul>
            </div>

            <div className="hero-visual">
              <div className="arch">
                <div className="arch-inner">
                  <p className="arabic arch-bismillah">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
                  <p className="arabic arch-title">نور القرآن</p>
                  <p className="urdu arch-urdu">قرآن کی روشنی، ہر دل تک</p>
                  <div className="arch-divider" aria-hidden>
                    <span />
                    ✦
                    <span />
                  </div>
                  <p className="urdu arch-urdu-sm">قرآن سیکھیں، زندگی سنواریں</p>
                </div>
              </div>
              <div className="float-card float-card-1">
                <TeacherIcon />
                <div>
                  <strong>Live 1-on-1</strong>
                  <span>Zoom · Meet · WhatsApp</span>
                </div>
              </div>
              <div className="float-card float-card-2">
                <GlobeIcon />
                <div>
                  <strong>Global Students</strong>
                  <span>All time zones welcome</span>
                </div>
              </div>
            </div>
          </div>
          <svg className="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
            <path d="M0 40c240 40 480 40 720 0s480-40 720 0v40H0Z" />
          </svg>
        </section>

        {/* ───────────── FEATURE STRIP ───────────── */}
        <section className="strip">
          <div className="container strip-grid">
            {features.map(({ title, urdu, sub, Icon }) => (
              <div key={title} className="strip-item">
                <span className="strip-icon"><Icon /></span>
                <div>
                  <strong>{title}</strong>
                  {sub && <small>{sub}</small>}
                  <span className="urdu">{urdu}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────── COURSES ───────────── */}
        <section id="courses" className="section">
          <div className="container">
            <header className="section-head">
              <span className="eyebrow">Our Courses <b className="urdu">ہمارے کورسز</b></span>
              <h2>Programs for every learner</h2>
              <p>From the first letters of the Qaida to completing Hifz — choose the path that fits you or your child.</p>
            </header>

            <div className="courses">
              {courses.map(({ title, sub, urdu, urduSub, text, Icon, color }) => (
                <article key={title} className="course" style={{ ["--accent" as string]: color }}>
                  <span className="course-icon"><Icon width={30} height={30} /></span>
                  <h3>{title}</h3>
                  <p className="course-sub">{sub}</p>
                  <p className="urdu course-urdu">{urdu}</p>
                  <p className="urdu course-urdu-sub">({urduSub})</p>
                  <p className="course-text">{text}</p>
                  <a
                    href={waLink(`Assalamu Alaikum! I'm interested in the ${title} course at Noor Al-Quran Online Academy.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-link"
                  >
                    Enquire now <ArrowIcon width={16} height={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── WHY US ───────────── */}
        <section id="why-us" className="section why">
          <div className="hero-pattern why-pattern" aria-hidden />
          <div className="container why-grid">
            <div>
              <span className="eyebrow eyebrow-light">Why Choose Us?</span>
              <h2>Quran Today, <em>A Better Tomorrow</em></h2>
              <p className="why-lead">
                We combine authentic Islamic teaching with patient, modern methods — so every student, young or old,
                learns with confidence and love for the Book of Allah.
              </p>
              <ul className="why-list">
                {whyUs.map((w) => (
                  <li key={w}>
                    <span><CheckIcon width={16} height={16} /></span>
                    {w}
                  </li>
                ))}
              </ul>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
                <WhatsAppIcon /> Register Now
              </a>
            </div>

            <figure className="ayah">
              <p className="arabic ayah-ar">
                ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ
              </p>
              <p className="urdu ayah-ur">”یہ وہ کتاب ہے جس میں کوئی شک نہیں، پرہیزگاروں کے لیے ہدایت ہے“</p>
              <blockquote>“This is the Book about which there is no doubt, a guidance for those who are righteous.”</blockquote>
              <figcaption>Surah Al-Baqarah · 2:2</figcaption>
            </figure>
          </div>
        </section>

        {/* ───────────── HOW IT WORKS ───────────── */}
        <section id="how-it-works" className="section">
          <div className="container">
            <header className="section-head">
              <span className="eyebrow">How It Works</span>
              <h2>Start in four simple steps</h2>
              <p>Getting started takes just a message. No complicated forms, no long waits.</p>
            </header>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.n} className="step">
                  <span className="step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────── BANNER / POSTER ───────────── */}
        <section className="section poster-section">
          <div className="container poster-grid">
            <div className="poster-frame">
              <img src="/banner.jpg" alt="Noor Al-Quran Online Academy poster — courses and contact details" loading="lazy" />
            </div>
            <div>
              <span className="eyebrow">Share with family</span>
              <h2>Spread the light of the Quran</h2>
              <p className="poster-text">
                Know someone who wants to learn the Quran? Share our poster with family and friends — every person
                who learns through you is a source of continuous reward, in sha Allah.
              </p>
              <div className="hero-ctas">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Learn Quran online from home with Noor Al-Quran Online Academy! WhatsApp: ${site.phoneDisplay}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <WhatsAppIcon /> Share on WhatsApp
                </a>
                <a href="/banner.jpg" download="Noor-Al-Quran-Academy.jpg" className="btn btn-ghost-dark">
                  Download Poster
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── FAQ ───────────── */}
        <section id="faq" className="section section-tint">
          <div className="container faq-wrap">
            <header className="section-head">
              <span className="eyebrow">FAQ</span>
              <h2>Questions parents often ask</h2>
            </header>
            <Faq />
          </div>
        </section>

        {/* ───────────── CONTACT ───────────── */}
        <section id="contact" className="section">
          <div className="container contact-grid">
            <div className="contact-info">
              <span className="eyebrow">Contact Us</span>
              <h2>Register for a free trial</h2>
              <p className="urdu contact-urdu">رجسٹریشن اور مزید معلومات کے لیے رابطہ کریں</p>

              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="contact-card contact-wa">
                <WhatsAppIcon width={32} height={32} />
                <div>
                  <small>WhatsApp / Call</small>
                  <strong>{site.phoneDisplay}</strong>
                </div>
              </a>
              <a href={`tel:+${site.whatsappNumber}`} className="contact-card">
                <PhoneIcon width={28} height={28} />
                <div>
                  <small>Call us</small>
                  <strong>{site.phoneDisplay}</strong>
                </div>
              </a>
              {site.email && (
                <a href={`mailto:${site.email}`} className="contact-card">
                  <MailIcon width={28} height={28} />
                  <div>
                    <small>Email</small>
                    <strong>{site.email}</strong>
                  </div>
                </a>
              )}

              <p className="follow">Follow us</p>
              <SocialLinks />
            </div>

            <div className="contact-form-card">
              <h3>Quick registration</h3>
              <p>Fill in a few details and we&apos;ll reply on WhatsApp, in sha Allah.</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-brand">Noor Al-Quran <span>Online Academy</span></p>
            <p className="urdu footer-urdu">نور قرآن آن لائن اکیڈمی — قرآن کی روشنی، ہر دل تک</p>
            <p className="footer-tag">Global students welcome · دنیا بھر کے طلبہ کے لیے خوش آمدید</p>
          </div>
          <nav aria-label="Footer">
            <a href="#courses">Courses</a>
            <a href="#why-us">Why Us</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
          <div>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="footer-phone">
              <WhatsAppIcon width={20} height={20} /> {site.phoneDisplay}
            </a>
            <SocialLinks className="social-footer" />
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Noor Al-Quran Online Academy. All rights reserved.</span>
          <span className="footer-motto">Quran Today, A Better Tomorrow ♡</span>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a href={waLink()} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Chat on WhatsApp">
        <WhatsAppIcon width={30} height={30} />
        <span className="wa-float-label">Chat with us</span>
      </a>
    </>
  );
}
