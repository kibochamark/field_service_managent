/**
 * @type routes
 * this file include api routes for the fmd
 * with http verbs
 */
import { createUserWithEmailAndPassword } from "../controllers/auth/auth"
import { createRole } from "../controllers/roles"
import { Router } from "express"
const routes= Router()


// authentication routes

routes.post("/auth/signup/", createUserWithEmailAndPassword)



// role routes

routes.post("/role", createRole)


export default routes