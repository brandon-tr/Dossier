import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addItem } from "../redux/actions/actions";
import Form from "./addItemForm";
import generator from "../idGen";

class ItemList extends Component {
  handleSubmit = e => {
    this.props.addItem(e.firstName, this.props.filter);
  };
  render() {
    const item = this.props.items
      ? this.props.filter
        ? this.props.items.map((item, id) => {
            return [
              item.list && item.tab === this.props.filter
                ? item.list.map(name => {
                    return <li key={generator()}>{name} </li>;
                  })
                : null
            ];
          })
        : null
      : null;
    return (
      <div className="item-list">
        <ul>{item} </ul>
        <Form onSubmit={this.handleSubmit} filter={this.props.filter} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items.arr,
    filter: state.filter
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addItem: addItem
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(ItemList);
