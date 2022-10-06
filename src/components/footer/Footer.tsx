import "./footer.css";

interface FooterProps {
  name: string;
}

export const Footer = ({ name }: FooterProps) => (
  <footer className="awesome-footer">Hello, {name}, from footer</footer>
);
