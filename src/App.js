import { useEffect, useState } from "react";
import { useCanvasValue } from "./IntroirEditorBox/context";
import Editor from "./scense/Editor";

function App() {
  const {setisMobile} = useCanvasValue()
  const [state, setState] = useState({
    mobileView: false,
  });
  // eslint-disable-next-line no-unused-vars
  const { mobileView } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1000
        ? setState(
            (prevState) => ({ ...prevState, mobileView: true }),
            setisMobile(true)
          )
        : setState(
            (prevState) => ({ ...prevState, mobileView: false }),
            setisMobile(false)
          );
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Editor/>
  );
}

export default App;
