import Hero from "./Hero";
import ChoosingAgent from "./ChoosingAgent";
import TopRatedAgents from "./TopRatedAgents";
import ActiveAgents from "./ActiveAgents";
import RealTimeConversation from "../RealTimeConversation";
import ExpertLocalAgent from "../ExpertLocalAgent";
import LatestArticles from "../LatestArticles";

export default function Home() {
    return (
        <>
            <Hero />
            <TopRatedAgents />
            <ChoosingAgent />
            <ActiveAgents />
            <ExpertLocalAgent/>
            <RealTimeConversation/>
            <LatestArticles/>
        </>
    );
};
