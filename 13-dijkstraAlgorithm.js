/*
 * @Author: fangyong luo
 * @Date: 2024-09-03 06:48:06
 * @Description: 狄克斯特拉算法
 * 适用于带有权重的有向图，计算起点到终点的权重最小路径
 * 
 */

// 图的散列表存储节点信息
const graph = {};

graph.start = {};
graph.start.a = 5;
graph.start.b = 0;

graph.a = {};
graph.a.c = 15;
graph.a.d = 20;

graph.b = {};
graph.b.c = 30;
graph.b.d = 35;

graph.c = {};
graph.c.end = 20;

graph.d = {};
graph.d.end = 10;

graph.end = {};

// 存储最小开销的散列表
const costs = {
    a: 5,
    b: 0,
    end: Infinity
};

// 存储最小开销的父节点
const parents = {
    a: 'start',
    b: 'start',
};

const hasProcessedNode = [];

/**
 * @description: 从未处理过的节点中找出最小开销节点
 * @param {map} costs
 * @return {node}
 */
function getLowestCostNode() {
    let lowestCostNode = null;
    let lowestCostValue = Infinity;
    for(const node in costs) {
        const value = costs[node];
        if((value < lowestCostValue) && !hasProcessedNode.includes(node)) {
            lowestCostValue = value;
            lowestCostNode = node;
        }
    }
    lowestCostNode && hasProcessedNode.push(lowestCostNode);
    console.log(lowestCostNode, hasProcessedNode);
    return lowestCostNode;
}

function searchLowestCostPath() {
    let node = getLowestCostNode();
    while(node) {
        const cost = costs[node];
        const neighbors = graph[node];
        for(const neighbor in neighbors) {
            const value = neighbors[neighbor];
            const newValue = cost + value;
            costs[neighbor] ||= Infinity;
            if(newValue < costs[neighbor]) {
                costs[neighbor] = newValue;
                parents[neighbor] = node;
            }
        }
        node = getLowestCostNode();
    }

    // 经过一系列的搜索，找到权重和最小的值与路径
    console.log('the min weight sum is ', costs.end, costs);

    const paths = ['end'];
    let parent = parents['end'];
    while(parent) {
        paths.unshift(parent);
        parent = parents[parent];
    }

    console.log('the min weight paths is ', paths, parents);

}

searchLowestCostPath();