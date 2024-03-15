import React from 'react';

export const ResumeSkills = (
    {skills}: { skills: String[]; }
) => {
    return (
        <div>
            <div className="resumeSectionHeader coral"><b>Skills</b></div>
            {skills.map((skill, index) => {
                return (
                    <div key={index} className="resumeSkillPosition gray">{skill}</div>
                )
            })}
        </div>
    );
  }