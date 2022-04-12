import type { NextPage } from "next";
import { Breadcumb, Footer, Hero, Navbar } from "@components/common";
import { EthRates, WalletBar } from "@components/web3";
import { Card } from "@components/common/order";
import { List } from "@components/common/course";
import { BaseLayout } from "@components/layout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Hero />
      <Breadcumb />
      <WalletBar />
      <EthRates />
      <Card />
      <List />
    </BaseLayout>
  );
};

export default Home;
