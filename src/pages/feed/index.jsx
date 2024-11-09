
import { Card } from "../../components/Card";
import { UserInfo } from '../../components/UserInfo';
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighLight } from './styles';

const Feed = () => {
    return (<>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighLight> #RANKING 5 TOP DA SEMANA</TitleHighLight>
                    <UserInfo percentual={80} nome="Gabriel Vasconcelos" image="https://avatars.githubusercontent.com/u/127629717?v=4&size=64" />
                    <UserInfo percentual={27} nome="Gabriel Vasconcelos" image="https://avatars.githubusercontent.com/u/127629717?v=4&size=64" />
                    <UserInfo percentual={89} nome="Gabriel Vasconcelos" image="https://avatars.githubusercontent.com/u/127629717?v=4&size=64" />
                    <UserInfo percentual={57} nome="Gabriel Vasconcelos" image="https://avatars.githubusercontent.com/u/127629717?v=4&size=64" />
                    <UserInfo percentual={12} nome="Gabriel Vasconcelos" image="https://avatars.githubusercontent.com/u/127629717?v=4&size=64" />
                </Column>
            </Container>
            </>)
}

export { Feed }