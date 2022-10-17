import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

import { SearchWrapper, GradientWrapper, IconWrapper, MenuIconWrapper } from './styles';
import { setSearchQuery } from '../../redux/features/currentSongArtistList';

const Search = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector(state => state.currentSongArtistList);
  const [text, setText] = useState('');

  const handleInput = (e) => setText(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(setSearchQuery(text));
    }
  };

  useEffect(() => {
    if(searchQuery) setText(searchQuery);
 }, [searchQuery])

  return (
    <SearchWrapper>
      <MenuIconWrapper>
        <GiHamburgerMenu />
      </MenuIconWrapper>
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
