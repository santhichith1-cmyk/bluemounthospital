// Patient reviews copied word for word from the hospital's Google listing.
// Do not edit the text. To add or swap a review, copy it exactly from Google.
export type Review = {
  /** First name and initial only. */
  name: string;
  text: string;
};

export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/vAiLtyi2LYWG5di89";

export const reviews: Review[] = [
  {
    name: "Vrinda R.",
    text: "I came here for my lower back pain. I was recommended this hospital and mainly Dr. Anil by my relative. The best thing is they find the root cause of the issue. They did scan and we identified where the issue is. Dr.anil has given posture correction procedure and medicine appropriately to fix the issue. This is my third session where I’m being tracked on my every session to check my condition and how my body is getting better. I would highly suggest Bluemount hospital to recover from your illness",
  },
  {
    name: "Rahul Raj K.",
    text: "I am very happy with the treatments and the hospitality i have got, been going through the pain for my shoulder for almost 8 years and Dr Anil here at bluemount identified my issue was on neck. Feeling a great relief after my first session. Highly recommended.",
  },
  {
    name: "Raghaphani D.",
    text: "This hospital has integrated treatment which treated my backpain. I got healing in 14 days of treatment in integrated way like Kerala Panchakarma, Sidda, Acupuncture and Chiropractic",
  },
];
