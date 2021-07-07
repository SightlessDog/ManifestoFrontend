import React from "react";
import styled from "styled-components";
import Canvas from "./Canvas";
import man_elyess from "./assets/img/man_elyess.jpg";
import man_dennis from "./assets/img/man_dennis.jpg";
import man_martin from "./assets/img/man_martin.jpg";
import man_nils from "./assets/img/man_nils.jpg";
import man_stepan from "./assets/img/man_stepan.jpg";
import man_pipeline from "./assets/img/man_pipeline.png";
import man_kirche from "./assets/img/man_kirche.png";
import logo_manifesto from "./assets/img/logo_manifesto.png";
import { GlobalStyle } from "./Global";

const Header = styled.div`
  height: 100px;
  width: 100vw;
  background-color: #050e24;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  font-weight: lighter;
`;

const HeaderTitle = styled.div`
  color: #ede9e2;
  font-size: 3rem;
`;

const NavBar = styled.div`
  width: 100vw;
  background-color: #ede9e2;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 5%;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #050e24;
  font-family: "Roboto";
  font-weight: 500;
`;

const PipelineSection = styled.div`
  width: 100vw;
  flex-flow: column wrap;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #ede9e2;
`;

const Pipeline = styled.img`
  margin: 5% 0;
`;

const AboutSection = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-around;
`;

const ProductVision = styled.div`
  background-color: #ede9e2;
  width: 50%;
  flex-flow: col wrap;
  padding: 3%;
  font-family: "Roboto";
  font-weight: bold;
`;

const OurTeam = styled.div`
  background-color: #050e24;
  flex-flow: col wrap;
  padding: 3%;
  font-family: "Roboto";
  font-weight: bold;
`;

const ProductVisionText = styled.div`
  color: #050e24;
  padding: 2%;
`;

const OurTeamText = styled.div`
  color: #ede9e2;
  padding: 2%;
`;

const Images = styled.div`
  flex-flow: row wrap;
  justify-content: space-around;
`;

const MeHolder = styled.img`
  margin-top: 5%;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  padding: 2%;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 40%;
  left: 20%;
`;

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Pipeline src={logo_manifesto} />
      </Header>
      <NavBar>
        <NavItem href="#Surface">SURFACE</NavItem>
        <NavItem href="#Pipeline">PIPELINE</NavItem>
        <NavItem href="#About">ABOUT</NavItem>
      </NavBar>
      <BackgroundImage src={man_kirche} />
      <Canvas />
      <Header id="Pipeline">
        <HeaderTitle>Pipeline</HeaderTitle>
      </Header>
      <PipelineSection>
        <Pipeline src={man_pipeline}></Pipeline>
      </PipelineSection>
      <Header id="About">
        <HeaderTitle>About</HeaderTitle>
      </Header>
      <AboutSection>
        <ProductVision>
          <ProductVisionText>Unsere Produktvision:</ProductVisionText>
          <ProductVisionText>
            Die Projektgruppe soll eine Installation konzipieren und entwickeln,
            welches eine kameragesteuerte Bewegungssensorik unterstützt, wodurch
            die Präsenz von Veranstaltungsbesuchern wahrgenommen, verarbeitet
            und anschließend in Verbindung mit Orgelmusik musikalisch
            wiedergegeben wird. Dieses Projekt wird landesweit an vielen
            verschiedenen Orten gleichzeitig aufgeführt und soll zum Gedenken an
            die NSU Verbrechen beitragen.
          </ProductVisionText>
        </ProductVision>
        <OurTeam>
          <OurTeamText>Unser Team:</OurTeamText>
          <OurTeamText>
            Wir sind ein Team aus Stundenten des Studiengangs Internationale
            Medieninformatik an der Hochschule für Technik und Wirtschaft
            Berlin.
          </OurTeamText>
          <Images>
            <MeHolder src={man_elyess} />
            <MeHolder src={man_dennis} />
            <MeHolder src={man_martin} />
            <MeHolder src={man_stepan} />
            <MeHolder src={man_nils} />
          </Images>
        </OurTeam>
      </AboutSection>
    </>
  );
};

export default Homepage;
