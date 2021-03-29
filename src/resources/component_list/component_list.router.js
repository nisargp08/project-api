import { Router } from "express";
import * as crudController from "./component_list.controller";

const router = Router();

// /api/component_library
router
.route("/").
get(crudController.getAll).
post(crudController.createOne);

// /api.component_library
router
.route("/:id")
.get(crudController.getOne)
.put(crudController.updateOne)
.delete(crudController.removeOne);

export default router;
