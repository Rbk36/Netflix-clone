import Row from "../Row/Row";
import requests from "../../../utils/requests";
const RowList = () => {
  return (
    <div className="row">
      <Row title="NetflixOrignals" fetchUrl={requests.fetchNetflixOrignals} isLargeRow={true}/>
      <Row title="TopRated" fetchUrl={requests.fetchTopRated}  isLargeRow={true}/>
      <Row title="Action" fetchUrl={requests.fetchAction} isLargeRow={true} />
      <Row title="Comedy" fetchUrl={requests.fetchComedy}  isLargeRow={true}/>
      <Row title="Romance" fetchUrl={requests.fetchRomance}  isLargeRow={true}/>
      <Row title="Horror" fetchUrl={requests.fetchHorror} isLargeRow={true} />
      <Row title="Documentary" fetchUrl={requests.fetchDocumentary} isLargeRow={true} />
      <Row title="TVShow" fetchUrl={requests.fetchTVShow}  isLargeRow={true}/>
    </div>
  );
};

export default RowList;
