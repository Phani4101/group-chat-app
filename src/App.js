import React from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Join from "./components/join/join.components";
import Chat from "./components/chat/chat.components";

const App=()=> {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/Chat" exact component={Chat} />
    </Router>
  );
}

export default App;
