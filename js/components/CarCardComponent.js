class CarCardComponent {
  
  static USD_EUR = 0.86387687

  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('article');
    this.init();
  }
  
  init = () => {
    const { id, brand, model, year, fuelTypes, price, imgSrc } = this.props;
    const { amount, currency } = price;

    this.htmlElement.className = "card p-3 shadow-sm";
    this.htmlElement.innerHTML = `  
    <img src="${imgSrc}" style="height:300px">
    <div class="d-flex justify-content-between">
      <h2 class="my-2 text-uppercase fw-bold">${brand} ${model}</h2>
      <h2 class="badge my-3">${fuelTypes}</h2>
    </div>
    <h3 class="text-muted">${year}</h3>
    <div class="d-flex justify-content-between">
      <h2 class="price m-0 pt-1">${amount}${currency}<h2>
      <button class="btn btn-sm btn-secondary"><i class="bi bi-trash"></i></button>   
    </div>
    `;

    const delBtn = this.htmlElement.querySelector('.btn');
    delBtn.addEventListener('click', () => this.props.onDelete(id));

    const fuel = this.htmlElement.querySelector(".badge")
    switch (fuelTypes) {
      case 'petrol':
        fuel.classList.add ("bg-danger", "text-white")
        break
      case 'diesel':
        fuel.classList.add ("bg-warning")
        break
      case 'electric':
        fuel.classList.add ("bg-success", "text-white")
        break
      case 'hybrid':
        fuel.classList.add ("bg-info", "text-white")
        break
      case 'gas':
        fuel.classList.add ("bg-secondary", "text-white")
        break
      default: 
        break
    }

    const finalPrice = this.htmlElement.querySelector(".price")
    if(currency === "$"){
      finalPrice.innerHTML = `${Math.floor(amount * CarCardComponent.USD_EUR)}€` 
    } else if (currency === "€"){
      finalPrice.innerHTML = `${amount}${currency}`
    } else {
      finalPrice.innerHTML = `Kaina pateikta netinkama valiuta`
    }
  }
}