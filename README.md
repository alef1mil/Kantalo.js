# Kantalo.js

![npm](https://img.shields.io/npm/v/kantalo.js)
![npm](https://img.shields.io/npm/dm/kantalo.js)

## How to use:

First install our library on npm

```shell
npm i kantalo.js
```

After you have done this create a file called **Index.js** (or whatever name) and then put this code

```js
import Client from "kantalo.js"

const Bot = new Client("Bot Tutorial") // Here you put the name of your bot

Bot.SendMessage("hello")

Bot.run() // your token
```