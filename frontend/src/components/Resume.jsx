import data from '../data/resumeData'
export default function Resume() {
  const {
    skills,
    experience,
    education,
  } = data;

  return (
    <div className="resume">
      <section className="skills">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="experience">
        <h3>Experience</h3>
        {experience.map((job, index) => (
          <div key={index} className="job">
            <h4>
              {job.role} — {job.company}
            </h4>
            <p className="date">
              {job.start} – {job.end}
            </p>
            <ul>
              {job.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="education">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="edu">
            <h4>
              {edu.degree} - {edu.school}, {edu.year}
            </h4>
          </div>
        ))}
      </section>
    </div>
  );
}
