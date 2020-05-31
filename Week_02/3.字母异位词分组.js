//O(NKlogK)
var groupAnagrams = function (strs) {
  const hash = new Map();
  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split("").sort().join("");
    if (hash.has(key)) {
      let tmp = hash.get(key);
      tmp.push(strs[i]);
      hash.set(key, tmp);
    } else {
      hash.set(key, [strs[i]]);
    }
  }
  return [...hash.values()];
};

var groupAnagrams = function (strs) {
  let map = {};
  for (let str of strs) {
    let key = [...str].sort();
    map[key] = map[key] ? [...map[key], str] : [str];
  }

  return Object.values(map);
};
