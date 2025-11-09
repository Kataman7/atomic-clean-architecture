import React from 'react';
import styled from 'styled-components';
import AtmHeading from '../atoms/AtmHeading';

const ClockContainer = styled.div`
  text-align: center;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MolFooterClock = ({ timeTitle, clockId = "clock" }) => {
  return (
    <ClockContainer>
      <AtmHeading level={3}>{timeTitle}</AtmHeading>
      <AtmHeading level={3} id={clockId}>--:--:--</AtmHeading>
    </ClockContainer>
  );
};

export default MolFooterClock;