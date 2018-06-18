import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import loremIpsum from 'lorem-ipsum';
import './App.css';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

const rowCount = 1000;
const listHeight = 500;
const rowHeight = 50;
const rowWidth = 800;

class App extends Component {
  constructor() {
    super();
    this.state = { list: [] };
    this.cache = new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100
    });
  }

  componentDidMount() {
    this.renderRow = this.renderRow.bind(this);
    this.setState({
      list: [...Array(rowCount)].map((val, i) => {
        return {
          id: i,
          name: "Peter Mah",
          image: "http://via.placeholder.com/40",
          text: loremIpsum({
            count: 1,
            units: "sentences",
            sentenceLowerBound: 4,
            sentenceUpperBound: 80
          })
        }
      })
    });
  }

  renderRow({ index, key, style, parent }) {
    const { list } = this.state;
    return (
      <CellMeasurer
        key={key}
        cache={this.cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}>
          <div style={style} className="row">
            <div className="image">
              <img src={list[index].image} alt="" />
            </div>
            <div className="content">
              <div>{list[index].name}</div>
              <div>{list[index].text}</div>
            </div>
          </div>
      </CellMeasurer>
    );
  }

  render() {
    return (
      <div>
        <h1>Virtualized</h1>
        <div className="list">
          <AutoSizer>
            {({ width, height }) => {
              return <List 
                width={rowWidth}
                height={listHeight}
                deferredMeasurementCache={this.cache}
                rowHeight={this.cache.rowHeight}
                rowRenderer={this.renderRow}
                rowCount={this.state.list.length}
                overscanRowCount={3}
              />
            }}
          </AutoSizer>
        </div>
      </div>
    )
  }
}

export default App;
