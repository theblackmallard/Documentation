(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{407:function(e,a,t){"use strict";t.r(a);var s=t(0),n=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"step-by-step-setup-guide-for-eth-erc20-token-swap-using-barterdex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step-setup-guide-for-eth-erc20-token-swap-using-barterdex","aria-hidden":"true"}},[e._v("#")]),e._v(" Step by Step Setup Guide for ETH (ERC20) Token Swap Using barterDEX")]),e._v(" "),t("h2",{attrs:{id:"barterdex-is-officially-deprecated-as-of-this-writing-and-mm2-is-under-testing-before-public-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#barterdex-is-officially-deprecated-as-of-this-writing-and-mm2-is-under-testing-before-public-release","aria-hidden":"true"}},[e._v("#")]),e._v(" BarterDEX is officially deprecated as of this writing and mm2 is under testing before public release.")]),e._v(" "),t("p",[t("strong",[e._v("This guide will set you up with ETH swaps in BarterDEX. If you are not looking for non ETH based token swap, please follow this")]),e._v(" "),t("router-link",{attrs:{to:"/mmV1/installation/install-marketmakerV1.html"}},[e._v("installation guide.")]),e._v(" "),t("strong",[e._v("The project is still in development. This guide may change accordingly in the future. Make sure you are following the latest guide before reporting anything is broken.")])],1),e._v(" "),t("h2",{attrs:{id:"installation-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation steps")]),e._v(" "),t("p",[e._v("Please follow all the steps by their order of appearance in this guide. If you get any error for any step and skip to the next, things will not work for you. If you have any questions or need help, head over to "),t("code",[e._v("#etomic")]),e._v(" channel in Komodo Platform "),t("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord"),t("OutboundLink")],1),e._v(" and ask there.")]),e._v(" "),t("h3",{attrs:{id:"install-required-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-required-dependencies","aria-hidden":"true"}},[e._v("#")]),e._v(" Install required dependencies")]),e._v(" "),t("p",[e._v("Install all the following dependencies. Without installing these, your "),t("code",[e._v("marketmaker")]),e._v(" binary may crash and not work.")]),e._v(" "),t("h3",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux","aria-hidden":"true"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),t("h4",{attrs:{id:"install-gcc-7-2-g-7-2-and-symlink-them-as-gcc-g"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-gcc-7-2-g-7-2-and-symlink-them-as-gcc-g","aria-hidden":"true"}},[e._v("#")]),e._v(" Install gcc-7.2 & g++-7.2 and symlink them as gcc & g++")]),e._v(" "),t("p",[e._v("The following are steps to install them in Ubuntu. If you are using Debian use")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deb http://ftp.us.debian.org/debian testing main contrib non-free"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" /etc/apt/sources.list.d/forgcc.list\n")])])]),t("p",[e._v("to add the repository and continue from the "),t("code",[e._v("sudo apt-get update")]),e._v(" command.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" add-apt-repository ppa:jonathonf/gcc-7.2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" gcc-7 g++-7\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /usr/bin/gcc "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /usr/bin/g++\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /usr/bin/gcc-7 /usr/bin/gcc\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /usr/bin/g++-7 /usr/bin/g++\n")])])]),t("h3",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos","aria-hidden":"true"}},[e._v("#")]),e._v(" MacOS")]),e._v(" "),t("h4",{attrs:{id:"to-install-latest-cmake-3-10-2-gcc-7-3-0-and-leveldb-1-20-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-install-latest-cmake-3-10-2-gcc-7-3-0-and-leveldb-1-20-2","aria-hidden":"true"}},[e._v("#")]),e._v(" To install latest cmake 3.10.2, gcc 7.3.0 and Leveldb 1.20.2")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" cmake\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" gcc\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" leveldb\n")])])]),t("h4",{attrs:{id:"to-upgrade-to-latest-cmake-3-10-2-gcc-7-3-0-and-leveldb-1-20-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-upgrade-to-latest-cmake-3-10-2-gcc-7-3-0-and-leveldb-1-20-2","aria-hidden":"true"}},[e._v("#")]),e._v(" To upgrade to latest cmake 3.10.2, gcc 7.3.0 and Leveldb 1.20.2")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("brew upgrade cmake\nbrew upgrade gcc\nbrew ugprade leveldb\n")])])]),t("h4",{attrs:{id:"to-check-which-version-of-cmake-gcc-and-leveldb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-check-which-version-of-cmake-gcc-and-leveldb","aria-hidden":"true"}},[e._v("#")]),e._v(" To check which version of cmake, gcc and leveldb")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("brew info cmake\nbrew info gcc\nbrew info leveldb\n")])])]),t("h3",{attrs:{id:"copy-the-source-repo-and-compile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy-the-source-repo-and-compile","aria-hidden":"true"}},[e._v("#")]),e._v(" Copy the source repo and compile")]),e._v(" "),t("h4",{attrs:{id:"clone-supernet-repo-and-compile-marketmaker-for-eth-swaps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-supernet-repo-and-compile-marketmaker-for-eth-swaps","aria-hidden":"true"}},[e._v("#")]),e._v(" Clone "),t("code",[e._v("SuperNET")]),e._v(" repo and compile "),t("code",[e._v("marketmaker")]),e._v(" for ETH swaps")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" ~\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/jl777/SuperNET\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" ~/SuperNET\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout dev\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule update --init --recursive\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" build\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" build\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://cmake.org/files/v3.12/cmake-3.12.3-Linux-x86_64.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -xvf cmake-3.12.3-Linux-x86_64.tar.gz\n./cmake-3.12.3-Linux-x86_64/bin/cmake "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\ncmake --build "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v(" --target marketmaker-mainnet\ncmake --build "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v(" --target marketmaker-testnet\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" ~/SuperNET/build/iguana/exchanges/\nstrip marketmaker-mainnet\nstrip marketmaker-testnet\n")])])]),t("h4",{attrs:{id:"copy-marketmaker-binary-to-iguana-dir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy-marketmaker-binary-to-iguana-dir","aria-hidden":"true"}},[e._v("#")]),e._v(" Copy "),t("code",[e._v("marketmaker")]),e._v(" binary to "),t("code",[e._v("iguana")]),e._v(" dir")]),e._v(" "),t("p",[e._v("The compiled "),t("code",[e._v("marketmaker")]),e._v(" binary file can be found in "),t("code",[e._v("~/SuperNET/build/iguana/exchanges")]),e._v(". Copy "),t("code",[e._v("marketmaker")]),e._v(" into "),t("code",[e._v("~/SuperNET/iguana/")]),e._v(" dir.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" ~/SuperNET/build/iguana/exchanges/marketmaker-mainnet ~/SuperNET/iguana/marketmaker\n")])])]),t("h3",{attrs:{id:"install-barterdex-preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-barterdex-preparation","aria-hidden":"true"}},[e._v("#")]),e._v(" Install barterDEX & preparation")]),e._v(" "),t("h4",{attrs:{id:"install-copy-passphrase-file-from-exchanges-dir-to-dexscripts-dir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-copy-passphrase-file-from-exchanges-dir-to-dexscripts-dir","aria-hidden":"true"}},[e._v("#")]),e._v(" Install, copy "),t("code",[e._v("passphrase")]),e._v(" file from "),t("code",[e._v("exchanges")]),e._v(" dir to "),t("code",[e._v("dexscripts")]),e._v(" dir")]),e._v(" "),t("p",[e._v("The following command will install "),t("code",[e._v("barterDEX")]),e._v(" and copy all the required API scripts in "),t("code",[e._v("~/SuperNET/iguana/dexscripts")]),e._v(" dir. You need to issue all the required API scripts (e.g.: "),t("code",[e._v("client")]),e._v(", "),t("code",[e._v("run")]),e._v(", "),t("code",[e._v("orderbook")]),e._v(", "),t("code",[e._v("buy")]),e._v(", "),t("code",[e._v("sell")]),e._v(", "),t("code",[e._v("balance")]),e._v(", "),t("code",[e._v("stop")]),e._v(") from "),t("code",[e._v("~/SuperNET/iguana/dexscripts")]),e._v(" dir while running as normal after installation.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" ~/SuperNET/iguana/exchanges\n./install\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" passphrase "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/dexscripts/passphrase\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" ~/SuperNET/iguana/dexscripts\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" passphrase\n")])])]),t("p",[e._v("Enter a strong 24 words seed passphrase or WIF key or SHA256 of "),t("code",[e._v("userpass")]),e._v(" or ETH private key in between "),t("code",[e._v('""')]),e._v(", save the file and close nano editor using "),t("code",[e._v("CTRL+X")]),e._v(" then "),t("code",[e._v("Y")]),e._v(" then "),t("code",[e._v("ENTER")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"edit-the-client-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edit-the-client-script","aria-hidden":"true"}},[e._v("#")]),e._v(" Edit the "),t("code",[e._v("client")]),e._v(" script")]),e._v(" "),t("p",[e._v("You need to edit the "),t("code",[e._v("client")]),e._v(" or "),t("code",[e._v("run")]),e._v(" script to disable "),t("code",[e._v("git pull")]),e._v(" & "),t("code",[e._v("./m_mm")]),e._v(" commands. Otherwise, the commands will compile the "),t("code",[e._v("marketmaker")]),e._v(" for non ETH/ERC20 token swap. After the changes, the file should look like similar to the following:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/bash")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("source")]),e._v(" passphrase\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("source")]),e._v(" coins\n./stop\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#git pull;")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#./m_mm;")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("pkill")]),e._v(" -15 marketmaker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n./marketmaker "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{\\"gui\\":\\"nogui\\",\\"client\\":1, \\"userhome\\":\\"/${HOME#"')]),e._v("/"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"}\\", \\"passphrase\\":\\"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$passphrase")]),e._v('\\", \\"coins\\":'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$coins")]),e._v('}"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])]),t("h4",{attrs:{id:"run-marketmaker-using-client-script-for-the-first-time-to-get-the-userpass-value"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-marketmaker-using-client-script-for-the-first-time-to-get-the-userpass-value","aria-hidden":"true"}},[e._v("#")]),e._v(" Run marketmaker using client script for the first time to get the userpass value")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./client "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n./setpassphrase\n")])])]),t("p",[e._v("This should display the "),t("code",[e._v("userpass")]),e._v(" value and your smartaddresses in console. Make a note of the "),t("code",[e._v("userpass")]),e._v(". Stop "),t("code",[e._v("maketmaker")]),e._v(" using the following command before proceeding to the next step.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("pkill")]),e._v(" -15 marketmaker\n")])])]),t("p",[t("strong",[e._v("The above command should always be used to stop the")]),e._v(" "),t("code",[e._v("marketmaker")]),e._v(" "),t("strong",[e._v("binary.")])]),e._v(" "),t("h4",{attrs:{id:"copy-the-userpass-file-from-exchanges-dir-to-dexscripts-dir-and-enter-userpass-value"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy-the-userpass-file-from-exchanges-dir-to-dexscripts-dir-and-enter-userpass-value","aria-hidden":"true"}},[e._v("#")]),e._v(" Copy the "),t("code",[e._v("userpass")]),e._v(" file from "),t("code",[e._v("exchanges")]),e._v(" dir to "),t("code",[e._v("dexscripts")]),e._v(" dir and enter userpass value")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" ~/SuperNET/iguana/exhanges\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" userpass "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/dexscripts/userpass\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" ~/SuperNET/iguana/dexscripts\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" userpass\n")])])]),t("p",[e._v('Enter the passphrase we got earlier in between "", save the file and close nano editor using '),t("code",[e._v("CTRL+X")]),e._v(" then "),t("code",[e._v("Y")]),e._v(" then "),t("code",[e._v("ENTER")]),e._v(". All these scripts found in "),t("code",[e._v("~/SuperNET/iguana/dexscripts")]),e._v(" are expecting a userpass file, which contains the definition of the "),t("code",[e._v("$userpass")]),e._v(" variable (found inside scripts) to authenticate API access. This is to prevent malicious webpages from issuing port 7783 calls to steal your money.")]),e._v(" "),t("h4",{attrs:{id:"edit-coins-file-to-add-dec8-jst-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edit-coins-file-to-add-dec8-jst-token","aria-hidden":"true"}},[e._v("#")]),e._v(" Edit "),t("code",[e._v("coins")]),e._v(" file to add "),t("code",[e._v("DEC8")]),e._v(" & "),t("code",[e._v("JST")]),e._v(" token")]),e._v(" "),t("p",[e._v("Edit the "),t("code",[e._v("coins")]),e._v(" file in "),t("code",[e._v("dexscripts")]),e._v(" dir and add the following lines for adding "),t("code",[e._v("DEC8")]),e._v(" & "),t("code",[e._v("JST")]),e._v(" ERC20 test tokens. Without these, you will not be able to add these coins and use them.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v('\\"coin\\":\\"ETH\\",\\"name\\":\\"ethereum\\",\\"etomic\\":\\"0x0000000000000000000000000000000000000000\\",\\"rpcport\\":80'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(",      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v('\\"coin\\":\\"JST\\",\\"name\\":\\"JST\\",\\"etomic\\":\\"0x996a8ae0304680f6a69b8a9d7c6e37d65ab5ab56\\",\\"rpcport\\":80'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(",   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v('\\"coin\\":\\"DEC8\\",\\"name\\":\\"DEC8\\",\\"etomic\\":\\"0x3ab100442484dc2414aa75b2952a0a6f03f8abfd\\",\\"rpcport\\":80'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(",         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v('\\"coin\\":\\"EOS\\",\\"name\\":\\"EOS\\",\\"etomic\\":\\"0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0\\",\\"rpcport\\":80'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(",\n")])])]),t("h3",{attrs:{id:"run-etomic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-etomic","aria-hidden":"true"}},[e._v("#")]),e._v(" Run ETOMIC")]),e._v(" "),t("p",[e._v("You need to have ETOMIC running in native mode or electrum mode and KMD or other coins either running native or electrum (native is faster). If running native mode, make sure you have blockchain synced and seed passphrase / WIF key / private key imported into the chain.")]),e._v(" "),t("p",[e._v("For ETOMIC you need to have utxos. You can get free BEER from "),t("a",{attrs:{href:"http://atomicexplorer.com/#/faucet",target:"_blank",rel:"noopener noreferrer"}},[e._v("this faucet"),t("OutboundLink")],1),e._v(" and swap it for ETOMIC in normal BarterDEX. You also need to have ETH testnet coins as long as we are testing testnet. Use main-net ETH when testing main-net. If you are unsure which net to use, ask in "),t("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" ~/SuperNET/iguana/dexscripts\n./client "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n./setpassphrase\n")])])]),t("p",[e._v("Then, we need to enable ETH and other coins/tokens to start trading. Check the following example script:")]),e._v(" "),t("p",[e._v("Example "),t("code",[e._v("enable")]),e._v(" script:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/bash")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("source")]),e._v(" userpass\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --url "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://127.0.0.1:7783"')]),e._v(" --data "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{\\"userpass\\":\\"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$userpass")]),e._v('\\",\\"method\\":\\"enable\\",\\"coin\\":\\"BEER\\"}"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --url "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://127.0.0.1:7783"')]),e._v(" --data "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{\\"userpass\\":\\"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$userpass")]),e._v('\\",\\"method\\":\\"enable\\",\\"coin\\":\\"ETOMIC\\"}"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --url "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://127.0.0.1:7783"')]),e._v(" --data "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{\\"userpass\\":\\"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$userpass")]),e._v('\\",\\"method\\":\\"enable\\",\\"coin\\":\\"DEC8\\"}"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --url "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://127.0.0.1:7783"')]),e._v(" --data "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{\\"userpass\\":\\"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$userpass")]),e._v('\\",\\"method\\":\\"enable\\",\\"coin\\":\\"JST\\"}"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --url "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://127.0.0.1:7783"')]),e._v(" --data "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{\\"userpass\\":\\"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$userpass")]),e._v('\\",\\"method\\":\\"enable\\",\\"coin\\":\\"ETH\\"}"')]),e._v("\n")])])]),t("p",[e._v("And, rest of things are same as normal BarterDEX. More helpful info is available in the following links:")]),e._v(" "),t("ul",[t("li",[t("router-link",{attrs:{to:"/mmV1/api/general.html"}},[e._v("MarketmakerV1 API")])],1),e._v(" "),t("li",[t("router-link",{attrs:{to:"/mmV1/usage/enable-native-wallet-coins.html"}},[e._v("enable-native-wallet-coins")])],1),e._v(" "),t("li",[t("router-link",{attrs:{to:"/mmV1/usage/enable-electrum-wallet-coins.html"}},[e._v("enable-electrum-wallet-coins")])],1),e._v(" "),t("li",[t("router-link",{attrs:{to:"/mmV1/coin-integration//electrum-servers-list.html"}},[e._v("Electrum Servers List.")])],1),e._v(" "),t("li",[t("router-link",{attrs:{to:"/mmV1/usage/trade.html"}},[e._v("Trade")])],1)])])},[],!1,null,null,null);a.default=n.exports}}]);