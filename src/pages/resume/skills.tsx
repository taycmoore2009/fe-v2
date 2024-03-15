import React from 'react';

export const ResumeSkills = (
    {skills}: { skills: String[]; }
) => {
    return (
        <div>
            <div className="resumeSectionHeader coral"><b>Skills</b></div>
            {skills.map(skill => {
                return (
                    <div className="resumeSkillPosition gray">{skill}</div>
                )
            })}
        </div>
    );
  }