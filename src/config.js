const CONFIG = {
  // --- BRAND INFO ---
  siteName: "SP COLLECTION",
  logo: "https://raw.githubusercontent.com/desuraj/eimg/main/lkmb/logo.png",
  // tagline: "Pure Spices, Pure Taste!",

  // --- CONTACT INFO ---
  whatsappNumber: "917352635447", // no '+'
  email: "spcollectionrbj@gmail.com",
  address: "Rajbiraj, Saptari Nepal",

  // --- SOCIAL LINKS ---
  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#"
  },
  // --- BANNER  ---
  banner: {
    // title: "Fresh & Pure Spices",
    // subtitle: "Delivered to your doorstep",
    buttonText: "Shop Now",
    backgroundImage: "https://raw.githubusercontent.com/desuraj/eimg/main/lkmb/banner.png" // place your image in public/images
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
    code: "NNR"
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
Price: ₹${product.price}
Quantity: ${quantity}
Total Price: ₹${totalPrice}
${details}`;
  }
};

export default CONFIG;
