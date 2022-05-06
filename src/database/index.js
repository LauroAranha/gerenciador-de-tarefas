import Sequelize from 'sequelize'
import config from '../config/database'
//import Model from '../models/xxxxx'

const models = [] //declaração da constante models, que chama todas as classes criadas até então

//classe do banco de dados
class Database {
  constructor() {
    this.connection = new Sequelize(config) //inicia uma nova instancia do sequelize
    this.init()
    this.associate()
  }

  //inicializa cada model do sequelize com o método init
  init() {
    models.forEach((model) => model.init(this.connection))
  }

  //verifica se o model tem alguma associação
  associate() {
    models.forEach((model) => {
      if (model.associate) {
        //verifica se o modelo está associado a algum outro método
        model.associate(this.connection.models)
      }
    })
  }
}

export default new Database()
