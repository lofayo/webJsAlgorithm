/*
 * @Author: fangyong luo
 * @Date: 2024-09-12 06:27:10
 * @Description: 寻求最长公共子串的问题
 */

const data = {str1: 'fisht', str2: 'foshj'};

function getLongestChildStr({str1, str2} = data) {
    let dp = {};
    for(let i = 0; i < str1.length; i++) {
        let key = '';
        const temp = {};
        for(let j = 0; j < str2.length; j++) {
            key += str2[j];
            // 不相等时赋值为0
            if(str1[i] !== str2[j]) {
                temp[key] = 0;
                continue;
            }
            const prevKey = key.slice(0, -1);
            temp[key] = (dp[prevKey] || 0) + 1;
        }
        dp = {...dp, ...temp};
        console.log(str1[i], dp);
    }
    return dp;
}

console.log(getLongestChildStr())