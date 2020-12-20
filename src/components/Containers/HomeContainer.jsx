import React from "react";
import styled from "styled-components";

/** Data */
import members from "data/members";

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
  width: 200px;
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

function HomeContainer() {
  return (
    <DirectorsContainer id="cna-directors-container">
      <h1>Composición CNA</h1>
      {
        members.map(section => (
          <div key={section.title}>
            <SectionTitle>{section.title}</SectionTitle>
            <SectionTitleBorder />
            <CardContainer>
              {
                section.members.map(director => (
                  <DirectorsCard
                    key={director.name}
                    className="general-shadow"
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

export default HomeContainer;