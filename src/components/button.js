import styled, { css } from 'styled-components'

const ButtonStyles = css`
  padding: 0.25rem 0.75rem;
  text-decoration: none;
  border-radius: 12px;
  margin: 1rem;
  display: inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  @media (max-width: 960px) {
    margin: 0.5rem;
    text-align: center;
    text-decoration: none;
    padding: 0.25rem 1rem;
  }
  :hover {
    transform: scale(1);
  }
  background-color: ${({ outlined, theme }) => (outlined ? 'none' : theme.colors.link)};
  color: ${({ outlined, theme }) => (outlined ? theme.colors.link : theme.invertedTextColor)};
  border: ${({ outlined, theme }) => (outlined ? `1px solid ${theme.colors.link}` : 'initial')};
`

export const Button = styled.a`
  ${ButtonStyles};
`

export default Button
