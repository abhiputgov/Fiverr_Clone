import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catcard/catCard";
import ProjectCard from "../../components/projectcard/ProjectCard";
import { cards, projects } from "../../data";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              The best of every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing
            </p>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              The best of every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing
            </p>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              The best of every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing
            </p>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              The best of every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing
            </p>
          </div>
          <div className="item">
            <video controls={true}>
              <source
                src="https://www.youtube.com/watch?v=KI5CnJ9u5ok"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((projects) => (
          <ProjectCard key={projects.id} card={projects} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
