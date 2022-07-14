import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  const handleSocial = (social) => {
    if (social === "github") {
      window.open("https://github.com/devCleidison");
    } else if (social === "linkedin") {
      window.open("https://www.linkedin.com/in/cleidison-silva/");
    }
  };

  return (
    <footer>
      <p>Desenvolvido por Cleidison Silva</p>

      <div className="social-links">
        <button onClick={() => handleSocial("github")}>
          <BsGithub />
        </button>
        <button onClick={() => handleSocial("linkedin")}>
          <BsLinkedin />
        </button>
      </div>
    </footer>
  );
};
