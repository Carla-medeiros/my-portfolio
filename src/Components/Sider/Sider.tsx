import { Container, ProfileImg, Title, SubTitle, ButtonSocial } from "./style";
import perfilImg from "../../assets/img/perfil.jpg"
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

export function Sider() {
    return (
        <Container>
            <ProfileImg src={perfilImg} alt="Perfil" />
            <Title>Carla Médice</Title>
            <SubTitle>
                I am Strata, a super simple
                responsive site template freebie
                crafted by HTML5 UP
            </SubTitle>
            <ButtonSocial type="primary" icon={<GithubOutlined />} />
            <ButtonSocial type="primary" icon={<LinkedinOutlined />} />
        </Container>
    )
}