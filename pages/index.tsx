import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

import { SITE_TITLE } from "../config/information";

import { IGithub } from "./api/github";

type Props = {
  github: IGithub;
};

const Home: NextPage<Props> = ({ github }) => {
  return (
    <div className="bg-main-bg h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
      {/* <div className="bg-main-bg h-screen text-white "> */}
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        {/* <section id="hero"> */}
        <Hero user={github.user} />
      </section>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/github`);
  const githubInfo = await res.json();
  return { props: { github: githubInfo } };
};
