const express = require("express");
const axios = require("axios").default;
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors);

app.use("*", (req, res) => {
	console.log("funcionou");
	return res.status(200).send();
});

app.get("/ping", (req, res) => {
	return res.status(200).send();
});

app.get("/search/:search", async (req, res) => {
	const search = req.params.search;
	//const response = await axios.get(
	//	`https://v2.api-football.com/players/search${search}`
	//);
	console.log("https://v2.api-football.com/players/search${search}");
	return res.status(200).send();
});

app.listen(process.env.PORT, () =>
	console.log("ouvindo a Porta " + process.env.PORT)
);
