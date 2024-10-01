import app from "./external/api/config";
import RepositorioUsuarioPrismaPg from "./external/prisma/RepositorioUsuarioPrismaPg";

import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import ConsultarUsuarios from "./core/usuario/service/ConsultarUsuarios";
import ConsultarUsuarioPorId from "./core/usuario/service/ConsultarUsuarioPorId";

import RegistrarUsuarioController from "./adapters/RegistrarUsuarioController";
import ConsultarUsuariosController from "./adapters/ConsultarUsuariosController";
import ConsultarUsuarioPorIdController from "./adapters/ConsultarUsuarioPorIdController";


app.get("/", () => "API Rest Cadastro de Usuários");

//Registrar Rotas
const repositorioUsuario = new RepositorioUsuarioPrismaPg();


const registrarUsuario = new RegistrarUsuario(repositorioUsuario);
const consultarUsuarios = new ConsultarUsuarios(repositorioUsuario);
const consultarUsuarioPorId = new ConsultarUsuarioPorId(repositorioUsuario);

new RegistrarUsuarioController(app, registrarUsuario);
new ConsultarUsuariosController(app, consultarUsuarios);
new ConsultarUsuarioPorIdController(app, consultarUsuarioPorId);

app.listen(process.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
