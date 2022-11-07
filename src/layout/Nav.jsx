import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      
      {/* <nav className="navbar navbar-inner navbar-expand-lg navbar-inverse">
        <div className="container">
          <Link href="/" passHref>
            <a className="navbar-brand navbar-brand-centered">
              <Image
                src="/vectors/logo.svg"
                className="img-fluid"
                width={180}
                height={70}
                quality={100}
                layout="intrinsic"
                alt="AgentBook Logo"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Image
                    src="/vectors/flag.svg"
                    className="img-fluid"
                    width={22}
                    height={15}
                    quality={100}
                    layout="intrinsic"
                    alt="AgentBook Canada Flag"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="d-inline-block me-2">
                    <Image
                      src="/vectors/bar-menu.png"
                      className="img-fluid text-white"
                      width={22}
                      height={15}
                      quality={100}
                      layout="intrinsic"
                      alt="AgentBook Canada Flag"
                    />
                  </div>
                  <div className="d-inline-block">
                    <Image
                      src="/vectors/profile.png"
                      className="img-fluid mt-1 text-white"
                      width={20}
                      height={20}
                      quality={100}
                      layout="intrinsic"
                      alt="AgentBook Canada Flag"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

<nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link href="/" passHref>
            <a className="navbar-brand navbar-brand-centered">
              <Image
                src="/vectors/logo.svg"
                className="img-fluid"
                width={180}
                height={70}
                quality={100}
                layout="intrinsic"
                alt="AgentBook Logo"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Image
                    src="/vectors/flag.svg"
                    className="img-fluid"
                    width={22}
                    height={22}
                    quality={100}
                    layout="intrinsic"
                    alt="AgentBook Canada Flag"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="d-inline-block me-2">
                    <Image
                      src="/vectors/bar-menu.png"
                      className="img-fluid text-white"
                      width={22}
                      height={15}
                      quality={100}
                      layout="intrinsic"
                      alt="AgentBook Canada Flag"
                    />
                  </div>
                  <div className="d-inline-block">
                    <Image
                      src="/vectors/profile.png"
                      className="img-fluid mt-1 text-white"
                      width={20}
                      height={20}
                      quality={100}
                      layout="intrinsic"
                      alt="AgentBook Canada Flag"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}
