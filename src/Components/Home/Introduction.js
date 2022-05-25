import lightProfile from '../../Assets/Photos/Light.png';
import darkProfile from '../../Assets/Photos/Dark.png';
import isDarkModeEnabled from '../../Logic/DarkMode';
import Code from './Code';

const Introduction = () => (
  <section className="introduction">
    <img
      src={isDarkModeEnabled() ? darkProfile : lightProfile}
      alt="Profile"
      className="profilePic"
    />
    <Code />
  </section>
);

export default Introduction;
