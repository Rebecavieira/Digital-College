const users = [
    "usuario 1", 
    "usuario 2", 
    "usuario 3"];

function createUser(){
    console.log("usuário criado")
}
function updateUser(){
    console.log("usuário atualizado")
}
function listUser(){
    console.log("lista de usuários")
}
function deleteUser(){
    console.log("usuário delete")
}
module.exports = {
    users,
    createUser,
    updateUser,
    listUser,
    deleteUser
};