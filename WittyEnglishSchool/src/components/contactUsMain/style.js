import styled from "styled-components";

export const StyledContactUsMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-grey-black);

  background-color: var(--color-grey-white);

  height: 100vh;

  .StyledMainContacts__divContainer {
    background-color: var(--color-white-Disable);
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px;

    border-radius: 10px;

    gap: 35px;
  }

  .StyledMainContacts__divContainer--divButtonBack {
    display: flex;
    justify-content: flex-start;

    width: 100%;
  }

  .StyledMainContacts__divContainer--buttonBack {
    background-color: var(--color-primary);
    color: var(--color-grey-white);

    border: none;
    border-radius: 4px;

    padding: 5px 10px;

    margin-left: 30px;
    margin-top: 20px;
  }

  .StyledMainContacts__divContainer--buttonBack:hover {
    background-color: var(--color-primary-Hover);
  }

  .StyledMainContacts__h2Title {
    margin-top: 0px;
  }

  .StyledMainContacts__divContainer--Form {
    display: flex;
    flex-direction: column;

    gap: 20px;

    width: 30vw;
    height: 70vh;
    padding: 5px;
  }

  .StyledMainContacts__divContainer--FormInput {
    background-color: var(--color-grey-white);
    color: var(--color-grey-black);

    height: 30px;

    border: none;
    border: solid 1px var(--color-primary-Hover);
    border-radius: 10px;
  }

  .StyledMainContacts__divContainer--FormTextArea {
    background-color: var(--color-grey-white);
    color: var(--color-grey-black);

    height: 150px;

    resize: none;

    border: none;
    border: solid 1px var(--color-primary-Hover);
    border-radius: 10px;
  }

  .StyledMainContacts__divContainer--FormButtonSubmit {
    background-color: var(--color-primary);
    color: white;

    height: 30px;

    border: none;
    border-radius: 5px;
  }

  .StyledMainContacts__divContainer--FormButtonSubmit:hover {
    background-color: var(--color-primary-Hover);
    /* color: var(--grey-4); */

    transition: 0.5s;
  }

  @media (max-width: 768px) {
    .StyledMainContacts__divContainer {
      width: 80vw;
    }

    .StyledMainContacts__divContainer--Form {
      width: 90%;
    }
  }
`;
