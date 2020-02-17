
/**
 * 逆向遍历，将字符串字符缓存到结果返回
 * @param {} str 
 */
function reverseStr(str) {
	var tmp = '';
	for(var i = str.length - 1; i >= 0; i--) {
		tmp += str[i];
	}
	return tmp;
}
var str = "abcdeft";
var strReverse = reverseStr(str);
console.log(strReverse);