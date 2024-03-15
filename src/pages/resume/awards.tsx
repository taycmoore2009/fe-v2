import React from 'react';

export const ResumeAwards = (
    {awards}:
    {
        awards: {
            title: string;
            description: string;
        }[];
    }
) => {
    return (
        <div className="resumeExperience">
            <div className="resumeSectionHeader coral"><b>Experience</b></div>
            {awards.map(award => {
                return (
                    <div key={award.title} className="resumeAwardsPosition gray">
                        <b>{award.title}</b> {' '}
                        {award.description}
                    </div>
                )
            })}
        </div>
    );
  }