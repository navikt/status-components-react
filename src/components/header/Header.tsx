import "./header.css";

interface HeaderProps {
  name: string;
}

export const Header = ({ name }: HeaderProps) => (
  <header className="awesome-header">Hello, {name}, from header</header>
);
