export interface ServiceContent {
  tagline: { en: string; fr: string };
  fullDescription: { en: string; fr: string };
  duration: string;
  priceFrom: string;
  benefits: Array<{ icon: string; title: { en: string; fr: string }; desc: { en: string; fr: string } }>;
  steps: Array<{ step: number; title: { en: string; fr: string }; desc: { en: string; fr: string } }>;
  faq: Array<{ q: { en: string; fr: string }; a: { en: string; fr: string } }>;
  heroImage: string;
  galleryImages: string[];
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  Sparkles: {
    tagline: {
      en: "Radiant skin, tailored to you.",
      fr: "Une peau radieuse, personnalisée pour vous.",
    },
    fullDescription: {
      en: "Our facial treatments go far beyond a standard cleanse. We begin with a thorough skin analysis to understand your unique needs — whether that's hydration, anti-aging, brightening, or acne control. Using medical-grade ingredients and hand-selected techniques, we deliver visible results that last. Every session ends with a personalised home-care plan so your glow never stops.",
      fr: "Nos soins du visage vont bien au-delà d'un simple nettoyage. Nous commençons par une analyse approfondie de votre peau pour comprendre vos besoins uniques — hydratation, anti-âge, éclat ou contrôle de l'acné. En utilisant des ingrédients de qualité médicale et des techniques soigneusement sélectionnées, nous obtenons des résultats visibles et durables.",
    },
    duration: "60 – 90 min",
    priceFrom: "€65",
    benefits: [
      {
        icon: "Droplets",
        title: { en: "Deep Hydration", fr: "Hydratation Profonde" },
        desc: { en: "Replenishes moisture at every skin layer for a plump, dewy finish.", fr: "Réhydrate chaque couche cutanée pour un teint frais et repulpé." },
      },
      {
        icon: "Sun",
        title: { en: "Visible Radiance", fr: "Éclat Visible" },
        desc: { en: "Brightening actives even your tone and boost natural luminosity.", fr: "Les actifs éclaircissants uniformisent le teint et boostent la luminosité naturelle." },
      },
      {
        icon: "Shield",
        title: { en: "Skin Barrier Repair", fr: "Réparation de la Barrière Cutanée" },
        desc: { en: "Strengthens the protective barrier to guard against environmental stressors.", fr: "Renforce la barrière protectrice contre les agressions extérieures." },
      },
      {
        icon: "Sparkles",
        title: { en: "Anti-Aging Action", fr: "Action Anti-Âge" },
        desc: { en: "Stimulates collagen production and reduces the appearance of fine lines.", fr: "Stimule la production de collagène et réduit l'apparence des ridules." },
      },
    ],
    steps: [
      { step: 1, title: { en: "Skin Consultation", fr: "Consultation Peau" }, desc: { en: "We assess your skin type, concerns, and goals to tailor the treatment.", fr: "Nous évaluons votre type de peau, vos préoccupations et vos objectifs." } },
      { step: 2, title: { en: "Double Cleanse", fr: "Double Nettoyage" }, desc: { en: "A thorough cleanse removes makeup, impurities, and excess oil.", fr: "Un nettoyage minutieux élimine le maquillage, les impuretés et l'excès de sébum." } },
      { step: 3, title: { en: "Exfoliation & Extraction", fr: "Exfoliation & Extraction" }, desc: { en: "Gentle exfoliation unclogs pores and preps skin for maximum absorption.", fr: "L'exfoliation douce désobstrue les pores et prépare la peau pour une absorption maximale." } },
      { step: 4, title: { en: "Active Serum & Mask", fr: "Sérum Actif & Masque" }, desc: { en: "Targeted serums and a customised mask address your specific skin concerns.", fr: "Des sérums ciblés et un masque personnalisé traitent vos préoccupations spécifiques." } },
      { step: 5, title: { en: "Massage & Lymphatic Drainage", fr: "Massage & Drainage Lymphatique" }, desc: { en: "Relaxing facial massage boosts circulation and sculpts facial contours.", fr: "Le massage facial relaxant stimule la circulation et sculpte les contours du visage." } },
      { step: 6, title: { en: "SPF & Aftercare", fr: "SPF & Aftercare" }, desc: { en: "We finish with a moisturiser and SPF, plus a personalised home-care routine.", fr: "Nous terminons avec une crème hydratante, un SPF et une routine de soins à domicile personnalisée." } },
    ],
    faq: [
      { q: { en: "How often should I get a facial?", fr: "À quelle fréquence faire un soin du visage ?" }, a: { en: "We recommend every 4–6 weeks to align with your skin's natural renewal cycle.", fr: "Nous recommandons toutes les 4 à 6 semaines pour s'aligner sur le cycle naturel de renouvellement de la peau." } },
      { q: { en: "Is it suitable for sensitive skin?", fr: "Convient-il aux peaux sensibles ?" }, a: { en: "Absolutely. We adapt every product and technique to your sensitivity level.", fr: "Absolument. Nous adaptons chaque produit et technique à votre niveau de sensibilité." } },
      { q: { en: "Will my skin peel after the treatment?", fr: "Ma peau va-t-elle peler après le soin ?" }, a: { en: "Mild flaking is normal for exfoliating facials and typically resolves within 2–3 days.", fr: "Une légère desquamation est normale pour les soins exfoliants et se résorbe généralement en 2 à 3 jours." } },
    ],
    heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    ],
  },

  Zap: {
    tagline: {
      en: "Permanent smoothness. Zero compromise.",
      fr: "Douceur permanente. Sans compromis.",
    },
    fullDescription: {
      en: "Our laser epilation uses the latest diode laser technology to safely and permanently reduce unwanted hair on all skin tones. Unlike waxing or shaving, laser targets the follicle directly — delivering long-lasting results after a series of sessions. Our certified specialists personalise every treatment to your hair colour, thickness, and skin type for maximum effectiveness with minimal discomfort.",
      fr: "Notre épilation laser utilise la dernière technologie laser à diode pour réduire en toute sécurité et de façon permanente les poils indésirables sur tous les types de peau. Contrairement à la cire ou au rasage, le laser cible directement le follicule — offrant des résultats durables après une série de séances.",
    },
    duration: "15 – 60 min",
    priceFrom: "€40",
    benefits: [
      {
        icon: "Zap",
        title: { en: "Permanent Reduction", fr: "Réduction Permanente" },
        desc: { en: "Up to 90% permanent hair reduction after a full course of treatment.", fr: "Jusqu'à 90% de réduction permanente des poils après un traitement complet." },
      },
      {
        icon: "Heart",
        title: { en: "Virtually Painless", fr: "Quasi Indolore" },
        desc: { en: "Our cooling system ensures maximum comfort throughout the session.", fr: "Notre système de refroidissement assure un confort maximal tout au long de la séance." },
      },
      {
        icon: "Clock",
        title: { en: "Fast Sessions", fr: "Séances Rapides" },
        desc: { en: "Small areas like upper lip take under 5 minutes. Full legs under 45 minutes.", fr: "Les petites zones comme la lèvre supérieure prennent moins de 5 minutes. Les jambes complètes moins de 45 minutes." },
      },
      {
        icon: "Shield",
        title: { en: "Safe for All Skin Tones", fr: "Sûr pour Tous les Teints" },
        desc: { en: "Advanced technology calibrated for every skin phototype from I to VI.", fr: "Technologie avancée calibrée pour tous les phototypes de peau, de I à VI." },
      },
    ],
    steps: [
      { step: 1, title: { en: "Consultation & Patch Test", fr: "Consultation & Test de Tolérance" }, desc: { en: "We assess your skin phototype and perform a patch test to ensure safety.", fr: "Nous évaluons votre phototype cutané et effectuons un test de tolérance pour garantir la sécurité." } },
      { step: 2, title: { en: "Area Preparation", fr: "Préparation de la Zone" }, desc: { en: "The area is cleaned and shaved. We apply a cooling gel for comfort.", fr: "La zone est nettoyée et rasée. Nous appliquons un gel de refroidissement pour le confort." } },
      { step: 3, title: { en: "Laser Application", fr: "Application du Laser" }, desc: { en: "The laser handpiece glides over the skin, targeting each follicle precisely.", fr: "La pièce à main laser glisse sur la peau en ciblant chaque follicule avec précision." } },
      { step: 4, title: { en: "Cooling & Soothing", fr: "Refroidissement & Apaisement" }, desc: { en: "Post-treatment, we apply soothing cream and SPF to calm the skin.", fr: "Après le traitement, nous appliquons une crème apaisante et un SPF pour calmer la peau." } },
    ],
    faq: [
      { q: { en: "How many sessions do I need?", fr: "Combien de séances sont nécessaires ?" }, a: { en: "Most clients need 6–8 sessions spaced 4–6 weeks apart for optimal results.", fr: "La plupart des clients ont besoin de 6 à 8 séances espacées de 4 à 6 semaines pour des résultats optimaux." } },
      { q: { en: "Can I have treatment in summer?", fr: "Puis-je faire le traitement en été ?" }, a: { en: "Yes, but you must avoid sun exposure for 2 weeks before and after each session.", fr: "Oui, mais vous devez éviter l'exposition au soleil 2 semaines avant et après chaque séance." } },
      { q: { en: "Does it hurt?", fr: "Est-ce douloureux ?" }, a: { en: "Most clients describe it as a slight warm snap. Our cooling system makes it very comfortable.", fr: "La plupart des clients décrivent une légère claque chaude. Notre système de refroidissement le rend très confortable." } },
    ],
    heroImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    ],
  },

  Eye: {
    tagline: {
      en: "Wake up beautiful. Every single day.",
      fr: "Réveillez-vous belle. Chaque jour.",
    },
    fullDescription: {
      en: "Our eyelash extensions are individually applied to each natural lash using premium silk or mink-effect fibres. Whether you want a subtle natural enhancement or a full dramatic look, our certified lash artists customise every set to your eye shape, lifestyle, and aesthetic. The result: longer, fuller, perfectly shaped lashes that require zero mascara.",
      fr: "Nos extensions de cils sont appliquées individuellement sur chaque cil naturel à l'aide de fibres premium en soie ou à effet vison. Que vous souhaitiez une amélioration naturelle subtile ou un look dramatique, nos artistes certifiées personnalisent chaque pose selon la forme de vos yeux, votre style de vie et votre esthétique.",
    },
    duration: "90 – 150 min",
    priceFrom: "€80",
    benefits: [
      {
        icon: "Eye",
        title: { en: "Zero Mascara Needed", fr: "Zéro Mascara Nécessaire" },
        desc: { en: "Wake up with perfectly defined lashes without any makeup routine.", fr: "Réveillez-vous avec des cils parfaitement définis sans aucune routine maquillage." },
      },
      {
        icon: "Sparkles",
        title: { en: "100% Customised", fr: "100% Personnalisé" },
        desc: { en: "Length, curl, thickness, and style tailored precisely to your features.", fr: "Longueur, courbure, épaisseur et style adaptés précisément à vos traits." },
      },
      {
        icon: "Shield",
        title: { en: "Safe & Hypoallergenic", fr: "Sûr & Hypoallergénique" },
        desc: { en: "Medical-grade adhesive and premium fibres, suitable for sensitive eyes.", fr: "Colle de qualité médicale et fibres premium, adaptées aux yeux sensibles." },
      },
      {
        icon: "Clock",
        title: { en: "Long-Lasting Results", fr: "Résultats Durables" },
        desc: { en: "Lashes last 3–4 weeks with proper aftercare and regular infills.", fr: "Les cils durent 3 à 4 semaines avec des soins appropriés et des retouches régulières." },
      },
    ],
    steps: [
      { step: 1, title: { en: "Lash Consultation", fr: "Consultation Cils" }, desc: { en: "We discuss your desired look, assess your natural lashes, and select the perfect style.", fr: "Nous discutons du look souhaité, évaluons vos cils naturels et sélectionnons le style parfait." } },
      { step: 2, title: { en: "Cleanse & Prep", fr: "Nettoyage & Préparation" }, desc: { en: "Natural lashes are thoroughly cleansed and a protective eye pad is applied.", fr: "Les cils naturels sont soigneusement nettoyés et un patch protecteur est appliqué." } },
      { step: 3, title: { en: "Individual Application", fr: "Application Individuelle" }, desc: { en: "Each extension is meticulously bonded to a single natural lash using precision tweezers.", fr: "Chaque extension est méticuleusement collée sur un seul cil naturel à l'aide de pinces de précision." } },
      { step: 4, title: { en: "Curing & Finishing", fr: "Séchage & Finition" }, desc: { en: "Adhesive is cured, lashes are brushed, and aftercare instructions are provided.", fr: "La colle est séchée, les cils sont brossés et les instructions de soin sont fournies." } },
    ],
    faq: [
      { q: { en: "How long do extensions last?", fr: "Combien de temps durent les extensions ?" }, a: { en: "3–4 weeks with infills every 2–3 weeks to maintain fullness.", fr: "3 à 4 semaines avec des retouches toutes les 2 à 3 semaines pour maintenir le volume." } },
      { q: { en: "Will extensions damage my natural lashes?", fr: "Les extensions abîment-elles mes cils naturels ?" }, a: { en: "Not when applied correctly. Our technique ensures zero tension on natural lashes.", fr: "Pas si elles sont correctement appliquées. Notre technique assure zéro tension sur les cils naturels." } },
      { q: { en: "Can I wear mascara with extensions?", fr: "Puis-je porter du mascara avec les extensions ?" }, a: { en: "We recommend avoiding mascara as it can shorten the lifespan of your extensions.", fr: "Nous recommandons d'éviter le mascara car il peut raccourcir la durée de vie de vos extensions." } },
    ],
    heroImage: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    ],
  },

  Heart: {
    tagline: {
      en: "Your beauty ritual, elevated.",
      fr: "Votre rituel beauté, sublimé.",
    },
    fullDescription: {
      en: "Our curated skincare range features clinic-grade formulations developed alongside leading dermatologists. Each product is chosen to complement your in-studio treatments — extending results and maintaining your skin's health between appointments. From vitamin C serums and retinol creams to gentle cleansers and SPFs, every product in our collection earns its place through proven efficacy.",
      fr: "Notre gamme de soins soigneusement sélectionnée propose des formulations de qualité clinique développées avec des dermatologues de renom. Chaque produit est choisi pour compléter vos soins en studio — prolongeant les résultats et maintenant la santé de votre peau entre les rendez-vous.",
    },
    duration: "Consultation: 30 min",
    priceFrom: "€25",
    benefits: [
      {
        icon: "Heart",
        title: { en: "Clinic-Grade Formulas", fr: "Formules de Qualité Clinique" },
        desc: { en: "Products selected for proven efficacy, not just beautiful packaging.", fr: "Produits sélectionnés pour leur efficacité prouvée, pas seulement pour leur bel emballage." },
      },
      {
        icon: "Sparkles",
        title: { en: "Expert Guidance", fr: "Conseils d'Experts" },
        desc: { en: "We match every product to your specific skin type and concerns.", fr: "Nous adaptons chaque produit à votre type de peau et à vos préoccupations spécifiques." },
      },
      {
        icon: "Shield",
        title: { en: "Dermatologist Approved", fr: "Approuvé par les Dermatologues" },
        desc: { en: "Every product is dermatologically tested and clinically validated.", fr: "Chaque produit est testé dermatologiquement et validé cliniquement." },
      },
      {
        icon: "Sun",
        title: { en: "Maintain Your Glow", fr: "Maintenir votre Éclat" },
        desc: { en: "Continue your treatment results at home between studio visits.", fr: "Prolongez les résultats de votre traitement à domicile entre les visites au studio." },
      },
    ],
    steps: [
      { step: 1, title: { en: "Skin Assessment", fr: "Analyse de la Peau" }, desc: { en: "A detailed consultation to map your skin's current condition and goals.", fr: "Une consultation détaillée pour cartographier l'état actuel et les objectifs de votre peau." } },
      { step: 2, title: { en: "Product Curation", fr: "Sélection de Produits" }, desc: { en: "We select a curated routine from our range specifically tailored to you.", fr: "Nous sélectionnons une routine personnalisée dans notre gamme spécialement adaptée à vous." } },
      { step: 3, title: { en: "Application Tutorial", fr: "Tutoriel d'Application" }, desc: { en: "We show you exactly how and when to use each product for best results.", fr: "Nous vous montrons exactement comment et quand utiliser chaque produit pour de meilleurs résultats." } },
      { step: 4, title: { en: "Follow-Up", fr: "Suivi" }, desc: { en: "Regular check-ins ensure your home routine evolves with your skin's needs.", fr: "Des bilans réguliers s'assurent que votre routine à domicile évolue avec les besoins de votre peau." } },
    ],
    faq: [
      { q: { en: "Can I buy products without a consultation?", fr: "Puis-je acheter des produits sans consultation ?" }, a: { en: "Yes, products are available in-studio and online. A consultation just helps you choose correctly.", fr: "Oui, les produits sont disponibles en studio et en ligne. Une consultation vous aide simplement à choisir correctement." } },
      { q: { en: "Are products suitable for all skin types?", fr: "Les produits conviennent-ils à tous les types de peau ?" }, a: { en: "Our range covers all skin types. We always recommend personalised guidance for best results.", fr: "Notre gamme couvre tous les types de peau. Nous recommandons toujours un accompagnement personnalisé pour de meilleurs résultats." } },
    ],
    heroImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
    ],
  },
};

export function toServiceSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
