const express = require("express");
const axios = require("axios").default;
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/ping", (req, res) => {
	console.log("pong");
	return res.status(200).send({ pong: "pong" });
});

app.get("/search/:search", async (req, res) => {
	const search = req.params.search;
	if (!search) {
		return res.status(400).send({ error: "please use a name filter" });
	}
	const response = await axios.get(
		`https://v2.api-football.com/players/search/${search}`,
		{ headers: { "X-RapidAPI-Key": process.env.Key } }
	);
	return res.status(200).send(response.data);
});

app.use("*", (req, res) => {
	res.status(400).send({ error: "invalid route" });
});

app.listen(process.env.PORT || 3000, () =>
	console.log("Listening to port:  " + (process.env.PORT || 3000))
);
