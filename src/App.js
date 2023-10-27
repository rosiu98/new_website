import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { SkeletonTheme } from "react-loading-skeleton";
import ProjectsPage from "./Pages/ProjectsPage";
import EmailPreviewPage from "./Pages/EmailPreviewPage";
import CvPage from "./Pages/CvPage";

function App() {

  return (
    <>
    <SkeletonTheme baseColor="#d7d7d7" highlightColor="#e7e7e7">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/emails/:id" element={<EmailPreviewPage />} />
          <Route path='/cv' element={<CvPage />} />
        </Routes>
      </Router>
    </SkeletonTheme>
    </>
  );
}

export default App;
