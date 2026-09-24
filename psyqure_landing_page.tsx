import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Shield,
  Star,
  Quote,
  Brain,
  HeartHandshake,
  Users,
  Briefcase,
  ChevronDown,
  ChevronUp,
  CalendarHeart,
  Info,
  History
} from 'lucide-react';

import profileImg from './src/assets/logo.png';
import heroImg from './src/assets/hero-bg.jpg';
import serviceIndividuImg from './src/assets/services/service-individu.webp';
import servicePasanganImg from './src/assets/services/service-pasangan.webp';
import serviceAnakImg from './src/assets/services/service-anak.webp';
import serviceKarirImg from './src/assets/services/service-karir.webp';

const pageData = {
  name: "PsyQure",
  phone: "6289529605601", // Ganti dengan nomor WhatsApp klinik
  address: "Jl. Kesehatan Mental No.10, Palangka Raya, Kalteng.",
  title: "Temukan Kedamaian Pikiran & Kesejahteraan Mental Anda",
  description: "PsyQure hadir sebagai mitra perjalanan kesehatan mental Anda. Dengan psikolog klinis profesional dan berlisensi, kami menyediakan ruang aman untuk Anda bercerita, bertumbuh, dan pulih.",
  profileImg: profileImg, 
  heroImg: heroImg,
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/search/?api=1&query=Palangka+Raya,+Kalimantan+Tengah", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  highlights: [
    { text: "Privasi Terjamin", icon: "Shield" },
    { text: "Psikolog Berlisensi", icon: "Brain" },
    { text: "Ruang Nyaman", icon: "HeartHandshake" }
  ],
  about: "PsyQure adalah pusat layanan kesehatan mental yang berdedikasi untuk memberikan akses psikoterapi dan konseling berkualitas. Kami percaya bahwa setiap individu berhak mendapatkan kebahagiaan dan keseimbangan emosional. Pendekatan kami berbasis bukti ilmiah dengan mengedepankan empati, rahasia klien, dan kenyamanan tanpa penghakiman.",
  history: [
    { year: "2018", title: "Awal Berdiri", desc: "Didirikan oleh tim psikolog klinis muda dengan visi mematahkan stigma kesehatan mental di daerah." },
    { year: "2020", title: "Ekspansi Layanan Online", desc: "Beradaptasi dengan pandemi dengan menghadirkan telekonseling bagi ribuan klien di seluruh Indonesia." },
    { year: "2023", title: "Klinik Terpadu", desc: "Membuka klinik luring modern dengan fasilitas terapi bermain, relaksasi, dan asesmen lengkap." }
  ],
  services: [
    { name: "Konseling Individu", desc: "Sesi empat mata untuk mengatasi kecemasan, depresi, trauma, atau manajemen stres.", icon: "User", img: serviceIndividuImg },
    { name: "Konseling Pasangan", desc: "Membantu memperbaiki pola komunikasi dan konflik dalam hubungan atau pernikahan.", icon: "Users", img: servicePasanganImg },
    { name: "Psikologi Anak & Remaja", desc: "Penanganan masalah perilaku, minat bakat, dan tumbuh kembang anak/remaja.", icon: "Brain", img: serviceAnakImg },
    { name: "Konseling Karir", desc: "Asesmen potensi diri dan bimbingan untuk mengarahkan pilihan karir yang tepat.", icon: "Briefcase", img: serviceKarirImg }
  ],
  pricing: [
    { 
      name: "Sesi Online", 
      price: "Rp 150.000", 
      duration: "60 Menit",
      features: ["Konsultasi via Video Call", "Fleksibilitas Waktu", "Catatan Sesi Digital", "Kerahasiaan Terjamin"]
    },
    { 
      name: "Sesi Offline (Klinik)", 
      price: "Rp 250.000", 
      duration: "60 Menit",
      features: ["Konsultasi Tatap Muka", "Ruang Terapi Nyaman", "Minuman Relaksasi", "Bebas Biaya Pendaftaran"]
    },
    { 
      name: "Paket Asesmen Lengkap", 
      price: "Rp 500.000", 
      duration: "120 Menit",
      features: ["Tes Psikologi Terstandar", "Laporan Tertulis", "Sesi Konsultasi Hasil", "Rekomendasi Tindakan"]
    }
  ],
  faq: [
    { q: "Apakah kerahasiaan saya dijamin?", a: "Tentu. Seluruh data dan cerita yang Anda bagikan dijamin kerahasiaannya sesuai dengan Kode Etik Psikologi Indonesia, kecuali dalam kondisi yang mengancam nyawa." },
    { q: "Berapa kali saya harus mengikuti sesi?", a: "Jumlah sesi bervariasi tergantung pada kompleksitas masalah dan tujuan terapi. Psikolog kami akan mendiskusikan rencana intervensi pada sesi pertama Anda." },
    { q: "Apakah saya bisa memilih psikolog?", a: "Ya, Anda bisa memilih psikolog berdasarkan spesialisasi mereka, atau kami dapat merekomendasikan psikolog yang paling sesuai dengan keluhan Anda." },
    { q: "Bagaimana cara mengubah jadwal sesi?", a: "Reschedule dapat dilakukan maksimal 24 jam sebelum jadwal awal sesi Anda dengan menghubungi admin via WhatsApp." }
  ],
  testimonials: [
    { name: "A.N.", rating: 5, text: "Sangat membantu saya melewati masa-masa sulit pasca kehilangan. Psikolognya sangat empatik dan tidak menghakimi. Lingkungan kliniknya juga sangat menenangkan." },
    { name: "Keluarga B.", rating: 5, text: "Konseling pasangan di sini menyelamatkan pernikahan kami. Kami belajar cara berkomunikasi yang sehat. Terima kasih PsyQure." },
    { name: "R.D.", rating: 4, text: "Sesi online sangat praktis karena saya sibuk bekerja. Pendekatan terapisnya sangat praktikal dan memberi insight baru tentang manajemen stres saya." }
  ]
};

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const schedule = formData.get('schedule');
    const serviceType = formData.get('serviceType');
    const mode = formData.get('mode');
    const notes = formData.get('notes');
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20ingin%20mendaftar%20untuk%20${serviceType}%20(${mode})%20pada%20tanggal%20${schedule}.%20Keluhan/Catatan%20singkat:%20${notes}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank');
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`, '_blank');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const renderServiceIcon = (iconName) => {
    switch(iconName) {
      case 'User': return <Brain size={24} />;
      case 'Users': return <HeartHandshake size={24} />;
      case 'Brain': return <Brain size={24} />;
      case 'Briefcase': return <Briefcase size={24} />;
      default: return <Brain size={24} />;
    }
  };

  const renderHighlightIcon = (iconName) => {
    switch(iconName) {
      case 'Shield': return <Shield size={16} />;
      case 'Brain': return <Brain size={16} />;
      case 'HeartHandshake': return <HeartHandshake size={16} />;
      default: return <Check size={16} />;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #F3F6EC; /* Soft sage background */
          color: #0F172A;
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
          
        /* Brand gradients based on the requested color palette */
        .bg-teal-gradient {
          background: linear-gradient(135deg, #185751 0%, #10403B 100%);
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#FAFAFA] min-h-screen overflow-hidden pb-32">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[95dvh] flex flex-col justify-end pb-12 px-6 bg-[#185751]">
          
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-[#10403B]/40 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-[#10403B]/60 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-top opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10403B] via-[#10403B]/65 to-black/20"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-28 h-28 rounded-full p-1 bg-white/20 backdrop-blur-md mb-6 shadow-2xl border border-[#629285]/40">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full rounded-full object-contain bg-white p-2 border-2 border-white shadow-sm"
              />
            </div>

            <h1 className="text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-[#EAF0EB] font-light text-[15px] leading-relaxed mb-8 max-w-[95%]">
              {pageData.title}
            </p>

            {/* Sosmed & Links Grid - Updated Layout */}
            <div className="flex flex-col gap-3 w-full max-w-sm mb-8">
              <div className="grid grid-cols-2 gap-3 w-full">
                <a 
                  href={pageData.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
                >
                  <Instagram size={18} /> Instagram
                </a>
                <a 
                  href={pageData.links.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#EAF0EB]/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium w-full"
              >
                <MapPin size={18} /> Lokasi Kami
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 w-full max-w-md mx-auto">
              {pageData.highlights.map((item, idx) => (
                <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#10403B]/50 backdrop-blur-md rounded-full border border-[#629285]/30 text-[11px] text-[#EAF0EB] font-medium">
                  {renderHighlightIcon(item.icon)}
                  {item.text}
                </span>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 text-[#8eb6a5] animate-bounce p-2 rounded-full bg-white/5"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </section>

        {}
        {/* TENTANG KAMI */}
        <section id="about-section" className="py-12 px-6 bg-white border-b border-slate-100">
          <div className="mb-4 flex flex-col gap-1 items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-[#EAF0EB] rounded-2xl mb-2 text-[#185751]">
              <Info size={24} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Tentang Kami</h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed text-justify mb-10">
            {pageData.about}
          </p>

          {/* HISTORY */}
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <History className="text-[#185751]" size={22} />
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">Perjalanan Kami</h3>
            </div>
          </div>
          
          <div className="relative border-l-2 border-[#EAF0EB] ml-3 pl-6 flex flex-col gap-6 py-2">
            {pageData.history.map((hist, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#185751] border-4 border-white shadow-sm"></div>
                <h4 className="text-sm font-bold text-[#185751] mb-1">{hist.year} &mdash; {hist.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{hist.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {}
        {/* KATALOG LAYANAN */}
        <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
          <div className="mb-8 flex flex-col gap-1 text-center items-center">
            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Katalog Layanan</h2>
            <p className="text-slate-500 text-xs max-w-[280px]">Berbagai layanan psikologi yang dirancang khusus untuk kebutuhan Anda.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 no-scrollbar">
            {pageData.services.map((srv, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white rounded-[1.5rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                <div className="w-full h-40 bg-slate-100 relative">
                  <img src={srv.img} alt={srv.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-2.5 rounded-2xl text-[#185751] shadow-sm">
                    {renderServiceIcon(srv.icon)}
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-1.5">
                  <h3 className="font-bold text-slate-800 text-[15px]">{srv.name}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HARGA */}
        <section className="py-12 px-6 bg-white border-b border-slate-100">
          <div className="mb-8 flex flex-col gap-1 text-center items-center">
            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Investasi Diri</h2>
            <p className="text-slate-500 text-xs max-w-[280px]">Harga transparan untuk setiap layanan profesional kami.</p>
          </div>

          <div className="flex items-stretch overflow-x-auto snap-x snap-mandatory gap-4 pt-5 pb-6 px-1 no-scrollbar">
            {pageData.pricing.map((paket, idx) => (
              <div key={idx} className={`snap-center shrink-0 w-[280px] p-6 rounded-[2rem] border relative flex flex-col justify-between ${idx === 1 ? 'bg-teal-gradient border-[#10403B] text-white shadow-xl ring-2 ring-[#629285]/30' : 'bg-slate-50 border-slate-200 text-slate-800 shadow-sm'}`}>
                {idx === 1 && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#10403B] text-[11px] font-extrabold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg border border-slate-100 flex items-center gap-1.5 z-10 whitespace-nowrap">
                    <Star size={13} className="fill-amber-400 text-amber-400" />
                    <span>Rekomendasi</span>
                  </div>
                )}
                
                <div>
                  <h3 className={`text-[17px] font-bold tracking-tight mb-2 ${idx === 1 ? 'text-[#EAF0EB]' : 'text-slate-800'}`}>
                    {paket.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mb-5">
                    <span className="text-2xl font-extrabold tracking-tight">{paket.price}</span>
                    <span className={`text-xs font-medium ${idx === 1 ? 'text-[#8eb6a5]' : 'text-slate-500'}`}>/ {paket.duration}</span>
                  </div>
                  
                  <div className={`w-full h-px mb-5 ${idx === 1 ? 'bg-white/15' : 'bg-slate-200/80'}`}></div>
                  
                  <ul className="flex flex-col gap-3.5">
                    {paket.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed">
                        <Check size={16} className={`shrink-0 mt-0.5 ${idx === 1 ? 'text-[#8eb6a5]' : 'text-[#185751]'}`} />
                        <span className={idx === 1 ? 'text-[#EAF0EB]' : 'text-slate-600'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        {/* FAQ */}
        <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
          <div className="mb-8 flex flex-col gap-1">
            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Tanya Jawab (FAQ)</h2>
            <p className="text-slate-500 text-xs">Informasi umum seputar layanan PsyQure.</p>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faq.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-[14px] text-slate-800 focus:outline-none"
                >
                  <span className="pr-4">{item.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} className="text-[#185751] shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                </button>
                <div 
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-[200px] pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 text-[13px] leading-relaxed border-t border-slate-100 pt-3">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI */}
        <section className="py-12 px-6 bg-white border-b border-slate-100">
          <div className="mb-6 flex flex-col gap-1 items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-50 rounded-2xl mb-2 text-orange-500">
              <Quote size={24} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Kata Mereka</h2>
            <p className="text-slate-500 text-xs max-w-[280px]">Pengalaman nyata klien yang telah berproses bersama kami.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 mt-8 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-slate-50 p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-[13px] leading-relaxed italic flex-grow">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#185751] flex items-center justify-center text-white font-bold text-xs">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-slate-800">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        {/* BOOKING FORM & LOKASI */}
        <section id="booking-form" className="py-12 px-6 bg-[#EAF0EB]">
          
          {/* Alamat Card */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-200 mb-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#dce6e0] rounded-full flex items-center justify-center text-[#185751] mb-3">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Klinik PsyQure</h3>
            <p className="text-xs text-slate-500 mb-4">{pageData.address}</p>
            <a 
              href={pageData.links.maps} 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-bold text-[#185751] underline underline-offset-2"
            >
              Buka di Google Maps
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#EAF0EB] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#EAF0EB] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Jadwalkan Sesi</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Isi formulir ini untuk mengatur jadwal konsultasi Anda via WhatsApp admin kami.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Nama / Inisial</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama Anda"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#185751] focus:ring-1 focus:ring-[#185751] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Rencana Tanggal Konsultasi</label>
                <input 
                  type="date" 
                  name="schedule" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#185751] focus:ring-1 focus:ring-[#185751] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Tipe Layanan</label>
                  <select 
                    name="serviceType" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#185751] focus:ring-1 focus:ring-[#185751] transition-all"
                  >
                    <option value="">Pilih...</option>
                    <option value="Konseling Individu">Individu</option>
                    <option value="Konseling Pasangan">Pasangan</option>
                    <option value="Psikologi Anak/Remaja">Anak/Remaja</option>
                    <option value="Konseling Karir">Karir</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Mode Sesi</label>
                  <select 
                    name="mode" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#185751] focus:ring-1 focus:ring-[#185751] transition-all"
                  >
                    <option value="">Pilih...</option>
                    <option value="Online">Online</option>
                    <option value="Offline (Klinik)">Offline (Klinik)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Keluhan Singkat (Opsional)</label>
                <textarea 
                  name="notes" 
                  rows={3}
                  placeholder="Ceritakan secara singkat apa yang sedang Anda hadapi..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#185751] focus:ring-1 focus:ring-[#185751] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-[#10403B] text-[#EAF0EB] font-bold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#185751] transition-colors shadow-md border border-[#10403B]"
              >
                Kirim via WhatsApp
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </form>
          </div>
        </section>

        {}
        {/* FOOTER */}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-slate-200 mb-8"></div>
          
          <div className="w-14 h-14 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-center mb-4 p-1 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain p-1 rounded-full" />
          </div>
          
          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-slate-700 text-sm">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>

          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] mt-2 tracking-wide font-medium hover:text-slate-700 transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#10403B] backdrop-blur-xl border border-[#629285]/50 rounded-2xl text-white shadow-[0_10px_40px_rgba(16,64,59,0.4)] hover:bg-[#185751] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-white">Jadwalkan Konsultasi</span>
            <div className="bg-[#185751] text-[#EAF0EB] p-2 rounded-xl">
              <CalendarHeart size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {}
      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/50 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-slate-900 font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-slate-500 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#EAF0EB] border border-[#dce6e0] rounded-[24px] p-8 flex flex-col items-center justify-center mb-8 shadow-sm">
              <img src={pageData.profileImg} alt="Profile" className="w-[72px] h-[72px] rounded-full border border-[#a9c5b9] mb-4 object-contain bg-white p-2 shadow-sm" />
              <h4 className="text-slate-900 font-bold text-lg text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-[#185751] text-sm mt-1 text-center font-medium opacity-90">{pageData.links.instagram.replace('https://www.', '')}</p>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={copyToClipboard}
                  className="w-[60px] h-[60px] rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all shadow-sm border border-slate-200"
                >
                  {copied ? <Check size={26} className="text-[#185751]" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">
                  {copied ? 'Tersalin' : 'Salin Tautan'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToTwitter}
                  className="w-[60px] h-[60px] rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Twitter size={26} />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">X</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToFacebook}
                  className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <Facebook size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">Facebook</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToWhatsApp}
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">WhatsApp</span>
              </div>
            </div>
            
            <div className="w-full h-px bg-slate-200 mb-4"></div>
            
            <div className="flex flex-col items-center text-center">
              <h5 className="text-slate-900 font-bold text-[13px] mb-1">Ikuti Kami</h5>
              <p className="text-slate-500 text-[11px] mb-4">Follow media sosial kami untuk tips kesehatan mental harian.</p>
              <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="w-full py-3 bg-[#185751] text-white text-sm font-bold rounded-xl hover:bg-[#10403B] transition-colors">
                Kunjungi Instagram
              </a>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}