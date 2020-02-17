 /**
  * 冒泡排序原理：
  * 每次循环排好一个数，依次将第一大、第二大、第三大的数字排好
	提高效率：排好了i个数后，内部循环只要循环前面就好，所以j<arr.length-i
	时间复杂度(算的是一个数量级问题)：(n-1) + (n-2) + ... + 1 = n*(n-1)/2  O(n^2)
  */
function bubbleSort(arr) {
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

var arr = [3, 2, 0, 43, 21, 14, 90, 111, 13, 22];
//调用数组内置排序算法
var arrSort = arr.sort();
//调用手写冒泡算法
var arrBubSort = bubbleSort(arr);
// console.log(arrSort);
console.log(arrBubSort);