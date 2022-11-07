import Layout from '../src/layout';
import SeoComponent from '../src/common/SEO';
import HomeComponent from '../src/components/Home';

export default function HomePage() {
  return (
    <Layout>
      <SeoComponent 
        title='AgentBook - Home Page'
        desc='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
        route='/'
      />
      <HomeComponent />
    </Layout>
  )
}