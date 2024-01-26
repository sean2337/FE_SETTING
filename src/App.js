import Router from "./routes/Router";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme/Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
