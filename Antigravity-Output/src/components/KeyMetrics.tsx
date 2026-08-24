import { motion } from 'motion/react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line
} from 'recharts';

const conversionData = [
  { name: 'Ohne LeadPilot', rate: 12 },
  { name: 'Mit LeadPilot', rate: 28 },
];

const timeData = [
  { name: 'Wo. 1', time: 48 },
  { name: 'Wo. 2', time: 36 },
  { name: 'Wo. 3', time: 24 },
  { name: 'Wo. 4', time: 12 },
  { name: 'Wo. 5', time: 4 },
];

const stats = [
  { value: '2.3×', label: 'Conversion Rate', sub: 'Mit vs. Ohne LeadPilot' },
  { value: '−85%', label: 'Time-to-Contact', sub: 'Reaktionszeit auf Anfragen' },
];

export function KeyMetrics() {
  return (
    <section id="metriken" className="py-32 bg-[#F9F8F6] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="w-8 h-px bg-[#E56014]" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E56014]">
                  Die Resultate
                </span>
              </div>
              <h3 className="text-[38px] md:text-[56px] leading-[0.9] font-black uppercase tracking-tighter">
                Messbarer<br />
                <span className="font-serif italic font-normal tracking-normal text-[#1A1A1A]/35">Erfolg.</span>
              </h3>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="max-w-sm pb-4 border-b border-[#1A1A1A]/10"
          >
            <p className="text-sm leading-relaxed text-[#1A1A1A]/65">
              Automatisierung zahlt sich in harten KPIs aus. Sehen Sie, wie LeadPilot die Performance
              Ihres Vertriebsteams direkt beeinflusst.
            </p>
          </motion.div>
        </div>

        {/* Large stats row */}
        <div className="grid grid-cols-2 border-t border-l border-[#1A1A1A]/10 mb-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-b border-r border-[#1A1A1A]/10 p-10 bg-white"
            >
              <div className="text-[56px] md:text-[72px] font-black tracking-tighter leading-none text-[#E56014] mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] mb-1">{stat.label}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/35">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart cards — dark */}
        <div className="grid md:grid-cols-2 border-l border-[#1A1A1A]/10">
          {/* Conversion Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="p-12 border-b border-r border-[#1A1A1A]/10 bg-[#1A1A1A]"
          >
            <div className="mb-8">
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-white">Conversion Rate (%)</h4>
              <p className="text-sm text-white/40">Verdoppeln Sie Ihre Abschlussquote durch konsequentes Nachfassen.</p>
            </div>
            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={conversionData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff" strokeOpacity={0.06} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#fff', fontSize: 10, opacity: 0.5 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#fff', fontSize: 10, opacity: 0.5 }} />
                  <Tooltip
                    cursor={{ fill: '#fff', opacity: 0.04 }}
                    contentStyle={{ backgroundColor: '#F9F8F6', color: '#1A1A1A', border: 'none', fontSize: '12px' }}
                    itemStyle={{ color: '#1A1A1A' }}
                  />
                  <Bar dataKey="rate" fill="#E56014" radius={[3, 3, 0, 0]} maxBarSize={60} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Time-to-Contact Line Chart */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="p-12 border-b border-r border-[#1A1A1A]/10 bg-[#1A1A1A]"
          >
            <div className="mb-8">
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-white">Time-to-Contact (Stunden)</h4>
              <p className="text-sm text-white/40">Reduzieren Sie die Reaktionszeit auf neue Leads drastisch.</p>
            </div>
            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timeData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff" strokeOpacity={0.06} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#fff', fontSize: 10, opacity: 0.5 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#fff', fontSize: 10, opacity: 0.5 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#F9F8F6', color: '#1A1A1A', border: 'none', fontSize: '12px' }}
                    itemStyle={{ color: '#1A1A1A' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="time"
                    stroke="#23BAA4"
                    strokeWidth={2.5}
                    dot={{ fill: '#23BAA4', strokeWidth: 2, r: 4, stroke: '#1A1A1A' }}
                    activeDot={{ r: 6, fill: '#23BAA4', stroke: '#1A1A1A', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
