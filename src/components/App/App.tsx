import React from "react";
import { Switch, Route } from "react-router-dom";
import { observer } from "mobx-react";

import movieStore from "../../store/movieStore";
import Popular from "../Pages/Popular";
import Header from "../Header";
import SingleMovie from "../Pages/SingleMovie";
import SearchRes from "../Pages/SearchResult";
import Favorite from "../Pages/Favorite";
import NotFound from "../Pages/404/NotFound";
import Loader from "../Loader";
import "./App.scss";

const App: React.FC = observer(() => {
  const { getFavorite,isLoading } = movieStore;
  getFavorite();
  return (
    <div className="App">
      <Header />
      {isLoading&& <div className='spinner'> <Loader/> </div>}
      <Switch>
        <Route exact path="/" component={Popular} />
        <Route exact path="/search" component={SearchRes} />
        <Route exact path="/favorite" component={Favorite} />
        <Route exact path="/movie/:id" component={SingleMovie} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
});

export default App;
