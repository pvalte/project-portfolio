import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {

  const [projectList] = useState([
    {
      name: 'Vapor',
      link: 'https://vapor-games-2022.herokuapp.com/',
      image: require("../../assets/Vapor-games.JPG"),
      description: 'MERN'
    },
    {
      name: 'Run Buddy',
      link: 'https://pvalte.github.io/RunBuddy/',
      image: require("../../assets/run-buddy.JPG"),
      description: 'HTML, CSS'
    },
    {
      name: 'Melody Nomad',
      link: 'https://kelbach.github.io/melody-nomad/',
      image: require("../../assets/melody-nomad.JPG"),
      description: 'HTML, CSS, Javascript'
    },
    {
      name: 'OkFido',
      link: 'https://ok-fido-fe05c29f1dfd.herokuapp.com/',
      image: require("../../assets/OkFidoPets.jpeg"),
      description: 'Node, Express, Handlebars, SQL'
    },
    {
      name: 'Budget Minder',
      link: 'https://github.com/pvalte/budget-minder/',
      image: require("../../assets/budget-minder.png"),
      description: 'Express, Mongo'
    },
    {
      name: 'All About That Tech',
      link: 'https://morning-tor-75643.herokuapp.com/',
      image: require("../../assets/all-about-that-tech.JPG"),
      description: 'Express, Handlebars, MySQL, Sequalize'
    },
    {
      name: 'Sunny Weather Dashboard',
      link: 'https://pvalte.github.io/Sunny-Weather-Dashboard/',
      image: require("../../assets/sunny-weather.jfif"),
      description: 'APIs, Bootstrap, jQuery'
    }
  ])

  return (
    <section>
      <h1 id="portfolio">Portfolio</h1>
      <div class="work-tiles">
        {projectList.map((currentProject, i) => (
          <Project
            project={currentProject}
          ></Project>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;