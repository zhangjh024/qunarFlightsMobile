import React, { useEffect, useState } from 'react';
import { FilterOutlined, SwapOutlined, ClockCircleOutlined, DollarOutlined } from '@ant-design/icons';
import './BottomBar.css';

const BottomBar = ({ onSortByRecommended, onSortByTime, onSortByPrice }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [selectedButton, setSelectedButton] = useState('recommended');

    const handleScroll = () => {
        setIsVisible(false);
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(() => {
            setIsVisible(true);
        }, 200);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSortByRecommended = () => {
        setSelectedButton('recommended');
        onSortByRecommended();
    };

    const handleSortByTime = () => {
        setSelectedButton('time');
        onSortByTime();
    };

    const handleSortByPrice = () => {
        setSelectedButton('price');
        onSortByPrice();
    };

    return (
        <div className={`bottom-bar ${isVisible ? 'visible' : 'hidden'}`}>
            <div className={`bottom-bar-item ${selectedButton === 'filter' ? 'selected' : ''}`}>
                <FilterOutlined />
                <div>筛选</div>
            </div>
            <div className={`bottom-bar-item ${selectedButton === 'recommended' ? 'selected' : ''}`} onClick={handleSortByRecommended}>
                <SwapOutlined />
                <div>推荐排序</div>
            </div>
            <div className={`bottom-bar-item ${selectedButton === 'time' ? 'selected' : ''}`} onClick={handleSortByTime}>
                <ClockCircleOutlined />
                <div>时间</div>
            </div>
            <div className={`bottom-bar-item ${selectedButton === 'price' ? 'selected' : ''}`} onClick={handleSortByPrice}>
                <DollarOutlined />
                <div>价格</div>
            </div>
        </div>
    );
};

export default BottomBar;
