export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = [
      {
        login: "matheustorresdev97",
        name: "Matheus Torres",
        public_repos: "75",
        followers: "9889",
      },
    ];
  }
  delete(user) {
    const filteredENtries = this.entries.filter(
      (entry) => entry.login !== user.login
    );

    console.log(filteredENtries);
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector(".user img").alt = `Imagem de ${user.name}`;
      row.querySelector(".user p").textContent = user.name;
      row.querySelector(".user span").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".remove").onclick = () => {
        const isOk = confirm("Tem certeza que deseja deletar essa linha?");

        if (isOk) {
          this.delete(user);
        }
      };

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="user">
       <img src="https://github.com/matheustorresdev97.png" alt="Imagem de maykbrito">
       <a href="https://github.com/matheustorresdev97" target="_blank">
         <p>Matheus Torres</p>
         <span>matheustorresdev97</span>
       </a>
     </td>
     <td class="repositories">
       76
     </td>
     <td class="followers">
       9589
     </td>
     <td>
       <button class="remove">&times;</button>
     </td>
    `;

    return tr;
  }

  removeAllTr() {
    const tbody = this.root.querySelector("table tbody");

    tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
