/*
 * @Author: fangyong luo
 * @Date: 2024-09-20 05:54:44
 * @Description: 堆排序
 * 
 * 
 * 时间复杂度：O(nlog(n))
 * 稳定性：不稳定（存在元素的交换）
 * 排序方式：原地（in place）
 * 空间复杂度：O(1)
 */

let randomArr = require('../randomArr.js');
randomArr = [0, 1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
function heapSort(arr = [...randomArr]) {
    // 1、构建大顶堆（父节点大于左右子节点）
    const len = arr.length;
    const midIndex = Math.floor(len / 2) - 1;
    for(let i = midIndex - 1; i >= 0; i--) {
        heapify(arr, len, i);
    }
    // 2、交换堆顶元素到末尾（最大值），且重新调整元素位置，保持大顶堆的特征
    for(let i = len -1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // 因为0位置的元素被交换了，就从这个位置再来一次堆里化，保持大顶堆的性质
        // i这个地方卡得很好，排序好第3个元素后，heapify元素总量变成13，heapify的left和right就会小于13，因此不会再对排序好的元素来交换
        heapify(arr, i, 0);
    }
    return arr;
}

/**
 * @description: 函数堆里化
 * 1、堆化过程是这样的，从中间索引开始，到0，依次比较它与中间后面元素，交换最大的到前面；
 * 2、到了n /4 的索引时，就需要继续堆里化 n /4 与 n / 2的元素，就有可能交换，此时n / 2元素被交换了后，就得继续调整 n /2 的元素与 n位置的元素
 * @param {*} arr 
 * @param {*} n
 * @param {*} i
 * @return {*}
 */
function heapify(arr, n, i) {
    // 先标识根节点就是最大节点
    let largest = i;
    // 由根节点对应的两个左右子节点索引（可以思考为什么这样就刚好对应上了）
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    // 如果左子节点大，则最大节点索引标识为左边索引
    if(left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    // 如果右子节点大，则最大节点索引标识为右边索引
    if(right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // 如果最大节点不是根节点，则交换，且递归调用堆化函数
    if(largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        // 因为最大节点索引元素被交换了，所以从largest开始堆里化
        // 递归调用堆里化函数，能保证一旦发生了交换，后续所有子节点都交换，以保证大顶堆的性质
        heapify(arr, n, largest);
    }
}

console.log(randomArr, heapSort());