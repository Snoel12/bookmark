const express = require("express");
const app = express();
const PORT = 1337;
const syncAndSeed = require(syncAndSeed);
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
//const result = syncAndSeed();
app.get("/", (req, res, next) => {
  res.redirect("/bookmarks");
});

app.get("/bookmarks", (req, res, next) => {
  const html = ` <html lang="en">
    <head>
       
        <title>Bookmark</title>
    </head>
    <body>
       <ul> 
       <li>  </li>
       </ul>
    </body>
    </html>
    
    `;
  res.send(html);
});
