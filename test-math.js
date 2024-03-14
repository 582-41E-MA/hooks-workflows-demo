const test = require("node:test")
const assert = require("node:assert")
const { add } = require("./math.js")

test("Ajouter deux integer", () => {
    assert.strictEqual(add(2, 3), 5)
})

test("Ajouter deux float", () => {
    assert.strictEqual(add(2.5, 2.5), 5)
})

