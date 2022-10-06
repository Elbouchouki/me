import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { SITE_TITLE } from "../config/information";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      {/* Header */}
      <Header />
    </div>
  );
};

export default Home;
