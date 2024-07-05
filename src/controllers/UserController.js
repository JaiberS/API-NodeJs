const pool = require('../db');
const validatorUtils = require('../utils/validatorUtils');

class userController {

    async getUser(req, res) {
        try {
            const { rows } = await pool.query('SELECT * FROM user');

            res.send(rows);
        } catch (error) {
            res.status(error.statusCode || 500).json({ status: 'error', response: error.message });
        }
    }

    async getUserByID(req, res) {
        try {
            const { id } = req.params;

            if (!id || !validatorUtils.isValidUUID(id)) 
                return res.status(400).json({ message: "not valid user ID" });

            const { rows } = await pool.query(`SELECT * FROM users WHERE id = ${id}`);

            if (rows && rows.length === 0) 
                return res.status(404).json({ message: "User not found" });

            res.send(rows[0]);
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