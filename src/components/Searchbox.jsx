const SearchBox = (props) => {
    return (
        <div className="col col-sm-5">

        <input
            className="form-control "
            value={props.value}
            onChange = { (event) => props.setSearchValue (event.target.value)}
            placeholder="Search movie"
        />
        </div>
    )
}

export default SearchBox;