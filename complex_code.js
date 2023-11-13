/** 
* Filename: complex_code.js
* Description: This complex code demonstrates a sophisticated and elaborate implementation of a social media platform using JavaScript.
*/

// User class representing a user in the social media platform
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.posts = []; // Array to store user's posts
    this.friends = []; // Array to store user's friends
  }

  addFriend(user) {
    this.friends.push(user);
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
  }
}

// Post class representing a post in the social media platform
class Post {
  constructor(content, user) {
    this.content = content;
    this.user = user;
    this.likes = 0;
  }

  like() {
    this.likes++;
  }
}

// Creating users
const user1 = new User("JohnDoe", "johndoe@example.com", "password1");
const user2 = new User("JaneSmith", "janesmith@example.com", "password2");

// Adding friends
user1.addFriend(user2);
user2.addFriend(user1);

// Creating and liking posts
user1.createPost("Hello world!");
user1.posts[0].like();
user2.createPost("I love coding!");
user2.posts[0].like();
user2.posts[0].like();

// Printing user details
console.log(user1);
console.log(user2);