/**
 * 原理：
 * 先定义最大数、最小数
 * 遍历数组，将数组中较大者赋给maxValue
 * 遍历数组，将数组中较小者赋给minValue
 */

 /**
 * 计算数组中元素最大差距，先循环遍历找到最大最小
 * @param {*} arr 
 */	
function getMaxProfit(arr) {
	if(!Array.isArray(arr) || arr.length === 0) return;
	//先定义最大数、最小数
	var maxValue = arr[0];
	var minValue = arr[0];
	for(var i in arr) {
		//遍历比较：将数组中较大者赋给maxValue
		if (arr[i] > maxValue) {
			maxValue = arr[i];
		}
		//遍历比较：将数组中较小者赋给minValue
		if (arr[i] < minValue) {
			minValue = arr[i];
		}
	}
	//返回差距
	return maxValue - minValue;
}
var arr = [-10,9,2,11];
var profit = getMaxProfit(arr);
console.log(profit);

/**
 * 计算数组中数值最大差距，仅限数组元素为数字的
 * @param {*} arr 
 */
const getMaxGap = (arr) => {
	if(!Array.isArray(arr) || arr.length ===0) return;
	return Math.max.apply(null, arr) - Math.min.apply(null,arr);
}
console.log(getMaxGap(arr));