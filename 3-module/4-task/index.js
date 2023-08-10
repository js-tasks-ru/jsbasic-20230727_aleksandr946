function showSalary(users, age) {
  // ваш код...
  return users
	.filter(e => e.age <= age)
	.map(e => e.name + ', ' + e.balance)
	.join('\n');
}