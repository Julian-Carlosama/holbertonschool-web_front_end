// Function that Using a loop that iterates 100 times, each iteration logs to the console the iteration number
console.log('Start of the execution queue');

for (let iteration = 1; iteration <= 100; ++iteration) {
	console.log(iteration)
}
setTimeout(console.log('Final code block to be executed'), 0);
console.log('End of the loop printing');