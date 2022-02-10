const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

const multer = require('multer');
const upload = multer({ dest: './upload' });

app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM CUSTOMER WHERE isDeleted = 0",
        (err, rows, fields) => {
            res.send(rows);
        }
    );
});

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req,res) => {
    let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, now(), 0)';
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [image, name, birthday, gender, job];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        })
})

app.delete('/api/customers/:id', (req, res) => {
    let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        })
})

app.listen(port, () => console.log(`Connected on port ${port}`));

/*
USE management;

CREATE TABLE CUSTOMER (
    id INT PRIMARY KEY AUTO_INCREMENT,
    image VARCHAR(1024),
    name VARCHAR(64),
    birthday VARCHAR(64),
    gender VARCHAR(64),
    job VARCHAR(64)
) DEFAULT CHARACTER SET UTF8 COLLATE uft8_general_ci;

INSERT INTO CUSTOMER VALUES (1, 'https://placeimg.com/64/64/1', '홍길동', '960508', '남자', '대학생');
INSERT INTO CUSTOMER VALUES (2, 'https://placeimg.com/64/64/2', '나동빈', '961222', '남자', '프로그래머');
INSERT INTO CUSTOMER VALUES (3, 'https://placeimg.com/64/64/3', '이순신', '961127', '남자', '디자이너');
INSERT INTO CUSTOMER VALUES (4, 'https://placeimg.com/64/64/4', '유성룡', '950205', '남자', '변호사');

데이터 삭제
ALTER TABLE CUSTOMER ADD createdDate DATETIME;
ALTER TALBE CUSTOMER ADD isDeleted INT;
UPDATE CUSTOMER SET createDate = NOW();
UPDATE CUSTOMER SET is Deleted = 0;
DESE CUSTOMER;


*/