import styled from 'styled-components';

const StyledLink = styled.a`
  padding: ${props => props.theme.spacing.small};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.normal};
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: ${props => props.theme.border.normal} solid ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.boxShadow.button};
  font-family: ${props => props.theme.fontFamily};
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    box-shadow: ${props => props.theme.boxShadow.buttonHover};
    transform: translate(4px, 4px);
    text-decoration: none;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

const AtmButtonLink = ({ children, ...props }) => {
  return (
    <StyledLink {...props}>
      {children}
    </StyledLink>
  );
};

export default AtmButtonLink;