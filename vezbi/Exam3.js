//THE  SOLUTION IS CORRECT
// function arrayPartition (arr)
// {

//     let matrix = []
//     for (let i=1;i<arr.length;i++)
//     {
//         let part1 = arr.slice(0,i);
//         let part2 = arr.slice(i);

//         matrix.push([part1,part2]);
//     }

//     return matrix;

// }

function arrayPartition(arr) {
    
    let pos = [];
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        pos = arr.slice(0,i);
        result.push([pos, arr.slice(i)]);

    }
    return result;
}

console.log(arrayPartition([-1, -1, -1, -1]));

//[ [ -1 ], [ -1, -1, -1 ] ]