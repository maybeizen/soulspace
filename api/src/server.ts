import "dotenv/config";
import app from "./app";
import { Database, type MongoURI } from "./utils/database";

const MONGODB_URI: MongoURI = process.env.MONGODB_URI!;
const db: Database = new Database(MONGODB_URI, {});
const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await db.connect();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
})();
