import React from "react";
import { FiThumbsUp } from "react-icons/fi";

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="data:image/jpeg;base64,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"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/127629717?v=4&size=64"/>
                    <div>
                        <h4>Gabriel Vasconcelos</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card };