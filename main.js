import express from "express"
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define your API routes
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

// Catch all other routes and return a 404 response
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
