import Image from "next/image";
import PropTypes from "prop-types";

function FigImage({ src, layout, quality, className, alt, width, height }) {
    return (
        <>
        <figure className="figure">
            <Image 
                src={src}
                layout={layout}
                quality={quality}
                className={className}
                alt={alt}
                width={width}
                height={height}
            />
            <figcaption className="figure-caption d-none">{alt}</figcaption>
        </figure>
        </>
    );
}

FigImage.propTypes = {
    src: PropTypes.string.isRequired,
    layout: PropTypes.string.isRequired,
    quality: PropTypes.number.isRequired,
    className: PropTypes.string,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default FigImage;
