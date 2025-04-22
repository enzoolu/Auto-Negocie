import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  position: relative;
  padding-top: 39px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-image: url('/images/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

  @media(max-width: 425px) {
    justify-content: space-around;
  }
`;


const AreaTexto = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media(max-width: 620px) {
    padding: 0 30px;
  }
`;

export const Titulo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.titulos};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.branco};
  text-align: ${({ align }) => align || "left"};

  @media(max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.titulosMobile};
  }
`;

const Texto = styled.p`
  max-width: 58ch;
  margin-top: 15px;
  font-size: ${({ theme }) => theme.fontSizes.textos};
  color: ${({ theme }) => theme.colors.branco};

  @media(max-width: 425px) {
    margin-top: 50px;
  }
`;

export const Botao = styled.a`
  margin-top: 30px;
  position: relative;
  display: inline-block;
  padding: 6px 55px 10px 24px;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.backgroundBtn};
  color: ${({ theme }) => theme.colors.branco};
  text-decoration: none;
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSizes.textos};
  font-weight: 600;

  &::after {
    content: "";
    background-image: url("/images/ic_keyboard_return_24px.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 19px;
    height: 19px;
    display: inline-block;
    position: absolute;
    top: 14px;
    right: 20px;
  }
`;

const ImgHero = styled.div`   
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 10;
  background-image: url('/images/bg_banner.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0;

  @media(max-width: 425px) {
    display: none;
  }
`;

const Detalhe1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 20%;
  background-color: #03EB92;
  padding: 8px 22px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  font-size: ${({ theme }) => theme.fontSizes.detalhes};
  color: ${({ theme }) => theme.colors.branco};
  font-weight: 300;

  @media(max-width: 620px) {
    left: 12%;
  }
`;

const Detalhe2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10%;
  right: 17%;
  background-color: #03EB92;
  padding: 8px 22px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  font-size: ${({ theme }) => theme.fontSizes.detalhes};
  color: ${({ theme }) => theme.colors.branco};
  font-weight: 300;

  @media(max-width: 620px) {
    right: 10%;
  }
`;

const DetalheImg = styled.img`
    height: 1.75rem;
    width: 1.25rem;
    margin-right: 10px;

    @media(max-width: 500px) {
      display: none;  
    }
`;

export function HeroSection() {
  return (
    <HeroContainer>
        <img src="/images/LOGO_Auto Negocie_Aprovado_3.png" alt="Logo" />
        <AreaTexto>
          <Titulo align="center">
            <span>Solução completa para</span>
            <span className="destaque">consultas e vistorias veiculares</span>
          </Titulo>
          <Texto>
            Na <strong>AutoNegocie</strong>, você consulta débitos, verifica o histórico veicular, realiza vistoria digital e faz o reconhecimento de firma de forma remota com o cartório, tendo a mesma validade do processo presencial. Tudo isso de forma rápida, segura e sem burocracia.
          </Texto>
        </AreaTexto>
        <Botao href="#contato">Consultar agora</Botao>
        <ImgHero>
            <Detalhe1>
                <DetalheImg src="/images/cel.svg" alt="Detalhe 1"></DetalheImg>
                <p>vistoria digital</p>
            </Detalhe1>
            <Detalhe2>
                <DetalheImg src="/images/Grupo 5.svg" alt="Detalhe 2"></DetalheImg>
                <p>privacidade</p>
            </Detalhe2>
        </ImgHero>
    </HeroContainer>
  );
}
