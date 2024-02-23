import styled from "styled-components";

export const DashBoardMainStyle = styled.div`
  background-color: var(--color-grey-white);
  color: var(--color-grey-black);

  .DashBoardMainStyle__main {
    display: flex;
    flex-direction: column;
  }

  .DashBoardMainStyle__main--section1 {
    background-color: var(--color-white-Disable);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5vw;

    margin-top: 126px;
  }

  .DashBoardMainStyle__main--section1Div1 {
    display: flex;
    flex-direction: column;

    gap: 20px;
  }

  .DashBoardMainStyle__main--section1Div3 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin-top: 30px;

    gap: 5px;
  }

  .DashBoardMainStyle__main--section1Image {
    width: 50vw;
  }

  .DashBoardMainStyle__main--section1Div3blue {
    color: var(--color-primary);
  }

  .DashBoardMainStyle__main--section1Div2 {
    margin-bottom: 30px;
  }

  .DashBoardMainStyle__main--section1Div2Blue {
    color: var(--color-primary);
  }

  .DashBoardMainStyle__main--section2 {
    display: flex;
    flex-direction: column;

    margin-top: 60px;

    gap: 35px;

    padding: 20px 5vw;
  }

  .DashBoardMainStyle__main--section2div1 {
    display: flex;
    flex-direction: column;

    gap: 10px;
  }

  .DashBoardMainStyle__main--section2div2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    gap: 10px;
  }

  .DashBoardMainStyle__main--section2div2TextEdit {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 5px;
  }

  .DashBoardMainStyle__main--section2TextEdit {
    color: var(--color-primary-Hover);
  }

  .DashBoardMainStyle__main--section2textclasses {
    margin-top: 40px;

    color: var(--color-primary-Hover);
  }

  .DashBoardMainStyle__main--section2imageFlag {
    width: 20px;
  }

  .DashBoardMainStyle__main--section2div3 {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 45px;

    gap: 50px;
  }

  .DashBoardMainStyle__main--section2div3Images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    gap: 5vw;
  }

  .DashBoardMainStyle__main--section2divImage {
    background-color: var(--color-primary);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: space-between;

    border-radius: 8px;

    width: 150px;
    height: 130px;
  }

  .DashBoardMainStyle__main--section2div3subtitles {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 15px;
  }

  .DashBoardMainStyle__main--section2subtitles {
    margin-bottom: 25px;
  }

  .DashBoardMainStyle__main--section2Image {
    width: 50px;
    margin-top: 15px;
  }

  .DashBoardMainStyle__main--section3 {
    background-color: var(--color-white-Disable);

    display: flex;
    flex-direction: column;

    margin-top: 100px;

    gap: 35px;

    padding: 20px 5vw;
  }

  .DashBoardMainStyle__main--section3div1 {
    display: flex;
    flex-direction: column;

    gap: 20px;
  }

  .DashBoardMainStyle__main--section3divTitle {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin-bottom: 30px;

    gap: 7px;
  }

  .DashBoardMainStyle__main--section3h3Title {
    color: var(--color-primary);
  }

  .DashBoardMainStyle__main--section4 {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 70px;

    padding: 20px 5vw;
  }

  .DashBoardMainStyle__main--section4div1image {
    width: 50px;
  }

  .DashBoardMainStyle__main--section4div1container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    margin-top: 70px;

    width: 100%;

    gap: 60px;
  }

  .DashBoardMainStyle__main--section4div1 {
    display: flex;
    flex-direction: column;

    border: solid 1px var(--color-primary);
    border-left: none;
    border-right: none;
    border-radius: 8px;

    padding: 15px;

    width: 300px;
  }

  .DashBoardMainStyle__main--section4divPersonal {
    display: flex;
    flex-direction: row;

    margin-bottom: 30px;
  }

  .DashBoardMainStyle__main--section4divPersonalinfo {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    margin-left: 15px;
  }

  .DashBoardMainStyle__main--section5 {
    background-color: var(--color-white-Disable);

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    gap: 30px;

    margin-top: 70px;
    margin-bottom: 90px;
    padding: 20px 5vw;
  }

  .DashBoardMainStyle__main--section5H1 {
    color: var(--color-primary);
  }

  .DashBoardMainStyle__main--sectiondiv1 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    margin-top: 30px;
    width: 100%;

    gap: 50px;
  }

  .DashBoardMainStyle__main--sectiondiv2 {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
  }

  .DashBoardMainStyle__main--sectionPInfo {
    color: var(--color-primary);
  }

  @media (min-width: 768px) {
    .DashBoardMainStyle__main--section1 {
      background-color: var(--color-white-Disable);
      padding: 40px 12vw;
    }

    .DashBoardMainStyle__main--section1Image {
      width: 400px;
    }

    .DashBoardMainStyle__main--section2 {
      padding: 40px 12vw;
    }

    .DashBoardMainStyle__main--section2div3 {
      margin-top: 70px;
    }

    .DashBoardMainStyle__main--section3 {
      background-color: var(--color-white-Disable);
      padding: 60px 12vw;
    }

    .DashBoardMainStyle__main--section4 {
      padding: 40px 12vw;
    }

    .DashBoardMainStyle__main--section5 {
      padding: 40px 12vw;
    }
  }
`;
