import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { useLocation } from "react-router-dom";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

import MainPage from "./pages/MainPage";
import MyPage_like from "./pages/MyPage_like";
import MyPage_post_comment from "./pages/MyPage_post_comment";
import MyPage_post_feed from "./pages/MyPage_post_feed";
import MyPage_post_scrap from "./pages/MyPage_post_scrap";
import BrandCom from "./pages/BrandCom";
import ShopCom from "./pages/ShopCom";
import FreeCom from "./pages/FreeCom";
import WritePost from "./pages/WritePost";


function App() {

  

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  }, []);
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<Search />} />
              <Route path="/MainPage" element={<MainPage />} />
              <Route path ="/mypage/likes" element={<MyPage_like/>} />
              <Route path="/mypage/posts/feeds" element={<MyPage_post_feed />}/>
              <Route path="/mypage/posts/scraps" element={<MyPage_post_scrap />}/>
              <Route path="/mypage/posts/comments" element={<MyPage_post_comment />}/>
              <Route path = "/BrandCommunity/*" element ={<BrandCom currentPath="/BrandCommunity" />} />
              <Route path = "/ShopCommunity/*" element ={<ShopCom currentPath="/ShopCommunity" />} />
              <Route path = "/FreeCommunity/*" element ={<FreeCom currentPath="/FreeCommunity" />} />
              <Route path="/BrandCommunity/WritePost" element={<WritePost currentPath="/BrandCommunity" />}/>
              <Route path="/ShopCommunity/WritePost" element={<WritePost currentPath="/ShopCommunity" />}/>
              <Route path="/FreeCommunity/WritePost" element={<WritePost currentPath="/FreeCommunity" />}/>

              
            </Routes>
          </Router>
        </Container>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

const Container = styled.div`
  display: flex;
  height: calc(var(--vh, 1vh) * 100);
  max-width: 800px;
  justify-content: center;
  margin: auto;
  align-items: center;
  background-color: white;
`;

export default App;
