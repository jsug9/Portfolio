import Introduction from '../Components/Home/Introduction';

const HomeContainer = () => {
  const helloWorld = 'Hello World 0';
  return (
    <div className="homeContainer">
      <Introduction />
      <p>{helloWorld}</p>
    </div>
  );
};

export default HomeContainer;
