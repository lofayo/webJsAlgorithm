/*
 * @Author: fangyong luo
 * @Date: 2020-02-03 08:02:01
 * @LastEditTime: 2020-05-11 07:57:18
 * @Description: 冒泡排序原理：
 * 1、每次循环排好一个数，依次将第一大、第二大、第三大的数字排好
 * 2、提高效率：排好了i个数后，内部循环只要循环前面就好，所以j<arr.length-i
 * 3、时间复杂度(算的是一个数量级问题)：(n-1) + (n-2) + ... + 1 = n*(n-1)/2  O(n^2)
 * 
 * 时间复杂度：O(n^2)
 * 稳定性：稳定
 * 排序方式：原地（in place）
 * 空间复杂度：O(1)
 */

 const randomArr = require('../randomArr.js');

function bubbleSort(arr = randomArr) {
	// 因为内部有副作用操作，得复制一份再操作
	arr = [...arr];
	// 外层循环，控制次数
	for (var i = 0; i < arr.length; i++) {
		// 标记是否有交换顺序，如果是当前部分已经有序，没必要再做下一次循环
		let hasSwitched = false;

		//内层循环，控制的是每次从“未排序好”的元素里找出最大者
		for (var j = 0; j < arr.length - i - 1; j++) {
			//排好了i个数后，内部循环只要循环前面就好，所以j<arr.length-i-1
			if (arr[j] > arr[j + 1]) {
				// 这里可以改变排序的顺序
				[arr[j+1], arr[j]] = [arr[j], arr[j+1]];
				hasSwitched = true;
			}
		}
		if(!hasSwitched) {
			break;
		}
	}
	return arr;
}

console.log(randomArr, bubbleSort());