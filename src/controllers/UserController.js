const { pool } = require('../db');

class userController {

    async getUser(req, res) {
        try {
            res.send("getting User")
        } catch (error) {
            res.status(error.statusCode || 500).json({ status: 'error', response: error.message });
        }
    }

    async getUserByID(req, res) {
        try {
            res.send("getting User by Id")
        } catch (error) {
            res.status(error.statusCode || 500).json({ status: 'error', response: error.message });
        }
    }

    async createUser(req, res) {
        try {
            res.send("creating User")
        } catch (error) {
            res.status(error.statusCode || 500).json({ status: 'error', response: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            res.send("deleting User")
        } catch (error) {
            res.status(error.statusCode || 500).json({ status: 'error', response: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            res.send("updating User")
        } catch (error) {
            res.status(error.statusCode || 500).json({ status: 'error', response: error.message });
        }
    }

}

module.exports = new userController();