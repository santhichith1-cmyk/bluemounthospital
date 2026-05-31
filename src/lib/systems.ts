import sysAyurveda from "@/assets/sys-ayurveda.jpg";
import sysKeraleya from "@/assets/sys-keraleya.jpg";
import sysSiddha from "@/assets/sys-siddha.jpg";
import sysAcupuncture from "@/assets/sys-acupuncture.jpg";
import sysChiropractic from "@/assets/sys-chiropractic.jpg";
import sysMedicine from "@/assets/sys-medicine.jpg";

export type System = {
  slug: string;
  code: string;
  name: string;
  desc: string;
  img: string;
  tagline: string;
  intro: string;
  treatments: string[];
  conditions: string[];
  approach: string;
};

export const systems: System[] = [
  {
    slug: "ayurveda",
    code: "01 / AYU",
    name: "Ayurveda",
    desc: "Authentic Panchakarma detoxification and rejuvenation protocols, supervised by classically trained vaidyas.",
    img: sysAyurveda,
    tagline: "Classical rejuvenation, clinically supervised.",
    intro:
      "Our Ayurveda department offers authentic Panchakarma — the five-fold detoxification system codified in classical texts — delivered by traditionally trained vaidyas alongside modern physiological monitoring.",
    treatments: [
      "Panchakarma (Vamana, Virechana, Basti, Nasya, Raktamokshana)",
      "Abhyanga & Shirodhara",
      "Kizhi (herbal poultice therapies)",
      "Marma chikitsa",
      "Customised herbal formulations",
    ],
    conditions: [
      "Chronic joint and back pain",
      "Stress, anxiety and insomnia",
      "Skin and digestive disorders",
      "Lifestyle and metabolic imbalance",
    ],
    approach:
      "Every protocol begins with a prakriti (constitution) assessment and is reviewed in tandem with our diagnostics team so traditional therapy is grounded in measurable outcomes.",
  },
  {
    slug: "keraleya-panchakarma",
    code: "02 / PK",
    name: "Keraleya Panchakarma",
    desc: "The five-fold purification and detoxification system from Kerala tradition, delivered under strict medical supervision.",
    img: sysKeraleya,
    tagline: "Purification as precision medicine.",
    intro:
      "Our Keraleya Panchakarma unit specialises in the classical five-fold detoxification system — Vamana, Virechana, Basti, Nasya and Raktamokshana — delivered by traditionally trained therapists under modern clinical monitoring.",
    treatments: [
      "Vamana (therapeutic emesis)",
      "Virechana (therapeutic purgation)",
      "Basti (medicated enema therapy)",
      "Nasya (nasal administration)",
      "Raktamokshana (bloodletting therapy)",
      "Snehana & Swedana (oleation & fomentation)",
    ],
    conditions: [
      "Chronic skin disorders",
      "Digestive and metabolic disorders",
      "Autoimmune conditions",
      "Detoxification and rejuvenation",
      "Lifestyle disease management",
    ],
    approach:
      "Each Panchakarma protocol is preceded by a thorough clinical assessment and coordinated with our modern medicine team to ensure safety and measurable outcomes.",
  },
  {
    slug: "siddha-medicine",
    code: "03 / SIDDHA",
    name: "Siddha Medicine",
    desc: "Time-honoured Tamil therapies integrated with modern metabolic and lifestyle screening.",
    img: sysSiddha,
    tagline: "Tamil healing wisdom, modern clinical rigour.",
    intro:
      "Siddha is one of the oldest medical systems of the Indian subcontinent. Our Siddha physicians combine herbo-mineral formulations and external therapies with modern lab screening for precise, personalised care.",
    treatments: [
      "Varma therapy",
      "Thokkanam (Siddha manipulation)",
      "Herbo-mineral medications",
      "Kayakalpa rejuvenation",
    ],
    conditions: [
      "Arthritis and rheumatic disorders",
      "Liver and metabolic disorders",
      "Skin conditions",
      "Respiratory ailments",
    ],
    approach:
      "Treatment plans are built around the tridosha framework and verified through metabolic panels and lifestyle screening.",
  },
  {
    slug: "acupuncture",
    code: "04 / ACU",
    name: "Acupuncture",
    desc: "Precise meridian-mapped neuromuscular stimulation for chronic pain and neurological recovery.",
    img: sysAcupuncture,
    tagline: "Meridian precision for nervous system recovery.",
    intro:
      "Our acupuncture suite delivers classical TCM and modern medical acupuncture, mapping meridians against neuromuscular anatomy to relieve pain and accelerate recovery.",
    treatments: [
      "Classical body acupuncture",
      "Electro-acupuncture",
      "Auricular acupuncture",
      "Cupping and moxibustion",
      "Dry needling for trigger points",
    ],
    conditions: [
      "Chronic pain (back, neck, knee)",
      "Migraine and tension headaches",
      "Post-stroke recovery",
      "Sciatica and neuropathy",
      "Stress and sleep disorders",
    ],
    approach: "Sessions are integrated with physiotherapy and rehab so neural recovery is reinforced through movement.",
  },
  {
    slug: "chiropractic-care",
    code: "05 / CHIRO",
    name: "Chiropractic Care",
    desc: "Evidence-based spinal alignment therapy for long-term structural and postural health.",
    img: sysChiropractic,
    tagline: "Structural alignment, restored mobility.",
    intro:
      "Our chiropractors combine manual spinal adjustment with imaging-guided assessment to correct alignment, posture and joint mechanics.",
    treatments: [
      "Spinal adjustment and manipulation",
      "Postural correction programs",
      "Soft tissue mobilisation",
      "Joint and extremity adjustments",
    ],
    conditions: [
      "Lower back and neck pain",
      "Postural and desk-job strain",
      "Sports injuries",
      "Disc-related discomfort",
    ],
    approach:
      "Plans pair manual care with physiotherapy-led strengthening so results are sustained, not session-dependent.",
  },
  {
    slug: "modern-clinical-medicine",
    code: "06 / MED",
    name: "Modern Clinical Medicine",
    desc: "Allopathic consultation, chronic disease management and integrative care planning.",
    img: sysMedicine,
    tagline: "Evidence-based care, integratively delivered.",
    intro:
      "Our modern medicine department anchors the hospital — providing diagnostics, consultation and chronic disease management that informs every traditional therapy plan.",
    treatments: [
      "General medicine consultation",
      "Chronic disease management",
      "Preventive health check-ups",
      "Pharmacological management",
      "Integrative care planning",
    ],
    conditions: [
      "Diabetes and hypertension",
      "Cardiac risk management",
      "Thyroid and hormonal disorders",
      "Acute and chronic infections",
    ],
    approach:
      "Modern medicine here is not in opposition to tradition — it provides the diagnostic and safety backbone of every integrative plan.",
  },
];

export const getSystem = (slug: string) => systems.find((s) => s.slug === slug);
