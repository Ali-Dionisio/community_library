import { userIdSchema } from "../schema/user.schema.js";

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (e) {
        res.status(400).json({error: e.errors});
        schema.parse(req.body);
    }
};

const validateUserId = (req, res, next) => {
    try {
        const userId = +req.params.id; //+ = transformar em inteiro
        userIdSchema.parse({userId: userId});
        next();
    } catch (e) {
        res.status(400).json({error: e.errors});
        // schema.parse(req.body);
    }
}

export { validate, validateUserId }