import React from 'react';

export const ResumeExperience = (
    {experiences, title}:
    {
        experiences: {
            title: string;
            location?: string;
            position?: string;
            date?: string;
            details?: string;
        }[];
        title: string;
    }
) => {
    return (
        <div className="resumeExperience">
            <div className="resumeSectionHeader coral"><b>{title}</b></div>
            {experiences.map(experience => {
                return (
                    <div key={experience.title} className="resumeExperiencePosition">
                        <div className="resumeExperienceTitle"><b>{experience.title}, <i>{experience.location} - {experience.position}</i></b></div>
                        <div className="resumeExperienceDate gray">{experience.date}</div>
                        <div className="resumeExperienceDetails gray">{experience.details}</div>
                    </div>
                )
            })}
        </div>
    );
  }