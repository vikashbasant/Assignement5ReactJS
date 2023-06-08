function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return Math.round(a / b).toFixed(2);
}

export default sum;
export { sub, mul, div };

// or we can do this way also:

// export {sum, sub, mul, div};