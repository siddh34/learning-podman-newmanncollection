const { Collection, Item } = require("newman-collection");
const newman = require("newman");
const fs = require("fs");

let oCollection = new Collection([
	new Item("localhost GET")
		.get("http://localhost:3000/")
		.pm.test("Status code is 200", () => {
			pm.response.to.have.status(200);
		}),
	new Item("localhost movies GET")
		.get("http://localhost:3000/movies")
		.pm.test("Status code is 200", () => {
			pm.response.to.have.status(200);
		}),
	new Item("localhost movies POST")
		.post("http://localhost:3000/movies")
		.body({
			id: 1,
			name: "The Matrix",
			genre: "Sci-Fi",
			director: "Lana Wachowski",
			year: 1999,
		})
		.pm.test("Status code is 200", () => {
			pm.response.to.have.status(200);
		}),
	new Item("localhost movie 1 GET")
		.get("http://localhost:3000/movies/1")
		.pm.test("Status code is 200", () => {
			pm.response.to.have.status(200);
		}),
]);

newman.run(
	{
		collection: oCollection.collection,
		reporters: ["cli"],
	},
	function (err, summary) {
		if (err) {
			throw err;
		}
		console.log("Collection run complete!");

		fs.writeFileSync("summary.json", JSON.stringify(summary));
	}
);
