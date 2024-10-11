/*
 * @Author: fangyong luo
 * @Date: 2020-02-03 08:02:01
 * @LastEditTime: 2020-05-12 07:11:26
 * @Description: file content
 */
/**
 * @description: 纯数学方法式地计算阶乘
 * @param {n: number} 
 * @return: 阶乘结果
 */
function factorialMath(n) {
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
function factorialRecursion (n) {
	if (n < 0) return -1;
	if ( n == 0 || n == 1) return 1;
	// return n + '>' + arguments.callee(n-1);
	return n * factorialRecursion(n-1);
}