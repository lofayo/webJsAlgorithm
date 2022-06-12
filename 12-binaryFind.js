/**
 * 原理：时间复杂度2^x = n => x = log(2, n);
 * 在有序数组中搜索具体值。从小到大搜寻，每次将范围缩小一半；直到找到为止，没找到就退出
 * @param {*} arr 
 * @param {*} data 
 */

function binaryFind(arr, value) {
	//先定义两个索引，从最低到最高
	var low = 0;
	var high = arr.length - 1;
	if(!value || value < arr[low] || value > arr[high]) return 'No finding data ';
	//从小到大循环一次，一定要保证最小索引小于等于最大索引，否则“死循环”，找到就退出
	var mid = parseInt((low + high) / 2);
	while (low <= high) {
		//每次都重新计算中间位置
		if (value === arr[mid]) {
			return "Finded data index:" + mid;
		} else if(value < arr[mid]) {
			high = mid -1;
		} else {
			low = mid +1;
		}
		mid = parseInt((low + high) / 2);
	}
	//如果整个都没找到，那就是没有
	return "No finding data ";
}
var arr = [1,2,3,4];
var result = binaryFind(arr,3.3);
console.log(result);