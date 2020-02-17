/*
	非递归的阶乘原理：完全按照数学阶乘公式来计算；但需考虑特殊情况
	*/


/**
 * 数学阶乘计算
 * @param {*} n 
 */
function factorial(n) {
	//先判断负数、0、1情况
	if (n < 0) return -1;
	if (n == 0 || n == 1) return 1;
	//实现阶乘：n*(n-1)*(n-2)*...*2*1;
	var result = n;
	while (--n > 0) {
		// 上一个n * 减1的 (n-1)
		result *= n;
	}
	//返回阶乘结果
	return result;
}

/*
	
	*/

/**
 * 递归式阶乘原理：
 * 所谓的递归，就是算这一次的结果需要知道前一次的结果，
	但前一次的计算和方法这次一样，最后再把所有结果拼起来，所以递归
	factorial(4) = 4 * factorial(3);
		factorial(3) = 3 * factorial(2);
			factorial(2) = 2 * factorial(1); 								
				factorial(1) = 1;
	factorial(4) = 4 * 3 * 2 * 1;
 * @param {*} n 
 */
/**
 * 递归方式计算：同类型的计算方式，用递归实现
 */
function factorial2 (n) {
	// 一个函数肯定只能有一个"return"
	if (n < 0) return -1;
	if ( n == 0 || n == 1) return 1;
	// return n + '>' + arguments.callee(n-1);
	return n * factorial2(n-1);
}
console.log ( factorial2(4) );