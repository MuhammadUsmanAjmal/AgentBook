import FigImage from "../common/Image";


function RealTimeConversation() {
    return (
        <section className="ch-agent ">
            <div className="container pb-5">
                <div className="row">
                    
                    <div className="col-sm-12 col-md-8">
                        <div className="container ps-3 mt-5">
                            <h5>CHAT WITH AN AGENT</h5>
                            <h3>Real Time Conversation</h3>
                            <p>You should choose an agent you are comfortable working with and who you feel has your best interests at heart. In order to make a decision, try asking prospective agents the following:</p>
                            <p className="bullet"><span /> Search for an agent by name or location</p>
                            <p className="bullet"><span />Filter the results based on your interests</p>
                            <p className="bullet"><span /> Select and contact your best match agent</p>
                            <div className="mt-5">
                                <button className="btn btn-primary btn-app">Find an Agent</button>
                            </div>
                        </div>
                    </div>

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

                </div>
            </div>
        </section>
    );
}

export default RealTimeConversation;