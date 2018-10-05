import React from 'react';

class DataItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  deleteEntry() {
    this.props.deleteEntry(this.props.entry.id)
  }

  render() {
      return(
        <li>
          <div className="item">
            <h4>{this.props.item.date}</h4>
            <h4>{this.props.item.value}</h4>
          </div>
        </li>
      )
    }
  }


export default DataItem;
