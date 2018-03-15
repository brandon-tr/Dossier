import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ItemList from "./components/item-list";
import AddTabForm from "./components/addTabForm";
import { addTab } from "./redux/actions/actions";
import { showTab } from "./redux/actions/actions";
import generator from "./idGen";

class App extends Component {
  handleSubmit = e => {
    this.props.addTab(e.tab);
  };
  handleClick = e => {
    this.props.showTab(e.target.value);
  };
  render() {
    const tab = this.props.tabs
      ? this.props.tabs.map(tab => {
          return (
            <li key={generator()}>
              <button value={tab.tab} onClick={this.handleClick}>
                {tab.tab}
              </button>
            </li>
          );
        })
      : null;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>{tab} </ul>
        <AddTabForm onSubmit={this.handleSubmit} />
        <ItemList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.items.arr,
    filter: state.filter
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addTab: addTab,
      showTab: showTab
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
