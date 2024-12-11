import React from 'react';

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Skill/Language</th>
            <th>Proficiency and Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML, CSS, JavaScript</td>
            <td>Basic development of web pages with responsive designs and interactive features.</td>
          </tr>
          <tr>
            <td>SQL</td>
            <td>Understanding of relational databases and the ability to write simple queries for data retrieval and manipulation.</td>
          </tr>
          <tr>
            <td>C</td>
            <td>Fundamental programming concepts including syntax, control structures, and function implementation.</td>
          </tr>
          <tr>
            <td>Python/Java</td>
            <td>Basic understanding of programming logic and algorithm development using object-oriented programming principles.</td>
          </tr>
          <tr>
            <td>Data Structures</td>
            <td>Familiarity with core data structures (e.g., arrays, linked lists, stacks, queues, trees) and their practical applications.</td>
          </tr>
        </tbody>
      </table>

      <h3 className="courses-title">Courses Completed</h3>
      <div className="courses-section">
        <h4>Southern Connecticut State University</h4>
        <ul>
          <li>CSC 235 - Web and Database Development</li>
          <li>CSC 212 - Data Structures</li>
        </ul>

        <h4>University of New Haven</h4>
        <ul>
          <li>CSCI1110 - Intro to C Programming</li>
          <li>CSCI1109 - Intro to Computing</li>
        </ul>

        <h4>Norwalk Community College</h4>
        <ul>
          <li>CSA105 - Intro to Software</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
