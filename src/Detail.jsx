import { useLocation } from 'react-router-dom';
import './Detail.scss';

function Detail() {
    return (
        <div dangerouslySetInnerHTML={{ __html: useLocation().state.body }}></div>
    );
}

export default Detail;
