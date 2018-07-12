console.log("db.js is running...");


const mongoose = require("mongoose");
const db = mongoose.connection;
const Company = require("./company");


mongoose.connect("mongodb://localhost:27017/company");

db.on("error", (err) => {
	console.log(err);
});

db.on("connected", () => {
	console.log("mongoose is connected to mongodb");
});


Company.create({
	name: "Apple",
	founded: "April 1, 1976",
	employees: 2,
	active: false,
	products: ["computers"],
	CEO: {
		name: "Steve Jobs",
		age: 21
	}, 	
}, (err, res) => {
	if (err) {
		console.log(err);
	} else {
		console.log(res)
	}
});




