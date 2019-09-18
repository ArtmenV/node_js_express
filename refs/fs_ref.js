const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "notes"), err => {
//   if (err) throw new Error(err);

//   console.log("папка была создана");
// });
//можно открывать файлы, менять, смотреть доку в разделе файл систем
fs.writeFile(
  path.join(__dirname, "notes", "mynotes.txt"),
  "hello world",
  err => {
    if (err) throw err;
    console.log("Файл был создан");
  }
);
