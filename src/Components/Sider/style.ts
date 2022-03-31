import styled from "styled-components";
import backgroundImg from "../../assets/img/computer.jpg";

export const Container = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: fixed;
  width: 30%;
`;

export const ProfileImg = styled.img`
  width: 20%;
  border-radius: 50rem;
  margin: 30% 0 0 60%;
`;

export const Title = styled.p`
  color: var(--gray-200);
  margin-right: 20%;
  margin-top: 30px;
  text-align: right;
  font-size: 30px;
  font-weight: 700;
  text-align: right;
`;

export const SubTitle = styled.p`
  color: var(--gray-200);
  font-size: 16px;
  font-weight: 500;
  margin: 3% 20% 0 10%;
  text-align: right;
  margin-bottom: 40px;
  /* width: 680px;
  animation: digitando 3s steps(25), blink 0.4s infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid;

  @keyframes digitando {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    40% {
      border-color: rgba(255, 255, 255, 0.2);
    }
  } */
`;

export const IconContainer = styled.div`
  margin-right: 17%;
  text-align: right;

  .anticon svg {
    font-size: 32px;
    color: var(--gray-200);
    margin-right: 25px;

    :hover {
      color: var(--green-500);
    }
  }
`;

export const Footer = styled.div`
  width: 30%;
  height: 50px;
  margin: auto;
  bottom: 0;
  position: fixed;
  background-color: transparent;
  color: var(--gray-200);
  text-align: center;
`;

export const MySkill = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
`;
