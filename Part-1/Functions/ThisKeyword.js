// Method -> obj
// function -> global (window, global)

// const video = {
//   title: 'a',
//   play() {
//     console.log(this);
//   },
// };
// video.play();

// video.stop = function () {
//   console.log(this);
// };

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

// const v = new Video('b');

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTag() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

video.showTag();
