const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 1 },
        { id: 2, message: "It's my first post!", likesCount: 12 },
        { id: 3, message: "Oh, no! I'm lost!", likesCount: 6 },
        { id: 4, message: "Where am I?", likesCount: 60 },
      ],
      newPostText: "hello",
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Lama Iliya",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eTHoHEyBCjd-p5MA-pUIvItDoaKI7e-A5KsHZrC715mj_B3YtZPF2Cw26mpv2Xzijqk&usqp=CAU",
        },
        {
          id: 2,
          name: "Lama Mama",
          avatar:
            "https://images.unsplash.com/photo-1542856204-00101eb6def4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 3,
          name: "Lama Papa",
          avatar:
            "https://i.pinimg.com/474x/db/0a/15/db0a1537246c4867dd7a312fe23bea12.jpg",
        },
        {
          id: 4,
          name: "Lama Ira",
          avatar:
            "https://pressa.tv/uploads/posts/2021-10/1633951484_pressa_tv_2.jpg",
        },
        {
          id: 5,
          name: "Lama Egor",
          avatar:
            "https://i.pinimg.com/originals/14/63/d8/1463d8d75b82c06f8c602a86c3a7e8c3.jpg",
        },
      ],
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "Where are you?" },
        { id: 3, message: "OK!" },
        { id: 4, message: "See you later!" },
        { id: 5, message: ";)" },
      ],
      newMessageBody: "",
    },
    sitebar: [
      {
        id: 1,
        name: "Lama Iliya",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eTHoHEyBCjd-p5MA-pUIvItDoaKI7e-A5KsHZrC715mj_B3YtZPF2Cw26mpv2Xzijqk&usqp=CAU",
      },
      {
        id: 3,
        name: "Lama Papa",
        avatar:
          "https://i.pinimg.com/474x/db/0a/15/db0a1537246c4867dd7a312fe23bea12.jpg",
      },
      {
        id: 4,
        name: "Lama Ira",
        avatar:
          "https://i.pinimg.com/736x/fa/7d/6c/fa7d6cf13f3dd106d6d1af501aecb1d8.jpg",
      },
    ],
    friends: [
      {
        id: 1,
        name: "Lama Iliya",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eTHoHEyBCjd-p5MA-pUIvItDoaKI7e-A5KsHZrC715mj_B3YtZPF2Cw26mpv2Xzijqk&usqp=CAU",
      },
      {
        id: 2,
        name: "Lama Mama",
        avatar:
          "https://images.unsplash.com/photo-1542856204-00101eb6def4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        name: "Lama Papa",
        avatar:
          "https://i.pinimg.com/474x/db/0a/15/db0a1537246c4867dd7a312fe23bea12.jpg",
      },
      {
        id: 4,
        name: "Lama Ira",
        avatar:
          "https://pressa.tv/uploads/posts/2021-10/1633951484_pressa_tv_2.jpg",
      },
      {
        id: 5,
        name: "Lama Egor",
        avatar:
          "https://i.pinimg.com/originals/14/63/d8/1463d8d75b82c06f8c602a86c3a7e8c3.jpg",
      },
    ],
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    //{type: "ADD-POST"}
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default store;
window.store = store;
