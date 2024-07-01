import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from '../actions/flightActions';
import './FlightList.css'; // 确保你有相应的CSS文件

const FlightList = ({ selectedDate, sortType }) => {
    const dispatch = useDispatch();
    const { flights } = useSelector(state => state.flights);
    const [sortedFlights, setSortedFlights] = useState([]);

    useEffect(() => {
        dispatch(fetchFlights(selectedDate));
    }, [dispatch, selectedDate]);

    useEffect(() => {
        let sortedArray = [...flights];
        if (sortType === 'time') {
            sortedArray.sort((a, b) => new Date(`1970/01/01 ${a.departureTime}`) - new Date(`1970/01/01 ${b.departureTime}`));
        } else if (sortType === 'price') {
            sortedArray.sort((a, b) => a.price - b.price);
        }
        setSortedFlights(sortedArray);
    }, [flights, sortType]);

    return (
        <div className="flight-list">
            {sortedFlights.map(flight => (
                <div key={flight.id} className="flight">
                    <div className="main-info">
                        <div className="departure-detail">
                            <div className="departure-time">{flight.departureTime}</div>
                            <div className="departure-airport">{flight.departureAirport}</div>
                        </div>
                        <div className="duration-detail">
                            <div className="duration">{flight.duration}</div>
                            <div className="duration-icon">————————⇀</div>
                        </div>
                        <div className="arrival-detail">
                            <div className="arrival-time">{flight.arrivalTime}</div>
                            <div className="arrival-airport">{flight.arrivalAirport}</div>
                        </div>
                        <div></div>
                        <div className="price">¥{flight.price}</div>
                    </div>
                    <div className="airline">{flight.airline}</div>
                </div>
            ))}
        </div>
    );
};

export default FlightList;
