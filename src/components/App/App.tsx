import React from "react";
import { Switch, Route, useHistory} from "react-router-dom";
import { observer } from "mobx-react";

import Popular from "../Pages/Popular";
import Header from "../Header";
import SingleMovie from "../Pages/SingleMovie";
import SearchRes from "../Pages/SearchResult";
import NotFound from "../Pages/404/NotFound";
import "./App.scss";

const App: React.FC = observer(() => {
  const {push}=useHistory()

  const goToPopular=()=>{
    push('/')
  }
  const goToSearch=()=>{
    push('/search')
  }
  return (
    <div className="App">
      <header>Заголовок</header>
      <Header/>
      <button onClick={goToPopular}>Популярное </button>
      <button  onClick={goToSearch}>Поиск </button>

      <Switch>
        <Route exact path="/" component={Popular} />
        <Route exact path="/search" component={SearchRes} />
        <Route exact path="/movie/:id" component={SingleMovie} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
});

export default App;
