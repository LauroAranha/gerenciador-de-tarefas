import AdminJS from "adminJS";
import Task from "../models/task";

//configurações da interface (ícones, informações apresentadas, ordem dos dados e etc)
export default {
  resource: Task,
  options: {
    parent: {
      icon: "Task",
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
        isVisible: { list: false, filter: false, show: true, edit: true },
        type: "richtext",
        props: {
          quill: {
            modules: {
              toolbar: [
                ["bold", "italic"],
                ["link", "image"],
              ],
            },
          },
        },
      },
      due_date: {
        position: 4,
      },
      effort: {
        position: 5,
      },
      order: {
        position: 6,
      },
      status: {
        position: 7,
        isRequired: true,
        availableValues: [
          { value: "backlog", label: "Backlog" },
          { value: "doing", label: "Em execução" },
          { value: "done", label: "Pronto" },
          { value: "approved", label: "Aprovado" },
          { value: "rejected", label: "Rejeitado" },
        ],
      },
      projectId: {
        position: 8,
        isRequired: true,
        isVisible: { list: false, filter: true, show: true, edit: true },
      },
      userId: {
        position: 9,
        isRequired: true,
      },
      createdAt: {
        position: 10,
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      updatedAt: {
        position: 11,
        isVisible: { list: false, filter: true, show: true, edit: false },
      },
      user_id: {
        isVisible: false,
      },
      project_id: {
        isVisible: false,
      },
    },
  },
};
