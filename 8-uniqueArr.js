/**
 * 原理：
 * 用一个空数组存储元素唯一的结果
 * 用一个JOSN对象存储数组中每个元素真假值
 * 没有，就push到数组中，并将JOSN对象中的值置为true（相当于一个记号）
 * 下次碰到相同元素就不会，再push到数组中了
 */

 /**
  * 数组元素去重，可以借助Set实现，减少中间实现过程
  * @param {*} arr 
  */
function unique(arr) {
	if(!arr) return;
	//用一个JSON对象存放某个元素的真假值
	var countBool = {};
	var uniqueResult = [];
	for(var i in arr) {
		if (!countBool[arr[i]]) {
			uniqueResult.push(arr[i]);
			countBool[arr[i]] = true;
		}
	}
	return uniqueResult;
}
var arr = [2,3,99,44,23,42,2,3];
var uniqueArr = unique(arr);
console.log(uniqueArr);