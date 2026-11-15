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
  /** Longer plain-language explanation shown under the intro. */
  overview: string[];
  treatments: { name: string; desc: string }[];
  conditions: string[];
  approach: string;
  /** Ordered steps of a typical visit or course. */
  whatToExpect: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  /** Who should tell the doctor something before starting. */
  caution: string;
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
    overview: [
      "Ayurveda is a traditional Indian system of medicine that looks at digestion, sleep, daily routine and constitution together, instead of treating one symptom on its own. Care usually combines external therapies, internal medicines, and diet and lifestyle guidance.",
      "At Bluemount, an Ayurvedic physician decides which therapies suit you after a consultation. Not every patient needs a full Panchakarma course; many are better served by a short series of external therapies and a tailored routine.",
    ],
    treatments: [
      {
        name: "Panchakarma (Vamana, Virechana, Basti, Nasya, Raktamokshana)",
        desc: "The five classical cleansing procedures. Your physician selects which, if any, are appropriate; they are not given as a fixed package.",
      },
      {
        name: "Abhyanga & Shirodhara",
        desc: "Abhyanga is a warm medicated oil massage. In Shirodhara, a steady stream of warm oil is poured over the forehead. Both are commonly chosen for stress and poor sleep.",
      },
      {
        name: "Kizhi (herbal poultice therapies)",
        desc: "Warm cloth bundles filled with herbs, powders or medicated rice are pressed and massaged over the body, typically for stiff or painful joints and muscles.",
      },
      {
        name: "Marma chikitsa",
        desc: "Gentle, targeted pressure on specific points of the body described in Ayurvedic texts, used alongside other therapies for pain and stiffness.",
      },
      {
        name: "Customised herbal formulations",
        desc: "Internal medicines prescribed for your condition and constitution, reviewed at follow-up visits.",
      },
    ],
    conditions: [
      "Chronic joint and back pain",
      "Stress, anxiety and insomnia",
      "Skin and digestive disorders",
      "Lifestyle and metabolic imbalance",
    ],
    approach:
      "Every protocol begins with a prakriti (constitution) assessment and is reviewed in tandem with our diagnostics team so traditional therapy is grounded in measurable outcomes.",
    whatToExpect: [
      {
        title: "Consultation",
        desc: "An Ayurvedic physician takes your history, examines you and assesses your prakriti (constitution). Bring any recent reports and a list of current medicines.",
      },
      {
        title: "Your plan",
        desc: "You receive a plan covering therapies, medicines, diet and routine, with how many sessions are advised and why.",
      },
      {
        title: "Therapy sessions",
        desc: "Sessions are given by trained therapists under the physician's direction. Some therapies need you to follow a simple diet on those days.",
      },
      {
        title: "Review",
        desc: "Progress is reviewed and the plan adjusted. You leave with guidance on diet and routine to maintain the benefit.",
      },
    ],
    faqs: [
      {
        q: "How much time should I plan for treatment?",
        a: "It depends on the therapy. Many external therapies are done as short visits, while a full Panchakarma course takes much longer. Your physician will explain what is involved at the consultation.",
      },
      {
        q: "Can I continue my regular medicines?",
        a: "Do not stop any prescribed medicine on your own. Tell the physician everything you take, including supplements, so your treatment can be planned around it.",
      },
      {
        q: "How soon will I see results?",
        a: "This varies with the condition and how long you have had it. Long-standing problems usually need a course of treatment and follow-up, not a single session.",
      },
    ],
    caution:
      "Tell the physician if you are pregnant, have heart, kidney or liver disease, diabetes, or have had recent surgery. Some therapies are not suitable in these situations.",
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
    overview: [
      'Panchakarma means "five actions": a set of cleansing procedures described in classical Ayurvedic texts. The Kerala tradition is known for its preparatory oil and heat therapies, which are given before and around the main procedures.',
      "Panchakarma is a medical course, not a spa package. It has three stages: preparation, the main procedure, and a recovery period with a graded diet. Which procedures you receive, and for how long, is decided by the physician after assessment.",
    ],
    treatments: [
      {
        name: "Vamana (therapeutic emesis)",
        desc: "Medically induced vomiting, carried out under supervision after several days of preparation. Used only for selected patients and conditions.",
      },
      {
        name: "Virechana (therapeutic purgation)",
        desc: "A supervised course of purgative medicine given after preparation, followed by a graded return to normal diet.",
      },
      {
        name: "Basti (medicated enema therapy)",
        desc: "Medicated oils or herbal decoctions given as an enema, usually as a series over several days.",
      },
      {
        name: "Nasya (nasal administration)",
        desc: "Medicated oil or powder given through the nostrils after a gentle face and neck massage and steam.",
      },
      {
        name: "Raktamokshana (bloodletting therapy)",
        desc: "Removal of a small, controlled amount of blood using classical methods. Performed only when a physician judges it appropriate.",
      },
      {
        name: "Snehana & Swedana (oleation & fomentation)",
        desc: "Oil application or intake followed by steam or heat. These prepare the body before the main procedures and are also given on their own.",
      },
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
    whatToExpect: [
      {
        title: "Assessment",
        desc: "A physician reviews your history, examines you and checks whether Panchakarma is suitable. Tests may be advised first.",
      },
      {
        title: "Preparation (Purvakarma)",
        desc: "Several days of oleation and heat therapy, with dietary instructions to follow.",
      },
      {
        title: "Main procedure (Pradhana karma)",
        desc: "The selected procedure is carried out under supervision, with your condition monitored during and after.",
      },
      {
        title: "Recovery (Paschat karma)",
        desc: "A graded diet and rest period that is part of the treatment. Skipping it reduces the benefit, so plan time for it.",
      },
    ],
    faqs: [
      {
        q: "How long does a Panchakarma course take?",
        a: "It varies by procedure and patient. Preparation and recovery are part of the course, so it takes longer than the main procedure alone. The physician will give you a schedule after assessment.",
      },
      {
        q: "Is Panchakarma safe for everyone?",
        a: "No. It is not advised in pregnancy, in very young or frail patients, or in some heart, kidney and bleeding conditions. This is why a medical assessment comes first.",
      },
      {
        q: "What is the difference between this and the Ayurveda department?",
        a: "The Ayurveda page covers consultations, medicines and individual therapies. This page covers full Panchakarma courses, which follow a fixed sequence of preparation, main procedure and recovery.",
      },
    ],
    caution:
      "Panchakarma procedures are not suitable during pregnancy, menstruation, fever or acute illness, or for patients with certain heart, kidney or bleeding disorders. Always share your full medical history.",
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
    overview: [
      "Siddha is a traditional medical system from Tamil Nadu, and one of the oldest in India. Like Ayurveda, it works with three humours (vatham, pitham, kapham), and it is known for its herbal and herbo-mineral medicines and its external therapies.",
      "At Bluemount, Siddha care starts with a consultation and, where useful, laboratory tests. Treatment may combine internal medicines with external therapies and advice on diet.",
    ],
    treatments: [
      {
        name: "Varma therapy",
        desc: "Controlled pressure applied to specific points of the body described in Siddha texts, most often used for pain, stiffness and nerve-related complaints.",
      },
      {
        name: "Thokkanam (Siddha manipulation)",
        desc: "A system of therapeutic massage and manipulation, with or without medicated oil, for muscle and joint problems.",
      },
      {
        name: "Herbo-mineral medications",
        desc: "Internal medicines prepared from herbs and processed minerals, prescribed by a qualified Siddha physician and reviewed at follow-up.",
      },
      {
        name: "Kayakalpa rejuvenation",
        desc: "A programme of selected medicines, diet and routine aimed at general strength and wellbeing.",
      },
    ],
    conditions: [
      "Arthritis and rheumatic disorders",
      "Liver and metabolic disorders",
      "Skin conditions",
      "Respiratory ailments",
    ],
    approach:
      "Treatment plans are built around the tridosha framework and verified through metabolic panels and lifestyle screening.",
    whatToExpect: [
      {
        title: "Consultation",
        desc: "A Siddha physician takes your history and examines you. Bring recent reports and a list of current medicines.",
      },
      {
        title: "Tests if needed",
        desc: "Blood tests or other screening may be advised before starting, especially for long-term medicines.",
      },
      {
        title: "Treatment",
        desc: "You receive medicines, external therapy sessions, or both, with clear instructions on dose and diet.",
      },
      {
        title: "Follow-up",
        desc: "Your response is reviewed and the prescription adjusted. Long-term medicines are monitored.",
      },
    ],
    faqs: [
      {
        q: "Are Siddha medicines safe to take with my other medicines?",
        a: "Tell the physician about every medicine and supplement you take. Siddha medicines should be taken only as prescribed, at the stated dose and duration.",
      },
      {
        q: "How is Siddha different from Ayurveda?",
        a: "They share many ideas but developed separately, with different texts, medicines and techniques. Varma therapy and many herbo-mineral preparations are specific to Siddha.",
      },
      {
        q: "Will I need tests?",
        a: "Sometimes. Tests help the physician choose treatment and check that long-term medicines are suiting you.",
      },
    ],
    caution:
      "Tell the physician if you are pregnant or breastfeeding, or have kidney or liver disease. Do not buy or continue herbo-mineral medicines without a prescription and follow-up.",
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
    overview: [
      "Acupuncture uses very fine needles placed at specific points on the body. It comes from traditional Chinese medicine and is now also practised as medical acupuncture, where points are chosen with reference to nerves and muscles.",
      "It is most commonly used for pain, including back, neck and knee pain and headaches. At Bluemount it is offered on its own or alongside physiotherapy and rehabilitation.",
    ],
    treatments: [
      {
        name: "Classical body acupuncture",
        desc: "Fine needles are placed at selected points and left in place for a short time while you rest.",
      },
      {
        name: "Electro-acupuncture",
        desc: "A mild electrical current is passed between needles to give continuous, adjustable stimulation.",
      },
      {
        name: "Auricular acupuncture",
        desc: "Small needles or seeds are placed on points of the outer ear.",
      },
      {
        name: "Cupping and moxibustion",
        desc: "Cupping uses suction cups on the skin; moxibustion warms points with a burning herb held near the skin. Cupping can leave round marks that fade over days.",
      },
      {
        name: "Dry needling for trigger points",
        desc: "Needles are inserted into tight, tender bands of muscle to release them. Brief soreness afterwards is common.",
      },
    ],
    conditions: [
      "Chronic pain (back, neck, knee)",
      "Migraine and tension headaches",
      "Post-stroke recovery",
      "Sciatica and neuropathy",
      "Stress and sleep disorders",
    ],
    approach:
      "Sessions are integrated with physiotherapy and rehab so neural recovery is reinforced through movement.",
    whatToExpect: [
      {
        title: "Assessment",
        desc: "The practitioner asks about your problem and health, and examines the area. Tell them about any medicines, especially blood thinners.",
      },
      {
        title: "The session",
        desc: "You lie comfortably while needles are placed. Most people feel a brief prick, then heaviness or tingling.",
      },
      {
        title: "After the session",
        desc: "You can usually return to normal activity. Mild soreness or tiredness can occur and settles on its own.",
      },
      {
        title: "Course and review",
        desc: "Acupuncture is normally given as a series of sessions. Progress is reviewed and the plan adjusted.",
      },
    ],
    faqs: [
      {
        q: "Does acupuncture hurt?",
        a: "The needles are much finer than injection needles. Most people feel a small prick and then a dull ache or tingling, which is expected.",
      },
      {
        q: "How many sessions will I need?",
        a: "It depends on the condition and how long you have had it. Your practitioner will suggest a number of sessions and review how you respond.",
      },
      {
        q: "Are there side effects?",
        a: "Minor bruising, soreness or light-headedness can happen. Serious problems are rare when it is done by a trained practitioner.",
      },
    ],
    caution:
      "Tell the practitioner if you are pregnant, take blood-thinning medicine, have a bleeding disorder, or have a pacemaker (electro-acupuncture is avoided).",
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
    overview: [
      "Chiropractic care focuses on the spine, joints and the muscles around them. Treatment is mostly hands-on, combined with exercise and posture advice.",
      "It is most often sought for lower back pain, neck pain and posture-related strain. Our chiropractors assess you first and work with the physiotherapy team, so hands-on care is backed by strengthening.",
    ],
    treatments: [
      {
        name: "Spinal adjustment and manipulation",
        desc: "A quick, controlled movement applied to a joint of the spine by hand. You may hear a click, which is normal.",
      },
      {
        name: "Postural correction programs",
        desc: "Assessment of how you sit, stand and work, followed by exercises and practical changes to reduce strain.",
      },
      {
        name: "Soft tissue mobilisation",
        desc: "Hands-on techniques for tight muscles and connective tissue around the affected area.",
      },
      {
        name: "Joint and extremity adjustments",
        desc: "Manual treatment for joints outside the spine, such as the shoulder, hip, knee or ankle.",
      },
    ],
    conditions: [
      "Lower back and neck pain",
      "Postural and desk-job strain",
      "Sports injuries",
      "Disc-related discomfort",
    ],
    approach:
      "Plans pair manual care with physiotherapy-led strengthening so results are sustained, not session-dependent.",
    whatToExpect: [
      {
        title: "Assessment",
        desc: "History, posture and movement examination. Imaging is advised only if it is needed, and existing X-rays or MRI reports are reviewed.",
      },
      {
        title: "Explanation",
        desc: "The chiropractor explains what they found, what treatment they suggest and any risks, before starting.",
      },
      {
        title: "Treatment",
        desc: "Hands-on care, usually with exercises to do at home. Mild soreness for a day or so afterwards is common.",
      },
      {
        title: "Strengthening and review",
        desc: "Physiotherapy-led exercises are added so that improvement lasts, and progress is reviewed.",
      },
    ],
    faqs: [
      {
        q: "Is spinal adjustment safe?",
        a: "For most people with back or neck pain it is safe when done by a trained practitioner after assessment. It is not suitable for everyone, which is why you are examined first.",
      },
      {
        q: "Will I need an X-ray or MRI?",
        a: "Not always. Imaging is advised only if your history or examination suggests it is needed. Bring any reports you already have.",
      },
      {
        q: "How many visits will I need?",
        a: "This depends on the problem. You will be given an expected plan at the first visit, with exercises to reduce how often you need to come.",
      },
    ],
    caution:
      "Tell the chiropractor if you have osteoporosis, a recent fracture or surgery, cancer, numbness or weakness in the limbs, or loss of bladder or bowel control. The last needs urgent medical attention.",
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
    overview: [
      "This is the hospital's general medicine department. Our physicians diagnose and treat everyday and long-term illnesses using standard, evidence-based medicine.",
      "The department also supports every other system at Bluemount. Patients starting traditional therapies can be assessed here first, and their progress can be followed with examinations and tests.",
    ],
    treatments: [
      {
        name: "General medicine consultation",
        desc: "Assessment and treatment of common illnesses, with tests and referral where needed.",
      },
      {
        name: "Chronic disease management",
        desc: "Regular follow-up for long-term conditions such as diabetes, high blood pressure and thyroid disorders, including medicine review.",
      },
      {
        name: "Preventive health check-ups",
        desc: "Examination and screening tests chosen for your age and risk, with results explained by a physician.",
      },
      {
        name: "Pharmacological management",
        desc: "Prescription and review of medicines, including checking for interactions when you take more than one.",
      },
      {
        name: "Integrative care planning",
        desc: "A physician coordinates with the traditional medicine teams so that therapies and medicines work together safely.",
      },
    ],
    conditions: [
      "Diabetes and hypertension",
      "Cardiac risk management",
      "Thyroid and hormonal disorders",
      "Acute and chronic infections",
    ],
    approach:
      "Modern medicine here is not in opposition to tradition — it provides the diagnostic and safety backbone of every integrative plan.",
    whatToExpect: [
      {
        title: "Consultation",
        desc: "The physician takes your history and examines you. Bring previous reports, prescriptions and a list of medicines.",
      },
      { title: "Tests", desc: "Any tests needed are explained, including why they are advised." },
      {
        title: "Treatment plan",
        desc: "You receive a diagnosis where possible, a prescription or advice, and clear instructions on what to watch for.",
      },
      {
        title: "Follow-up",
        desc: "Long-term conditions are reviewed at regular intervals, and your plan is shared with other departments treating you.",
      },
    ],
    faqs: [
      {
        q: "Can I take traditional and modern treatment together?",
        a: "Often yes, but it should be planned. Tell each doctor what the other has prescribed, so medicines and therapies can be coordinated.",
      },
      {
        q: "Do I need an appointment?",
        a: "Booking ahead is recommended so you are seen without a long wait. Call or message us on WhatsApp to book.",
      },
      {
        q: "What should I bring to my first visit?",
        a: "Bring previous reports, prescriptions and a list of every medicine and supplement you take, including any traditional medicines.",
      },
    ],
    caution:
      "For chest pain, breathing difficulty, signs of stroke, severe injury or any other emergency, seek emergency care immediately instead of booking an appointment.",
  },
];

export const getSystem = (slug: string) => systems.find((s) => s.slug === slug);
