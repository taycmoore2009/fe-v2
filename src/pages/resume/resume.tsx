import React from 'react';

import { ResumeExperience } from './experience';
import { ResumeSkills } from './skills';
import { ResumeReachMe } from './reachMe';
import { ResumeAwards } from './awards';

/*--
To Do:
Turn into network call to DB
--*/
const workExperience = [{
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

const education = [
  {
    title: "Salisbury University",
    location: "Maryland",
    position: "Computer Science",
    date: "Graduated 2015"
  },
  {
    title: "Wor Wic Community College",
    location: "Maryland",
    position: "Computer Science",
    date: "Graduated 2012"
  }
];

const projects = [
  {
    title: 'Internationalization',
    position: 'Multiple big updates to website for international release',
    details: 'A specialized team of 10 engineers from a wide range of di erent product areas dedicated to supporting the international expansion into Germany and Mexico. This required translating all strings into local languages and supporting settings to switch between imperial and metric units Required coordination from multiple engineering teams.',
  },
  {
    title: 'Plan Sets',
    position: 'New product that allows users to submit custom plan set requests',
    details: 'With solar sales comes the tedious permitting and plan set documentation required before any installation can begin. With this new feature, plan set request, the user can now request that our app generates a plan set request based on design generated in the app. This new feature became our biggest money generator in its first year of release.',
  },
  {
    title: 'Design System v1',
    position: 'New design standards used across all engineering teams',
    details: 'When the newly formed design team rolled out their first round of components, new design patterns were needed in our codebase. As such, a team was formed to see this refactor to all ui elements. Afterwards, for continued support of the new design system, senior engineers from all teams made continued changes to the design repository.',
  },
  {
    title: 'VAT',
    position: 'Added new feature VAT to all foreign transactions',
    details: 'VAT (Value Added Tax) was previously mixed in with the cost of the expense. With this new feature, the application automatically calculate and add VAT to any expense where needed. We utilized a third party service to get current VAT rates and for which products.',
  },
  {
    title: 'V1 to V2 migration',
    position: 'Transfer all functionality from aurora v1 to v2',
    details: 'While at aurora, worked on 3 teams migrating features o  of app v1 to v2. Notable projects were pricing overview and calculators, expert design services, and plan set services.',
  },
];

const skills = [
  'Javascript/Typescript',
  'React, Backbone, Ember, graphQL',
  'Jest, Cypress, CircleCi , Babel, Docker, AWS',
  'MySQL, postgresSQL, MongoDB',
  'Restful and SOAP experience',
  'Quick learner on everything else'
];

const awards = [
  {
    title: '#2 overall hackathon winner',
    description: 'Our hackathons were judged on three categories; usefulness, innovation, presentation. The spooky skelly boys took second in each category out of 20 teams'
  },
  {
    title: 'Best at standup',
    description: 'Recognized to persons that distinguishes the best stand up etiquette; including timeliness, participation, and having good vibes'
  },
  {
    title: 'Best office dog',
    description: 'You just have to meet them. You’ll understand why.'
  },
  {
    title: '2018 Soccer Golf Camp',
    description: 'Awarded to top scorer in the company wide 2018 Soccer Golf tournament'
  },
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
              <ResumeExperience experiences={workExperience.map(experience => ({...experience, title: experience.company}))} title="Experience"/>
          </div>
          <div className="resumeRight">
            <ResumeSkills skills={skills}/>
            <ResumeAwards awards={awards} />
          </div>
        </div>
        <div className="resume card">
          <div className="resumeLeft">
              <ResumeExperience experiences={education} title="Education"/>
              <ResumeExperience experiences={projects} title="Projects"/>
          </div>
        </div>
        </>
    );
  }