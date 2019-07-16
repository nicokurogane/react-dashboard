import React from "react";
import NavBar from "./components/navbar/NavBar";
import ProjectList from "./components/project_list/ProjectList";
import FeedbackList from "./components/feedback_list/FeedbackList";
import GraphicCard from "./components/graphic_card/GraphicCard";
import TeamList from "./components/team_list/TeamList";

import Event from "./model/event";

import "./app.css";

function App() {
  const events = [
    new Event(
      0,
      "https://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222",
      "in",
      "of new projects",
      "high force grid day mission, the design",
      "",
      "2 days ago"
    ),
    new Event(
      1,
      "https://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222",
      "in",
      "of new projects",
      "high force grid day mission, the design",
      "interation June",
      "2 days ago"
    ),
    new Event(
      2,
      "https://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222",
      "in",
      "of new projects",
      "high force grid day mission, the design",
      "interation June",
      "2 days ago"
    ),
    new Event(
      3,
      "https://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222",
      "in",
      "of new projects",
      "high force grid day mission, the design",
      "interation June",
      "2 days ago"
    ),
    new Event(
      4,
      "https://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222",
      "in",
      "of new projects",
      "high force grid day mission, the design",
      "interation June",
      "2 days ago"
    ),
    new Event(
      5,
      "https://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222",
      "in",
      "of new projects",
      "high force grid day mission, the design",
      "interation June",
      "2 days ago"
    )
  ];

  return (
    <>
      <NavBar />
      <div className="dashboard-container">
        <div className="left-panel">
          <ProjectList />
          <FeedbackList feedbackList={events} />
        </div>
        <div className="right-panel">
          <GraphicCard />
          <TeamList />
        </div>
      </div>
    </>
  );
}

export default App;
