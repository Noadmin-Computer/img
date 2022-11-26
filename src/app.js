const express = require("express");
const PORT = process.env.PORT || 2032;
const app = express();

const reader = require("./middleware/reader");
const authToken = require("./middleware/authToken");
const userRouter = require("./routes/users.routes");
const authRouter = require("./routes/auth.routes");

app.use(express.json());
app.use(reader);

app.use("/auth", authRouter);
app.use(authToken);
app.use("/users", userRouter);

app.listen(PORT, () => console.log("server is runnig on port " + PORT));
