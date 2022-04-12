import { Footer, Navbar } from "@components/common";
const BaseLayout = ({ children }: any) => {

  return (
    <div>
      <div className="relative max-w-7xl mx-auto px-4">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
