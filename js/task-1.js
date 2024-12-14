//home_task1
// Перед звільненням розробник зламав вихідний код управління акаунтами 
// користувачів нашого сервісу доставки їжі.Виконай рефакторинг методів 
// об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// Використай цей стартовий код і виконай рефакторинг.Після оголошення 
// об'єкта ми додали виклики методів. У консоль будуть виведені результати їх роботи. 
// Будь ласка, нічого там не змінюй.



const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
   const balance = this.balance;
    return balance;
  },
  getDiscount() {
    const discount = this.discount;
    return discount;
  },
  setDiscount(value) {
    this.discount = value;
   },
  getOrders() {
    const orders = this.orders;
    return orders;
    
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};
customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


