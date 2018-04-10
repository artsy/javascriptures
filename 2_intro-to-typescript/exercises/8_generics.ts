const strings: Array<string> = ["foo", "bar"]

function produceArray<T>(x: T) {
  const result: Array<T> = [x]
  return result
}

const numbers = produceArray(42)
