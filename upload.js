// utils/upload.js

const fs = require('fs');
const path = require('path');
const os = require('os');

// Função para fazer upload de um arquivo temporário
async function uploadToVercelTempDirectory(filePath) {
  const tmpDir = os.tmpdir();
  const tempFilePath = path.join(tmpDir, path.basename(filePath));

  try {
    // Copie o arquivo para o diretório temporário
    fs.copyFileSync(filePath, tempFilePath);
    console.log('Arquivo copiado para o diretório temporário:', tempFilePath);
    return tempFilePath;
  } catch (error) {
    console.error('Erro ao copiar o arquivo para o diretório temporário:', error);
    throw error;
  }
}

module.exports = { uploadToVercelTempDirectory };
