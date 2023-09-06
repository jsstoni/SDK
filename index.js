const Api = require("./src/Api");

class Keapi extends Api {
  constructor(apiKey) {
    super(apiKey);
  }
}

const sdk = new Keapi(1);
sdk.collection("table").getData({
  filter: {
    id: " = 1 OR id > 1",
    message: " = jesus",
  },
});

module.exports = Keapi;
