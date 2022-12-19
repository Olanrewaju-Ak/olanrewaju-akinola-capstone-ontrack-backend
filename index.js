const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "DELETE", "PATCH", "PUT"]
	})
);

const transactionRoutes = require("./routes/transactionRoutes");
const budgetsRoutes = require("./routes/budgetsRoutes");

app.use("/api/transactions", transactionRoutes);

app.use("/api/budgets", budgetsRoutes);

app.listen(PORT, () => {
	console.log(`running at http://localhost:${PORT}`);
});
