export const createListPageArr = (res, currentPage) => {
  let arr = [];
  for (let i = 0; i < res.length; i++) {
    if (arr.length === 0 || arr[arr.length - 1].length === 5) {
      arr.push([res[i]]);
    } else {
      arr[arr.length - 1].push(res[i]);
    }
    if (arr.length === currentPage + 1 && arr[currentPage].length === 5) {
      break;
    }
  }
  return arr;
};
