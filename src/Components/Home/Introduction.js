import lightProfile from '../../Assets/Photos/Light.png';
import darkProfile from '../../Assets/Photos/Dark.png';
import isDarkModeEnabled from '../../Logic/DarkMode';
import Code from './Code';
import Print from './Print';

const Introduction = () => (
  <section className="introduction">
    <img
      src={isDarkModeEnabled() ? darkProfile : lightProfile}
      alt="Profile"
      className="profilePic"
    />
    <Code />
    <div className="codeDiv">
      <Print />
    </div>
  </section>
);

export default Introduction;
