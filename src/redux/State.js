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
      { id: 1, name: "Lama Husband" },
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
      name: "Lama Husband",
      avatar:
        "https://mimigram.ru/wp-content/uploads/2020/07/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE.jpeg",
    },
    {
      id: 3,
      name: "Lama Papa",
      avatar: "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg",
    },
    {
      id: 4,
      name: "Lama Ira",
      avatar: "http://www.rosphoto.com/images/u/articles/1510/4_8.jpg",
    },
  ],
};

export default state;
