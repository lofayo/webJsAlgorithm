/*
 * @Author: fangyong luo
 * @Date: 2020-02-03 08:02:01
 * @LastEditTime: 2020-05-11 07:57:18
 * @Description: 冒泡排序原理：
 * 1、每次循环排好一个数，依次将第一大、第二大、第三大的数字排好
 * 2、提高效率：排好了i个数后，内部循环只要循环前面就好，所以j<arr.length-i
 * 3、时间复杂度(算的是一个数量级问题)：(n-1) + (n-2) + ... + 1 = n*(n-1)/2  O(n^2)
 */

 const randomArr = require('./randomArr.js');

	// 保证函数是纯函数，没副作用
function bubbleSort([...arr]) {
	// 外层循环，控制次数
	for (var i = 0; i < arr.length; i++) {
		//内层循环，控制的是每次从“未排序好”的元素里找出最大者
		for (var j = 0; j < arr.length - i; j++) {
			//排好了i个数后，内部循环只要循环前面就好，所以j<arr.lenght-i
			if (arr[j] > arr[j + 1]) {
				// 这里可以改变排序的顺序
				var tmp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = tmp;
			}
		}
	}
	//对于传入了参数的函数，肯定要有结果的产出
	return arr;
}

//调用数组内置排序算法
var arrSort = randomArr.sort();
//调用手写冒泡算法
var arrBubSort = bubbleSort(randomArr);
console.log(arrBubSort, randomArr);