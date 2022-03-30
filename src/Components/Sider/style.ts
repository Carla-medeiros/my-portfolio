import { Button } from "antd";
import styled from "styled-components";
import backgroundImg from "../../assets/img/imagem.png"

export const Container = styled.div`
  background-image: url(${backgroundImg});
  height: 100vh;
`;

export const ProfileImg = styled.img`
    width: 20%;
    border-radius: 50rem;
    margin: 30% 0 0 60%;
`;

export const Title = styled.p`
    color: var(--white);
    font-size: 20px;
    font-weight: 700;
    margin: 3% 20% 0 45%;
    text-align: right;
`;

export const SubTitle = styled.p`
    color: var(--white);
    font-size: 16px;
    font-weight: 500;
    margin: 3% 20% 0 10%;
    text-align: right;
    margin-bottom: 40px;
`;

export const ButtonSocial = styled(Button)`
    background: red;
    border-color: red;
    margin-right: 10px;

    :hover {
        background: #49bf9d;
        border-color: #49bf9d;
    }
`;
