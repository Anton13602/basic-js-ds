const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

/* class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
} */


class BinarySearchTree {
  constructor() {
    this.treeRoot = null
  }

  root() {
    return this.treeRoot
  }

  add(data) {
    const node = new Node(data)

    if (!this.treeRoot) {
      this.treeRoot = node
      return this.treeRoot
    }
   
    let currentRoot = this.treeRoot
 
    while(currentRoot) {
      if (node.data < currentRoot.data) {
        
        if (!currentRoot.left) {
          currentRoot.left = node
          return currentRoot.left
        } else {
          currentRoot = currentRoot.left
        }


      } else {
        if (!currentRoot.right) {
          currentRoot.right = node
          return currentRoot.right
        } else {
          currentRoot = currentRoot.right
        }
      }
      
    }
    
  }


  has(data) {
    return Boolean(this.find(data))
  }

  find(data) {
    if (this.treeRoot.data === data) {
      return this.treeRoot
    }

    let currentRoot = this.treeRoot
    
    while(currentRoot) {
      if  (currentRoot.data === data) {
        return currentRoot
      } else {
        if(currentRoot.data < data){
          currentRoot = currentRoot.right
        } else {
          currentRoot = currentRoot.left
        }
      }
    }

    return null

  }

  remove(data) {
  
    function deleteData(currentRoot, data) {
      
      if (!currentRoot) {
        return null;
      }

      if (currentRoot.data > data) {
        currentRoot.left = deleteData(currentRoot.left, data)
        return currentRoot

      } else if (currentRoot.data < data) {
        currentRoot.right = deleteData(currentRoot.right, data)
        return currentRoot

      } else {
        
        if (!currentRoot.left && !currentRoot.right) {
          currentRoot = null
          return currentRoot
        }

        if (!currentRoot.left){
          currentRoot = currentRoot.right
          return currentRoot;
        } 

        if (!currentRoot.right){
          currentRoot = currentRoot.left
          return currentRoot
        }
  
        let nodeMax = currentRoot.left
        
        while (nodeMax.right) {
          nodeMax = nodeMax.right
        }

        currentRoot.data = nodeMax.data
  
        currentRoot.left = deleteData(currentRoot.left, nodeMax.data)

        return currentRoot
      }
    }
    this.treeRoot = deleteData(this.treeRoot, data);
  
  }

  min() {
    let currentRoot = this.treeRoot
    const arr = []
    while(currentRoot) {
      arr.push(currentRoot.data)
      currentRoot = currentRoot.left
    }
    const lastEl = arr.length - 1

    return arr[lastEl]

  }

  max() {
    let currentRoot = this.treeRoot
    const arr = []
    while(currentRoot) {
      arr.push(currentRoot.data)
      currentRoot = currentRoot.right
    }
    const lastEl = arr.length - 1

    return arr[lastEl]
  }
}

module.exports = {
  BinarySearchTree
};