function assert(name, actual, expected) {
  console.info('Test: ', name);

  if (actual !== expected) {
    console.info('Failure �')
    console.error('Actual: ', actual);
    console.error('Expected: ', expected);
  } else {
    console.info('Success ❤');
  }
}
