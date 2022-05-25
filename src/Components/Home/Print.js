const Print = () => {
  const print = 'Hello, my name is Augusto Galindo Ali, I am a developer from Peru and I can use Swift, JavaScript, React, Redux.';

  return (
    <span className="consoleLog" style={{ '--characters': print.length }}>
      {print}
    </span>
  );
};

export default Print;
