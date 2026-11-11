/* General accounting step by step: English version, part 2 (modules 8 to 13 and resources). Same order as compta-2.js. */
(function(){
const {T, E, X} = window.__GLEN;
const c = CERTS.find(x => x.id === 'compta');

c.en.modules.push(
{ day:"Day-to-day transactions", title:"Salaries and social charges", html:`
<p class="lead">Payroll is a sensitive cycle: large amounts, personal data, risk of ghost employees. You need to understand the difference between gross salary, net salary and total employer cost.</p>
<h2>1. From gross to net, and from gross to total cost</h2>
${T(["Concept","Definition"],[
["Gross salary","Base salary + bonuses + overtime + benefits"],
["Employee deductions","Social contributions borne by the employee (pension…) and income tax withheld at source"],
["Net salary payable","Gross − employee deductions: what the employee receives"],
["Employer charges","Contributions borne by the employer (pension, family benefits, work accidents…)"],
["Total employer cost","Gross + employer charges"]])}
<p>In Senegal, contributions are paid mainly to the <b>IPRES</b> (pension) and the <b>CSS</b> (family benefits and work accidents). Income tax is withheld by the employer and paid to the State. Rates and ceilings change: in the exercises below, the amounts are fictitious.</p>
<h2>2. Payroll entries</h2>
<p>Example: gross salary 500,000; employee contributions 30,000; tax withheld 20,000; net 450,000; employer charges 80,000.</p>
${E("1) Recording the salary",[["661","Direct remuneration paid to staff","500,000",""],["431","Social security (employee share)","","30,000"],["447","State, taxes withheld at source","","20,000"],["422","Staff, salaries payable","","450,000"]])}
${E("2) Employer charges",[["664","Social charges","80,000",""],["431","Social security (employer share)","","80,000"]])}
${E("3) Payment of the net salary",[["422","Staff, salaries payable","450,000",""],["521","Bank","","450,000"]])}
${E("4) Payment of social security bodies and the State",[["431","Social security","110,000",""],["447","State, taxes withheld at source","20,000",""],["521","Bank","","130,000"]])}
<h2>3. Advances</h2>
<p>An advance paid to the employee during the month is recorded as a debit to account 421 "Staff, advances". It is deducted from the net payable at month-end.</p>
<h2>4. The payroll cycle as seen by the auditor</h2>
${T(["Risk","Expected control","Audit test"],[
["Ghost employees","Creation of an employee approved by HR, separate from payroll","Match the payroll file with contracts; look for duplicate bank accounts"],
["Unauthorized salary changes","Limited access rights to the payroll module; review of changes","Extract the log of pay changes; check approvals"],
["Leavers still paid","Exit procedure linked to payroll","Compare the list of leavers with payments in the following months"],
["Under-declared social charges","Monthly payroll / returns reconciliation","Recalculate contributions on a sample"]])}
<div class="box key"><h4>Link with IT audit</h4><p>In most engagements, reviewing access to the payroll module (who can create an employee, who can change a salary, who can approve a transfer) is one of the most important ITGC tests.</p></div>
${X("gross 800,000; employee contributions 56,000; tax withheld 74,000; employer charges 120,000. Calculate the net and the total cost, then post the salary entry.","<p>Net = 800,000 − 56,000 − 74,000 = <b>670,000</b>. Total cost = 800,000 + 120,000 = <b>920,000</b>.</p>" + E("",[["661","Remuneration","800,000",""],["431","Social security","","56,000"],["447","Taxes withheld","","74,000"],["422","Salaries payable","","670,000"]]))}
`},

{ day:"Day-to-day transactions", title:"Fixed assets and depreciation", html:`
<p class="lead">A fixed asset is something used over a long period: it is not expensed on the day of purchase. Its cost is spread over its useful life through depreciation.</p>
<h2>1. Expense or fixed asset?</h2>
<p>An item is capitalized if it is intended to be used for <b>more than one financial year</b>, if it is controlled by the business and if its cost can be measured reliably. Low-value items can be expensed according to the business's policy. Examples: a truck, an IT server or ERP software are fixed assets; ink cartridges are expenses.</p>
<h2>2. Initial cost</h2>
<p>The acquisition cost includes the purchase price (after discounts), non-recoverable customs duties, transport, installation and commissioning costs. Recoverable VAT is not part of it.</p>
${E("Purchase of a server: 6,000,000 excl. VAT + installation 300,000 excl. VAT, VAT 18%, on credit",[["244","IT equipment","6,300,000",""],["4451","Recoverable VAT on fixed assets","1,134,000",""],["481","Suppliers of fixed assets","","7,434,000"]])}
<p>Note account 481: debts to suppliers of fixed assets are kept separate from ordinary suppliers (401).</p>
<h2>3. Straight-line depreciation</h2>
<p>The asset loses value as it wears out. Each year, an expense is recognized (<b>depreciation charge</b>) and the value of the asset on the balance sheet is reduced.</p>
<div class="box key"><h4>Formula</h4><p>Annual charge = (Cost − residual value) ÷ useful life. In the first year, it is calculated <b>pro rata</b> from the date the asset is put into service.</p></div>
<p>Example: the server (6,300,000) is put into service on 1 April Y, useful life 5 years, no residual value. Full annual charge = 1,260,000. Year Y: 1,260,000 × 9/12 = 945,000.</p>
${T(["Year","Charge","Accumulated depreciation","Net book value (NBV)"],[
["Y (9 months)","945,000","945,000","5,355,000"],
["Y+1","1,260,000","2,205,000","4,095,000"],
["Y+2","1,260,000","3,465,000","2,835,000"],
["Y+3","1,260,000","4,725,000","1,575,000"],
["Y+4","1,260,000","5,985,000","315,000"],
["Y+5 (3 months)","315,000","6,300,000","0"]])}
${E("Entry at 31/12/Y",[["681","Operating depreciation charges","945,000",""],["2844","Depreciation of equipment and furniture","","945,000"]])}
<p>On the balance sheet, the <b>gross</b> amount (6,300,000), the <b>depreciation</b> (945,000) and the <b>net value</b> (5,355,000) are shown.</p>
<h2>4. Other methods</h2>
<ul><li><b>Declining balance</b>: higher charges at the start (allowed for tax purposes for some assets).</li>
<li><b>Units of production</b>: according to actual use (kilometres, machine hours).</li>
<li><b>Component approach</b> (revised SYSCOHADA): when an asset has parts with different lives (an aircraft and its engines, a building and its roof), each component is depreciated over its own life.</li></ul>
<p>Land is not depreciated (except mines and quarries). If an asset's value falls sharply (breakage, obsolescence), an <b>impairment</b> is recorded in addition.</p>
<h2>5. Disposal of a fixed asset</h2>
<p>The sale of a fixed asset is a transaction <b>outside ordinary activities</b> (HAO):</p>
${E("Sale of the server on 31/12/Y+2 for 3,000,000 (VAT ignored for simplicity)",[["485","Receivables on disposals of fixed assets","3,000,000",""],["822","Proceeds from disposals of tangible fixed assets","","3,000,000"]])}
${E("Removal of the asset (after the year's depreciation charge)",[["2844","Depreciation","3,465,000",""],["812","Carrying amount of tangible fixed assets disposed of","2,835,000",""],["244","IT equipment","","6,300,000"]])}
<p>Gain = sale price − NBV = 3,000,000 − 2,835,000 = <b>165,000</b>.</p>
<h2>6. What the auditor checks</h2>
<ul><li><b>Existence</b>: physical inspection of a sample, reconciliation with the fixed asset register.</li><li><b>Rights</b>: invoices, title deeds, vehicle registration documents.</li><li><b>Valuation</b>: recalculation of depreciation, consistent useful lives, signs of impairment.</li><li><b>Classification</b>: expenses capitalized inflate profit; fixed assets expensed reduce it.</li><li>In IT audit: control of depreciation parameters in the software (useful lives, methods) and of who can change them.</li></ul>
${X("vehicle of 12,000,000 put into service on 1 July Y, depreciated straight-line over 4 years. Charge for Y and NBV at 31/12/Y+1?","<p>Annual charge = 3,000,000. Y: 3,000,000 × 6/12 = 1,500,000. Y+1: 3,000,000. Accumulated = 4,500,000. NBV = 12,000,000 − 4,500,000 = <b>7,500,000</b>.</p>")}
`},

{ day:"Day-to-day transactions", title:"Inventory", html:`
<p class="lead">Inventory has a double effect: it is an asset on the balance sheet and it changes the result. An inventory error of 10 million is a profit error of 10 million.</p>
<h2>1. Types of inventory</h2>
${T(["Account","Inventory","Example"],[
["31","Goods","Resold as they are: rice in a shop, phones at a distributor"],
["32","Raw materials and related supplies","Used to manufacture: flour in a bakery"],
["33","Other supplies","Spare parts, packaging"],
["34 / 35","Work in progress (products and services)","Manufacturing started but not finished"],
["36","Finished products","Bread out of the oven, ready to sell"]])}
<h2>2. Periodic inventory (the most common in SYSCOHADA)</h2>
<p>During the year, purchases are recorded as expenses (601, 602). Inventory is only updated at closing, after a <b>physical count</b>. The opening inventory is reversed and the closing inventory is recognized through the change in inventory account.</p>
<p>Example: opening inventory 2,000,000; purchases for the year 10,000,000; closing inventory counted 3,500,000.</p>
${E("1) Reversal of the opening inventory",[["6031","Change in inventory of goods","2,000,000",""],["31","Goods","","2,000,000"]])}
${E("2) Recognition of the closing inventory",[["31","Goods","3,500,000",""],["6031","Change in inventory of goods","","3,500,000"]])}
<p>Account 6031 has a credit balance of 1,500,000, which reduces purchases. <b>Cost of goods sold</b> = 10,000,000 + 2,000,000 − 3,500,000 = 8,500,000.</p>
<div class="box key"><h4>Why inventory affects the result</h4><p>If closing inventory is overstated by 1,000,000, cost of sales is understated by 1,000,000 and profit is <b>overstated</b> by the same amount. Inflating inventory is therefore a classic manipulation.</p></div>
<h2>3. Perpetual inventory</h2>
<p>Inventory is updated at each receipt and issue, usually by the software (ERP). The book stock is known at any time. A physical count is still mandatory at least once a year to correct differences (theft, breakage, errors).</p>
<h2>4. Valuing issues</h2>
<p>Situation: stock of 100 units at 1,000; receipt of 200 units at 1,300; issue of 150 units.</p>
${T(["Method","Calculation","Value of the issue"],[
["Weighted average cost (CMUP)","(100,000 + 260,000) ÷ 300 = 1,200 per unit","150 × 1,200 = 180,000"],
["First in, first out (FIFO)","100 units at 1,000 then 50 at 1,300","100,000 + 65,000 = 165,000"]])}
<p>Revised SYSCOHADA allows weighted average cost and FIFO. The "last in, first out" (LIFO) method is not allowed. The chosen method must be applied consistently.</p>
<h2>5. Valuation at closing</h2>
<p>Inventory is valued at the lower of <b>cost</b> and <b>net realizable value</b> (probable selling price less costs to sell). If goods are damaged, expired or out of fashion, an impairment is recognized (account 39, offset in 659).</p>
<h2>6. The auditor and inventory</h2>
<ul><li>They <b>attend the physical count</b>: they observe the procedures and make test counts, in both directions (from the list to the shelf, and from the shelf to the list).</li><li>They check <b>cut-off</b>: the last receipts and issues before and after 31/12.</li><li>They test <b>valuation</b>: purchase prices on invoices, weighted average calculation, slow-moving stock.</li><li>In IT audit: who can adjust quantities in the system, and are these adjustments approved?</li></ul>
${X("opening inventory 500,000, purchases 4,000,000, closing inventory 800,000, sales 5,000,000. Calculate the cost of goods sold and the gross margin.","<p>Cost = 4,000,000 + 500,000 − 800,000 = 3,700,000. Gross margin = 5,000,000 − 3,700,000 = <b>1,300,000</b>.</p>")}
`},

{ day:"Closing", title:"Year-end work", html:`
<p class="lead">At closing, the accounts are adjusted so that each financial year carries exactly its own expenses and income, and so that assets are not overstated. This is where judgements are concentrated, and therefore the risks of error and manipulation.</p>
<h2>1. The list of year-end tasks</h2>
<ol><li>Depreciation of fixed assets (module 9).</li><li>Physical count and change in inventory (module 10).</li><li>Impairment of doubtful receivables.</li><li>Provisions for risks and charges.</li><li>Accruals and deferrals (accrued expenses, accrued income, prepaid expenses and deferred income).</li><li>Bank reconciliations and cash count (module 7).</li><li>Calculation of income tax.</li></ol>
<h2>2. Doubtful receivables</h2>
<p>A customer in difficulty may not pay. Prudence: the receivable is isolated and impaired, on the amount <b>excluding VAT</b> (the VAT can be recovered if the loss becomes final).</p>
${E("1) Reclassification of the doubtful customer (receivable 1,180,000 incl. VAT)",[["416","Disputed or doubtful customer receivables","1,180,000",""],["411","Customers","","1,180,000"]])}
${E("2) Impairment of 50% of the amount excl. VAT (1,000,000 × 50%)",[["659","Operating impairment and short-term provision charges","500,000",""],["491","Impairment of customer accounts","","500,000"]])}
<p>If the customer finally pays, the impairment is reversed (credit to a reversal account in class 7). If the loss becomes final, the receivable is written off (account 651) and the impairment is reversed.</p>
<h2>3. Provisions for risks and charges</h2>
<p>A provision recognizes a <b>probable obligation</b> to a third party whose amount or timing is uncertain: pending lawsuit, warranties given to customers, announced restructuring. If the obligation is only possible, no provision is made but it is disclosed in the notes (contingent liability).</p>
${E("Dispute with a former employee: probable award estimated at 2,000,000",[["691","Operating provision charges","2,000,000",""],["19","Provisions for risks and charges","","2,000,000"]])}
<h2>4. Expenses and income: assigning each amount to the right year</h2>
${T(["Situation","Example","Balance sheet account"],[
["<b>Accrued expense</b>: consumed in Y, invoice received in Y+1","December electricity","408 Suppliers, invoices not yet received"],
["<b>Accrued income</b>: sold in Y, invoiced in Y+1","Delivery on 30/12 not invoiced","418 Customers, income receivable"],
["<b>Prepaid expense</b>: paid in Y, relates to Y+1","January rent paid in December","476 Prepaid expenses"],
["<b>Deferred income</b>: invoiced in Y, relates to Y+1","Annual subscription invoiced in October","477 Deferred income"]])}
${E("Accrued expense: December electricity estimated at 150,000 excl. VAT (VAT ignored for simplicity)",[["605","Other purchases (electricity)","150,000",""],["408","Suppliers, invoices not yet received","","150,000"]])}
${E("Prepaid expense: rent of 600,000 paid on 1 November for 6 months (4 months relate to Y+1)",[["476","Prepaid expenses","400,000",""],["622","Rent","","400,000"]])}
<p>On 1 January Y+1, these entries are <b>reversed</b> so that the expense falls in the right year.</p>
<div class="box key"><h4>The cut-off test</h4><p>It is one of the most frequent audit tests: the invoices and deliveries of the last fortnight of December and the first fortnight of January are examined to check that they are in the right year. Telecoms, insurers and banks have very large cut-off issues (subscriptions, premiums, accrued interest).</p></div>
<h2>5. Income tax</h2>
<p>Starting from the accounting profit, non-deductible expenses (fines, some provisions) are added back and non-taxable income is deducted: this gives the <b>taxable profit</b>. The corporate income tax rate is applied to it (in Senegal, 30% at the time of writing, with a minimum tax). Entry: debit 891 "Tax on profits", credit 441 "State, income tax".</p>
${X("an annual insurance premium of 1,200,000 is paid on 1 October Y for 12 months. What adjustment at 31/12/Y?","<p>9 months relate to Y+1: 1,200,000 × 9/12 = 900,000.</p>" + E("",[["476","Prepaid expenses","900,000",""],["625","Insurance premiums","","900,000"]]))}
${X("a customer owes 2,360,000 incl. VAT (VAT 18%). It is in receivership; the loss is estimated at 70%. Entries?","<p>Excl. VAT = 2,360,000 ÷ 1.18 = 2,000,000. Impairment = 1,400,000.</p>" + E("",[["416","Doubtful customers","2,360,000",""],["411","Customers","","2,360,000"],["659","Impairment charges","1,400,000",""],["491","Impairment of customers","","1,400,000"]]))}
`},

{ day:"Closing", title:"SYSCOHADA financial statements and intermediate balances", html:`
<p class="lead">Once the final trial balance is closed, the financial statements are built. Knowing how to read them means knowing where to look first when you open an audit file.</p>
<h2>1. The statements of the normal system</h2>
<ul><li><b>Balance sheet</b>: assets and liabilities at closing, with the previous year for comparison.</li><li><b>Income statement</b>: presented as a list, with successive balances.</li><li><b>Cash flow statement</b>: how cash changed.</li><li><b>Notes</b>: accounting policies, breakdown of items, commitments, events after the reporting date. Revised SYSCOHADA requires a large number of them.</li></ul>
<h2>2. The income statement balances</h2>
<p>The SYSCOHADA income statement calculates a cascade of balances, each identified by a code:</p>
${T(["Code","Balance","Simplified calculation","What it measures"],[
["XA","Gross margin on goods","Sales of goods − (purchases of goods ± change in inventory)","What trading brings in"],
["XB","Revenue","Sales of goods + manufactured products + work and services sold + ancillary income","The volume of activity"],
["XC","Value added","Production and margin − external consumption (purchases, transport, external services, taxes and duties, other expenses)","The wealth created by the business"],
["XD","Gross operating surplus (EBE)","Value added − staff costs","The performance of the business, before depreciation and finance"],
["XE","Operating result","EBE + reversals − depreciation, provision and impairment charges","The result of the activity"],
["XF","Financial result","Financial income − financial expenses","The cost of debt and investments"],
["XG","Result from ordinary activities (RAO)","XE + XF",""],
["XH","Result outside ordinary activities (HAO)","HAO income − HAO expenses","Non-recurring events: disposals…"],
["XI","Net result","XG + XH − employee profit-sharing − income tax","What goes to the shareholders"]])}
<h2>3. Worked example</h2>
${T(["Item","Amount"],[
["Sales of goods","50,000,000"],["Purchases of goods and change in inventory","− 32,000,000"],["<b>Gross margin (XA)</b>","<b>18,000,000</b>"],
["Transport, external services, taxes and duties","− 5,000,000"],["<b>Value added (XC)</b>","<b>13,000,000</b>"],
["Staff costs","− 6,000,000"],["<b>Gross operating surplus (XD)</b>","<b>7,000,000</b>"],
["Depreciation and provision charges","− 2,500,000"],["<b>Operating result (XE)</b>","<b>4,500,000</b>"],
["Financial expenses","− 500,000"],["<b>RAO (XG)</b>","<b>4,000,000</b>"],
["Gain on disposal (HAO)","+ 200,000"],["Income tax (30%)","− 1,260,000"],["<b>Net result (XI)</b>","<b>2,940,000</b>"]])}
<h2>4. The cash flow statement</h2>
${T(["Flow","Content"],[
["Operating activities","Overall self-financing capacity (CAFG) adjusted for the change in working capital requirement (inventory, customers, suppliers)"],
["Investing activities","Acquisitions and disposals of fixed assets"],
["Financing activities","Capital contributions, loans received and repaid, dividends paid"]])}
<p>Opening cash + sum of the three flows = closing cash. A business whose operating flows are negative several years in a row, despite profits, deserves special attention (uncollected or even fictitious sales).</p>
<h2>5. Appropriation of profit</h2>
<p>The general meeting decides what to do with the profit: legal reserve (in public limited companies, at least 10% of profit until it reaches 20% of capital), other reserves, dividends, retained earnings.</p>
${E("Appropriation of a profit of 2,940,000",[["131","Net result: profit","2,940,000",""],["111","Legal reserve","","294,000"],["465","Partners, dividends payable","","2,000,000"],["121","Retained earnings (credit)","","646,000"]])}
${X("from: revenue (services) 30 M; external consumption 12 M; staff 10 M; depreciation 3 M; interest 1 M. Calculate value added, gross operating surplus, operating result and RAO.","<p>Value added = 30 − 12 = 18 M. Gross operating surplus = 18 − 10 = 8 M. Operating result = 8 − 3 = 5 M. RAO = 5 − 1 = <b>4 M</b>.</p>")}
`},

{ day:"Audit", title:"Accounting as seen by the auditor: cycles, assertions, fraud", html:`
<p class="lead">This last module links everything you have learned to your job. An auditor does not redo the accounting: they look for where it may be wrong, and they check it.</p>
<h2>1. Assertions</h2>
<p>When management presents accounts, it implicitly asserts several things. The auditor tests each of these assertions:</p>
${T(["Assertion","Question","Example test"],[
["Existence / occurrence","Does what is recorded exist?","Customer confirmations, inspection of fixed assets"],
["Completeness","Is everything recorded?","Search for unrecorded liabilities (invoices received in January)"],
["Accuracy","Are the amounts right?","Recalculation of invoices, payroll, depreciation"],
["Cut-off","The right year?","Cut-off test"],
["Valuation","Is the value correct?","Impairment of inventory and receivables"],
["Rights and obligations","Does the business own it, is it really its debt?","Title deeds, loan agreements"],
["Presentation and disclosure","Is it properly classified and explained?","Review of the notes"]])}
<h2>2. The cycles</h2>
${T(["Cycle","Accounts concerned","Key points"],[
["Sales / customers","70, 411, 416, 491, 443","Occurrence of revenue, cut-off, collection"],
["Purchases / suppliers","60, 61, 62, 401, 408, 445","Completeness of liabilities, fictitious suppliers"],
["Inventory","31 to 39, 603","Count, valuation, obsolescence"],
["Fixed assets","20 to 29, 68, 81, 82","Existence, capitalization, depreciation"],
["Payroll / staff","66, 42, 43, 447","Ghost employees, access to the payroll module"],
["Cash","52, 57, 58","Reconciliations, bank confirmations, cash"],
["Equity and financing","10 to 19, 16","General meeting decisions, loan agreements, covenants"],
["Taxes and duties","44, 64, 89","VAT, corporate income tax, tax risks"]])}
<h2>3. Internal controls and IT controls</h2>
<p>In each cycle, a distinction is made between:</p>
<ul><li><b>manual controls</b>: approval of an invoice by a manager, review of a reconciliation;</li><li><b>automated application controls</b> (ITAC): automatic order / receipt / invoice matching ("three-way match"), blocking of a duplicate payment, automatic VAT calculation;</li><li><b>IT general controls</b> (ITGC): access management, change management, operations. If ITGCs are weak, ITACs cannot be relied on.</li></ul>
<h2>4. Signs of accounting fraud</h2>
${T(["Signal","Possible fraud"],[
["Manual entries posted after closing, at the weekend, by an executive","Management override of controls"],
["Sharp rise in sales in December, credit notes in January","Fictitious or premature sales"],
["Supplier with no address, with the same bank account as an employee","Fictitious supplier"],
["Inventory rising faster than sales","Overstated or obsolete inventory"],
["Suspense accounts (47) with old, large balances","Unsupported transactions"],
["Rising profit but negative operating cash flows","Window-dressed result"],
["Recurring \"sundry\" reconciliation differences","Misappropriation of funds"]])}
<h2>5. Data analytics on journal entries</h2>
<p>With a tool such as ACL, IDEA, Excel or Python, the auditor can analyse 100% of entries: check that each document balances, look for duplicates, gaps in numbering, round amounts, entries outside working hours, unusually active accounts, or apply Benford's law to the first digits of amounts.</p>
<div class="box key"><h4>Your advantage</h4><p>An IT auditor who understands accounting knows <b>why</b> an IT control matters: excessive access to the suppliers module is not just a technical gap, it is a risk of fraudulent payment that directly affects accounts 401 and 521.</p></div>
${X("you find that the accounts payable clerk can create a supplier, enter an invoice and approve the transfer. What risk, what assertion, what recommendation?","<p><b>Risk</b>: creation of a fictitious supplier and payment of false invoices (misappropriation). <b>Assertion</b>: occurrence/existence of expenses and liabilities. <b>Recommendation</b>: segregate duties (supplier master file created by another person, payments approved by a manager), review rights in the software, and periodically review new suppliers and changes to bank details.</p>")}
`}
);

c.en.pages = [
{ title:"Accounting glossary (A to Z)", html:`
<p class="lead">The terms you will hear at every client. Use your browser's search (Ctrl+F) to find a word.</p>
${T(["Term","Definition"],[
["Assets","All the goods and rights controlled by the business that will bring it future benefits"],
["Current assets","Items linked to the operating cycle: inventory, receivables"],
["Fixed assets","Assets intended to stay long term: land, buildings, equipment, software, equity investments"],
["Depreciation","Recognition of the wear of a fixed asset, spread over its useful life"],
["Notes","Document that explains and supplements the balance sheet and income statement"],
["Credit note","Negative invoice that cancels or reduces a previous invoice"],
["Trial balance","Table of all accounts with their totals and balances"],
["Aged balance","List of customer receivables (or supplier payables) sorted by age"],
["Working capital requirement (WCR, BFR)","Money tied up in the operating cycle: inventory + receivables − trade payables"],
["Balance sheet","Statement of assets at a date: assets on one side, equity and liabilities on the other"],
["Self-financing capacity (CAF)","Resources generated by the business, available to invest, repay or distribute"],
["Equity","Resources belonging to the partners: capital, reserves, result"],
["Expense","Consumption that makes the business poorer over the year"],
["Accrued expense","Expense of the year whose invoice has not yet been received"],
["Prepaid expense","Expense paid during the year that relates to the following year"],
["Revenue","Amount of sales of goods and services from ordinary activities"],
["Confirmation","Request for written confirmation sent by the auditor to a third party (bank, customer, supplier, lawyer)"],
["Closing","End of the financial year, usually 31 December"],
["CMUP","Weighted average unit cost: an inventory valuation method"],
["Statutory auditor","Legal auditor who certifies a company's accounts"],
["Control / subsidiary account","General account grouping all customers (411) / individual sub-account for each customer"],
["Reversal","Opposite entry that cancels a previous entry"],
["Receivable","Amount owed to the business by a third party"],
["Credit","Right-hand column of an account"],
["VAT credit","Recoverable VAT higher than VAT invoiced"],
["Cut-off","Separation of financial years: assigning each transaction to the right period"],
["Debit","Left-hand column of an account"],
["Impairment","Loss of value of an asset, probable but not final"],
["Dividend","Share of profit distributed to partners"],
["Charge (provision charge)","Expense recognized for depreciation, impairment or a provision"],
["EBE","Gross operating surplus: economic performance before depreciation, finance and taxes"],
["Entry","Recording of a transaction in the journal, with equal debits and credits"],
["Financial year","12-month accounting period"],
["Working capital","Stable resources − fixed assets"],
["General ledger","All accounts with the detail of all their movements"],
["HAO","Outside ordinary activities: non-recurring transactions (disposals, exceptional losses)"],
["Excl. VAT / incl. VAT","Before tax / all taxes included"],
["IFRS","International accounting standards"],
["True and fair view","Objective of the accounts: to reflect the reality of assets, financial position and result"],
["Fixed asset","Long-lived asset used by the business for more than one year"],
["Inventory / stocktaking","Physical count of assets (inventory, cash, fixed assets) and all year-end work"],
["Journal","Chronological record of entries"],
["Matching (lettering)","Matching an invoice with its payment in a third-party account"],
["Gross margin on goods","Sales of goods − cost of goods sold"],
["OD","Miscellaneous operations: journal for entries that are neither purchases, sales nor cash"],
["OHADA","Organization for the Harmonization of Business Law in Africa"],
["Double entry","Principle by which each transaction affects at least two accounts, debit = credit"],
["Liabilities and equity","The business's resources: equity and debts"],
["FIFO (PEPS)","First in, first out: an inventory valuation method"],
["Supporting document","Document proving a transaction: invoice, statement, contract"],
["Gain / loss on disposal","Positive / negative difference between sale price and net book value"],
["Income","Resource that makes the business richer over the year"],
["Deferred income","Income invoiced during the year that relates to the following year"],
["Provision","Liability whose timing or amount is uncertain (dispute, warranty)"],
["Bank reconciliation","Comparison of the business's bank account with the bank statement"],
["Retained earnings","Undistributed profits or uncleared losses from previous years"],
["Legal reserve","Part of the profit that the law requires to be kept"],
["Result","Income − expenses: profit or loss"],
["Balance","Difference between total debits and total credits of an account"],
["SYSCOHADA","OHADA accounting system: chart of accounts and presentation rules"],
["Cash flow statement","Statement explaining the change in cash"],
["Net cash","Cash assets − cash liabilities"],
["VAT","Value added tax, paid by the final consumer and collected by businesses"],
["Value added","Wealth created by the business: production − consumption from third parties"],
["Net book value (NBV)","Cost of an asset − accumulated depreciation and impairment"],
["Change in inventory","Opening inventory − closing inventory: adjusts purchases to obtain cost of sales"]])}
`},
{ title:"Recognized accounting certifications", html:`
<p class="lead">Here are the most recognized accounting and finance certifications in the world, and those that make most sense for an IT auditor. Conditions (exams, fees, required experience) change: always check the body's website before registering.</p>
${T(["Certification","Body","For whom?","Content in brief"],[
["<b>ACCA</b>","Association of Chartered Certified Accountants (United Kingdom)","Accountants and auditors who want an international qualification, highly recognized in Africa","Up to 13 exams (applied knowledge, applied skills, strategic professional) + ethics module + work experience. IFRS and ISA standards"],
["<b>ACCA DipIFR</b>","ACCA","Professionals who want to master IFRS without taking the full ACCA","A single exam on IFRS"],
["<b>CPA (United States)</b>","AICPA and NASBA, licence issued by each US state","Career in audit and accounting under US standards","Three core exams (audit, financial accounting, tax and law) + one discipline of choice, including <b>ISC (Information Systems and Controls)</b>, very close to IT audit. Demanding education requirements"],
["<b>CIA</b>","Institute of Internal Auditors (IIA)","Internal auditors","Three parts: essentials of internal auditing, practice of internal auditing, business knowledge. Very useful alongside the CISA"],
["<b>CMA</b>","Institute of Management Accountants (IMA, United States)","Management control, corporate finance","Two parts: financial planning, performance and analytics; strategic financial management"],
["<b>CFA</b>","CFA Institute","Financial analysis, portfolio management, investment banking","Three successive, very demanding levels"],
["<b>DCG, DSCG then DEC</b>","French State diplomas","Path to chartered accountancy in France","Bachelor level (DCG), master level (DSCG), then a three-year traineeship and the chartered accountancy diploma (DEC)"],
["<b>Chartered accountancy in the WAEMU / OHADA area</b>","National institutes (in Senegal: ONECCA) and regional schemes","Practising as a chartered accountant or statutory auditor registered in Senegal","Recognized chartered accountancy diploma + traineeship + registration with the Institute. Check with ONECCA on the accepted diplomas and current conditions"]])}
<h2>What to choose as an IT auditor?</h2>
<ol>
<li><b>Short term</b>: keep the IT momentum (ISO 27001, CISA). The CISA remains the reference certification for your job.</li>
<li><b>To strengthen the accounting side</b>: the <b>ACCA DipIFR</b> (a single exam) or the first ACCA exams give you an international accounting base recognized by firms.</li>
<li><b>To move towards internal audit or risk management</b>: the <b>CIA</b> combined with the CISA is a highly sought-after profile in banks and large groups.</li>
<li><b>For an international career in a firm</b>: the full <b>ACCA</b>, or the <b>CPA</b> with the ISC discipline if you are aiming at the United States.</li>
</ol>
<div class="box tip"><h4>Suggestion</h4><p>Tell me which one interests you: I can prepare a dedicated course and quiz path, as for the cyber certifications.</p></div>
`}
];
})();
