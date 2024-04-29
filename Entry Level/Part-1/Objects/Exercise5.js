// Exercise 5- Constructor Functions
function BlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let blogPost2 = new BlogPost('a', 'b', 'c');
console.log(blogPost2);
