module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim());
// Transformar a String em um Array. Cortando cada string toda vez que tiver uma vírgula e percorrendo todo o Array com .map e excluíndo os espaços em branco antes e depois da String com o .trim
    }
