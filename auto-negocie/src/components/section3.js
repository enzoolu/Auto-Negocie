import React from "react";
import styled from "styled-components";
import { Titulo } from "./section1.js";
import { Botao } from "./heroSection.js";

const Section3Container = styled.section`
    padding: 120px 230px;
    background-color: ${({ theme }) => theme.colors.cinzaBg};
    display: grid;
    gap: 80px;
    grid-template-columns: 1fr 1fr;

    @media(max-width: 1440px) {
        grid-template-columns: 2fr 1fr;
        padding: 120px 130px;
    }

    @media(max-width: 1024px) {
        grid-template-columns: 1fr;
        padding: 80px 50px;
    }

    @media(max-width: 425px) {
        padding: 60px;
    }
`;

const ImgGrid = styled.img`
    justify-self: start;
    align-self: center;

    @media(max-width: 1024px) {
        display: none;
    }
`;

const GridTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    text-align: left;
    gap: 30px;

    @media(max-width: 675px) {
        justify-content: center;
        align-items: center;
    }
`;

const Subtitulo = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.textos};
    color: ${({ theme }) => theme.colors.cinzaTexto};
    max-width: 60ch;
    text-align: left;
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
`;

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const TextoItem = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.textos};
    color: ${({ theme }) => theme.colors.cinzaTexto};

    @media(max-width: 1024px) {
        max-width: 80ch;
    }
`;


export function Section3() {
    return (
        <Section3Container>
            <ImgGrid src="/images/sales-man-car-showroom-selling-car.png" />
            <GridTexto>
                <Titulo>
                    <span>Protesto inteligente:</span>
                    <span className="destaque"> proteja sua empresa</span>
                </Titulo>
                <Subtitulo>Reduza a inadimplência de forma ágil e eficiente! Nossa API está integrada com todos os cartórios do Brasil, permitindo protestar clientes inadimplentes de forma simples e segura. <br /> <br /> <strong>Detalhes:</strong></Subtitulo>
                <Items>
                    <Item>
                        <img src="/images/icon.svg" alt="" srcset="" height="20px"/>
                        <TextoItem>Automação do processo de protesto.</TextoItem>
                    </Item>

                    <Item>
                        <img src="/images/icon.svg" alt="" srcset="" height="20px"/>
                        <TextoItem>Cobrança com validade legal e mais chances de recebimento.</TextoItem>
                    </Item>

                    <Item>
                        <img src="/images/icon.svg" alt="" srcset="" height="20px"/>
                        <TextoItem>Sem necessidade de intermediários.</TextoItem>
                    </Item>
                </Items>
                <Botao href="#">Protestar agora</Botao>
            </GridTexto>
        </Section3Container>
    )
}