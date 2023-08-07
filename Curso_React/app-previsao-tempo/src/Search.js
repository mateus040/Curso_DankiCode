function Search(){

    function searchInput(){
        // Buscando o valor digitado no input
        let currentValue = document.querySelector('input[name=searchInput]').value;
    }

    return (
        <div className="search">
            <h2>Digite a cidade que você quer saber a previsão...</h2>
            <input placeholder="Digite a cidade..." onKeyUp={searchInput} type="text" name="searchInput" />
        </div>
    )
}

export default Search;