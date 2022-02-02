// O sudoku de entrada a ser analisado
const board = [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


function ConfereSudoku(board) {
    //Cria os arrays das estruturas a serem analisadas

    let linhas = []
    let colunas = []
    let caixas = []

    for (let i = 0; i < 9; i++) {
        linhas.push([]);
        colunas.push([]);
        caixas.push([]);
    }

    //Loop para percorrer a tabela e alocar os números nas estruturas
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            // Confere se não é nula a casa
            if (board[i][j] !== '.') {
                //Confere se já existe o elemento na estrutura, se já existe ele retorna falso, caso contŕario o adiciona na estrutura
                if (linhas[i].includes(board[i][j])) {
                    return false
                } else linhas[i].push(board[i][j]);

                if (colunas[j].includes(board[i][j])) {
                    return false
                } else colunas[j].push(board[i][j]);

                //Confere o index da caixa em que será incluso utilizando arredondamento para baixo
                let caixaIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);

                if (caixas[caixaIndex].includes(board[i][j])) {
                    return false;
                } else caixas[caixaIndex].push(board[i][j]);

            }
        }
    }

    return true
}

console.log(ConfereSudoku(board))