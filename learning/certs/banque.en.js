/* Banking (WAMU): English version of the course. Same module order as banque.js.
   Regulatory thresholds are those known at the time of writing: check the BCEAO texts in force. */
(function(){
const {T, E, X} = window.__GLEN;

const modules = [
{ day:"Understand", title:"What is a bank for? The business in plain words", html:`
<p class="lead">A bank collects money from those who have it (depositors) and lends it to those who need it (borrowers). It earns its living on the difference between rates, and on the services it charges for.</p>
<h2>1. The three functions of a bank</h2>
${T(["Function","In plain words","Example"],[
["Intermediation","Collecting deposits and granting loans","Moussa's salary is deposited and used to fund Awa's loan"],
["Maturity transformation","Lending long term with resources that are often short term","Demand deposits fund a 15-year mortgage"],
["Payment services","Keeping accounts and executing payments","Transfers, cheques, cards, direct debits, international transfers"]])}
<p>Maturity transformation is useful for the economy, but it creates the main danger of the business: if all depositors want their money back at the same time, the bank cannot return what it lent for 15 years. This is <b>liquidity risk</b>.</p>
<h2>2. How a bank makes money</h2>
<ul><li><b>Net interest margin</b>: interest received on loans minus interest paid on deposits and borrowings. A loan at 9% funded by deposits paid at 3% earns a margin of 6 points.</li>
<li><b>Fees and commissions</b>: account keeping, cards, transfers, remittances, documentary credits, guarantees, remote banking.</li>
<li><b>Market operations</b>: government securities, foreign exchange.</li></ul>
<h2>3. The main earnings indicators</h2>
${T(["Indicator","Simplified calculation","What it tells you"],[
["Net banking income (PNB in French)","Interest received − interest paid + net fees + net gains on securities and FX","The equivalent of value added: what the bank earns from its business"],
["Gross operating income","Net banking income − overheads − depreciation","What remains after paying for operations"],
["Cost-to-income ratio","Overheads ÷ net banking income","Efficiency: the lower the better (often around 50 to 65%)"],
["Cost of risk","Net loan loss provision charges + losses on irrecoverable loans","What loans that go bad cost"],
["Net income","Operating income − cost of risk ± exceptional items − tax",""]])}
<h2>4. The players around a WAMU bank</h2>
${T(["Player","Role"],[
["BCEAO","Central bank of the eight WAMU States (Benin, Burkina Faso, Côte d'Ivoire, Guinea-Bissau, Mali, Niger, Senegal, Togo). Issues the CFA franc, sets policy rates, issues prudential and accounting rules, runs the payment systems"],
["WAMU Banking Commission","Supervises banks: on-site and off-site inspections, sanctions, withdrawal of licences"],
["Ministry of Finance","Grants the licence after the Banking Commission's assent"],
["CENTIF (in Senegal)","Financial intelligence unit that receives suspicious transaction reports"],
["Statutory auditors","Certify the financial statements and produce specific reports for the supervisor"],
["Credit information bureau","Centralizes borrowers' credit history to help banks decide"]])}
<div class="box key"><h4>Why the sector is so regulated</h4><p>A bank uses the public's money. Its failure can drag down other banks (systemic risk). Hence strict rules: minimum capital, prudential ratios, internal control, anti-money laundering, regular reporting to the supervisor.</p></div>
`},

{ day:"Understand", title:"A bank's balance sheet and the banking chart of accounts", html:`
<p class="lead">A bank's balance sheet does not look like a trading company's: no inventory, very few fixed assets, and customer deposits that are liabilities.</p>
<h2>1. The reversed principle</h2>
<ul><li>For the bank, <b>customer deposits are liabilities</b>: it must pay them back.</li><li><b>Loans granted are receivables</b> (assets): customers must repay them.</li></ul>
<p>That is why a customer's bank statement shows a deposit "in credit": in the bank's accounts, the customer's account (a liability) increases on the credit side.</p>
<h2>2. Simplified balance sheet</h2>
${T(["Assets","Liabilities"],[
["Cash and central bank (banknotes, reserve requirements at the BCEAO)","Interbank liabilities (borrowings from other banks and the BCEAO)"],
["Interbank receivables (loans to other banks)","Customer deposits: current accounts, savings, term deposits"],
["Customer loans (net of provisions)","Debt securities issued (certificates of deposit, bonds)"],
["Securities: Treasury bills and bonds, shares","Other liabilities, accruals"],
["Fixed assets","Provisions"],
["Other assets, accruals","Equity: capital, reserves, profit"]])}
<h2>3. The revised WAMU banking chart of accounts</h2>
<p>Banks do not use SYSCOHADA but the WAMU <b>revised banking chart of accounts (PCB révisé)</b>, applied since 2018. It is organized by main families of operations:</p>
${T(["Class","Content"],[
["1","Treasury and interbank operations"],
["2","Customer operations (loans, ordinary accounts, deposits)"],
["3","Securities and miscellaneous operations (including accruals and suspense accounts)"],
["4","Fixed assets"],
["5","Provisions, equity and similar items"],
["6","Expenses"],
["7","Income"],
["9","Off-balance sheet commitments"]])}
<p>The exact account numbers are in the revised chart of accounts published by the BCEAO. What matters for you: recognizing an interbank operation, a customer operation, a suspense account and an off-balance sheet commitment.</p>
<h2>4. Off-balance sheet: commitments</h2>
<p>A bank takes on commitments that are not yet cash flows: <b>guarantees</b> given for a customer (public contract, customs), import <b>documentary credits</b>, <b>credit lines</b> granted but not drawn. They can turn into a payment if the customer defaults: they are tracked in class 9 and included in the risk calculation.</p>
<h2>5. Example entries, from the bank's point of view</h2>
${E("A customer deposits 1,000,000 in cash",[["Cash","Cash (asset)","1,000,000",""],["Customer ordinary accounts","Customer's account (liability)","","1,000,000"]])}
${E("The bank disburses a 5,000,000 loan to the customer's account",[["Medium-term loans","Receivable from the customer (asset)","5,000,000",""],["Customer ordinary accounts","Customer's account (liability)","","5,000,000"]])}
${E("Collection of the instalment: 400,000 principal and 50,000 interest",[["Customer ordinary accounts","Customer's account","450,000",""],["Medium-term loans","Repayment of principal","","400,000"],["Interest on loans","Interest income","","50,000"]])}
${X("why is a company's 100 million term deposit a liability for the bank?","<p>The bank has received the money but must return it at maturity, with interest. It is a <b>debt to the customer</b>. The corresponding asset is the money received (cash), which the bank will lend or invest.</p>")}
`},

{ day:"Understand", title:"Banking products: deposits, loans, payments", html:`
<p class="lead">Before auditing a bank, you need to know what it sells. Each product has its own flows, its own parameters in the system and its own risks.</p>
<h2>1. Resources (what the bank receives)</h2>
${T(["Product","Features"],[
["Current account / cheque account","Demand deposit, available at any time, usually not interest-bearing, with account fees"],
["Savings account","Interest-bearing, limited withdrawals"],
["Term deposit","Locked for a fixed period, higher rate, penalty for early withdrawal"],
["Savings certificates, certificates of deposit","Securities issued by the bank to fund itself"],
["Refinancing","Borrowing on the interbank market and from the BCEAO (against securities as collateral)"]])}
<h2>2. Uses (what the bank lends)</h2>
${T(["Product","Term","Example"],[
["Authorized overdraft, cash facility","Short term","An SME covers a cash timing gap"],
["Bill discounting, factoring","Short term","The bank advances the money of a customer invoice before it falls due"],
["Crop campaign loan","Short term","Financing the marketing of groundnuts or cotton"],
["Medium-term loan","2 to 7 years","Purchase of equipment, vehicles"],
["Long-term loan","More than 7 years","Real estate, large investments"],
["Leasing","Medium term","The bank buys the asset and leases it to the customer with a purchase option"],
["Personal loans","Variable","Personal loan, mortgage, salary advance, often deducted from the salary paid into the bank"]])}
<h2>3. Trade finance</h2>
<ul><li><b>Documentary credit</b>: the importer's bank undertakes to pay the exporter against presentation of compliant documents (bill of lading, invoice, certificate of origin).</li><li><b>Documentary collection</b>: the bank passes on the documents against payment or acceptance, without committing itself.</li><li><b>Guarantees and bonds</b>: bid bond, performance bond, advance payment bond, customs bond.</li><li><b>Transfers</b> via the SWIFT network, subject to exchange control rules (supporting documents for payments outside WAEMU).</li></ul>
<h2>4. WAEMU payment systems</h2>
${T(["System","Role"],[
["STAR-UEMOA","Real-time gross settlement system (RTGS) for large-value payments between banks"],
["SICA-UEMOA","Clearing system for low-value cheques, transfers and bills"],
["GIM-UEMOA","Interbank card grouping: card interoperability across the zone"],
["SWIFT","Secure messaging for international transfers"],
["Instant payment systems","Interoperability being rolled out between banks, electronic money issuers and microfinance"]])}
<h2>5. The life cycle of a loan</h2>
<ol><li><b>Application</b> and building the file (financial statements, payslips, proposed collateral).</li><li><b>Analysis</b>: repayment capacity, indebtedness, check with the credit information bureau.</li><li><b>Decision</b> according to delegations of authority (branch, credit committee, board of directors for large amounts or related parties).</li><li><b>Set-up</b>: signing the contract, taking collateral (mortgage, pledge, guarantee), disbursing the funds.</li><li><b>Monitoring</b>: instalments, arrears, annual reviews.</li><li><b>Recovery</b>, amicable then through litigation if the customer stops paying.</li></ol>
<div class="box key"><h4>Audit points</h4><p>Compliance with delegations (a loan above the branch limit must have the committee's approval), collateral actually taken <b>before</b> disbursement, rates in line with the price list, and in the system: only authorized people can change a rate, an instalment date or an arrears status.</p></div>
`},

{ day:"Risks", title:"Credit risk: arrears, classification and provisions", html:`
<p class="lead">Credit risk is the main risk of a WAMU bank. Much of the audit work addresses the question: are loans that go bad properly identified and sufficiently provided for?</p>
<h2>1. From performing to impaired</h2>
${T(["Category","Typical situation","Consequence"],[
["Performing loan","The customer pays on time","No individual provision (a general provision may apply)"],
["Watch list / restructured loan","First delays, difficulties, renegotiated schedule","Closer monitoring; specific rules for restructured loans"],
["Non-performing loan (doubtful or disputed)","Arrears beyond a period set by regulation (usually 90 days), insolvency proceedings, litigation","Mandatory downgrade, interest no longer recognized as income, provision"],
["Irrecoverable loan","No reasonable chance of recovery","Written off, provision reversed"]])}
<p>The precise classification and provisioning rules are set by a BCEAO instruction. Banking groups that also report under IFRS apply <b>IFRS 9</b>, which provides for expected losses from origination in three "stages" (1: performing, 2: significant increase in credit risk, 3: default).</p>
<h2>2. Provisioning</h2>
<p>The provision covers the part of the receivable that is not expected to be recovered. Some collateral (mortgage, blocked deposit) can be taken into account, subject to the conditions and haircuts set by the texts.</p>
<p>Example: doubtful loan of 50,000,000, mortgage valued at 30,000,000 after haircut. If regulation allows the collateral to be deducted, the minimum provision covers 20,000,000. If the mortgage is not properly registered, it cannot be used: the provision rises to 50,000,000.</p>
<h2>3. Reserved interest</h2>
<p>When a loan is downgraded, the bank must stop recording accruing interest as income, since it will probably not collect it. It is "reserved" (set aside) and only recognized as income when collected. An auditor checks that the system automatically stops recognizing interest at the time of the downgrade.</p>
<h2>4. Other prudential rules on credit</h2>
<ul><li><b>Large exposure limit</b>: commitments to a single beneficiary (or connected group) must not exceed a percentage of equity (25% under the WAMU framework at the time of writing).</li><li><b>Related-party loans</b> (executives, shareholders, directors): capped and subject to board authorization.</li><li><b>Sector concentration</b>: monitored by the risk department.</li></ul>
<h2>5. Audit tests on the loan portfolio</h2>
${T(["Test","Objective"],[
["Extract all loans from the system with their days past due","Check that every receivable above the threshold is downgraded"],
["Recalculate arrears ageing from the repayment schedules","Detect manipulation (repeated rescheduling to \"reset\" delays)"],
["Examine a sample of files","Collateral that exists, is registered and valued; decisions in line with delegations"],
["Analyse restructured loans","Prevent doubtful loans from being disguised as performing"],
["Review of system rights","Who can change a due date, a status, a rate?"],
["Reconcile the trial balance with the loan database","Do outstanding amounts in the loan system equal the accounts?"]])}
${X("a loan is 120 days past due but still classified as performing. The relationship manager explains that it was rescheduled last week. What do you do?","<p>Check that the restructuring was approved at the right level, that it is documented and that the loan was classified as a <b>restructured loan</b> under BCEAO rules, not as an ordinary performing loan. Analyse the history: how many reschedulings? A loan rescheduled several times without real repayment should in principle be downgraded and provided for. Also check who changed the schedule in the system and whether that person had the right to do so.</p>")}
`},

{ day:"Risks", title:"Capital, liquidity and prudential ratios (Basel)", html:`
<p class="lead">The Basel accords set the international rules for bank soundness. WAMU has applied them since 2018 in its prudential framework (adapted Basel II and III).</p>
<h2>1. The three pillars</h2>
${T(["Pillar","Content"],[
["Pillar 1","Minimum capital requirements to cover credit, market and operational risks"],
["Pillar 2","Supervisory review: internal assessment of capital adequacy, governance, risk management"],
["Pillar 3","Market discipline: disclosure of information on risks and capital"]])}
<h2>2. The solvency ratio</h2>
<p><b>Ratio = Capital ÷ Risk-weighted assets (RWA)</b>. Each asset is weighted according to its risk: a loan to the State in its own currency may be weighted at 0%, a secured mortgage less than a loan to an unrated company (100%).</p>
<p>In WAMU, at the time of writing, the total minimum is 11.5% (8% base + 2.5% conservation buffer, with minima on common equity tier 1), to which requirements for systemically important banks may be added.</p>
<p>Example: capital 30 billion; RWA 240 billion → ratio 12.5%. If the bank grants 40 billion of loans weighted at 100% without increasing its capital, the ratio falls to 30 ÷ 280 = 10.7%: it goes below the minimum.</p>
<h2>3. Liquidity ratios</h2>
${T(["Ratio","Question asked","Minimum"],[
["LCR (liquidity coverage ratio)","Does the bank have enough liquid assets to withstand 30 days of crisis?","100%"],
["NSFR (net stable funding ratio)","Are long-term uses funded by stable resources?","100%"]])}
<h2>4. The leverage ratio</h2>
<p>Tier 1 capital ÷ total exposure (unweighted). It prevents a bank from inflating its balance sheet with low-weighted assets.</p>
<h2>5. Regulatory reporting</h2>
<p>Banks regularly send prudential and accounting statements to the BCEAO and the Banking Commission. For the IT auditor, this reporting is an important topic: it is often produced by queries and tools outside the core system. You need to test:</p>
<ul><li>the completeness and accuracy of the extracted data;</li><li>controls over intermediate files (Excel that can be edited by hand);</li><li>the audit trail between the accounts and the statement sent;</li><li>changes made to the queries and weighting parameters.</li></ul>
${X("capital: 18 billion; RWA: 160 billion. Does the ratio meet a minimum of 11.5%? How much room is left for loans weighted at 100%?","<p>Ratio = 18 ÷ 160 = <b>11.25%</b>: insufficient. To reach 11.5% without new capital, RWA would need to fall to 18 ÷ 0.115 ≈ 156.5 billion. There is therefore no room: the bank must reduce its risks or increase its capital.</p>")}
`},

{ day:"Risks", title:"Operational risk, fraud and anti-money laundering", html:`
<p class="lead">A bank can lose money without any customer defaulting: a processing error, internal fraud, a cyber attack or a money laundering sanction.</p>
<h2>1. Families of operational risk</h2>
${T(["Family","Banking example"],[
["Internal fraud","A teller embezzles cash; an employee creates fake loans to front men"],
["External fraud","Forged cheques, identity theft, hacking of online banking accounts, card fraud"],
["Business practices","Non-contractual fees charged to customers"],
["Damage to assets","Fire at a branch"],
["System disruption","Core system outage, ATMs unavailable"],
["Process execution","Transfer executed twice, amount keyed in wrongly"]])}
<h2>2. Sensitive points in branches</h2>
<ul><li><b>Cash</b>: daily cash counts, dual control for large amounts, limits per teller.</li><li><b>Dormant accounts</b>: accounts with no movement for a long time, a favourite target of internal fraudsters. They must be blocked and their reactivation controlled.</li><li><b>Internal and suspense accounts</b>: funds pass through them; old unexplained balances can hide embezzlement.</li><li><b>Changes to customer data</b>: change of address, phone number or signature before a fraudulent withdrawal.</li></ul>
<h2>3. Anti-money laundering and countering the financing of terrorism (AML/CFT)</h2>
<p><b>Money laundering</b> means giving a legal appearance to money of criminal origin. Three stages: <b>placement</b> (getting the money into the system), <b>layering</b> (multiplying transactions to blur the trail), <b>integration</b> (reinvesting in the legal economy).</p>
<p>In WAMU, a uniform AML/CFT/PF law requires banks:</p>
<ul><li>to <b>know their customer</b> (KYC): identity, activity, source of funds, beneficial owner;</li><li>to apply <b>enhanced due diligence</b> to high-risk customers, including politically exposed persons (PEPs);</li><li>to <b>screen</b> customers and transfers against sanctions lists;</li><li>to <b>monitor</b> unusual transactions and file a <b>suspicious transaction report</b> with the CENTIF;</li><li>to <b>keep</b> documents for at least ten years.</li></ul>
<div class="box key"><h4>IT audit of AML/CFT</h4><p>Test the screening tool (are the lists updated? is the matching threshold too permissive?), the profiling tool (are the alert scenarios active and suitable?), alert handling (delays, justification of closures) and the completeness of the data sent to these tools (do all accounts and all transactions reach them?).</p></div>
<h2>4. Bank internal control</h2>
<p>Regulation requires three lines: the business lines (first-level permanent control), the control functions (risk, compliance, permanent control), and internal audit. The board of directors relies on an audit committee and a risk committee.</p>
${X("during a review, you find an account dormant for five years reactivated yesterday by an employee, followed by a cash withdrawal of 15 million the same day. What checks?","<p>Who requested and approved the reactivation (procedure, identity documents, dual approval)? Was the customer's signature verified? Were the contact details changed just before? Does the withdrawal comply with the limits and dual control? Can the account holder be reached through an independent channel? In the system: does the employee have the right to reactivate <b>and</b> approve a withdrawal? This case must be escalated immediately (possible internal fraud).</p>")}
`},

{ day:"IT audit", title:"The banking information system and its audit", html:`
<p class="lead">In a bank, almost everything is automated: calculation of interest, fees, arrears, provisions, production of regulatory statements. IT audit is therefore central.</p>
<h2>1. The typical architecture</h2>
${T(["Component","Role"],[
["Core banking system","Customers, accounts, loans, deposits, calculation of interest and fees, accounting. Examples of software packages: Temenos T24/Transact, Oracle Flexcube, Sopra Amplitude, Delta…"],
["Card processing","Cards, ATMs, payment terminals, interface with GIM-UEMOA and international networks"],
["Remote banking","Mobile app, website, SMS, interfaces with mobile money operators"],
["SWIFT","Messaging for international transfers"],
["Compliance tools","Sanctions screening, AML profiling, reporting"],
["Regulatory and management reporting","Data warehouse, tools generating BCEAO statements"],
["Interfaces","Exchanges between all these systems, often by file"]])}
<h2>2. End-of-day processing (batch)</h2>
<p>Every evening, the core system runs the <b>end-of-day processing</b>: calculating and posting accrued interest, collecting instalments, applying fees, updating arrears statuses, generating accounting entries. An auditor checks:</p>
<ul><li>that the jobs finished without error (execution logs);</li><li>that anomalies are followed up and corrected;</li><li>who can start, stop or restart these jobs;</li><li>that the system date cannot be changed without control.</li></ul>
<h2>3. ITGC in banking</h2>
${T(["Area","Specific points of attention"],[
["Access management","Profiles by business line; segregation of entry / approval (maker / checker); IT staff access to production; generic accounts; periodic review; leavers"],
["Change management","Configuration changes (rates, fees, downgrade rules) handled like application changes: request, testing, approval, traceability"],
["Operations","Batch, backups, monitoring, incident management"],
["Development and projects","Data migration when changing core banking: completeness and accuracy controls"]])}
<h2>4. Key application controls</h2>
<ul><li>Correct calculation of interest and fees (recalculation on a sample).</li><li>Automatic blocking of withdrawals beyond the available balance or authorization.</li><li>Automatic downgrade according to days past due.</li><li>Dual approval above an amount.</li><li>Automatic reconciliations: correspondent accounts (nostro), clearing, card processing, mobile money.</li></ul>
<h2>5. SWIFT security</h2>
<p>SWIFT requires its members to apply a framework of security controls (Customer Security Programme) with an annual attestation: isolation of the SWIFT environment, protected privileged accounts, strong authentication, logging, anomaly detection, reconciliation of messages sent with the accounts. Major international frauds have exploited weaknesses at this level.</p>
<h2>6. Reconciliations to check</h2>
${T(["Reconciliation","Why"],[
["Nostro accounts (the bank's accounts with its foreign correspondents)","Detect unrecorded or fraudulent payments"],
["Clearing (SICA) and settlement (STAR)","Differences between exchanged and recorded transactions"],
["Card processing","Card and ATM transactions; ATM cash"],
["Mobile money / wallets","Settlement accounts with electronic money issuers"],
["Loan and deposit database / accounts","Consistency between modules and the general ledger"]])}
<div class="box key"><h4>Your strengths</h4><p>Your experience of access reviews, segregation of duties matrices and SQL queries on Oracle applies directly: core banking systems very often run on Oracle, and the most useful tests consist of extracting profiles, transactions and logs to analyse them.</p></div>
`},

{ day:"IT audit", title:"Conducting a bank audit: work programme", html:`
<p class="lead">This module brings everything together into a typical work programme for the IT side of a bank's statutory audit.</p>
<h2>1. Understand the environment</h2>
<ul><li>Map the applications that feed the accounts: core banking, card processing, SWIFT, treasury, reporting.</li><li>Infrastructure (servers, databases, hosting, service providers).</li><li>Changes during the year: migration, new version, new product, new mobile app.</li><li>Previous reports: Banking Commission, internal audit, external auditors, penetration tests.</li></ul>
<h2>2. ITGC programme</h2>
${T(["Control","Test"],[
["Creation and modification of access approved","Sample of creations: request, approval, rights in line with the role"],
["Removal of leavers' access","HR list of leavers compared with active accounts and last login date"],
["Periodic access review","Evidence of the review, corrections made"],
["Privileged accounts","List of core banking and database administrators; justification; logging"],
["Maker / checker","Extraction of profiles: no user can enter and approve the same transaction"],
["Changes","Sample of changes (programs and parameters): approval, testing, deployment by a person other than the developer"],
["Batch and incidents","End-of-day logs, incident tickets, corrective actions"],
["Backups","Scheduling, success, restore tests"]])}
<h2>3. Process programme</h2>
${T(["Process","Test"],[
["Loans","Recalculation of days past due and classification; provision tests; related parties"],
["Interest and fees","Recalculation on a sample; margin analysis by product"],
["Deposits","Balance confirmations; dormant accounts; internal accounts"],
["Treasury and interbank","Confirmations; nostro and BCEAO reconciliations"],
["Suspense accounts","Ageing, justification, clearing"],
["AML/CFT","Screening, alerts, KYC on a sample"],
["Regulatory reporting","Reconciliation of prudential statements with the accounts"]])}
<h2>4. Useful data analytics</h2>
<ul><li>Transactions posted by users outside their working hours or branch.</li><li>Loans disbursed with no recorded collateral.</li><li>Customer accounts with the same phone number or address as employees.</li><li>Fees or interest reversed manually in large numbers by the same employee.</li><li>Manual entries on income accounts at year-end.</li></ul>
<h2>5. Writing a finding</h2>
<p>A good finding always follows the same structure: <b>condition</b> (what you saw, quantified), <b>criteria</b> (the rule or good practice), <b>cause</b>, <b>risk</b> (impact on the accounts, compliance or security), <b>recommendation</b> and <b>management response</b>.</p>
${X("write a finding for the following situation: 14 core banking users can both enter and approve transfers above 10 million.","<p><b>Condition</b>: 14 users have both the right to enter and the right to approve transfers above 10 million. <b>Criteria</b>: segregation of duties principle (maker / checker) set by the security policy and internal control rules. <b>Cause</b>: legacy profiles not reviewed, no SoD matrix in the access granting process. <b>Risk</b>: fraudulent or erroneous transfer executed without independent control, financial loss, reputational damage. <b>Recommendation</b>: remove one of the two rights, formalize a matrix of incompatible duties applied at each access request, analyse the transfers approved by their own author during the year.</p>")}
`}
];

const c = CERTS.find(x => x.id === "banque");
c.en = {
  title:"Banking", org:"Business sector · WAMU",
  intro:"Understand the banking business, its vocabulary, accounting and risks, then learn to audit a WAMU bank, especially on the IT side. No prior knowledge of the sector is needed; taking the accounting course first is recommended.",
  exam:`<p>Internal campus knowledge test: 30 random questions, 45 minutes, recommended pass mark 70%.</p><div class="box tip"><h4>To go further</h4><p>Read the prudential framework, the revised banking chart of accounts and the uniform AML/CFT law published on the BCEAO website, as well as the Banking Commission's annual report.</p></div>`,
  modules,
  pages:[{ title:"Banking glossary", html:`
<p class="lead">The words you hear on an engagement at a bank.</p>
${T(["Term","Definition"],[
["Agios","Interest and fees charged on an overdraft"],
["Cash count","Counting and reconciling the till at the end of the day"],
["Basel (accords)","International solvency and liquidity rules for banks"],
["BCEAO","Central Bank of West African States"],
["Beneficial owner","Natural person who really controls a corporate customer"],
["Credit information bureau","Body that centralizes borrowers' credit history"],
["Bank guarantee","The bank's undertaking to pay in place of its customer if the customer defaults"],
["CENTIF","National financial intelligence processing unit (anti-money laundering intelligence)"],
["Cost-to-income ratio","Overheads ÷ net banking income"],
["Banking Commission","Supervisor of WAMU banks"],
["Dormant account","Account with no customer-initiated movement for a long period"],
["Nostro / vostro account","The bank's account with a correspondent / a correspondent's account with the bank"],
["Core banking","The bank's central IT system"],
["Cost of risk","Annual charge for loans that will not be repaid"],
["Non-performing loan","Unpaid or doubtful loan to be downgraded and provided for"],
["Documentary credit","A bank's undertaking to pay an exporter against compliant documents"],
["Leasing","Rental of an asset with a purchase option, financed by the bank"],
["Term deposit (DAT)","Sum locked for a fixed period in return for interest"],
["Suspicious transaction report","Reporting a suspicious transaction to the CENTIF"],
["Large exposure limit","Cap on commitments to a single beneficiary"],
["Salary domiciliation","Undertaking to have one's salary paid into the lending bank's account"],
["Discounting","Advance of the amount of a bill of exchange before it falls due"],
["Capital (own funds)","Capital and reserves that absorb losses"],
["Collateral","Security that protects the bank: mortgage, pledge, guarantee, blocked deposit"],
["GIM-UEMOA","WAEMU interbank card grouping"],
["Reserved interest","Interest on a doubtful loan not recognized as income"],
["KYC","Know Your Customer"],
["AML/CFT","Anti-money laundering and countering the financing of terrorism"],
["LCR / NSFR","Liquidity coverage / net stable funding ratios"],
["Maker / checker","Dual control principle: one enters, another approves"],
["Net interest margin","Interest received − interest paid"],
["Interbank market","Market where banks lend to each other"],
["PCB révisé","WAMU banking chart of accounts"],
["PNB","Net banking income"],
["PEP","Politically exposed person"],
["Provision","Amount set aside to cover a probable loss on a loan"],
["Solvency ratio","Capital ÷ risk-weighted assets"],
["Refinancing","The bank's borrowing from the BCEAO or other banks"],
["Reserve requirements","Deposits each bank must keep at the BCEAO"],
["Restructuring","Renegotiating the terms of a loan in difficulty"],
["RWA","Risk-weighted assets"],
["SICA-UEMOA","Interbank clearing system"],
["STAR-UEMOA","Real-time gross settlement system"],
["SWIFT","Messaging network for international payments"],
["Policy rate","Rate at which the BCEAO lends to banks"],
["Maturity transformation","Lending long term with short-term resources"],
["WAMU / WAEMU","West African Monetary Union / West African Economic and Monetary Union"]])}
`}]
};
})();
