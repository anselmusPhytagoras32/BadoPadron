import { useState } from "react";
import { Link, useNavigate } from "react-router";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API login
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] flex flex-col font-sans">
      <header className="py-8 px-6 lg:px-12 flex justify-between items-center border-b border-stone-200">
        <Link to="/" className="text-xs font-bold text-stone-500 hover:text-stone-900 uppercase tracking-[0.2em] transition-colors">
          &larr; Back to Home
        </Link>
        <span className="font-serif text-2xl text-stone-900">
          BadoPadron.
        </span>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-12 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-stone-100">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif text-stone-900 mb-4">Welcome Back</h1>
            <div className="w-12 h-px bg-stone-300 mx-auto mb-4"></div>
            <p className="text-sm text-stone-500">
              Log in to see your sizes, past orders, and clothes we are currently making for you.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-10">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-bold text-stone-500 uppercase tracking-[0.1em]">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border-0 border-b border-stone-300 bg-transparent py-3 text-stone-900 placeholder:text-stone-300 focus:ring-0 focus:border-stone-900 transition-colors text-lg"
                placeholder="name@example.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label htmlFor="password" className="block text-xs font-bold text-stone-500 uppercase tracking-[0.1em]">
                  Password
                </label>
                <a href="#" className="text-xs text-stone-400 hover:text-stone-900 italic font-serif">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full border-0 border-b border-stone-300 bg-transparent py-3 text-stone-900 placeholder:text-stone-300 focus:ring-0 focus:border-stone-900 transition-colors text-lg tracking-widest"
                placeholder="••••••••"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-stone-900 text-[#FBFBF9] text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors disabled:opacity-50"
              >
                {isLoading ? "Loading..." : "Log In Now"}
              </button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-stone-100 text-center">
            <p className="text-xs text-stone-500 font-light">
              Need a new suit? Please email us at: <br/>
              <span className="font-serif text-stone-900 text-lg italic block mt-2">hello@bpadron.com</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}