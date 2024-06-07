// predict op
function pzz(x) {
  if (x === 0) return;
  console.log("Pre ", x);
  pzz(x - 1);
  console.log("In ", x);
  pzz(x - 1);
  console.log("Post", x);
}

pzz(2);

// op
//  Pre  2
//  Pre  1
//  In  1
//  Post 1
//  In  2
//  Pre  1
//  In  1
//  Post 1
//  Post 2
