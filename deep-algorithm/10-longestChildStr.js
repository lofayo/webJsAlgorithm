/*
 * @Author: fangyong luo
 * @Date: 2024-09-12 06:27:10
 * @Description: 寻求最长公共子串的问题
 */

function longestCommonSubstring(s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;
    
    // 初始化二维 dp 数组并记录最大长度和结束位置
    const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));
    console.dir(dp, {depth: null, color: true});
    let maxLength = 0;
    let endIndex = 0; // 记录最长公共子串的结束位置

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;

                // 更新最大长度和结束位置
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndex = i; // 记录当前子串的结束位置
                }
            }
        }
    }

    // 使用 endIndex 和 maxLength 截取最长公共子串
    const lcs = s1.substring(endIndex - maxLength, endIndex);
    return lcs;
}

// 测试
const str1 = "abcdef";
const str2 = "zcdemf";
console.log(longestCommonSubstring(str1, str2)); // 输出：cde
