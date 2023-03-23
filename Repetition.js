const n = [1,8,9,2,1,8,5,4,7,2,3,9,6,4,82,1,2,3,9,10,12,5,22,25,27,31,30,5,9,80,82,50,40,41,50];

const countMap = {};
for (let i = 0; i < n.length; i++) {
  const num = n[i];
  if (countMap[num] === undefined) {
    countMap[num] = 1;
  } else {
    countMap[num]++;
  }
}

const duplicados = [];
for (const num in countMap) {
  if (countMap[num] > 1) {
    duplicados.push({num: num, count: countMap[num]});
  }
}

console.log(duplicados);