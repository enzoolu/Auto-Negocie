import React from "react";
import styled from "styled-components";
import { Botao } from "./heroSection.js";
import { Titulo } from "./heroSection.js";

const Section4Container = styled.section`
    padding: 120px 230px;
    background-image: url("/images/bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media(max-width: 1440px) {
        padding: 120px 130px;
    }

    @media(max-width: 1124px) {
        padding: 80px 50px;
    }

    @media(max-width: 425px) {
        padding: 60px;
    }
`;


const Linha1 = styled.div`
    display: grid;
    grid-template-columns: 2fr 4fr;
    gap: 50px;

    @media(max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    @media(max-width: 670px) {
        grid-template-columns: 1fr;
    }
`; 

const AreaBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
`;

const AreaDestaque = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 60px;
    background-color: ${({ theme }) => theme.colors.backgroundBtn};
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.azul};
    font-size: ${({ theme }) => theme.fontSizes.subtituloDestaque};
    font-weight: 600;

    @media(max-width: 1024px) {
        padding: 20px 40px;
        font-size: ${({ theme }) => theme.fontSizes.subtitulos};
    }

    @media(max-width: 425px) {
        padding: 20px 20px;
    }
`;

const Linha2 = styled.div`
    margin-top: 80px;
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    gap: 50px;

    @media(max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    @media(max-width: 360px) {
        justify-content: center;
    }
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
`;

const Item = styled.div`
    background-color: ${({ theme }) => theme.colors.branco};
    border-radius: 20px;
    display: flex;
    justify-content: flex-start; 
    align-items: flex-start;  
    gap: 10px;
    padding: 35px 20px;
    width: 100%;
`;

const TextoItem = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.textos};
    color: ${({ theme }) => theme.colors.cinzaTexto};
    max-width: 50ch;

    @media(max-width: 1024px) {
        max-width: 80ch;
    }
`;

const ImgLogo = styled.img`
    justify-self: center;
    align-self: center;

    @media(max-width: 1024px) {
        display: none;
    }
`;


export function Section4() {
    return (
        <Section4Container>
             <Linha1>
                <AreaBtn>
                    <Titulo>
                        <span>Por que escolher</span>
                        <span className="destaque">a AutoNegocio?</span>
                    </Titulo>
                    <Botao>Começar agora</Botao>
                </AreaBtn>
                <AreaDestaque>Nosso serviço se destaca porque entregamos tudo em um só lugar, sem concorrência direta no mercado:</AreaDestaque>
             </Linha1>

            <Linha2>
                <Items>
                    <Item>
                        <img src="/images/icon.svg" alt="" srcset="" height="30px"/>
                        <TextoItem>Automação do processo de protesto.</TextoItem>
                    </Item>

                    <Item>
                        <img src="/images/icon.svg" alt="" srcset="" height="30px"/>
                        <TextoItem>Cobrança com validade legal e mais chances de recebimento.</TextoItem>
                    </Item>

                    <Item>
                        <img src="/images/icon.svg" alt="" srcset="" height="30px"/>
                        <TextoItem>Sem necessidade de intermediários.</TextoItem>
                    </Item>
                </Items>
                
                <ImgLogo src="/images/LOGO_Auto Negocie_Aprovado_1.png"></ImgLogo>

                <Items>
                    <Item>
                        <img src="/images/icon.svg" alt="" srcset="" height="30px"/>
                        <TextoItem>Validade jurídica garantida.</TextoItem>
                    </Item>

                    <Item>
                        <img src="/images/icon.svg" alt="" srcset="" height="30px"/>
                        <TextoItem>Integração com cartórios para protestos ágeis e automáticos.</TextoItem>
                    </Item>

                    <Item>
                        <img src="/images/icon.svg" alt="" srcset="" height="30px"/>
                        <TextoItem>Suporte especializado sempre disponível.</TextoItem>
                    </Item>
                </Items>
            </Linha2>
        </Section4Container>
    )
}