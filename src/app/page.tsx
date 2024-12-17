"use client";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "@/pages/start-page";
import Racing from "@/pages/racing";
import History from "@/pages/history";
import { useState } from "react";
import Team from "@/pages/team";
import Contact from "@/pages/contact";

import { Events } from "@/data/events";
import Admin from "@/pages/admin";
import News from "@/pages/news/news";

function page() {
  const [language, setLanguage] = useState<"en" | "ro">("en");
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <StartPage
                selectLanguage={(value) => {
                  setLanguage(value);
                }}
                selectedLanguage={language}
              />
            }
          />
          <Route
            path="/racing"
            element={
              <Racing
                events={Events}
                selectLanguage={(value) => {
                  setLanguage(value);
                }}
                selectedLanguage={language}
              />
            }
          />
          <Route
            path="/history"
            element={
              <History
                selectLanguage={(value) => {
                  setLanguage(value);
                }}
                selectedLanguage={language}
              />
            }
          />
          <Route
            path="/team"
            element={
              <Team
                selectLanguage={(value) => {
                  setLanguage(value);
                }}
                selectedLanguage={language}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                selectLanguage={(value) => {
                  setLanguage(value);
                }}
                selectedLanguage={language}
              />
            }
          />
          <Route
            path="/news"
            element={
              <News
                selectLanguage={(value) => {
                  setLanguage(value);
                }}
                selectedLanguage={language}
              />
            }
          />
          <Route
            path="/admin"
            element={
              <Admin
                selectLanguage={(value) => {
                  setLanguage(value);
                }}
                selectedLanguage={language}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default page;
