import styled from "styled-components";

export const Header = styled.header`
  color: var(--color-grey-white);

  background-color: var(--color-grey-black);

  position: fixed;

  z-index: 2;
  width: 100vw;

  .Header__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    border-bottom: solid 1px var(--color-grey-black-Hover);

    gap: 15px;

    padding: 20px 5vw;
  }

  .Header__container--p {
    color: var(--color-primary);
  }

  .Header__container--contact {
    border: none;

    color: var(--color-grey-white);

    background-color: var(--color-primary);
    padding: 7px 20px;

    border-radius: 8px;
  }

  .Header__container--contact:hover {
    background-color: var(--color-primary-Hover);
  }

  .Header__container--nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    gap: 5vw;
  }

  .Header__container--link {
    cursor: pointer;
  }

  .Header__container--link:hover {
    color: var(--color-primary-Hover);
  }

  @media (min-width: 768px) {
    .Header__container {
      padding: 40px 12vw;
    }

    .Header__container--nav {
      gap: 64px;
    }
  }
`;
