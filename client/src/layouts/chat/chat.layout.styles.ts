import styled, { css } from "styled-components";

type MessageProps = {
  usernameIsAuthor: boolean;
};

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({ theme }) => css`
    background-color: ${theme.colors["black-01"]};
    @media (max-width: ${theme.grid["container-lg"]}) {
      padding: 10px ${theme.spacings["md"]};
    }
  `};
`;

export const ContainerChat = styled.div`
  height: 100%;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 3px 6px 4px 0 #00000025;
  overflow: auto;
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid["container-md"]};
    border-radius: ${theme.border.md};
    background-color: ${theme.colors.primary};
  `};
`;

export const ChatHeader = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.colors["text-white"]};
    background-color: ${theme.colors.secondary};
  `}
`;

export const ChatBody = styled.div`
  width: 100%;
  height: 100%;
  max-height: 618px;
  padding: 0 10px;
  border: 1px solid #263238;
  position: relative;
  overflow: auto;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const MessagesContainer = styled.div`
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;
export const Message = styled.div<MessageProps>`
  justify-content: ${(props) =>
    props.usernameIsAuthor ? "flex-start" : "flex-end"};
  height: auto;
  padding: 10px;
  display: flex;
`;

export const MessageContent = styled.div<MessageProps>`
  width: auto;
  height: auto;
  min-height: 40px;
  max-width: 250px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.usernameIsAuthor ? "#43a047" : "cornflowerblue"};
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 5px;
  padding: 10px;
  overflow-wrap: break-word;
  word-break: break-word;
  ${({ theme }) => css`
    color: ${theme.colors["white-01"]};
  `}
`;

export const MessageMeta = styled.div<MessageProps>`
  ${(props) =>
    props.usernameIsAuthor ? "margin-left: 5px;" : "margin-right: 5px;"}

  justify-content: ${(props) =>
    props.usernameIsAuthor ? "flex-start" : "flex-end"};

  margin-left: 5px;
  color: ${({ theme }) => theme.colors["text-contrast-low"]};
  display: flex;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xs};
  `}
`;

export const Author = styled.p`
  margin-left: 10px;
  font-weight: bold;
`;

export const ChatFooter = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  margin-bottom: 0;
  height: 40px;
  width: 100%;
`;

export const Input = styled.input`
  height: 100%;
  flex: 85%;
  border: 0;
  padding: 15px;
  border-right: 1px dotted #607d8b;
  outline: none;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
  `}
`;

export const ChatButtonSubmit = styled.button`
  width: 70px;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 5px #000);
  }
`;
