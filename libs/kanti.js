import EventEmitter from 'events';

class Client extends EventEmitter {
  constructor(botname) {
    super();
    this.botname = botname
    this.on("message", (message) => {
      fetch("http://51.81.29.82:3047/api/v1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "botname": this.botname,
          "token": this.token,
          "message": message
        })
      })
       .then(response => {
         if (!response.ok) {
           return console.error("Something went wrong, check the api status.")
         }
       })
    });
  }
  async SendMessage(message) {
    this.emit("message", message)
  }
  
  async run(token) {
    if (token !== "409-655") {
      console.error("The token is invalid, please enter the correct one.")
      return;
    }
    this.token = token;
    console.log("Starting Bot")
    
  }
}

export default Client;
