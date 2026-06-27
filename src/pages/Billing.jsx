import React, { useState, useEffect } from "react";
import { INITIAL_PRODUCTS, SHORTCUTS, FILTERS } from "./demoData";
import Sidebar from "../components/Sidebar";

export default function Billing() {
  // --- Local Storage Hooks ---
  const [products] = useState(() => {
    try {
      const saved = localStorage.getItem("kirana_products");
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch (e) {
      return INITIAL_PRODUCTS;
    }
  });

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("kirana_cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Interface Control States
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [discount, setDiscount] = useState(0);
  const [gstRate, setGstRate] = useState(18);
  const [includeGst, setIncludeGst] = useState(true);
  const [paymentMode, setPaymentMode] = useState("Cash");
  const [customerPhone, setCustomerPhone] = useState("");

  useEffect(() => {
    localStorage.setItem("kirana_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("kirana_products", JSON.stringify(products));
  }, [products]);

  // --- Core Methods ---
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = parseFloat((item.quantity + amount).toFixed(2));
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const setExplicitQuantity = (id, quantityValue) => {
    if (quantityValue <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: parseFloat(quantityValue) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  // Computations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const runningDiscount = Number(discount) || 0;
  const taxableAmount = Math.max(0, subtotal - runningDiscount);
  const gstAmount = includeGst ? taxableAmount * (gstRate / 100) : 0;
  const finalTotal = taxableAmount + gstAmount;

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.type.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === 'All' || p.tag === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    /* Changed h-full to h-screen here to enforce explicit window sizing boundaries */
    <div className="flex-1 flex h-screen overflow-hidden bg-[#0b0f12]">
      <Sidebar />
      {/* 1. CENTER STOCK/ITEMS DIRECTORY SHEET */}
      <main className="flex-1 p-5 overflow-y-auto flex flex-col gap-3.5 bg-[#0b0f12]">
        {/* Search Bar Input */}
        <div className="w-full">
          <input
            type="text"
            className="w-full bg-[#12161a] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500"
            placeholder="Search: chi, att, barcode, shortcut..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Quick Shortcuts Buttons Row */}
        <div className="flex gap-2 flex-wrap text-[11px]">
          {SHORTCUTS.map((item, idx) => (
            <button 
              key={idx} 
              className="bg-[#181d22] border border-slate-800/60 hover:bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg transition"
              onClick={() => setSearch(item.split(' ')[0])}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Categorized Filter Ribbons */}
        <div className="flex gap-1.5 border-b border-slate-900 pb-2 text-[11px]">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`px-3.5 py-1.5 rounded-full transition font-semibold border ${
                activeFilter === filter 
                  ? 'bg-teal-500 text-white border-teal-500' 
                  : 'border-slate-800 text-slate-400 hover:border-slate-600'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Catalog Cards Grid Matrix */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-3">
          {filteredProducts.map((product) => {
            const inCart = cart.find((item) => item.id === product.id);
            return (
              <div
                key={product.id}
                className={`bg-[#12161a] border rounded-2xl p-4 flex flex-col justify-between min-h-37.5 transition relative ${
                  inCart ? 'border-teal-500 ring-1 ring-teal-500/30' : 'border-slate-800/80 hover:border-slate-700'
                }`}
                onClick={() => addToCart(product)}
              >
                <div className="flex justify-between items-start gap-1">
                  <div>
                    <h4 className="font-bold text-slate-200 tracking-wide text-xs leading-tight">{product.name}</h4>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{product.type}</span>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    {product.isTop && <span className="bg-[#5c220f] text-[#fcd34d] text-[8px] font-bold px-1.5 py-0.5 rounded-md">Top</span>}
                    <span className="bg-[#1c2126] text-slate-400 text-[9px] px-1.5 py-0.5 rounded-md font-medium">{product.tag}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-teal-500 font-bold text-base">Rs {product.price}</span>
                    <span className="text-[#10b981] text-[10px] font-semibold">{product.stock}</span>
                  </div>
                    <span className="text-[10px] text-slate-500 font-mono">/{product.unit}</span>
                </div>

                {product.hasPreset && (
                  <div className="w-full mt-2.5 flex gap-1 z-10" onClick={(e) => e.stopPropagation()}>
                    <button 
                      className="flex-1 bg-[#104a43] hover:bg-[#125c53] text-[#ccfbf1] text-[9px] py-1 rounded-md font-bold transition"
                      onClick={() => { addToCart(product); setExplicitQuantity(product.id, 0.25); }}
                    >
                      250g
                    </button>
                    <button 
                      className="flex-1 bg-[#104a43] hover:bg-[#125c53] text-[#ccfbf1] text-[9px] py-1 rounded-md font-bold transition"
                      onClick={() => { addToCart(product); setExplicitQuantity(product.id, 0.5); }}
                    >
                      500g
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* 2. RIGHT CHECKOUT / INVOICE RECEIPT DRAWER */}
      {/* Changed class config to h-screen here to securely clear out the bottom whitespace error */}
      <section className="w-95 shrink-0 bg-[#12161a] border-l border-slate-900 p-4 flex flex-col justify-between h-screen z-10">
        <div>
          <div className="flex justify-between items-center pb-3 border-b border-slate-900 mb-3.5">
            <div className="text-xs font-bold text-slate-200 flex items-center gap-2">
              <span>🛒 Bill</span> 
              <span className="bg-teal-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{cart.length}</span>
            </div>
            <input
              type="text"
              className="bg-[#181d22] border border-slate-800 rounded-lg px-2.5 py-1 text-[11px] text-white placeholder-slate-600 w-36 text-right focus:outline-none focus:border-teal-500"
              placeholder="Customer optional"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
            />
          </div>

          {/* Selected In-Cart Items Stream Wrapper */}
          <div className="overflow-y-auto max-h-[calc(100vh-450px)] flex flex-col gap-2 pr-0.5">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-slate-600">
                <div className="text-3xl opacity-20 mb-2">📦</div>
                <p className="text-[11px] font-medium opacity-80 tracking-wide">Product tap karein</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="bg-[#181d22] border border-slate-800/80 rounded-xl p-3 flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-bold text-slate-200">
                    <span>{item.name} <span className="text-slate-500 font-normal text-[10px]">({item.type})</span></span>
                    <span className="text-teal-500 font-mono">Rs {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <div className="flex items-center gap-1">
                      <span className="text-slate-300 font-mono font-bold">{item.quantity}</span>
                      <span>{item.unit} × Rs {item.price}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button 
                        className="bg-[#242b32] hover:bg-slate-700 text-white font-bold px-2 py-0.5 rounded" 
                        onClick={() => updateQuantity(item.id, item.tag === 'Khula' ? -0.1 : -1)}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        step="0.01"
                        className="w-11 bg-[#0b0f12] text-center text-white border border-slate-800 rounded text-[10px] py-0.5 font-mono focus:outline-none"
                        value={item.quantity}
                        onChange={(e) => setExplicitQuantity(item.id, parseFloat(e.target.value) || 0)}
                      />
                      <button 
                        className="bg-[#242b32] hover:bg-slate-700 text-white font-bold px-2 py-0.5 rounded" 
                        onClick={() => updateQuantity(item.id, item.tag === 'Khula' ? 0.1 : 1)}
                      >
                        +
                      </button>
                      <button className="text-red-500/80 hover:text-red-400 font-medium ml-1 text-xs" onClick={() => removeFromCart(item.id)}>🗑️</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Bottom Summary Ledger Block */}
        <div className="border-t border-slate-900 pt-3 mt-auto">
          <div className="flex justify-between items-center text-[10px] text-slate-500 mb-2 font-semibold">
            <span>Billing Options</span>
            <span>▼ Hide</span>
          </div>
          
          <div className="flex flex-col gap-2.5 text-xs border-b border-slate-900 pb-3 mb-3">
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>Subtotal</span>
              <span className="font-mono text-slate-200">Rs {subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center text-[11px]">
              <span className="text-slate-400">Discount</span>
              <input
                type="number"
                className="bg-[#181d22] border border-slate-800 rounded-md w-20 text-right px-2 py-0.5 text-white font-mono focus:outline-none focus:border-teal-500"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center text-[11px]">
              <label className="flex items-center gap-1.5 text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-teal-500 rounded"
                  checked={includeGst}
                  onChange={(e) => setIncludeGst(e.target.checked)}
                />
                GST
              </label>
              <select
                className="bg-[#181d22] border border-slate-800 rounded-md text-white px-1 py-0.5 text-xs focus:outline-none"
                value={gstRate}
                onChange={(e) => setGstRate(Number(e.target.value))}
                disabled={!includeGst}
              >
                {[5, 12, 18, 28].map(rate => <option key={rate} value={rate}>{rate}%</option>)}
              </select>
            </div>

            {includeGst && (
              <div className="flex justify-between text-slate-500 pl-5 text-[10px]">
                <span>GST Amount ({gstRate}%)</span>
                <span className="font-mono">Rs {gstAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between items-center text-[11px] mt-0.5">
              <span className="text-slate-400">Payment Mode</span>
              <select 
                className="bg-[#181d22] border border-slate-800 rounded-md text-white px-1 py-0.5 text-right focus:outline-none text-xs"
                value={paymentMode} 
                onChange={(e) => setPaymentMode(e.target.value)}
              >
                <option value="Cash">Cash</option>
                <option value="Online">UPI / Online</option>
                <option value="Udhaar">Udhaar (Khata)</option>
              </select>
            </div>

            <input
              type="text"
              className="w-full bg-[#181d22] border border-slate-800 rounded-lg p-2 text-xs text-white placeholder-slate-600 mt-1 focus:outline-none focus:border-teal-500"
              placeholder="+91 WhatsApp (Optional)"
            />
          </div>

          {/* Total Actions Wrapper */}
          <div className="pb-4">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xs font-bold text-slate-300">Total</span>
              <span className="text-teal-500 text-lg font-black font-mono">Rs {finalTotal.toFixed(2)}</span>
            </div>
            
            <button 
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition duration-150 active:scale-[0.99]"
              onClick={() => alert(`Collected Checkout Total: Rs ${Math.round(finalTotal)}`)}
            >
              Confirm Bill - Rs {Math.round(finalTotal)}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}