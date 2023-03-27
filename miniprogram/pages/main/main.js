const imageCdn = 'cloud://online-3grs4tg3fb52a58a.6f6e-online-3grs4tg3fb52a58a-1301715543';
const swiperList = [
  `${imageCdn}/banner_image1.png`,
  `${imageCdn}/banner_image2.png`,
  `${imageCdn}/banner_image1.png`,
  `${imageCdn}/banner_image2.png`,
];

Component({
  data: {
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 3000,
    swiperList,
    visible: true,
    marquee2: {
      speed: 70,
      loop: -1,
      delay: 500,
    },
      defaultData: {
            title: "我的主页", // 导航栏标题
        }
  },
});