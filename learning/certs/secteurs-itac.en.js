/* English version of the "Risks and ITAC work programme" pages (same order and content as secteurs-itac.js). */
(function(){
const T = (head, rows) => '<div class="tablewrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const X = (q, a) => '<details><summary>Case study: ' + q + '</summary>' + a + '</details>';

const METHOD = `
<h2>1. What an ITAC is, in plain words</h2>
<p>An <b>ITAC</b> (IT Application Control) is a rule programmed or configured in an application that runs <b>by itself</b>, the same way for every transaction. Example: the system refuses to post a transfer when the balance is insufficient.</p>
<p>For the auditor, this is the key benefit: an automated control that works once works every time, <b>as long as nobody has changed it</b>. It can therefore be tested on a single occurrence per scenario (a "test of one") instead of a sample of 25 or 40 as for a manual control. This reduction only holds if the IT general controls (access and change) over the application are effective.</p>
${T(["ITAC family","What it does","Example"],[
["Input control (validation)","Rejects or flags incorrect data: format, mandatory field, value range, duplicate","An invoice cannot be created without a purchase order number"],
["Automated calculation","Computes an amount without human intervention","Interest, VAT, premiums, depreciation, provisions by ageing"],
["Interface","Transfers data from one system to another, with completeness checks","Daily sales flow from the point-of-sale system to accounting with a control total"],
["Application access and segregation of duties","Limits actions by profile; prevents the same person from entering and approving","The \"cashier\" profile cannot approve its own cancellations"],
["Approval workflow","Requires approval above thresholds","A payment above 10 million FCFA requires the CFO's approval"],
["Block, alert","Blocks a risky transaction or alerts someone","Customer blocked above credit limit; fraud alert"],
["System report (IPE)","Produces information used by a control or by the auditor","Customer ageing report used to compute the bad-debt provision"]])}
<div class="box key"><h4>ITAC, IT-dependent manual control, IPE: do not mix them up</h4><p><b>ITAC</b>: the system performs the control. <b>IT-dependent manual control</b>: a person reviews a system report (example: the chief accountant reviews the list of manual journal entries). <b>IPE</b> (Information Produced by the Entity): system-generated information whose completeness and accuracy must be checked before relying on it.</p></div>

<h2>2. Risks for the auditor</h2>
<p>When a company depends on its systems, the auditor faces specific risks:</p>
<ul>
<li><b>Relying on a wrong calculation</b>: a wrong parameter (rate, scale, ageing rule) produces an error repeated over thousands of transactions. A small unit error becomes material.</li>
<li><b>Relying on an incomplete report</b>: a report that omits a customer category or a period distorts all work based on it.</li>
<li><b>Missing a workaround</b>: an automated control can be disabled, overridden by an authorized user, or bypassed through manual entries.</li>
<li><b>Missing a change</b>: a parameter changed during the year invalidates a test performed at a single date.</li>
<li><b>Internal fraud</b>: a user with excessive rights can create, approve and hide a transaction.</li>
</ul>

<h2>3. How to test an ITAC, step by step</h2>
<ol>
<li><b>Understand the process</b> through an interview and a walkthrough: follow one transaction end to end and note where each automated control sits.</li>
<li><b>Link the control to the risk</b>: which misstatement risk does it address, for which assertion (completeness, accuracy, occurrence, cut-off, valuation) and which account?</li>
<li><b>Check the ITGC prerequisite</b> for the application: restricted access to parameters, approved and tested changes over the whole period. If ITGCs are deficient, a test of one is not enough: test at several dates, look for a compensating control or extend substantive testing.</li>
<li><b>Obtain the configuration</b>: parameter screen, parameter table, workflow rule or technical description. Note who can change it.</li>
<li><b>Design the test</b>: <b>inspect</b> the configuration and <b>reperform</b> a real case (or a test case in an environment proven identical to production). Test a <b>positive</b> case (the control lets correct items through) and a <b>negative</b> case (it blocks incorrect items).</li>
<li><b>Cover every variant</b>: one test per transaction type, rate table or rule branch (for example one rate per product category).</li>
<li><b>Document</b>: time-stamped screenshots showing user ID and environment, parameters noted, expected result, actual result, conclusion.</li>
<li><b>Check that nothing changed</b> during the period (change log, parameter history). In later years, you can rely on this baseline test ("benchmarking") as long as nothing changed and ITGCs remain effective.</li>
<li><b>Conclude and handle exceptions</b>: a single exception is enough to call an ITAC into question. Find the cause, measure the impact on the financial statements (how many transactions, what amount) and adjust substantive tests.</li>
</ol>

<h2>4. Testing a report (IPE) before using it</h2>
<ol>
<li>Identify the source (table, query, run parameters: dates, entities, filters).</li>
<li><b>Completeness</b>: agree the report total to the trial balance or general ledger; check that filters exclude nothing.</li>
<li><b>Accuracy</b>: trace a few report lines to the detail in the system (and the other way round, from the system to the report).</li>
<li>Make sure the report could not be altered after extraction (non-editable format, extraction performed by the auditor or in their presence).</li>
</ol>
`;

function page(intro, risks, rows, ipe, cases){
  return '<p class="lead">' + intro + '</p>' + METHOD +
  '<h2>5. Risks specific to this industry</h2>' + T(["Risk","Assertion and accounts affected","Why it matters to the auditor"], risks) +
  '<h2>6. ITAC work programme</h2><p>For each line: the control to look for, then the test to perform. Adapt to the actual configuration of the application: these are common examples, not an exhaustive list.</p>' +
  T(["Process","Risk addressed","ITAC to look for","Test (step by step)","Evidence to keep","Common exceptions"], rows) +
  '<h2>7. Reports (IPE) to validate</h2>' + T(["Report","Used for","Completeness and accuracy test"], ipe) +
  '<h2>8. Worked case studies</h2>' + cases;
}
function add(id, html){ const c = CERTS.find(x => x.id === id); if(!c || !c.pages) return; const p = c.pages.find(x => x.id === "itac"); if(!p) return; p.titleEn = "Risks and ITAC work programme"; p.htmlEn = html; }

/* ---------- Banking ---------- */
add("banque", page(
"A bank is the company most dependent on its information system: almost all its income (interest, fees) and its provisions are computed by the core banking system. The auditor cannot recompute millions of transactions by hand: they must test the calculations and automated controls.",
[["Interest miscalculated (rate, day-count basis, value date)","Accuracy of interest income and expense","Error repeated across the whole portfolio; often material"],
["Wrong classification of non-performing loans","Valuation of loans and provisions","Classification relies on the automated count of days past due; a wrong parameter understates provisions"],
["Fees not charged or reversed","Completeness and occurrence of fee income","Incomplete configuration or abusive manual reversals"],
["Fraudulent transactions approved by a single person","Occurrence, cash","No dual control (maker / checker) or overly broad profiles"],
["Suspense accounts not cleared","Accuracy and occurrence","Failed interfaces feed suspense accounts that hide differences"],
["Credit limits exceeded","Valuation","Unauthorized overrides allow unsecured overdrafts"]],
[["Loans","Interest calculation","Automated calculation based on the contractual rate, the basis (360 or 365 days) and the schedule","1. Note the product parameters (rate, basis, frequency). 2. Pick one loan per product type. 3. Recompute the interest instalment for the period. 4. Compare with the amount posted.","Product sheet, loan screen, repayment schedule, recalculation","Rate changed without an amendment; day-count basis different from the contract"],
["Loans","Classification and provisions","Automated count of days past due and reclassification (performing, past due, doubtful) according to regulatory thresholds","1. Note the configured thresholds and compare them with regulation. 2. Pick a loan in each category, just above and just below each threshold. 3. Check the date of the oldest unpaid instalment and the resulting class. 4. Check that a partial payment does not wrongly reset the counter.","Parameters, instalment history, resulting class","Counter reset by a small payment; restructuring used to \"clean\" arrears"],
["Deposits","Credit interest and account fees","Automated calculation and charge according to the price list","1. Obtain the approved price list. 2. Compare it with the system fee table. 3. Reperform for one account of each category.","Signed price list, parameter table, account statement","System table different from the published price list; unauthorized waivers"],
["Operations","Dual control (maker / checker)","A transaction above a threshold must be approved by another user","1. Note approval thresholds by transaction type. 2. Attempt (in test) entry and approval by the same user: it must be rejected. 3. Extract profiles: no user should have both entry and approval on the same transaction type without a compensating control.","Workflow parameters, screenshot of the rejection, profile extract","Super-users or generic accounts able to do everything"],
["Operations","Limits and overrides","Block of a withdrawal or debit above balance or authorization; override restricted to specific profiles and logged","1. Check the block on an overdraft case. 2. List profiles allowed to override. 3. Extract the year's override log and check a sample of authorizations.","Screenshot of the block, profile list, override log","Mass overrides by one agent; overrides without justification"],
["Interfaces","Card processing, SWIFT, clearing into core banking","File completeness control (record count and total amount) and duplicate rejection","1. Identify the interfaces feeding accounting. 2. For one day, agree the total sent and the total loaded. 3. Check how rejects and suspense accounts are handled.","Load reports, totals, reject lists","Rejected file never reprocessed; old suspense items"],
["Daily close","End-of-day processing","Automated jobs (accrued interest, charges) with completion checks","1. Obtain the job schedule. 2. Check the logs for a few days, including month ends. 3. Check follow-up of anomalies.","Logs, incident tickets","Job rerun manually without control"],
["AML/CFT","Screening and alerts","Automated screening of names against sanctions lists; alerts on unusual transactions","1. Note rules and thresholds. 2. Test a listed name (in a validated test environment). 3. Check handling of a sample of alerts.","Parameters, test result, alert files","Lists not updated; thresholds too high; alerts closed without analysis"]],
[["Loan ageing report (arrears by age)","Provision calculation","Total agreed to loan balances in the ledger; a few loans checked in the system"],
["Override list","Review of overdrafts","Compare the number of overrides with the system log; check extraction parameters (dates, branches)"],
["Suspense account report","Review of open items","Agree the total to the trial balance; check the age of a few lines"]],
X("the system classifies a loan as past due at 90 days of arrears. A loan is 120 days late, but the customer paid 5,000 FCFA the day before closing and the system now shows 0 days. What do you conclude?","<p>The calculation resets the counter whenever any payment arrives, whatever its amount: the ITAC is <b>deficient</b>. Consequences: identify all affected loans through data analytics (small recent payment and high actual ageing), recompute the classification and the provision, report the weakness to management and those charged with governance.</p>") +
X("the auditor wants to rely on last year's test of the interest calculation (benchmarking). What must they check?","<p>That the parameters and the program have not changed (change log, parameter history) and that access and change ITGCs remained effective throughout the year. Otherwise, they perform the test again.</p>")
));

/* ---------- E-money ---------- */
add("monnaie-electronique", page(
"At an e-money issuer, unit amounts are small but volumes are huge: millions of transactions a month. Fees, agent commissions, limits and the balance between e-money issued and safeguarded funds at the bank all rely on the platform.",
[["E-money issued not covered by safeguarded funds","Completeness and accuracy of the liability to customers","Total wallet balances must equal funds held at the bank; a difference reveals fraud or a serious error"],
["Fees and commissions misconfigured","Accuracy of revenue and commission expense","Error repeated over millions of transactions"],
["Regulatory limits exceeded","Compliance, AML/CFT","Unverified wallets above limits expose the issuer to sanctions"],
["E-money created without a real deposit","Occurrence","A technical account or an administrator can credit wallets without a counterpart"],
["Failed transactions not properly unwound","Accuracy","A transfer debited but not credited, or credited twice"],
["SIM swap or social engineering fraud","Occurrence","Losses to refund, provisions"]],
[["Issuance","E-money creation","E-money is only created against a confirmed deposit (cash-in at an agent backed by the agent's float, or bank transfer received)","1. Identify every way to credit a wallet. 2. Check that none creates e-money without a counterpart. 3. List technical accounts and users allowed to post to them. 4. Analyse their movements over the year.","Flow diagram, access list, movement extract","An \"adjustment\" account usable without dual control"],
["Reconciliation","E-money issued vs safeguarded funds","Daily report comparing total wallet balances with the safeguarding accounts","1. Validate the report (IPE). 2. Check month-end reconciliations and how differences are handled. 3. Reperform the reconciliation at year end.","Signed reports, bank statements","Old unexplained differences"],
["Pricing","Transfer and cash-out fees","Automated fee calculation by amount band","1. Compare the published price list with the system fee table. 2. Reperform a transaction just below and just above each band. 3. Check the accounting entry.","Price list, parameter table, transaction detail","Band shifted by one unit; unjustified fee waivers"],
["Agents","Commissions","Automated calculation of agent commissions per contract","1. Note rates by transaction type. 2. Recompute one agent's commission for a month. 3. Analyse circular transactions (repeated cash-in and cash-out to inflate commissions).","Contracts, parameters, commission statement","Transactions split to multiply commissions"],
["KYC and limits","Limits by verification level","Block of transactions above balance and flow limits according to the customer's KYC level","1. Note the limits and compare with regulation. 2. Test one wallet of each level above the limit. 3. Extract wallets exceeding the limit.","Parameters, screenshot of the block, extract","Limits lifted manually; agent accounts used as personal accounts"],
["Transactions","Atomicity and unwinding","A transaction is either fully completed or fully cancelled; automated handling of pending transactions","1. Obtain the list of transactions in \"pending\" or \"failed\" status. 2. Check how they were unwound. 3. Agree debits and credits for one day.","Pending transaction report, logs","Transactions stuck for months"],
["Security","Customer authentication","Mandatory PIN, lock after several errors, security delay after a SIM change","1. Note the parameters. 2. Test the lock. 3. Check the link with the mobile operator for SIM changes.","Parameters, screenshots","No delay after a SIM change"]],
[["Reconciliation of e-money issued vs safeguarded funds","Ensuring e-money is covered","Recompute total wallet balances from the database; compare with bank statements"],
["Agent commission statement","Commission expense","Recompute a sample; agree the total to the ledger"],
["List of wallets above limits","Compliance","Query rerun by the auditor or in their presence"]],
X("total wallet balances exceed safeguarded funds at the bank by 40 million FCFA. What is your approach?","<p>This is a major anomaly: e-money may have been created without a counterpart. Approach: analyse movements on technical and adjustment accounts, look for credits without a matching deposit, identify the users who posted them, and inform management and those charged with governance immediately. The gap must be covered and the central bank may need to be notified.</p>") +
X("some agents perform hundreds of 1,000 FCFA cash-ins followed by cash-outs every day. Why is this suspicious?","<p>These circular transactions inflate commissions paid per transaction. The auditor uses data analytics to find matching cash-in and cash-out pairs on the same wallets, quantifies the undue commissions and checks whether a detection rule exists.</p>")
));

/* ---------- Insurance ---------- */
add("assurance", page(
"At an insurer, the system computes premiums, splits them between periods (unearned premium reserve), manages claim files and their reserves, and computes intermediary commissions. Technical reserves are the largest liability on the balance sheet and depend directly on system data and calculations.",
[["Premiums miscalculated or wrongly split between periods","Accuracy and cut-off (premiums, unearned premium reserve)","The reserve is computed automatically on all policies"],
["Claims reserves understated","Valuation of technical reserves (outstanding claims)","Files not updated, files closed in error, late claims forgotten"],
["Fictitious claims or claims paid twice","Occurrence of claims expense","Internal or external fraud"],
["Inflated intermediary commissions","Accuracy of expenses","Rates configured outside the contract"],
["Premiums written but not collected","Valuation of receivables","Policies kept in force despite non-payment"]],
[["Underwriting","Premium calculation","Automated calculation from the rating tables (scales, factors, bonus-malus)","1. Obtain the approved rating tables. 2. Compare with system tables. 3. Reperform the calculation for one policy per product, including one with a bonus and one with a malus.","Signed rates, tables, policy","Rates not updated; unlimited commercial discounts"],
["Underwriting","Unearned premium reserve","Automated pro-rata calculation of the unearned part of premiums at year end","1. Pick policies spanning two periods. 2. Recompute the unearned part. 3. Agree the report total to the ledger.","Reserve report, policies, recalculation","Calculation based on entry date instead of inception date"],
["Claims","Cover and duplicate check","When a claim is opened, automatic check that the policy was in force and that the claim is not already recorded","1. Test opening a claim on a cancelled policy (must be refused or flagged). 2. Test a duplicate (same policy, same date, same third party).","Screenshots, parameters","Claims opened on policies suspended for non-payment"],
["Claims","Settlement authority","Settlement limit per claims handler; above it, managerial approval","1. Note limits by profile. 2. Test a settlement above the limit. 3. Extract the year's settlements close to the limits (splitting).","Parameters, screenshots, extract","Settlements split just below the limit"],
["Claims","Case reserves","Automated reserve when the file is opened (flat amount by type) then mandatory update; alert on inactive files","1. Note the flat amounts. 2. List open files without update for more than 6 months. 3. Check consistency with loss adjuster reports.","Parameters, file list, adjuster reports","Dormant files with insufficient reserves"],
["Intermediaries","Commissions","Automated calculation by the intermediary's contractual rate and product","1. Compare contractual rates and parameters. 2. Recompute one intermediary's commission for a month.","Contracts, parameters, statements","Higher rate than the contract for some intermediaries"],
["Collection","Suspension for non-payment","Automatic suspension of cover after the legal period without payment","1. Note the configured period. 2. Check a few unpaid policies: are they suspended?","Parameters, unpaid premium report","Cover maintained on unpaid policies"]],
[["Outstanding claims listing","Claims reserves","Total agreed to the ledger; a few files traced to the system and back"],
["Premiums written and unearned premium report","Revenue and unearned premium reserve","Agree to the ledger; check date parameters"],
["Unpaid premium ageing","Bad-debt provision","Agree and test ageing on a sample"]],
X("an annual premium of 120,000 FCFA with inception on 1 October was entered on 15 December. The system computes the unearned premium from the entry date. What is the impact at 31 December?","<p>Correct (inception date): 9 months unearned, reserve = 90,000. System (entry date): about 11.5 months unearned, reserve ≈ 115,000. The reserve is overstated and profit understated by about 25,000 for this policy. The ITAC is deficient: measure the effect on all policies entered late and have the parameter corrected.</p>")
));

/* ---------- Telecoms ---------- */
add("telecoms", page(
"A telecom operator's revenue is born in the network: every call, SMS or data session produces a record (CDR) that must be rated by the charging platform, then billed or deducted from prepaid credit, then recorded in the ledger. The auditor must make sure nothing is lost and the right prices are applied (revenue assurance).",
[["Revenue leakage: CDRs lost or not rated","Completeness of revenue","CDRs pass through several systems; a break in the chain is silent"],
["Tariffs misconfigured","Accuracy of revenue","An error applies to millions of calls"],
["Prepaid credit sold but not consumed","Cut-off (deferred revenue)","Unused credit at year end is not yet revenue"],
["Internal fraud: bonus or credit granted without reason","Occurrence","Platform administrators can credit accounts"],
["Interconnect and roaming misbilled","Accuracy and completeness","Differences with other operators"]],
[["Collection","CDR completeness","Sequence check on files produced by switches and reconciliation of volumes between network, charging and billing","1. Map the chain (switch, mediation, charging, billing, accounting). 2. For one day, reconcile CDR counts and minutes at each step. 3. Check how rejected files are handled.","Diagram, mediation reports, reconciliation","Missing files in the sequence; rejects never reprocessed"],
["Charging","Tariff application","Automated rating according to the price plan and the subscriber's options","1. Compare the commercial offer catalogue with configured tariffs. 2. Make test calls (test number) for each call type and check the amount charged. 3. Check promotional offers and their end dates.","Catalogue, parameters, test call results","Promotion still active after its end date"],
["Prepaid","Top-ups and unused credit","Creation of top-ups (vouchers, electronic) with unique numbers; computation of remaining credit at year end","1. Check uniqueness and activation of top-ups. 2. Validate the unused credit report (IPE). 3. Check it is recorded as deferred revenue.","Top-up reports, unused credit report","Voucher batches activated without a sale"],
["Platform","Manual adjustments","Manual credits or bonuses restricted to specific profiles, with a cap and dual control","1. List authorized profiles. 2. Extract the year's adjustments. 3. Check authorizations on a sample and unusual amounts.","Profile list, extract, supporting documents","Repeated adjustments to the same numbers"],
["Postpaid","Billing","Automated invoice generation with a check that the billing cycle is complete","1. Agree the number of active subscribers with the number of invoices in the cycle. 2. Recompute one invoice.","Cycle reports, invoices","Active subscribers not billed"],
["Interconnect","Inter-operator billing","Automated calculation of incoming and outgoing traffic and amounts due","1. Reconcile measured traffic with traffic declared by the other operator. 2. Analyse differences above the contractual threshold.","Traffic statements, invoices, reconciliations","Differences not disputed within the deadline"]],
[["CDR reconciliation report","Completeness of revenue","Reperform the reconciliation for one day from source data"],
["Unused prepaid credit at year end","Deferred revenue","Check the query and reconcile with top-ups sold less usage"],
["Manual adjustment list","Review of credits granted","Compare the number of adjustments with the platform log"]],
X("the network produced 52 million minutes in March, and charging rated 50.5 million. What does the auditor do?","<p>A gap of 1.5 million minutes (almost 3%) is a risk to revenue completeness. The auditor asks for an explanation: free calls (emergency numbers, customer service), failed calls, mediation rejects. They check that rejects were reprocessed and quantify lost revenue if part of the gap remains unexplained.</p>")
));

/* ---------- Oil and gas ---------- */
add("petrole", page(
"In oil and gas, the currency of the business is volume. Measurement systems (tank gauging, meters, pump readings) feed the ERP, which values stocks and sales. Retail prices are often regulated and government subsidies or compensation rely on reported volumes. The auditor must follow the litres from end to end.",
[["Volumes mismeasured or not temperature-corrected","Accuracy and existence of inventory","Volumes at 15 °C are the basis for inventory, sales and customs duties"],
["Losses and theft hidden","Existence of inventory","Volumes or correction tables changed in the system"],
["Selling prices not in line with the price structure","Accuracy of revenue and of receivables from the state","State compensation depends on the regulated price"],
["Inventory misvalued (weighted average cost)","Valuation","Average cost computed per product and per depot"],
["Inflated recoverable costs (upstream)","Occurrence of costs, production sharing","The operator's system allocates costs between partners"]],
[["Receipt","Volume reconciliation","Automated comparison between bill of lading volume, volume measured on receipt and transit loss tolerance","1. Note the configured tolerance. 2. Pick receipts above and below the tolerance. 3. Check the block or alert and how differences are handled.","Parameters, receipt notes, gauging reports","High tolerance without approval; differences always at the maximum"],
["Measurement","Temperature correction","Automated conversion of ambient volumes to volumes at 15 °C using standard tables","1. Check the table version and who can change it. 2. Reperform the conversion for one product and temperature. 3. Check the table change log.","Tables, recalculation, log","Table changed without an approved change"],
["Stations","Sales from pump readings","Automated sales calculation from opening and closing pump readings; alert if a reading goes backwards","1. Recompute a station's sales for one day. 2. Test entering a reading lower than the previous one (must be blocked). 3. Reconcile sales, cash collected and stock movement.","Readings, sales report, collections","Readings changed after the fact; meter reset without justification"],
["Sales","Prices","Automatic application of the regulated price in force at the delivery date","1. Compare the history of price orders with the price table. 2. Check an invoice before and after a price change.","Price orders, price table, invoices","Price change entered late"],
["Inventory","Weighted average cost","Automated average cost per product and depot at each receipt","1. Recompute the average cost after two receipts. 2. Check how gauging differences are handled.","Stock cards, recalculation","Stock differences valued at the lowest purchase cost"],
["Access","Access to volumes","Only restricted profiles can change a validated volume, with dual control and a trail","1. Extract profiles. 2. Extract the year's volume changes. 3. Check supporting documents for a sample.","Profiles, change log","Month-end changes by the same person"],
["Purchases and services","Split invoices","Automated approval thresholds and detection of split invoices","1. Note thresholds. 2. Use analytics to find invoices from the same supplier just below thresholds over a short period.","Parameters, data analysis","Invoices split to avoid higher-level approval"]],
[["Stock difference report by depot","Assessment of losses","Reconcile theoretical stock (opening + receipts − issues) with measured stock"],
["Sales report by station","Revenue","Recompute from the readings of a sample of stations"],
["Report of compensation receivables from the state","Receivables","Reconcile with volumes sold and price differences"]],
X("a station reports a closing pump reading lower than the previous day's, with the note \"meter replaced\". What should be checked?","<p>That a meter was actually replaced (technician's work order, approval), that readings of the old and new meters are documented, and that the system normally blocks a reading going backwards without this procedure. Otherwise, sales may be hidden.</p>")
));

/* ---------- Trading and industrial companies (accounting course) ---------- */
add("compta", page(
"Every trading or industrial company uses an ERP or business software for purchases, sales, payroll, fixed assets and cash. This programme covers the cycles common to almost every client: it is the foundation, to be complemented by the industry programmes.",
[["Fictitious purchases or duplicate payments","Occurrence of expenses, accuracy of payables","Fake suppliers, duplicate invoices"],
["Sales not invoiced or invoiced in error","Completeness and occurrence of revenue","Deliveries without invoices; invoices without deliveries"],
["Ghost employees, altered salaries","Occurrence of payroll expense","The employee master file and payroll are often handled by the same people"],
["Depreciation miscalculated","Valuation of fixed assets","Wrong useful lives or in-service dates"],
["Unauthorized manual journal entries","All assertions","Override of automated controls"]],
[["Purchases","Order, receipt and invoice matching (three-way match)","An invoice is payable only if it matches the order and the receipt within a tolerance","1. Note tolerances (quantity, price). 2. Test a matching invoice (accepted) and one outside tolerance (blocked). 3. Check who can release blocks.","Parameters, screenshots, profile list","Tolerances too wide; mass releases"],
["Purchases","Duplicate invoices","Block of an invoice with the same supplier, number and amount","1. Test a duplicate. 2. Use analytics to find near duplicates (slightly different number).","Screenshot, data analysis","Control on exact number only"],
["Suppliers","Supplier master file","Creation and change of bank details restricted to an independent team, with dual control and a trail","1. Extract profiles. 2. Extract the year's bank detail changes and check supporting documents.","Profiles, change log","The payables clerk can change bank details and pay"],
["Sales","Customer credit limit","Block of orders above the authorized exposure","1. Test an order above the limit. 2. List releases and who made them.","Parameters, screenshot, log","Limits left blank (unlimited)"],
["Sales","Automated invoicing","Invoice generated automatically on delivery, at the current list price","1. Check that no delivery remains uninvoiced (uninvoiced deliveries report). 2. Reperform an invoice and compare with the price list.","Report, price list, invoice","Prices editable at entry without control"],
["Payroll","Payroll calculation","Automated calculation of gross pay, contributions and tax according to scales","1. Compare configured scales with current law. 2. Recompute the payslip of one employee per category.","Scales, payslips, recalculation","Scale not updated on 1 January"],
["Payroll","Employee master file","Employee creation restricted to HR; payroll run by another person","1. Check segregation of profiles. 2. Reconcile the payroll file with the HR file; look for bank accounts shared by several employees.","Profiles, extracts, analysis","Same bank account for several employees"],
["Fixed assets","Depreciation","Automated calculation based on useful life and in-service date","1. Note useful lives by category. 2. Recompute the charge for one asset per category.","Parameters, asset cards, recalculation","Useful life entered freely by the user"],
["Accounting","Manual journal entries","Mandatory approval of manual entries above a threshold; no posting to a closed period","1. Test posting to a closed period (rejected). 2. Extract all manual entries and analyse: weekends, round amounts, unusual accounts, authors.","Parameters, screenshot, extract","Periods reopened after closing"]],
[["Customer ageing report","Bad-debt provision","Total agreed to the receivables account; ageing checked on a few invoices"],
["Manual journal entry listing","Journal entry testing (fraud)","Completeness: agree to the full general ledger"],
["Fixed asset register","Depreciation","Total agreed to fixed asset accounts"]],
X("the duplicate check only blocks invoices with an identical number. The auditor finds \"FA-1203\" and \"FA1203\" from the same supplier for the same amount, both paid. What do you conclude?","<p>The ITAC is designed too narrowly (design deficiency): it does not address the duplicate risk. The auditor extends the analysis to the whole year (same supplier and amount, similar numbers, close dates), quantifies duplicate payments, asks for their recovery and recommends widening the rule.</p>")
));
})();
