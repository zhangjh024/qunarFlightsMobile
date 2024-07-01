const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

// 启用 CORS
app.use(cors({
    origin: '*' // 这允许所有域名访问，如果需要限制特定域名，可以替换 '*' 为特定的URL
}));

app.use(bodyParser());

// 示例机票数据
const flights = [
    {
        date: '2024-07-01',
        price: 820,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时5分',
        departureTime: '20:50',
        arrivalTime: '22:55',
        airline: '中联航KN5977 波音737(中)'
    },
    {
        date: '2024-07-01',
        price: 940,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: true,
        duration: '2小时5分',
        departureTime: '20:30',
        arrivalTime: '22:35',
        airline: '国航CA8686 空客321(中)'
    },
    {
        date: '2024-07-01',
        price: 990,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: false,
        duration: '2小时5分',
        departureTime: '17:30',
        arrivalTime: '19:35',
        airline: '厦航MF8555 波音738(中)'
    },
    {
        date: '2024-07-01',
        price: 1020,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: true,
        duration: '2小时40分',
        departureTime: '17:25',
        arrivalTime: '20:05',
        airline: '国航CA8680 空客320(中)'
    },
    {
        date: '2024-07-01',
        price: 1040,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: false,
        duration: '2小时5分',
        departureTime: '17:30',
        arrivalTime: '19:35',
        airline: '南航CZ4447 波音738(共享)'
    },
    {
        date: '2024-07-01',
        price: 1040,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: false,
        duration: '2小时5分',
        departureTime: '17:30',
        arrivalTime: '19:35',
        airline: '长龙航GJ3647 波音738(共享)'
    },
    {
        date: '2024-07-01',
        price: 1090,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: false,
        duration: '2小时15分',
        departureTime: '14:25',
        arrivalTime: '16:40',
        airline: '吉祥航HO1252 空客321(中)'
    },
    {
        date: '2024-07-01',
        price: 1090,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: false,
        duration: '2小时15分',
        departureTime: '14:25',
        arrivalTime: '16:40',
        airline: '吉祥航HO1252 空客321(中)'
    },
    {
        date: '2024-07-02',
        price: 750,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: true,
        duration: '2小时5分',
        departureTime: '08:00',
        arrivalTime: '10:05',
        airline: '东航MU1234 波音737(中)'
    },
    {
        date: '2024-07-02',
        price: 800,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: false,
        duration: '2小时10分',
        departureTime: '09:00',
        arrivalTime: '11:10',
        airline: '南航CZ5678 空客320(中)'
    },
    {
        date: '2024-07-02',
        price: 950,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时5分',
        departureTime: '10:00',
        arrivalTime: '12:05',
        airline: '海航HU7890 波音737(中)'
    },
    {
        date: '2024-07-02',
        price: 980,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: true,
        duration: '2小时15分',
        departureTime: '11:00',
        arrivalTime: '13:15',
        airline: '国航CA2345 空客321(中)'
    },
    {
        date: '2024-07-02',
        price: 1000,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时10分',
        departureTime: '12:00',
        arrivalTime: '14:10',
        airline: '中联航KN3456 波音737(中)'
    },
    {
        date: '2024-07-02',
        price: 1050,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: true,
        duration: '2小时5分',
        departureTime: '13:00',
        arrivalTime: '15:05',
        airline: '厦航MF5678 波音738(中)'
    },
    {
        date: '2024-07-02',
        price: 1070,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时10分',
        departureTime: '14:00',
        arrivalTime: '16:10',
        airline: '南航CZ6789 空客320(中)'
    },
    {
        date: '2024-07-02',
        price: 1090,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: false,
        duration: '2小时15分',
        departureTime: '15:00',
        arrivalTime: '17:15',
        airline: '吉祥航HO2345 空客321(中)'
    },
    {
        date: '2024-07-03',
        price: 750,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时5分',
        departureTime: '08:00',
        arrivalTime: '10:05',
        airline: '东航MU1234 波音737(中)'
    },
    {
        date: '2024-07-03',
        price: 800,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: true,
        duration: '2小时10分',
        departureTime: '09:00',
        arrivalTime: '11:10',
        airline: '南航CZ5678 空客320(中)'
    },
    {
        date: '2024-07-04',
        price: 950,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时5分',
        departureTime: '10:00',
        arrivalTime: '12:05',
        airline: '海航HU7890 波音737(中)'
    },
    {
        date: '2024-07-04',
        price: 980,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: true,
        duration: '2小时15分',
        departureTime: '11:00',
        arrivalTime: '13:15',
        airline: '国航CA2345 空客321(中)'
    },
    {
        date: '2024-07-04',
        price: 1000,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时10分',
        departureTime: '12:00',
        arrivalTime: '14:10',
        airline: '中联航KN3456 波音737(中)'
    },
    {
        date: '2024-07-04',
        price: 1050,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: true,
        duration: '2小时5分',
        departureTime: '13:00',
        arrivalTime: '15:05',
        airline: '厦航MF5678 波音738(中)'
    },
    {
        date: '2024-07-04',
        price: 1070,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时10分',
        departureTime: '14:00',
        arrivalTime: '16:10',
        airline: '南航CZ6789 空客320(中)'
    },
    {
        date: '2024-07-04',
        price: 1090,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: false,
        duration: '2小时15分',
        departureTime: '15:00',
        arrivalTime: '17:15',
        airline: '吉祥航HO2345 空客321(中)'
    },
    {
        date: '2024-07-05',
        price: 850,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时5分',
        departureTime: '08:00',
        arrivalTime: '10:05',
        airline: '东航MU1234 波音737(中)'
    },
    {
        date: '2024-07-05',
        price: 900,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: true,
        duration: '2小时10分',
        departureTime: '09:00',
        arrivalTime: '11:10',
        airline: '南航CZ5678 空客320(中)'
    },
    {
        date: '2024-07-05',
        price: 950,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时5分',
        departureTime: '10:00',
        arrivalTime: '12:05',
        airline: '海航HU7890 波音737(中)'
    },
    {
        date: '2024-07-05',
        price: 980,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T2',
        fewTicketsLeft: true,
        duration: '2小时15分',
        departureTime: '11:00',
        arrivalTime: '13:15',
        airline: '国航CA2345 空客321(中)'
    },
    {
        date: '2024-07-05',
        price: 1000,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时10分',
        departureTime: '12:20',
        arrivalTime: '14:30',
        airline: '中联航KN3456 波音737(中)'
    },
    {
        date: '2024-07-05',
        price: 1001,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时10分',
        departureTime: '12:15',
        arrivalTime: '14:25',
        airline: '中联航KN3456 波音737(中)'
    },
    {
        date: '2024-07-05',
        price: 1002,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时10分',
        departureTime: '12:10',
        arrivalTime: '14:20',
        airline: '中联航KN3456 波音737(中)'
    },
    {
        date: '2024-07-05',
        price: 1003,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时10分',
        departureTime: '12:05',
        arrivalTime: '14:15',
        airline: '中联航KN3456 波音737(中)'
    },
    {
        date: '2024-07-05',
        price: 1004,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时10分',
        departureTime: '12:00',
        arrivalTime: '14:10',
        airline: '中联航KN3456 波音737(中)'
    },
    {
        date: '2024-07-05',
        price: 1005,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时10分',
        departureTime: '12:00',
        arrivalTime: '14:10',
        airline: '中联航KN3456 波音737(中)'
    },
    {
        date: '2024-07-05',
        price: 1006,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时10分',
        departureTime: '12:00',
        arrivalTime: '14:10',
        airline: '中联航KN3456 波音737(中)'
    },
    {
        date: '2024-07-05',
        price: 1007,
        departureAirport: '北京大兴',
        arrivalAirport: '浦东T1',
        fewTicketsLeft: false,
        duration: '2小时10分',
        departureTime: '12:00',
        arrivalTime: '14:10',
        airline: '中联航KN3456 波音737(中)'
    },
];



// 定义一个路由来获取机票数据

router.get('/flights', (ctx) => {
    let { date } = ctx.query;  // 从查询参数中获取日期
    if (!date) {
        date = new Date().toISOString().split('T')[0];  // 使用当前日期作为默认日期
    }
    const filteredFlights = flights.filter(flight => flight.date === date);  // 过滤出符合该日期的航班
    ctx.body = filteredFlights.length > 0 ? filteredFlights : { error: "No flights available for this date." };
});



// 使用路由
app.use(router.routes());
app.use(router.allowedMethods());

const port = 3011;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
