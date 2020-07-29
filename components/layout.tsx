import React from "react";
import Head from "next/head";

import styles from "./layout.module.css";
import Title from "./title";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
      </Head>
      <Title />
      {children}
    </div>
  );
};

export default Layout;
