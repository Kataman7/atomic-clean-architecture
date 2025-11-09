import React from 'react';
import MolTwoColumn from './MolTwoColumn';
import AtmHeading from '../atoms/AtmHeading';
import AtmText from '../atoms/AtmText';
import AtmButton from '../atoms/AtmButton';
import { useTranslation } from '../../i18n/LanguageContext';
import styled from 'styled-components';

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
  align-items: center;
  gap: 10px;
`;

const MolProjectsList = () => {
  const { t } = useTranslation();

  const projects = [
    {
      startDate: "Avr 2025",
      endDate: "Juin 2025",
      titleKey: "projects.veryBadSplit.title",
      descriptionKey: "projects.veryBadSplit.description",
      projectUrl: "projets/very-bad-split/"
    },
    {
      startDate: "Avr 2025",
      endDate: "Juin 2025",
      titleKey: "projects.skull.title",
      descriptionKey: "projects.skull.description",
      projectUrl: "projets/skull/"
    },
    {
      startDate: "Jan 2025",
      endDate: "Mar 2025",
      titleKey: "projects.smileWeb.title",
      descriptionKey: "projects.smileWeb.description",
      projectUrl: "projets/smile-web/"
    },
    {
      startDate: "Jan 2025",
      endDate: null,
      titleKey: "projects.silentOrBoom.title",
      descriptionKey: "projects.silentOrBoom.description",
      projectUrl: "projets/silent-or-boom/"
    },
    {
      startDate: "Sept 2024",
      endDate: "Dec 2024",
      titleKey: "projects.sae3a.title",
      descriptionKey: "projects.sae3a.description",
      projectUrl: "projets/sae-3a/"
    },
    {
      startDate: "Aug 2024",
      endDate: "Sept 2024",
      titleKey: "projects.terrariaLike.title",
      descriptionKey: "projects.terrariaLike.description",
      projectUrl: "projets/terraria-like/"
    },
    {
      startDate: "May 2024",
      endDate: "Jun 2024",
      titleKey: "projects.saeTrain.title",
      descriptionKey: "projects.saeTrain.description",
      projectUrl: "projets/sae-train/"
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
                  <span>-</span>
                  <AtmHeading level={3}>{project.endDate}</AtmHeading>
                </DateRange>
              ) : (
                <AtmHeading level={3}>{project.startDate}</AtmHeading>
              )}
            </ProjectDate>
          }
          right={
            <>
              <AtmHeading level={4}>{t(project.titleKey)}</AtmHeading>
              <AtmText>{t(project.descriptionKey)}</AtmText>
              <AtmButton href={project.projectUrl}>{t('projects.viewProject')}</AtmButton>
            </>
          }
        />
      ))}
    </ProjectsContainer>
  );
};

export default MolProjectsList;