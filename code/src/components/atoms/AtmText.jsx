import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  line-height: 19px;
  text-align: justify;
  margin-bottom: 15px;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.colors.primary};
`;

const StyledListItem = styled.li`
  font-size: ${props => props.theme.fontSize.small};
  line-height: 19px;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.colors.primary};
`;

const AtmText = ({ as = 'p', children, ...props }) => {
  if (as === 'li') {
    return <StyledListItem {...props}>{children}</StyledListItem>;
  }
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
};

export default AtmText;