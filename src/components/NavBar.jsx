import { useState } from "react";
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

  const [isNavBarOpen, setNavBarOpen] = useState(false);

  const toggleNavBar = () => {
    setNavBarOpen((prev) => !prev);
  };

  const closeNavBar = () => {
    setNavBarOpen(false);
  };

  const showMenuNav =
    "absolute left-0 top-0 z-10 block flex h-screen w-full flex-col items-center justify-evenly";

  return (
    <nav
      id="navBar-wrapper"
      className="flex w-screen flex-col items-center justify-center bg-calmGreen lg:w-3/12">
      {/* <h3>NAVBAR</h3> */}
      <div id="profile-pic" className="lg:block">
        <img
          src={selfie}
          className="mb-10 hidden h-72 max-h-full w-72 max-w-full rounded-full border-12 border-darkSeaGreen lg:block lg:border-16"
        />
      </div>
      <ul
        id="navBar-menu"
        className={`lg:block ${isNavBarOpen ? showMenuNav : "hidden"}`}>
        {navBarHyperlinks.map((hyperlink) => (
          <li
            id="hyperlinks"
            key={hyperlink}
            className="text-center text-2xl font-semibold text-spanishGreen hover:text-white lg:py-3">
            <a href={`#${hyperlink}`} onClick={closeNavBar}>
              {hyperlink.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
      <section id="navBar-mobile-menu" className="py-8 lg:hidden">
        <div className="HAMBURGER-ICON space-y-2" onClick={toggleNavBar}>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
        <div className={isNavBarOpen ? showMenuNav : "hidden"}>
          <div
            className="CROSS-ICON absolute right-0 top-0 px-8 py-8"
            onClick={() => setNavBarOpen(false)}>
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </section>
    </nav>
  );
}

// export default function NavBar() {
//   const navBarHyperlinks = [
//     "about",
//     "experience",
//     "education",
//     "skills",
//     "interests",
//     "awards",
//   ];

//   const [isNavBarOpen, setNavBarOpen] = useState(false);

//   const toggleNavBar = () => {
//     setNavBarOpen((prev) => !prev);
//   };

//   const closeNavBar = () => {
//     setNavBarOpen(false);
//   };

//   return (
//     <nav
//       id="navBar-wrapper"
//       className="flex w-screen items-center justify-between bg-calmGreen p-4 lg:w-3/12">
//       <div id="profile-pic" className="lg:block">
//         <img
//           src={selfie}
//           className="mb-10 hidden h-72 max-h-full w-72 max-w-full rounded-full border-12 border-darkSeaGreen lg:block lg:border-16"
//         />
//       </div>
//       <section
//         id="navBar-mobile-menu"
//         className="flex items-center py-8 lg:hidden">
//         <ul
//           id="navBar-menu"
//           className={`lg:block ${isNavBarOpen ? "hidden" : "hidden lg:block"}`}>
//           {navBarHyperlinks.map((hyperlink) => (
//             <li
//               key={hyperlink}
//               className="text-center text-2xl font-semibold text-spanishGreen hover:text-white lg:py-3">
//               <a href={`#${hyperlink}`} onClick={closeNavBar}>
//                 {hyperlink.toUpperCase()}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div
//           className="HAMBURGER-ICON ml-auto space-y-2"
//           onClick={toggleNavBar}>
//           <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//           <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//           <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//         </div>
//       </section>
//     </nav>
//   );
// }
