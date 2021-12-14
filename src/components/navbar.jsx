import './navbar.scss';

export function NavBar(props) {
  return (
    <header className="tabs">
      {props.children}
    </header>
  );
}