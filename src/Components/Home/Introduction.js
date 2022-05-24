import profile from '../../Assets/Photos/Light.png';

const Introduction = () => {
  const pink = (code) => <span className="pinkCode">{code}</span>;
  const blue = (code) => <span className="blueCode">{code}</span>;
  const purple = (code) => <span className="purpleCode">{code}</span>;
  // const red = (code) => <span className="redCode">{code}</span>;

  return (
    <section className="introduction">
      <img src={profile} alt="Profile" className="profilePic" />
      <code className="code">
        <p>
          <span className="pinkCode">import</span>
          {' '}
          SwiftUI
        </p>
        <p>
          <span className="pinkCode">struct</span>
          {' '}
          <span className="blueCode">Developer</span>
          {' '}
          &#123;
        </p>
        <p>
          {pink('let')}
          {' '}
          {blue('firstName')}
          ,
          {' '}
          {blue('lastName')}
          ,
          {' '}
          {blue('country')}
          :
          {' '}
          {purple('String')}
        </p>
        <p>
          {pink('let')}
          {' '}
          {blue('tools')}
          : [
          {purple('String')}
          ]
        </p>
        <p>
          {pink('var')}
          {' '}
          {blue('startPresentation')}
          :
          {' '}
          {purple('String')}
          {' '}
          &#123;
        </p>
        <p className="redCode">
          &quot;Hello, my name is &#92;&#40;
          {blue('firstName')}
          &#41; &#92;&#40;
          {blue('lastName')}
          &#41;,
          I am a developer from &#92;&#40;
          {blue('country')}
          &#41;
          and I can use &#92;&#40;
          {blue('tools')}
          .
          {purple('joined')}
          &#40;
          {purple('separator')}
          : &quot;, &quot;&#41;&#41;.
        </p>
        <p>&#125;</p>
        <p>&#125;</p>
        <p>
          <span className="pinkCode">let</span>
          {' '}
          me = Developer&#40;
        </p>
        <p>firstName: &quot;Augusto&quot;,</p>
        <p>lastName: &quot;Galindo Ali&quot;,</p>
        <p>country: &quot;Peru&quot;,</p>
        <p>
          tools: [&quot;Swift&quot;, &quot;JavaScript&quot;, &quot;react&quot;, &quot;redux&quot;]
        </p>
        <p>&#41;</p>
        <p>print&#40;me.startPresentation&#41;</p>
      </code>
    </section>
  );
};

export default Introduction;
