import express from "express";
import fileUpload from "express-fileupload";
import moviesRouter from "./routes/movies.routes";
import cors from "cors";
import commentsRouter from "./routes/comments.routes";
import loginRouter from "./routes/auth.routes";
import verifyToken from "./routes/verify.token.routes";

const app = express();

//middlewares
app.use(express.json());
app.use(
  fileUpload({
    //cuando se sube una image no la mantenga en memoria sino que la meta dentro de una carpeta.
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);
//cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", moviesRouter);
app.use("/api", commentsRouter);
app.use("/", loginRouter);
app.use("/", verifyToken);

export default app;
