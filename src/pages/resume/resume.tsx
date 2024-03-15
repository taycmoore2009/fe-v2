import React from 'react';

import { ResumeExperience } from './experience';
import { ResumeSkills } from './skills';
import { ResumeReachMe } from './reachMe';

/*--
To Do:
Turn into network call to DB
--*/
const experiences = [{
  company: "Aurora Solar",
  location: "San Francisco",
  position: "Senior Software Engineer",
  date: "June 2021 - Feb 2024",
  details: "A startup Saas sales company, when I joined there were less than 100 employees, and by time I left, the company grew to over 500. I was the senior engineer on 3 different teams; pricing, services, and vendor.. On each team I took the lead on many new projects from international translation efforts to pricing widgets. Because this was a fast paced environment, changing teams was a common occurrence because new teams were grown within existing teams.",
},{
  company: "Emburse",
  location: "Los Angeles",
  position: "Software Engineer III",
  date: "June 2018 - June 2021",
  details: "Expense management web application similar to SAP Concur, specializing in customizability for enterprise level. On the expenses team, I was responsible for all front end decisions around new and existing features. Projects typically revolved around spending widgets where customers can enter in values for a wide range of categories and calculations to reimbursement expenses would be calculated. Some more complicated projects were the mileage calculator utilizing google maps API, adding VAT where needed without customer input, and penny rounding logic (js rounding issues)",
},{
  company: "Kibo",
  location: "Dallas",
  position: "Senior Front End Developer",
  date: "September 2015 - June 2018",
  details: "eCommerce SaaS, with customers from small mom and pop stores to international brands. On the professional services team, we would handle special clients. My last project before leaving was leading the team on building Ace Hardware’s website.",
},{
  company: "South Moon Under",
  location: "Berlin, MD",
  position: "Web Developer",
  date: "January 2015 - September 2015",
},{
  company: "OzTech Media",
  location: "Salisbury, MD",
  position: "Web Developer",
  date: "February 2013 - January 2015",
}];

const skills = [
  'Javascript/Typescript',
  'React, Backbone, Ember, graphQL',
  'Jest, Cypress, CircleCi , Babel, Docker, AWS',
  'MySQL, postgresSQL, MongoDB',
  'Restful and SOAP experience',
  'Quick learner on everything else'
]

export const Resume = () => {
    return (
      <>
        <div className="resume card">
          <div className="resumeHeader">
            <div className="resumeLeft">
              <h1 className="blue">Tay Moore</h1>
              <p>Transforming dreams into digital reality</p>
            </div>
            <div className="resumeRight">
              <ResumeReachMe />
            </div>
          </div>
          <div className="resumeLeft">
              <ResumeExperience experiences={experiences}/>
          </div>
          <div className="resumeRight">
            <ResumeSkills skills={skills}/>
          </div>
        </div>
        <div className="resume card">

        </div>
        </>
    );
  }