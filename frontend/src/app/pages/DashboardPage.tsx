import { useState } from "react";
import { Link } from "react-router";

const MOCK_MEASUREMENTS = [
  { label: "Neck", value: "15.5", unit: "in" },
  { label: "Chest", value: "40.0", unit: "in" },
  { label: "Shoulder", value: "18.5", unit: "in" },
  { label: "Arm Length", value: "34.0", unit: "in" },
  { label: "Waist", value: "32.0", unit: "in" },
  { label: "Leg Length", value: "30.0", unit: "in" },
];

const MOCK_ACTIVE_ORDERS = [
  {
    id: "Order #091",
    title: "Navy Blue Suit",
    fabric: "Premium Wool",
    status: "Ready for Fitting",
    step: 3, // 1: Started, 2: Sewing, 3: Fitting, 4: Done
    date: "Dec 15, 2023",
  },
  {
    id: "Order #084",
    title: "Winter Coat",
    fabric: "Charcoal Cashmere",
    status: "Final Stitches",
    step: 4, 
    date: "Nov 20, 2023",
  },
];

const MOCK_PAST_ORDERS = [
  {
    id: "Order #045",
    title: "White Wedding Shirt",
    date: "June 12, 2022",
    price: "$250"
  },
  {
    id: "Order #042",
    title: "Black Tuxedo",
    date: "May 05, 2022",
    price: "$1,800"
  },
  {
    id: "Order #012",
    title: "Suit Pants Alteration",
    date: "Jan 18, 2021",
    price: "$85"
  }
];

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="min-h-screen bg-[#FBFBF9] flex flex-col md:flex-row font-sans text-stone-900 pb-20 md:pb-0">
      {/* Sidebar - Desktop */}
      <aside className="w-72 bg-white border-r border-stone-200 hidden md:flex flex-col">
        <div className="h-32 flex items-center justify-center border-b border-stone-200">
          <Link to="/" className="font-serif text-2xl tracking-wide text-stone-900">
            BadoPadron.
          </Link>
        </div>

        <div className="p-10 border-b border-stone-200">
          <p className="text-xs text-stone-400 font-bold tracking-[0.2em] uppercase mb-2">Logged in as</p>
          <h2 className="font-serif text-xl">John Doe</h2>
        </div>

        <nav className="flex-1 py-8 px-6 space-y-2">
          <button
            onClick={() => setActiveTab("active")}
            className={`w-full text-left px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all ${
              activeTab === "active" 
                ? "text-stone-900 border-l-2 border-stone-900 bg-stone-50" 
                : "text-stone-500 border-l-2 border-transparent hover:text-stone-900"
            }`}
          >
            Active Orders
          </button>

          <button
            onClick={() => setActiveTab("history")}
            className={`w-full text-left px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all ${
              activeTab === "history" 
                ? "text-stone-900 border-l-2 border-stone-900 bg-stone-50" 
                : "text-stone-500 border-l-2 border-transparent hover:text-stone-900"
            }`}
          >
            Order Record
          </button>
          
          <button
            onClick={() => setActiveTab("sizes")}
            className={`w-full text-left px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all ${
              activeTab === "sizes" 
                ? "text-stone-900 border-l-2 border-stone-900 bg-stone-50" 
                : "text-stone-500 border-l-2 border-transparent hover:text-stone-900"
            }`}
          >
            My Sizes
          </button>
        </nav>

        <div className="p-8 border-t border-stone-200">
          <Link
            to="/"
            className="text-xs font-bold text-stone-400 tracking-[0.2em] uppercase hover:text-stone-900 transition-colors"
          >
            Log Out
          </Link>
        </div>
      </aside>

      {/* Top Header - Mobile */}
      <header className="md:hidden bg-white border-b border-stone-200 p-6 flex justify-between items-center sticky top-0 z-10">
        <span className="font-serif text-xl tracking-wide">BadoPadron.</span>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">John Doe</span>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-16 lg:p-24">
        <div className="max-w-4xl mx-auto">
          
          {/* Active Orders Tab */}
          {activeTab === "active" && (
            <div className="animate-in fade-in duration-700">
              <header className="mb-16">
                <p className="text-xs text-stone-400 font-bold tracking-[0.3em] uppercase mb-4">In Progress</p>
                <h1 className="text-4xl md:text-5xl font-serif">Items We Are Making</h1>
                <div className="w-12 h-px bg-stone-300 mt-8"></div>
              </header>

              <div className="space-y-12">
                {MOCK_ACTIVE_ORDERS.map((order, idx) => (
                  <div key={idx} className="bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-stone-100 flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-stone-200 pb-8 md:pb-0 md:pr-12">
                      <span className="text-xs text-stone-400 tracking-[0.2em] font-serif italic block mb-4">{order.id}</span>
                      <h2 className="text-2xl font-serif text-stone-900 mb-2">{order.title}</h2>
                      <p className="text-sm text-stone-500">{order.fabric}</p>
                      <p className="text-xs font-bold text-stone-400 mt-6 tracking-[0.1em] uppercase">Ordered {order.date}</p>
                    </div>

                    <div className="md:w-2/3 flex flex-col justify-center">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-900 mb-6">
                        Status: <span className="text-stone-500 font-normal">{order.status}</span>
                      </p>
                      
                      {/* Simple Progress Bar */}
                      <div className="relative flex justify-between items-center max-w-md">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-stone-200"></div>
                        {[1, 2, 3, 4].map((step) => (
                          <div 
                            key={step} 
                            className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all ${
                              order.step >= step ? "bg-stone-900 border-stone-900" : "bg-white border-stone-300"
                            }`}
                          ></div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-start mt-4 max-w-md text-[10px] sm:text-xs font-bold text-stone-400 tracking-[0.1em] sm:tracking-[0.2em] uppercase">
                        <span>Started</span>
                        <span>Sewing</span>
                        <span>Fitting</span>
                        <span>Ready</span>
                      </div>

                      {order.step === 3 && (
                        <div className="mt-8">
                          <button className="px-6 py-4 bg-stone-900 text-[#FBFBF9] text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors">
                            Book Fitting Time
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Orders / Order Record Tab */}
          {activeTab === "history" && (
            <div className="animate-in fade-in duration-700">
              <header className="mb-16">
                <p className="text-xs text-stone-400 font-bold tracking-[0.3em] uppercase mb-4">Your Record</p>
                <h1 className="text-4xl md:text-5xl font-serif">Past Orders</h1>
                <div className="w-12 h-px bg-stone-300 mt-8"></div>
              </header>

              <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-stone-100">
                {MOCK_PAST_ORDERS.map((order, i) => (
                  <div key={i} className="p-8 md:p-10 border-b border-stone-100 last:border-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-stone-400 tracking-[0.2em] font-serif italic block mb-2">{order.id}</span>
                      <h3 className="text-xl font-serif text-stone-900">{order.title}</h3>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto mt-4 sm:mt-0">
                      <span className="text-sm text-stone-500">{order.date}</span>
                      <span className="text-lg font-serif text-stone-900 sm:mt-2">{order.price}</span>
                    </div>
                  </div>
                ))}
                <div className="p-8 bg-stone-50 text-center border-t border-stone-200">
                  <p className="text-sm text-stone-500">Showing all finished items on your record.</p>
                </div>
              </div>
            </div>
          )}

          {/* Sizes Tab */}
          {activeTab === "sizes" && (
            <div className="animate-in fade-in duration-700">
              <header className="mb-16">
                <p className="text-xs text-stone-400 font-bold tracking-[0.3em] uppercase mb-4">Body Measurements</p>
                <h1 className="text-4xl md:text-5xl font-serif">Your Sizes</h1>
                <div className="w-12 h-px bg-stone-300 mt-8"></div>
              </header>

              <div className="bg-white p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-stone-100">
                <div className="flex justify-between items-end border-b border-stone-200 pb-6 mb-12">
                  <span className="text-sm text-stone-500">Last time we measured you</span>
                  <span className="text-xs font-serif italic text-stone-400">October 2023</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-16">
                  {MOCK_MEASUREMENTS.map((m, i) => (
                    <div key={i} className="flex justify-between items-baseline border-b border-stone-100 pb-2 group">
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-[0.2em]">{m.label}</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-serif text-stone-900">{m.value}</span>
                        <span className="text-xs text-stone-400 italic">{m.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-12 border-t border-stone-100 text-center">
                  <p className="text-sm text-stone-500 mb-6 max-w-md mx-auto">
                    If your body weight has changed recently, please ask us to measure you again before your next order.
                  </p>
                  <button className="px-8 py-4 border border-stone-900 text-stone-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-900 hover:text-[#FBFBF9] transition-colors">
                    Ask For New Measurement
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-stone-200 flex z-50">
        <button
          onClick={() => setActiveTab("active")}
          className={`flex-1 py-4 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors border-r border-stone-200 ${
            activeTab === "active" ? "text-stone-900 bg-stone-50" : "text-stone-400"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`flex-1 py-4 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors border-r border-stone-200 ${
            activeTab === "history" ? "text-stone-900 bg-stone-50" : "text-stone-400"
          }`}
        >
          Record
        </button>
        <button
          onClick={() => setActiveTab("sizes")}
          className={`flex-1 py-4 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors ${
            activeTab === "sizes" ? "text-stone-900 bg-stone-50" : "text-stone-400"
          }`}
        >
          Sizes
        </button>
      </nav>
    </div>
  );
}