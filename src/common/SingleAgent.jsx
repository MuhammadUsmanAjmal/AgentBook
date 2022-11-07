import Image from "next/image";
import PropTypes from "prop-types";
import FigImage from "../common/Image";

function SingleAgent({ image, name }) {
    return (
        <div className="row align-items-center">
            <div className="col-3">
                <div className="img-rounded">
                    <FigImage 
                        src={image}
                        className='img-fluid'
                        width={112}
                        height={112}
                        layout='intrinsic'
                        quality={100}
                        alt={`${name} - Best Agent`}
                    />
                </div>
            </div>
            <div className="col-9">
                <div className="row">
                    <div className="col-6">
                        <h3>{name}</h3>
                    </div>
                    <div className="col-6 text-end">
                        <Image 
                            src='/vectors/rating.svg' 
                            layout='intrinsic'
                            width={120} 
                            height={18} 
                            alt={`${name} - rating`} 
                        />
                    </div>
                    <div className="col-12">
                        <p>Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...<span className="show-more">More</span></p>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="col-12 text-end">
                <button className="btn btn-primary btn-app">Contact Agent</button>
            </div>
        </div>
    );
}

SingleAgent.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default SingleAgent;