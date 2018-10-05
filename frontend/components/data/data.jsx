import React from 'react';
import DataItem from './data_item';

class Data extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataType: "",
    }
    this.selectToggle = this.selectToggle.bind(this);
  }

  selectToggle(type) {
    this.setState({dataType: type})
    this.props.requestData(type)
  }

  render() {
    const {  data } = this.props;
        return(
          <div className="data-container">
            <div className="data-title-container">
              <span><i className="fas fa-medkit"></i></span>
              <p>Data Type</p>
            </div>

            <div className="data-options-container">
              <ul>
                <li className={this.state.dataType === "bonding" ? "selected" : ""} onClick={() => this.selectToggle("bonding")}>Bonding</li>
                <li className={this.state.dataType === "unbonding" ? "selected" : ""} onClick={() => this.selectToggle("unbonding")}>Unbonding</li>
                <li className={this.state.dataType === "injections" ? "selected" : ""} onClick={() => this.selectToggle("injections")}>Injections</li>
                <li className={this.state.dataType === "battery" ? "selected" : ""} onClick={() => this.selectToggle("battery")}>Battery</li>
                <li className={this.state.dataType === "temperature" ? "selected" : ""} onClick={() => this.selectToggle("temperature")}>Temperature</li>
                <li className={this.state.dataType === "errors" ? "selected" : ""} onClick={() => this.selectToggle("errors")}>Errors</li>
              </ul>
            </div>

            <div className="data-items-container">
              <div className="data-items-options">
                <h3>Date</h3>
                <h3>Value</h3>
              </div>

              <ul className="data-list">
                {data.map(item => <DataItem key={item.id} item={item}/>)}
              </ul>
            </div>
          </div>
      )
    }
}


  export default Data;
