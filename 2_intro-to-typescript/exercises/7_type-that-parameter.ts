interface Input {
  // ...
}

function typeMe(input: Input): string | null {
  if (input.hasFlag) {
    const result = doSomething(input.data)
    return input.callback(result)
  }
  return null
}

function doSomething(data: { x: number, y: number }) {
  return data.x * data.y
}
