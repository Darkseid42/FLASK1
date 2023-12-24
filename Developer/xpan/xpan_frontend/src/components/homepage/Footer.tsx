import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        
        <footer className="bg-gradient-to-r from-white via-[#f5d2d286] to-white mt-20">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
              <Image
                className="h-auto w-auto"
                src="/assets/branding/xpanlite.svg"
                alt="logo"
                width="150"
                height="48"
              />
                <p className="max-w-xs mt-4 text-sm text-gray-600">
                  Expanding the limits of world by building web3 based solutions.
                </p>
                <div className="flex mt-8 space-x-6 text-gray-600">
                    <Link href="" aria-label="Facebook" className="hover:opacity-75" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Facebook </span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                        </svg>
                    </Link>

                    <Link href="" aria-label="Twitter" className="hover:opacity-75" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Twitter </span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                            <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                        </svg>
                    </Link>

                    <Link href="" aria-label="Linkedin" className="hover:opacity-75" target="_blank" rel="noreferrer" >
                        <span className="sr-only"> Linkedin </span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                            <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                        </svg>
                    </Link>

                    <Link href="" aria-label="Youtube" className="hover:opacity-75" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Youtube </span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                        <linearGradient id="PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1" x1="9.816" x2="41.246" y1="9.871" y2="41.301" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f44f5a"></stop><stop offset=".443" stopColor="#ee3d4a"></stop><stop offset="1" stopColor="#e52030"></stop></linearGradient><path fill="url(#PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1)" d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"></path><path d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z" opacity=".05"></path><path d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z" opacity=".07"></path><path fill="#fff" d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"></path>
                        </svg>
                    </Link>

                    <Link href="" aria-label="Medium" className="hover:opacity-75" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Medium </span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                            <path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"></path>
                        </svg>
                    </Link>

                    <Link href="" aria-label="Discord" className="hover:opacity-75" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Discord </span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                            <radialGradient id="La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1" cx="24" cy="10.009" r="32.252" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#8c9eff"></stop><stop offset=".368" stopColor="#889af8"></stop><stop offset=".889" stopColor="#7e8fe6"></stop><stop offset="1" stopColor="#7b8ce1"></stop></radialGradient><path fill="url(#La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1)" d="M40.107,12.15c-0.065-0.102-0.139-0.182-0.236-0.255c-0.769-0.578-4.671-3.339-9.665-3.875	c-0.01-0.001-0.048-0.003-0.057-0.003c-0.098,0-0.183,0.057-0.224,0.14l-0.269,0.538c0,0-0.001,0-0.001,0	c-0.017,0.033-0.026,0.071-0.026,0.111c0,0.109,0.07,0.202,0.168,0.236c0.006,0.002,0.048,0.011,0.063,0.014	c4.267,1.028,6.863,2.89,9.149,4.945c-4.047-2.066-8.044-4.001-15.009-4.001s-10.961,1.936-15.009,4.001	c2.286-2.055,4.882-3.917,9.149-4.945c0.015-0.004,0.057-0.012,0.063-0.014c0.098-0.034,0.168-0.127,0.168-0.236	c0-0.04-0.009-0.078-0.026-0.111c0,0-0.001,0-0.001,0l-0.269-0.538c-0.041-0.083-0.125-0.14-0.224-0.14	c-0.009,0-0.048,0.002-0.057,0.003c-4.994,0.536-8.896,3.297-9.665,3.875c-0.097,0.073-0.17,0.153-0.236,0.255	c-0.708,1.107-5.049,8.388-5.892,21.632c-0.009,0.142,0.04,0.289,0.135,0.395c4.592,5.144,11.182,5.752,12.588,5.823	c0.167,0.008,0.327-0.065,0.427-0.199l1.282-1.709c0.1-0.134,0.046-0.322-0.111-0.379c-2.705-0.986-5.717-2.7-8.332-5.706	C11.231,34.457,16.12,37,24,37s12.769-2.543,16.009-4.993c-2.616,3.006-5.627,4.719-8.332,5.706	c-0.157,0.057-0.211,0.245-0.111,0.379l1.282,1.709c0.101,0.134,0.26,0.208,0.427,0.199c1.407-0.072,7.996-0.679,12.588-5.823	c0.095-0.106,0.144-0.253,0.135-0.395C45.156,20.538,40.815,13.257,40.107,12.15z"></path><ellipse cx="30.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="30.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="30.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="17.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse>
                        </svg>
                        
                    </Link>

                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="font-medium">
                    Company
                  </p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <Link href="/"  className="hover:opacity-75">  About </Link>
                    <Link href="/"  className="hover:opacity-75" > Meet the Team </Link>
                    <Link href="/"  className="hover:opacity-75" > Roadmap </Link>
                    <Link href="/"  className="hover:opacity-75" > Career </Link>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">
                    Services
                  </p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <Link href="/"  className="hover:opacity-75" > Portfolio Management </Link>
                  <Link href="/"  className="hover:opacity-75" > Trading Bots </Link>
                  <Link href="/"  className="hover:opacity-75" > Futures Bots </Link>
                  <Link href="/"  className="hover:opacity-75" > Wallets Integration </Link>
                  <Link href="/"  className="hover:opacity-75" > Dex lookup </Link>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">
                    Support
                  </p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <Link href="/Pricing"  className="hover:opacity-75" > Pricing </Link>
                  <Link href="/"  className="hover:opacity-75" > Documentation </Link>
                  <Link href="/"  className="hover:opacity-75" > Tutorials </Link>
                  <Link href="/FAQs"  className="hover:opacity-75"> FAQs </Link>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">
                    Legal
                  </p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <Link href="/"  className="hover:opacity-75" > Claim </Link>
                  <Link href="/"  className="hover:opacity-75" > Privacy </Link>
                  <Link href="/"  className="hover:opacity-75" > Terms & Condition </Link>
                  <Link href="/"  className="hover:opacity-75" > Policies </Link>
                  </nav>
                </div>
              </div>
            </div>
            <p className="mt-8 text-xs text-gray-800">
              © 2023 Altsstore Technology Private Limited (XPAN).
            </p>
          </div>
        </footer>
    )
}

export default Footer