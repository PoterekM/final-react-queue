import React from "react";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";
import { connect } from "react-redux";

class Queue extends React.Component{

  constructor(props) {
    super(props);
    this.updateTicketTimeSinceOpened = this.updateTicketTimeSinceOpened.bind(this);
  }

  componentDidMount() {
    this.timeSinceOpenedChecker = setInterval(() =>
      this.updateTicketTimeSinceOpened(),
      5000
    );
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUnmount(){
    clearInterval(this.timeSinceOpenedChecker);
  }

  updateTicketTimeSinceOpened() {
    this.forceUpdate();
  }

  render(){
    console.log("Current Path:", this.props.location.pathname);
    return (
      <div>
        <TicketList ticketList = {this.props.masterTicketList}/>
        <NewTicketControl/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    masterTicketList : state
  };
};

export default connect(mapStateToProps)(Queue);
