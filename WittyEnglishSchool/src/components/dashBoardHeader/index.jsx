import { Link } from "react-scroll";
import { Header } from "./style";
import { TypographySubtitles, TypographyTitles } from "../../styles/Typograph";
import { useNavigate } from "react-router-dom";

export const DashBoardHeader = () => {
  const navigate = useNavigate();

  return (
    <Header>
      <div className="Header__container">
        <div className="Header__container--logo">
          <TypographySubtitles className="Header__container--p">
            Witty
          </TypographySubtitles>
          <TypographyTitles>English School</TypographyTitles>
        </div>

        <nav className="Header__container--nav">
          <Link
            className="Header__container--link"
            to="home"
            smooth={true}
            offset={0}
            duration={500}
          >
            Inicio
          </Link>
          <Link
            className="Header__container--link"
            to="about"
            smooth={true}
            offset={0}
            duration={500}
          >
            Sobre
          </Link>
          <Link
            className="Header__container--link"
            to="testimony"
            smooth={true}
            offset={0}
            duration={500}
          >
            Depoimentos
          </Link>
          <Link
            className="Header__container--link"
            to="footer"
            smooth={true}
            offset={0}
            duration={500}
          >
            Rodapé
          </Link>
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="Header__container--contact"
          >
            Contato
          </button>
        </nav>
      </div>
    </Header>
  );
};
