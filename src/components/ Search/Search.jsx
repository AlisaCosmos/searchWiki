import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../redux/slice/filterSlice';
import { setResults, setSearchInfo, fetchWiki } from '../../redux/slice/resultSlice';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import debounce from 'lodash.debounce';
import './Search.scss';
import { useRef } from 'react';
import { Input } from '@mui/material';

export default function Search() {
  const dispatch = useDispatch();

  const { search } = useSelector((state) => state.filters);
  console.log(search, 'search');

  const inputRef = useRef();

  //const testDebounse = debounce(() => {});

  const onChangeInput = (event) => {
    dispatch(setSearch(event.target.value));
  };

  const onClickClear = () => {
    dispatch(setSearch(''));
    inputRef.current.focus();
  };

  const handelSearch1 = (e) => {
    e.preventDefault();

    if (!search) {
      console.log('пусто');
      return;
    }

    const getData = 'action=query';
    //const formatData = 'format=json';
    //const limitData = 'srlimit=20';
    //const errorCORS = 'origin=*';
    //const endPoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;
    //try {
    dispatch(fetchWiki({ search })).then((res) => {
      if (res.payload === undefined && search) {
        console.log('пусто');
        return;
      }
      console.log(res, 'res');
      dispatch(setResults(res.payload.query.search));
      dispatch(setSearchInfo(res.payload.query.searchinfo));
    });
  };

  return (
    <div className="search">
      <form onSubmit={handelSearch1}>
        <input
          //type="search"
          ref={inputRef}
          className="search__input"
          placeholder="Введите поисковый запрос ..."
          value={search}
          onChange={onChangeInput}
        />
        <SearchOutlinedIcon className="search__icon" onClick={handelSearch1} />
        {search && <CloseOutlinedIcon onClick={onClickClear} className="search__icon__close" />}
      </form>
    </div>
  );
}
