const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecom",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");

  let createTableQuery = `
    CREATE TABLE IF NOT EXISTS ecom (
      id INT AUTO_INCREMENT PRIMARY KEY,
      img VARCHAR(255),
      description VARCHAR(255),
      title VARCHAR(255),
      price DECIMAL(10, 2)
    )`;

  connection.query(createTableQuery, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Table created successfully.");

      let products = [
        {
          "img": "imgs/AOI.jpg",
          "desc": "",
          "title": "Blue Excorcist",
          "price": 100
        },
        {
          "img": "imgs/AOT.jpg",
          "desc": "",
          "title": "Attack On Titan",
          "price": 1000
        },
        {
          "img": "imgs/beni.jpg",
          "desc": "",
          "title": "Beni Fig",
          "price": 200
        },
        {
          "img": "imgs/DEVIL.jpg",
          "desc": "",
          "title": "Devil Man Crybaby",
          "price": 700
        },
        {
          "img": "imgs/fff.jpg",
          "desc": "",
          "title": "second gen",
          "price": 1000
        },
        {
          "img": "imgs/GHOUL.jpg",
          "desc": "",
          "title": "Tokyo Ghoul",
          "price": 600
        },
        {
          "img": "imgs/hunterlic.jpg",
          "desc": "",
          "title": "hunter license",
          "price": 400
        },
        {
          "img": "imgs/HXH.jpg",
          "desc": "",
          "title": "Hunter X Hunter",
          "price": 1000
        },
        {
          "img": "imgs/hxhpeak.jpg",
          "desc": "",
          "title": "Man Vs Ant",
          "price": 1000
        },
        {
          "img": "imgs/IRREG.jpg",
          "desc": "",
          "title": "Irregular At Magic Highschool",
          "price": 200
        },
        {
          "img": "imgs/JJK.jpg",
          "desc": "",
          "title": "Jujutsu Kaisen",
          "price": 200
        },
        {
            "img": "imgs/jjkf.jpg",
            "desc": "",
            "title": "Gojo",
            "price": 200
          },
          {
            "img": "imgs/MOB.jpg",
            "desc": "",
            "title": "Mob Pyscho",
            "price": 200
          },
          {
            "img": "imgs/mob.png",
            "desc": "",
            "title": "Mob Kun",
            "price": 200
          },
          {
            "img": "imgs/ONE.jpg",
            "desc": "",
            "title": "One Punch Man",
            "price": 200
          },
          {
            "img": "imgs/one.png",
            "desc": "",
            "title": "ONE PAUNCH!",
            "price": 200
          },
          {
            "img": "imgs/PASS.jpg",
            "desc": "",
            "title": "Pyscho Pass",
            "price": 200
          },
          {
            "img": "imgs/SYTE.jpg",
            "desc": "",
            "title": "Parasyte",
            "price": 200
          },
          {
            "img": "imgs/UZU.jpg",
            "desc": "",
            "title": "Uzumaki",
            "price": 200
          },
      ]

      let insertQuery = "INSERT INTO ecom (img, description, title, price) VALUES ?";

      let values = products.map(product => [
        product.img,
        product.description,
        product.title,
        product.price
      ]);

      connection.query(insertQuery, [values], function (err, results, fields) {
        if (err) {
          console.log(err.message);
        } else {
          console.log("Data inserted successfully.");
        }
        connection.end();
      });
    }
  });
});
