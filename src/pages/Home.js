import './Home.css';
import HomeThumbNail from './HomeContent/HomeThumbNail';
import HomeCommit from './HomeContent/HomeCommit';
import HomeNews from './HomeContent/HomeNews';

export default function Home(){
    return (
        <div className="home">
            <HomeThumbNail/>
            <HomeCommit/>
            <HomeNews/>

        </div>
    );
}