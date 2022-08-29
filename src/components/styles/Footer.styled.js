import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul li {
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      margin-top: 1rem;
      text-align: center;
    }
  }
`;
