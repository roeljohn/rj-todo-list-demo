import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from "moment";

class DateBadge extends Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date(),
          endDate: this.props.endDate,
          currentDate: new Date()
        };
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
      }
    
      handleChangeStart(date) {
        this.setState({
          startDate: date
        });
      }
    
      handleChangeEnd(date) {
        this.setState({
          endDate: date
        });
      }
    
      calculateDaysLeft(startDate, endDate) {
        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
    
        return endDate.diff(startDate, "days");
      }
    render() {
        const { startDate, endDate } = this.state;

        const daysLeft = this.calculateDaysLeft(startDate, endDate);
        let className;
        if (daysLeft <= 1){
            className = 'badge-danger';
        } else if (daysLeft >= 2 && daysLeft <= 5){
            className = 'badge-warning';
        } else if (daysLeft > 5 && daysLeft < 11 ){
            className = 'badge-info';
        } else {
            className = 'badge-primary';
        }
        return (
                <span className={`badge ${className}`}>Due <Moment fromNow>{this.props.currentDate}</Moment></span>
        );
    }
}

export default DateBadge;