import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

/** Data */
import membersEs from "data/members";
import membersEn from "data/members_en";

const members = {
  es: membersEs,
  en: membersEn,
}

const Felicitacion = styled.img`
  width: 100%;
`;

const DirectorsContainer = styled.div`
  width: calc(100% - 180px);
  margin: auto;
`;

const SectionTitle = styled.h2`
  margin-bottom: 0px;
`;

const SectionTitleBorder = styled.div`
  width: 30px;
  height: 5px;
  background-color: ${({theme}) => theme.colors.main_color};
  margin-bottom: 15px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
`;

const DirectorsCard = styled.div`
  position: relative;
  width: ${({big}) => (big) ? '400px' : '200px'};
  min-height: 75px;
  cursor: pointer;
  margin: 5px;
  background-color: #FFFFFF;
`;

const DirectorsImage = styled.div`
  width: 200px;
  height: 300px;
  background-image: url(/assets/images/${({image}) => image});
  background-repeat: no-repeat;
  background-size: cover;
`;

const DirectorsText = styled.div`
  display: none;
  position: absolute;
  z-index: 10;
  background: white;
  margin-top: 4px;
  width: 400px;
  left: -100px;
  opacity: 0.95;
  padding: 5px;
  animation: fadein 1s;
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    width: calc(100% + 150px);
    left: -75px;
  }
`;

const DirectorsLine = styled.p`
  margin: 4px;
  font-size: 14px;
  padding-left: ${({padding}) => (padding * 10)}px;
`;

const DirectorsInfo = styled.div`
  padding: 5px;
  text-align: left;
`;

const DirectorsName = styled.p`
  font-size: 16px;
  margin: 0px 5px !important;
`;

const DirectorsPosition = styled.p`
  color: #666;
  margin: 0px 5px !important;
  font-size: 12px;
  font-weight: 100;
`;

function showText(e, state) {
  const directorsText = e.currentTarget.querySelector('#director-text');
  if (directorsText) directorsText.style.display = (state) ? 'block': 'none';
}

function printText(description, padding = 0) {
  return description ? (
    description.map((__html, index) => (
      (typeof __html === 'object') ? printText(__html, padding + 1) : (<DirectorsLine padding={padding} key={index} dangerouslySetInnerHTML={{ __html }}></DirectorsLine>)
    ))
  ) : null;
}

function HomeContainer({ match }) {
  const lang = match.params.lang === 'en' ? 'en' : 'es';
  const title = lang === 'es' ? 'Os presentamos la composición del nuevo CNA' : 'We introduce you the new CNA composition';
  return (
    <DirectorsContainer id="cna-directors-container">
      {lang === 'es' ? (<Felicitacion src="/assets/images/felicitacion.jpg" alt="Felicitación CNA" />) : ''}
      <h1>{title}</h1>
      {
        members[lang].map(section => (
          <div key={section.title}>
            <SectionTitle>{section.title}</SectionTitle>
            <SectionTitleBorder />
            <CardContainer>
              {
                section.members.map(director => (
                  <DirectorsCard
                    key={director.name}
                    className="general-shadow"
                    big={!(director.picture)}
                    onMouseEnter={e => showText(e, true)}
                    onMouseLeave={e => showText(e, false)}>
                    {director.picture ? (<DirectorsImage image={director.picture} />) : ''}
                    {director.text ? (
                      <DirectorsText id="director-text" className="general-shadow">
                        <DirectorsName><b>{director.name}</b></DirectorsName>
                        <DirectorsPosition>{director.position}</DirectorsPosition>
                        {printText(director.text)}
                      </DirectorsText>
                    ) : ''}
                    <DirectorsInfo>
                      <DirectorsName>{director.name}</DirectorsName>
                      <DirectorsPosition>{director.position}</DirectorsPosition>
                    </DirectorsInfo>
                  </DirectorsCard>
                ))
              }
            </CardContainer>
          </div>
        ))
      }
    </DirectorsContainer>
  )
}

export default withRouter(HomeContainer);