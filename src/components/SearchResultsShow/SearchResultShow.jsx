import { useSelector } from 'react-redux';
import './SearchResultShow.scss';

export default function SearchResultShow() {
  const { results } = useSelector((state) => state.results);
  console.log(results, 'show map');
  return (
    <div className="searchResultShow">
      <div className="searchResultShow__inner">
        {results.map((item, i) => {
          const url = `https://ru.wikipedia.org/?curid=${item.pageid}`;
          return (
            <div className="searchResultShow__item" key={i}>
              <h3 className="searchResultShow__title">{item.title} </h3>
              <div
                className="searchResultShow__text"
                dangerouslySetInnerHTML={{ __html: item.snippet }}></div>
              <a href={url} target="_blank" rel="noreferrer" className="searchResultShow__button">
                Читать
              </a>{' '}
            </div>
          );
        })}
      </div>
    </div>
  );
}
