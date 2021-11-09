class CarGridComponent {
  constructor() {
    this.htmlElement = document.createElement('div');
    this.state = {
      cars: []
    };
    this.init();
  }


  init = () => {
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    if (this.state.cars.length === 0) {
      this.htmlElement.innerHTML = `NĖRA DUOMENŲ`;
    } else {
      this.htmlElement.innerHTML = "<pre>" + JSON.stringify(this.state.cars) + "</pre>";
    };
  }
}  
