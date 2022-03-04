const wait = (milliseconds = 2000) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export default wait;
