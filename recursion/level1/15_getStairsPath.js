// get all stair path, user can take 1, 2, or 3 steps
// given no of steps
let ans = [];
function getStairPath(no, currentStepsStr) {
  if (no === 0) {
    ans.push(currentStepsStr);
    return "";
  }
  if (no < 0) {
    return -1;
  }
  getStairPath(no - 1, currentStepsStr + 1);
  getStairPath(no - 2, currentStepsStr + 2);
  getStairPath(no - 3, currentStepsStr + 3);
}

getStairPath(3, "0");

function getStairPath1(no) {
  if (no === 0) {
    return [""];
  } else if (no < 0) {
    return [];
  }
  let pathsWith1 = getStairPath1(no - 1);
  let pathsWith2 = getStairPath1(no - 2);
  let pathsWith3 = getStairPath1(no - 3);
  let res = [];
  console.log(pathsWith1);
  for (let path of pathsWith1) {
    res.push(`1${path}`);
  }
  for (let path of pathsWith2) {
    res.push(`2${path}`);
  }
  for (let path of pathsWith3) {
    res.push(`3${path}`);
  }
  return res;
}

getStairPath1(3);
