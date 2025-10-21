const posts = [
  { id: 1, author: "techie_sam", content: "Learning JavaScript arrays!", likes: 45, isPublic: true },
  { id: 2, author: "code_newbie", content: "My first function worked!", likes: 23, isPublic: true },
  { id: 3, author: "web_dev_pro", content: "Private thoughts", likes: 5, isPublic: false },
  { id: 4, author: "student_alex", content: "Callbacks are confusing but cool", likes: 67, isPublic: true },
  { id: 5, author: "js_master", content: "Map filter forEach = ❤️", likes: 102, isPublic: true },
];

const postSummaries = posts.map(post => {
  return {
    id: post.id,
    author: post.author,
    preview: post.content.substring(0, 20) + "...",
    engagement: post.likes > 50 ? "High" : "Normal",
  };
});
console.log("EX3.1", postSummaries);

const popularPublic = posts.filter(post => post.isPublic && post.likes > 30);
console.log("EX3.2", popularPublic);

console.log("EX3.3");
posts.forEach(post => {
  if (post.isPublic) {
    console.log(`${post.author}: ${post.likes} likes`);
  }
});