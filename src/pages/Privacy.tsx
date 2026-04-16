import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/60 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
            <span className="text-lg font-semibold tracking-tight">OpenVoice</span>
          </Link>
          <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-12">Last updated: April 16, 2026</p>

          <div className="space-y-10 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
              <p>
                OpenVoice is designed with a privacy-first approach. It is only a tool that provides
                a voice interface for your own OpenClaw setup. OpenVoice is not a hosted platform, and
                we do not operate a remote backend service for your usage of the app. We do not store,
                collect, or track your personal information, voice data, or conversation history.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Data Processing</h2>
              <p className="mb-3">
                OpenVoice does not process your data on our servers because we do not provide a remote
                backend service for the product. To use OpenVoice, you must set up your own node to run
                OpenClaw and obtain your own gateway URL and gateway token. OpenVoice then uses the
                configuration that you provide to connect your device to that gateway.
              </p>
              <p>
                In practical terms, OpenVoice acts as a local client and interface layer, not as a
                data platform. Any processing of requests, audio, transcripts, or related metadata
                happens within the infrastructure you choose to run or the third-party infrastructure
                you choose to trust. We do not receive that data, and we do not maintain a central
                service that stores or manages it for you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Data Collection</h2>
              <p className="mb-3">
                <strong className="text-white">We do not collect any data.</strong> Specifically:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>No personal information is collected or stored</li>
                <li>No voice recordings are saved on our servers</li>
                <li>No conversation logs or transcripts are retained</li>
                <li>No analytics, tracking, or telemetry data is gathered</li>
                <li>No cookies or similar tracking technologies are used</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">How Your Data Flows</h2>
              <p>
                When you use OpenVoice, your voice input is captured on your device and sent directly
                to the OpenClaw gateway URL that you have configured in the app settings using the
                gateway token that you obtained for your own setup. The app functions purely as a
                proxy -- it does not intercept, analyze, store, or modify your voice data in transit.
                The data flows directly from your device to your designated gateway endpoint.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Your Gateway, Your Responsibility</h2>
              <p className="mb-3">
                Since OpenVoice connects to a gateway URL that you provide, please be aware of the following:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>
                  <strong className="text-slate-300">Gateway URL accuracy:</strong> You are responsible for
                  providing the correct gateway URL. If you enter an incorrect or malicious URL, your voice
                  data will be sent to that destination.
                </li>
                <li>
                  <strong className="text-slate-300">Gateway security:</strong> The security of your gateway
                  is your responsibility. If your gateway URL is compromised, intercepted, or misconfigured,
                  your voice data may be exposed to unauthorized parties.
                </li>
                <li>
                  <strong className="text-slate-300">Third-party gateway policies:</strong> If you use a
                  gateway hosted by a third party, their privacy practices and data handling policies apply
                  to any data they receive. We have no control over how third-party gateways process your data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Third-Party Services</h2>
              <p>
                OpenVoice does not integrate with any third-party analytics, advertising, or tracking
                services. The only external connection the app makes is to the gateway URL that you
                explicitly configure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Children's Privacy</h2>
              <p>
                OpenVoice does not knowingly collect any data from anyone, including children under
                the age of 13. Since we do not collect any personal information, there is no data to
                manage or delete.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be reflected on
                this page with an updated revision date. Since we do not collect any user data, we have
                no way to notify you of changes directly -- we encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
              <p>
                If you have any questions about this privacy policy, please visit our website at{' '}
                <a href="https://openvoice.tamidi.com" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4">
                  openvoice.tamidi.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-slate-500">OpenVoice</span>
          <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} OpenVoice. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
