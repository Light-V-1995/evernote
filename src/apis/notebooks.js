import request from "../helpers/request";
import { friendlyDate } from "../helpers/util";

const URL = {
  GET: "/Notebooks",
  ADD: "/Notebooks",
  UPDATE: "/Notebooks/:id",
  DELETE: "/Notebooks/:id",
};
export default {
  getAll() {
    return new Promise((resolve, reject) => {
      request(URL.GET)
        .then((res) => {
          res.data = res.data.sort((notebook1, notebook2) => {
            if (notebook1.createdAt > notebook2.createdAt) return -1;
            else return 1;
          });
          res.data.forEach((notebook) => {
            notebook.createdAtFriendly = friendlyDate(notebook.createdAt);
          });
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  updateNotebook(notebookId, { title = "" } = { title: "" }) {
    return request(URL.UPDATE.replace(":id", notebookId), "PATCH", { title });
  },
  deleteNotebook(notebookId) {
    return request(URL.DELETE.replace(":id", notebookId), "DELETE");
  },
  addNotebook({ title = "" } = { title: "" }) {
    return new Promise((resolve, reject) => {
      request(URL.ADD, "POST", { title })
        .then((res) => {
          res.data.createdAtFriendly = friendlyDate(res.data.createdAt);
          res.data.updatedAtFriendly = friendlyDate(res.data.updatedAt);
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
};
