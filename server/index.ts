import { PORT } from "./config";
import { connectDb } from "./db/db";
import app from "./app";

connectDb();
app.listen(PORT);
console.log("Server running in port", PORT);
