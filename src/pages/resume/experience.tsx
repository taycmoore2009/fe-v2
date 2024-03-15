import React from 'react';

export const ResumeExperience = (
    {experiences}:
    {
        experiences: {
            company: string;
            location: string;
            position: string;
            date: string;
            details?: string;
        }[];
    }
) => {
    return (
        <div className="resumeExperience">
            <div className="resumeSectionHeader coral"><b>Experience</b></div>
            {experiences.map(experience => {
                return (
                    <div className="resumeExperiencePosition">
                        <div className="resumeExperienceTitle"><b>{experience.company}, <i>{experience.location} - {experience.position}</i></b></div>
                        <div className="resumeExperienceDate gray">{experience.date}</div>
                        <div className="resumeExperienceDetails gray">{experience.details}</div>
                    </div>
                )
            })}
        </div>
    );
  }