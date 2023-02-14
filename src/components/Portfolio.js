import React from "react";
import Project from "./Project";
import hikePlannerImg from "../images/screenshot1.jpg";
import weatherDashboardImg from "../images/weather-dashboard-screenshot.png";
import amerinotesImg from "../images/amerinotes-screenshot.PNG";

const projects = [
  {
    id: 1,
    name: "Hike Planner",
    thumbnail: hikePlannerImg,
    repo: "https://github.com/TGray95/hike-planner",
    description:
      "An application to help find hiking locations and weather conditions using OpenWeather and National Park Service APIs",
    deploy: "https://tgray95.github.io/hike-planner/"
  },
  {
    id: 2,
    name: "5 Day Forecast",
    thumbnail: weatherDashboardImg,
    repo: "https://github.com/TGray95/weather-forecast-dashboard",
    description:
      "A weather forecast dashboard that allows the user to view the five-day forecast for any chosen city.",
    deploy: "https://tgray95.github.io/weather-forecast-dashboard/"
  },
  {
    id: 3,
    name: "Amerinotes",
    thumbnail: amerinotesImg,
    repo: "https://github.com/TGray95/amerinotes-blog",
    description:
      "A simple travel blog that enables users to share comments on their trips on a state-by-state basis.",
  },
];
function Portfolio() {
  return <Project projects={projects} />;
}

export default Portfolio;
