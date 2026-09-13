import { Helmet } from "react-helmet-async";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Talha Sheikh",
  jobTitle: "Fullstack Developer",
  url: "https://sheikhdeveloper6talha.github.io/",
  sameAs: [
    "https://github.com/sheikhdeveloper6talha",
    "https://www.linkedin.com/in/sheikh-talha-9671193a4",
  ],
  email: "mailto:sheikhdeveloper6@gmail.com",
  knowsAbout: [
    "React.js",
    "Node.js",
    "JavaScript",
    "Full-Stack Web Development",
    "REST APIs",
    "Database Architecture",
  ],
};

export default function SEO({
  title = "Muhammad Talha Sheikh | Fullstack Developer Portfolio",
  description = "Muhammad Talha Sheikh is a fullstack developer crafting exceptional web applications with React, Node.js, and modern technologies.",
  url = "https://sheikhdeveloper6talha.github.io/",
  image = "/images/portfolio.png",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
}
