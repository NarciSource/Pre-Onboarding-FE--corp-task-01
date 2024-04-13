import { useLocation } from 'react-router-dom'
function Detail() {
    return (
        <div dangerouslySetInnerHTML={{ __html: useLocation().state.body }}></div>
    );
}

export default Detail;
