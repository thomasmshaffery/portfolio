export default function App() {
  return (
    <>
      <Header />
      <NavigationBar />
      <MainContent />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <header className="header">
        <h1>
          THOMAS <br />
          SHAFFERY
        </h1>
      </header>
    </>
  );
}

function NavigationBar() {
  return (
    <ul className="navigation-list">
      <NavigationButton>HOME</NavigationButton>
      <NavigationButton>ABOUT ME</NavigationButton>
      <NavigationButton>PROJECTS</NavigationButton>
      <NavigationButton>CONTACT</NavigationButton>
    </ul>
  );
}

function NavigationButton({ children }) {
  return <button className="navbutton">{children}</button>;
}

function MainContent() {
  return (
    <div className="content-container">
      <ProjectList />
    </div>
  );
}

function ProjectList() {
  const projects = [
    {
      title: "Skin Roulette",
      description: "Random Valorant Skin Roulette.",
    },
    {
      title: "Portfolio",
      description: "My personal portfolio for my React projects.",
    },
    {
      title: "Placeholder",
      description: null,
    },
    {
      title: "Placeholder 2",
      description: null,
    },
    {
      title: "Placeholder 3",
      description: null,
    },
    {
      title: "Placeholder 4",
      description: null,
    },
  ];
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div className="project">
          {project.title} + {project.description}
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return <footer className="footer">Footer Content here</footer>;
}
