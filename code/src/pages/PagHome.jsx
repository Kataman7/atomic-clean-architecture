import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../i18n/LanguageContext';
import MolSection from '../components/molecules/MolSection';
import AtmHeading from '../components/atoms/AtmHeading';
import AtmText from '../components/atoms/AtmText';
import AtmButtonLink from '../components/atoms/AtmButtonLink';
import MolNavBar from '../components/molecules/MolNavBar';
import MolTwoColumn from '../components/molecules/MolTwoColumn';
import MolSkills from '../components/molecules/MolSkills';
import AtmTable from '../components/atoms/AtmTable';
import MolContactForm from '../components/molecules/MolContactForm';
import AtmQuote from '../components/atoms/AtmQuote';
import MolProjectsList from '../components/molecules/MolProjectsList';
import MolFooterClock from '../components/molecules/MolFooterClock';
import AtmSimpleLink from '../components/atoms/AtmSimpleLink';

const Main = styled.main`
  margin: auto;
`;

const PagHome = () => {
  const { t } = useTranslation();

  // Skills data for programming languages
  const programmingSkills = [
    { nameKey: 'languages.csharp', progress: 88 },
    { nameKey: 'languages.python', progress: 60 },
    { nameKey: 'languages.java', progress: 96 },
    { nameKey: 'languages.c', progress: 80 },
    { nameKey: 'languages.sql', progress: 75 },
    { nameKey: 'languages.javascript', progress: 86 },
    { nameKey: 'languages.php', progress: 85 },
    { nameKey: 'languages.lua', progress: 65 }
  ];

  return (
    <Main>
      {/* Links Section */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('links.title')}</AtmHeading>}
          right={
            <MolNavBar>
              <AtmButtonLink href="https://github.com/Kataman7" target="_blank">
                {t('links.github')}
              </AtmButtonLink>
              <AtmButtonLink href="https://www.linkedin.com/in/antonin-chabaud-pech" target="_blank">
                {t('links.linkedin')}
              </AtmButtonLink>
              <AtmButtonLink href="resources/CV.pdf" target="_blank">
                {t('links.cv')}
              </AtmButtonLink>
              <AtmButtonLink href="mailto:antonin.chabaud-pech@etu.umontpellier.fr">
                {t('links.email')}
              </AtmButtonLink>
            </MolNavBar>
          }
        />
      </MolSection>

      {/* About Section */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('about.title')}</AtmHeading>}
          right={<AtmText>{t('about.content')}</AtmText>}
        />
      </MolSection>

      {/* Education Section */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('education.title')}</AtmHeading>}
          right={
            <MolTwoColumn 
              leftWidth="50%"
              left={
                <>
                  <AtmHeading level={4}>{t('education.but.title')}</AtmHeading>
                  <AtmText>{t('education.but.school')}</AtmText>
                  <AtmText>{t('education.but.year')}</AtmText>
                </>
              }
              right={
                <>
                  <AtmHeading level={4}>{t('education.bac.title')}</AtmHeading>
                  <AtmText>{t('education.bac.specialty')}</AtmText>
                  <AtmText>{t('education.bac.year')}</AtmText>
                </>
              }
            />
          }
        />
      </MolSection>

      {/* Expertise Section */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('expertise.title')}</AtmHeading>}
          right={
            <>
              <AtmText>{t('expertise.content1')}</AtmText>
              <AtmText>{t('expertise.content2')}</AtmText>
              <AtmText>{t('expertise.content3')}</AtmText>
            </>
          }
        />
      </MolSection>

      {/* Programming Languages Section */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('languages.title')}</AtmHeading>}
          right={
            <MolSkills 
              skills={programmingSkills}
            />
          }
        />
      </MolSection>

      {/* Experience Section */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('experience.title')}</AtmHeading>}
          right={
            <>
              <AtmHeading level={4}>
                <AtmSimpleLink href="https://www.picokeebs.fr" target="_blank">
                  PicoKeebs.fr
                </AtmSimpleLink>
              </AtmHeading>
              <AtmText>{t('experience.picokeebs.content')}</AtmText>

              <AtmHeading level={4}>
                <AtmSimpleLink href="https://www.c4w.com" target="_blank">
                  C4W.com
                </AtmSimpleLink>
              </AtmHeading>
              <AtmText>{t('experience.c4w.content')}</AtmText>
            </>
          }
        />
      </MolSection>

      {/* Learning Section */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('learning.title')}</AtmHeading>}
          right={
            <>
              <AtmHeading level={4}>{t('learning.overview.title')}</AtmHeading>
              <AtmText>{t('learning.overview.content1')}</AtmText>
              <AtmText>{t('learning.overview.content2')}</AtmText>
            </>
          }
        />
      </MolSection>

      {/* Develop Skills */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('develop.title')}</AtmHeading>}
          right={
            <>
              <AtmHeading level={4}>{t('develop.subtitle')}</AtmHeading>
              <AtmTable>
                <AtmTable.Body>
                  <tr>
                    <AtmTable.Td><strong>CL1</strong></AtmTable.Td>
                    <AtmTable.Td>{t('develop.cl1')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL2</strong></AtmTable.Td>
                    <AtmTable.Td>{t('develop.cl2')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL3</strong></AtmTable.Td>
                    <AtmTable.Td>{t('develop.cl3')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL4</strong></AtmTable.Td>
                    <AtmTable.Td>{t('develop.cl4')}</AtmTable.Td>
                  </tr>
                </AtmTable.Body>
              </AtmTable>
            </>
          }
        />
      </MolSection>

      {/* Optimize Skills */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('optimize.title')}</AtmHeading>}
          right={
            <>
              <AtmHeading level={4}>{t('optimize.subtitle')}</AtmHeading>
              <AtmTable>
                <AtmTable.Body>
                  <tr>
                    <AtmTable.Td><strong>CL1</strong></AtmTable.Td>
                    <AtmTable.Td>{t('optimize.cl1')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL2</strong></AtmTable.Td>
                    <AtmTable.Td>{t('optimize.cl2')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL3</strong></AtmTable.Td>
                    <AtmTable.Td>{t('optimize.cl3')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL4</strong></AtmTable.Td>
                    <AtmTable.Td>{t('optimize.cl4')}</AtmTable.Td>
                  </tr>
                </AtmTable.Body>
              </AtmTable>
            </>
          }
        />
      </MolSection>

      {/* Verify Skills */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('verify.title')}</AtmHeading>}
          right={
            <>
              <AtmHeading level={4}>{t('verify.subtitle')}</AtmHeading>
              <AtmTable>
                <AtmTable.Body>
                  <tr>
                    <AtmTable.Td><strong>CL1</strong></AtmTable.Td>
                    <AtmTable.Td>{t('verify.cl1')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL2</strong></AtmTable.Td>
                    <AtmTable.Td>{t('verify.cl2')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL3</strong></AtmTable.Td>
                    <AtmTable.Td>{t('verify.cl3')}</AtmTable.Td>
                  </tr>
                  <tr>
                    <AtmTable.Td><strong>CL4</strong></AtmTable.Td>
                    <AtmTable.Td>{t('verify.cl4')}</AtmTable.Td>
                  </tr>
                </AtmTable.Body>
              </AtmTable>
              <AtmText>{t('verify.conclusion')}</AtmText>
            </>
          }
        />
      </MolSection>

      {/* Projects Section */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('projects.title')}</AtmHeading>}
          right={<AtmText>{t('projects.intro')}</AtmText>}
        />
        <MolProjectsList />
      </MolSection>

      {/* Hobbies Section */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('hobbies.title')}</AtmHeading>}
          right={<AtmText>{t('hobbies.list')}</AtmText>}
        />
      </MolSection>

      {/* Contact Section */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('contact.title')}</AtmHeading>}
          right={
            <>
              <AtmText>
                {t('contact.intro')} <strong>
                  <AtmSimpleLink href="mailto:antonin.chabaud-pech@etu.umontpellier.fr">
                    antonin.chabaud-pech@etu.umontpellier.fr
                  </AtmSimpleLink>
                </strong>
              </AtmText>
              <AtmText>{t('contact.alternative')}</AtmText>
              <MolContactForm />
            </>
          }
        />
      </MolSection>

      {/* Quotes Section */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('quotes.title')}</AtmHeading>}
          right={<AtmQuote />}
        />
      </MolSection>

      {/* Sign-off Section */}
      <MolSection>
        <MolTwoColumn
          leftWidth="20%"
          left={<AtmHeading level={3}>{t('signoff.title')}</AtmHeading>}
          right={<AtmText>{t('signoff.content')}</AtmText>}
        />
      </MolSection>

      {/* Footer/Clock Section */}
      <MolFooterClock timeTitle={t('footer.timeInSete')} />
    </Main>
  );
};

export default PagHome;