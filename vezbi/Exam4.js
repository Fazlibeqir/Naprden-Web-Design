function group(arr, size) {
    const numGroups = Math.ceil(arr.length / size);
    return Array.from({ length: numGroups }, (_, groupIndex) => 
        arr.filter((_, itemIndex) => itemIndex % numGroups === groupIndex)
    );
}



console.log(group([1, 2, 3, 4, 5, 6, 7], 4) )
// [ [ 1, 3, 5, 7 ], [ 2, 4, 6 ] ]