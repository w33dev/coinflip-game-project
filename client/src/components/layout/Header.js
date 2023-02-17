import { useState, } from "react";
import { useDispatch, useSelector} from 'react-redux';
import Web3Modal from 'web3modal';
import { Web3Provider } from '@ethersproject/providers';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { login, logout } from "../../actions/user";

function Header() {
    const dispatch = useDispatch();

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider, // required
            options: {
                infuraId: process.env.INFURA_ID // required
            }
        }
    }
    
    const web3Modal = new Web3Modal({
        network: "rinkeby",
        theme: "dark", // optional, 'dark' / 'light',
        cacheProvider: false, // optional
        providerOptions,
    })

    const [connectedAccount, setConnectedAccount] = useState("");

    const connectWeb3Wallet = async () => {
        try {
            const web3Provider = await web3Modal.connect();
            const library = new Web3Provider(web3Provider);
            const web3Accounts = await library.listAccounts();
            const network = await library.getNetwork();
            dispatch(login(web3Accounts[0]))
            setConnectedAccount(web3Accounts[0]);
        } catch (error) {
            console.log(error);
        }
    };

    const disconnectWeb3Modal = async () => {
        await web3Modal.clearCachedProvider();
        dispatch(logout());
        setConnectedAccount("");
    };
    return (
        <div>
            {/* Left bar starts here */}
            {/* Left Navigation */}
            <div className="metaportal_fn_leftnav_closer" />
            <div className="metaportal_fn_leftnav">
            <div className="navbox" style={{minHeight: '460px'}}>
                <div className="list_holder">
                <ul className="metaportal_fn_items">
                    <li>
                    <div className="item">
                        <a href="https://joepegs.com/" target="_blank" />
                        <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="223.000000pt" height="200.000000pt" viewBox="0 0 223.000000 200.000000" preserveAspectRatio="xMidYMid meet" className="fn__svg replaced-svg">
                            <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M1058 1985 c-40 -22 -48 -45 -48 -129 0 -42 -3 -76 -8 -76 -4 0 -65 16 -136 35 -71 20 -131 34 -133 31 -2 -2 14 -40 36 -85 142 -282 206 -551 170 -723 -13 -65 -90 -228 -153 -327 -26 -40 -45 -79 -42 -87 4 -11 34 -14 136 -14 l130 0 0 -100 0 -100 -152 0 c-134 0 -157 2 -196 21 -56 27 -93 84 -100 149 l-5 50 -275 0 -275 0 6 -78 c7 -85 37 -181 82 -258 44 -75 150 -174 231 -217 140 -73 135 -72 739 -72 534 0 541 0 587 22 69 31 141 104 212 213 35 52 84 127 110 167 37 56 62 82 116 118 37 25 82 50 99 56 31 11 31 11 31 86 0 66 -2 74 -17 69 -10 -3 -137 -39 -283 -81 l-265 -77 -70 -68 c-92 -91 -116 -100 -260 -100 l-115 0 0 100 0 100 74 0 c85 0 102 10 200 120 75 84 110 135 149 218 28 58 32 77 31 147 -1 97 -23 160 -96 272 -52 81 -266 303 -326 338 l-32 19 0 88 c0 90 -13 142 -43 166 -24 20 -79 24 -109 7z" />
                            <path d="M586 1558 c-18 -29 -126 -198 -240 -376 -113 -178 -206 -328 -206 -333 0 -5 103 -9 254 -9 l254 0 52 105 c61 121 72 195 50 319 -21 118 -101 346 -121 346 -5 0 -24 -24 -43 -52z" />
                            </g>
                        </svg>
                        </span>
                        <span className="text">OpenSea</span>
                    </div>
                    </li>
                    <li>
                    <div className="item">
                        <a href="https://discord.gg/XAyDeQVM98" target="_blank" />
                        <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="392.000000pt" viewBox="0 0 512.000000 392.000000" preserveAspectRatio="xMidYMid meet" className="fn__svg replaced-svg">
                            <g transform="translate(0.000000,392.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M1690 3885 c-317 -70 -559 -148 -858 -275 -49 -21 -57 -30 -126 -139 -330 -522 -544 -1059 -641 -1610 -50 -287 -59 -412 -58 -766 1 -181 5 -355 10 -385 l8 -54 130 -89 c325 -221 663 -391 1017 -512 73 -25 138 -43 144 -41 25 10 274 407 274 437 0 4 -26 17 -57 29 -79 31 -335 158 -352 175 -17 17 -13 23 41 62 l43 31 100 -43 c528 -225 1131 -298 1690 -204 257 43 491 114 766 232 35 15 36 15 80 -20 24 -19 44 -40 44 -46 0 -14 -209 -124 -320 -168 -44 -18 -84 -36 -89 -40 -20 -18 239 -448 270 -449 7 0 65 18 130 41 369 127 702 294 1029 516 l130 89 7 54 c3 30 9 159 13 285 28 882 -200 1686 -702 2477 l-74 116 -137 57 c-253 105 -583 205 -826 250 l-90 17 -17 -24 c-10 -12 -42 -74 -71 -137 l-53 -113 -50 6 c-27 3 -93 11 -145 18 -124 16 -645 16 -775 0 -55 -6 -122 -14 -150 -18 l-50 -5 -65 133 c-76 155 -63 148 -220 113z m204 -1649 c131 -64 226 -189 262 -343 20 -84 14 -223 -14 -304 -115 -344 -492 -448 -737 -204 -160 160 -199 419 -95 632 57 115 150 199 269 240 55 20 80 23 154 20 76 -4 98 -9 161 -41z m1702 -1 c171 -84 274 -259 274 -465 0 -150 -47 -274 -142 -375 -260 -279 -680 -133 -764 265 -44 209 47 442 216 550 82 53 151 71 253 66 77 -3 98 -8 163 -41z" />
                            </g>
                        </svg>
                        </span>
                        <span className="text">Discord</span>
                    </div>
                    </li>
                </ul>
                </div>		
                <div className="nav_holder">
                {/* For JS */}
                <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="284.929px" height="284.929px" viewBox="0 0 284.929 284.929" xmlSpace="preserve" className="fn__svg  replaced-svg">
                    <g>
                        <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                    </g>
                    <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                </span>
                {/* For JS */}
                <div className="menu-flip-menu-container">
                    <ul id="menu-flip-menu" className="left_nav">
                    <li id="menu-item-709" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-709">
                        <a href="/">
                        <span className="creative_link">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="284.929px" height="284.929px" viewBox="0 0 284.929 284.929" xmlSpace="preserve" className="fn__svg  replaced-svg">
                            <g>
                                <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                            </g>
                            <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                            </svg>
                            Home
                        </span>
                        </a>
                    </li>
                    <li id="menu-item-710" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-710">
                        <a href="/stats">
                        <span className="creative_link">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="284.929px" height="284.929px" viewBox="0 0 284.929 284.929" xmlSpace="preserve" className="fn__svg  replaced-svg">
                            <g>
                                <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                            </g>
                            <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                            </svg>
                            Stats
                        </span>
                        </a>
                    </li>
                    <li id="menu-item-711" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-711">
                        <a href="/history">
                        <span className="creative_link">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="284.929px" height="284.929px" viewBox="0 0 284.929 284.929" xmlSpace="preserve" className="fn__svg  replaced-svg">
                            <g>
                                <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                            </g>
                            <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                            </svg>
                            FLIP History
                        </span>
                        </a>
                    </li>
                    <li id="menu-item-708" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-708">
                        <a href="faqs">
                        <span className="creative_link">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="284.929px" height="284.929px" viewBox="0 0 284.929 284.929" xmlSpace="preserve" className="fn__svg  replaced-svg">
                            <g>
                                <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                            </g>
                            <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                            </svg>
                            FAQs
                        </span>
                        </a>
                    </li>
                    <li id="menu-item-712" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-712">
                        <a href="/profile">
                        <span className="creative_link">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="284.929px" height="284.929px" viewBox="0 0 284.929 284.929" xmlSpace="preserve" className="fn__svg  replaced-svg">
                            <g>
                                <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                            </g>
                            <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                            </svg>
                            Profile
                        </span>
                        </a>
                    </li>
                    <li id="menu-item-712" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-712">
                        {!connectedAccount ? (
                        <button onClick={connectWeb3Wallet} style={{background: "transparent", fontSize: "inherit", border: "none", cursor: "pointer"}}><span className="creative_link">Connect Wallet</span></button>
                        ) : (
                        <button onClick={disconnectWeb3Modal} style={{background: "transparent", fontSize: "inherit", border: "none", cursor: "pointer"}}><span className="creative_link">Disconnect Wallet</span></button>
                        )}
                    </li>
                    </ul>
                </div>
                </div>
                <div className="info_holder">
                <div className="copyright">
                    <p>
                    Copyright 2023 - Designed &amp; Developed by 
                    <a href="https://zillionairebulls.com/" target="_blank">ZBC</a>
                    </p>
                </div>
                <div className="metaportal_fn_social_list">
                    <ul>
                    <li>
                        <a href="https://twitter.com/ZillionaireBull" target="_blank"><i className="fn-icon-twitter" /></a>
                    </li>
                    <li>
                        <a href="https://discord.gg/XAyDeQVM98" target="_blank"><i className="fn-icon-pinterest" /></a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            {/* !Left Navigation */}		{/* Left bar ends here */}
            {/* Right bar starts here */}
            {/* Right bar ends here */}
            {/* Header starts here */}
            {/* Header */}
            <header id="header">
            <div className="header">
                <div className="header_in">
                <div className="trigger_logo">
                    <div className="trigger">
                    <span />
                    </div>
                    <div className="logo">
                    <div className="fn_logo">
                        <a href="https://zillionairebulls.com/">
                        <img className="retina_logo" src="https://zillionairebulls.com/wp-content/uploads/2023/01/Main-Logo-Final.png" alt="logo" data-xblocker="passed" style={{visibility: 'visible'}} />
                        <img className="desktop_logo" src="https://zillionairebulls.com/wp-content/uploads/2023/01/Main-Logo-Final.png" alt="logo" />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="nav" style={{opacity: 1}}>
                    <div className="menu-flip-menu-container">
                    <ul id="menu-flip-menu-1" className="metaportal_fn_main_nav">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-709"><a href="/"><span className="creative_link">Home</span></a></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-710"><a href="/stats"><span className="creative_link">Stats</span></a></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-711"><a href="/history"><span className="creative_link">FLIP History</span></a></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-708"><a href="/faqs"><span className="creative_link">FAQs</span></a></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-712"><a href="/profile"><span className="creative_link">Profile</span></a></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-712">
                        {!connectedAccount ? (
                        <button onClick={connectWeb3Wallet} style={{background: "transparent", fontSize: "inherit", border: "none", cursor: "pointer"}}><span className="creative_link">Connect Wallet</span></button>
                        ) : (
                        <button onClick={disconnectWeb3Modal} style={{background: "transparent", fontSize: "inherit", border: "none", cursor: "pointer"}}><span className="creative_link">Disconnect Wallet</span></button>
                        )}
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </header>
            {/* !Header */}
            {/* More Categories */}
            <div className="metaportal_fn_hidden more_cats">
            <div className="metaportal_fn_more_categories">
                <a href="#" data-more="Show More" data-less="Show Less">
                <span className="text">Show More</span>
                <span className="fn_count" />
                </a>
            </div>
            </div>
            {/* !More Categories */}
            <div className="metaportal_fn_product_preloader">
            <div className="spinner" />
            </div>
            {/* Product Modal */}
            <div className="metaportal_fn_modal product_modal">
            <div className="modal_in">
                <div className="modal_closer">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 341.751 341.751" xmlSpace="preserve" className="fn__svg  replaced-svg">
                    <g>
                        <g>
                        <rect x="-49.415" y="149.542" transform="matrix(0.7072 -0.707 0.707 0.7072 -70.7868 170.8326)" width="440.528" height="42.667" />
                        </g>
                    </g>
                    <g>
                        <g>
                        <rect x="149.569" y="-49.388" transform="matrix(0.707 -0.7072 0.7072 0.707 -70.7712 170.919)" width="42.667" height="440.528" />
                        </g>
                    </g>
                    <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                </a>
                </div>
                <div className="modal_content">
                <div className="metaportal_fn_product_modal">
                    <div className="img_item">
                    {/* here comes product's image */}
                    </div>
                    <div className="content_item">
                    <div className="metaportal_fn_title" data-align="left">
                        <h3 className="fn_title fn__maintitle" data-text>{/* here comes product's title */}</h3>
                        <div className="fn_cs_divider" data-align="left"><div className="divider" /></div>
                    </div>
                    <div className="desc">
                        <p>{/* here comes product's description */}</p>
                    </div>
                    <div className="view_on">
                        {/* here comes product's buttons */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="modal_ux_closer" />
            </div>
            {/* !Product Modal */}		{/* Header ends here */}
            {/* Header starts here */}
            {/* Mobile Navigation */}
            <div className="metaportal_fn_mobnav">
            <div className="mob_top">
                <div className="social_trigger">
                <div className="trigger">
                    <span />
                </div>
                <div className="social">
                    <ul>
                    <li>
                        <a href="https://twitter.com/ZillionaireBull" target="_blank">Tw.</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/XAyDeQVM98" target="_blank">Disc.</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="wallet">
                <a href="#" className="metaportal_fn_button wallet_opener"><span>Wallet</span></a>
                </div>
            </div>
            <div className="mob_mid">
                <div className="logo">
                <div className="fn_logo">
                    <a href="https://zillionairebulls.com/">
                    <img className="retina_logo" src="https://zillionairebulls.com/wp-content/uploads/2023/01/Main-Logo-Final.png" alt="logo" data-xblocker="passed" style={{visibility: 'visible'}} />
                    <img className="desktop_logo" src="https://zillionairebulls.com/wp-content/uploads/2023/01/Main-Logo-Final.png" alt="logo" data-xblocker="passed" style={{visibility: 'visible'}} />
                    </a>
                </div>
                </div>
                <div className="trigger">
                <span />
                </div>
            </div>
            <div className="mob_bot">
                <div className="menu-flip-menu-container">
                <ul id="menu-flip-menu-2" className="metaportal_fn_main_nav">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-709"><a href="/"><span className="creative_link">Home</span></a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-710"><a href="/stats"><span className="creative_link">Stats</span></a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-711"><a href="/history"><span className="creative_link">FLIP History</span></a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-708"><a href="/faqs"><span className="creative_link">FAQs</span></a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-712"><a href="/profile"><span className="creative_link">Profile</span></a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-712">
                    {!connectedAccount ? (
                    <button onClick={connectWeb3Wallet} style={{background: "transparent", fontSize: "inherit", border: "none", cursor: "pointer"}}><span className="creative_link">Connect Wallet</span></button>
                    ) : (
                    <button onClick={disconnectWeb3Modal} style={{background: "transparent", fontSize: "inherit", border: "none", cursor: "pointer"}}><span className="creative_link">Disconnect Wallet</span></button>
                    )}
                    </li>
                </ul>
                </div>
            </div>
            </div>
            {/* !Mobile Navigation */}		{/* Header ends here */}
        </div>
    )
}

export default Header;