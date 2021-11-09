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
    setTimeout(() => this.fetchCars(), 1000)
    this.render();
  }

  render = () => {
    const { loading, cars } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif" /></div>';
    } else if (cars.length > 0){
      this.htmlElement.innerHTML = '';
      const children = cars
        .map( x => new CarCardComponent)
        .map(x => x.htmlElement)
      this.htmlElement.append(...children);
    } else {
      this.htmlElement.innerHTML = 'Deja, šiuo metu duomenų nėra';
    }
  } 
}  
