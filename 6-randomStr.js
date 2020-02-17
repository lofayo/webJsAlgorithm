/**
 * 原理：
 * 从一个给定字符串中随机取出某个字符，字符串是先给定的，位置是随机的。
 * 	Math.random()只产生0.0-1.0之间随机数，但是可以映射到任何范围间的随机数
 * 
 * 联想：这会不会就可以生成32位唯一串，这存在相同可能，但是几率太小了(1/32)^32
 */
/**
 * 生成指定长度的随机串
 * @param {*} n 
 */
//生成指定长度的随机字符串
function randomStr(n) {
	var str = 'abcdefghijklmnopqurstuvwxyz0123456789';
	var tmp = '';
	for(var i = 0; i < n; i++) {
		tmp += str.charAt(Math.round(Math.random() * str.length));
	}
	return tmp;
}
console.log(randomStr(32));