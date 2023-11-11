const Product = require("../models/Product");
const fs = require("fs/promises");
const path = require("path")

console.log("productController has connected");

exports.create = async (req, res) => {
    try {
        // console.log("Entrou no controlador create");
        // console.log("Request: ", req)

        const { name } = req.body;
        const file = req.file;

        // console.log("File: ", file)
       

        const product = new Product({
            name,
            file: file.filename,
        });


        await product.save();

        const dirPath = "./images"
        console.log("File: ", file.filename)
        fs.unlink(path.join(dirPath, file.filename))

        // const files = await fs.readdir("./images/")
        // console.log("files inside ./images :", files)

        // const deleteFilePromises = files.map(file =>
 
        //     console.log("File: ", file)
        //     // fs.unlink(path.join(dirPath, file)),
        // );

        // await Promise.all(deleteFilePromises)

        return res.status(200).json({ message: 'Salvou' });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao salvar' });
    }
};


exports.findAll = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: "erro ao buscar" })
    }
}

exports.remove = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).json({ message: "Produto não encontrado" })
        }

        const filePath = product.src

        if (fs.existsSync(filePath)) {

            try {
                fs.unlinkSync(filePath);
                console.log("Produto excluído com sucesso.")
            } catch (error) {
                console.error("Erro ao excluir o Produto:", error)
            }
        } else {
            console.log("O arquivo não existe.")
        }

        await Product.deleteOne({ _id: req.params.id })

        // await product.remove()

        res.json({ message: "Produto deletado" })
    } catch (error) {
        console.error('Erro ao excluir produto:', error)
        res.status(500).json({ message: "Erro ao excluir produto" })
    }
}
