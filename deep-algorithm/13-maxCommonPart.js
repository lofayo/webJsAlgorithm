/*
 * @Author: fangyong luo
 * @Date: 2024-11-09 17:25:58
 * @Description: 类似于求两个字符串最大公约数，如：abcabcabcabc abcabcabc -> abc
 * 思路：找到循环片段后，要依次检验后面所有都是否满足
 */

function getMaxCommonPart(a, b) {
    const str = a.length > b.length ? b : a;
    let hasRepeated = false;
    let result = '';
    for(let i = 0; i < str.length; i++) {
        let nextIndex = 0;
        result += str[i];

        while(str.indexOf(result, nextIndex + result.length) === nextIndex + result.length) {
            nextIndex = nextIndex + result.length;
        }
        if(nextIndex + result.length === str.length) {
            hasRepeated = true;
            return result;
        }
    }
    if(!hasRepeated) {
        return str;
    }
}

console.log(getMaxCommonPart('abcabcabcabc', 'abcabcabc'));
console.log(getMaxCommonPart('abcdabcd', 'abcd'));
console.log(getMaxCommonPart('aaaa', 'aaa'));
console.log(getMaxCommonPart('aabaabaab', 'aabaab'));
console.log(getMaxCommonPart('abcabcdabcabcd', 'abcabcdabcabcdabcabcd'));
console.log(getMaxCommonPart('aaaabaaaabaaaab', 'aaaabaaaab'));