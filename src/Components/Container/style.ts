import styled from "styled-components";

export const Content = styled.div`
  padding: 3rem;
  overflow: "initial";
  margin-left: 30%;

  .ant-divider-horizontal {
    display: flex;
    clear: both;
    width: 100%;
    min-width: 100%;
    margin: 24px 0;
  }
`;

export const TitleWork = styled.h2`
  font-size: 1.6rem;
  line-height: 1.5em;
  color: var(--gray-400);
  font-weight: 400;
  margin-left: 40px;
`;

export const GaleryWork = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ContainerImg = styled.div`
  margin-bottom: 3rem;
`;

export const ImgContent = styled.img`
  margin-top: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 340px;
`;

export const TitleImg = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0 0.5rem 0;
  color: var(--gray-400);
`;

export const SubTitleImg = styled.p`
  font-size: 0.8rem;
  line-height: 1.5em;
  margin: 0;
  color: var(--gray-400);
`;

export const MyForm = styled.div`
  margin-left: 40px;

  .ant-input {
    text-overflow: ellipsis;
    border-radius: 10px;
}
`;
