import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout};

  img {
    width: 50%;
  }

  div {
    flex: 1;
    padding: 10px;

    h2 {
      font-size: 38px;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    p {
      opacity: 0.6;
      line-height: 1.5;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    div {
      text-align: center;

      h2 {
        font-size: 32px;
      }

      p {
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.sm}) {
    padding: 20px;
    
    div {
      h2 {
        font-size: 18px;
      }

      p {
        font-size: 12px;
      }
    }
  }
`;
