import { SearchWrapper, GradientWrapper, IconWrapper } from './styles';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <SearchWrapper>
      <GradientWrapper>
        <IconWrapper>
          <BsSearch />
        </IconWrapper>
        <input />
      </GradientWrapper>
    </SearchWrapper>
  );
};

export default Search;
