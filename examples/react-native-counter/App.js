import React, { Component } from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-mobx';
import { useStrict, observable } from 'mobx';
import { observer } from 'mobx-react/native';
import remotedev from 'mobx-remotedev/lib/dev';

useStrict(true);

// view and store for Counter scene
import Counter from './components/Counter';
import CounterStore from './stores/counter';

const store = new CounterStore();

@observer
export default class App extends Component {
  render() {
    return (
      <Router store={store}>
        <Scene key="launch" component={Counter} hideNavBar />
      </Router>
    );
  }
}
