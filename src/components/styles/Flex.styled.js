import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.sm}) {
    h2 {
      font-size: 22px;
    }
  }
`;
