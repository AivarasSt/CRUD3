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

  deleteCar = (id) => {
    API.deleteCar(
      this.fetchCars,
      this.showError,
      id
    );
  }

  saveCars = (cars) => {
    this.state.cars = cars;
    this.state.loading = false;
    this.render();
  }

  showError = error => console.error(error);

  wrapChild = element => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-lg-6';
    wrapper.append(element);
    return wrapper;
  }

  init = () => {
    this.state.loading = true;
    setTimeout(() => this.fetchCars(), 1000)
    this.htmlElement.className = 'row g-3';
    this.render();
  }

  render = () => {
    const { loading, cars } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif" /></div>';
    } else if (cars.length > 0) {
      this.htmlElement.innerHTML = '';
      const wrappedElements = cars
        .map(({ id, ...cardProps }) => new CarCardComponent({
          ...cardProps,
          onDelete: () => this.deleteCar(id)
        }))
        .map(component => component.htmlElement)
        .map(this.wrapChild);
      this.htmlElement.append(...wrappedElements);
    } else {
      this.htmlElement.innerHTML = 'Deja, šiuo metu duomenų nėra';
    }
  }
}
