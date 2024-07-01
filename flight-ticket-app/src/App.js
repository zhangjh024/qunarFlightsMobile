import React, { useState,useEffect } from 'react';
import { Provider,useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from './actions/flightActions';
import store from './store';
import FlightList from './components/FlightList';
import { LeftOutlined, SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import BottomBar from './components/BottomBar';
import './App.css';


const daysOfWeek = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

const DateSelector = ({ onSelectDate }) => {
    const today = new Date();
    const dates = Array.from({ length: 5 }, (_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const isToday = i === 0;
        return {
            fullDate: date.toISOString().slice(0, 10),
            displayDate: `${date.getMonth() + 1}-${date.getDate()}`,
            dayOfWeek: isToday ? '今天' : daysOfWeek[date.getDay()],
            lowestPrice:750,
        };
    });
    dates[0].lowestPrice = 820;
    dates[3].lowestPrice = 950;
    dates[4].lowestPrice = 850;
    return (
        <div className="date-selector">
            {dates.map(({ fullDate, displayDate, dayOfWeek,lowestPrice }) => (
                <button key={fullDate} onClick={() => onSelectDate(fullDate)} className="date-button">
                    <div>{displayDate}</div>
                    <div>{dayOfWeek}</div>
                    <div>¥{lowestPrice}</div>
                </button>
            ))}
            <button className="date-button more-dates">
                <div><CalendarOutlined /></div>
                <div>更多日期</div>
            </button>
        </div>
    );
};

function App() {
    const [selectedDate, setSelectedDate] = useState('');
    const [sortType, setSortType] = useState('recommended');

    const handleSortByRecommended = () => setSortType('recommended');
    const handleSortByTime = () => setSortType('time');
    const handleSortByPrice = () => setSortType('price');

    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <LeftOutlined className="back-icon"/>
                    <h1>北京⇀上海</h1>
                    <SearchOutlined className="search-icon"/>
                </header>
                <DateSelector onSelectDate={setSelectedDate}/>
                <FlightList selectedDate={selectedDate} sortType={sortType}/>
                <BottomBar onSortByRecommended={handleSortByRecommended} onSortByTime={handleSortByTime} onSortByPrice={handleSortByPrice}/>
            </div>
        </Provider>
    );
}

export default App;
