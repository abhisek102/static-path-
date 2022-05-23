const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const staticpath = path.join(__dirname, '/project');
app.use(express.static(staticpath));
app.listen(port);
