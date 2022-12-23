import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({ theme }) => css`
    background-color: ${theme.colors["black-01"]};
    @media (max-width: ${theme.grid["container-lg"]}) {
      padding: 0 ${theme.spacings["md"]};
    }
  `};
`;

export const ContainerLogin = styled.div`
  height: 582px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 3px 6px 4px 0 #00000025;

  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid["container-md"]};
    border-radius: ${theme.border.md};
    background-color: ${theme.colors.primary};
  `};
`;

export const Button = styled.button`
  width: 100%;
  max-width: 325px;
  cursor: pointer;
  box-shadow: 0 0 4px 2px #00000025;

  ${({ theme }) => css`
    color: ${theme.colors["text-white"]};
    padding: ${theme.spacings.sm} 0;
    font-weight: ${theme.font.weights[700]};
    font-size: ${theme.font.sizes.xl};
    border-radius: ${theme.border.md};
    background-color: ${theme.colors.secondary};
  `};
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  max-width: 300px;
  ${({ theme }) => css`
    background: ${theme.colors["black-02"]};
    font-size: ${theme.font.sizes.lg};
    color: ${theme.colors["text-white"]};
    padding: ${theme.spacings.sm} ${theme.spacings.lg};
    border-radius: ${theme.border.xs};
    ::placeholder {
      color: ${theme.colors["text-contrast-low"]};
    }
  `}
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 88px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 219px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors["text-white"]};
    font-size: ${theme.font.sizes.xx};
  `}
`;
