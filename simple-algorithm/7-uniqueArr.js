 /**
  * 原理：用一空数组去存储结果，亦可以借助Set实现，减少中间实现过程
  * @param {*} arr 
  */
function unique(arr) {
	if(!arr) return;
	var result = [];
	for(var value of arr) {
		if(!result.includes(value)) {
			result.push(value);
		}
	}
	return result;
}
var arr = [2,3,99,44,23,42,2,3];
var uniqueArr = unique(arr);
console.log(uniqueArr);