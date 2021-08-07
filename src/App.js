import { ThemeProvider } from "@material-ui/core";
import theme from "./components/theme/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import CreateRoom from "./components/CreateRoom/CreateRoom";
import WaitingRoom from "./components/WaitingRoom/WaitingRoom";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import { SocketContext, socket } from "./socketIO/socketIO";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SocketContext.Provider value={socket}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-room" component={CreateRoom} />
            <Route exact path="/waiting-room" component={WaitingRoom} />
            <Route exact path="/join-room" component={JoinRoom} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </SocketContext.Provider>
    </ThemeProvider>
  );
}

export default App;
