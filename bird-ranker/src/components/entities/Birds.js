class Birds {
    #image;
    #state;
    #name;
    #pro;
    #con;
  
    constructor(image, state, name, pro, con) {
      this.#image = image;
      this.#state = state;
      this.#name = name;
      this.#pro = pro;
      this.#con = con;
    }
  
    // Getter for image
    get image() {
      return this.#image;
    }
  
    // Setter for image
    set image(newImage) {
      this.#image = newImage;
    }
  
    // Getter for state
    get state() {
      return this.#state;
    }
  
    // Setter for state
    set state(newState) {
      this.#state = newState;
    }
  
    // Getter for name
    get name() {
      return this.#name;
    }
  
    // Setter for name
    set name(newName) {
      this.#name = newName;
    }
  
    // Getter for pro
    get pro() {
      return this.#pro;
    }
  
    // Setter for pro
    set pro(newPro) {
      this.#pro = newPro;
    }
  
    // Getter for con
    get con() {
      return this.#con;
    }
  
    // Setter for con
    set con(newCon) {
      this.#con = newCon;
    }
  }
  