// demoData.js
export const INITIAL_PRODUCTS = [
  { id: 1, name: "Parle G", type: "Carton", price: 1250, unit: "carton", tag: "Wholesale", stock: "1 carton", isTop: false },
  { id: 2, name: "Parle G", type: "Packet", price: 7, unit: "packet", tag: "Fixed", stock: "300 packet", isTop: true },
  { id: 3, name: "Chini", type: "Khula", price: 48, unit: "kg", tag: "Khula", stock: "150 kg", isTop: true, hasPreset: true },
  { id: 4, name: "Maggi Noodles", type: "Packet", price: 15, unit: "packet", tag: "Fixed", stock: "70 packet", isTop: true },
  { id: 5, name: "Atta", type: "5kg Packet", price: 235, unit: "packet", tag: "Variant", stock: "20 packet", isTop: true },
  { id: 6, name: "Fortune Mustard Oil", type: "1 Litre Bottle", price: 160, unit: "bottle", tag: "Variant", stock: "60 bottle", isTop: true },
  { id: 7, name: "Basmati Chawal", type: "Khula", price: 65, unit: "kg", tag: "Khula", stock: "250 kg", isTop: true, hasPreset: true },
  { id: 8, name: "Chini", type: "5kg Packet", price: 250, unit: "packet", tag: "Variant", stock: "30 packet", isTop: true }
];

export const SHORTCUTS = ["Parle G Packet", "Chini Khula", "Maggi Noodles Packet", "Atta 5kg Packet", "Fortune Mustard Oil 1 Litre"];
export const FILTERS = ["All", "Khula", "Fixed", "Variant", "Bulk", "Low", "In Stock"];