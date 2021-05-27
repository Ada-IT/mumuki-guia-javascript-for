it("Si hacemos factorial(4) debería retornar 24", function() {
let resultado = factorial(4)
assert.equal(resultado, 24,`factorial(4) debería retornar 24 pero fue ${resultado}`);
})

it("Si hacemos factorial(5) debería retornar 120", function() {
let resultado = factorial(5)
assert.equal(resultado, 120,`factorial(5) debería retornar 120 pero fue ${resultado}`);
})