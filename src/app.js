const express = require("express");
const PORT = process.env.PORT || 2032;
const app = express();
const path = require("path");
const fileUpload = require("express-fileupload");

app.use(fileUpload());

const reader = require("./middleware/reader");
const authToken = require("./middleware/authToken");
const userRouter = require("./routes/users.routes");
const authRouter = require("./routes/auth.routes");
const imageRouter = require("./routes/images.routes");
const fileUploadRouter = require("./routes/fileUpload.routes");
const downlaodRouter = require("./routes/downlaod.routes");

app.use(express.json());
app.use(reader);

app.use("/file", fileUploadRouter);
app.use("/auth", authRouter);
app.use(authToken);
app.use("/users", userRouter);
app.use("/images", imageRouter);
app.use("/download", downlaodRouter);

app.listen(PORT, () => console.log("server is runnig on port " + PORT));
