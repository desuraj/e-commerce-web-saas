const CONFIG = {
  // --- BRAND INFO ---
  siteName: "LAADO KITCHENS MASALA",
  logo: "/images/logo.png",
  // tagline: "Pure Spices, Pure Taste!",

  // --- CONTACT INFO ---
  whatsappNumber: "919509071647", // no '+'
  email: "support@example.com",
  address: "123 Spice Street, Patna, Bihar, India",

  // --- SOCIAL LINKS ---
  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#"
  },
  // --- BANNER  ---
  banner: {
    title: "Fresh & Pure Spices",
    subtitle: "Delivered to your doorstep",
    buttonText: "Shop Now",
    backgroundImage: "https://raw.githubusercontent.com/desuraj/eimg/main/lkmb/SN1001.jpg" // place your image in public/images
  },

  // --- THEME SETTINGS ---
  theme: {
    primaryColor: "#E76F51",
    secondaryColor: "#2A9D8F",
    accentColor: "#F4A261",
    textColor: "#333333",
    backgroundColor: "#ffffffff"
  },

  // --- CURRENCY SETTINGS ---
  currency: {
    symbol: "₹",
    code: "INR"
  },

  // --- FEATURE TOGGLES ---
  features: {
    enableCart: false,
    enableBuyNow: true,
    enableProductSearch: true,
    enableMultiCurrency: false
  },

  // --- WHATSAPP BUY NOW TEMPLATE ---
  buyNowMessageTemplate: (product, quantity) => {
    const totalPrice = product.price * quantity;
    const details = Object.entries(product.details || {})
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    return `Hello, I want to buy:
${product.name}
Price: ₹${product.price}/kg
Quantity: ${quantity}
Total Price: ₹${totalPrice}
${details}`;
  }
};

export default CONFIG;
