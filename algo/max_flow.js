var fordFulkerson = require('graph-theory-ford-fulkerson');

var graph = [
	[ 0, 20,  10, 0,  0],
    [ 0,  0, 40,  0, 30],
    [ 0,  4,  0,  0, 14],
    [ 0,  0,  9,  0,  0],
    [ 0,  0,  0,  7,  0],
    [ 0,  0,  0,  0,  0]
];

console.log("The maximum possible flow is " +
	fordFulkerson(graph, 0, 5));