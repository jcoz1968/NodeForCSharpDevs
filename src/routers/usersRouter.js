var express = require('express');
import { UserService } from '../services/userService';

// /api/users/*
export class UsersRouter {

    constructor(config) {

        if(!config) {
            throw new Error('Config not defined.');
        }

        this.config = config;
        // this.userService = config.getService('UserService');
        this.userService = config.getUserService();
        if(!this.userService) throw Error("UserService not found");
    }

    build() {
        this.router = express.Router();
        this.router.route("/")
            .get(async(req, res, next) => {
                var users = await this.userService.getUsersAsync();
                res.json(users);
            });

        return this.router;
    }

}