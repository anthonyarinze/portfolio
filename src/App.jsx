import Body from "./components/Body";
import Divider from "./components/Divider";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center bg-gray-600 p-3 text-gray-400">
      <div className="glow-border h-full w-full overflow-auto rounded-md bg-bg-main p-5">
        <Header />
        <Divider />
        <Body />
      </div>
    </div>
  );
}

export default App;
