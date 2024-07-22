import express from "express";
import fs from "node:fs";
import path from "node:path";
import { join } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

const filePath = path.join(__dirname, "products.txt");

app.get("/api/products", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    try {
      const products = JSON.parse(data);
      res.status(200).json(products);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
    }
  });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
