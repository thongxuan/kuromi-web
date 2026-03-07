import { Link } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'

const APP_STORE_URL = '#'

function WaveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <rect
          key={i}
          x={i * 14}
          y={20 - [8, 14, 10, 18, 12, 16, 8, 14, 10][i]}
          width="6"
          rx="3"
          height={[16, 28, 20, 36, 24, 32, 16, 28, 20][i]}
          fill="currentColor"
          opacity={0.6 + i * 0.04}
        >
          <animate
            attributeName="height"
            values={`${[16, 28, 20, 36, 24, 32, 16, 28, 20][i]};${[28, 16, 32, 20, 36, 16, 28, 20, 32][i]};${[16, 28, 20, 36, 24, 32, 16, 28, 20][i]}`}
            dur={`${1.2 + i * 0.15}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values={`${20 - [8, 14, 10, 18, 12, 16, 8, 14, 10][i]};${20 - [14, 8, 16, 10, 18, 8, 14, 10, 16][i]};${20 - [8, 14, 10, 18, 12, 16, 8, 14, 10][i]}`}
            dur={`${1.2 + i * 0.15}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
    </svg>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/60 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <WaveIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">OpenVoice</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#download" className="text-sm text-slate-400 hover:text-white transition-colors">Download</a>
            <Link to="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Available on iOS
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.1] animate-fade-in-up delay-100">
            Your Voice,{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Gateway
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            OpenVoice lets you interact with AI through natural voice conversations.
            Connect to your own OpenClaw gateway and keep full control of your data.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <a
              href={APP_STORE_URL}
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-white text-slate-900 font-semibold text-base hover:bg-slate-100 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </a>
          </div>

          {/* Animated wave visualization */}
          <div className="mt-16 animate-fade-in delay-500">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse-ring" />
              <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 flex items-center justify-center animate-float">
                <WaveIcon className="w-16 h-10 text-indigo-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 animate-fade-in-up">
            Built for Privacy & Control
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-16 animate-fade-in-up delay-100">
            OpenVoice is designed with a simple principle: your voice, your rules.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                ),
                title: 'Voice-First Interface',
                desc: 'Speak naturally and get instant AI responses. No typing needed -- just talk.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                title: 'Zero Data Storage',
                desc: 'We don\'t store, track, or log any of your conversations. Your data never touches our servers.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                title: 'Your Own Gateway',
                desc: 'Connect to your self-hosted OpenClaw gateway. You control the infrastructure.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: 'Fast & Lightweight',
                desc: 'Minimal app footprint with instant voice recognition. No bloat, no background processes.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                ),
                title: 'Open Architecture',
                desc: 'Built on open standards. Transparent about how your voice data flows from device to gateway.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'Secure by Design',
                desc: 'Voice is proxied directly to your gateway over encrypted connections. Nothing in between.',
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-indigo-500/20 transition-all duration-300"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-16">Three simple steps to get started</p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Set Up Your Gateway', desc: 'Deploy your OpenClaw gateway or use an existing one.' },
              { step: '02', title: 'Connect the App', desc: 'Enter your gateway URL in the OpenVoice app settings.' },
              { step: '03', title: 'Start Talking', desc: 'Press and speak. Your voice goes directly to your gateway.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl font-extrabold text-indigo-500/20 mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent border border-indigo-500/10 p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get OpenVoice</h2>
            <p className="text-slate-400 mb-10 max-w-md mx-auto">
              Download the app and start having voice conversations with AI through your own gateway.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
              <a
                href={APP_STORE_URL}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on the App Store
              </a>

              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-white rounded-2xl shadow-lg shadow-white/5">
                  <QRCodeSVG
                    value={APP_STORE_URL}
                    size={140}
                    bgColor="#ffffff"
                    fgColor="#0f172a"
                    level="M"
                  />
                </div>
                <span className="text-xs text-slate-500">Scan to download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <WaveIcon className="w-4 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-slate-400">OpenVoice</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} OpenVoice. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
