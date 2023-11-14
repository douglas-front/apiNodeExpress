const Product = require("../models/Product");
const fs = require('fs');
const path = require('path'); // Adicione esta linha no início do arquivo


exports.create = async (req, res) => {
    try {
        const { name } = req.body;

        const file = req.file;

        const extension = path.extname(file.originalname);
        const product = new Product({
            name,
            src: file.path,
            extension,
        });

        await product.save();


          

        return res.status(200).json({ product });



    } catch (error) {
        res.status(500).json({ error, message: 'Erro ao salvar' });
    }
};


exports.findAll = async (req, res) => {
    try {
        const product = await Product.find()
        res.json(product)
    } catch (error) {
        res.status(500).json({ error, message: "erro ao buscar" })
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
