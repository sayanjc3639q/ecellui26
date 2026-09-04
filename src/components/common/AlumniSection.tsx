'use client';

import React, { useState, useEffect } from 'react';
import { Search, GraduationCap, ExternalLink } from 'lucide-react';
import { BsLinkedin } from 'react-icons/bs';
import { SectionHeader } from '@/components/common/SectionHeader';
import { initialAlumniData, AlumniMember } from '@/data/alumniData';

function getOptimizedImageUrl(url: string) {
  if (!url) return '';
  if (url.includes('res.cloudinary.com') && url.includes('/upload/') && !url.includes('g_face')) {
    return url.replace('/upload/', '/upload/c_fill,g_face,w_500,h_500,q_auto,f_auto/');
  }
  return url;
}

function AlumniImage({ src, alt, initials }: { src: string; alt: string; initials: string }) {
  const [imgError, setImgError] = useState(false);
  const optimizedSrc = getOptimizedImageUrl(src);

  return (
    <div className="w-full h-52 rounded-2xl border-2 border-black overflow-hidden bg-amber-100 dark:bg-slate-800 shadow-[3px_3px_0px_0px_#000] relative">
      {!imgError && optimizedSrc ? (
        <img
          src={optimizedSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-500"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-300 via-orange-300 to-rose-300 text-slate-900 font-display font-black text-4xl">
          <span>{initials}</span>
        </div>
      )}
    </div>
  );
}

export function AlumniSection() {
  const [alumni, setAlumni] = useState<AlumniMember[]>(initialAlumniData);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBatch, setSelectedBatch] = useState<string>('All');

  // Fetch live alumni data from ecellhit.in backend API
  useEffect(() => {
    async function fetchAlumni() {
      try {
        const res = await fetch('https://server.ecellhit.in/api/v1/team/alumni/list');
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.members) && data.members.length > 0) {
            const formatted: AlumniMember[] = data.members.map((m: any) => ({
              id: m._id || String(Math.random()),
              name: m.name ? m.name.trim() : 'Alumni Member',
              post: m.post || m.role || 'Member',
              department: m.department || 'E-Cell',
              batch: m.batch || '2022',
              image: m.image && m.image !== 'NA' ? m.image : '',
              linkedin: m.linkedin_url && m.linkedin_url !== 'NA' ? m.linkedin_url : '',
              github: m.github_url && m.github_url !== 'NA' ? m.github_url : '',
              bio: m.bio && m.bio !== 'no bio' ? m.bio : '',
            }));
            setAlumni(formatted);
          }
        }
      } catch (err) {
        console.warn('Live alumni API fetch failed, using pre-loaded ecellhit.in alumni dataset:', err);
      }
    }

    fetchAlumni();
  }, []);

  // Filter batches
  const batches = ['All', ...Array.from(new Set(alumni.map((a) => a.batch))).sort()];

  // Filtered alumni
  const filteredAlumni = alumni.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.post.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBatch = selectedBatch === 'All' || item.batch === selectedBatch;
    return matchesSearch && matchesBatch;
  });

  return (
    <section id="alumni-network" className="py-24 border-b-4 border-black relative overflow-hidden bg-peach/20 dark:bg-amber-950/20">
      {/* Background Memphis Texture */}
      <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-30 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            badge="Alumni Network"
            title="Our Legacy Builders"
            subtitle="Pioneers and leaders who built the foundation of E-Cell HIT Haldia and continue to mentor the next generation."
          />
          <div className="flex items-center gap-3">
            <span className="text-xs font-display font-black px-4 py-2 bg-[#FFD166] text-slate-950 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-1.5 shrink-0">
              <GraduationCap className="w-4 h-4" /> {alumni.length} Esteemed Alumni
            </span>
          </div>
        </div>

        {/* Search & Batch Filters Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border-3 border-black dark:border-white p-4 shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#fff] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, role, department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-2 border-black dark:border-slate-700 rounded-xl text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Batch Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <span className="text-xs font-display font-black text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">Batch:</span>
            {batches.map((batch) => (
              <button
                key={batch}
                onClick={() => setSelectedBatch(batch)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-display font-black border-2 border-black transition-all ${
                  selectedBatch === batch
                    ? 'bg-primary text-white shadow-[2px_2px_0px_0px_#000]'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {batch === 'All' ? 'All Batches' : `Batch ${batch}`}
              </button>
            ))}
          </div>
        </div>

        {/* Alumni Cards Grid */}
        {filteredAlumni.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border-3 border-black p-12 text-center shadow-[6px_6px_0px_0px_#000]">
            <p className="font-display font-black text-lg text-slate-700 dark:text-slate-300">
              No alumni found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAlumni.map((member) => {
              const initials = member.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase();

              return (
                <div
                  key={member.id}
                  className="bg-white dark:bg-slate-900 rounded-[28px] border-3 border-black dark:border-white p-5 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 group space-y-4"
                >
                  <div className="space-y-4">
                    {/* Photo & Batch Badge */}
                    <div className="relative">
                      <AlumniImage src={member.image} alt={member.name} initials={initials} />
                      <span className="absolute top-2 right-2 px-2.5 py-1 bg-[#06D6A0] text-slate-950 font-display font-black text-[10px] rounded-full border border-black shadow-[2px_2px_0px_0px_#000]">
                        Batch {member.batch}
                      </span>
                    </div>

                    {/* Info Details */}
                    <div className="space-y-1.5">
                      <h3 className="font-display font-black text-xl text-slate-950 dark:text-white leading-snug group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-display font-extrabold px-2.5 py-0.5 bg-amber-200 dark:bg-amber-900/60 text-slate-900 dark:text-amber-200 rounded-md border border-black">
                          {member.post}
                        </span>
                        <span className="text-[10px] font-body text-slate-500 font-bold uppercase tracking-wider">
                          • {member.department}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Action */}
                  <div>
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-[#0077B5] hover:bg-[#005e93] text-white font-display font-black text-xs flex items-center justify-center gap-2 border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all"
                      >
                        <BsLinkedin className="w-3.5 h-3.5" /> Connect on LinkedIn
                      </a>
                    ) : (
                      <div className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-display font-black text-xs text-center border-2 border-black/20">
                        E-Cell Alumni
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
