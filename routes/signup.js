import express from 'express';
const signupRouter = express.Router();

signupRouter.get("/signup", (req, res) => {
    res.render("signup");
})

export default signupRouter;