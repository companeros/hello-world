const dateStr = '2022-07-21T09:35:31.820Z';

const date = new Date(dateStr);
console.log(date); // 👉️ Thu Jul 21 2022 12:35:31 GMT+0300

const result = new Date(date.toISOString().slice(0, -1));
console.log(result); // 👉️ Thu Jul 21 2022 09:35:31 GMT+0300
