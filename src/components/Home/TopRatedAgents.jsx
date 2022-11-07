import SingleAgent from '../../common/SingleAgent';
import Pagination from '../../common/Pagination';

const agentsDirector = [
    {
        name: 'Tim Hortons',
        image: '/images/tim.png',
    },
    {
        name: 'Joan Wrigley',
        image: '/images/joan.png',
    },
    {
        name: 'Lydia Hollie',
        image: '/images/lydia.png',
    },
    {
        name: 'Dave Lordsky',
        image: '/images/dave.png',
    },
];



function TopRatedAgents() {
    return (
        <section className='agents'>
            <div className='container my-5'>
                <h2 className="fw-bold">Toronto&apos;s Top Rated Agents</h2>
                <p className="text-muted">Clients loved working with these agents</p>

                <div className="row g-5 my-2">
                    {agentsDirector.map((agent, index) => (
                        <div className="col-sm-12 col-md-6" key={index}>
                            <SingleAgent name={agent.name} image={agent.image} />
                        </div>
                    ))}
                </div>

                <Pagination />
            </div>
        </section>
    );
}

export default TopRatedAgents;