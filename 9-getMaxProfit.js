/*
 * @Author: fangyong luo
 * @Date: 2020-02-03 08:02:01
 * @LastEditTime: 2020-05-12 07:04:44
 * @Description: 这个本身就限制了数组里每个必须都是数字才可如此操作，若是其它就会错误。数组里本身就可包含各种类型数据，太任性了，后续使用必定付出代价
 */
/**
 * @description: 思想：先将第一个数都定为最大数和最小数，遍历数组，将数组中较大者赋给maxValue， 将数组中较小者赋给minValue
 * @param {arr: array} 
 * @return: distance
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
/**
 * @description: 借助已有API的使用，结合函数本身方法
 * @param {type} 
 * @return: 
 */
const getMaxGap = (arr) => {
	if(!Array.isArray(arr) || arr.length ===0) return;
	return Math.max.apply(null, arr) - Math.min.apply(null,arr);
}