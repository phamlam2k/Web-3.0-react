import { Footer, Navbar } from "@components/common";
import { Web3Provider } from "@components/providers";

const BaseLayout = ({ children }: any) => {
  return (
    <Web3Provider>
      <div className="relative max-w-7xl mx-auto px-4">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </Web3Provider>
  );
};

export default BaseLayout;
