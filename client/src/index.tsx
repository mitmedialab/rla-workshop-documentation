import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Index from './routes/Index';

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="uk-padding-small">
        <Header className="siteHeader" />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Index}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));