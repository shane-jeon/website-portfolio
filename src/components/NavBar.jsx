import selfie from "../assets/selfie.png";

export default function NavBar() {
  const navBarHyperlinks = [
    "about",
    "experience",
    "education",
    "skills",
    "interests",
    "awards",
  ];

  return (
    <div
      id="navBar-wrapper"
      className="flex h-screen w-3/12 flex-col items-center justify-center bg-calmGreen">
      {/* <h3>NAVBAR</h3> */}
      <img src={selfie} className="mb-10 max-h-full max-w-full" />
      <div id="navBar-hyperlinks">
        {navBarHyperlinks.map((hyperlink) => (
          <p id="hyperlinks" className="text-2xl">
            <a href={`#${hyperlink}`}>{hyperlink.toUpperCase()}</a>
          </p>
        ))}
      </div>
    </div>
  );
}
