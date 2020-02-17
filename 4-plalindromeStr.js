/*
回文：就是前后元素一一对应着。也即：将字符串颠倒顺序后完全相等
*/		
/**
 * 借助数组reverse
 * @param {*} str 
 */
function palindromeReverse(str) {
	//颠倒顺序后的字符串
	var reverseStr = str.split('').reverse().join('');
	//判断颠倒顺序后的字符串与原字符串是否完全相等
	if (reverseStr === str) return 'palindrome';
	return 'no palindrome';
} 

/**
 * 借两索引遍历元素，看前后元素是否相等
 * @param {*} str 
 */
function palindromeCompare(str) {
	var i = 0;
	var j = str.length - 1;
	for(i, j; i <= j; i++, j--) {
		if (str[i] !== str[j]) return "no palindrome";
	}
	return "palindrome";
}
var str = "abca";
var strplalindrome = plalindrome2(str);
console.log(strplalindrome);

/**
 * 递归实现比较，每次比较的都是最前最后的，如此递归
 * @param {*} str 
 */
function palindromeRecursion(str) {
	// \W/g		用来查找所有非单词字符
	var re = /\W/g;
	//还要考虑字符串中大小写
	var lowRegStr = str.toLowerCase().replace(re,'');
	//如果一个字符，直接返回，因为后续用到了递归，这也是回文字符串最终的结果
	if(lowRegStr.length <= 1) return "palindrome";
	//如果首尾不相等，直接返回
	var endIndex = str.length - 1;
	if(lowRegStr[0] != lowRegStr[endIndex]) return "no palindrome";
	//牛逼的无限递归：取出字符串的第二位至倒数第二位的字符串
	var newStr = lowRegStr.slice(1,endIndex);
	return palindromeRecursion(newStr);
}