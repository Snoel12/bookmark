const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/bookmark");

const data = [
  {
    name: "LinkedIn",
    URL: "http://www.linkedin.com",
    category: "jobs",
  },
  {
    name: "Indeed",
    URL: "http://www.indeed.com",
    category: "jobs",
  },
  {
    name: "Amazon",
    URL: "http://www.amazon.com",
    category: "shopping",
  },
  {
    name: "W3C Shools - Javascript",
    URL: "https://www.w3schools.com/jsref/default.asp",
    category: "coding",
  },
  {
    name: "Target",
    URL: "http://www.shopping.com",
    category: "shopping",
  },
  {
    name: "The Weeknd",
    URL: "https://www.theweeknd.com/",
    category: "music",
  },
  {
    name: "Stack Overflow",
    URL: "https://stackoverflow.com/",
    category: "coding",
  },
];

const Bookmark = db.define(bookmark, {
  name: { type: Sequelize.STRING },
  url: { type: Sequelize.STRING },
  category: { type: Sequelize.STRING },
});

const syncAndSeed = async () => {
  data.map((x) => {
    await Bookmark.create(x);
  });
};
module.exports = syncAndSeed();
