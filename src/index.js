/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
         const getLoveTrianglesCount = preferences =>
[...new Set(preferences.filter(el => el && preferences.includes(el+1) && preferences.includes(el+2)))].length;
console.log(getLoveTrianglesCount([9,8,5,4,3,1,10,11,2]));

};