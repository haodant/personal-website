import Layout from './components/layout';

// components
import HomeBanner from "./components/homePage/homeBanner"

function App() {
  return (
    <div className="App">
      <Layout>
        <HomeBanner />
      </Layout>
    </div>
  );
}

export default App;
