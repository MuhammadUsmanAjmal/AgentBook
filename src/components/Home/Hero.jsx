import FigImage from '../../common/Image';

export default function Hero() {
    return (
        <section>
            <div className='hero'>
                <div className='hero-bg'>
                    <FigImage 
                        src='/images/hero.png'
                        layout='fill'
                        quality={100}
                        alt='AgentBook Hero Image'
                    />
                </div>
                <div className='hero-overlay'>
                    <div className='container'>
                        <div className=' text-center text-white'>
                            <h1 className='text-capitalize  fw-bolder'>Find the perfect real state agent</h1>
                            <p className=''>Make your search and sale easier and faster by connecting with one
                            of our expert local agent in your neighborhood</p>
                        </div>
                        <div className='search-box bg-white rounded border-pink'>
                            <div className='row p-2 align-items-center'>
                                <div className='col-1 text-center'>
                                    <div className='mg-glass'>
                                        <FigImage 
                                            src='/vectors/m-glass.png'
                                            width={21}
                                            height={21}
                                            quality={100}
                                            layout='intrinsic'
                                            alt='Magnifying glass vector'
                                        />
                                    </div>
                                </div>
                                <div className='col-8'>
                                    <input className='form-control' type='text' />
                                </div>
                                <div className='col-3 text-end'>
                                    <button className='btn btn-lg btn-primary btn-app'>Search Agents</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            
        </section>
    );
}
