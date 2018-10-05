import React from 'react';
import DataItem from './data_item';

class Data extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataType: "",
      start: "",
      end: "",
      filterToggle: false
    }
    this.selectToggle = this.selectToggle.bind(this);
    this.change = this.change.bind(this);
    this.validateEnd = this.validateEnd.bind(this);
    this.changeEnd = this.changeEnd.bind(this);
    this.filterRange = this.filterRange.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({start: props.data[0].date, end: props.data[props.data.length -1].date})
  }

  selectToggle(type) {
    this.setState({dataType: type})
    this.props.requestData(type)
  }

  change(e) {
    this.setState({start: e.currentTarget.value})
  }

  changeEnd(e) {
    if(!this.state.start) {
      this.setState({start: this.props.data[0].data})
    }
    this.setState({end: e.currentTarget.value})
    this.validateEnd()
  }

  filterRange() {
    this.setState({filterToggle: !this.state.filterToggle})
  }

  validateEnd(e) {
    if(this.state.start === "") {
      return this.props.data.map(item => <option value={item.date}>{item.date}</option>)
    } else {
      if(this.state.end === "") {
        this.setState({end: this.state.start})
      } else {
        if(this.state.end < this.state.start) {
          this.setState({end: this.state.start})
        }
      }
      return this.props.data.filter(item => item.date >= this.state.start).map(item => <option value={item.date}>{item.date}</option>)
    }
  }

  render() {
    const {  data } = this.props;
    let filteredData = data;
    let end;
    if(data.length) {
      end = this.validateEnd()
    }

    if(this.state.start && this.state.end) {
      filteredData = data.filter(item => item.date >= this.state.start && item.date <= this.state.end).map(item => <DataItem key={item.id} item={item}/>)
    }
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
              <div className="data-range-container">
                <div className={this.state.dataType === "" ? "hidden" : "date-range"}>
                  <nav>
                    <h3>Start Date</h3>
                      <select onChange={this.change} value={this.state.start}>
                      {data.map(item => <option value={item.date}>{item.date}</option>)}
                    </select>
                  </nav>

                  <nav>
                    <h3>End Date</h3>
                      <select onChange={this.changeEnd} value={this.state.end}>
                        {end}
                    </select>
                  </nav>
                </div>

              </div>


              <div className="list-container">
                <div className={this.state.dataType === "" ? "hidden" : "data-items-options"}>
                  <h3>Date</h3>
                  <h3>Value</h3>
                </div>

                <ul className={!this.props.data.length? "hidden" : "data-list"}>
                  {filteredData.map(item => <DataItem key={item.id} item={item}/>)}
                </ul>
              </div>
            </div>
          </div>
      )
    }
}


  export default Data;
