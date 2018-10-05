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
            <nav>
              <h4>{this.props.item.props.item.date}</h4>
            </nav>
            <span>
              <h4>{this.props.item.props.item.value}</h4>
            </span>
          </div>
        </li>
      )
    }
  }


export default DataItem;
