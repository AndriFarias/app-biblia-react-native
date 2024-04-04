const urlApi = "https://www.abibliadigital.com.br/api/"

const searchAllBooks = async () => {
    try {
        const response = await fetch(`${urlApi}/books`)

        if (!response.ok) {
            throw new Error("Erro na busca dos livros")
        }
        const data = await response.json()
        
        return data
    } catch (error) {
        console.log(error);
    }
    
}

const getBook = async (abbrev) =>{
    
    try {
        const response = await fetch(`${urlApi}/books/${abbrev}`)
        if (!response.ok) {
            throw new Error("Erro na busca do livro")
        }
        const data = await response.json()
        
        return data
    } catch (error) {
        console.log(error);
    }
  
}

const getChapter = async(abbrev, chapter)=>{
    try {
        const response = await fetch(`${urlApi}/verses/nvi/${abbrev}/${chapter}`)
        if (!response.ok) {
            throw new Error("Erro na busca do capítulo")
        }
        const data = await response.json()
        return data
    
    } catch (error) {
        console.log(error);
    }
}

export {searchAllBooks, getBook, getChapter};