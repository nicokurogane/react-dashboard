import React from "react";
import NavBar from "./components/navbar/NavBar";
import ProjectList from "./components/project_list/ProjectList";
import FeedbackList from "./components/feedback_list/FeedbackList";
import GraphicCard from "./components/graphic_card/GraphicCard";
import TeamList from "./components/team_list/TeamList";

import team_logo from "./image/Applaudo_logo.png";

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
      "https://vignette.wikia.nocookie.net/es.starwars/images/a/ac/Republic_Emblem_%28unification_wars%29.svg/revision/latest?cb=20081202012549",
      "The empire will",
      "of the",
      "start desintegration",
      "Rebel Scum",
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
      "My god! will",
      "",
      "throw some heat before evening,",
      "so get ready",
      "a year ago"
    )
  ];

  const ongoingProjects = [
    new Project(
      0,
      team_logo,
      "bootstrap",
      "Hope is a good thing, maybe the best, good things will not die",
      "the boostrap group",
      "2 hours ago"
    ),
    new Project(
      2,
      "https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png",
      "React",
      "Hope is a good thing, maybe the best, good things will not die",
      "the react gang",
      "2 years ago"
    ),
    new Project(
      3,
      "https://cdn.worldvectorlogo.com/logos/angular-icon.svg",
      "angular",
      "Heroes never die!, so try to remember them everyday of the year!",
      "Angular Dev Team",
      "Few minutes ago"
    ),
    new Project(
      4,
      "https://lh3.googleusercontent.com/xV6gK4t0SF7AW4LK3slUzj4WIY1SfzRtq-zFTygFSO9wg-JXTJImEi34rrxhsRutXQ=s180",
      "Alipay",
      "Write here the gangstest song you've ever heard (P.I.M.P -  50 Cents)",
      "the familiy kingdom",
      "2 years ago"
    ),
    new Project(
      5,
      "https://camo.githubusercontent.com/a717488dab48dea50d4d2fb3fe8977b0a4f29147/68747470733a2f2f7a6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f77496a4d446e7372446f50506349562e706e67",
      "Ant design",
      "Hope is a good thing, maybe the best, good things will not die",
      "the whole group",
      "7 years ago"
    ),
    new Project(
      6,
      "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      "nodeJS",
      "Hope is a good thing, maybe the best, good things will not die",
      "the whole group",
      "3 weeks ago"
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
