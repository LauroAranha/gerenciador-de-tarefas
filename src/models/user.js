import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        //chama o método init da classe que está sendo entendida (model) com a função super
        initials: {
          type: Sequelize.VIRTUAL,
          get() {
            const match = this.name.split("  ");
            if (match.lenght > 1) {
              return `${match[0][0]}${match[match.length - 1][0]}`;
            } else {
              return match[0][0];
            }
          },
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,

        //virtual significa que o valor do atributo só
        //existe na memória do dispostivo, não indo pro banco de dados, assim dá pra botar as regras de negócio no código
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        role: Sequelize.ENUM("admin", "manager", "developer"),
        status: Sequelize.ENUM("active", "archived"),
      },
      {
        sequelize,
        name: {
          singular: "user",
          plural: "users",
        },
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Project);
  }
}

export default User;
