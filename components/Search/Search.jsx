import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';

import { SearchWrapper, GradientWrapper, IconWrapper } from './styles';
import { setSearchQuery } from '../../redux/features/currentSongArtistList';

const Search = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleInput = (e) => setText(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(setSearchQuery(text));
    }
  };

  return (
    <SearchWrapper>
      <GradientWrapper>
        <IconWrapper>
          <BsSearch />
        </IconWrapper>
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={handleInput}
          onKeyDown={handleKeyPress}
        />
      </GradientWrapper>
    </SearchWrapper>
  );
};

export default Search;
