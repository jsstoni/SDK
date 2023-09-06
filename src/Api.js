const useFetch = require("../utils/useFetch");

class Api {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.collectionCalled = false;
  }

  collection(name) {
    name = name.trim();
    if (name === "") {
      throw "The name cannot be empty";
    }
    this.collectionCalled = true;
    this.endpoint = name;
    return this;
  }

  collectionErrorHandle() {
    if (!this.collectionCalled) {
      throw "Collection no called";
    }
  }

  getData(options = {}) {
    this.collectionErrorHandle();
    if ("filter" in options) {
    }
    console.log(options);
  }

  createData(data = {}) {
    this.collectionErrorHandle();
  }

  removeData(id = null) {
    this.collectionErrorHandle();
  }

  updateData(id = null, data = {}) {
    this.collectionErrorHandle();
  }
}

module.exports = Api;
