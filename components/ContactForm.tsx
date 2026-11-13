"use client";

import { useState, type FormEvent } from "react";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

const courses = [
  "Quran Nazra (Reading with Tajweed)",
  "Quran Hifz (Memorization)",
  "Tajweed Classes",
  "Basic Islamic Studies",
  "Special Female Classes",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState(courses[0]);
  const [who, setWho] = useState("Myself");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const msg = [
      "Assalamu Alaikum! I want to register at Noor Al-Quran Online Academy.",
      `Name: ${name}`,
      `Course: ${course}`,
      `Student: ${who}`,
      time && `Preferred time: ${time}`,
      note && `Message: ${note}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          <span>Your name</span>
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Ahmed Khan" />
        </label>
        <label>
          <span>Course</span>
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            {courses.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Classes are for</span>
          <select value={who} onChange={(e) => setWho(e.target.value)}>
            <option>Myself</option>
            <option>My child</option>
            <option>My children (siblings)</option>
            <option>A family member</option>
          </select>
        </label>
        <label>
          <span>Preferred time &amp; country</span>
          <input value={time} onChange={(e) => setTime(e.target.value)} placeholder="e.g. Evenings, UK" />
        </label>
      </div>
      <label>
        <span>Message (optional)</span>
        <textarea rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Student's age, current level, any questions…" />
      </label>
      <button type="submit" className="btn btn-whatsapp btn-lg">
        <WhatsAppIcon /> Send on WhatsApp
      </button>
      <p className="form-note">Opens WhatsApp with your details filled in — just press send.</p>
    </form>
  );
}
