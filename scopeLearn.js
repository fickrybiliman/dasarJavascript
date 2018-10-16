// global scope
var example = "Global";

function testExample() {
  // local scope
  var example = "Local";
  return example;
}

console.log(example); // Global
console.log(testExample()); // Local

// =========================================================

// global scope
var functionA = function() {
    // local scope in functionA
    var functionB = function() {
      // local scope in functionB, in functionA
    };
  };

// =========================================================

var functionA = function() {
    console.log(this); // global Window object
  }
  
  var sampleObject = {};
  sampleObject.functionB = function() {
    console.log(this); // Object of sampleObject
  }
  
  functionA();
  sampleObject.functionB();