import { useState, useEffect } from "react";

const Calculator = () => {
  const [amount, setAmount] = useState(10000);
  const [fromCurrency, setFromCurrency] = useState("NGN");
  const [toCurrency, setToCurrency] = useState("GBP");
  
  // Mock rates relative to USD for logic
  const rates = {
    USD: 1,
    GBP: 0.79,
    EUR: 0.92,
    NGN: 1500,
    CAD: 1.36,
    AUD: 1.52,
  };

  const [results, setResults] = useState({
    bankTotal: 0,
    gspsTotal: 0,
    savings: 0,
    gspsRate: 0,
    bankRate: 0,
  });

  useEffect(() => {
    // Basic logic: Convert 'from' to 'to'
    const baseRate = rates[toCurrency] / rates[fromCurrency];
    
    // GSPS: 0.5% fee hidden in rate
    const currentGspsRate = baseRate * 0.995; 
    const currentGspsTotal = amount * currentGspsRate;

    // Bank: 4% fee hidden in rate + $50 fixed fee (converted to 'to' currency)
    const currentBankRate = baseRate * 0.96;
    const bankFixFee = 50 * rates[toCurrency];
    const currentBankTotal = (amount * currentBankRate) - bankFixFee;

    // Savings is the difference in what the RECIPIPIENT gets for the same 'from' amount
    // OR, better: How much 'from' currency you need to send to get 'X' amount.
    // Let's use: How much you get for your input amount.
    
    setResults({
      gspsTotal: currentGspsTotal.toFixed(2),
      bankTotal: currentBankTotal.toFixed(2),
      savings: (currentGspsTotal - currentBankTotal).toFixed(2),
      gspsRate: currentGspsRate.toFixed(4),
      bankRate: currentBankRate.toFixed(4),
    });
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed py-20 px-4"
      style={{ backgroundImage: "url('/images/calculator-bg.png')" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gsps-blue mb-6">
            Calculate Your <span className="text-gsps-green">Savings</span>
          </h1>
          <p className="text-xl text-gsps-blue/70 max-w-2xl mx-auto">
            See exactly how much more reaches your university when you choose GSPS over traditional banks.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: Input Form */}
          <div className="lg:col-span-5 bg-white/80 backdrop-blur-xl p-8 rounded-[40px] shadow-2xl border border-white/50">
            <h2 className="text-2xl font-bold text-gsps-blue mb-8">Currency Converter</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gsps-blue/60 ml-1">You Send</label>
                <div className="flex gap-2">
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="flex-1 px-5 py-4 rounded-2xl bg-gsps-bg-light border-2 border-transparent focus:border-gsps-green/30 focus:outline-none transition-all text-xl font-bold text-gsps-blue"
                  />
                  <select 
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-32 px-4 py-4 rounded-2xl bg-gsps-blue text-white font-bold focus:outline-none cursor-pointer"
                  >
                    {Object.keys(rates).map(curr => <option key={curr} value={curr}>{curr}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex justify-center -my-3">
                <div className="bg-gsps-green text-white p-3 rounded-full shadow-lg z-10">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gsps-blue/60 ml-1">Recipient Gets</label>
                <div className="flex gap-2">
                  <div className="flex-1 px-5 py-4 rounded-2xl bg-gsps-bg-light border-2 border-transparent text-xl font-bold text-gsps-blue">
                    {results.gspsTotal}
                  </div>
                  <select 
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="w-32 px-4 py-4 rounded-2xl bg-gsps-blue text-white font-bold focus:outline-none cursor-pointer"
                  >
                    {Object.keys(rates).map(curr => <option key={curr} value={curr}>{curr}</option>)}
                  </select>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 italic text-sm text-gsps-blue/50">
                *Exchange rates are updated every 5 minutes.
              </div>
            </div>
          </div>

          {/* Right: Results & Comparison */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-gsps-green rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold opacity-80 uppercase tracking-widest mb-2">Total Savings</h3>
                  <div className="text-5xl md:text-7xl font-black mb-2 animate-pulse">
                    {toCurrency} {results.savings}
                  </div>
                  <p className="text-xl font-medium opacity-90">more reaches your university with GSPS</p>
                </div>
                <button className="bg-white text-gsps-green px-10 py-5 rounded-2xl font-black text-lg hover:bg-opacity-90 transition-all active:scale-95 shadow-2xl whitespace-nowrap">
                  PAY NOW
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/60 backdrop-blur-md p-8 rounded-[40px] border border-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gsps-green"></div>
                <h4 className="font-bold text-gsps-blue mb-4 flex items-center">
                   <img src="/logo2.png" alt="GSPS" className="h-4 mr-2" />
                   GSPS Results
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gsps-blue/60">Exchange Rate</span>
                    <span className="font-bold">1 {fromCurrency} = {results.gspsRate} {toCurrency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gsps-blue/60">Service Fee</span>
                    <span className="font-bold text-gsps-green">NO FEES</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                    <span className="text-gsps-blue font-bold">Total Delivered</span>
                    <span className="text-3xl font-black text-gsps-green">{results.gspsTotal}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md p-8 rounded-[40px] border border-white shadow-xl relative grayscale opacity-80">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gray-400"></div>
                <h4 className="font-bold text-gsps-blue mb-4">Traditional Bank</h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gsps-blue/60">Exchange Rate</span>
                    <span className="font-bold">1 {fromCurrency} = {results.bankRate} {toCurrency}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gsps-blue/60">Intermediary Fee</span>
                    <span className="font-bold">$50.00</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                    <span className="text-gsps-blue font-bold">Total Delivered</span>
                    <span className="text-3xl font-black text-gray-500">{results.bankTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { title: "No Hidden Margins", text: "Banks hide 3-5% in the rate. We use the mid-market rate.", icon: "💎" },
            { title: "Direct to University", text: "We partner with schools for instant, confirmed payments.", icon: "🏛️" },
            { title: "Student Support", text: "24/7 assistance tailored for international students.", icon: "🤝" }
          ].map((feature, i) => (
            <div key={i} className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-sm text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h5 className="font-bold text-gsps-blue mb-2">{feature.title}</h5>
              <p className="text-sm text-gsps-blue/60">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
