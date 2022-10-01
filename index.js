// // //cors is use for make the requirest from client to the server 
// // //simple lang use for calling the api
// // app.use(cors)

// // //when we send the information from client to server we have to parse the data in json
// // // then express.json must be used
// // app.use(express.json)

// const express = require("express");
// const app = express();
// const mysql = require("mysql2");
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "Abhi@$2020",
//   database: "employeeSystem",
// });

// //create employee
// app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   const country = req.body.country;
//   const position = req.body.position;
//   const wage = req.body.wage;

//   db.query(
//     "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
//     [name, age, country, position, wage],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Values Inserted");
//       }
//     }
//   );
// });



// //get all employees
// app.get("/employees", (req, res) => {
//   db.query("SELECT * FROM employees", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });


// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });


// app.listen(3001, () => {
//   console.log("Yey, your server is running on port 3001");
// });


//import all the dependies
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

//use that depen
app.use(cors());
app.use(express.json());

//mysql connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Abhi@$2020",
  database: "employeeSystem",
});

//create api employee
app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});


//get all the employees
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


//update all the employees
app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


//delete the users
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});