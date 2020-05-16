import React from 'react';
import Moment from 'react-moment';

export default class MomentExample extends React.Component {
    render() {
        const dateToFormat = '1976-04-19';
        return (
            <div>
                <div>Format the date: <Moment format="DD/MM/YYYY">{dateToFormat}</Moment></div>
                <div>Time between two dates: <Moment from="2015-04-19">{dateToFormat}</Moment></div>
            </div >
        );
    }
}
