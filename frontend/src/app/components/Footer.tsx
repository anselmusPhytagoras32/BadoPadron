export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-white">BadoPadron</h3>
            <p className="text-sm leading-relaxed">
              Bespoke tailoring for the modern gentleperson. Crafted with precision, recorded for eternity.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Custom Suits</li>
              <li>Alterations</li>
              <li>Wedding Attire</li>
              <li>Measurement Profiling</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Location</h4>
            <ul className="space-y-2 text-sm">
              <li>Zone 4, Imperial St., Pili</li>
              <li>Camarines Sur, PH</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Mon - Fri: 9am - 6pm</li>
              <li>Saturday: 10am - 4pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} BadoPadron. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}