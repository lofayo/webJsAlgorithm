/*
 * @Author: fangyong luo
 * @Date: 2024-08-28 10:39:38
 * @Description: 类似于打扑克牌时，将取到的牌插入到之前有序牌中的对应位置
 * 从后往前比较，找到适合位置同时，挪动元素腾出空位，然后在空位放上该元素
 * 从第二个元素开始，从后往前比较，比较次数分别为：1 + 2 + 3 + ... + n-1，因此算法时间复杂度为O(n^2)
 * 只是插入元素，如果元素相同，小于比较，也不会改变相同元素的顺序，因此是稳定算法
 * 
 * 时间复杂度：O(n^2)
 * 稳定性：稳定
 * 排序方式：原地（in place）
 * 空间复杂度：O(1)
 */


const randomArr = require('../randomArr.js');

function insertSort(arr = randomArr) {
    arr = [...arr];
    for(let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > current) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

console.log(randomArr, insertSort());
