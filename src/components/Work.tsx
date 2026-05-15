import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Beacon",
    category: "City-Scale Emergency Response Platform",
    type: "TCD M.Sc. · CS7NS1 · Production",
    tools: "Go · React 18 · Flutter · PostgreSQL · Redis · ClickHouse · GCP Pub/Sub · Airflow · GKE · Vertex AI · Twilio · Keycloak",
    roles: ["SRE", "Backend", "FDE"],
    image: "/images/placeholder.webp",
    link: "https://beacon-tcd.tech",
  },
  {
    title: "TrafficBook",
    category: "Geo-Distributed Traffic Management Platform",
    type: "TCD M.Sc. · CS7NS6 · Production",
    tools: "Python · FastAPI · PostgreSQL · Redis · RabbitMQ · React 18 · Tailwind · shadcn/ui · Docker · Prometheus · Grafana · k6",
    roles: ["SDE", "SRE"],
    image: "/images/placeholder.webp",
    link: "https://github.com/cs7ns6-group-e/traffic-service",
  },
  {
    title: "Visual Website Builder",
    category: "Drag-and-Drop SaaS Page Builder",
    type: "Personal Project",
    tools: "React 18 · TypeScript · CSS-in-JS · CSS Custom Properties · Node.js · REST API · Jest · Lighthouse 94",
    roles: ["Frontend"],
    image: "/images/placeholder.webp",
    link: "https://github.com/NirajB-dev/BuilderX",
  },
  {
    title: "Explorify",
    category: "Adaptive Cross-Platform Tourism App",
    type: "TCD M.Sc. · CS7IS5",
    tools: "React Native · Expo · Node.js · Express · PostgreSQL · Supabase · Zustand · GitHub Actions · iOS & Android",
    roles: ["Frontend"],
    image: "/images/placeholder.webp",
    link: "https://github.com/Explorify-Ad/Explorify",
  },
  {
    title: "Distributed Job Queue Engine",
    category: "Priority Queue & Task Processing Engine",
    type: "Personal Project · In Progress",
    tools: "Python · Redis · PostgreSQL · FastAPI · Docker · Prometheus · Grafana · k6 · pytest",
    roles: ["Backend", "SDE"],
    image: "/images/placeholder.webp",
    link: undefined,
  },
  {
    title: "Distributed SDN Routing Simulator",
    category: "Software-Defined Networking Simulation",
    type: "Personal Project",
    tools: "C++17 · Python · Linux · POSIX Threads · Non-blocking TCP · select() · epoll() · Makefile",
    roles: ["SDE"],
    image: "/images/placeholder.webp",
    link: undefined,
  },
  {
    title: "Agentic Design-Data Query Tool",
    category: "AI Agent + Developer SDK",
    type: "Personal Project",
    tools: "Python · LangChain · FastAPI · JSON-RPC 2.0 · TypeScript · Docker · Jest · Anthropic / OpenAI · SSE",
    roles: ["FDE", "AI/ML"],
    image: "/images/placeholder.webp",
    link: undefined,
  },
  {
    title: "Multi-Font CAPTCHA OCR Solver",
    category: "Two-Stage Deep Learning OCR Pipeline",
    type: "TCD M.Sc. · CS7NS1",
    tools: "Python · TensorFlow · Keras · TFLite · CNN · OpenCV · Raspberry Pi · CUDA · WSL",
    roles: ["AI/ML"],
    image: "/images/placeholder.webp",
    link: "https://gitlab.scss.tcd.ie/bharambn/cs7ns1-mainproject2",
  },
  {
    title: "AI Code Review Agent",
    category: "GitHub PR Analysis Agent",
    type: "Personal Project · In Progress",
    tools: "Python · FastAPI · LangChain · ChromaDB · sentence-transformers · GitHub API · TypeScript · Docker · Anthropic",
    roles: ["AI/ML", "FDE", "Backend"],
    image: "/images/placeholder.webp",
    link: undefined,
  },
];

const roleColors: Record<string, string> = {
  SRE: "#5eead4",
  SDE: "#818cf8",
  Frontend: "#f472b6",
  Backend: "#fb923c",
  FDE: "#34d399",
  "AI/ML": "#facc15",
};

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-project-type">{project.type}</p>
                        <div className="carousel-roles">
                          {project.roles.map((role) => (
                            <span
                              key={role}
                              className="carousel-role-badge"
                              style={{
                                borderColor: roleColors[role] ?? "#888",
                                color: roleColors[role] ?? "#888",
                              }}
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                        <div className="carousel-tools">
                          <span className="tools-label">Stack</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
