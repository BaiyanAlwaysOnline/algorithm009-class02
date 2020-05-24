var moveZeroes = function(nums) {
  // 双向指针，定义一个指针用于指向0
  let zeroIndex = 0;
  for (let i = 0; i < nums.length; i ++) {
      if (nums[i] !== 0) {
          if (zeroIndex !== i) {
              nums[zeroIndex] = nums[i];
              nums[i] = 0;
          }
          zeroIndex ++;
      }
  }
};