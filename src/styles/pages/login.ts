import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  background: var(--blue);

  @media (max-width: 1336px) {
    > img {
      display: none;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin-right: 16.25rem;

  @media (max-width: 1500px) {
    margin-right: 7.25rem;
  }

  @media (max-width: 1336px) {
    margin: 0 auto;
    margin-right: 0;
    /*
      mexer no padding do mobile
    */
    /* padding: 2rem; */

    > img {
      width: calc(100% - 2rem);
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  margin-top: 6rem;

  > h1 {
    font-size: 3.6rem;
    color: var(--white);
    margin-bottom: 2.4rem;
  }

  @media (max-width: 1336px) {
    > h1 {
      font-size: 2.6rem;
    }
  }
`;

export const Github = styled.div`
  display: flex;
  align-items: center;
  margin: 2.4rem 0 2.5rem 0;

  > span {
    font-size: 1.25rem;
    color: #b2b9ff;
    line-height: 1.88rem;

    margin-left: 1.5rem;
    width: 254px;
  }

  @media (max-width: 1336px) {
    > span {
      font-size: 1rem;
      line-height: 1.32rem;
      margin-left: 1.2rem;
    }
  }
`;

export const InputBlock = styled.div`
  display: flex;
  align-items: center;

  > input {
    height: 80px;

    padding: 0 2.6rem;
    border: 0;
    border-radius: 5px;
    outline: 1px solid var(--blue);

    font-size: 1.25rem;
    color: var(--white);

    &::placeholder {
      font-size: 1.25rem;
      color: var(--text-highlight);
    }

    background: linear-gradient(90deg, #4953b8 0%, rgba(73, 83, 184, 0.2) 100%);
  }

  @media (max-width: 1336px) {
    > input {
      height: 70px;

      padding: 0 1.6rem;
      border: 0;
      border-radius: 5px;
      outline: 1px solid var(--blue);

      font-size: 1.08rem;
      color: var(--white);

      &::placeholder {
        font-size: 1.08rem;
        color: var(--text-highlight);
      }

      background: linear-gradient(
        90deg,
        #4953b8 0%,
        rgba(73, 83, 184, 0.2) 100%
      );
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  height: 80px;
  padding: 0 1.8rem;

  background: var(--blue-dark);

  border: 0;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  outline: 1px solid var(--blue);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 1336px) {
    height: 70px;
    padding: 0 1.6rem;
  }
`;
