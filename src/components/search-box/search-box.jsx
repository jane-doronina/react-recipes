import './search-box.css';

const SearchBox = (props) => {
  const { placeholder, className, handleChange } = props;
  return (
    <div className="search-form-control">
    <input type="search" placeholder={placeholder} className={className} onChange={handleChange} />
    </div>
  );
}

export default SearchBox;
