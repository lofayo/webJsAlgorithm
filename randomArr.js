/*
 * @Author: fangyong luo
 * @Date: 2020-04-27 09:05:46
 * @LastEditTime: 2020-05-11 07:28:52
 * @Description: make random array
 */
let arr = [];
let n = 0;
while(n < 10) {
    arr.push(Math.floor(Math.random() * 1000));
    n++;
}
module.exports = arr;