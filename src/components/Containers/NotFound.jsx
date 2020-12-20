import React from "react";
import styled from "styled-components";

function NotFound({ title = "404", subtitle = "Página no encontrada" }) {
  const Container = styled.div`
    position: relative;
    height: 90%;
  `;
  const Content = styled.div`
    position: absolute;
    left: 50%;
    top: 200px;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    max-width: 520px;
    width: 100%;
    text-align: center;
  `;

  const Title = styled.h1`
    font-size: 86px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 8px;
    color: #151515;
  `;

  const SubTitle = styled.h2`
    font-size: 26px;
    margin: 0;
    font-weight: 700;
    color: #151515;
  `;
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
    </Container>
  )
}

export default NotFound;