import './Home.css';
import HomeThumbNail from './HomeContent/HomeThumbNail';
import HomeCommit from './HomeContent/HomeCommit';
import HomeNews from './HomeContent/HomeNews';
import HomeRecoment from './HomeContent/HomeRecoment';

export default function Home(){
    return (
        <div className="home">
            <HomeThumbNail/>
            <HomeCommit/>
            <HomeNews/>
            <HomeRecoment/>
        </div>
    );
}