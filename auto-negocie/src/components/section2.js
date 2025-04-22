import React from "react";
import styled from "styled-components";
import { Titulo } from "./heroSection.js";
import { Botao } from "./heroSection.js";

const Section2Container = styled.section`
  padding: 120px 230px;
  background-image: url("/images/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 2fr;
    padding: 120px 130px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 80px 50px;
  }

  @media (max-width: 425px) {
    padding: 60px 30px;
  }

  @media (max-width: 320px) {
    padding: 40px 20px;
  }
`;

const GridTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 1024px) {
    order: 1;
  }
`;

const Subtitulo = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.subtitulos};
  color: ${({ theme }) => theme.colors.branco};
  max-width: 34ch;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  align-items: flex-start;
`;

const Item = styled.div`
  display: flex;
  gap: 10px;
  max-width: 600px;

  img {
    flex-shrink: 0;
    margin-top: 5px;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    text-align: left;
  }

  @media (max-width: 675px) {
    flex-direction: row;
    text-align: center;
  }
`;

const TextoItem = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.textos};
  color: ${({ theme }) => theme.colors.branco};
  max-width: 50ch;

  @media (max-width: 1024px) {
    max-width: 80ch;
    text-align: left;
  }

  @media (max-width: 675px) {
    max-width: 100%;
  }
`;

const ImgGrid = styled.img`
  justify-self: start;
  align-self: center;
  border-radius: 20px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export function Section2() {
  return (
    <Section2Container>
      <GridTexto>
        <Titulo align="left">
          <span>Reconhecimento</span>
          <span className="destaque">de firma online</span>
        </Titulo>
        <Subtitulo>
          Realize o processo de reconhecimento de firma sem sair de casa.
        </Subtitulo>
        <Items>
          <Item>
            <img src="/images/icon.svg" alt="" height="20px" />
            <TextoItem>
              Mesmo procedimento realizado presencialmente no cartório,{" "}
              <strong>agora de forma digital.</strong>
            </TextoItem>
          </Item>

          <Item>
            <img src="/images/icon.svg" alt="" height="20px" />
            <TextoItem>
              <strong>Segurança garantida</strong> com certificado digital ICP.
            </TextoItem>
          </Item>

          <Item>
            <img src="/images/icon.svg" alt="" height="20px" />
            <TextoItem>
              Cadastro concluído <strong>em até 24 horas.</strong> Processo
              100% online e validado legalmente.
            </TextoItem>
          </Item>

          <Item>
            <img src="/images/icon.svg" alt="" height="20px" />
            <TextoItem>
              <strong>Processo 100% online</strong> e validado legalmente.
            </TextoItem>
          </Item>
        </Items>
        <Botao href="#">Reconhecer firma agora</Botao>
      </GridTexto>
      <ImgGrid src="/images/portrait-smile-laptop-with-woman-floor-living-room-home-email-internet-research-computer-relax-social-media-with-happy-young-person-apartment-website-browsing.jpg" />
    </Section2Container>
  );
}
