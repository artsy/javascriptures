/**
 * JavaScript built-in
 */

let isDone: boolean = false

let decimal: number = 6
let float: number = 6.1
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

let color: string = "blue"

let list: number[] = [1, 2, 3];

let u: undefined = undefined
let n: null = null

let fn: (x: string) => number = x => x.length

/**
 * TypeScript specific
 */

let tuple: [string, number] = ["hello", 10]

enum Color { Red, Green, Blue }
let c: Color = Color.Green

let unusable: void = undefined

let error: never
