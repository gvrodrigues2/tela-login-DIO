import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input";

import { api } from '../../services/api'
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try {
            const { data } = await api.get('login', { 
                email: formData.email,
                password: formData.password
            });

            if (data && data.length === 1) {
                navigate('/feed');
            } else {
                alert('Email ou senha inválidos');
            }
        } catch (error) {
            console.error(error);
            alert('Houve um erro, tente novamente.');
        }
    };

    const handleCreateAccount = () => {
        navigate('/cadastro');
    }
    
    return (<>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais
                        rápido nas empresas mais desejadas. 
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu login</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} defaultValue="" />
                            <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock />} defaultValue="" />
                            <Button title="Entrar" variant='secondary' type="submit"/>
                        </form>
                        <Row>
                           <EsqueciText>Esqueci minha senha</EsqueciText>
                           <CriarText onClick={handleCreateAccount}>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
            </>)
}

export { Login };