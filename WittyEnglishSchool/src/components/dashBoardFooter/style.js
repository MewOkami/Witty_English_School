import styled from "styled-components";

export const DashBoardFooterStyle = styled.footer`
  background-color: var(--color-white-Disable);
  color: var(--color-grey-black);

  .DashBoardFooterStyle__divContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    gap: 50px;

    padding: 20px 5vw;
  }

  .DashBoardFooterStyle__divContainer--divInfo {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
  }

  .DashBoardFooterStyle__divContainer--phone {
    color: var(--color-primary);
  }

  .DashBoardFooterStyle__divContainer--divEmail {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
  }

  .DashBoardFooterStyle__divContainer--buttonContactUs {
    background-color: var(--color-primary);
    color: var(--color-grey-white);

    border: none;
    border-radius: 4px;

    width: 100%;
    padding: 5px;
  }

  .DashBoardFooterStyle__divContainer--buttonContactUs:hover {
    background-color: var(--color-primary-Hover);
  }

  .DashBoardFooterStyle__divContainer--divCopyright {
    display: flex;
    flex-direction: row-reverse;
  }

  .DashBoardFooterStyle__divContainer--divLogo {
    display: flex;
    align-items: center;
  }

  .DashBoardFooterStyle__divContainer--textEdit {
    color: var(--color-primary);
  }

  .DashBoardFooterStyle__divContainer--divContactUs {
    width: 100%;
  }

  @media (min-width: 768px) {
    .DashBoardFooterStyle__divContainer {
      justify-content: space-between;
      flex-wrap: nowrap;
      padding: 40px 12vw;
    }

    .DashBoardFooterStyle__divContainer--divInfo {
      align-items: flex-start;
    }

    .DashBoardFooterStyle__divContainer--divEmail {
      align-items: flex-end;
    }
  }
`;
