import Link from "next/link";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main>
        <h1>
          Read{" "}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>
      </main>
    </div>
  );
};

export default HomePage;
