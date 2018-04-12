export const http = {
  get: () => {
    return new Promise(resolve => {
      const users = ['Hello', 'how', 'are', 'you']

      // Fake a 1sec request
      setTimeout(() => {
        resolve(users)
      }, 1000)
    })
  }
}
