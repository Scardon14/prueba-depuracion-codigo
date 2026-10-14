const UserController = require("./user-controller");
const User = require("./user");
let userController;

//crea una instancia nueva antes de cada prueba
beforeEach(() => {
    userController = new UserController();
});

//agregar un usuario
test('add user to userController', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

//agrega un usuario que no estaba en la lista
test('add user that is not in the list', () => {
  let user = new User(5678,"Gabriela","gabriela@generation.org"
  );
  expect(userController.getUsers()).not.toContain(user);
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

//elimina un usuario
test('remove user from userController', () => {
  let user = new User(1234,"Santiago","santiago@generation.org"
  );
  userController.add(user);
  userController.remove(user);
  expect(userController.getUsers()).not.toContain(user);
});

//intenta eliminar un usuario inexistente
test('remove user that is not in the list', () => {
  let existingUser = new User(1234,"Santiago","santiago@generation.org"
  );
  let missingUser = new User(5678,"Gabriela","gabriela@generation.org"
  );
  userController.add(existingUser);
  userController.remove(missingUser);
  expect(userController.getUsers()).toEqual([existingUser]);
});

//correo existente
test('findByEmail returns user when email exists', () => {
  let user = new User(1234,"Santiago","santiago@generation.org"
  );
  userController.add(user);
  expect(userController.findByEmail("santiago@generation.org")).toEqual(user);
});

//correo inexistente
test('findByEmail returns undefined when email does not exist', () => {
  expect(userController.findByEmail("inexistente@generation.org")).toBeUndefined();
});

//ID existente
test('findById returns user when ID exists', () => {
  let user = new User(1234, "Santiago","santiago@generation.org"
  );
  userController.add(user);
  expect(userController.findById(1234)).toEqual(user);
});

//ID inexistente
test('findById returns undefined when ID does not exist', () => {
  expect(userController.findById(9999)).toBeUndefined();
});
