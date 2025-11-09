import styled from 'styled-components';

const TwoColumnContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0;
`;

const LeftColumn = styled.div`
  flex: 0 0 ${props => props.leftWidth || '20%'};
  padding: 8px 12px;
`;

const RightColumn = styled.div`
  flex: 1;
  padding: 8px 12px;
`;

const MolTwoColumn = ({ left, right, leftWidth = '20%' }) => {
  return (
    <TwoColumnContainer>
      <LeftColumn leftWidth={leftWidth}>{left}</LeftColumn>
      <RightColumn>{right}</RightColumn>
    </TwoColumnContainer>
  );
};

export default MolTwoColumn;