import { wordmarkPath } from "@playground/data/logoPaths";
import "./styles.css";

const Logo = () => (
  <svg className="logo" viewBox="0 0 358.3829 48.96" role="img" aria-label="formcraft">
    <rect className="logo-block" width="13" height="48" rx="3" />
    <rect className="logo-block" x="17" width="24" height="13" rx="3" />
    <rect className="logo-focus" x="17" y="17" width="15" height="13" rx="3" />
    <path className="logo-word" transform="translate(57.2171 48) scale(0.6857)" d={wordmarkPath} />
  </svg>
);

export default Logo;
