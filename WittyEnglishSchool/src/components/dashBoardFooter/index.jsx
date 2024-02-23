import { useNavigate } from "react-router-dom";
import {
  TypographySmallTexts,
  TypographySubtitles,
  TypographyTexts,
  TypographyTitles,
} from "../../styles/Typograph";
import { DashBoardFooterStyle } from "./style";

export const DashBoardFooter = () => {
  const navigate = useNavigate();

  return (
    <DashBoardFooterStyle id="footer">
      <div className="DashBoardFooterStyle__divContainer">
        <div className="DashBoardFooterStyle__divContainer--divInfo">
          <TypographyTexts>localização perto de metrô</TypographyTexts>
          <TypographySmallTexts>Metrô Trianon-masp</TypographySmallTexts>
          <p className="DashBoardFooterStyle__divContainer--phone">
            (11)5118-3780
          </p>
        </div>

        <div className="DashBoardFooterStyle__divContainer--divLogo">
          <div className="DashBoardFooterStyle__divContainer--divLogoInfo">
            <TypographyTitles className="DashBoardFooterStyle__divContainer--textEdit">
              Witty English 4 You
            </TypographyTitles>
          </div>
        </div>

        <div className="DashBoardFooterStyle__divContainer--divEmail">
          <div className="DashBoardFooterStyle__divContainer--divContactUs">
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="DashBoardFooterStyle__divContainer--buttonContactUs"
            >
              Contate-nos
            </button>
          </div>
          <TypographySmallTexts>
            contato@wittyenglish4you.com.br
          </TypographySmallTexts>
          <div className="DashBoardFooterStyle__divContainer--divCopyright">
            <TypographySmallTexts>copyright © 2024</TypographySmallTexts>
          </div>
        </div>
      </div>
    </DashBoardFooterStyle>
  );
};
