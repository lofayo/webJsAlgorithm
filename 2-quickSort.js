/**
 * 快速排序原理：
 * 1、从数组中选一个数做基准；
 * 2、再将其它数组元素和基准比较，产生大、小两边； 
 * 3、再将大、小两边递归用快速排序；
 * 根本：化整为零，不断拆半递归，总会出现1个元素的结果，那时，大小肯定见分晓
 * 时间复杂度（比较次数）：(n-1)[1+1/2+1/2+1/4+1/4+...]≈3n 	O(n)
 */
function quickSort(arr){ 
	//先判断数组元素个数，不至于数组只有一个元素还在递归
	if(!arr) return [];
	if (arr.length <= 1) return arr;	
	// 确保没副作用
	arr = [...arr];
	//取得“基准索引”
	var pivotIndex = Math.floor(arr.length / 2);
	//取得“基准”，并从原数组删除
	var pivot = arr.splice(pivotIndex, 1)[0];
	//以基准为界限，分成小于基准部分，和大于基准部分
	var left = [], right = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] < pivot) {
			left.push(arr[i]);
		}else {
			right.push(arr[i]);
		}
	}
	//最重要的过程：将上述过程不断递归，直到数组里只有一个元素
	return [...quickSort(left), pivot, ...quickSort(right)]
}
var arr = [21,2,34,11,19,8];
var arrSort = quickSort(arr);
console.log(arrSort);