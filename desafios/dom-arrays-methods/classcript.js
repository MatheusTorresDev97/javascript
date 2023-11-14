class WealthManager {
    constructor() {
      this.main = document.getElementById("main");
      this.addUserButton = document.getElementById("add-user");
      this.doubleButton = document.getElementById("double");
      this.showMillionairesButton = document.getElementById("show-millionaires");
      this.sortButton = document.getElementById("sort");
      this.calculateWealthButton = document.getElementById("calculate-wealth");
  
      this.data = [];
  
      this.getRandomUser = this.getRandomUser.bind(this);
      this.addData = this.addData.bind(this);
      this.updateDom = this.updateDom.bind(this);
      this.formatMoney = this.formatMoney.bind(this);
      this.doubleMoney = this.doubleMoney.bind(this);
      this.sortByRichest = this.sortByRichest.bind(this);
      this.showMillionaires = this.showMillionaires.bind(this);
      this.calculateWealth = this.calculateWealth.bind(this);
  
      this.addUserButton.addEventListener("click", this.getRandomUser);
      this.doubleButton.addEventListener("click", this.doubleMoney);
      this.sortButton.addEventListener("click", this.sortByRichest);
      this.showMillionairesButton.addEventListener("click", this.showMillionaires);
      this.calculateWealthButton.addEventListener("click", this.calculateWealth);
  
      // Init
      this.getRandomUser();
      this.getRandomUser();
    }
  
    async getRandomUser() {
      const res = await fetch("https://randomuser.me/api");
      const userData = await res.json();
      const user = userData.results[0];
      const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000),
      };
  
      this.addData(newUser);
    }
  
    addData(user) {
      this.data.push(user);
      this.updateDom();
    }
  
    updateDom(providedData = this.data) {
      this.main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";
      providedData.forEach((person) => {
        const element = document.createElement("div");
        element.classList.add("person");
        element.innerHTML = `<strong>${person.name}</strong> ${this.formatMoney(
          person.money
        )}`;
        this.main.appendChild(element);
      });
    }
  
    formatMoney(number) {
      return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
  
    doubleMoney() {
      this.data = this.data.map((user) => ({ ...user, money: user.money * 2 }));
      this.updateDom();
    }
  
    sortByRichest() {
      this.data.sort((a, b) => b.money - a.money);
      this.updateDom();
    }
  
    showMillionaires() {
      this.data = this.data.filter((user) => user.money > 1000000);
      this.updateDom();
    }
  
    calculateWealth() {
      const wealth = this.data.reduce(
        (accumulator, user) => (accumulator += user.money),
        0
      );
      const wealthElement = document.createElement("div");
      wealthElement.innerHTML = `<h3>Total wealth: <strong>${this.formatMoney(
        wealth
      )}</strong></h3>`;
      this.main.appendChild(wealthElement);
    }
  }
  
  // Crie uma instância do componente
  const wealthManager = new WealthManager();
  