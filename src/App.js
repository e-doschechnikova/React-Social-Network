import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Setting from "./components/Setting/Setting";

const App = (props) => {
  let SomeElement = () => <Dialogs state={props.state.dialogsPage} />;
  let SomeProfile = () => <Profile state={props.state.profilePage} />;
  let SomeNews = () => <News />;
  let SomeMusic = () => <Music />;
  let SomeSetting = () => <Setting />;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={SomeElement()} />
            <Route path="/profile" element={SomeProfile()} />
            <Route path="/news" element={SomeNews()} />
            <Route path="/music" element={SomeMusic()} />
            <Route path="/setting" element={SomeSetting()} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
