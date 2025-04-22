import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    background-image: url("/images/bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const Texto = styled.div`
    gap: 6px;
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.textos};
    color: ${({ theme }) => theme.colors.branco};
    font-weight: 600;
    text-align: center;
    margin-top: 20px;

    @media(max-width: 460px) {
        display: block;
    }
`;

const Contatos = styled.div`
    padding: 120px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 120px;
    margin-top: 20px;
    border-top: 2px dotted ${({ theme }) => theme.colors.cinzaTexto};
    border-bottom: 2px dotted ${({ theme }) => theme.colors.cinzaTexto};
    padding: 50px 70px;

    @media(max-width: 1065px) {
        gap: 50px;
    }

    @media(max-width: 425px) {
        padding: 20px;
    }
`;

const Contato = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Link = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;    
`;

const Endereco = styled.p`
    color: ${({ theme }) => theme.colors.branco};
    font-weight: 300;
`;

const Texto1 = styled.p`
    color: ${({ theme }) => theme.colors.branco};
    font-weight: 600;
`;

export function Footer() {
  return (
    <FooterContainer>
        <img src="/images/LOGO_Auto Negocie_Aprovado_3.png"></img>
        <Texto>
            <span className="destaque">Soluções digitais para </span>
            <span> facilitar sua vida</span>
        </Texto>
        <Contatos>
            <Contato>
                <Link>
                    <img src="/images/Grupo 888.svg" alt="" srcset="" />      
                    <Endereco>Auto_negocie</Endereco>   
                </Link>
                <Texto1>Acompanhe novidades</Texto1>
            </Contato>
            <Contato>
                <Link>
                    <img src="/images/Facebook.svg" alt="" srcset="" />      
                    <Endereco>Auto_negocie</Endereco>   
                </Link>
                <Texto1>Acompanhe novidades</Texto1>
            </Contato>
            <Contato>
                <Link>
                    <img src="/images/Mail.svg" alt="" srcset="" />      
                    <Endereco>faleconosco@autonegocie.com</Endereco>   
                </Link>
                <Texto1>Fale Conosco</Texto1>
            </Contato>
        </Contatos>
    </FooterContainer>
  )
}