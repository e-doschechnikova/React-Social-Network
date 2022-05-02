let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 1 },
      { id: 2, message: "It's my first post!", likesCount: 12 },
      { id: 3, message: "Oh, no! I'm lost!", likesCount: 6 },
      { id: 4, message: "Where am I?", likesCount: 60 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Lama Iliya" },
      { id: 2, name: "Lama Mama" },
      { id: 3, name: "Lama Papa" },
      { id: 4, name: "Lama Ira" },
      { id: 5, name: "Lama Egor" },
    ],
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "Where are you?" },
      { id: 3, message: "OK!" },
      { id: 4, message: "See you later!" },
      { id: 5, message: ";)" },
      { id: 6, message: "Bye!" },
    ],
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
        "https://pressa.tv/uploads/posts/2021-10/1633951484_pressa_tv_2.jpg",
    },
  ],
};

export default state;
