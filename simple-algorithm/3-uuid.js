/*
 * @Author: fangyong luo
 * @Date: 2020-02-03 08:02:01
 * @LastEditTime: 2020-05-12 06:30:23
 * @Description: 原理：
 * 从一个给定字符串中随机取出某个字符，字符串是先给定的，位置是随机的。
 * 	Math.random()只产生0.0-1.0之间随机数，但是可以映射到任何范围间的随机数
 * 
 * 联想：这会不会就可以生成32位唯一串，这存在相同可能，但是几率太小了(1/62)^32，但是在计算机里一旦出现了，就非常难定位问题
 * 如果怕重了，可以拼上时间戳，重复几率就更小了
 */
const str = 'abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
class UUID {
	/**
	 * @description: 生成指定长度的随机串
	 * @param {length: Number} 长度 
	 * @return: 指定长度的随机串
	 */
	static get(length) {
		if(!length) return;
		let i = 0;
		let result = '';
		while(i < length) {
			result += str.charAt(Math.round(Math.random() * str.length));
			i++;
		}
		return result;
	}
	static get32() {
		return this.get(32);
	}
}

console.log(UUID.get32());
module.exports = UUID;