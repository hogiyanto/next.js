import Layout from "../components/layout";

export const Home = (): JSX.Element => (
  <Layout>
    <main>
      <div className="flex">
        <div className="w-16 md:w-32 text-center text-gray-700 bg-gray-400 px-4 py-2 m-2">1</div>
        <div className="w-16 md:w-32 text-center text-gray-700 bg-gray-400 px-4 py-2 m-2">2</div>
        <button
          className="btn-blue"
          onClick={() => {
            window.alert("With typescript and Jest");
          }}
        >
          Test Button
        </button>
      </div>
    </main>
  </Layout>
);

export default Home;
