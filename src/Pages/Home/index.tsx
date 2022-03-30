import { Container } from "../../Components/Container/Container";
import { Sider } from "../../Components/Sider/Sider";
import { Main } from "./style";


export function Home() {
    return (
        <Main>
            <Sider />
            <Container />
        </Main>
    )
}
