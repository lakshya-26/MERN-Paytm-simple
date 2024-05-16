const dotenv = require("dotenv");
dotenv.config({
    path: './.env'
})

module.exports = {
	JWT_SECRET: `${process.env.JWT}`
}