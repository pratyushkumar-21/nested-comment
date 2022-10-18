import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  replies: {
    1: {
      id: 1,
      text: "Good comment hai :)",
      author: "Raj",
      createdAt: "2022-10-18T16:40:53.610Z",
      modifiedAt: "2022-10-18T16:40:53.610Z",
      replies: {
        2: {
          id: 2,
          text: "Bad comment hai :)",
          author: "Rohan",
          createdAt: "2022-10-17T18:58:30Z",
          modifiedAt: "2022-10-17T18:58:30Z",
          replies: {},
        },
      },
    },
    3: {
      id: 3,
      text: "Bad comment hai :)",
      author: "Rohan",
      createdAt: "2022-10-17T18:58:30Z",
      modifiedAt: "2022-10-17T18:58:30Z",
      replies: {},
    },
  },

  manageActiveAction: null,
};

let lastId = 3;

const slice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    addComment: (state, action) => {
      const { text, path } = action.payload;

      const pathSplited = path ? path.split("-") : [];
      let currentStateLevel = state;

      pathSplited.forEach((path) => {
        currentStateLevel = currentStateLevel.replies[path];
      });

      currentStateLevel.replies[++lastId] = {
        id: lastId,
        author: `Prku ${lastId}`,
        createdAt: new Date().toISOString(),
        modifiedAt: new Date().toISOString(),
        text,
        replies: {},
      };
    },

    updateComment: (state, action) => {
      const { text, path } = action.payload;

      const pathSplited = path.split("-");
      const commentNodeToUpdate = pathSplited.pop();
      let currentStateLevel = state;

      pathSplited.forEach((path) => {
        currentStateLevel = currentStateLevel.replies[path];
      });

      currentStateLevel.replies[commentNodeToUpdate].text = text;
      currentStateLevel.replies[commentNodeToUpdate].modifiedAt =
        new Date().toISOString();
    },

    deleteComment: (state, action) => {
      const { path } = action.payload;

      const pathSplited = path.split("-");
      const commentNodeToDelete = pathSplited.pop();
      let currentStateLevel = state;

      pathSplited.forEach((path) => {
        currentStateLevel = currentStateLevel.replies[path];
      });

      delete currentStateLevel.replies[commentNodeToDelete];
    },

    manipulateManageActiveReply: (state, action) => {
      state.manageActiveAction = action.payload;
    },
  },
});

export const {
  addComment,
  updateComment,
  deleteComment,
  manipulateManageActiveReply,
} = slice.actions;
export default slice.reducer;
