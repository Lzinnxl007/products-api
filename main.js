import express from "express";
import fs from "node:fs";
import path from "node:path";
import { join } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "../assets");

const xbz_path = path.join(__dirname, "xbz.txt");
const spot_path = path.join(__dirname, "spot.txt");

app.get("/api/products/xbz", (req, res) => {
  fs.readFile(xbz_path, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
});

app.get("/api/products/spot", (req, res) => {
  fs.readFile(spot_path, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
