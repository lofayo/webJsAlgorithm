/**
 * mergeSort()的无限递归：合并函数思想：每次将两个有序列表合并为一个有序列表
 * 
 * @param {*} left 
 * @param {*} right 
 */
function mergeSort(left, right) {
	var il = 0;
	var ir = 0;
	var result = [];
	//两个索引角标都比数组长度小，执行如下判断：每次比较，将最小的数push到数组中
	while (il < left.length && ir <right.length) {
		/*
		这个地方其实挺牛的:
		left[0] < right[0];
		result.push(left[0]);
		再用left[1]和right[0]比较，看谁小
		*/
		if (left[il] < right[ir]) {
			result.push(left[il]);	 
			il++;
		} else {
			result.push(right[ir]);
			ir++;
		}
	}
	//一旦索引角标有超出了，执行如下判断：将另一个数组“剩余内容”全数追加
	while (left[il]) {
		result.push(left[il]);
		il++;
	}
	while (right[ir]) {
		result.push(right[ir]);
		ir++;
	}
	return result;
}

/**
 * 将数组无限细分，细分，合并，细分，合并
 * @param {*} arr 
 */
	//将数组“无限细分两半”，并将每一半都调用“合并排序”函数	
function divideMerge(arr) {
		//判断数组元素个数，小于2就没必要执行，就不会调用merge函数
	if (arr.length < 2) { return arr; }
		//每次将数组从中间位置分成两半
	var middleIndex = Math.floor(arr.length / 2);
	var left = arr.splice(0, middleIndex);
	var right = arr;
		//合并函数的调用，无限的递归。递归的思想太重要了
	return mergeSort(divideMerge(left), divideMerge(right));
}

var arr = [1,2,11,9,4,21,46,31,98,76,23,17,9];
var arrSort = divideMerge(arr);
console.log(arrSort);