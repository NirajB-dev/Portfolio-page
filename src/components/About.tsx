import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a software engineer completing an M.Sc. in Computer Science at Trinity
          College Dublin, specialising in Future Networked Systems. I have close to
          two years of professional experience building production systems in Python
          and React, and my dissertation is in multi-agent reinforcement learning. I
          enjoy working on hard problems from zero to one — distributed systems, AI
          pipelines, and full-stack products that ship to real users.
        </p>
      </div>
    </div>
  );
};

export default About;
