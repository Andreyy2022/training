'use strict';

Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
  if (this.length !== other.length) {
    return false;
  }

  for (let i = 0; i < this.length; i++) {
    if ( Array.isArray(this[i]) && !this[i].sameStructureAs(other[i]) ) {
      return false;
    }
    if ( !Array.isArray(this[i]) && Array.isArray(other[i]) ) {
      return false;
    }
  }
  
  return true;
};

console.log( [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ) );
console.log( [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ) );
console.log( [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ) );
console.log( [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ) );
console.log( [1,[1,1]].sameStructureAs( [2,[2]] ) );
