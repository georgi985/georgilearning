/* Electronic money issuers (WAMU): English version of the course. Same module order as monnaie-electronique.js. */
(function(){
const {T, E, X} = window.__GLEN;

const modules = [
{ day:"Understand", title:"What is electronic money?", html:`
<p class="lead">When you send money with your phone, you are using electronic money. Behind this simple gesture is a tightly regulated model: every electronic franc must be backed by a real franc deposited in a bank.</p>
<h2>1. Definition</h2>
<p>Electronic money is <b>monetary value stored electronically</b> (on a server, accessed by a chip, a phone or a card), <b>issued on receipt of funds</b> of at least the same amount, and <b>accepted as a means of payment</b> by people other than the issuer.</p>
<ul><li>It is <b>not a bank deposit</b>: the issuer cannot lend this money.</li><li>It earns <b>no interest</b> for the holder.</li><li>It is <b>redeemable</b> at any time at face value (you can always withdraw your money).</li></ul>
<h2>2. Who can issue it in WAMU?</h2>
${T(["Issuer","Model"],[
["Electronic money institution (EMI, EME in French)","Company licensed by the BCEAO, dedicated to this activity (often a subsidiary of a telecom operator or a fintech)"],
["Bank","A bank can issue electronic money, often in partnership with a telecom operator that provides the channel"],
["Decentralized financial system (microfinance)","Under conditions, for its own customers"]])}
<p>In Senegal, services such as Orange Money, Wave or Free Money rely on these models. The main regulation is a BCEAO instruction on the conditions and terms for carrying out the activities of electronic money issuers.</p>
<h2>3. The services offered</h2>
${T(["Service","In plain words"],[
["Cash-in (deposit)","The customer hands cash to an agent, who transfers electronic money to them"],
["Cash-out (withdrawal)","The customer transfers electronic money to an agent, who hands them cash"],
["P2P transfer","From one holder to another"],
["Merchant payment","Purchase from a shop, often by QR code"],
["Bill payment","Electricity, water, television, school fees"],
["Bulk payments","Salaries, social benefits, paid by a company or a State into thousands of accounts"],
["International transfers","Receiving money from the diaspora through partners"],
["Links with banks","Transfers between a bank account and an e-wallet"],
["Related services","Microcredit and savings, always offered by a partner bank or institution, never by the EMI alone"]])}
<h2>4. How the issuer makes money</h2>
<ul><li><b>Withdrawal fees</b> and transfer fees (some players have a low-fee model, for example a single percentage on withdrawals).</li><li><b>Commissions</b> from merchants and billers.</li><li>Commissions on international transfers.</li></ul>
<p>Its main expenses: <b>commissions paid to agents</b> and distributors, the technical platform, marketing, compliance costs.</p>
<div class="box key"><h4>What is at stake for the auditor</h4><p>Revenue is made of millions of small transactions calculated automatically by the platform. It is impossible to check everything by hand: the audit relies on the reliability of the system, the configured price list and data analytics on 100% of transactions.</p></div>
`},

{ day:"Understand", title:"The backing principle: the safeguarding account", html:`
<p class="lead">It is the golden rule of the sector and the first thing an auditor checks: electronic money in circulation must be fully backed by funds held in dedicated bank accounts.</p>
<h2>1. The mechanism</h2>
<ol><li>An agent wants electronic money to serve customers. They pay 1,000,000 in cash or by transfer into the issuer's bank account.</li><li>The issuer creates 1,000,000 of electronic money in the agent's wallet.</li><li>The funds paid in are placed in a <b>safeguarding account</b> (also called a backing or trust account), opened at one or more banks, separate from the issuer's own accounts.</li><li>These funds are protected: they cannot be used to pay the issuer's debts and remain intended for the holders, even in bankruptcy.</li></ol>
<div class="box key"><h4>The equation to check every day</h4><p><b>Funds in the safeguarding accounts ≥ total electronic money in circulation</b> (sum of all wallets: customers, agents, merchants, the issuer's internal accounts).</p></div>
<h2>2. Why differences appear</h2>
${T(["Cause","Example"],[
["Timing differences","An agent paid in the money in the evening, the bank credits it the next day"],
["Fees and commissions","The issuer's revenue, collected in electronic money, must be moved out of safeguarding to its own account"],
["Failed transactions","Transfer debited but not credited, to be corrected"],
["Fraud","Electronic money created without a real deposit (unbacked issuance)"],
["Integration errors","Files loaded incorrectly between the bank and the platform"]])}
<h2>3. Accounting at the issuer</h2>
${E("An agent pays 1,000,000 into the safeguarding account; the issuer creates the electronic money",[["Bank, safeguarding account","Funds received (asset, restricted use)","1,000,000",""],["Electronic money in circulation","Liability to holders","","1,000,000"]])}
${E("A customer withdraws 50,000 at an agent with a 500 fee",[["Electronic money in circulation (customer)","Debit of the customer's wallet","50,500",""],["Electronic money in circulation (agent)","Credit of the agent's wallet","","50,000"],["Income: withdrawal fees","Issuer's revenue","","500"]])}
<p>Electronic money in circulation has fallen by 500: this amount now belongs to the issuer. It must transfer 500 from the safeguarding account to its own account, otherwise safeguarding would hold more than necessary.</p>
<h2>4. Audit tests</h2>
<ul><li>Obtain bank confirmations for all safeguarding accounts at closing.</li><li>Extract from the platform the balance of <b>all</b> wallets at the same date and time (snapshot of the database).</li><li>Reconcile the two and explain each difference.</li><li>Check that the reconciliation is performed <b>daily</b>, reviewed by an independent person, and that old differences are dealt with.</li><li>Check that the sum of wallets in the platform equals the liability recorded in the accounts.</li></ul>
${X("at closing: safeguarding accounts 12.4 billion; total wallets 12.9 billion. What do you conclude?","<p>Electronic money in circulation exceeds the backing by 0.5 billion: <b>breach of the backing principle</b>. Possible causes: timing differences (to be justified one by one), fees not yet moved out (that would work the other way), money created without funds (fraud or error). It is a major point to escalate to management and, depending on the regulation, to the supervisor.</p>")}
`},

{ day:"Understand", title:"The agent network and liquidity management", html:`
<p class="lead">Without agents, there is no mobile money: they turn cash into electronic money and back again. They are also a major source of risk.</p>
<h2>1. The distribution chain</h2>
${T(["Player","Role"],[
["Issuer","Creates electronic money, sets the rules and commissions"],
["Distributor / super-agent (master agent)","Recruits and manages agents, supplies them with electronic money and cash"],
["Agent (service point)","Neighbourhood shopkeeper who handles deposits and withdrawals for customers"],
["Customer / holder","Uses the service"]])}
<h2>2. The agent's double liquidity</h2>
<p>An agent must always have <b>cash</b> (for withdrawals) and <b>electronic money</b> (the "float", for deposits). When customers deposit a lot, the float runs out and cash piles up; the agent must "rebalance" with their distributor or a bank. Running out of liquidity loses customers.</p>
<h2>3. Commissions</h2>
<p>The agent earns a commission on each transaction, according to a grid configured in the platform. Commissions are calculated automatically (often daily or monthly) and paid in electronic money.</p>
<h2>4. Agent-related fraud</h2>
${T(["Fraud","Mechanism","Detection"],[
["Splitting","The agent splits a 100,000 deposit into ten deposits of 10,000 to earn ten minimum commissions","Analysis of repeated transactions between the same agent and customer within a short time"],
["Fictitious transactions","Cross deposits and withdrawals between the agent and accomplices with no real movement of money","Abnormal turnover, always the same customers"],
["Unauthorized direct deposit","The agent makes the transfer from their own account instead of a deposit, and charges the customer","Field checks, complaints"],
["Illegal fees","The agent asks the customer for extra fees","Mystery shopper surveys"],
["Misuse of customer accounts","The agent uses the credentials of customers unfamiliar with phones","Monitoring of logins"]])}
<h2>5. Compliance at agent level</h2>
<p>The issuer remains <b>responsible</b> to the regulator for its agents' actions. It must select, train and monitor them and keep the list up to date. Agents often carry out customer identification (KYC): the quality of the documents collected is a frequent audit topic.</p>
${X("an agent earned 3 million in commissions in a month, while the average is 150,000. What analyses?","<p>Extract all their transactions: number, amounts, counterparties, times. Look for splitting (amounts just at the commission threshold, the same customers repeated), deposit / withdrawal round trips between the same accounts, accounts recently created by this agent. Check that the commission grid has not been changed and that the calculation is correct. Compare with the real volume of cash the agent has rebalanced.</p>")}
`},

{ day:"Risks", title:"Regulation, KYC and anti-money laundering", html:`
<p class="lead">Electronic money promotes financial inclusion, but its speed and relative anonymity make it attractive for money laundering and fraud. Regulation seeks a balance between ease of access and control.</p>
<h2>1. The main requirements for an issuer</h2>
<ul><li>BCEAO <b>licence</b> and minimum capital.</li><li><b>Full backing</b> of issued money in safeguarding accounts (module 2).</li><li><b>Prohibition</b> on lending the funds or paying interest to holders.</li><li>Balance and transaction <b>limits</b> according to the customer's level of identification.</li><li>Periodic <b>reporting</b> to the BCEAO (activity, backing, incidents).</li><li><b>Internal control</b>, risk management, system security and business continuity.</li><li><b>Application of the uniform AML/CFT law</b>: customer due diligence, monitoring, suspicious transaction reports to the CENTIF.</li></ul>
<h2>2. KYC levels</h2>
<p>The principle: the better identified the account, the higher the limits.</p>
${T(["Level","Identification","Limits"],[
["Simplified","Phone number, basic information","Low"],
["Standard","Verified identity document","Higher"],
["Enhanced","Additional documents, identified business, beneficial owner","Highest"]])}
<p>The exact amounts are set by regulation and the issuer's policy. The auditor checks that the limits are <b>configured in the platform</b> and that they <b>actually block</b> transactions above them.</p>
<h2>3. Typical money laundering signals</h2>
<ul><li>Many wallets opened with the same identity document or from the same device.</li><li>Accounts that receive many small amounts then immediately withdraw everything ("mule" accounts).</li><li>Repeated transactions just below the limits.</li><li>Unusual cross-border flows.</li></ul>
<h2>4. Fraud suffered by customers</h2>
<ul><li><b>Social engineering</b>: fake calls from a "customer service agent" asking for the PIN.</li><li><b>SIM swap</b>: the fraudster obtains a duplicate SIM card and takes control of the account.</li><li><b>Fake SMS</b> confirming a deposit to deceive a merchant.</li></ul>
<p>Expected controls: stronger identity checks for SIM replacement, temporary blocking of withdrawals after a SIM change, alerts, customer awareness.</p>
${X("the configuration tool shows a limit of 2,000,000 per day for \"simplified\" accounts, while the policy sets 200,000. What is the risk and what do you recommend?","<p><b>Risk</b>: regulatory non-compliance and exposure to money laundering (poorly identified accounts can move large amounts). <b>Recommendation</b>: correct the parameter immediately, look for accounts that exceeded 200,000 per day since the change date, analyse those flows, and review the management of parameter changes (who made the change, with what approval).</p>")}
`},

{ day:"IT audit", title:"The technical platform and its audit", html:`
<p class="lead">An electronic money issuer is first and foremost an IT company. Its platform keeps the accounts of millions of customers in real time.</p>
<h2>1. The components</h2>
${T(["Component","Role"],[
["Wallet platform","Keeps the accounts and executes transactions; calculates fees and commissions"],
["USSD and SMS gateway","Lets the service be used on a basic phone (*xxx# codes)"],
["Mobile app and API","Customer and merchant apps; interfaces with partners"],
["Bank interfaces","Funding, bank ↔ wallet transfers, safeguarding accounts"],
["Biller and international partner interfaces","Bill payment, diaspora transfers"],
["Fraud and AML system","Alert rules, sanctions lists"],
["Data warehouse and accounting","Aggregation of transactions, accounting entries, BCEAO reporting"]])}
<h2>2. Specific IT risks</h2>
${T(["Risk","Why it is serious"],[
["Manual balance adjustment","An internal user who can credit a wallet creates money out of nothing"],
["Change to the price list","Revenue and commissions change instantly for millions of transactions"],
["Direct database access","An administrator can change balances without leaving a trace in the application"],
["Failed or duplicate transactions","Financial losses and backing differences"],
["Uncontrolled interfaces","Bank files loaded twice, or not at all"],
["Unavailability","Customers can no longer pay: reputational and regulatory impact"]])}
<h2>3. Expected controls</h2>
<ul><li><b>Adjustments</b>: formal procedure, dual approval (maker / checker), limits, daily review of all adjustments by an independent team.</li><li><b>Parameters</b> (fees, commissions, limits): changed by a small number of people, after approval, with a reviewed change log.</li><li><b>Database</b>: named, limited, logged and monitored administrator access; no shared application account.</li><li><b>Automatic reconciliations</b>: platform ↔ safeguarding accounts, platform ↔ accounting, platform ↔ partners.</li><li><b>Security</b>: encryption, protection of PINs, penetration testing of apps and APIs.</li><li><b>Continuity</b>: backup site, failover tests.</li></ul>
<h2>4. The auditor's data analytics</h2>
<ul><li>Recalculation of fees on 100% of transactions from the approved price list.</li><li>Recalculation of agent commissions.</li><li>List of all manual adjustments for the year: authors, approvers, amounts, beneficiaries.</li><li>Search for internal wallets (issuer accounts, test accounts) with abnormal balances or movements.</li><li>Reconciliation of recorded revenue with revenue calculated from transactions.</li></ul>
${X("you find that three developers have write access to the production wallet database. What risks and what tests?","<p><b>Risks</b>: unauthorized changes to balances (money creation, embezzlement), erasing traces, breach of the development / production separation. <b>Tests</b>: extract the database logs to identify the update queries run by these accounts; reconcile balances with transactions (a balance not explained by the transaction history signals a direct change); check the emergency access procedure. <b>Recommendation</b>: remove these rights, set up traced and approved emergency access, and monitor queries on the balance tables.</p>")}
`},

{ day:"IT audit", title:"Revenue, accounting and audit programme", html:`
<p class="lead">This module brings together the elements for auditing the financial statements of an electronic money issuer.</p>
<h2>1. The key items in the financial statements</h2>
${T(["Item","Point of attention"],[
["Safeguarding accounts (asset)","Existence (bank confirmations), restricted nature, separate presentation"],
["Electronic money in circulation (liability)","Completeness and accuracy: equal to the sum of wallets"],
["Revenue (fees, commissions)","Reliable automatic calculation, assigned to the right period"],
["Agent commissions (expenses)","Accuracy, splitting fraud"],
["Suspense and transit accounts","Pending transactions, ageing"],
["Provisions","Disputes, fraud suffered, customer refunds"]])}
<h2>2. The typical work programme</h2>
${T(["Area","Work"],[
["Understanding","Mapping of flows (cash-in, cash-out, P2P, payments, international), systems and partners"],
["ITGC","Access (including database access and adjustments), changes (including price parameters), operations (commission calculation jobs, backups)"],
["Backing","Reconciliation of safeguarding / wallets at closing and on several dates during the year"],
["Revenue","Recalculation of fees on 100% of transactions, analysis of monthly variations"],
["Commission expenses","Recalculation, analysis of outlier agents"],
["Manual adjustments","Full review, approvals, supporting documents"],
["Compliance","Configured limits, KYC on a sample, handling of AML alerts, BCEAO reporting"],
["Interfaces","Reconciliation with banks, billers and international partners"]])}
<h2>3. Questions to ask in interviews</h2>
<ul><li>Who can create or change an internal wallet? Who can make a balance adjustment?</li><li>How is the daily backing reconciliation done? Show me the one for 31 December.</li><li>What changes to the price list took place this year? Who approved them?</li><li>How are failed transactions handled?</li><li>How many frauds were reported, and how much was refunded to customers?</li></ul>
<div class="box key"><h4>Key takeaway</h4><p>Three tests provide most of the value of an issuer audit: <b>backing</b>, <b>manual adjustments</b> and <b>recalculation of fees and commissions</b>. All three rely on a reliable and complete extraction of platform data: always check how the extraction was made.</p></div>
`}
];

const c = CERTS.find(x => x.id === "monnaie-electronique");
c.en = {
  title:"Electronic money issuers", org:"Business sector · WAMU",
  intro:"Understand mobile money from the inside: backing of funds, agents, commissions, BCEAO regulation, fraud, technical platform and audit programme. A sector where IT audit is at the heart of the financial statement audit.",
  exam:`<p>Internal campus knowledge test: 25 random questions, 35 minutes, recommended pass mark 70%.</p>`,
  modules,
  pages:[{ title:"Electronic money glossary", html:`
${T(["Term","Definition"],[
["Agent","Service point that handles deposits and withdrawals for customers"],
["Adjustment","Manual correction of a wallet balance by the issuer"],
["API","Interface that lets a partner system use the platform's services"],
["Cash-in / cash-out","Cash deposit in exchange for electronic money / cash withdrawal"],
["Safeguarding account","Dedicated bank account holding the funds that back the money issued"],
["Backing","Equality between safeguarded funds and electronic money in circulation"],
["Distributor (master agent)","Intermediary that manages a network of agents"],
["EMI (EME)","Electronic money institution"],
["Float","An agent's stock of electronic money"],
["Splitting","Breaking up a transaction to multiply commissions or stay below a limit"],
["Interoperability","Ability to send money between different issuers and banks"],
["KYC","Know your customer; simplified, standard and enhanced levels"],
["Merchant","Shop that accepts payments in electronic money"],
["P2P","Person-to-person transfer"],
["Bulk payment","Simultaneous payment to many beneficiaries (salaries, benefits)"],
["Limit","Balance or transaction cap according to the KYC level"],
["Holder","Owner of an electronic money wallet"],
["Wallet","Electronic money account"],
["Rebalancing","Operation by which an agent exchanges cash and float"],
["SIM swap","Fraudulent replacement of a customer's SIM card to take control of their account"],
["USSD","Code-based menu technology (*xxx#) usable on all phones"]])}
`}]
};
})();
