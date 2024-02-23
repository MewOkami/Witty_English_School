import image from "../../assets/cadanaVermelho.png";
import flag from "../../assets/flag.png";
import confianca from "../../assets/confianca.png";
import livros from "../../assets/livros.png";
import falar from "../../assets/falar.png";
import ideia from "../../assets/ideia.png";
import avatar from "../../assets/avatar.png";
import { DashBoardMainStyle } from "./style";
import Aos from "aos";
import "animate.css";
import { TypographyTexts } from "../../styles/Typograph";

export const DashBoardMain = () => {
  Aos.init();
  return (
    <DashBoardMainStyle id="home">
      <main className="DashBoardMainStyle__main">
        <section className="DashBoardMainStyle__main--section1">
          <div className="DashBoardMainStyle__main--section1Div1">
            <div className="DashBoardMainStyle__main--section1Div2">
              <h1 className="DashBoardMainStyle__main--section1Div2Blue">
                Witty
              </h1>
              <h2>means ...</h2>
            </div>
            <h3>* Quick</h3>
            <h3>* Inventive</h3>
            <h3>* Funny</h3>
            <div className="DashBoardMainStyle__main--section1Div3">
              <h3>That could be YOU</h3>
              <h3 className="DashBoardMainStyle__main--section1Div3blue">
                in English!!!
              </h3>
            </div>
          </div>
          <div class="animate__animated animate__pulse">
            <img
              className="DashBoardMainStyle__main--section1Image"
              src={image}
              alt=""
            />
          </div>
        </section>

        <section id="about" className="DashBoardMainStyle__main--section2">
          <div className="DashBoardMainStyle__main--section3divTitle">
            <h2 className="DashBoardMainStyle__main--section2H2">Sobre</h2>
            <h2 className="DashBoardMainStyle__main--section3h3Title">
              Witty English 4 You
            </h2>
          </div>

          <div className="DashBoardMainStyle__main--section2div1">
            <p>
              We will work together to create a learning experience designed for
              you with the goal of building your knowledge, self-esteem and
              confidence.
            </p>
            <p>
              Our learning process is tailored to your experience and what is
              happening in your life NOW!
            </p>

            <div className="DashBoardMainStyle__main--section2div2">
              <div className="DashBoardMainStyle__main--section2div2TextEdit">
                <p>Our focus is on</p>
                <p className="DashBoardMainStyle__main--section2TextEdit">
                  CONVERSATION
                </p>
                <p>and</p>
                <p className="DashBoardMainStyle__main--section2TextEdit">
                  TIPS
                </p>
                <p>for people who are moving to</p>
                <p className="DashBoardMainStyle__main--section2TextEdit">
                  Canada
                </p>
              </div>
              <img
                className="DashBoardMainStyle__main--section2imageFlag"
                src={flag}
                alt=""
              />
            </div>

            <h3 className="DashBoardMainStyle__main--section2textclasses">
              Aulas individuais ou em grupo com até 6 pessoas!
            </h3>
          </div>

          <div className="DashBoardMainStyle__main--section2div3">
            <p>Metodologias</p>
            <div className="DashBoardMainStyle__main--section2div3Images">
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="DashBoardMainStyle__main--section2divImage"
              >
                <img
                  className="DashBoardMainStyle__main--section2Image"
                  src={confianca}
                  alt=""
                />
                <div className="DashBoardMainStyle__main--section2div3subtitles">
                  <p>Autoestima e</p>
                  <p>confiança</p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="DashBoardMainStyle__main--section2divImage"
              >
                <img
                  className="DashBoardMainStyle__main--section2Image"
                  src={livros}
                  alt=""
                />
                <div className="DashBoardMainStyle__main--section2div3subtitles">
                  <p>Aprendizagem</p>
                  <p>Adaptavel</p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="800"
                className="DashBoardMainStyle__main--section2divImage"
              >
                <img
                  className="DashBoardMainStyle__main--section2Image"
                  src={falar}
                  alt=""
                />
                <p className="DashBoardMainStyle__main--section2subtitles">
                  Conversação
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="1100"
                className="DashBoardMainStyle__main--section2divImage"
              >
                <img
                  className="DashBoardMainStyle__main--section2Image"
                  src={ideia}
                  alt=""
                />
                <p className="DashBoardMainStyle__main--section2subtitles">
                  Dicas
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="DashBoardMainStyle__main--section3"
        >
          <div className="DashBoardMainStyle__main--section3divTitle">
            <h2>Sobre</h2>
            <h2 className="DashBoardMainStyle__main--section3h3Title">
              Mariah Degani
            </h2>
          </div>
          <div className="DashBoardMainStyle__main--section3div1">
            <TypographyTexts id="testimony">
              Mariah has extensive experience facilitating connections between
              Brazil (Sao Paulo) and Canada (Toronto and Vancouver), including
              working as a teacher and cultural facilitator. Her natural ability
              to build connections allows Mariah to develop meaningful outcomes
              for her students in an authentic and genuine way.
            </TypographyTexts>
            <p>
              She grew up in Brazil and has moved between Brazil and Canada for
              the past of 20 years.
            </p>
          </div>
        </section>

        <section
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="DashBoardMainStyle__main--section4"
        >
          <h2>Depoimentos</h2>
          <div className="DashBoardMainStyle__main--section4div1container">
            <div className="DashBoardMainStyle__main--section4div1">
              <div className="DashBoardMainStyle__main--section4divPersonal">
                <img
                  className="DashBoardMainStyle__main--section4div1image"
                  src={avatar}
                  alt=""
                />
                <div className="DashBoardMainStyle__main--section4divPersonalinfo">
                  <span>__Leah R</span>
                  <p>Nutricionista</p>
                </div>
              </div>
              <TypographyTexts>
                "Por muito tempo, venho tentando aprender Inglês, quero viajar e
                me comunicar com as pessoas. Com o curso de conversação da Witty
                English 4 You, consegui me soltar, tenho mais confiança na minha
                comunicação em Inglês e as minhas viagens tornaram-se mais
                interessantes, tenho muito a agradecer a Mariah pela sua
                metodologia e positividade"
              </TypographyTexts>
            </div>
            <div className="DashBoardMainStyle__main--section4div1">
              <div className="DashBoardMainStyle__main--section4divPersonal">
                <img
                  className="DashBoardMainStyle__main--section4div1image"
                  src={avatar}
                  alt=""
                />
                <div className="DashBoardMainStyle__main--section4divPersonalinfo">
                  <span>__L.L</span>
                  <p>Development Practitioner</p>
                </div>
              </div>
              <TypographyTexts>
                "I would like to express my gratitude to Mariah for her help in
                developing my language skills. I definitely improved my English
                fluency through her great conversation techniques and the
                friendly environment she creates. I felt relaxed and eager to
                learn English! She really has a passion for teaching and there
                is no doubt you will enjoy learning English with her. I highly
                recommend her"
              </TypographyTexts>
            </div>
          </div>
        </section>

        <section className="DashBoardMainStyle__main--section5">
          <h2 className="DashBoardMainStyle__main--section5H1">
            Entre em contato e agende uma avaliação de 30 minutos gratuitamente!
          </h2>

          <div className="DashBoardMainStyle__main--sectiondiv1">
            <div className="DashBoardMainStyle__main--sectiondiv2">
              <h3>Segunda a Sexta</h3>
              <p>08h - 18h</p>
              <p className="DashBoardMainStyle__main--sectionPInfo">Hibrido</p>
            </div>
            <div className="DashBoardMainStyle__main--sectiondiv2">
              <h3>Sabados</h3>
              <p>10h - 15h</p>
              <p className="DashBoardMainStyle__main--sectionPInfo">
                Online Only
              </p>
            </div>
          </div>
        </section>
      </main>
    </DashBoardMainStyle>
  );
};
