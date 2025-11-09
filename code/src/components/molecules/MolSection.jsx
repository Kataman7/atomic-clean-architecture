import styled from 'styled-components';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.large};
  margin-bottom: ${props => props.theme.spacing.section};
  max-width: 1000px;
  width: 100%;
  
  /* Ensure all children maintain consistent width */
  > * {
    width: 100%;
  }
`;

const MolSection = ({ children, ...props }) => {
  return (
    <SectionContainer {...props}>
      {children}
    </SectionContainer>
  );
};

export default MolSection;