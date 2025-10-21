/* HW: Data Processing Dashboard */

// Part 1
const studentData = [
  { name: "Alice Johnson", scores: [95, 87, 92, 88], year: "junior", major: "CS" },
  { name: "Bob Smith", scores: [78, 85, 79, 82], year: "sophomore", major: "Math" },
  { name: "Carol Davis", scores: [92, 96, 89, 94], year: "senior", major: "CS" },
  { name: "David Wilson", scores: [67, 73, 70, 75], year: "freshman", major: "Biology" },
  { name: "Eva Brown", scores: [88, 91, 85, 89], year: "junior", major: "Math" },
];

const withAverages = studentData.map(student => {
  const total = student.scores.reduce((sum, score) => sum + score, 0);
  const average = total / student.scores.length;
  return { ...student, average: average };
});
console.log("P1.1", withAverages);

const above85 = withAverages.filter(student => student.average > 85);
console.log("P1.2", above85);

const honorRoll = withAverages
  .filter(student => student.average >= 90)
  .map(student => `${student.name} - ${student.average}%`);
console.log("P1.3", honorRoll);

console.log("P1.4");
withAverages.forEach(student => {
  console.log(`${student.name}: ${student.average}% in ${student.major}`);
});

const csUpper = studentData
  .filter(student => student.major === "CS")
  .filter(student => student.year === "junior" || student.year === "senior");
console.log("P1.5", csUpper);

// Part 2
const orders = [
  { id: 101, customer: "John Doe", items: ["laptop", "mouse"], total: 850, status: "pending" },
  { id: 102, customer: "Jane Smith", items: ["keyboard", "monitor"], total: 320, status: "shipped" },
  { id: 103, customer: "Bob Johnson", items: ["tablet"], total: 299, status: "delivered" },
  { id: 104, customer: "Alice Brown", items: ["phone", "case", "charger"], total: 680, status: "pending" },
];

const shippingLabels = orders
  .filter(order => order.status === "pending")
  .map(order => `Ship order #${order.id} for ${order.customer}`);
console.log("P2.1", shippingLabels);

const delivered = orders.filter(order => order.status === "delivered");
const totalRevenue = delivered.reduce((sum, order) => sum + order.total, 0);
console.log("P2.2", totalRevenue);

const largeOrders = orders.filter(order => order.items.length >= 3);
console.log("P2.3", largeOrders);

console.log("P2.4");
orders.forEach(order => {
  if (order.status === "pending") {
    console.log(`${order.customer}: Your order is being prepared.`);
  } else if (order.status === "shipped") {
    console.log(`${order.customer}: Your order has shipped.`);
  } else if (order.status === "delivered") {
    console.log(`${order.customer}: Your order was delivered.`);
  }
});

const totalOrders = orders.length;
const totalSales = orders.reduce((sum, order) => sum + order.total, 0);
const avgOrder = totalSales / totalOrders;
console.log("P2.5", { totalOrders, totalSales, avgOrder });

// Part 3
const posts = [
  { id: 1, user: "techie123", content: "Love coding in JavaScript!", likes: 45, reports: 0 },
  { id: 2, user: "newbie", content: "This is spam content", likes: 2, reports: 8 },
  { id: 3, user: "developer", content: "Check out my new project", likes: 67, reports: 0 },
  { id: 4, user: "student", content: "Learning callbacks today", likes: 23, reports: 1 },
];

const flagged = posts.filter(post => post.reports > post.likes / 10);
console.log("P3.1", flagged);

const trending = posts.filter(post => post.likes > 50 && post.reports < 2);
console.log("P3.2", trending);

const moderationQueue = flagged.map(post => ({
  id: post.id,
  user: post.user,
  reason: "High report ratio",
}));
console.log("P3.3", moderationQueue);

const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
const totalReports = posts.reduce((sum, post) => sum + post.reports, 0);
const avgLikes = totalLikes / posts.length;
console.log("P3.4", { totalLikes, totalReports, avgLikes });

console.log("P3.5");
trending.forEach(post => {
  console.log(`@${post.user}: Your post is trending with ${post.likes} likes!`);
});