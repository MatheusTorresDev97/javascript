class UserList {
    constructor() {
        this.result = document.getElementById("result");
        this.filter = document.getElementById("filter");
        this.listItems = [];

        this.filterData = this.filterData.bind(this);
        this.getData = this.getData.bind(this);

        this.getData();

        this.filter.addEventListener("input", (e) => this.filterData(e.target.value));
    }

    async getData() {
        const res = await fetch("https://randomuser.me/api?results=50");
        const { results } = await res.json();
        this.result.innerHTML = "";
        results.forEach((user) => {
            const li = document.createElement("li");
            this.listItems.push(li);
            li.innerHTML = `
            <img
              src="${user.picture.large}"
              alt="${user.name.first}"
            />
            <div class="user-info">
              <h4>${user.name.first} ${user.name.last}</h4>
              <p>${user.location.city}, ${user.location.country}</p>
            </div>
          `;
            this.result.appendChild(li);
        });
    }

    filterData(searchTerm) {
        this.listItems.forEach((item) => {
            if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        });
    }
}

// Crie uma instância do componente
const userList = new UserList();
