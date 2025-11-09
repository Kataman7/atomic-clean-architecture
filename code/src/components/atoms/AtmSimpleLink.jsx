import styled from 'styled-components';

const StyledSimpleLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: underline;
  font-family: ${props => props.theme.fontFamily};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  &:visited {
    color: ${props => props.theme.colors.primary};
  }
`;

const AtmSimpleLink = ({ children, href, target, ...props }) => {
  return (
    <StyledSimpleLink href={href} target={target} {...props}>
      {children}
    </StyledSimpleLink>
  );
};

export default AtmSimpleLink;