import { SearchBox } from "./Filter.styled";

export function Filter({ val, handleFilter }) {
    return (
      <SearchBox>
          <label>
            <span>Find contacts by name</span>
            <input
              type="text"
              value={val}
              onChange={handleFilter}
            />
          </label>
      </SearchBox>
    );
}