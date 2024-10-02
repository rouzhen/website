import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      {/* use fragment to wrap elements*/}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* lg:pt sets the padding top to 5.25rem on large screens */}

        <Header />
      </div>
      <ButtonGradient>Click me</ButtonGradient>
    </>
  );
};

export default App;
