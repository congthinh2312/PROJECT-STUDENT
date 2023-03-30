const express = require("express");
const router = require("./routers/root.router");
const cors = require("cors");
const app = express();
const port = 3000;

// kích hoạt cors
app.use(cors());

// chuyển req, res về json để tiện thao tác
app.use(express.json());

app.use(router);

// http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// setup sequelize
const {sequelize} = require("../app/model/index");
sequelize.sync({ alter: true }); //đồng bộ sửa bảng củ thành bảng mới