const os = require("os");

//узнаем операционную сист
console.log(os.platform());

//архитектура
console.log(os.arch());

//инфо
// console.log(os.cpus());

//свободная память
console.log(os.freemem());

//сколько всего памяти
console.log(os.totalmem());

//корневая директория
console.log(os.homedir());
