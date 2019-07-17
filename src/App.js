import React from "react";
import NavBar from "./components/navbar/NavBar";
import ProjectList from "./components/project_list/ProjectList";
import FeedbackList from "./components/feedback_list/FeedbackList";
import GraphicCard from "./components/graphic_card/GraphicCard";
import TeamList from "./components/team_list/TeamList";

import team_logo from "./image/Boostrap_logo.svg";

import Event from "./model/event";
import Project from "./model/project";

import "./app.css";

function App() {
  const events = [
    new Event(
      0,
      "https://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222",
      "a Discontent user will be",
      "of new projects",
      "high force grid day mission, the design",
      "",
      "2 hours ago"
    ),
    new Event(
      1,
      "https://www.nunuoropesa.com/wp-content/uploads/2018/03/profile-img-1.jpg",
      "Eva in",
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
      "2 weeks ago"
    ),
    new Event(
      3,
      "https://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222",
      "in",
      "of new projects",
      "high force grid day mission, the design",
      "interation June",
      "6 weeks ago"
    ),
    new Event(
      4,
      "https://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222",
      "in",
      "of new projects",
      "high force grid day mission, the design",
      "interation June",
      "6 months ago"
    ),
    new Event(
      5,
      "https://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222",
      "in",
      "of new projects",
      "high force grid day mission, the design",
      "",
      "a year ago"
    )
  ];

  const ongoingProjects = [
    new Project(
      0,
      team_logo,
      "bootstrap",
      "Hope is a good thing, maybe the best, good things will not die",
      "the whole group",
      "2 years ago"
    ),
    new Project(
      2,
      "https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png",
      "React",
      "Hope is a good thing, maybe the best, good things will not die",
      "the whole group",
      "2 years ago"
    ),
    new Project(
      3,
      team_logo,
      "bootstrap",
      "Hope is a good thing, maybe the best, good things will not die",
      "the whole group",
      "2 years ago"
    ),
    new Project(
      4,
      team_logo,
      "bootstrap",
      "Hope is a good thing, maybe the best, good things will not die",
      "the whole group",
      "2 years ago"
    ),
    new Project(
      5,
      team_logo,
      "bootstrap",
      "Hope is a good thing, maybe the best, good things will not die",
      "the whole group",
      "2 years ago"
    ),
    new Project(
      6,
      team_logo,
      "bootstrap",
      "Hope is a good thing, maybe the best, good things will not die",
      "the whole group",
      "2 years ago"
    )
  ];

  return (
    <>
      <NavBar />
      <div className="dashboard-container">
        <div className="left-panel">
          <ProjectList projectList={ongoingProjects} />
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
