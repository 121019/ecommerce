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
      `SELECT firstname, lastname, dateofbirth, email, adress, city, postcode, phone FROM ${this.table} WHERE id = ?`,
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
        `UPDATE ${this.table} SET firstname = ?, lastname = ?, dateofbirth = ? , email = ?, password = ?, adress = ?, city = ?, postcode = ?, phone = ? WHERE id = ?`,
        [
          users.firstname,
          users.lastname,
          users.dateofbirth,
          users.email,
          users.password,
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
          users.dateofbirth,
          users.email,
          users.hashedpassword,
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
}

module.exports = usersManager;
