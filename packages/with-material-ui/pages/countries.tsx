import { useQuery } from "@apollo/client";
import { GetServerSideProps, GetStaticProps } from "next";

import Layout from "../components/layout";
import Title from "../components/title";
import { GET_ALL_COUNTRIES } from "../graphql/country.graphql";
import { initializeApollo } from "../lib/apolloClient";
import { FindAllCountries } from "../src/__generated__/types";

const Countries = () => {
  const { data } = useQuery<FindAllCountries>(GET_ALL_COUNTRIES);

  return (
    <Layout>
      <Title title="Countries" />
      <ol>
        {data?.countries?.map((country) => (
          <li key={country.code}>{country.name}</li>
        ))}
      </ol>
    </Layout>
  );
};

// Use SSR

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ALL_COUNTRIES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

// Uncomment below and comment getServerSideProps to use SSG

// export const getStaticProps: GetStaticProps = async () => {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: GET_ALL_COUNTRIES,
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//     // Enable incremental static regeneration
//     // https://nextjs.org/blog/next-9-5#stable-incremental-static-regeneration
//     revalidate: 1,
//   };
// };

export default Countries;
