import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, '../react-app/dist')));

// Handle all other routes and send index.html (for React Router support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-app/dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
