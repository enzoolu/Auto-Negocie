import React from "react";
import styled from "styled-components";
import { Titulo } from "./section1.js";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px ;

    @media (max-width: 425px) {
        padding: 60px 30px;
    }
`;

const Texto = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.textos};
    color: ${({ theme }) => theme.colors.cinzaTexto};
    margin-top: 40px;
    margin-bottom: 70px;
`;

const ImgSeta = styled.img`
    margin-bottom: 55px;
    width: 25px;
    height: 55px;
`;

const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.cinzaBg};
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 600px;

  @media (max-width: 425px) {
    gap: 30px;
    padding: 20px;
    font-size: ${({ theme }) => theme.fontSizes.subtitulos};
  }
`;

const InputField = styled.input`
  padding: 20px;
  border: 2px solid #E8E8E8;
  font-size: 16px;

  @media (max-width: 425px) {
    padding: 14px;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.cinzaTexto};
    font-size: ${({ theme }) => theme.fontSizes.form};
    font-weight: 300;

    @media (max-width: 425px) {
      font-size: ${({ theme }) => theme.fontSizes.formMobile};
    }
  }
  
  &:focus {
    outline: none;
    border-color: #aaa;
  }
`;

const TextAreaField = styled.textarea`
  padding: 20px;
  border: 2px solid #E8E8E8;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.cinzaTexto};
  }
  
  &:focus {
    outline: none;
    border-color: #aaa;
  }
`;

const SubmitButton = styled.button`
  border: none;
  position: relative;
  display: inline-flex;
  align-self: flex-start;
  padding: 10px 55px 10px 25px;
  background-color: ${({ theme }) => theme.colors.backgroundBtn};
  color: ${({ theme }) => theme.colors.branco};
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSizes.textos};
  font-weight: 600;
  margin: 0 auto;
  cursor: pointer;

  @media (max-width: 425px) {
    padding: 10px 35px 10px 15px;
    font-size: ${({ theme }) => theme.fontSizes.form};
  }

  &::after {
    content: "";
    background-image: url("/images/ic_keyboard_return_24px.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 19px;
    height: 19px;
    display: inline-block;
    position: absolute;
    top: 16px;
    right: 20px;

        @media (max-width: 425px) {
            top: 15px;
            right: 10px;
            width: 18px;
            height: 18px;
        }
    }
`;

const Form = () => {
    return (
      <Container>
        <Titulo align="right">
            <span>Precisa de mais informações</span>
            <span className="destaque"> ou quer iniciar agora?</span>
        </Titulo>
        <Texto>Preencha o formulário e nossa equipe entrará em <strong>contato rapidamente.</strong></Texto>
        <ImgSeta src="/images/seta.svg" alt="seta" />
        
        <FormContainer action="https://formsubmit.co/enzoo.lu@gmail.com" method="POST">
          <InputField 
            type="text" 
            name="nome" 
            placeholder="Nome:" 
            required 
          />
          
          <InputField 
            type="tel" 
            name="telefone" 
            placeholder="Telefone:" 
            required 
          />
          
          <InputField 
            type="email" 
            name="email" 
            placeholder="E-mail:" 
            required 
          />
          
          <TextAreaField 
            name="mensagem" 
            placeholder="Mensagem:" 
            required 
          />
          
          <SubmitButton type="submit">
            Enviar mensagem
          </SubmitButton>
        </FormContainer>
      </Container>
    );
};
  
export default Form;