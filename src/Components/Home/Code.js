const Code = () => {
  const pink = (code) => <span className="pinkCode">{code}</span>;
  const blue = (code) => <span className="blueCode">{code}</span>;
  const purple = (code) => <span className="purpleCode">{code}</span>;
  const red = (code) => <span className="redCode">{code}</span>;

  return (
    <div className="codeContainer">
      <code className="code">
        <p>
          <span className="pinkCode">import</span>
          {' '}
          SwiftUI
        </p>

        {/* <br /> */}
        <p>
          <span className="pinkCode">struct</span>
          {' '}
          <span className="blueCode">Developer</span>
          {' '}
          &#123;
        </p>
        <p className="padding2">
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
        <p className="padding2">
          {pink('let')}
          {' '}
          {blue('tools')}
          : [
          {purple('String')}
          ]
        </p>
        <p className="padding2">
          {pink('var')}
          {' '}
          {blue('startPresentation')}
          :
          {' '}
          {purple('String')}
          {' '}
          &#123;
        </p>
        <p className="redCode padding4">
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
        <p className="padding2">&#125;</p>
        <p>&#125;</p>

        {/* <br /> */}
        <p>
          {pink('let')}
          {' '}
          {blue('me')}
          {' '}
          = Developer &#40;
        </p>
        <p className="padding2">
          firstName:
          {' '}
          {red('"Augusto"')}
          ,
        </p>
        <p className="padding2">
          lastName:
          {' '}
          {red('"Galindo Ali"')}
          ,
        </p>
        <p className="padding2">
          country:
          {' '}
          {red('"Peru"')}
          ,
        </p>
        <p className="padding2">
          tools: [
          {red('"Swift"')}
          {', '}
          {red('"JavaScript"')}
          {', '}
          {red('"React"')}
          {', '}
          {red('"Redux"')}
          ]
        </p>
        <p>&#41;</p>
        {/* <br /> */}
        <p>
          {purple('print')}
          &#40;
          {blue('me')}
          .startPresentation&#41;
        </p>
      </code>
    </div>
  );
};

export default Code;
