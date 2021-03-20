function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let time = 0;
  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i];
    const rem = queries.length - (i + 1);
    time += duration * rem;
  }

  return time;
}