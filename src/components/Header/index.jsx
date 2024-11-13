import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-dio 1.png'
import { Button } from '../Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture

} from './styles'

const Header = ({autenticado}) => {
    const navigate = useNavigate();

    const handleNavigateToCadastro = () => {
        navigate('/cadastro');
};

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo da dio' />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null }
                
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/127629717?v=4&size=64" />
                ) : (
                    <>
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" onClick={handleNavigateToCadastro}/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}