import React from "react";
import "./Experience.css";
import pdfIcon from "../../images/pdfIcon.png";

const experiences = [
    {
        type: "Student Developer",
        company: "Subaio",
        period: "January 2025 - Present",
        description: "A student developer at Subaio, where I work with smaller jobs that are wanted by different parts of the company but they currently don't have people to do them.",
        technologies: ["Python"],
        location: "Aalborg, Denmark",
        // paper: "/resume.pdf"  // Optional: link to resume or relevant document
    },
    // Add more experiences following the same structure
];

export default function Experience() {
    return (
        <div className="experience-container">
            <h1>Work Experience</h1>
            <div className="experience-list">
                {experiences.map((experience, index) => (
                    <div key={index} className="experience-card">
                        <h1>{experience.type}</h1>
                        <h2>{experience.company}</h2>
                        <h3>{experience.period}</h3>
                        <p>{experience.description}</p>
                        <p className="location">{experience.location}</p>

                        <div className="card-footer">
                            <ul>
                                {experience.technologies.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                            {experience.paper && (
                                <a href={experience.paper} target="_blank" rel="noopener noreferrer" className="link-button paper-link">
                                    <img src={pdfIcon} alt="PDF" className="experience-icon" />
                                    Resume
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 