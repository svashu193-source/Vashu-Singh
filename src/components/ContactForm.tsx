/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ContactSubmission } from "../types";
import { Mail, User, Tag, Send, AlertCircle, CheckCircle2, Terminal, RefreshCw, Trash2, ShieldCheck } from "lucide-react";

interface ContactFormProps {
  darkMode: boolean;
  preSelectedCategory?: string;
  id?: string;
}

export default function ContactForm({ darkMode, preSelectedCategory, id }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("photo");
  const [message, setMessage] = useState("");
  
  // Status states
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [progressMsg, setProgressMsg] = useState("");
  const [diagnosticTicket, setDiagnosticTicket] = useState<string | null>(null);

  // Persistence local storage list
  const [localSubmissions, setLocalSubmissions] = useState<ContactSubmission[]>([]);

  useEffect(() => {
    try {
      const persisted = localStorage.getItem("vs_submissions");
      if (persisted) {
        setLocalSubmissions(JSON.parse(persisted));
      }
    } catch (e) {
      console.warn("Could not read local submissions", e);
    }
  }, []);

  // Sync state if category tag is changed from navbar or hero clicks
  useEffect(() => {
    if (preSelectedCategory === "photo" || preSelectedCategory === "video" || preSelectedCategory === "brand") {
      setProjectType(preSelectedCategory);
    }
  }, [preSelectedCategory]);

  const projectTypes = [
    { label: "Professional Photo Editing", value: "photo" },
    { label: "Premium Video Production / Editing", value: "video" },
    { label: "Brand Identity & Logo Design", value: "brand" },
    { label: "Bespoke Custom Combo Package", value: "custom" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    
    // Simulate complex creative-agency ticket generation
    const steps = [
      "Securing connection pipeline...",
      "Analyzing project specification schemas...",
      "Assigning lead designer (Vashu Singh)...",
      "Injecting diagnostic proposal receipt standard..."
    ];

    let currentStep = 0;
    setProgressMsg(steps[0]);

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setProgressMsg(steps[currentStep]);
      } else {
        clearInterval(interval);
        
        // Finalize submission
        const ticketId = `VS-${Math.floor(1000 + Math.random() * 9000)}-${Date.now().toString().slice(-4)}`;
        const selectionLabel = projectTypes.find(t => t.value === projectType)?.label || projectType;
        const newRecord: ContactSubmission = {
          name: name.trim(),
          email: email.trim(),
          projectType: selectionLabel,
          message: message.trim(),
          timestamp: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
        };

        const updated = [newRecord, ...localSubmissions];
        setLocalSubmissions(updated);
        try {
          localStorage.setItem("vs_submissions", JSON.stringify(updated));
        } catch (e) {
          console.warn("Could not save to localStorage", e);
        }

        setDiagnosticTicket(ticketId);
        setFormStatus("success");
        
        // Clear input controllers
        setName("");
        setEmail("");
        setMessage("");
      }
    }, 900);
  };

  const clearSubmissions = () => {
    setLocalSubmissions([]);
    try {
      localStorage.removeItem("vs_submissions");
    } catch (e) {}
  };

  return (
    <section id={id || "contact"} className="py-24 px-4 bg-transparent max-w-7xl mx-auto relative">
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full dark:bg-white/[1%] bg-black/[1%] blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b pb-8 dark:border-white/5 border-black/5">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase block mb-3">
            05. ACQUISITION PROTOCOL
          </span>
          <h2 className={`font-display font-extrabold text-3xl sm:text-5xl tracking-tight ${darkMode ? "text-white" : "text-black"}`}>
            Secure Your Blueprint
          </h2>
        </div>
        <p className={`font-sans text-xs md:text-sm max-w-md ${darkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
          Ready to elevate your timeline? Submit details below. Vashu and our technical team review proposals in less than 12 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact info metadata sidebar */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className={`p-8 rounded-3xl border ${
            darkMode ? "glass-panel-dark text-white border-white/5" : "glass-panel-light text-black border-black/5"
          }`}>
            <span className="font-mono text-[9px] tracking-widest text-gray-400 uppercase block mb-2">AGENCY EXECUTIVE</span>
            <h4 className="font-display font-extrabold text-2xl tracking-tight mb-2">Vashu Singh</h4>
            <p className={`font-sans text-xs ${darkMode ? "text-gray-400" : "text-gray-600"} mb-6`}>
              Founder and primary creative supervisor coordinating directly with luxury brands.
            </p>

            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-3.5">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                  darkMode ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                }`}>
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase block">DIRECT EMAIL SUPPORT</span>
                  <a href="mailto:svashu193@gmail.com" className="text-xs font-bold font-display underline tracking-wide">
                    svashu193@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t dark:border-white/5 border-black/5 pt-6">
              <span className="font-mono text-[9px] text-gray-500 uppercase block mb-2">AGENCY COMPLIANCE</span>
              <div className="flex items-center gap-2 text-[11px] text-gray-400 font-sans">
                <ShieldCheck className="w-4 h-4 text-neutral-400" /> Secure SSL Sandbox Encrypted
              </div>
            </div>
          </div>

          {/* Historical submissions stored in local storage */}
          {localSubmissions.length > 0 && (
            <div className={`p-6 rounded-3xl border max-h-72 overflow-y-auto no-scrollbar ${
              darkMode ? "glass-panel-dark text-white border-white/5" : "glass-panel-light text-black border-black/5"
            }`}>
              <div className="flex justify-between items-center mb-4 pb-2 border-b dark:border-white/5 border-black/5">
                <div>
                  <span className="font-mono text-[9px] text-gray-400 block uppercase">SUBMISSION CACHE</span>
                  <p className="text-xs font-bold">Your Active Blueprints ({localSubmissions.length})</p>
                </div>
                <button
                  onClick={clearSubmissions}
                  className="p-1.5 rounded-full hover:bg-red-500/10 text-gray-400 hover:text-red-400 cursor-pointer transition-colors"
                  title="Clear Local History"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col gap-3.5">
                {localSubmissions.map((sub, i) => (
                  <div key={i} className="text-xs border-b dark:border-white/5 border-black/5 last:border-b-0 pb-3 last:pb-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-[11px] truncate max-w-[150px]">{sub.name}</span>
                      <span className="font-mono text-[9px] text-gray-500">{sub.timestamp}</span>
                    </div>
                    <p className="font-mono text-[9px] text-gray-400 uppercase tracking-tight">{sub.projectType}</p>
                    <p className={`font-sans text-[11px] mt-1 line-clamp-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {sub.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input matrix form right side */}
        <div className="lg:col-span-7">
          <div className={`p-8 rounded-3xl border ${
            darkMode 
              ? "glass-panel-dark text-white border-white/5 shadow-2xl" 
              : "glass-panel-light text-black border-black/10 shadow-xl"
          }`}>
            {formStatus === "idle" || formStatus === "error" || formStatus === "submitting" ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {formStatus === "error" && (
                  <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-2xl flex items-start gap-3 text-red-400">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div className="text-xs font-sans">
                      <p className="font-bold">Encryption Error</p>
                      <p className="mt-0.5">Please populate all required fields correctly (Name, Email, Message).</p>
                    </div>
                  </div>
                )}

                {/* Simulated connection status terminal if submitting */}
                {formStatus === "submitting" ? (
                  <div className="bg-black/95 text-green-400 font-mono text-xs rounded-2xl p-6 border border-white/10 shadow-inner flex flex-col gap-3.5 min-h-[300px] justify-center text-center">
                    <Terminal className="w-8 h-8 text-green-400 mx-auto animate-pulse" />
                    <p className="tracking-wide text-[13px] font-bold">VS PROTOCOL DISPATCH</p>
                    <div className="h-px bg-white/10 my-1" />
                    <div className="flex items-center justify-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin text-green-400" />
                      <span className="text-gray-300">{progressMsg}</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display font-extrabold text-xl tracking-tight border-b dark:border-white/5 border-black/5 pb-3">
                      Digital Proposal Parameters
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                          <User className="w-3 h-3" /> Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (formStatus === "error") setFormStatus("idle");
                          }}
                          placeholder="Genevieve Roche"
                          className={`w-full text-xs font-sans rounded-xl border p-3 focus:outline-none transition-all ${
                            darkMode 
                              ? "bg-white/5 border-white/10 text-white focus:border-white/30 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                              : "bg-black/5 border-black/10 text-black focus:border-black/30 focus:bg-white focus:shadow-md"
                          }`}
                          required
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                          <Mail className="w-3 h-3" /> Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (formStatus === "error") setFormStatus("idle");
                          }}
                          placeholder="client@chronoworks.com"
                          className={`w-full text-xs font-sans rounded-xl border p-3 focus:outline-none transition-all ${
                            darkMode 
                              ? "bg-white/5 border-white/10 text-white focus:border-white/30 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                              : "bg-black/5 border-black/10 text-black focus:border-black/30 focus:bg-white focus:shadow-md"
                          }`}
                          required
                        />
                      </div>
                    </div>

                    {/* Project Selection Select options */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                        <Tag className="w-3 h-3" /> Project Target Type
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className={`w-full text-xs font-sans rounded-xl border p-3 focus:outline-none transition-all appearance-none cursor-pointer ${
                          darkMode 
                            ? "bg-neutral-900 border-white/10 text-white focus:border-white/30" 
                            : "bg-gray-100 border-black/10 text-black focus:border-black/30"
                        }`}
                      >
                        {projectTypes.map((pt) => (
                          <option key={pt.value} value={pt.value} className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
                            {pt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] uppercase tracking-wider text-gray-400">
                        Proposal Overview <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (formStatus === "error") setFormStatus("idle");
                        }}
                        rows={5}
                        placeholder="Detail the camera assets, raw files counts, storyboard specifications, and target timelines..."
                        className={`w-full text-xs font-sans rounded-xl border p-3 focus:outline-none transition-all ${
                          darkMode 
                            ? "bg-white/5 border-white/10 text-white focus:border-white/30 focus:bg-white/10" 
                            : "bg-black/5 border-black/10 text-black focus:border-black/30 focus:bg-white"
                        }`}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className={`cursor-pointer w-full py-4 rounded-xl font-display font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 mt-2 transition-all duration-300 active:scale-98 ${
                        darkMode
                          ? "bg-white text-black hover:bg-neutral-200"
                          : "bg-black text-white hover:bg-neutral-800"
                      }`}
                    >
                      Dispatch Proposal <Send className="w-3.5 h-3.5" />
                    </button>
                  </>
                )}
              </form>
            ) : (
              // Spectacular dynamic Receipt success state
              <div className="flex flex-col items-center justify-center text-center p-6 min-h-[350px]">
                <div className="w-14 h-14 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center border border-green-500/20 mb-6 animate-bounce">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display font-black text-2xl tracking-tighter mb-2">Proposal Encoded Successfully</h3>
                <p className={`font-sans text-xs ${darkMode ? "text-gray-400" : "text-gray-600"} max-w-sm mb-8`}>
                  Your parameters have been logged and synced with Vashu's master creative roster. Direct receipt generated:
                </p>

                {/* Receipt Graphic */}
                <div className="w-full bg-black/5 dark:bg-white/5 rounded-2xl border dark:border-white/5 p-5 font-mono text-left max-w-sm">
                  <p className="text-[10px] text-gray-500 border-b border-gray-500/10 pb-2 flex justify-between">
                    <span>RECEIPT PROTOCOL</span> <span>{diagnosticTicket}</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-2">ASSIGNED EDITOR: <span className="font-bold text-white dark:text-white text-black">VASHU SINGH</span></p>
                  <p className="text-xs text-gray-400">ESTIMATED FEEDBACK: <span className="text-green-400 font-bold">&lt; 12 HOURS</span></p>
                  <p className="text-xs text-gray-400">SUPPORT DESK: <span className="underline">svashu193@gmail.com</span></p>
                </div>

                <button
                  onClick={() => setFormStatus("idle")}
                  className={`mt-8 px-6 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider cursor-pointer border ${
                    darkMode 
                      ? "border-white/10 text-white bg-white/5 hover:bg-white/10" 
                      : "border-black/10 text-black bg-black/5 hover:bg-black/10"
                  }`}
                >
                  Submit Secondary Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
