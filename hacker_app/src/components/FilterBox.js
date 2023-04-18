const FilterBox = ({handleSearchChange}) => {

    const handleInputChange = (e) => {
        console.log(e.target.value)
        handleSearchChange(e.target.value)
    }

    return (
        <div className = "FilterBox">
            <h3>FilterBox</h3>
            <form >
                <label htmlFor="searchInput">Search Box </label>
                <input onChange = {handleInputChange} type="text" id="searchInpu" name="searchInput"/>
            </form>
        </div>
      );
}
 
export default FilterBox;