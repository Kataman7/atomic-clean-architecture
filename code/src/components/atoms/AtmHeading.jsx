import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-weight: bolder;
  font-size: ${props => props.theme.fontSize.xxl};
  font-family: ${props => props.theme.fontFamily};
`;

const StyledH2 = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSize.xl};
  font-family: ${props => props.theme.fontFamily};
`;

const StyledH3 = styled.h3`
  font-style: italic;
  font-weight: lighter;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fontFamily};
`;

const StyledH4 = styled.h4`
  font-weight: bolder;
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fontFamily};
`;

const StyledH5 = styled.h5`
  font-style: italic;
  font-weight: lighter;
  color: ${props => props.theme.colors.secondary};
  font-size: 9px;
  text-align: right;
  font-family: ${props => props.theme.fontFamily};
`;

const AtmHeading = ({ level = 1, children, ...props }) => {
  switch (level) {
    case 1:
      return <StyledH1 {...props}>{children}</StyledH1>;
    case 2:
      return <StyledH2 {...props}>{children}</StyledH2>;
    case 3:
      return <StyledH3 {...props}>{children}</StyledH3>;
    case 4:
      return <StyledH4 {...props}>{children}</StyledH4>;
    case 5:
      return <StyledH5 {...props}>{children}</StyledH5>;
    default:
      return <StyledH1 {...props}>{children}</StyledH1>;
  }
};

export default AtmHeading;