import { useSelector } from 'react-redux';
import './SearchResults.scss';

export default function SearchResults() {
  const { searchInfo } = useSelector((state) => state.results);
  const { totalhits } = searchInfo;
  return (
    <>
      {totalhits ? <div className="searchResults__title">Результаты поика:{totalhits} </div> : ''}
    </>
  );
}
