export const config = {
  // ─── Brand ────────────────────────────────────────────────────────────────
  name: "Saffron & Sage",
  tagline: "Modern Indian Fine Dining",
  description:
    "Where ancient spice routes meet contemporary culinary artistry. Experience the soul of India, reimagined.",

  // ─── Contact ──────────────────────────────────────────────────────────────
  phone: "+1 (555) 234-5678",
  whatsapp: "15552345678", // digits only, no + or spaces
  email: "hello@saffronandsage.com",
  address: "142 Spice Quarter, Downtown Arts District, New York, NY 10012",
  googleMapsUrl:
    "https://maps.google.com/?q=142+Spice+Quarter+New+York+NY+10012",

  // ─── Hours ────────────────────────────────────────────────────────────────
  hours: [
    { days: "Monday – Thursday", time: "5:00 PM – 10:30 PM" },
    { days: "Friday – Saturday", time: "5:00 PM – 11:30 PM" },
    { days: "Sunday", time: "4:00 PM – 9:30 PM" },
  ],

  // ─── Social ───────────────────────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/saffronandsage",
    facebook: "https://facebook.com/saffronandsage",
    twitter: "https://twitter.com/saffronandsage",
  },

  // ─── Colors ───────────────────────────────────────────────────────────────
  colors: {
    gold: "#C9A84C",
    goldLight: "#E4C76B",
    goldDark: "#A07730",
    black: "#0A0A0A",
    charcoal: "#1A1A1A",
    ivory: "#FAF7F0",
    ivoryDark: "#F0EBE0",
  },

  // ─── About ────────────────────────────────────────────────────────────────
  about: {
    headline: "A Journey Through the Subcontinent",
    body: [
      "Saffron & Sage was born from a lifelong obsession with the layered, fragrant, breathtakingly nuanced cuisines of India. Our Executive Chef, Priya Nair, spent two decades studying regional cooking from Kashmir to Kerala before distilling those traditions into a tasting menu unlike any other.",
      "Every dish on our menu tells a story — of ancient spice routes, of grandmothers in sun-drenched kitchens, of royal feasts and street-corner revelations. We source ingredients directly from small farms in Rajasthan, Kerala, and Maharashtra, ensuring that what reaches your plate is both authentic and exceptional.",
    ],
    stats: [
      { label: "Years of Excellence", value: "12" },
      { label: "Regional Cuisines", value: "28" },
      { label: "Michelin Stars", value: "2" },
      { label: "Awards Won", value: "34" },
    ],
    chefName: "Chef Priya Nair",
    chefTitle: "Executive Chef & Co-Founder",
    chefImage:
      "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800",
    restaurantImage:
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  // ─── Menu ─────────────────────────────────────────────────────────────────
  menu: {
    categories: [
      {
        id: "amuse",
        label: "Amuse-Bouche",
        items: [
          {
            name: "Pani Puri Shots",
            description: "Tamarind water, mint oil, crispy semolina sphere",
            price: "$14",
            badge: "Chef's Pick",
          },
          {
            name: "Dahi Papdi Crostini",
            description: "Whipped yogurt, pomegranate, sev, chaat masala dust",
            price: "$16",
          },
          {
            name: "Tandoori Mushroom Bruschetta",
            description: "Smoked portobello, green chutney labneh, micro herbs",
            price: "$18",
            badge: "Vegetarian",
          },
        ],
      },
      {
        id: "small",
        label: "Small Plates",
        items: [
          {
            name: "Butter Chicken Croquettes",
            description:
              "Slow-cooked murgh makhani filling, crispy panko, pickled onion",
            price: "$22",
            badge: "Signature",
          },
          {
            name: "Lamb Seekh Kebab",
            description:
              "Spiced minced lamb, coal smoke finish, mint yogurt, raita dust",
            price: "$26",
          },
          {
            name: "Scallop Malai",
            description:
              "Pan-seared diver scallop, coconut cream, curry leaf oil",
            price: "$32",
          },
          {
            name: "Dal Makhani Velouté",
            description:
              "Black lentil bisque, cream swirl, crispy rice, truffle",
            price: "$19",
            badge: "Vegetarian",
          },
        ],
      },
      {
        id: "mains",
        label: "Main Plates",
        items: [
          {
            name: "Raan-e-Darbar",
            description:
              "72-hour braised leg of lamb, dum-style spices, saffron jus, bone marrow naan",
            price: "$58",
            badge: "Signature",
          },
          {
            name: "Coastal Prawn Moilee",
            description:
              "Tiger prawns, turmeric-coconut broth, steamed appam, curry leaf oil",
            price: "$46",
          },
          {
            name: "Black Cod Amritsari",
            description:
              "Ajwain-spiced black cod, mustard saag, lemon pickle butter",
            price: "$52",
          },
          {
            name: "Paneer Shahi Korma",
            description:
              "House-pressed paneer, Mughlai cream sauce, saffron, rose petal",
            price: "$38",
            badge: "Vegetarian",
          },
        ],
      },
      {
        id: "desserts",
        label: "Desserts",
        items: [
          {
            name: "Gulab Jamun Fondant",
            description: "Warm milk-solid cake, rose water lava, pistachio ice cream",
            price: "$18",
            badge: "Signature",
          },
          {
            name: "Mango Shrikhand Tart",
            description:
              "Alphonso mango curd, strained yogurt, cardamom pastry shell",
            price: "$16",
          },
          {
            name: "Kulfi Flight",
            description:
              "Three artisan kulfis: saffron-pistachio, rose-lychee, black sesame",
            price: "$20",
          },
        ],
      },
    ],
  },

  // ─── Gallery ──────────────────────────────────────────────────────────────
  gallery: [
    {
      src: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Saffron lamb dish plating",
      span: "col-span-2 row-span-2",
    },
    {
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Artisan bread basket",
      span: "",
    },
    {
      src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Spice-dusted dessert plate",
      span: "",
    },
    {
      src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Elegant dining room interior",
      span: "",
    },
    {
      src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Candlelit dining table",
      span: "",
    },
    {
      src: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Chef's preparation",
      span: "",
    },
    {
      src: "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Cocktail presentation",
      span: "",
    },
  ],

  // ─── Testimonials ─────────────────────────────────────────────────────────
  testimonials: [
    {
      name: "Alexandra Chen",
      title: "Food Critic, The Metropolitan",
      rating: 5,
      text: "Saffron & Sage redefines what Indian fine dining can be. The Raan-e-Darbar alone is worth crossing continents for. An evening here isn't a meal — it is an event.",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "James Whitmore",
      title: "Michelin Guide Inspector",
      rating: 5,
      text: "The precision and restraint on display in every dish demonstrate a kitchen operating at the very top of its craft. Chef Nair's vision is singular and utterly compelling.",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Priya Krishnamurthy",
      title: "Travel & Lifestyle Editor",
      rating: 5,
      text: "I've dined across South Asia and at every celebrated Indian restaurant in the West. Nothing has moved me quite like the memory of the Dal Makhani Velouté here. Transcendent.",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Marcus Rivera",
      title: "Celebrity Chef & TV Host",
      rating: 5,
      text: "The service is impeccable, the wine pairings inspired, and the food is genuinely one-of-a-kind. Saffron & Sage has set a new benchmark for modern Indian cuisine.",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
  ],

  // ─── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    backgroundImage:
      "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1920",
    headline: "Where Spice Meets",
    headlineAccent: "Sophistication",
    subheadline:
      "A Michelin-starred journey through the flavours of modern India",
  },
};
