/* Telecommunications: English version of the course. Same module order as telecoms.js. */
(function(){
const {T, E, X} = window.__GLEN;

const modules = [
{ day:"Understand", title:"The business of a telecom operator", html:`
<p class="lead">A telecom operator sells access: to voice, to SMS, to the internet. It invests heavily in a network, then makes it pay off through millions of customers who each consume a little every day.</p>
<h2>1. The activities</h2>
${T(["Activity","Content"],[
["Consumer mobile","Voice, SMS, data (mobile internet), bundles and top-ups"],
["Fixed and internet","Fixed lines, optical fibre (FTTH), ADSL, 4G/5G boxes"],
["Enterprise","Leased lines, private networks, data centres, cloud, managed services"],
["Wholesale","Selling capacity to other operators: interconnection, submarine cables, international transit"],
["Financial services","Mobile money, often in an electronic money institution subsidiary"],
["Content and services","Television, music, value-added services, partners"]])}
<h2>2. The network in a few words</h2>
<ul><li><b>Access network</b>: antennas (radio sites, BTS for 2G, NodeB for 3G, eNodeB for 4G, gNodeB for 5G), fibre to customers.</li><li><b>Transport network</b>: microwave links and fibres that connect the sites.</li><li><b>Core network</b>: sets up calls and data sessions, manages mobility (MSC, HLR/HSS, packet core).</li><li><b>Platforms</b>: SMS, voicemail, top-up, billing.</li><li><b>Information systems</b>: billing (BSS), network supervision (OSS), customer relationship (CRM).</li></ul>
<h2>3. Prepaid and postpaid</h2>
${T(["Mode","How it works","Features"],[
["Prepaid","The customer tops up first, then consumes; the balance is decremented in real time","More than 90% of mobile customers in many West African countries; deferred revenue to manage"],
["Postpaid","The customer consumes, then receives an invoice","Risk of non-payment; businesses and high-end customers"]])}
<h2>4. The sector's indicators</h2>
${T(["Indicator","Meaning"],[
["Customer base (active subscribers)","Number of customers with activity over a period (often 90 days)"],
["ARPU","Average revenue per user per month"],
["Churn","Rate of customers lost over the period"],
["MOU","Minutes of use per customer"],
["EBITDA and EBITDA margin","Earnings before depreciation and amortization, closely watched because investments are heavy"],
["Capex / revenue","Intensity of network investment"]])}
<h2>5. Regulation</h2>
<p>In Senegal, the <b>telecommunications and postal regulatory authority (ARTP)</b> grants licences and frequencies, monitors quality of service, oversees interconnection and the tariffs of dominant operators, and collects certain fees. Operators also pay sector-specific taxes, and the <b>subscriber identification</b> obligations (registering SIM cards with an identity document) are strict.</p>
<div class="box key"><h4>Why the sector is interesting for an IT auditor</h4><p>Revenue is produced by a chain of systems: the network generates usage records, the rating platform values them, billing aggregates them, accounting records them. At each link, data can be lost or altered.</p></div>
`},

{ day:"Understand", title:"From calls to revenue: the billing chain", html:`
<p class="lead">Every call, SMS or internet session leaves a trace. Following that trace end to end is the heart of auditing an operator.</p>
<h2>1. The CDR</h2>
<p>The <b>CDR</b> (Call Detail Record) is a record created by a network element for each event: calling number, called number, date, time, duration or volume, cell, type of service. An operator generates hundreds of millions of them every day.</p>
<h2>2. The chain</h2>
<ol><li><b>Network</b>: the equipment (switches, data core, SMS platform) produces the CDRs.</li><li><b>Mediation</b>: collects, cleans, deduplicates, formats and routes the CDRs to the systems.</li><li><b>Rating</b>: values each event according to the customer's tariff plan. In prepaid, the real-time charging platform (OCS / IN) decrements the balance during the call.</li><li><b>Billing</b> (postpaid): aggregates the rated events and produces invoices.</li><li><b>Accounting</b>: receives revenue aggregated by product, often through a daily or monthly interface.</li></ol>
<h2>3. Where revenue is lost</h2>
${T(["Link","Possible leakage"],[
["Network → mediation","CDRs not generated or lost (outage, file not transferred)"],
["Mediation","Rejected CDRs never reprocessed, duplicates removed by mistake"],
["Rating","Misconfigured tariff plan, unrated service, unauthorized free numbers"],
["Customers","Test or service accounts used for real calls, customers not billed"],
["Billing → accounting","Incomplete interface, revenue assigned to the wrong period"]])}
<h2>4. Revenue assurance</h2>
<p>Most operators have a <b>revenue assurance</b> team that reconciles volumes at each step: number and duration of CDRs at the network, in mediation, in rating, in billing. It measures leakage and gets the causes fixed. For the auditor, its reports are a valuable source, provided their reliability is checked.</p>
${X("the network produced 1,000 million minutes in March; rating valued 985 million, of which 20 million were free (emergency numbers and internal services). Calculate the gap to explain.","<p>Minutes expected in rating: 1,000. Valued: 985 (including 20 authorized free minutes, which did go through rating). Network → rating gap: <b>15 million minutes</b> lost or rejected between the two links. Analyse mediation rejects and untransferred files, then estimate the lost revenue using the average price per minute.</p>")}
`},

{ day:"Understand", title:"Accounting for telecom revenue", html:`
<p class="lead">The basic rule: revenue is recognized when the service is delivered, not when the customer pays. In telecoms, this principle creates many timing differences.</p>
<h2>1. Prepaid top-ups</h2>
<p>When a customer buys a top-up of 1,000, the operator receives the money but has not yet provided anything. It records <b>deferred revenue</b> (or a contract liability). Revenue is recognized as consumption occurs. Credit unused at expiry is recognized as revenue according to the applicable rules (and the operator's accounting policy).</p>
${E("Sale of top-ups for 10,000,000 through distributors",[["Bank / distributors","Cash received","10,000,000",""],["Deferred revenue (unused credit)","Liability","","10,000,000"]])}
${E("Consumption of 7,000,000 during the month",[["Deferred revenue","Decrease in liability","7,000,000",""],["Voice, SMS, data revenue","Income","","7,000,000"]])}
<h2>2. Distributors and discounts</h2>
<p>Top-ups are sold to distributors at a discount (for example 5%). Depending on the analysis of the contract, this discount is either a reduction of revenue or a distribution expense. The auditor checks the treatment chosen and that it is applied consistently.</p>
<h2>3. Bundles and combined offers</h2>
<p>A monthly bundle invoiced on the 15th of the month covers half of the following month: part of it must be deferred (cut-off). An offer that combines a subsidized phone and a 24-month subscription must allocate the price between the phone and the service (under IFRS, the IFRS 15 standard on revenue from contracts with customers).</p>
<h2>4. Interconnection and roaming</h2>
<ul><li>When a customer of operator A calls a customer of operator B, A pays B a <b>call termination</b> charge (an expense for A, revenue for B).</li><li><b>Roaming</b>: when a foreign customer uses the local network, the local operator invoices the customer's home operator.</li><li>The amounts depend on the volumes declared by each party: <b>reconciliations</b> and dispute settlement procedures are needed. At closing, many estimates (accrued revenue, accrued expenses) are required.</li></ul>
<h2>5. International traffic</h2>
<p>Incoming international calls are a major source of revenue, sometimes subject to specific taxes. They are the target of <b>bypass fraud</b> (SIM box, module 5).</p>
${X("at 31/12, the balance of unused prepaid credit is 3.2 billion in the platform, but 2.7 billion in the accounts. What do you do?","<p>Reconcile the two amounts: check the platform → accounting interface, credit expiries (recognized as revenue in one system and not the other?), promotional or bonus top-ups (which are not cash received and need not be recorded as a liability), and the exact extraction date. The 0.5 billion gap may mean revenue was recognized too early.</p>")}
`},

{ day:"Understand", title:"Investments, network and assets", html:`
<p class="lead">An operator spends a large share of its revenue on investments every year. How they are accounted for has a direct impact on profit.</p>
<h2>1. The main assets</h2>
${T(["Asset","Features"],[
["Licences and frequencies","Intangible assets, often very costly, amortized over the licence term"],
["Radio sites, towers","Tangible; often sold to tower companies and leased back"],
["Network equipment","Short useful lives (technological change)"],
["Fibre and submarine cables","Long lives; indefeasible rights of use (IRU) bought or sold"],
["Information systems","Software (billing, CRM), capitalized internal developments"]])}
<h2>2. The auditor's questions</h2>
<ul><li><b>Capitalization</b>: which expenditure is capitalized (installing a new site) and which is an expense (maintenance)? Capitalizing maintenance inflates profit.</li><li><b>Assets under construction</b>: do projects stay "in progress" for years without being put into service (delayed depreciation)?</li><li><b>Existence</b>: equipment is spread over hundreds of sites; physical count and reconciliation with the register.</li><li><b>Impairment</b>: 2G/3G equipment replaced by 4G/5G.</li><li><b>Lease contracts</b> for sites and towers: lease accounting (under IFRS, IFRS 16).</li></ul>
<h2>3. The decommissioning obligation</h2>
<p>When an operator installs an antenna on leased land, it may be required to restore the land at the end of the contract. This future cost is provided for and added to the cost of the asset.</p>
`},

{ day:"Risks", title:"Telecom fraud and security", html:`
<p class="lead">Fraud costs operators a significant share of their revenue every year. It combines network techniques, process weaknesses and internal collusion.</p>
<h2>1. The main frauds</h2>
${T(["Fraud","Mechanism","Detection"],[
["SIM box (bypass)","International calls are diverted over the internet to boxes filled with local SIM cards, then terminated as local calls. The operator loses the international rate and the State loses taxes","CDR analysis: SIM cards that only make outgoing calls, receive none, from the same cell; test calls (test call generation)"],
["Subscription fraud","Postpaid lines opened with false identities, massive usage, then disappearance","KYC checks, credit limits, usage alerts"],
["Premium rate number fraud","Calls generated to international or premium numbers whose revenue is shared with the fraudster","Alerts on high-risk destinations"],
["SIM swap","Fraudulently obtained duplicate SIM used to steal mobile money or bank accounts","Stronger identity checks, waiting period before sensitive operations"],
["Internal fraud","Free top-ups generated by an employee, activation of unbilled services, resale of pre-activated cards","Review of access to top-up and provisioning platforms, logging"],
["Roaming fraud","Massive usage abroad before the CDRs are received","Fast data exchange between operators (NRTRDE)"]])}
<h2>2. Network security</h2>
<p>The signalling protocols between operators (SS7, Diameter) were not designed for a hostile world: if they are not filtered, they can allow SMS interception or subscriber location tracking. Operators deploy signalling firewalls. Validation codes sent by SMS are therefore a weak authentication factor.</p>
<h2>3. Sensitive platforms</h2>
<ul><li><b>Top-up and charging platform</b>: who can credit an account or change a tariff plan?</li><li><b>Provisioning</b>: who can activate a line or a service?</li><li><b>HLR/HSS</b>: the network's subscriber database.</li><li><b>Lawful interception systems</b>: strictly limited access.</li></ul>
${X("an analysis shows 300 SIM cards activated on the same day by the same point of sale, which only make outgoing calls, each to hundreds of different numbers, with no incoming calls or SMS. Interpretation?","<p>Typical <b>SIM box</b> profile. Actions: block the cards, analyse the location (same cell?), trace back to the point of sale that activated them (failed KYC check or collusion), estimate the international revenue lost and report to the regulator according to the procedures in force.</p>")}
`},

{ day:"IT audit", title:"Audit programme for a telecom operator", html:`
<p class="lead">This module brings together the work to perform on the IT side of a statutory audit of an operator.</p>
<h2>1. Mapping</h2>
<p>Identify the systems that contribute to revenue and expenses: network (CDR sources), mediation, real-time charging, billing, CRM, top-up distribution, interconnection and roaming, mobile money, accounting ERP. Identify the interfaces and reconciliation controls.</p>
<h2>2. ITGC</h2>
${T(["Area","Specific points"],[
["Access","Administrators of charging and top-up platforms; vendors' generic accounts; access by managed service providers"],
["Changes","Creation and modification of offers and tariff plans (frequent, driven by marketing): approval, testing, post-implementation check"],
["Operations","Collection and processing of CDR files, handling of rejects, backups"],
["Service providers","Part of the network and IS is often outsourced (managed services): assurance reports (ISAE 3402 / SOC 1), audit rights"]])}
<h2>3. Revenue testing</h2>
${T(["Test","Objective"],[
["End-to-end reconciliation of volumes (network → mediation → rating → billing → accounting)","Completeness"],
["Test calls: make real calls and SMS and check how they are rated","Accuracy of valuation"],
["Comparison of offer configuration with the approved price lists","Accuracy"],
["Analysis of test, service and staff accounts","Unbilled misuse"],
["Reconciliation of unused prepaid credit","Cut-off and liability"],
["Reconciliation of interconnection and roaming with partners' statements","Accuracy of revenue and expenses"],
["Review of revenue assurance (indicators, leakage, actions)","Effectiveness of the system"]])}
<h2>4. Other areas</h2>
<ul><li>Fixed assets: capitalization, commissioning, site inventory.</li><li>Receivables from postpaid customers and operators: ageing, disputes.</li><li>Distributor commissions: recalculation.</li><li>Compliance: subscriber identification, regulatory reporting obligations.</li></ul>
<div class="box key"><h4>Your VoIP experience is an asset</h4><p>You have configured Asterisk, 3CX and voice servers: you understand what a call, signalling and a charging record are. That is exactly the knowledge many auditors in this sector lack.</p></div>
`}
];

const c = CERTS.find(x => x.id === "telecoms");
c.en = {
  title:"Telecommunications", org:"Business sector",
  intro:"Understand how a telecom operator works, from the antenna to revenue: billing chain, prepaid, interconnection, investments, fraud and audit programme.",
  exam:`<p>Internal campus knowledge test: 20 random questions, 30 minutes, recommended pass mark 70%.</p>`,
  modules,
  pages:[{ title:"Telecom glossary", html:`
${T(["Term","Definition"],[
["ARPU","Average revenue per user"],
["ARTP","Telecommunications and postal regulatory authority (Senegal)"],
["BSS / OSS","Business systems (billing, CRM) / network operations systems"],
["BTS / eNodeB / gNodeB","2G / 4G / 5G base station"],
["CDR","Charging record produced for each event"],
["Churn","Customer loss rate"],
["EBITDA","Earnings before interest, taxes, depreciation and amortization"],
["FTTH","Fibre to the home"],
["HLR / HSS","Mobile network subscriber database"],
["Interconnection","Exchange of traffic between operators"],
["IRU","Indefeasible right of use over a capacity (fibre, cable)"],
["Mediation","System that collects and prepares CDRs"],
["MOU","Minutes of use"],
["OCS / IN","Real-time prepaid charging platform"],
["Provisioning","Activation of lines and services"],
["Revenue assurance","Function that detects and corrects revenue losses"],
["Roaming","Use of a foreign network by a subscriber"],
["SIM box","Equipment used to bypass international calls"],
["SS7 / Diameter","Signalling protocols between networks"],
["Call termination","Rate paid to the operator that carries the call to its subscriber"],
["Wholesale","Wholesale business between operators"]])}
`}]
};
})();
