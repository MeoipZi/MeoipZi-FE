import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import MainHeader from "./mainpageUI/MainHeader";
import MainPgTab from "./mainpageUI/MainPgTab";
import CommunityTab from "./CommunityTab";
import WritePost from "../pages/WritePost";
import writeButton from "../images/WritePostB.png";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
  currentPath: string;
  totalElements: number; // Add totalElements prop
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 80px; // Add padding bottom for NavBar
`;

const StyleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative; // Use relative instead of sticky
  top: 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0; // No margin needed to ensure it starts at the top
  overflow-y: auto; // Add this to enable vertical scrolling if needed
  max-height: calc(100vh - 200px); // Adjust based on header and other components height
`;

const WriteButton = styled.img`
  width: 80px;
  position: fixed;
  left: 70%;
  transform: translateX(-50%);
  top: 70%;
  cursor: pointer;
  z-index: 1000; // Ensure button is on top
`;

function ComLayout(props: LayoutProps): JSX.Element {
  const { currentPath, totalElements } = props;
  const location = useLocation();

  return (
    <Container>
      <MainHeader />
      <MainPgTab />
      <CommunityTab />
      <StyleWrap id="wrap">
        <ContentWrapper>
          <main>{props.children}</main>
        </ContentWrapper>
      </StyleWrap>
      {location.pathname === `${currentPath}/WritePost` ? (
        <WritePost currentPath={currentPath} />
      ) : (
        <Link to={`${currentPath}/WritePost`}>
          <WriteButton src={writeButton} alt="Write Post" />
        </Link>
      )}
      <Routes>
        <Route
          path={`${currentPath}/WritePost`}
          element={<WritePost currentPath={currentPath} />}
        />
      </Routes>
      <NavBar />
    </Container>
  );
}

export default ComLayout;
