const sayHa = () => {
	setTimeout(() => { console.log('Haaa'); }, 1500);
};
const sayHi = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Hiii');
		return resolve(sayHa);	
	}, 3000);
});
const myFunc = () => new Promise((resolve, reject) => {
	return resolve(sayHi);
});

// Run: sayHi() done then sayHa()
myFunc().then(say => say()).then(say => say());