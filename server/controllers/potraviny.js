const db = require("../helpers/db");

exports.getAllPotraviny = (req, res) => {
    db.query("SELECT * FROM potraviny;", (err, result, field) => {
        if (err) return console.log(err);
        res.status(200).send({
            msg: "Potraviny found",
            result,
        });
    })
}

exports.getPotravinyById = (req, res) => {
    db.query(
        "SELECT * FROM potraviny WHERE id = ?;",
        [req.params.id],
        (err, result, fields) => {
            if (err) return console.log(err);
            res.status(200).send({
                msg: "Potravina found",
                result,
            });
        }
    );
};