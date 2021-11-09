class CarGridComponent {
  constructor() {
    this.htmlElement = document.createElement('div');
    this.state = {
      cars: [],
      loading: false
    };
    this.init();
  }

  fetchCars = () => {
    this.state.loading = true;
    API.getCars(this.saveCars, this.showError);
  }

  saveCars = (cars) => {
    this.state.cars = cars;
    this.state.loading = false;
    this.render();
  }

  showError = error => console.error(error);


  init = () => {
    this.state.loading = true;
    this.fetchCars();
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `siunčiama...`;
    } else {
      this.htmlElement.innerHTML = "Parsiųsta!";
    };
  }
}  
