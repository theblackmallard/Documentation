(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{252:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"an-advanced-approach-to-komodo-s-antara-framework"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-advanced-approach-to-komodo-s-antara-framework","aria-hidden":"true"}},[e._v("#")]),e._v(" An Advanced Approach to Komodo's Antara Framework")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("The following content is provided for the experienced C/C++ developer who desires to create new Antara Modules for Komodo Smart Chains.")]),e._v(" "),a("p",[e._v("The content herein provides introductory instruction that can allow the developer to more easily read existing Antara-related code and follow advanced tutorials that examine specific Antara Modules.")]),e._v(" "),a("h2",{attrs:{id:"link-to-learning-path-outline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link-to-learning-path-outline","aria-hidden":"true"}},[e._v("#")]),e._v(" Link to Learning Path Outline")]),e._v(" "),a("p",[e._v("The following tutorial series is intended for advanced Komodo developers who intend to manipulate the default software setup. Please review the placement of this tutorial in "),a("router-link",{attrs:{to:"/basic-docs/start-here/learning-launchpad/learning-path-outline.html#step-15-begin-the-advanced-development-tutorial"}},[e._v("the Learning Path Outline section.")])],1),e._v(" "),a("h2",{attrs:{id:"antara-encompasses-several-technologies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antara-encompasses-several-technologies","aria-hidden":"true"}},[e._v("#")]),e._v(" Antara Encompasses Several Technologies")]),e._v(" "),a("p",[e._v("The Antara Framework greatly enhances blockchain functionality. Antara allows a developer to use their Smart Chain's consensus mechanism to enforce arbitrary code. Antara even allows clusters of Smart Chains to work together in this effort.")]),e._v(" "),a("p",[e._v("The level of freedom this grants to the blockchain developer is sometimes difficult to comprehend until one has either seen the technology in action or engaged with the technology directly.")]),e._v(" "),a("p",[e._v('The Antara Framework takes into account several different advanced technologies. To limit the scope of our introduction, for now we focus only on one crucial aspect: "CryptoConditions," or "CC" for brevity.')]),e._v(" "),a("h2",{attrs:{id:"a-less-conceptual-discussion-of-cryptoconditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-less-conceptual-discussion-of-cryptoconditions","aria-hidden":"true"}},[e._v("#")]),e._v(" A Less Conceptual Discussion of CryptoConditions")]),e._v(" "),a("h4",{attrs:{id:"cryptoconditions-in-brief"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cryptoconditions-in-brief","aria-hidden":"true"}},[e._v("#")]),e._v(" CryptoConditions in Brief")]),e._v(" "),a("p",[e._v("CryptoConditions is a technology that allows for logical conditions and fulfillments to be evaluated as a part of consensus.")]),e._v(" "),a("h5",{attrs:{id:"cryptoconditions-is-based-on-an-industry-wide-proposed-standard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cryptoconditions-is-based-on-an-industry-wide-proposed-standard","aria-hidden":"true"}},[e._v("#")]),e._v(" CryptoConditions is Based on an Industry-Wide Proposed Standard")]),e._v(" "),a("p",[e._v("CryptoConditions technology is not a new concept. The "),a("a",{attrs:{href:"https://interledger.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interledger"),a("OutboundLink")],1),e._v(" team originally proposed this technology in 2016.")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://tools.ietf.org/html/draft-thomas-crypto-conditions-01",target:"_blank",rel:"noopener noreferrer"}},[e._v("original proposal"),a("OutboundLink")],1),e._v(" was that it would be an open-source industry-wide standard format. The Interledger team does not seem to have continued exploring the technology beyond the original proposal.")]),e._v(" "),a("p",[e._v("Komodo, on the other hand, found the CryptoConditions concept to be intriguing. In 2018, Komodo adopted this open-source technology into the suite of offerings in our Antara Framework.")]),e._v(" "),a("p",[e._v("Our implementation uses many of the key ideas put forth by the Interledger team, and at the same time we depart in several significant ways. Those who are curious for specific details on this topic can explore the open-source code in the respective repositories.")]),e._v(" "),a("h5",{attrs:{id:"a-brief-description-of-komodo-enhancements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-brief-description-of-komodo-enhancements","aria-hidden":"true"}},[e._v("#")]),e._v(" A Brief Description of Komodo Enhancements")]),e._v(" "),a("p",[e._v("At the simplest level, CryptoConditions operate with electronic signatures and hashes. The Komodo team enhanced CryptoCondition technology beyond the original specifications. Our implementation allows for a Smart Chain's consensus mechanism to evaluate the results of arbitrary code and to update state in the blockchain's data in a decentralized and secure fashion.")]),e._v(" "),a("p",[e._v("The important takeaway is that the Antara Framework encompasses several underlying technologies, one of which is CryptoConditions (CC). This technology allows a developer to add several enhancements to their Smart Chain. These enhancements include complex logical conditions and fulfillments, and arbitrary code. The enhancements rely on the consensus mechanism to ensure state integrity in a decentralized environment.")]),e._v(" "),a("h4",{attrs:{id:"cryptoconditions-depends-upon-transactions-and-booleans"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cryptoconditions-depends-upon-transactions-and-booleans","aria-hidden":"true"}},[e._v("#")]),e._v(" CryptoConditions Depends Upon Transactions and Booleans")]),e._v(" "),a("p",[e._v("At the most fundamental level, blockchain data is advanced only through transactions. A blockchain itself is nothing but a list of transactions, bound into blocks. By design, each transaction must be confirmed by the consensus mechanism.")]),e._v(" "),a("p",[e._v("Therefore, all decentralized data that a developer wishes to create or use with their arbitrary code must first be added to a transaction. This transaction is then passed through the consensus mechanism. Transactions that are successfully confirmed are finally added to the blockchain, and therefore the data is also added.")]),e._v(" "),a("p",[e._v("To take advantage of this functionality, a developer adds customized source code to the Antara Framework to form a new module. Whenever a relevant transaction occurs on the blockchain, the consensus mechanism calls the developer's module, validates the logical conditions and fulfillments as put forth by the arbitrary code, and either confirms or denies the transaction.")]),e._v(" "),a("p",[e._v("To simplify this process, Antara requires that the developer build their module such that each CryptoConditions (CC) transaction returns a boolean value as a part of the final results. If the returned boolean value is "),a("code",[e._v("true")]),e._v(", the transaction is approved.")]),e._v(" "),a("p",[e._v("With this framework in place, the developer can also add any other data to be saved as a part of the transaction.  This data is included in a special part of the transaction called an "),a("a",{attrs:{href:"https://en.bitcoin.it/wiki/OP_RETURN",target:"_blank",rel:"noopener noreferrer"}},[a("b",[e._v("OP_RETURN")]),a("OutboundLink")],1),e._v(", or "),a("b",[e._v("opreturn")]),e._v(" for brevity. We will discuss opreturns in greater detail further on.")]),e._v(" "),a("p",[e._v("Through Antara, the developer receives a powerful tool for creating and executing decentralized arbitrary code. A developer can also add data to any transaction, and their Smart Chain can utilize this data in future executions of arbitrary code. The primary requirement is that the arbitrary code return a meaningful boolean value as a part of the final result.")]),e._v(" "),a("h4",{attrs:{id:"building-an-antara-module-is-harder-than-creating-a-balance-based-smart-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-an-antara-module-is-harder-than-creating-a-balance-based-smart-contract","aria-hidden":"true"}},[e._v("#")]),e._v(" Building an Antara Module is Harder Than Creating a Balance-Based Smart Contract")]),e._v(" "),a("p",[e._v('Antara Modules are fundamentally different than the "smart contracts" that are familiar on other blockchain platforms. The key difference is that Antara Modules directly rely on '),a("router-link",{attrs:{to:"/basic-docs/start-here/core-technology-discussions/miscellaneous.html#the-utxo-an-elusive-yet-fundamental-concept"}},[e._v('"unspent transactions,"')]),e._v(' which are called "utxos" for brevity. Balance-based smart contracts, on the other hand, rely on the total balance of funds held within an address.')],1),e._v(" "),a("p",[e._v("Utxo-based modules are harder to create than balance-based smart contracts. However, utxo-based modules result in dramatically more powerful and secure functionality, as they leverage the existing Bitcoin-utxo system.")]),e._v(" "),a("p",[e._v("For example, with balance-based smart contracts, a bug in the smart-contract language can result in terrible events, such as the malicious printing of new coins in a smart contract, or the draining of all funds within a shared contract. Events such as these can happen even when the smart-contract author is a competent developer.")]),e._v(" "),a("p",[e._v("In a utxo-based module, the risk of such events is exponentially reduced. One reason utxo-based modules are more secure is that every update of the blockchain's state must be executed as a transaction, and therefore the data must pass the normal rules of consensus.")]),e._v(" "),a("p",[e._v("Komodo is based on the Bitcoin protocol, and therefore Komodo's Smart Chain consensus mechanism is built on the most rigorously tested and heavily supported software in the industry. Balance-based smart contracts cannot compare to this level of security.")]),e._v(" "),a("p",[e._v("As the developer engages with Antara Module development, they can learn how utxo-based modules allow for increased speed in achieving consensus, greater simplicity in software architecture, more flexible functionality between Smart Chains, and many more superior features.")]),e._v(" "),a("h4",{attrs:{id:"a-brief-look-at-an-antara-module-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-brief-look-at-an-antara-module-template","aria-hidden":"true"}},[e._v("#")]),e._v(" A Brief Look at an Antara Module Template")]),e._v(" "),a("p",[e._v("The following file, "),a("code",[e._v("customcc.cpp")]),e._v(", is a blank template a developer can use when beginning the creation of a new Antara Module. Take a brief look to familiarize yourself with the essential layout.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/jl777/komodo/blob/dev/src/cc/customcc.cpp",target:"_blank",rel:"noopener noreferrer"}},[a("b",[e._v("Link to customcc.cpp file")]),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The key takeaway is that the entrypoints to Antara's CryptoConditions technology are broken down into a few functions and tables. Once the developer grasps the nature of working with these entry points, building Antara Modules becomes a simple exercise in the common aspects of software development.")]),e._v(" "),a("p",[e._v("Komodo already offers many SDK functions, tutorials, and best practices to simplify the learning curve and development process, and we continue to develop more of these sources of assistance.")]),e._v(" "),a("p",[e._v("Before the developer can begin creating new Antara Modules, there are several key concepts to understand in the Bitcoin Protocol.")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("router-link",{attrs:{to:"/basic-docs/antara/antara-tutorials/advanced-series-1.html"}},[a("b",[e._v("Link to Next Tutorial in the Advanced Series")])])],1)])},[],!1,null,null,null);t.default=n.exports}}]);