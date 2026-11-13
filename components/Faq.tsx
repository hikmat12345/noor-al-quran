import { ChevronIcon } from "./Icons";

const faqs = [
  {
    q: "How do online classes work?",
    a: "Classes are held live, one-to-one, over Zoom, Google Meet or WhatsApp video. The teacher shares the Quran page on screen and listens to the student recite, correcting pronunciation in real time.",
  },
  {
    q: "Is there a free trial class?",
    a: "Yes. Message us on WhatsApp to book a free trial. You meet the teacher, we assess the student's level, and then suggest the right course and schedule.",
  },
  {
    q: "What age can students start?",
    a: "Children can usually begin from around 4–5 years old with Qaida. There is no upper limit — many of our students are adults learning or improving their recitation.",
  },
  {
    q: "Do you have female teachers?",
    a: "Yes. We offer special classes for sisters and girls with female teachers, in a separate and comfortable environment.",
  },
  {
    q: "Which time zones do you teach in?",
    a: "We welcome students worldwide — UK, USA, Canada, Europe, the Middle East, Australia and more. Timings are arranged around your schedule.",
  },
  {
    q: "What do I need for classes?",
    a: "A phone, tablet or laptop with a stable internet connection, and headphones if possible. We guide you through the setup before the first class.",
  },
];

export default function Faq() {
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary>
            {f.q}
            <ChevronIcon className="faq-chev" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
