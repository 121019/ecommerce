//const { verifyPassword } = require("../services/auth");

const AbstractManager = require("./AbstractManager");

class usersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, dateofbirth, email, password, address, city, postcode, phone) VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        users.firstname,
        users.lastname,
        users.dateofbirth,
        users.email,
        users.password,
        users.address,
        users.city,
        users.postcode,
        users.phone,
      ]
    );
  }

  findByEmail(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }

  find(id) {
    return this.database.query(
      `SELECT firstname, lastname, email, adress, city, postcode, phone FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }

  findByName(name) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE name = ?`, [
      name,
    ]);
  }

  async update(users) {
    let query;
    if (users.password === "") {
      query = this.database.query(
        `UPDATE ${this.table} SET firstname = ?, lastname = ?, email = ?, adress = ?, city = ?, postcode = ?, phone = ? WHERE id = ?`,
        [
          users.firstname,
          users.lastname,
          users.email,
          users.cv,
          users.adress,
          users.city,
          users.postcode,
          users.phone,
          users.id,
        ]
      );
    } else {
      query = this.database.query(
        `UPDATE ${this.table} SET firstname = ?, lastname = ?, email = ?, hashedpassword = ?, cv = ?, adress = ?, city = ?, postcode = ?, phone = ? WHERE id = ?`,
        [
          users.firstname,
          users.lastname,
          users.email,
          users.hashedpassword,
          users.cv,
          users.adress,
          users.city,
          users.postcode,
          users.phone,
          users.id,
        ]
      );
    }
    return query;
  }


  async verifyUserPassword(email, password) {
    const [rows] = await this.findByEmail(email);

    if (!rows[0]) {
      console.error("users not found");
      return false;
    }

    const candidat = rows[0];

    const isPasswordValid = await verifyPassword(users.password, password);

    return isPasswordValid;
  }
}

module.exports = usersManager;
