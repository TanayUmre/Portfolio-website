import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ExternalLink, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Tanay,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, a project idea, or just want to discuss algorithms and tech, my inbox is always open!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Links & Email */}
          <div className="contact-info-col">
            <div className="email-card">
              <div className="email-card-icon">
                <Mail size={22} />
              </div>
              <div className="email-card-body">
                <span className="email-label">Direct Email</span>
                <a href={`mailto:${personalInfo.email}`} className="email-address">
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="copy-btn"
                title="Copy Email Address"
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} color="#22c55e" /> : <Copy size={16} />}
                <span className="copy-tooltip">{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="social-links-card">
              <h4 className="social-card-title">Professional Profiles</h4>
              <div className="social-pill-grid">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} className="social-external" />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                  <ExternalLink size={12} className="social-external" />
                </a>

                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <span className="pill-dot" style={{ background: '#FFA116' }}></span>
                  <span>LeetCode</span>
                  <ExternalLink size={12} className="social-external" />
                </a>

                <a
                  href={personalInfo.socials.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <span className="pill-dot" style={{ background: '#22c55e' }}></span>
                  <span>Codeforces</span>
                  <ExternalLink size={12} className="social-external" />
                </a>

                <a
                  href={personalInfo.socials.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <span className="pill-dot" style={{ background: '#9b51e0' }}></span>
                  <span>CodeChef</span>
                  <ExternalLink size={12} className="social-external" />
                </a>

                <a
                  href={personalInfo.socials.codolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <span className="pill-dot" style={{ background: '#38bdf8' }}></span>
                  <span>Codolio</span>
                  <ExternalLink size={12} className="social-external" />
                </a>
              </div>
            </div>

            <div className="status-note">
              <span className="status-dot"></span>
              <span>Typically responds within 24 hours.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form">
              <h3 className="form-title">Send a Message</h3>
              
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Internship / Collaboration / Project"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Hi Tanay, I came across your portfolio and would love to connect regarding..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <span>Send Message</span>
                <Send size={16} />
              </button>

              {submitted && (
                <div className="form-success-note">
                  <Check size={16} color="#22c55e" />
                  <span>Opening your email client... Thanks for reaching out!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
