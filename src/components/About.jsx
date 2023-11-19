export default function About() {
  const name = "shane jeon";
  const github = "https://github.com/shane-jeon";
  return (
    <div
      id="about-wrapper"
      className="flex h-screen flex-col items-center justify-center text-xl">
      <div id="heading-wrapper">
        <h1 id="name">{name.toUpperCase()}</h1>
        <p>shanejeon@gmail.com</p>
      </div>
      <div id="about-content">
        <p>
          I'm a passionate Frontend Developer specializing in React, Next.js,
          Tailwind CSS, JavaScript, and TypeScript. Trained as a full-stack
          developer with proficiency in Python and Flask, I blend technical
          expertise with a keen eye for design. My commitment to staying at the
          forefront of industry trends ensures I craft seamless and visually
          stunning user interfaces.
        </p>
      </div>
      <div id="social-media-wrapper">
        <button className="bg-black">
          <a href={github}></a>
        </button>
      </div>
    </div>
  );
}
