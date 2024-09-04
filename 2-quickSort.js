/**
 * 快速排序原理：
 * 1、从数组中选一个数做基准；
 * 2、再将其它数组元素和基准比较，产生大、小两边； 
 * 3、再将大、小两边递归用快速排序；
 * 根本：化整为零，不断拆半递归，总会出现1个元素的结果，那时，大小肯定见分晓
 * 时间复杂度（比较次数）：分成两半，每次比较的元素个数还是n，只是比较轮数变为log(n)，所以为nlog(n)
 * 不稳定：js的算法应该是种表面实现，真正的快速排序，它在分区时，是用两个指针查找元素、比较、交换的，所以才是不稳定
 * 
 * 时间复杂度：O(nlog(n))
 * 稳定性：不稳定
 * 排序方式：原地（in place）
 * 空间复杂度：O(log(n)) 递归的深度
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
	return [...quickSort(left), pivot, ...quickSort(right)];
}
var arr = [21,2,34,11,19,8];
var arrSort = quickSort(arr);
console.log(arrSort);