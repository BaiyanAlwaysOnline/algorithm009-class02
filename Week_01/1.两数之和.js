var twoSum = function(nums, target) {
  let result = []
  for(let i = 0; i < nums.length - 1; i++){
      for(let k = i + 1; k <nums.length; k ++) {
          if(nums[i] + nums[k] === target) {
              return result = [i, k]
          }
      }
  }
  return result
};
var twoSum = function(nums, target) {
  //利用差值
  let len = nums.length;
  while (len > 1) {
      const result = nums.pop();
      if (nums.indexOf(target - result) > -1) {
          return [nums.indexOf(target - result) , nums.length]
      }
      len --;
  }
};
var twoSum = function(nums, target) {
  let map = {};
  for(let k = 0; k <nums.length; k ++) {
      const result = target - nums[k];
      if(result in map) {
          return [map[result], k]
      }
      map[nums[k]] = k;
  }
  
};