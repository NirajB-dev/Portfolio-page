import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.Sc. Computer Science</h4>
                <h5>Trinity College Dublin</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Specialising in Future Networked Systems. Dissertation in
              multi-agent reinforcement learning. Building distributed systems,
              AI pipelines, and full-stack products across coursework and
              independent projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Humanify Technologies</h5>
              </div>
              <h3>2023–25</h3>
            </div>
            <p>
              Oct 2023 – Jul 2025. Built and maintained production systems in
              Python and React. Delivered full-stack features end-to-end,
              collaborated with cross-functional teams, and contributed to
              system reliability and performance improvements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Dev Intern</h4>
                <h5>Humanify Technologies</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Jul 2023 – Oct 2023. Interned before converting to a full-time
              role. Contributed to backend services and frontend features,
              gaining hands-on experience with the production codebase and
              development workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Dev Intern</h4>
                <h5>Analytics Vidhya</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Feb 2022 – May 2022. Worked on data-driven features and tooling.
              Gained experience with ML workflows, data pipelines, and
              engineering best practices in an applied AI environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
