let ar = [1, 2, 3, 4, 5];
function testAr() {
  let obj = {
    left: {
      left: {
        left: "l1",
        right: "r1",
        val: "p3",
      },
      right: {
        left: "l2",
        right: "r2",
        val: "p4",
      },
      val: "p2",
    },
    right: {
      left: "l3",
      right: "r3",
      val: "p5",
    },
    val: "p1",
  };
  var data = [];
  var order = "";
  function traverse(obj) {
    /* if(obj.left || obj.right) {
         data.push(obj.val);
         order = 'preOrder'
        } */
    if (obj.left) {
      traverse(obj.left);
    }
    /*
        if(obj.left || obj.right) {
         data.push(obj.val);
         order = 'inOrder'
        } */
    if (obj.right) {
      traverse(obj.right);
    }

    if (obj.left || obj.right) {
      data.push(obj.val);
      order = "postOrder";
    }
  }
  traverse(obj);
  return data + " -- " + order;
}

testAr();
