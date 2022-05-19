import AdminJS from "adminJS";
import Project from "../models/project";

//configurações da interface (ícones, informações apresentadas, ordem dos dados e etc)
export default {
  resource: Project,
  options: {
    parent: {
      icon: "Roadmap",
    },

    properties: {
      id: {
        position: 1,
      },
      name: {
        position: 2,
        isRequired: true,
      },
      description: {
        position: 3,
        type: "textarea",
      },
      userId: {
        position: 4,
      },
      user_id: {
        isVisible: false,
      },
      status: {
        position: 5,
        isRequired: true,
        availableValues: [
          { value: "active", label: "Ativo" },
          { value: "archived", label: "Arquivado" },
        ],
      },
      createdAt: {
        position: 6,
        isVisible: {
          list: true,
          filter: false,
          show: true,
          edit: false,
        },
      },
      updatedAt: {
        position: 7,
        isVisible: {
          list: true,
          filter: false,
          show: true,
          edit: false,
        },
      },
    },
  },
};
