import profilePic from './assets/isagi.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            <h2 className="card-title">Dzeko Avmedoski</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia animi maxime obcaecati nobis praesentium qui quas. Fuga iusto vero veritatis praesentium ipsum totam, incidunt laboriosam et sunt neque voluptate.</p>
        </div>
    );
}
