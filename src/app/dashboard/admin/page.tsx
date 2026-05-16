"use client";

import { motion } from "framer-motion";
import DashboardSidebar from "@/components/layout/DashboardSidebar";

const analyticsCards = [
  {
    title: "REVENUE OVERVIEW",
    value: "$2.48M",
    delta: "+12.4% YTD",
    icon: "payments",
    chart: [40, 60, 50, 70, 55, 80, 75, 90, 85, 95, 88, 100],
    large: true,
  },
  {
    title: "ACTIVE SCHOLARS",
    value: "14,209",
    delta: "+823 this month",
    icon: "school",
    large: false,
  },
  {
    title: "TOTAL WATCH TIME",
    value: "84.2k",
    sub: "hours",
    delta: "+6.2% MTD",
    icon: "query_stats",
    large: false,
  },
];

const modules = [
  {
    title: "Import-Export Fundamentals",
    students: "4,280",
    status: "Live",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIS_XXZEdyc4X_TjQ0j2jFwwhbN2IBRWXTed_znHlmdrsvzjIiyretvhJ1qlntdwbjH_fAsMW-Kex6I3_wXNqxLetnBrptc7iyo5xHN10JGNpZ1PqS_M0LOHlUD4ov2ny-u_h8B8cz1Cg1ozlHBJ3l8k7TSKDzKt7aJS3milJqhUDgHrQ9R0pGQqfOTSZABWDOXdEeufsC1plzMGddT1BLrJPND-T1jIV05TKegE2yM6rrbb0lhPmk8AbxOCkUgpYJ01abfCOO-mk",
  },
  {
    title: "Supplier Negotiation",
    students: "3,120",
    status: "Live",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALhGG74MWePnvYdyu0liEwb--Nshc3-n4G7Y59HAnK6j2lfE96nVJsx86Rgq1F8isl0ziNNIBka_Q4s2I85wkLAX_-Nizex7m9pcPWtrlIG-TgPfC6qNF8Dv4b_Xjh5y_psiEtF9A40v5y-PlhfrrxKuzO8rtY-AGDjzs3ZO28pYzdbAFRJYmQfO95fMOfMB264uRcLXXnpx8glMSHmh8JE9pqUGKa_jdf25oBzR0XmDx7r4ILk5heQd0Z3lYfV-nfM2c9-wmMits",
  },
  {
    title: "Product Branding for Global Markets",
    students: "2,881",
    status: "Draft",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCklkeF4ZuMkBb75fsxKi5nNkwJbIhrHIfNrxc6miByGr7FpA4eCJjXy8z_KyvgKdU9Vgsg0I_REtweRpXHgVzsxFBhAluhenfRbhDS8tYaTVc4Mfx9PLYrGgntSE0cWyF2fbIryXFXGkShzU8jQptEPPYrx35C-BpX1nM2yFBdqXP1yHMZ2Bibq3eTXcynJBrjvUcLi7qFDaOX0BEa-EaMaR9vDB1idAOkW_dvivnre8ApnLwmHG4xZrWHFH9JZ2Vsbe7p-KHwJw",
  },
];

const studentActivity = [
  { name: "Aisha Nair", prog: 88, last: "Module 07" },
  { name: "Carlos Medina", prog: 72, last: "Module 05" },
  { name: "Priya Sharma", prog: 95, last: "Module 09" },
  { name: "Oliver Hughes", prog: 41, last: "Module 03" },
];

