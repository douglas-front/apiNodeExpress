const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, "uploads")); // Adicionada uma barra entre __dirname e "uploads/"
    },
    filename: function (req, file, cb) {
        // Use o valor do campo 'name' como parte do nome do arquivo
        const sanitizedName = req.body.name.replace(/[^a-zA-Z0-9]/g, '_'); // Remove caracteres especiais
        const fileName = `${sanitizedName}${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
