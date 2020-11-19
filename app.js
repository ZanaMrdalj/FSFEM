const express = require ("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {

	res.send("Pa cao svete!");
	res.end();
});

app.listen(port, () => {

	console.log(`we are listening at port:${port}`);
});
