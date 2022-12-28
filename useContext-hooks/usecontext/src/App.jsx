import ThemeContextProvider from "./theme-context";
import Greeting from "./Greeting";

import Message from "./message";

const App = () => {
  return (
    <ThemeContextProvider>
      <Message />
      <Greeting />
    </ThemeContextProvider>
  );
};

export default App;
