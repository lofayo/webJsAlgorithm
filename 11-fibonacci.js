/*
	fibonacci原理：用一个函数来计算fibonacci数列的每一项；
									再将每一项都添加到数列中
	*/
//得到给定长度的fibonacci数列
function fibonacci(len) {
	var fibo = [];
	for(var i = 0; i < len; i++) {
		fibo.push(getFibo(i));
	}
	return fibo;
}
//计算fibonacci数列的每一项
function getFibo(n) {
	if (n==0) { return 0; }
	if (n==1) { return 1; }
	return getFibo(n-1) + getFibo(n-2);
}
console.log(getFibonacci(15));

//非递归，普通的获取fibonacci数列方法
//原理：没用到递归，直接在fibonacci数列中取值进行相加
function getFibonacci(n) {
	var result = [];
	var i = 0;
	while(i < n) {
		if (i <= 1){
			result.push(i);
		} else {
			result.push(result[i-1]+result[i-2]);
		}
		i++;
	}
	return result;
}

//还可以这样写fibonacci数列（注意力放在后面）
function fibonacci(max){
	var t, a = 0, b = 1;
	var arr = [0, 1];
	while (arr.length < max) {
		t = a + b;
		a = b;
		b = t;
		arr.push(t);
	}
	return arr;
}