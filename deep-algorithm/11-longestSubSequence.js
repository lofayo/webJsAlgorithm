/*
 * @Author: fangyong luo
 * @Date: 2024-09-20 08:27:11
 * @Description: 获取最长公共子序列，子序列不同于子串，子串要求是连续，子序列只要相同，不要求连续
 */

const data = {str1: 'fish', str2: 'fosh'};


function getLongestSubSequence({str1, str2} = data) {
    // let dp = {};
    // for(let i = 0; i < str1.length; i++) {
    //     let key = '';
    //     let temp = {};
    //     for(let j = 0; j > str2.length; j++) {
    //         key += str2[j];
    //         const prevKey = key.slice(0, -1);
    //         if(str1[i] === str2[j]) {
                
    //         } else {
    //             temp[key] = (temp[prevKey] || 0);
    //         }
    //     }
    // }
    // 为什么要画表格呢？直击计数、存储子序列不行吗？
    let result = '';
    for(let i = 0; i < str1.length; i++) {
        for(let j = 0; j < str2.length; j++) {
            if(str1[i] === str2[j]) {
                result += str1[i];
                break;
            }
        }
    }
    return result;
}

console.log(getLongestSubSequence())