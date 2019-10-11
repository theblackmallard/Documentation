(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{417:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"enabling-electrum-wallet-coins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enabling-electrum-wallet-coins","aria-hidden":"true"}},[t._v("#")]),t._v(" Enabling Electrum Wallet Coins")]),t._v(" "),e("p",[t._v("To enable SPV wallets, also known as Electrum Wallets, just edit the "),e("code",[t._v("./electrum")]),t._v(" script to add the command for the prefered coin. A list of all available electrum servers for various coins is available "),e("router-link",{attrs:{to:"/mmV1/coin-integration/electrum-servers-list.html"}},[t._v("here.")])],1),t._v(" "),e("h2",{attrs:{id:"copy-electrum-to-dexscripts-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copy-electrum-to-dexscripts-directory","aria-hidden":"true"}},[t._v("#")]),t._v(" Copy "),e("code",[t._v("./electrum")]),t._v(" to "),e("code",[t._v("../dexscripts")]),t._v(" directory:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" `"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("/KomodoPlatform/iguana/echanges"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("`\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" ./electrum "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/dexscripts\n")])])]),e("h2",{attrs:{id:"open-electrum-to-add-a-coin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open-electrum-to-add-a-coin","aria-hidden":"true"}},[t._v("#")]),t._v(" Open "),e("code",[t._v("./electrum")]),t._v(" to add a coin:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/dexscripts\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" electrum\n")])])]),e("p",[t._v("Will show:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v(" userpass\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{"')]),t._v("userpass"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v("electrum"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("coin"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v("BTC"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("ipaddr"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v("173.212.225.176"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("port"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('":50001}"')]),t._v("\n")])])]),e("ul",[e("li",[t._v("Add any curl command from "),e("router-link",{attrs:{to:"/mmV1/coin-integration/electrum-servers-list.html"}},[t._v("here")]),t._v(" to the file.")],1),t._v(" "),e("li",[t._v("Hit "),e("code",[t._v("CTRL+X")]),t._v(" then "),e("code",[t._v("Y")]),t._v(" then "),e("code",[t._v("ENTER")]),t._v(" to save the file and exit")]),t._v(" "),e("li",[t._v("Execute: "),e("code",[t._v("./electrum")])]),t._v(" "),e("li",[e("strong",[t._v("Now electrum coins specified will be active and available for trading.")])])])])},[],!1,null,null,null);s.default=r.exports}}]);