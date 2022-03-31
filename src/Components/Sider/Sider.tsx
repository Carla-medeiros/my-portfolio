/* eslint-disable react/jsx-no-target-blank */
import {
  Container,
  ProfileImg,
  Title,
  SubTitle,
//   IconContainer,
  MySkill,
  Footer
} from "./style";
import perfilImg from "../../assets/img/perfil.jpg";
// import { GithubOutlined, LinkedinFilled, MailFilled } from "@ant-design/icons";

export function Sider() {
  return (
    <Container>
      <ProfileImg src={perfilImg} alt="Perfil" />
      <Title>Carla Médice</Title>
      <SubTitle>
        I am Strata, a super simple responsive site template freebie crafted by
        HTML5 UP
      </SubTitle>
      {/* <IconContainer>
        <a href="https://github.com/Carla-medeiros" target="_blank">
          <GithubOutlined />
        </a>
        <a
          href="https://www.linkedin.com/in/carla-m%C3%A9dice-estagio/"
          target="_blank"
        >
          <LinkedinFilled />
        </a>
        <a href="mailto:carlaamedeiros11@gmail.com" target="_blank">
          <MailFilled />
        </a>
      </IconContainer> */}
      <MySkill>
        <i className="devicon-html5-plain colored"></i>
        <i className="devicon-css3-plain colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-react-original colored"></i>
        <i className="devicon-git-plain colored"></i>
        <i className="devicon-nodejs-plain colored"></i>
      </MySkill>
      <Footer>© 2022 Carla Médice. All Rights Reserved.</Footer>
    </Container>
  );
}
