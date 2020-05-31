// 1 暴力
var isAnagram = function (s, t) {
  return [...s].sort().join("") === [...t].sort().join("");
};

// 1 hashmap
var isAnagram = function (s, t) {
  const hashmap = [];
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (hashmap[s[i]]) {
      hashmap[s[i]]++;
    } else {
      hashmap[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (hashmap[t[i]]) {
      // 0或undefined直接return false;
      hashmap[t[i]]--;
    } else {
      return false;
    }
  }
  return true;
};

// 优化
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) map[t[i]]--;
    else return false;
  }

  return true;
};
