class price {
  constructor(
    name,
    pickupPoint,
    dropPoint,
    distance,
    start,
    end,
    totalTime,
    night
  ) {
    this.name = name;
    this.pickupPoint = pickupPoint;
    this.dropPoint = dropPoint;
    this.distance = distance;
    this.start = start;
    this.end = end;
    this.totalTime = totalTime;
    this.night = night;
  }

  getPrice() {
    let price;
    let minAmount = 50;
    if (this.distance >= 20) {
      if (this.night) {
        price = minAmount + this.distance * 2 * 20;
        console.log("Price:" + price.toFixed(2));
      } else {
        price = minAmount + this.distance * 1 * 20;
        console.log("Price:" + price.toFixed(2));
      }
    } else {
      if (this.night) {
        price = minAmount + this.distance * 2 * 15;
        console.log("Price:" + price.toFixed(2));
      } else {
        price = minAmount + this.distance * 1 * 20;
        console.log("Price:" + price.toFixed(2));
      }
    }
  }
}