export default function AdminHubPage() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <DashboardSidebar activeIndex={0} brandLabel="Global Operations" />

      {/* Main */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {/* Header */}
        <header className="sticky top-0 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/10 z-40 px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="uppercase tracking-[0.2em]" style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "18px", fontWeight: 700 }}>
                ADMINISTRATION PORTAL
              </div>
              <div className="text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                System Overview / Command Center
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:text-primary transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "20px" }}>person</span>
                </div>
                <div>
                  <div className="text-on-surface" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>Admin — Merkanto</div>
                  <div className="text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>Executive Director</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Analytics Bento */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="mb-6 uppercase tracking-[0.2em]" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>PERFORMANCE OVERVIEW</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Revenue — large with chart */}
              <div className="md:col-span-2 glass-card p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-3xl rounded-full -mr-24 -mt-24" />
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-on-surface-variant uppercase tracking-widest mb-2" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>REVENUE OVERVIEW</div>
                    <div className="text-on-surface font-black" style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "48px", fontWeight: 700 }}>$2.48M</div>
                    <div className="text-primary flex items-center gap-1 mt-1" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>trending_up</span> +12.4% YTD
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "32px" }}>payments</span>
                </div>
                {/* Bar chart */}
                <div className="flex items-end gap-2 h-24">
                  {[40, 60, 50, 70, 55, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/20 rounded-sm transition-all hover:bg-primary/40" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                  <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
                  <span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <span className="material-symbols-outlined text-primary mb-4 block" style={{ fontSize: "32px" }}>school</span>
                  <div className="text-on-surface-variant uppercase tracking-widest mb-2" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>ACTIVE SCHOLARS</div>
                  <div className="font-black" style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "36px" }}>14,209</div>
                  <div className="text-primary mt-1 flex items-center gap-1" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>add</span> +823 this month
                  </div>
                </div>
                <div className="glass-card p-6">
                  <span className="material-symbols-outlined text-primary mb-4 block" style={{ fontSize: "32px" }}>query_stats</span>
                  <div className="text-on-surface-variant uppercase tracking-widest mb-2" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>TOTAL WATCH TIME</div>
                  <div className="font-black" style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "36px" }}>84.2k <span className="text-on-surface-variant font-normal" style={{ fontSize: "18px" }}>hrs</span></div>
                  <div className="text-primary mt-1 flex items-center gap-1" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>trending_up</span> +6.2% MTD
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Academy Modules */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="uppercase tracking-[0.2em]" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>ACADEMY MODULES</h2>
              <button className="text-primary flex items-center gap-2 hover:gap-4 transition-all" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>
                View All <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {modules.map((mod) => (
                <div key={mod.title} className="glass-card group overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src={mod.img} alt={mod.title} />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "16px" }}>{mod.title}</h4>
                      <span className={`px-2 py-1 ${mod.status === "Live" ? "bg-primary/20 text-primary" : "bg-surface-container-highest text-on-surface-variant"}`} style={{ fontFamily: "Geist, monospace", fontSize: "10px" }}>
                        {mod.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>group</span>
                      {mod.students} students enrolled
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="flex-1 border border-outline-variant py-2 hover:border-primary hover:text-primary transition-all" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                        Edit
                      </button>
                      <button className="flex-1 border border-outline-variant py-2 hover:border-primary hover:text-primary transition-all" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                        Analytics
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {/* Upload Module Card */}
              <div className="border-2 border-dashed border-outline-variant/30 hover:border-primary/30 transition-colors flex flex-col items-center justify-center p-12 cursor-pointer group min-h-[280px]">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors mb-4" style={{ fontSize: "48px" }}>add_circle</span>
                <div className="text-on-surface-variant group-hover:text-on-surface transition-colors uppercase tracking-widest text-center" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>
                  Upload New Module
                </div>
              </div>
            </div>
          </motion.section>

          {/* Student Activity + Digital Assets */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            {/* Student Activity */}
            <div className="glass-card p-6">
              <h2 className="mb-6 uppercase tracking-[0.2em]" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>STUDENT ACTIVITY</h2>
              <div className="space-y-5">
                {studentActivity.map((student) => (
                  <div key={student.name}>
                    <div className="flex justify-between mb-1">
                      <div className="text-on-surface" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>{student.name}</div>
                      <div className="text-on-surface-variant" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>{student.last} · {student.prog}%</div>
                    </div>
                    <div className="h-1 bg-surface-container-highest rounded-full">
                      <div
                        className="h-1 rounded-full transition-all"
                        style={{ width: `${student.prog}%`, background: student.prog > 80 ? "#46e176" : student.prog > 50 ? "#46e176aa" : "#46e17660" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full border border-outline-variant py-3 uppercase tracking-widest hover:border-primary hover:text-primary transition-all" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>
                View All Students
              </button>
            </div>

            {/* Digital Assets */}
            <div className="space-y-4">
              {[
                { title: "Landing Page Assets", desc: "Main website visuals and branding kit", size: "2.4 GB", icon: "web" },
                { title: "Trade Insights Pack", desc: "Market reports and infographics library", size: "890 MB", icon: "analytics" },
              ].map((asset) => (
                <div key={asset.title} className="glass-card p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "24px" }}>{asset.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-on-surface mb-1" style={{ fontFamily: "Hanken Grotesk, sans-serif", fontSize: "18px" }}>{asset.title}</div>
                    <div className="text-on-surface-variant" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}>{asset.desc}</div>
                  </div>
                  <div className="text-primary shrink-0" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>{asset.size}</div>
                </div>
              ))}
              {/* Storage bar */}
              <div className="glass-card p-6">
                <div className="flex justify-between mb-3">
                  <div className="text-on-surface" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>ASSET VAULT</div>
                  <div className="text-primary" style={{ fontFamily: "Geist, monospace", fontSize: "12px" }}>1.2 TB / 2 TB</div>
                </div>
                <div className="h-2 bg-surface-container-highest rounded-full">
                  <div className="h-2 rounded-full" style={{ width: "60%", background: "linear-gradient(90deg, #46e176, #13c35c)" }} />
                </div>
                <div className="text-on-surface-variant mt-2" style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}>800 GB remaining</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
