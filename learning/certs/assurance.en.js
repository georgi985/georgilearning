/* Insurance (CIMA zone): English version of the course. Same module order as assurance.js.
   The French acronyms used in the CIMA zone (PPNA, PSAP, IARD) are kept in brackets. */
(function(){
const {T, E, X} = window.__GLEN;

const modules = [
{ day:"Understand", title:"The insurer's business and the reversed cycle", html:`
<p class="lead">An insurer sells a promise: to pay if an uncertain event occurs. It collects the money first and only learns its real cost later. This feature changes the whole of the accounting.</p>
<h2>1. The principle of risk pooling</h2>
<p>A thousand car owners each pay 100,000 a year. The insurer collects 100 million. Statistically, about fifty accidents will cost on average 1.4 million each, i.e. 70 million. Everyone's premiums pay for the claims of a few: this is <b>risk pooling</b>. The rest covers expenses and the margin.</p>
<h2>2. The reversed production cycle</h2>
<p>In an ordinary business, the cost of a product is known before its price is set. In insurance, it is the opposite: the <b>premium</b> (the price) is set before the real cost of <b>claims</b> is known. A year's result therefore depends on estimates, in particular the <b>technical provisions</b>. This is the auditor's main area of judgement.</p>
<h2>3. The two main families</h2>
${T(["Line","Content","Length of commitments"],[
["Non-life (IARD: fire, accident and miscellaneous risks)","Motor (compulsory), fire, home and business multi-risk, marine and transport, liability, health, engineering risks","Short: usually one year, but some claims (bodily injury, liability) are settled over several years"],
["Life and capitalization","Savings, retirement, death cover, loan insurance, protection","Long: several years or even decades"]])}
<p>In the CIMA zone, the same company cannot write both life and non-life business: they are separate companies, often in the same group.</p>
<h2>4. The players</h2>
${T(["Player","Role"],[
["Insurer","Bears the risk, collects premiums, pays claims"],
["General agent","Represents one company and sells its policies, paid by commission"],
["Broker","Represents the client and compares companies; often collects premiums before passing them on"],
["Bancassurance","Insurance sold by banks (loan insurance, savings)"],
["Reinsurer","The insurers' insurer: takes part of the risks in exchange for part of the premiums"],
["CIMA","Inter-African Conference on Insurance Markets: 14 West and Central African States, including Senegal, with a common code and common supervision"],
["National insurance directorate","National supervisory administration, working with the CIMA"]])}
<h2>5. Basic vocabulary</h2>
${T(["Term","Meaning"],[
["Policyholder / insured / beneficiary","The one who signs and pays / the one whose person or property is covered / the one who receives the payment"],
["Policy","The insurance contract"],
["Premium (or contribution)","Price paid by the insured"],
["Claim","Occurrence of the covered risk: accident, fire, death"],
["Deductible (excess)","Part of the loss borne by the insured"],
["Sum insured / limit","Maximum amount the insurer will pay"],
["Accident year","Year in which the claim occurred"]])}
`},

{ day:"Understand", title:"Premiums, claims and underwriting result", html:`
<p class="lead">An insurer's income statement is organized around two flows: premiums coming in and claims going out.</p>
<h2>1. Written premiums and earned premiums</h2>
<p>A motor policy of 120,000 is taken out on 1 October Y for one year. The premium is <b>written</b> in full in Y, but only 3 months of cover relate to Y. The premium <b>earned</b> in Y is 30,000. The remaining 90,000 goes into the <b>unearned premium reserve</b> (PPNA): it will be earned in Y+1.</p>
${E("Writing the premium (taxes ignored for simplicity)",[["Policyholders","Receivable from the insured","120,000",""],["Written premiums","Income","","120,000"]])}
${E("At 31/12/Y: recognizing the unearned premium reserve",[["Change in unearned premium reserve","Expense (reduces earned premiums)","90,000",""],["Unearned premium reserve (PPNA)","Technical provision (liability)","","90,000"]])}
<h2>2. The prior payment rule</h2>
<p>Since the reform of the CIMA Code (article 13), cover only takes effect after <b>payment of the premium</b>, with limited exceptions. The aim was to end the huge premium arrears that weakened companies. For the auditor: large, old receivables from policyholders are a warning sign.</p>
<h2>3. The cost of claims</h2>
<p>Claims expense for the year = claims paid + change in the outstanding claims reserve (PSAP) + claims handling costs − recoveries received.</p>
<h2>4. The indicators</h2>
${T(["Indicator","Calculation","Reading"],[
["Loss ratio (S/P)","Claims expense ÷ earned premiums","A loss ratio of 65%: 65 of claims for 100 of premiums"],
["Expense ratio","Overheads and commissions ÷ earned premiums",""],
["Combined ratio","Loss ratio + expense ratio","Above 100%: the insurance business loses money, only investment income can make up for it"],
["Underwriting result","Earned premiums − claims expense − expenses + allocated investment income ± reinsurance balance",""]])}
<h2>5. Investment income</h2>
<p>The insurer collects premiums before paying claims: it invests this money (government bonds, term deposits, real estate, shares). These investments are strictly governed by the CIMA Code.</p>
${X("earned premiums 800 M; claims paid 400 M; outstanding claims reserve up 120 M; commissions and expenses 260 M. Calculate the loss ratio and the combined ratio.","<p>Claims expense = 400 + 120 = 520 M. Loss ratio = 520 ÷ 800 = <b>65%</b>. Expense ratio = 260 ÷ 800 = 32.5%. Combined ratio = <b>97.5%</b>: the business is just profitable before investment income.</p>")}
`},

{ day:"Understand", title:"Technical provisions: the heart of the audit", html:`
<p class="lead">Technical provisions represent what the insurer still owes its policyholders. They are often the largest item on the liability side. Understating them flatters the result and hides insolvency.</p>
<h2>1. The main provisions</h2>
${T(["Provision","Line","What it covers"],[
["Unearned premium reserve (PPNA)","Non-life","The part of written premiums that relates to future cover"],
["Unexpired risk reserve","Non-life","The top-up if the unearned premium reserve is not enough to cover future claims (inadequate pricing)"],
["Outstanding claims reserve (PSAP)","Non-life (and life for reported deaths)","Claims that have occurred and are not yet settled, including those not yet reported"],
["Mathematical reserve","Life","The value of the insurer's commitments to policyholders minus that of the policyholders' commitments"],
["Profit-sharing reserve","Life","Profits to be paid back to policyholders"]])}
<h2>2. The unearned premium reserve in practice</h2>
<p>Calculated <b>pro rata temporis</b>, policy by policy: premium × number of days remaining after the closing date ÷ number of days in the period covered. An auditor recalculates it across the whole portfolio from the policy extraction.</p>
<h2>3. The outstanding claims reserve in practice</h2>
<p>It includes:</p>
<ul><li><b>open files</b>: each reported claim is assessed by a claims handler (expert report, quote, court decision);</li><li><b>late claims</b> (IBNR, "incurred but not reported"): estimated statistically;</li><li>future <b>handling costs</b>.</li></ul>
<h2>4. Run-off triangles</h2>
<p>To estimate how claims develop, actuaries build triangles: rows are accident years, columns are development years, and the cells hold cumulative payments. You observe how a year's claims "mature" and project those of recent years (Chain Ladder method).</p>
${T(["Accident year","After 1 year","After 2 years","After 3 years"],[
["Y−2","100","150","165"],
["Y−1","120","180","?"],
["Y","130","?","?"]])}
<p>Observed factors: 150 ÷ 100 = 1.50 from year 1 to 2 (and 180 ÷ 120 = 1.50); 165 ÷ 150 = 1.10 from year 2 to 3. Projection: Y−1 → 180 × 1.10 = 198; Y → 130 × 1.50 × 1.10 = 214.5.</p>
<h2>5. Run-off surplus / deficit</h2>
<p>Each year, the provision set aside for old claims is compared with what they actually cost. If the provision was too high: <b>surplus</b>. Too low: <b>deficit</b>. Repeated deficits show that the insurer under-reserves: it is an indicator widely used by auditors and the regulator.</p>
<div class="box key"><h4>Audit tests on provisions</h4><ul><li>Recalculation of the unearned premium reserve on 100% of policies.</li><li>Sample of claim files: supporting documents, up-to-date assessment, files with no movement for a long time.</li><li>Analysis of run-off surpluses / deficits over several years.</li><li>Review of the actuary's work (methods, assumptions, data used).</li><li>Data completeness: are all the claims in the system in the extraction used by the actuary?</li></ul></div>
${X("a policy of 365,000 covers 1 September Y to 31 August Y+1. Calculate the unearned premium reserve at 31/12/Y.","<p>Days remaining after 31/12: from 1 January to 31 August Y+1 = 243 days. Unearned premium reserve = 365,000 × 243 ÷ 365 = <b>243,000</b>.</p>")}
`},

{ day:"Risks", title:"Reinsurance, solvency and investments", html:`
<p class="lead">An insurer does not keep all its risks: it cedes part of them to reinsurers. And the regulator checks that it has enough capital and quality assets to keep its promises.</p>
<h2>1. Forms of reinsurance</h2>
${T(["Form","Principle","Example"],[
["Quota share (proportional)","The reinsurer takes a fixed percentage of each risk, premiums and claims","40% of all fire policies: it receives 40% of premiums and pays 40% of claims"],
["Surplus (proportional)","The insurer keeps a maximum amount per risk, the reinsurer takes the surplus","Retention of 500 M per plant; on a 2 billion plant, the reinsurer takes 75%"],
["Excess of loss (non-proportional)","The reinsurer pays the part of a claim above a threshold","Above 300 M per claim, up to 2 billion"],
["Stop loss","Protection if total claims for the year exceed a threshold",""]])}
<p>In exchange, the reinsurer often pays a <b>reinsurance commission</b> to the insurer. Accounts with reinsurers (ceded premiums, claims recoverable, deposits) must be reconciled and confirmed.</p>
<h2>2. The solvency margin</h2>
<p>The insurer must hold a <b>solvency margin</b> (equity and similar items) at least equal to a minimum calculated from its premiums or claims (non-life) or its mathematical reserves (life). The CIMA also sharply raised companies' <b>minimum capital</b> in its last major reform.</p>
<h2>3. Coverage of regulated commitments</h2>
<p>Technical provisions must be <b>covered</b> by equivalent, safe and liquid assets owned by the insurer: government bonds, bank deposits, real estate, listed shares… The Code sets the list of admitted assets, limits by category and location rules (a significant share must be invested in the country). The coverage statement is sent to the regulator.</p>
<div class="box key"><h4>Why it matters</h4><p>An insurer can show a profit while holding insufficient or illiquid assets (old receivables from policyholders, overvalued real estate): it could not pay claims. The regulator can then impose a recovery plan, or even withdraw the licence.</p></div>
${X("a non-life insurer has a retention of 200 M per risk under a surplus treaty, with a capacity of 9 lines. A plant is insured for 1 billion. What share is ceded?","<p>The insurer keeps 200 M; the reinsurer takes 800 M (within the limit of 9 × 200 = 1,800 M). Share ceded = 800 ÷ 1,000 = <b>80%</b>. On a 100 M claim, the reinsurer pays 80 M.</p>")}
`},

{ day:"Risks", title:"Fraud, intermediaries and internal control", html:`
<p class="lead">Insurance is exposed to fraud by policyholders, intermediaries and staff. Many of these risks are handled by controls in the policy administration system.</p>
<h2>1. Policyholder fraud</h2>
<ul><li>Fictitious or deliberately caused claim.</li><li>Inflated claim (overpriced garage quotes, fictitious medical bills).</li><li>False statement at underwriting (hiding a past event).</li><li>Taking out cover after the loss (backdating the contract).</li></ul>
<h2>2. Internal and intermediary fraud</h2>
${T(["Scheme","Expected control"],[
["An intermediary collects premiums and does not pass them on","Reconciliation of intermediary accounts, reminders, confirmations"],
["A policy is cancelled after the premium has been collected","Cancellations subject to approval, review of cancellations"],
["A claims handler creates a fictitious claim and pays an accomplice","Segregation between opening, assessment and payment; control of payees"],
["The sum insured is changed after a claim","Endorsement history, date checks"],
["A claim is paid on an unpaid policy","System block if the premium has not been collected (article 13)"]])}
<h2>3. Controls in the policy administration system</h2>
<ul><li>A motor insurance certificate cannot be issued without payment.</li><li>Consistency check: date of loss after the effective date and within the period of cover.</li><li>Settlement limits per claims handler, with management approval above them.</li><li>Duplicate detection (same vehicle, same date, same payee).</li><li>Traceability of all changes to policies and claims.</li></ul>
${X("an analysis shows 40 paid claims whose date of loss is a few days earlier than the policy start date. What do you conclude?","<p>These claims should not have been covered: either the policy start date was changed (backdating), or the consistency check does not exist in the system. Identify who entered and approved these files, check the payments and their payees, and recommend a blocking control in the system and a review of the rights to change dates.</p>")}
`},

{ day:"IT audit", title:"The insurer's information system and the audit programme", html:`
<p class="lead">Policies, premiums, claims, commissions, reinsurance and provisions are all calculated from the policy administration system. The IT auditor checks its reliability.</p>
<h2>1. The applications</h2>
${T(["Application","Content"],[
["Policy administration","Clients, policies, endorsements, premiums, premium notices, collections"],
["Claims management","Notifications, assessments, settlements, recoveries"],
["Commissions","Calculation of intermediaries' commissions"],
["Reinsurance","Treaties, cessions, accounts with reinsurers"],
["Actuarial tools","Calculation of provisions (often in files or tools outside the main system)"],
["Accounting and CIMA reporting","Regulatory statements, coverage statement, solvency margin"]])}
<h2>2. ITGC and application tests</h2>
${T(["Area","Test"],[
["Access","Who can create a policy, change a premium, open and pay a claim? Segregation of duties"],
["Changes","Changes to rates, to the unearned premium reserve and commission calculation rules: approval and testing"],
["Interfaces","Administration → accounting: written premiums and claims paid equal in both systems"],
["Actuarial data","Is the extraction sent to the actuary complete? Control totals"],
["Calculations","Recalculation of the unearned premium reserve and commissions on 100% of the portfolio"]])}
<h2>3. Useful data analytics</h2>
<ul><li>Policies issued without payment, especially in motor.</li><li>Mass cancellations at the start of the following year (premiums inflated at closing).</li><li>Claims with no movement for more than two years but still reserved.</li><li>Settlement payees identical to employees or intermediaries.</li><li>Claims reported just after the policy was taken out.</li></ul>
<h2>4. Premium cut-off</h2>
<p>Premiums written in December with an effective date in January relate to Y+1. Premiums to be cancelled for terminated policies must be provided for. A cut-off test on endorsements and premium notices around the closing date is essential.</p>
<div class="box key"><h4>Key takeaway</h4><p>In an insurance company, the IT audit mainly serves to give confidence in <b>three populations of data</b>: policies (for premiums and the unearned premium reserve), claims (for the outstanding claims reserve) and commissions. If these data are reliable, the financial auditor and the actuary can rely on them.</p></div>
`}
];

const c = CERTS.find(x => x.id === "assurance");
c.en = {
  title:"Insurance", org:"Business sector · CIMA zone",
  intro:"Understand how an insurance company works (non-life and life), its vocabulary, technical provisions, reinsurance, CIMA regulation and the audit of its systems.",
  exam:`<p>Internal campus knowledge test: 25 random questions, 35 minutes, recommended pass mark 70%.</p>`,
  modules,
  pages:[{ title:"Insurance glossary", html:`
${T(["Term","Definition"],[
["Endorsement","Change to a contract in force"],
["Beneficiary","Person who receives the payment or the capital"],
["Run-off surplus / deficit","Favourable / unfavourable difference between a claim's provision and its real cost"],
["Chain Ladder","Statistical method projecting claims from triangles"],
["CIMA","Inter-African Conference on Insurance Markets"],
["Co-insurance","Sharing a risk between several insurers"],
["Broker","Intermediary appointed by the client"],
["Deductible","Part of the loss borne by the insured"],
["IARD","Fire, accident and miscellaneous risks (non-life)"],
["IBNR","Claims incurred but not yet reported"],
["Solvency margin","Minimum capital required by the regulator"],
["Risk pooling","Everyone's premiums pay for the claims of a few"],
["Policy","Insurance contract"],
["PPNA","Unearned premium reserve"],
["Earned / written premium","Share of the premium relating to the elapsed period / premium invoiced"],
["Mathematical reserve","The life insurer's commitment to its policyholders"],
["PSAP","Outstanding claims reserve"],
["Premium notice","Notice of premium due or receipt of payment"],
["Combined ratio","Loss ratio + expense ratio"],
["Recovery","Amount recovered from the party responsible for the loss or its insurer"],
["Reinsurance","Insurance for insurers"],
["Retention","Share of the risk kept by the insurer"],
["S/P","Loss ratio (claims to premiums)"],
["Claim","Occurrence of the insured risk"],
["Policyholder","Person who signs the contract and pays the premium"],
["Run-off triangle","Table showing how claims develop by accident year"]])}
`}]
};
})();
