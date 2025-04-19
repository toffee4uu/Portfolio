const config = {
  title: "Solo Ayush",
  description: {
    long: "Explore the portfolio of Ayush, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ayush, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Ayush",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Solo Ayush",
  email: "arise.m4x@gmail.com",
  site: "#",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "#",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
    github: "#",
  },
};
export { config };
