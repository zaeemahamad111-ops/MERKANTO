"use client";

import { motion } from "framer-motion";
import DashboardSidebar from "@/components/layout/DashboardSidebar";

const courses = [
  {
    title: "Import-Export Fundamentals",
    sub: "Module 06 / Trade Finance",
    progress: 64,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIS_XXZEdyc4X_TjQ0j2jFwwhbN2IBRWXTed_znHlmdrsvzjIiyretvhJ1qlntdwbjH_fAsMW-Kex6I3_wXNqxLetnBrptc7iyo5xHN10JGNpZ1PqS_M0LOHlUD4ov2ny-u_h8B8cz1Cg1ozlHBJ3l8k7TSKDzKt7aJS3milJqhUDgHrQ9R0pGQqfOTSZABWDOXdEeufsC1plzMGddT1BLrJPND-T1jIV05TKegE2yM6rrbb0lhPmk8AbxOCkUgpYJ01abfCOO-mk",
    tag: "In Progress",
  },
];

const courseLibrary = [
  { title: "Global Logistics", tag: "12 Lessons", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCklkeF4ZuMkBb75fsxKi5nNkwJbIhrHIfNrxc6miByGr7FpA4eCJjXy8z_KyvgKdU9Vgsg0I_REtweRpXHgVzsxFBhAluhenfRbhDS8tYaTVc4Mfx9PLYrGgntSE0cWyF2fbIryXFXGkShzU8jQptEPPYrx35C-BpX1nM2yFBdqXP1yHMZ2Bibq3eTXcynJBrjvUcLi7qFDaOX0BEa-EaMaR9vDB1idAOkW_dvivnre8ApnLwmHG4xZrWHFH9JZ2Vsbe7p-KHwJw" },
  { title: "Customs & Compliance", tag: "8 Lessons", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBItPVUZhFh1IYl0KLNlERfoXuX-5i1IQwBLkOedN2-yrytTZgxmbz675vgVE6VZrUZIDpbj6EtSbXgYlE9fRJ1BPQo_lki1nJJGyFt2D7fS5_TvwgtSB9yCjfDPZzk92fspO-MdIqJbVlAAFPhP9D_9CoXJF2LIlHuWFJ9_Pg0uN3Wpmi7yilFJrmzUDd01ixUgk4ioQErECEAZHNjuQrOyMwogsPAZtEAARl19zCMlgS-BedrGm5GDwDqYpVkrzaVHXMIGQf0dnw" },
  { title: "Product Branding", tag: "14 Lessons", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALhGG74MWePnvYdyu0liEwb--Nshc3-n4G7Y59HAnK6j2lfE96nVJsx86Rgq1F8isl0ziNNIBka_Q4s2I85wkLAX_-Nizex7m9pcPWtrlIG-TgPfC6qNF8Dv4b_Xjh5y_psiEtF9A40v5y-PlhfrrxKuzO8rtY-AGDjzs3ZO28pYzdbAFRJYmQfO95fMOfMB264uRcLXXnpx8glMSHmh8JE9pqUGKa_jdf25oBzR0XmDx7r4ILk5heQd0Z3lYfV-nfM2c9-wmMits" },
];

const assignments = [
  { title: "Trade Finance Report", due: "Due in 3 days", status: "Pending", color: "text-yellow-400" },
  { title: "Customs Clearance Case Study", due: "Due in 7 days", status: "In Progress", color: "text-primary" },
  { title: "Supplier Negotiation Transcript", due: "Submitted", status: "Graded — 92/100", color: "text-green-400" },
];

export default function StudentDashboardPage() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <DashboardSidebar activeIndex={0} brandLabel="Academy Portal" />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {/* Top Header */}
        <header className="sticky top-0 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/10 z-40 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-on-surface uppercase tracking-[0.2em]" style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "18px", fontWeight: 700 }}>ACADEMY DASHBOARD</div>
              <div className="text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>Student Portal / Learning Center</div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-4 text-on-surface-variant">
                <button className="hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">search</span>
                </button>
                <button className="hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                  JS
                </div>
                <div className="hidden md:block">
                  <div className="text-on-surface" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>James Sterling</div>
                  <div className="text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>Executive Track</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Nav */}
          <div className="flex gap-8 mt-4 border-b border-outline-variant/10 -mb-[1px]">
            {["My Learning", "Course Library", "Resources"].map((tab, i) => (
              <button
                key={tab}
                className={`pb-3 uppercase tracking-widest transition-colors ${i === 0 ? "text-primary border-b-2 border-primary" : "text-on-surface-variant hover:text-on-surface"}`}
                style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Continue Watching */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-on-surface mb-6 uppercase tracking-[0.2em]" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>CONTINUE WATCHING</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Course Card */}
              <div className="lg:col-span-2 glass-card group overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={courses[0].img} alt={courses[0].title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>{courses[0].tag}</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-primary" style={{ fontSize: "32px", fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-primary mb-1 uppercase tracking-wider" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>{courses[0].sub}</div>
                  <h3 className="mb-6" style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "24px", fontWeight: 500 }}>{courses[0].title}</h3>
                  <div className="mb-2 flex justify-between text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                    <span>LESSON PROGRESS</span><span className="text-primary">{courses[0].progress}%</span>
                  </div>
                  <div className="h-1 bg-surface-container-highest rounded-full">
                    <div className="h-1 bg-primary rounded-full transition-all" style={{ width: `${courses[0].progress}%` }} />
                  </div>
                  <button className="mt-6 bg-primary text-on-primary px-8 py-3 font-bold uppercase tracking-widest hover:brightness-110 transition-all" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>
                    Resume Lesson
                  </button>
                </div>
              </div>

              {/* Module Progress */}
              <div className="glass-card p-6">
                <h3 className="text-on-surface mb-6 uppercase tracking-widest" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>MODULE PROGRESS</h3>
                <div className="space-y-5">
                  {[
                    { name: "Module 01", prog: 100 },
                    { name: "Module 02", prog: 88 },
                    { name: "Module 03", prog: 64 },
                    { name: "Module 04", prog: 30 },
                    { name: "Module 05", prog: 0 },
                  ].map((m) => (
                    <div key={m.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>{m.name}</span>
                        <span className="text-primary" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>{m.prog}%</span>
                      </div>
                      <div className="h-1 bg-surface-container-highest rounded-full">
                        <div className="h-1 bg-primary rounded-full" style={{ width: `${m.prog}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-white/5 pt-6">
                  <div className="text-primary font-bold" style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "36px" }}>57%</div>
                  <div className="text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>OVERALL COMPLETION</div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Bento Row */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            {/* Live Session */}
            <div className="glass-card p-6 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary uppercase tracking-widest" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>LIVE SESSION</span>
              </div>
              <h4 className="mb-2" style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "20px" }}>Trade Finance Live Q&A</h4>
              <p className="text-on-surface-variant mb-6" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}>Begins in 2h 34m with Lead Instructor Aslan Merkanto.</p>
              <div className="flex -space-x-2 mb-6">
                {["JS", "MK", "AL", "TR"].map((ini) => (
                  <div key={ini} className="w-8 h-8 rounded-full bg-surface-container-highest border border-background flex items-center justify-center text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "10px" }}>
                    {ini}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-surface-container border border-background flex items-center justify-center text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "10px" }}>
                  +48
                </div>
              </div>
              <button className="w-full border border-primary text-primary py-2 uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                Set Reminder
              </button>
            </div>

            {/* Downloads */}
            <div className="glass-card p-6">
              <h4 className="mb-4 uppercase tracking-widest" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>LESSON RESOURCES</h4>
              <div className="space-y-3">
                {["Trade Finance PDF.pdf", "Customs_Template.xlsx", "Supplier_Checklist.docx"].map((file) => (
                  <div key={file} className="flex items-center justify-between p-3 border border-outline-variant/20 hover:border-primary/20 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: "20px" }}>description</span>
                      <span className="text-on-surface" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>{file}</span>
                    </div>
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "18px" }}>download</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate */}
            <div className="bg-surface-container-low border border-outline-variant/10 p-6">
              <h4 className="mb-2 uppercase tracking-widest" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>CERTIFICATE STATUS</h4>
              <div className="my-6 text-center">
                <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: "64px" }}>workspace_premium</span>
                <p className="text-on-surface-variant mt-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}>Complete all modules to unlock your certification</p>
              </div>
              <div className="h-1 bg-surface-container-highest mb-2">
                <div className="h-1 bg-primary" style={{ width: "57%" }} />
              </div>
              <div className="flex justify-between text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                <span>57% complete</span><span>3 modules left</span>
              </div>
            </div>
          </motion.div>

          {/* Course Library */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-on-surface mb-6 uppercase tracking-[0.2em]" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>COURSE LIBRARY</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courseLibrary.map((course) => (
                <div key={course.title} className="glass-card group overflow-hidden cursor-pointer" style={{ transition: "transform 0.2s" }}>
                  <div className="h-40 overflow-hidden">
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src={course.img} alt={course.title} />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h4 className="mb-1" style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "18px" }}>{course.title}</h4>
                      <span className="text-on-surface-variant shrink-0" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>{course.tag}</span>
                    </div>
                    <button className="mt-4 text-primary uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                      Enroll Now <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Assignments */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h2 className="text-on-surface mb-6 uppercase tracking-[0.2em]" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>CRITICAL DELIVERABLES</h2>
            <div className="glass-card divide-y divide-outline-variant/10">
              {assignments.map((a) => (
                <div key={a.title} className="flex items-center justify-between px-6 py-5 hover:bg-white/5 transition-colors">
                  <div>
                    <div className="text-on-surface mb-1" style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "18px" }}>{a.title}</div>
                    <div className="text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>{a.due}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={a.color} style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>{a.status}</span>
                    <button className="border border-outline-variant px-4 py-2 uppercase tracking-widest hover:border-primary hover:text-primary transition-all" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                      Submit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
