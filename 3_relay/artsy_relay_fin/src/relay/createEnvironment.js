import { Environment, Network, RecordSource, Store } from "relay-runtime"
import { metaphysics } from "./metaphysics"

export function createEnvironment() {
  const fetchQuery = (operation, variables, cacheConfig) => {
    return metaphysics({ query: operation.text, variables })
  }
  const network = Network.create(fetchQuery)
  const source = new RecordSource()
  const store = new Store(source)
  return new Environment({
    network,
    store,
  })
}
