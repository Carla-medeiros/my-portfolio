import {
  ContainerImg,
  Content,
  GaleryWork,
  ImgContent,
  MyForm,
  SubTitleImg,
  TitleImg,
  TitleWork,
} from "./style";
import exmple01 from "../../assets/img/05.jpg";
import { Button, Divider, Form, Input } from "antd";

export function Container() {

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
  };

  return (
    <Content>
      <TitleWork>Recent Work</TitleWork>
      <GaleryWork>
        <ContainerImg>
          <ImgContent src={exmple01} alt="exemple" />
          <TitleImg>Magna sed consequat tempus</TitleImg>
          <SubTitleImg>
            Lorem ipsum dolor sit amet nisl sed nullam feugiat.
          </SubTitleImg>
        </ContainerImg>
        <ContainerImg>
          <ImgContent src={exmple01} alt="exemple" />
          <TitleImg>Magna sed consequat tempus</TitleImg>
          <SubTitleImg>
            Lorem ipsum dolor sit amet nisl sed nullam feugiat.
          </SubTitleImg>
        </ContainerImg>
        <ContainerImg>
          <ImgContent src={exmple01} alt="exemple" />
          <TitleImg>Magna sed consequat tempus</TitleImg>
          <SubTitleImg>
            Lorem ipsum dolor sit amet nisl sed nullam feugiat.
          </SubTitleImg>
        </ContainerImg>
        <ContainerImg>
          <ImgContent src={exmple01} alt="exemple" />
          <TitleImg>Magna sed consequat tempus</TitleImg>
          <SubTitleImg>
            Lorem ipsum dolor sit amet nisl sed nullam feugiat.
          </SubTitleImg>
        </ContainerImg>
        <ContainerImg>
          <ImgContent src={exmple01} alt="exemple" />
          <TitleImg>Magna sed consequat tempus</TitleImg>
          <SubTitleImg>
            Lorem ipsum dolor sit amet nisl sed nullam feugiat.
          </SubTitleImg>
        </ContainerImg>
        <ContainerImg>
          <ImgContent src={exmple01} alt="exemple" />
          <TitleImg>Magna sed consequat tempus</TitleImg>
          <SubTitleImg>
            Lorem ipsum dolor sit amet nisl sed nullam feugiat.
          </SubTitleImg>
        </ContainerImg>
      </GaleryWork>
      <Divider />
      <TitleWork>Let's talk</TitleWork>
     <MyForm>
     <Form
        {...layout}
        name="nest-messages"
        
      >
        <Form.Item
          rules={[{ required: true }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          rules={[{ type: "email" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Input.TextArea placeholder="Message" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
     </MyForm>
    </Content>
  );
}
