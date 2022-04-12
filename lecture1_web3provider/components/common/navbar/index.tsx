import { useWeb3 } from "@components/providers";
import { setupHooks } from "@hooks/setupHooks";
import { useRouter } from "next/router";

const Navbar = () => {
  const { connect, isLoading, web3, hooks }: any = useWeb3();
  const route = useRouter();
  const { account } = hooks.useAccount();

  const handleInstall = () => {
    window.open("https://metamask.io/download/", "_blank");
  };

  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <a
                href="#"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Product
              </a>
              <a
                href="#"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Marketplace
              </a>
            </div>
            <div>
              <a
                href="#"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Company
              </a>
              {web3 ? (
                account.data ? (
                  <button
                    className="font-medium mr-8 text-indigo-600 hover:text-indigo-500"
                  >
                    Hi there {account.isAdmin && "Admin"}
                  </button>
                ) : (
                  <button
                    className="font-medium mr-8 text-indigo-600 hover:text-indigo-500"
                    onClick={connect}
                  >
                    Log in
                  </button>
                )
              ) : (
                <button
                  className="font-medium mr-8 text-indigo-600 hover:text-indigo-500"
                  onClick={handleInstall}
                >
                  Install metamask
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
