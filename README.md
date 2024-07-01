# 项目需求
## 功能描述
参照效果图（见附件），实现移动端页面。
要实现的主要功能请参照去哪儿网移动端机票列表页 https://m.flight.qunar.com/h5/flight/
## 技术要求
- 1.服务器搭建：使用 Node.js 搭建 HTTP 服务器。页面数据通过 Ajax 从服务器端获取。
- 2.前端实现：基于 React 完成页面开发。
- 3.使用两种状态管理工具（Redux 和 Mobx）分别实现一次状态管理。
- 4.功能实现：实现日期切换功能（不包括“更多日期”功能）。实现机票列表的三种筛选功能：推荐排序,时间排序,价格排序

![Ticket Example](flight-ticket-app/img/作业3.1业务系统移动前端开发参考图.gif)

# 项目运行
- `cd flight-api`
- `npm i`
- `node app.js`
- `cd flight-ticket-app`
- `npm i`
- `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
