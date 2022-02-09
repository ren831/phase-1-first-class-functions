function receivesAFunction(spy) {
  spy();
}

function returnsANamedFunction(fn) {
  return (fn = function (names) {});
}

function returnsAnAnonymousFunction() {
  return function () {};
}
