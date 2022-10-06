import { useState } from 'react';

import { SearchWrapper, GradientWrapper, IconWrapper } from './styles';
import { useGetSearchResultsQuery } from '../../services/shazamCoreApi';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  const [query, setQuery] = useState('');

  const testSearch = 'Jackson';
  const { data, isFetching, error } = useGetSearchResultsQuery(testSearch);
  console.log(data);

  const handleInput = (e) => setQuery(e.target.value);

  return (
    <SearchWrapper>
      <GradientWrapper>
        <IconWrapper>
          <BsSearch />
        </IconWrapper>
        <input value={query} onChange={handleInput} />
      </GradientWrapper>
    </SearchWrapper>
  );
};

export default Search;
