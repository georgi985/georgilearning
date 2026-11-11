/* General accounting step by step (revised SYSCOHADA): English version, part 1 (modules 1 to 7).
   Same module order as compta.js. Amounts are in CFA francs and fictitious. */
(function(){
const {T, E, X} = window.__GLEN;

const modules = [
{ day:"Basics", title:"What is accounting for? The OHADA framework", html:`
<p class="lead">Accounting is the language of business. It records every transaction that has a money value, then summarizes it in statements that everyone can read: managers, bankers, tax authorities, shareholders and auditors.</p>
<h2>1. A simple idea</h2>
<p>Imagine a shop. Every day it buys goods, resells them, pays rent, collects money, pays salaries. If all of this is written down in an orderly way, three questions can be answered:</p>
<ol><li><b>What does the business own and what does it owe?</b> That is the <b>balance sheet</b>.</li><li><b>Did it make or lose money over the year?</b> That is the <b>income statement</b>.</li><li><b>Where did the money come from and where did it go?</b> That is the <b>cash flow statement</b>.</li></ol>
<p>General (or financial) accounting produces these documents in a standardized way, so that two different businesses can be compared.</p>
<h2>2. Who uses the accounts?</h2>
${T(["User","What they look for"],[
["Managers","Steering: margin, costs, available cash"],
["Shareholders and partners","Whether the business is profitable and how much it can distribute"],
["Banks","Deciding on a loan: repayment capacity, indebtedness"],
["Tax authorities","Calculating corporate income tax and checking VAT"],
["Employees, suppliers, customers","Judging the soundness of the business"],
["Statutory auditor","Certifying that the accounts are regular, sincere and give a true and fair view"]])}
<h2>3. The legal framework: OHADA and SYSCOHADA</h2>
<p>Senegal is a member of <b>OHADA</b> (Organization for the Harmonization of Business Law in Africa), which brings together 17 West and Central African States. OHADA adopts <b>Uniform Acts</b>, directly applicable in each member State.</p>
<ul>
<li>The <b>Uniform Act on accounting law and financial reporting</b> (AUDCIF), adopted in 2017, sets the accounting rules. It has applied since 1 January 2018 for individual accounts and since 2019 for consolidated accounts.</li>
<li>It comes with the <b>revised OHADA accounting system</b> (revised SYSCOHADA): the chart of accounts, how each account works, the financial statement templates.</li>
<li>Listed entities or those that raise funds from the public must also prepare consolidated accounts under <b>IFRS</b> (international standards).</li>
<li>Banks (WAMU banking chart of accounts), insurers (CIMA code) and decentralized financial systems have their own frameworks. You will see them in the sector courses.</li>
</ul>
<h2>4. The two SYSCOHADA systems</h2>
${T(["System","For whom?","What is produced"],[
["Normal system","The vast majority of companies","Balance sheet, income statement, cash flow statement, notes"],
["Minimal cash system (SMT)","Very small entities whose revenue is below the thresholds set by the Uniform Act","Simplified receipts and payments accounting"]])}
<h2>5. The financial year</h2>
<p>The accounts are closed at the end of a 12-month period called the <b>financial year</b>. In the OHADA area, the financial year normally matches the calendar year: from 1 January to 31 December. The end of the year is called the <b>closing</b>. The financial statements must then be drawn up by management and approved by the shareholders' meeting.</p>
<h2>6. The main accounting principles</h2>
<p>These principles guide every decision. An auditor refers to them constantly.</p>
${T(["Principle","In plain words","Example"],[
["Going concern","It is assumed that the business will continue to operate","If bankruptcy is likely, assets are no longer valued in the same way"],
["Prudence","An uncertain gain is not counted, but a probable loss is taken into account","A customer in difficulty: the receivable is impaired"],
["Historical cost","An asset is recorded at its purchase price","Land bought for 10 million stays at 10 million, even if it is worth more today"],
["Accrual (period cut-off)","Each expense and income item is assigned to the year it relates to","December's electricity bill, received in January, is a December expense"],
["Consistency of methods","The same methods are kept from one year to the next","The depreciation period is not changed to flatter profit"],
["Opening balance sheet continuity","A year's opening balance sheet equals the previous year's closing balance sheet","No \"hidden\" entries between two years"],
["No offsetting","A debt is not offset against a receivable, nor an expense against income","A customer who is also a supplier appears on both sides"],
["Materiality","Anything that could influence a reader's decision must be presented","A significant dispute is explained in the notes"],
["Substance over form","Economic reality is reflected, not only the legal form","An asset leased with a highly probable purchase option is treated as an asset bought on credit (finance lease)"]])}
<div class="box key"><h4>Why it matters for an auditor</h4><p>The statutory auditor certifies that the accounts are <b>regular</b> (compliant with the rules), <b>sincere</b> (applied in good faith) and give a <b>true and fair view</b> of the assets, financial position and results. Every anomaly you find can be explained by one of these principles.</p></div>
<div class="box tip"><h4>How to work</h4><p>In this course, each module ends with worked exercises. Always try the exercise on paper before opening the answer: it is the only way to learn accounting.</p></div>
`},

{ day:"Basics", title:"The balance sheet and the income statement: the photo and the film", html:`
<p class="lead">The balance sheet is a <b>photo</b> of the business at a given date. The income statement is the <b>film</b> of the year: everything that made the business richer or poorer.</p>
<h2>1. The balance sheet: what the business has and what it owes</h2>
<p>The balance sheet has two columns:</p>
<ul><li>On the left, <b>assets</b>: everything the business owns or controls and that will bring it money (buildings, equipment, inventory, receivables from customers, money in the bank).</li>
<li>On the right, <b>liabilities and equity</b>: where the resources that financed these assets came from (partners' contributions, retained profits, loans, debts to suppliers and the State).</li></ul>
<div class="box key"><h4>The fundamental equation</h4><p><b>Assets = Equity + Liabilities</b>. The balance sheet always balances, because everything the business owns was financed by someone: either its owners or third parties.</p></div>
<h2>2. Example: Fatou's shop</h2>
<p>Fatou opens a shop. She contributes 3,000,000 CFA francs of her savings and borrows 2,000,000 from the bank. She buys a refrigerator for 1,500,000 and goods for 1,000,000. 2,500,000 remains in the bank.</p>
${T(["Assets","Amount","Equity and liabilities","Amount"],[
["Equipment (refrigerator)","1,500,000","Capital (Fatou's contribution)","3,000,000"],
["Inventory of goods","1,000,000","Bank loan","2,000,000"],
["Bank","2,500,000","",""],
["<b>Total assets</b>","<b>5,000,000</b>","<b>Total equity and liabilities</b>","<b>5,000,000</b>"]])}
<h2>3. How the SYSCOHADA balance sheet is organized</h2>
${T(["Assets (uses)","Equity and liabilities (resources)"],[
["<b>Fixed assets</b>: long-lived assets (land, buildings, equipment, software, equity investments)","<b>Equity</b>: capital, reserves, retained earnings, profit for the year, investment grants"],
["<b>Current assets</b>: inventory, trade receivables, other receivables","<b>Financial debts</b>: loans over one year, finance lease liabilities, provisions for risks"],
["<b>Cash assets</b>: bank, cash on hand, short-term investments","<b>Current liabilities</b>: suppliers, tax and social security payables, other payables"],
["","<b>Cash liabilities</b>: bank overdrafts, short-term credit"]])}
<p>Equity + financial debts = <b>stable resources</b>. They should finance fixed assets (a balance rule you will see in the finance course).</p>
<h2>4. The income statement: expenses and income</h2>
<ul><li>An <b>expense</b> makes the business poorer: purchases, rent, salaries, taxes and duties, interest, wear and tear of equipment (depreciation).</li>
<li>An <b>income</b> item makes it richer: sales, services, interest received, operating grants.</li></ul>
<div class="box key"><h4>The result</h4><p><b>Result = Income − Expenses</b>. Positive: profit. Negative: loss. The result also appears in the equity section of the balance sheet. It is the link between the two documents.</p></div>
<h2>5. The example continued</h2>
<p>During the first month, Fatou sells for 1,600,000 goods that had cost her 1,000,000. She pays 200,000 rent and 150,000 for electricity and transport.</p>
${T(["Expenses","Amount","Income","Amount"],[
["Cost of goods sold","1,000,000","Sales of goods","1,600,000"],
["Rent","200,000","",""],
["Electricity and transport","150,000","",""],
["<b>Result (profit)</b>","<b>250,000</b>","",""],
["<b>Total</b>","<b>1,600,000</b>","<b>Total</b>","<b>1,600,000</b>"]])}
<p>On the balance sheet, the bank becomes 2,500,000 + 1,600,000 − 200,000 − 150,000 = 3,750,000 and inventory falls to zero. Equity becomes 3,000,000 + 250,000 = 3,250,000. Total assets: 1,500,000 + 3,750,000 = 5,250,000; total equity and liabilities: 3,250,000 + 2,000,000 = 5,250,000. The balance holds.</p>
<h2>6. Do not confuse profit and cash</h2>
<p>A business can be <b>profitable but have no money</b> (its customers have not paid yet) or <b>have money while losing</b> (it has just borrowed). An auditor always checks both: the result says whether the business is profitable, cash says whether it can pay its debts on time.</p>
${X("classify these items as assets or liabilities: rice inventory, bank loan, computer, debt to a supplier, receivable from a customer, capital, cash balance, VAT payable to the State.",
"<p><b>Assets</b>: rice inventory (current asset), computer (fixed asset), customer receivable (current asset), cash (cash asset).</p><p><b>Equity and liabilities</b>: bank loan (financial debt), supplier debt (current liability), capital (equity), VAT payable (current liability, tax payable).</p>")}
${X("a business has 12 million of assets and 7 million of liabilities. What is its equity?","<p>Equity = Assets − Liabilities = 12 − 7 = <b>5 million</b>.</p>")}
`},

{ day:"Basics", title:"Double entry: debit, credit and T-accounts", html:`
<p class="lead">This is the most important module of the course. Once you know how to post a double entry, everything else is just application.</p>
<h2>1. The double-entry principle</h2>
<p>Every transaction has <b>two sides</b>: a resource on one side, a use on the other. When Fatou pays her rent in cash, cash decreases <i>and</i> a rent expense appears. At least two accounts are therefore always recorded, and <b>total debits always equal total credits</b>.</p>
<h2>2. The T-account</h2>
<p>An account is drawn as a T. The left column is called <b>debit</b>, the right one <b>credit</b>. These words have nothing to do with "owing" or "receiving" in everyday language: they are just sides.</p>
<pre style="background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:12px;overflow-x:auto">        521 Bank
   Debit          |   Credit
   -------------- | --------------
   + 3,000,000    |   − 200,000
   (inflows)      |   (outflows)
   Debit balance: 2,800,000</pre>
<p>The <b>balance</b> of an account is the difference between total debits and total credits. If debits are larger, the balance is a <b>debit</b> balance; otherwise it is a <b>credit</b> balance.</p>
<h2>3. The rule to learn by heart</h2>
${T(["Type of account","It increases on the…","It decreases on the…","Normal balance"],[
["Assets (fixed assets, inventory, customers, bank, cash)","<b>Debit</b>","Credit","Debit"],
["Liabilities and equity (capital, loans, suppliers, State)","<b>Credit</b>","Debit","Credit"],
["Expenses (purchases, rent, salaries)","<b>Debit</b>","Credit","Debit"],
["Income (sales, services)","<b>Credit</b>","Debit","Credit"]])}
<div class="box key"><h4>Memory aid</h4><p>"<b>What I receive, I debit; what I give, I credit.</b>" When the business receives an asset, money or a service, the account that represents it is debited. The account that "supplies" it is credited.</p></div>
<h2>4. The method in four questions</h2>
<ol><li>Which accounts does the transaction affect?</li><li>Is each account an asset, a liability, an expense or an income?</li><li>Does it increase or decrease?</li><li>So: debit or credit? Check that debit = credit.</li></ol>
<h2>5. Six transactions explained</h2>
${E("a) Fatou deposits 3,000,000 in the bank to set up the company",[["521","Bank (asset increasing)","3,000,000",""],["101","Share capital (equity increasing)","","3,000,000"]])}
${E("b) The bank lends 2,000,000",[["521","Bank","2,000,000",""],["162","Loans from credit institutions","","2,000,000"]])}
${E("c) Purchase of a refrigerator for 1,500,000 paid by transfer (excluding VAT for simplicity)",[["244","Equipment and furniture (fixed asset increasing)","1,500,000",""],["521","Bank (asset decreasing)","","1,500,000"]])}
${E("d) Purchase of goods for 1,000,000 on credit (payment in 30 days)",[["601","Purchases of goods (expense)","1,000,000",""],["401","Suppliers (liability increasing)","","1,000,000"]])}
${E("e) Sale of goods for 1,600,000 paid in cash",[["571","Cash","1,600,000",""],["701","Sales of goods (income)","","1,600,000"]])}
${E("f) Payment of the supplier by cheque",[["401","Suppliers (liability decreasing)","1,000,000",""],["521","Bank","","1,000,000"]])}
<div class="box tip"><h4>Common mistake</h4><p>Beginners think the bank "is credited" when money is deposited, because that is what the bank statement says. The statement is kept <b>by the bank, from its point of view</b>: for the bank, your money is a debt to you, so it credits you. In <b>your</b> accounts, it is the opposite: account 521 is debited.</p></div>
${X("Fatou pays 200,000 rent in cash. Post the entry.", E("",[["622","Rent and rental charges","200,000",""],["571","Cash","","200,000"]]) + "<p>Rent is an expense (debit). Cash, an asset, decreases (credit).</p>")}
${X("a customer pays by transfer an invoice of 500,000 already recorded as a sale.", E("",[["521","Bank","500,000",""],["411","Customers","","500,000"]]) + "<p>The sale was already recorded on the invoice date. Here, the receivable from the customer (asset) disappears and the bank increases.</p>")}
${X("300,000 is withdrawn from the bank to fund the cash box.", E("",[["571","Cash","300,000",""],["521","Bank","","300,000"]]) + "<p>It is a simple <b>internal transfer</b>: no expense, no income, the result does not change. In practice, account 585 \"Transfers of funds\" is often used to avoid counting the transaction twice (once in the bank journal, once in the cash journal).</p>")}
`},

{ day:"Basics", title:"The SYSCOHADA chart of accounts: classes and key accounts", html:`
<p class="lead">The chart of accounts gives each type of transaction a number. The first digit indicates the class, each extra digit narrows down the account. Knowing the main accounts will save you a huge amount of time in audit.</p>
<h2>1. The nine classes</h2>
${T(["Class","Content","Statement"],[
["1","Long-term resource accounts: capital, reserves, result, loans, provisions for risks","Balance sheet (liabilities)"],
["2","Fixed asset accounts: intangible, tangible and financial assets, depreciation","Balance sheet (assets)"],
["3","Inventory accounts: goods, materials, finished products","Balance sheet (assets)"],
["4","Third-party accounts: suppliers, customers, staff, social security bodies, State, partners","Balance sheet (assets or liabilities)"],
["5","Cash accounts: banks, cash on hand, short-term securities","Balance sheet"],
["6","Expense accounts for ordinary activities","Income statement"],
["7","Income accounts for ordinary activities","Income statement"],
["8","Other expenses and other income: outside ordinary activities (HAO), employee profit-sharing, income tax","Income statement"],
["9","Off-balance sheet commitments and management (cost) accounting","Off-balance sheet / cost accounting"]])}
<p>Classes 1 to 5 make up the balance sheet. Classes 6 to 8 make up the income statement.</p>
<h2>2. The accounts to know first</h2>
${T(["Account","Title","Comment"],[
["101","Share capital","Partners' contributions"],
["111","Legal reserve","Mandatory in companies: part of the profit set aside"],
["121 / 129","Retained earnings credit / debit","Undistributed profits / prior losses"],
["131 / 139","Net result: profit / loss","Result for the year"],
["162","Loans from credit institutions",""],
["19","Financial provisions for risks and charges","Disputes, warranties"],
["21","Intangible assets","Software, patents, goodwill"],
["22 / 23","Land / Buildings, installations",""],
["24","Equipment, furniture and biological assets","244: office equipment and furniture, IT equipment"],
["245","Transport equipment","Vehicles"],
["28","Depreciation","E.g. 2844: depreciation of equipment and furniture"],
["31","Goods","Inventory"],
["401","Suppliers, accounts payable",""],
["408","Suppliers, invoices not yet received","Accrued expenses"],
["411","Customers",""],
["416","Disputed or doubtful customer receivables",""],
["421 / 422","Staff: advances / salaries payable",""],
["431","Social security","Social contributions payable"],
["441","State, income tax",""],
["443","State, VAT invoiced","4431: VAT invoiced on sales"],
["445","State, recoverable VAT","4452: on purchases; 4451: on fixed assets"],
["444","State, VAT due or VAT credit","4441: VAT due"],
["447","State, taxes withheld at source","Income tax withheld on salaries"],
["476 / 477","Prepaid expenses / deferred income","Accruals and deferrals"],
["49","Impairment of third-party accounts","491: customers"],
["521","Banks",""],
["571","Cash",""],
["601","Purchases of goods",""],
["602","Purchases of raw materials",""],
["6031","Change in inventory of goods",""],
["605","Other purchases","Water, electricity, supplies"],
["61","Transport",""],
["62 / 63","External services","622: rent; 624: maintenance; 632: fees"],
["64","Taxes and duties","Excluding income tax"],
["66","Staff costs","661: remuneration; 664: social charges"],
["67","Financial expenses","671: interest on loans"],
["68","Depreciation charges","681: operating"],
["69","Provision and impairment charges",""],
["701","Sales of goods",""],
["702 / 706","Sales of finished products / Services sold",""],
["77","Financial income",""],
["81 / 82","Carrying amount of disposals / Proceeds from disposals of fixed assets","Outside ordinary activities (HAO)"],
["89","Income tax","891: tax on profits"]])}
<div class="box key"><h4>The "control" third-party accounts</h4><p>Account 401 groups all suppliers and 411 all customers. In the software, each supplier or customer also has a <b>subsidiary account</b> (individual sub-account). The sum of the subsidiary accounts must equal the control account: it is one of the first checks an auditor makes ("does the subsidiary ledger agree with the general ledger?").</p></div>
<h2>3. Ordinary activities and HAO</h2>
<p>SYSCOHADA separates <b>ordinary</b> transactions (classes 6 and 7) from transactions <b>outside ordinary activities</b> (HAO, class 8): disposal of a fixed asset, natural disaster, expropriation… This shows what the business earns from its usual trade, without exceptional events.</p>
${X("in which accounts do you record: office rent, a lawyer's invoice, the purchase of a truck, a sale of IT services, interest on a loan?","<ul><li>Rent: 622 Rent.</li><li>Lawyer: 632 Fees (intermediaries' and advisers' fees).</li><li>Truck: 245 Transport equipment (a fixed asset, not an expense).</li><li>IT services: 706 Services sold.</li><li>Interest: 671 Interest on loans.</li></ul>")}
`},

{ day:"The cycle", title:"Journal, general ledger and trial balance: the accounting cycle", html:`
<p class="lead">An entry always follows the same path: the supporting document, the journal, the general ledger, the trial balance, then the financial statements. This cycle is also the path the auditor follows, in one direction or the other.</p>
<h2>1. The steps</h2>
<ol>
<li><b>The supporting document</b>: invoice, bank statement, payslip, contract, cash receipt. No entry without a document: it is a legal obligation and the basis of all audit evidence.</li>
<li><b>The journal</b>: entries are recorded in chronological order. In practice, there are several subsidiary journals: purchases, sales, bank, cash, miscellaneous operations (OD).</li>
<li><b>The general ledger</b>: entries are grouped account by account. That is where you see all the movements of account 411 or account 521.</li>
<li><b>The trial balance</b>: a table showing, for each account, total debits, total credits and the balance. Total debits = total credits: otherwise there is an error.</li>
<li><b>The financial statements</b>: balance sheet, income statement, cash flow statement and notes, built from the trial balance balances.</li>
</ol>
<h2>2. What a journal entry looks like</h2>
${T(["Date","Doc. no.","Account","Description","Debit","Credit"],[
["05/01","FA-001","601","Purchase of goods, Sotrac","1,000,000",""],
["05/01","FA-001","4452","Recoverable VAT on purchases","180,000",""],
["05/01","FA-001","401","Supplier Sotrac","","1,180,000"]])}
<p>Each entry has a date, a document reference, accounts, a clear description, and it balances.</p>
<h2>3. Full exercise: the first month of the company KADI</h2>
<p>January transactions (VAT 18%):</p>
<ol>
<li>02/01: capital contribution of 10,000,000 paid into the bank.</li>
<li>03/01: purchase of computers 2,000,000 excl. VAT, paid by transfer.</li>
<li>05/01: purchase of goods 4,000,000 excl. VAT on credit.</li>
<li>15/01: sale of goods 5,000,000 excl. VAT on credit.</li>
<li>25/01: payment of rent 500,000 (VAT-exempt for simplicity) by cheque.</li>
<li>30/01: the customer pays 3,000,000 by transfer.</li>
</ol>
${X("post the journal entries, then prepare the trial balance.",
E("1) Contribution",[["521","Bank","10,000,000",""],["101","Share capital","","10,000,000"]]) +
E("2) Computers",[["244","IT equipment","2,000,000",""],["4451","Recoverable VAT on fixed assets","360,000",""],["521","Bank","","2,360,000"]]) +
E("3) Goods",[["601","Purchases of goods","4,000,000",""],["4452","Recoverable VAT on purchases","720,000",""],["401","Suppliers","","4,720,000"]]) +
E("4) Sale",[["411","Customers","5,900,000",""],["701","Sales of goods","","5,000,000"],["4431","VAT invoiced on sales","","900,000"]]) +
E("5) Rent",[["622","Rent","500,000",""],["521","Bank","","500,000"]]) +
E("6) Customer receipt",[["521","Bank","3,000,000",""],["411","Customers","","3,000,000"]]) +
"<p><b>Trial balance at 31/01</b></p>" + T(["Account","Debit","Credit","Balance"],[
["101 Capital","","10,000,000","10,000,000 Cr"],
["244 IT equipment","2,000,000","","2,000,000 Dr"],
["401 Suppliers","","4,720,000","4,720,000 Cr"],
["411 Customers","5,900,000","3,000,000","2,900,000 Dr"],
["4431 VAT invoiced","","900,000","900,000 Cr"],
["4451 Recoverable VAT, fixed assets","360,000","","360,000 Dr"],
["4452 Recoverable VAT, purchases","720,000","","720,000 Dr"],
["521 Bank","13,000,000","2,860,000","10,140,000 Dr"],
["601 Purchases of goods","4,000,000","","4,000,000 Dr"],
["622 Rent","500,000","","500,000 Dr"],
["701 Sales","","5,000,000","5,000,000 Cr"],
["<b>Totals</b>","<b>26,480,000</b>","<b>26,480,000</b>","Debit balances = credit balances = 20,620,000"]]) +
"<p>The totals are equal: the trial balance balances. Be careful: a balanced trial balance does not prove that everything is right. A forgotten entry or one posted to the wrong account does not unbalance anything. That is why the auditor never stops at this check.</p>")}
<h2>4. What the auditor does with these documents</h2>
${T(["Approach","Direction","What is tested"],[
["From the financial statements to the documents","Top-down","<b>Existence</b>: did what is recorded really happen?"],
["From the documents to the financial statements","Bottom-up","<b>Completeness</b>: is everything that happened recorded?"]])}
<p>In IT audit, the <b>journal entry file</b> (all journal lines) is often extracted for analysis: entries posted at the weekend, by unusual users, with round amounts, without a description, just before closing. These are <b>journal entry tests</b>, essential for detecting management override of controls.</p>
`},

{ day:"Day-to-day transactions", title:"Purchases, sales and VAT", html:`
<p class="lead">Purchases and sales make up most of a business's entries. VAT almost always comes with them. This module gives you the patterns you will find in every file.</p>
<h2>1. VAT in three sentences</h2>
<ul><li>VAT is a tax paid by the <b>final consumer</b>. The business only collects it for the State.</li>
<li>On its sales, the business <b>charges</b> VAT (output VAT, account 443). On its purchases, it <b>pays</b> VAT that it can recover (input VAT, account 445).</li>
<li>Each month, it pays over the difference: <b>VAT due = VAT invoiced − recoverable VAT</b>. If the difference is negative, it has a <b>VAT credit</b>.</li></ul>
<p>In Senegal, the standard rate is 18% (a reduced rate exists for some activities such as tourist accommodation). Excl. VAT = before tax; incl. VAT = all taxes included = excl. VAT × 1.18.</p>
<h2>2. The purchase invoice</h2>
${E("Purchase of goods: 1,000,000 excl. VAT, VAT 18%, payable in 30 days",[["601","Purchases of goods","1,000,000",""],["4452","State, recoverable VAT on purchases","180,000",""],["401","Suppliers","","1,180,000"]])}
<h2>3. The sales invoice</h2>
${E("Sale of goods: 1,500,000 excl. VAT, VAT 18%",[["411","Customers","1,770,000",""],["701","Sales of goods","","1,500,000"],["4431","State, VAT invoiced on sales","","270,000"]])}
<h2>4. The VAT return</h2>
<p>At month-end, the VAT accounts are cleared and the debt to the State is shown:</p>
${E("Settling the month's VAT",[["4431","VAT invoiced on sales","270,000",""],["4452","Recoverable VAT on purchases","","180,000"],["4441","State, VAT due","","90,000"]])}
${E("Payment of VAT",[["4441","State, VAT due","90,000",""],["521","Bank","","90,000"]])}
<h2>5. Invoice reductions</h2>
${T(["Reduction","Nature","Treatment"],[
["Trade discount, allowance, rebate","Commercial: lower price for quantity, defect, loyalty","If it is on the original invoice: the net amount is recorded directly. If it comes later: credit note"],
["Cash discount","Financial: reduction for early payment","Financial expense (673) for the seller, financial income (773) for the buyer"]])}
${E("Credit note received from the supplier: allowance of 100,000 excl. VAT on a defective batch",[["401","Suppliers","118,000",""],["601","Purchases of goods (or 6019 discounts received)","","100,000"],["4452","Recoverable VAT on purchases","","18,000"]])}
<h2>6. Incidental costs, packaging, advances</h2>
<ul><li><b>Transport on purchases</b>: account 6015 (costs on purchases) or 61 (transport) depending on the organization.</li>
<li><b>Advance paid to a supplier</b>: account 409 "Suppliers in debit, advances and deposits paid". It is offset against the final invoice.</li>
<li><b>Advance received from a customer</b>: account 419 "Customers in credit, advances and deposits received".</li></ul>
<h2>7. The sales cycle as seen by the auditor</h2>
${T(["Risk","Assertion","Typical test"],[
["Fictitious sales to inflate revenue","Existence / occurrence","Match invoices, delivery notes and receipts; send confirmations to customers"],
["December sales recorded in January, or the reverse","Cut-off","Examine deliveries and invoices around 31/12"],
["Sales left out","Completeness","Start from delivery notes and check they are invoiced"],
["Irrecoverable receivables not impaired","Valuation","Analyse the customer aged balance"],
["Failed IT control: prices changed without authorization","Accuracy","Review of access rights to the price file and of changes"]])}
${X("sale of 2,000,000 excl. VAT with a 10% discount on the invoice, VAT 18%. Post the entry.","<p>Net commercial amount = 2,000,000 − 200,000 = 1,800,000. VAT = 324,000. Incl. VAT = 2,124,000.</p>" + E("",[["411","Customers","2,124,000",""],["701","Sales of goods","","1,800,000"],["4431","VAT invoiced","","324,000"]]))}
${X("in the month: VAT invoiced 450,000, recoverable VAT on purchases 520,000. What happens?","<p>Recoverable VAT > VAT invoiced: the business has a <b>VAT credit</b> of 70,000, which it carries forward to the following month (or claims a refund for, under the tax rules).</p>" + E("",[["4431","VAT invoiced","450,000",""],["4449","State, VAT credit to carry forward","70,000",""],["4452","Recoverable VAT on purchases","","520,000"]]))}
`},

{ day:"Day-to-day transactions", title:"Cash, bank and bank reconciliation", html:`
<p class="lead">Cash is the area where fraud is most tempting. The bank reconciliation is the basic control: it compares the business's account 521 with the bank statement.</p>
<h2>1. Means of payment</h2>
${T(["Means","What you need to know"],[
["Cash (account 571)","High risk of theft. Limits, dual signature, regular counts (cash count) with a report"],
["Cheque","Issuing a cheque is not payment: it may take several days to be debited"],
["Transfer","The safest if suppliers' bank details are protected (bank detail change fraud)"],
["Mobile money","Dedicated cash account, to be reconciled with the operator's statement"],
["Bills of exchange (bill of exchange, promissory note)","Receivables or payables due on a given date; accounts 412 and 402"]])}
<h2>2. Why account 521 and the statement are not equal</h2>
<p>The business and the bank do not record transactions at the same time:</p>
<ul><li>cheques issued by the business have not yet been presented to the bank;</li>
<li>cheques paid in have not yet been credited;</li>
<li>the bank has charged fees or interest, or received a transfer the business does not yet know about.</li></ul>
<p>Watch the sides: a <b>debit</b> balance in the business's books (it has money) corresponds to a <b>credit</b> balance on the bank statement.</p>
<h2>3. The reconciliation method</h2>
<ol><li>Tick off each transaction in account 521 against the statement.</li><li>List the unticked transactions on both sides.</li><li>Adjust the book balance for what the bank recorded and the business does not know (fees, transfers received): these items lead to entries.</li><li>Adjust the bank balance for what the business recorded and the bank has not yet processed (outstanding cheques): no entry, you wait.</li><li>The two adjusted balances must be equal.</li></ol>
<h2>4. Example</h2>
<p>At 31/12: balance of account 521 = 4,200,000 debit. Bank statement = 4,650,000 credit. After ticking:</p>
<ul><li>cheque no. 112 for 600,000 issued to a supplier, not yet presented;</li><li>bank fees of 25,000 charged by the bank, not recorded;</li><li>a customer transfer of 125,000 received by the bank, not recorded;</li><li>a cheque deposit of 250,000 made on 31/12, credited by the bank in January.</li></ul>
${T(["Business's books","Amount","Bank statement","Amount"],[
["Balance of account 521","4,200,000","Statement balance","4,650,000"],
["− Bank fees","− 25,000","− Cheque no. 112 not presented","− 600,000"],
["+ Customer transfer received","+ 125,000","+ Cheque deposit not credited","+ 250,000"],
["<b>Adjusted balance</b>","<b>4,300,000</b>","<b>Adjusted balance</b>","<b>4,300,000</b>"]])}
${E("Entries to post in the business's books",[["631","Bank charges","25,000",""],["521","Bank","","25,000"],["521","Bank","125,000",""],["411","Customers","","125,000"]])}
<div class="box key"><h4>Warning signs for the auditor</h4><ul><li>Reconciliations not done, not signed or done by the person who handles cash and posts the entries (no segregation of duties).</li><li>Very old outstanding cheques (more than a few months): cancelled or diverted cheques?</li><li>Unexplained "sundry" differences carried forward month after month.</li><li>Bank accounts opened but missing from the books: the auditor requests a <b>direct confirmation</b> from each bank, which lists all accounts, balances, loans and guarantees.</li></ul></div>
<h2>5. Cash control</h2>
<p>Cash can never have a credit balance: you cannot take out more money than there is. A credit cash balance in the trial balance signals an error or unsupported payments. The auditor attends a surprise count and compares it with the book balance.</p>
${X("account 521 balance: 1,000,000 debit; statement: 1,300,000 credit. Cheques issued not presented: 400,000. Overdraft charges not recorded: 30,000. Credit interest not recorded: 10,000. Does the reconciliation agree?","<p>Business side: 1,000,000 − 30,000 + 10,000 = 980,000. Bank side: 1,300,000 − 400,000 = 900,000. Difference of 80,000: an unidentified transaction remains. The ticking must be redone. An unexplained difference must never be posted to \"sundry\".</p>")}
`}
];

const c = CERTS.find(x => x.id === "compta");
c.en = {
  title:"General accounting step by step (SYSCOHADA)", org:"Georgi Learning course · Accounting and finance",
  intro:"A course to start from zero and learn to read, understand and check SYSCOHADA financial statements. Each module explains a concept with worked figures, then offers corrected exercises. Designed for an auditor who needs to understand clients' accounting.",
  exam:`<p>This course is not an official certification: the final test checks that you have mastered the basics before moving on to the sector courses (banking, insurance, telecoms…).</p>
<ul><li>40 questions drawn at random from all the course questions, 60 minutes.</li><li>Recommended pass mark: 70%. Below that, reread the modules flagged in the result.</li><li>The questions mainly cover double entry, key accounts, routine entries and year-end work.</li></ul>
<div class="box tip"><h4>To go further</h4><p>If you want a recognized accounting certification, see the "Recognized accounting certifications" page in this course's resources.</p></div>`,
  modules, pages:[]
};
})();
