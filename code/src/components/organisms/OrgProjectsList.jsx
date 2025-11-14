import React from 'react';
import MolTwoColumn from '../molecules/MolTwoColumn';
import AtmHeading from '../atoms/AtmHeading';
import AtmText from '../atoms/AtmText';
import AtmButtonLink from '../atoms/AtmButtonLink';
import { useTranslation } from '../../i18n/LanguageContext';
import styled from 'styled-components';
import AtmSimpleLink from '../atoms/AtmSimpleLink';

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.large || '1rem'};
`;

const ProjectDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DateRange = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OrgProjectsList = () => {
  const { t } = useTranslation();

  const projects = [
    {
      projectId: 0,
      startDate: "Avr 2025",
      endDate: "Juin 2025",
      titleKey: "projects.veryBadSplit.title",
      descriptionKey: "projects.veryBadSplit.description"
    },
    {
      projectId: 1,
      startDate: "Avr 2025",
      endDate: "Juin 2025",
      titleKey: "projects.skull.title",
      descriptionKey: "projects.skull.description"
    },
    {
      projectId: 2,
      startDate: "Jan 2025",
      endDate: "Mar 2025",
      titleKey: "projects.smileWeb.title",
      descriptionKey: "projects.smileWeb.description"
    },
    {
      projectId: 3,
      startDate: "Jan 2025",
      endDate: null,
      titleKey: "projects.silentOrBoom.title",
      descriptionKey: "projects.silentOrBoom.description"
    },
    {
      projectId: 4,
      startDate: "Sept 2024",
      endDate: "Dec 2024",
      titleKey: "projects.sae3a.title",
      descriptionKey: "projects.sae3a.description"
    },
    {
      projectId: 5,
      startDate: "Aug 2024",
      endDate: "Sept 2024",
      titleKey: "projects.terrariaLike.title",
      descriptionKey: "projects.terrariaLike.description"
    },
    {
      projectId: 6,
      startDate: "May 2024",
      endDate: "Jun 2024",
      titleKey: "projects.saeTrain.title",
      descriptionKey: "projects.saeTrain.description"
    }
  ];

  return (
    <ProjectsContainer>
      {projects.map((project, index) => (
        <MolTwoColumn
          key={index}
          leftWidth="20%"
          left={
            <ProjectDate>
              {project.endDate ? (
                <DateRange>
                  <AtmHeading level={3}>{project.startDate}</AtmHeading>
                  <AtmHeading level={3}>{project.endDate}</AtmHeading>
                </DateRange>
              ) : (
                <AtmHeading level={3}>{project.startDate}</AtmHeading>
              )}
            </ProjectDate>
          }
          right={
            <>
              <AtmHeading level={4}>
                <AtmSimpleLink to={`/project/${project.projectId}`}>
                  {t(project.titleKey)}
                </AtmSimpleLink>
              </AtmHeading>
              <AtmText>{t(project.descriptionKey)}</AtmText>
            </>
          }
        />
      ))}
    </ProjectsContainer>
  );
};

export default OrgProjectsList;