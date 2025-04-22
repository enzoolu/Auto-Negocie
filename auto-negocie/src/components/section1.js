import React from "react";
import styled from "styled-components";
import { Botao } from "./heroSection.js";

const Section1Container = styled.section`
    background-color: ${({ theme }) => theme.colors.cinzaBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    padding: 80px 20px;

    @media(max-width: 425px) {
        padding: 40px 20px;
        gap: 40px;
    }
`;

export const Titulo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.titulos};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.azul};
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 650px;
  text-align: ${({ align }) => align || "left"};
  align-items: ${({ align }) => align === 'center' ? 'center' : 'flex-start'};

  @media(max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.titulosMobile};
  }
`;

const CardImg = styled.div`
    width: 70px;
    height: 70px;
    background-color: ${({ theme }) => theme.colors.azul};
    padding: 12px;
    border-radius: 50%;
`;

const Cards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 100px;

    & > div:nth-of-type(2) ${CardImg} img {
        margin-top: 6px;
    }

    & > div:nth-of-type(3) ${CardImg} img {
        margin-top: 2px;
        margin-left: 1px;
    }

    @media(max-width: 990px) {
        flex-direction: column;
        gap: 40px;
    }
`;

const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.branco};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 70px;
    border-radius: 20px;
    height: 240px;
    width: 220px;

    @media(max-width: 990px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        height: 100%;
        width: 100%;
        padding: 20px 40px;
        gap: 60px;
    }

    @media(max-width: 425px) {
        padding: 10px 20px;
        gap: 20px;
    }
`;

const BordaImg = styled.div`
    background-color: ${({ theme }) => theme.colors.branco};
    border-radius: 50%;
    padding: 10px;
    margin-top: -40px;

    @media(max-width: 990px) {
        margin-top: 0;
    }
`;

const CardTexto = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.texto};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 150px;
    text-align: center;

    &:nth-child(2),
    &:nth-child(3) {
        margin-top: 35px;
    }

    @media(max-width: 990px) {
        max-width: 100%;
        align-items: end;
        text-align: right;
        margin-bottom: 30px
    }

    @media(max-width: 425px) {
        align-items: start;
    }
`;

const Cardtitulo = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.texto};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.azul};

    @media(max-width: 990px) {
        max-width: 100%;   
    }

    @media(max-width: 425px) {
        text-align: left;
    }
`;

const CardDescricao = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.texto};
    color: ${({ theme }) => theme.colors.cinzaTexto};
    @media(max-width: 990px) {
        max-width: 80%;
        text-align: right;
    }

    @media(max-width: 425px) {
        text-align: left;
        max-width: 100%;
    }
`;

export function Section1() {
    return (
        <Section1Container>
            <Titulo>
                <span>Consulta veicular completa</span>
                <span className="destaque">saiba todas as informações antes de comprar ou vender um veículo:</span>
            </Titulo>
            <Cards>
                <Card>
                    <BordaImg>
                        <CardImg>
                            <img src="/images/Grupo 2111.svg" alt='ad'/>
                        </CardImg>
                    </BordaImg>
                    <CardTexto>
                        <Cardtitulo>Débitos:</Cardtitulo>
                        <CardDescricao>verifique IPVA, multas e dívidas ativas.</CardDescricao>
                    </CardTexto>
                </Card>

                <Card>
                    <BordaImg>
                        <CardImg>
                            <img src="/images/Grupo 2113.svg" alt='ad'/>
                        </CardImg>
                    </BordaImg>
                    <CardTexto>
                        <Cardtitulo>Histórico veicular:</Cardtitulo>
                        <CardDescricao>descubra se há sinistros, passagem por leilão ou restrições.</CardDescricao>
                    </CardTexto>
                </Card>

                <Card>
                    <BordaImg>
                        <CardImg>
                            <img src="/images/Grupo 2107.svg" alt='ad'/>
                        </CardImg>
                    </BordaImg>
                    <CardTexto>
                        <Cardtitulo>Vistoria cautelar digital:</Cardtitulo>
                        <CardDescricao>análise detalhada para mais segurança na negociação.</CardDescricao>
                    </CardTexto>
                </Card>
            </Cards>
            <Botao href="#">Fazer consulta agora</Botao>
        </Section1Container>
    );
};