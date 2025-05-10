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
  return <header className="header">Header here</header>;
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
  return <div>Main Content Here</div>;
}

function Footer() {
  return <footer className="footer">Footer Content here</footer>;
}
