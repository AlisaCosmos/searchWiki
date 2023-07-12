import { useSelector } from 'react-redux';
import SearchResults from '../../components/SearchResults/SearchResults';
import SearchResultShow from '../../components/SearchResultsShow/SearchResultShow';

import './MainPage.scss';

export default function MainPage() {
  const { status } = useSelector((state) => state.results);
  return (
    <div className="mainPage container__row">
      <div className="mainPage__inner">
        {status === 'error' ? (
          <div className="mainPage__error_info">
            <div className="error_info__title">Произошла ошибка &#128532;</div>
            <div className="error_info__text">
              К сожалению не удалось получить данные. Попробуйте повторить попытку позже.
            </div>
          </div>
        ) : (
          <div>
            <SearchResults />
            <SearchResultShow />
          </div>
        )}
      </div>
    </div>
  );
}
