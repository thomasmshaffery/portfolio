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
  return <div>Header here</div>;
}

function NavigationBar() {
  return (
    <div>
      <NavigationButton>Home</NavigationButton>
      <NavigationButton>About Me</NavigationButton>
      <NavigationButton>Projects</NavigationButton>
      <NavigationButton>Contact Me</NavigationButton>
    </div>
  );
}

function NavigationButton({ children }) {
  return <button>{children}</button>;
}

function MainContent() {
  return <div>Main Content Here</div>;
}

function Footer() {
  return <div>Footer Content here</div>;
}
