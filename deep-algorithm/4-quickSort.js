/*
 * @Author: fangyong luo
 * @Date: 2020-02-03 08:02:01
 * @Description: file content
 */
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
	var pivot = arr[0];
	//以基准为界限，分成小于基准部分，和大于基准部分
	var left = [], right = [];
	for(var i = 1; i < arr.length; i++) {
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

// 官方给出的快速排序，它能说明为什么快速排序是不稳定的
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return arr;

    // 选择基准并进行分区操作
    const pivotIndex = partition(arr, left, right);
    
    // 对左侧部分和右侧部分递归排序
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
    
    return arr;
}

// 分区函数
function partition(arr, left, right) {
    const pivot = arr[right];  // 选择最右侧的元素作为基准
    let i = left;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];  // 交换较小的元素到左侧
            i++;
        }
    }
    // 最后交换基准到正确的位置，这个地方会导致同样元素前后位置发生改变，因此是不稳定的
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;  // 返回基准的最终位置
}
