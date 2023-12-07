// Changing this keyword

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTag() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

video.showTag();

// function playVideo(a, b) {
//   console.log(this);
// }

// playVideo.call({ name: 'Mosh' }, 1, 2); // multiple arguments (comma separated)
// playVideo.apply({ name: 'Mosh' }); // array of arguments (single argument)
// playVideo.bind({ name: 'Mosh' })(); // returns a new function (single argument)
// playVideo();
