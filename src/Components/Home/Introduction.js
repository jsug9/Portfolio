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
    <div className="codeDiv">
      <Code />
      <span className="type">
        Hello, my name is Augusto Galindo Ali,
        I am a developer from Peru and I can use Swift, JavaScript, React,
        Redux.
      </span>
    </div>
  </section>
);

export default Introduction;
