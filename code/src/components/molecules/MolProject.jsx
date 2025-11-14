import React from 'react';
import styled from 'styled-components';
import AtmHeading from '../atoms/AtmHeading';
import AtmText from '../atoms/AtmText';
import AtmButton from '../atoms/AtmButton';
import { useTranslation } from '../../i18n/LanguageContext';
import AtmSimpleLink from '../atoms/AtmSimpleLink';

const ProjectDate = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MolProject = ({ 
  startDate, 
  endDate = null, 
  titleKey, 
  descriptionKey, 
  projectUrl 
}) => {
  const { t } = useTranslation();

  return (
    <>
      <ProjectDate>
        <AtmHeading level={5}>{startDate}</AtmHeading>
        {endDate && (
          <>
            <AtmHeading level={5}>-</AtmHeading>
            <AtmHeading level={5}>{endDate}</AtmHeading>
          </>
        )}
      </ProjectDate>
      <ProjectContent>
        <AtmHeading level={4}>
          <AtmSimpleLink href={projectUrl}>{t(titleKey)}</AtmSimpleLink>
        </AtmHeading>
        coucou
        <AtmText>{t(descriptionKey)}</AtmText>
      </ProjectContent>
    </>
  );
};

export default MolProject;