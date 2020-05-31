/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力
var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] + nums[k] === target) {
        return (result = [i, k]);
      }
    }
  }
  return result;

  //利用差值
  let len = nums.length;
  while (len > 1) {
    const result = nums.pop();
    if (nums.indexOf(target - result) > -1) {
      return [nums.indexOf(target - result), nums.length];
    }
    len--;
  }

  let map = {};
  for (let k = 0; k < nums.length; k++) {
    const result = target - nums[k];
    if (result in map) {
      return [map[result], k];
    }
    map[nums[k]] = k;
  }
};

//  hashmap
var twoSum = function (nums, target) {
  let hashmap = [];
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i];
    if (hashmap[key] !== undefined) {
      return [i, hashmap[key]];
    }
    hashmap[nums[i]] = i;
  }
};
