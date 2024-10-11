/*
 * @Author: fangyong luo
 * @Date: 2020-02-03 08:02:01
 * @LastEditTime: 2020-05-12 07:04:44
 * @Description: 获取数组中最大值与最小值的差距
 * 1、对于这种问题，有一定编程经验后，立马想到的是借助Math.max/Math.min来实现。可看了原始方法，觉得别人也很好，那代表着一种编程思想；
 * 2、或许当下的我，想到的更多的是功能实现，而不太花心思在这样细节点，这没什么不好，先关注大的方面，后面再细想一点点的实现，细节点才是编程的基础；
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