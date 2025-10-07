export interface Service {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  color: string;
}

export const services: Service[] = [
  {
    slug: "musculoskeletal-physiotherapy",
    title: "Musculoskeletal Physiotherapy",
    description:
      "Expert, hands-on physiotherapy targeting the root cause of your pain. We specialize in spinal, joint, and limb injuries to promote long-term relief and restore function.",
    imageUrl:
      "https://cdn.statically.io/img/thephysiocrew.com.au/wp-content/uploads/2023/09/IMG_1681.jpg?quality=100&f=auto",
    color: "#3B82F6", // A nice shade of blue
  },
  {
    slug: "sports-physiotherapy-injury-clinic",
    title: "Sports Physiotherapy and Injury Clinic",
    description:
      "Our experienced sports physios use advanced VALD technology for data-driven recovery. We provide personalized rehabilitation to get you back in the game safer, faster, and stronger.",
    imageUrl:
      "https://cdn.statically.io/img/thephysiocrew.com.au/wp-content/uploads/2024/08/CR5_9628_websize.jpg?quality=100&f=auto",
    color: "#6B7280", // A cool gray
  },
  {
    slug: "clinical-small-group-exercise-classes",
    title: "Clinical Small Group Exercise Classes",
    description:
      "Join our physiotherapist-led small group classes (max 5 people) to build strength and mobility. We offer specialized programs for managing low back pain, osteoporosis, and improving limb function.",
    imageUrl:
      "https://cdn.statically.io/img/thephysiocrew.com.au/wp-content/uploads/2024/08/CR5_9667_websize.jpg?quality=100&f=auto",
    color: "#1D4ED8", // A deeper blue
  },
  {
    slug: "remedial-massage",
    title: "Remedial Massage",
    description:
      "Our expert remedial massage therapist uses deep tissue, cupping, and sports massage techniques to relieve muscle tightness and joint pain, with experience treating professional athletes.",
    imageUrl:
      "https://cdn.statically.io/img/thephysiocrew.com.au/wp-content/uploads/2024/08/CR5_9661_websize-2.jpg?quality=100&f=auto",
    color: "#4B5563", // A darker slate gray
  },
];

