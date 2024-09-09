/*
 * @Author: fangyong luo
 * @Date: 2024-09-04 15:28:43
 * @Description: 找寻最小的电台覆盖所有的州（每个电台覆盖的州有可能重叠）
 */

// 所有要覆盖的州
const states = new Set(['a', 'b', 'c', 'd', 'e', 'f']);

// 每个电台覆盖的州
const stations = {
    '1': new Set(['a', 'b', 'c']),
    '2': new Set(['a', 'b', 'd']),
    '3': new Set(['a', 'e']),
    '4': new Set(['b', 'f']),
    '5': new Set(['', 'd', 'f']),
};
// 已经覆盖的州
let coveredStates = new Set();
// 选择的电台
const choosedStations = new Set();

/**
 * @description: 计算最小的电台数覆盖所有的州
 * @return {*}
 */
function calcMinStationsCoverStates() {
    let needCoveredStates = states.difference(coveredStates);
    while(needCoveredStates.size !== 0) {
        let maxLength = 0;
        let bestStation = null;
        let needChoosedStates = null;
        for(const station in stations) {
            const curStates = stations[station];
            const intersectionLength = curStates.intersection(needCoveredStates).size;
            if(!choosedStations.has(station) && (intersectionLength > maxLength)) {
                maxLength = intersectionLength;
                bestStation = station;
                needChoosedStates = curStates;
            }
        }
        bestStation && choosedStations.add(bestStation);
        coveredStates = coveredStates.union(needChoosedStates);
        needCoveredStates = states.difference(coveredStates);
    }
}
// 集合的交并补方法是最新方法，浏览器和node的版本还都不支持
calcMinStationsCoverStates();
console.log(choosedStations);