import FigImage from "../../common/Image";

function ChoosingAgent() {
    return (
        <section className="ch-agent">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="ca-figure">
                            <FigImage 
                                src="/images/choose-agents.png"
                                layout="intrinsic"
                                width={600}
                                height={640}
                                className='img-fluid'
                                alt="Choosing Agents Image"
                            />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div className="container ps-3 mt-5">
                            <h5>CHOOSING YOUR AGENT</h5>
                            <h3>How to choose your agent</h3>
                            <p>You should choose an agent you are comfortable working with and who you feel has your best interests at heart. In order to make a decision, try asking prospective agents the following:</p>
                            <p className="bullet"><span /> How and where your property will be advertised</p>
                            <p className="bullet"><span /> Ask to see examples of their success in selling properties like yours</p>
                            <p className="bullet"><span /> How often you can expect feedback from the agent while your property is on the market</p>
                            <div className="mt-5">
                                <button className="btn btn-primary btn-app">Contact Agent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChoosingAgent;