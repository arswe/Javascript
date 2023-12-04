// When to Use Inheritance.
// 1. Composition is a better choice.
// 2. If you have a few methods that are going to be shared across multiple objects, then use inheritance.
// 3. If you have a lot of methods that are going to be shared across multiple objects, then use composition.
// 4. If you are not sure, then use composition.
// 5. If you are not sure, then use composition.
// 6. If you are not sure, then use composition.
// Example:-
// Composition:-
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log('eating');
  },
};

const canWalk = {
  walk: function () {
    console.log('walking');
  },
};

const canSwim = {
  swim: function () {
    console.log('swim');
  },
};

function Person() {}
