import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative px-4"
      style={{ backgroundImage: "url('/images/auth-bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gsps-blue/40 backdrop-blur-[2px]"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <Link to="/">
            <img src="/logo2.png" alt="GSPS Logo" className="h-12 mx-auto mb-4" />
          </Link>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-blue-100/80">Sign in to manage your student payments</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/90 ml-1">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white/60">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="student@university.edu"
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gsps-green/50 focus:border-gsps-green/50 transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-sm font-medium text-white/90">Password</label>
              <Link to="#" className="text-xs text-gsps-green hover:underline">Forgot password?</Link>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white/60">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gsps-green/50 focus:border-gsps-green/50 transition-all"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gsps-green text-white font-bold py-3.5 rounded-xl shadow-lg shadow-gsps-green/20 hover:bg-gsps-green/90 transition-all active:scale-[0.98] mt-4"
          >
            Sign In
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center mt-8 text-white/70">
          New to GSPS?{" "}
          <Link to="/signup" className="text-gsps-green font-bold hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
