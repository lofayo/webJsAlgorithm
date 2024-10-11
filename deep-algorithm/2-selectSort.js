/*
 * @Author: fangyong luo
 * @Date: 2024-08-27 11:04:15
 * @Description: 选择排序是种就地排序算法，每次从未排序中选择最小的元素，交换到已排序的后面
 * 为了找出最小元素，第一次比较n-1次，第二次比较n-2次，，，加起来算法时间复杂度O(n^2);
 * 因为存在交换元素，不能保证相同元素相对顺序不变，所以该算法是不稳定的
 * 
 * 
 * 时间复杂度：O(n^2)
 * 稳定性：不稳定
 * 排序方式：原地（in place）
 * 空间复杂度：O(1)
 */
const randomArr = require('../randomArr.js');

function selectSort(arr = randomArr) {
    arr = [...arr];
    const len = arr.length;
    for(let i = 0; i < len - 1; i++) {
        let minValueIndex = i;
        for(let j = i + 1; j < len; j++) {
            if(arr[j] < arr[minValueIndex]) {
                minValueIndex = j;
            }
        }
        // 交换元素位置，两个索引不同才需要交换
        if(minValueIndex !== i) {
            [arr[i], arr[minValueIndex]] = [arr[minValueIndex], arr[i]];
        }
    }
    return arr;
}

console.log(randomArr, selectSort());