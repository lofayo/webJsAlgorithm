/*
 * @Author: fangyong luo
 * @Date: 2024-09-08 07:23:26
 * @Description: 动态规划之背包问题
 * 
 */


/**
 * @description: 使用动态规划计算给定容量下的最优值
 * @param {Array} data 给定权重的数据
 * @param {Number} container 有限制的容器
 * @return {Object} 每个容器的最优结果 {key: sum}
 */
 const params = {
    data: [[1,1], [7, 9], [6, 10], [2, 4], [3, 5], [6, 10]],
    container: 10    
}
function calcMaxProfit({data, container} = params) {
    let dps = {};
    for(let i = 0; i < data.length; i++) {
        const [key, value] = data[i];
        const temp = {};
        for(let j = 1; j <= container; j++) {
            if(key <= j) {
                temp[j] = Math.max((dps[j] || 0), value + (dps[j - key] || 0));
            }
        }
        dps = {...dps, ...temp};
    }
    return dps;
}

console.dir(calcMaxProfit(), { depth: null, colors: true });
