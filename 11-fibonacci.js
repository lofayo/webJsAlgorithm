/**
 * 原理：
 * 先计算fibonacci的每一项，添加到数组中。
 * 递归实现：这种代价太大了，计算每一项都要重新来过
 * 得到给定长度的fibonacci数列
 * @param {*} len 
 */
function getFibonacciRecursion(len) {
	//计算fibonacci数列的每一项
	function getFibo(n) {
		if(n === 0 || n === 1) return n;
		return getFibo(n-1) + getFibo(n-2);
	}
	// 将计算的fibonacci数列的项，添加到fibonacci数列中
	var fibo = [];
	for(var i = 0; i < len; i++) {
		fibo.push(getFibo(i));
	}
	return fibo;
}

/**
 * 原理：
 * 直接借助数组原有项，计算需要的项
 * @param {*} n 
 */
function getFibonacciArray(len) {
	var result = [];
	var i = 0;
	while(i < len) {
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
/**
 * 原理：
 * 将借助数组的元素转成两个变量的值，通俗易懂
 * @param {*} len 
 */
function getFibonacciVariable(len){
	var t, a = 0, b = 1;
	var arr = [0, 1];
	while (arr.length < len) {
		// 相当于两个索引指标，一直往后移动
		t = a + b;
		a = b;
		b = t;
		arr.push(t);
	}
	return arr;
}

console.log(getFibonacciRecursion(15));
console.log(getFibonacciArray(15));
console.log(getFibonacciVariable(15));