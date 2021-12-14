import './navbar.scss';

export function NavBar({ children }) {
  return (
    <header className="tabs">
      {children}
    </header>
  );
}