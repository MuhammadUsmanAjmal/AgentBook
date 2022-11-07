import Image from "next/image";

function Pagination() {
    return (
        <div className="text-center mt-5">
            <btn className='btn border-0 me-4'>
                <Image 
                    src='/vectors/angle-left-solid.svg' 
                    layout='intrinsic'
                    width={15} 
                    height={15} 
                    alt='Left Caret' 
                />
            </btn>
            <button className="btn btn-outline-primary me-2">1</button>
            <button className="btn btn-outline-primary me-2">2</button>
            <button className="btn btn-outline-primary">3</button>
            <span className="mx-2">.....</span>
            <button className="btn btn-outline-primary me-2">6</button>
            <button className="btn btn-outline-primary">7</button>
            <btn className='btn border-0 ms-4'>
                <Image 
                    src='/vectors/angle-right-solid.svg' 
                    layout='intrinsic'
                    width={15} 
                    height={15} 
                    alt='Right Caret' 
                />
            </btn>
        </div>
    );
}

export default Pagination;