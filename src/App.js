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
  return <div>Test</div>;
}

function Footer() {
  return <footer className="footer">Footer Content here</footer>;
}
