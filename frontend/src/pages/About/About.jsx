import Navbar from '../../components/navbar/Navbar';
import './About.scss';
function AboutMe() {
  return (
    <>
      <h1>About me</h1>
      <p>
        I've always been a tinkerer, drawn to figuring out how things work and creating solutions.
        My passion for programming started with Minecraft modding, sparking an obsession with
        computer science and problem-solving.
      </p>
      <br></br>
      <p>
        As an Eagle Scout since 2025, I've developed leadership, discipline, and a drive to serve
        others. Beyond coding, I enjoy robotics, rollerblading, and spending time with my family,
        always looking for ways to combine creativity and technology.
      </p>
    </>
  );
}

function TechnicalSkills() {
  return (
    <>
      <h2>Technical Skills</h2>
      <p>
        I have a well-rounded technical skill set that enables me to deliver high-quality software
        solutions. My expertise spans programming languages such as Java, Python, JavaScript,
        TypeScript, HTML, and CSS, along with frameworks like React, Spring Boot, and tools like
        SCSS and Vite. I am proficient in testing methodologies using JUnit, TestNG, and Mockito and
        adept at build automation with Maven and Gradle. Additionally, I have hands-on experience
        with Git/GitHub, and Linux, and I effectively utilize Markdown for documentation. My
        understanding of design and creational patterns enhances my ability to architect robust,
        scalable, and maintainable applications.
      </p>
    </>
  );
}

function SoftSkills() {
  return (
    <>
      <h3>Soft Skills</h3>
      <p>
        I bring a strong sense of leadership and project management to every task, coupled with
        excellent communication and a helpful, people-oriented approach. Quick, adaptable, and
        easygoing, I thrive in collaborative environments and enjoy helping others succeed. As a
        motivated learner, I'm always eager to grow and tackle new challenges. My commitment to
        maintaining clean, efficient workflows ensures high standards in both my work and my
        interactions with others.
      </p>
    </>
  );
}

export default function About() {
  return (
    <>
      <div className="about">
        <Navbar activeName="about" />
        <main>
          <AboutMe />
          <TechnicalSkills />
          <SoftSkills />
        </main>
      </div>
    </>
  );
}
