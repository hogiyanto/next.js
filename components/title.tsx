import Head from "next/head";

interface Props {
  title?: string;
}

const Title = ({ title }: Props) => {
  return (
    <Head>
      <title>Create Next App{title ? ` | ${title}` : ``}</title>
    </Head>
  );
};

export default Title;
