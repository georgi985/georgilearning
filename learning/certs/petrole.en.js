/* Oil and gas: English version of the course. Same module order as petrole.js. */
(function(){
const {T, E, X} = window.__GLEN;

const modules = [
{ day:"Understand", title:"The oil and gas chain", html:`
<p class="lead">From the reservoir under the sea to your car's tank, oil passes through a long chain of players. Each link has its own trade, contracts and risks.</p>
<h2>1. The three segments</h2>
${T(["Segment","Activities","Typical players"],[
["Upstream","Exploration (searching for fields), development (building facilities), production (extraction)","International oil companies, national companies, oilfield service companies"],
["Midstream","Transport (oil pipelines, gas pipelines, ships), storage, gas liquefaction (LNG)","Carriers, terminals, storage operators"],
["Downstream","Refining, distribution, service stations, sales to industry and aviation","Refineries, petroleum product distributors, marketers"]])}
<h2>2. The Senegalese context</h2>
<p>Senegal became an oil producer with the offshore <b>Sangomar</b> field (first oil in 2024) and a gas producer with the <b>Grand Tortue Ahmeyim</b> (GTA) project, shared with Mauritania, which produces liquefied natural gas. The national company <b>Petrosen</b> holds interests in them. The SAR refinery (Société africaine de raffinage) and many distributors operate downstream. The sector is governed by the Petroleum Code and the Gas Code, as well as local content rules.</p>
<h2>3. The products</h2>
${T(["Product","Use"],[
["Crude oil","Raw material for refineries; sold in barrels (1 barrel ≈ 159 litres)"],
["Natural gas","Power generation, industry; transported by pipeline or liquefied (LNG)"],
["Refined products","Petrol (gasoline), diesel, kerosene (aviation), fuel oil, butane (household gas), bitumen"]])}
<h2>4. What sets the price</h2>
<p>The price of crude is set on international markets (for example Brent) in dollars. An oil company is therefore exposed to the <b>price per barrel</b> and to the dollar / CFA franc <b>exchange rate</b>. Downstream, retail prices are often <b>regulated</b> by the State, which may pay <b>subsidies</b> or <b>compensation</b> to distributors when international prices rise.</p>
<div class="box key"><h4>Why the sector is special for an auditor</h4><p>Huge amounts, complex contracts with the State, inventories that are hard to measure (liquids, volumes that vary with temperature), reserve estimates, and exposure to currencies and prices. Measurement systems (meters, tank gauging) and ERPs are at the heart of the controls.</p></div>
`},

{ day:"Understand", title:"Petroleum contracts and the State's share", html:`
<p class="lead">The subsoil belongs to the State. Companies obtain the right to exploit it through contracts that set how production and revenue are shared.</p>
<h2>1. The two main families of contracts</h2>
${T(["Contract","Principle","State's share"],[
["Concession","The company owns the oil produced and pays royalties and taxes","Royalty (percentage of production) + income tax"],
["Production sharing contract (PSC)","The State remains the owner; the company finances the costs and recovers them from part of the production, the rest is shared","State's \"profit oil\" + taxes + the national company's interest"]])}
<p>Senegal mainly uses <b>exploration and production sharing contracts</b>.</p>
<h2>2. How a PSC works, step by step</h2>
<ol><li>The period's production is measured.</li><li>Any royalty is deducted.</li><li>A share is reserved for <b>cost oil</b>: it reimburses the company for its exploration, development and operating costs, up to a cap (for example 70% of production).</li><li>The rest is <b>profit oil</b>, shared between the State and the company according to percentages set in the contract (often rising with profitability).</li><li>The company pays tax on its profits.</li></ol>
${X("production of 1,000,000 barrels; no royalty; cost oil cap 60%; recoverable costs for the period 500,000 barrels equivalent; profit oil shared 40% State / 60% company. Calculate each party's share.","<p>Cap = 600,000 barrels; recoverable costs (500,000) are below the cap: cost oil = <b>500,000</b> for the company. Profit oil = 1,000,000 − 500,000 = 500,000. State: 40% = <b>200,000</b>. Company: 60% = 300,000. Company total = 800,000 barrels (before tax). Had costs exceeded 600,000, the excess would be carried forward to later periods.</p>")}
<h2>3. The joint venture and the operator</h2>
<p>A field is usually exploited by several partners (for example an international company, a partner and the national company). One of them is the <b>operator</b>: it runs the operations and recharges the costs to the partners according to their percentage, through <b>cash calls</b>. Each partner has the right to audit the operator's accounts (<b>joint venture audit</b>).</p>
<h2>4. Recoverable costs: a major issue</h2>
<p>The higher the declared costs, the higher the cost oil and the lower the State's share. The State therefore has the costs audited: costs that do not comply with the contract (unjustified expenditure, excessive head office charges, related-party transactions at abnormal prices) are rejected.</p>
<h2>5. Transparency</h2>
<p>Senegal takes part in the <b>EITI</b> (Extractive Industries Transparency Initiative), which publishes every year the payments made by companies to the State and the revenue declared by the State, with a reconciliation of the two.</p>
`},

{ day:"Understand", title:"Petroleum accounting: exploration, reserves, depreciation", html:`
<p class="lead">Spending millions to drill a dry well: is it an expense or an asset? Petroleum accounting answers questions that other sectors never ask.</p>
<h2>1. Exploration expenditure</h2>
<p>Two approaches exist in international frameworks:</p>
${T(["Method","Principle","Effect"],[
["Successful efforts","Only costs linked to commercially viable discoveries are capitalized; dry wells are expensed","More volatile profit, more prudent assets"],
["Full cost","All exploration costs for an area are capitalized, including failures","Smoother profit, higher assets"]])}
<p>Under IFRS, IFRS 6 governs the exploration and evaluation phase and requires impairment testing. Under the revised SYSCOHADA, exploration expenditure follows the general principles and any sector-specific provisions.</p>
<h2>2. Reserves</h2>
<p>Reserves are the quantities of oil or gas that are expected to be extracted profitably. They are classified by degree of certainty: <b>proved (1P)</b>, <b>probable</b>, <b>possible</b>. They are estimated by reservoir engineers and often reviewed by independent experts.</p>
<h2>3. Units-of-production depreciation</h2>
<p>A field's facilities are useful as long as there is oil to extract. They are therefore depreciated according to production: <b>charge = net depreciable amount × production for the period ÷ remaining reserves at the start of the period</b>.</p>
${X("facilities of 600 billion; proved developed reserves at the start of the year 120 million barrels; production for the year 15 million. Depreciation charge?","<p>Charge = 600 × 15 ÷ 120 = <b>75 billion</b>. If reserves are revised downwards, the charge per barrel increases: that is why reserve estimation is a major audit topic.</p>")}
<h2>4. Decommissioning</h2>
<p>At the end of a field's life, platforms, wells and pipelines must be dismantled and the site restored. This future cost, often very high (especially offshore), is provided for from installation and discounted. Contracts sometimes require a decommissioning fund built up during production.</p>
<h2>5. Other topics</h2>
<ul><li><b>Currencies</b>: accounts kept in dollars, translation into CFA francs, exchange differences.</li><li><b>Impairment</b>: when the oil price falls, the value of assets may fall below their carrying amount.</li><li><b>Taxation</b>: specific regimes, petroleum profit taxes, withholding on foreign contractors.</li></ul>
`},

{ day:"Understand", title:"Downstream: refining, distribution and inventory", html:`
<p class="lead">Downstream, most of the risk lies in the volumes: products that come in, go out, evaporate, or disappear.</p>
<h2>1. A distributor's circuit</h2>
<ol><li>Purchase of products (import by ship or purchase from the refinery).</li><li>Receipt at a <b>depot</b>: measurement of the volumes received.</li><li>Loading of tanker trucks.</li><li>Delivery to service stations or industrial customers.</li><li>Sale by the litre at the station, paid in cash, by card, mobile money or vouchers.</li></ol>
<h2>2. Measuring a liquid</h2>
<p>A liquid expands with heat. 1,000 litres of petrol at 35 °C do not contain the same quantity of product as 1,000 litres at 15 °C. Measured volumes (<b>ambient volume</b>) are therefore converted to <b>volume at 15 °C</b> (standard volume) using correction tables. Differences between invoiced, received and sold volumes must take this correction into account.</p>
<p>Measurement methods: <b>gauging</b> of tanks (dipstick or electronic gauge), <b>meters</b> at loading points and pumps, <b>inspection certificates</b> from an independent inspector when ships are received.</p>
<h2>3. Losses and differences</h2>
${T(["Type of difference","Explanation","Threshold"],[
["Normal losses","Evaporation, handling, residues","Allowed within a limit (percentage set by regulation or contracts)"],
["Measurement differences","Poorly calibrated meters, gauging errors","To be corrected, with regular calibration"],
["Abnormal losses","Leaks, theft, fraud (diverted trucks, blending)","To be investigated"]])}
<h2>4. Regulated prices and subsidies</h2>
<p>When the State sets pump prices, a <b>price structure</b> determines each component: purchase cost, transport, depot and distributor margins, taxes. If the real cost exceeds the set price, the State compensates the difference (<b>commercial losses</b> or subsidies). These receivables from the State can be very large and slow to collect: their recoverability is an audit point.</p>
<h2>5. Service stations</h2>
<ul><li><b>Pump meter readings</b>: taken at the start and end of each period (shift, day); sales = difference between readings.</li><li><b>Reconciliation</b>: sales per readings = cash received + customer credit; book stock = opening stock + deliveries − sales, compared with the gauging.</li><li>Repeated differences at the same station signal a problem (theft, tampered pump, errors).</li></ul>
${X("at a station: opening stock 20,000 L, delivery 30,000 L, sales per meter readings 42,000 L, closing gauging 7,400 L. Calculate the difference and comment.","<p>Book stock = 20,000 + 30,000 − 42,000 = 8,000 L. Actual stock = 7,400 L. Difference = <b>−600 L</b>, about 1.2% of sales. Compare with the allowed loss rate, check the temperature correction, pump calibration and the station's history. A recurring difference of this size deserves an investigation.</p>")}
`},

{ day:"Risks", title:"Sector risks and controls", html:`
<p class="lead">Oil risks are financial, physical, regulatory and IT-related all at once.</p>
<h2>1. The risk map</h2>
${T(["Risk","Example","Expected control"],[
["Price and exchange","Fall in the oil price, rise in the dollar","Hedging policy, position monitoring, limits"],
["Reserves","Overstated reserves","Review by independent experts, governance of revisions"],
["Recoverable costs","Ineligible costs charged to cost oil","Review of allocations, joint venture audits"],
["Transfer pricing","Services invoiced by group companies at excessive prices","Transfer pricing documentation, comparison with the market"],
["Inventory and volumes","Theft, losses, measurement errors","Calibration, daily reconciliations, independent inspection"],
["Corruption","Bribes to obtain permits or contracts","Anti-corruption programme, due diligence on intermediaries"],
["Environment and safety","Oil spill, industrial accident","HSE management systems, insurance, provisions"],
["Local content","Failure to meet local employment and subcontracting obligations","Monitoring and regulatory reporting"],
["Cyber","Attack on the industrial systems (ICS / SCADA) of production or pipelines","Network segmentation, monitoring, continuity plans"]])}
<h2>2. Industrial systems (OT)</h2>
<p>Facilities are controlled by industrial systems: programmable controllers (PLC), SCADA, distributed control systems (DCS). They are often old, hard to update and designed for availability rather than security. Good practice (for example the <b>IEC 62443</b> series of standards) relies on segmentation between the office network (IT) and the industrial network (OT), control of vendors' remote access, and monitoring.</p>
<h2>3. Management systems</h2>
<p>ERPs (for example SAP, widespread in the sector) manage purchasing, inventory, maintenance, joint venture accounting and invoicing. Specialized applications manage volume measurement (hydrocarbon accounting), terminals and stations. The interfaces between meters, measurement applications and the ERP are a key control point.</p>
`},

{ day:"IT audit", title:"Audit programme for an oil company", html:`
<p class="lead">This module brings together the audit work, especially on the information systems side.</p>
<h2>1. Understand the entity</h2>
<ul><li>Segment (upstream, downstream or both), contracts (PSC, joint ventures), operator role or not.</li><li>Physical flows: where products come from, where they are stored, how they are measured and sold.</li><li>Systems: ERP, measurement applications, station systems, OT.</li></ul>
<h2>2. ITGC</h2>
${T(["Area","Specific points"],[
["Access","Who can change volumes, prices, temperature correction tables, gauging data?"],
["Changes","Changes to the price structure and measurement parameters: approval and traceability"],
["Interfaces","Meters and gauges → measurement application → ERP: completeness and integrity"],
["Service providers","Vendors' remote access to industrial systems and ERPs"]])}
<h2>3. Process testing</h2>
${T(["Process","Test"],[
["Product purchases","Reconciliation of quantities invoiced, certified by the inspector and received at the depot"],
["Inventory","Attendance at gauging, recalculation of volumes at 15 °C, analysis of differences by depot and station"],
["Sales","Reconciliation of depot dispatches, deliveries and invoices; station sales per meter readings and cash received"],
["Prices","Application of the regulated price structure; recalculation of the compensation claimed from the State"],
["Receivables from the State","Ageing, confirmations, recoverability"],
["Upstream","Units-of-production depreciation, reserves, decommissioning provision, cost oil, cash calls"],
["Currencies","Rates used, exchange differences"]])}
<h2>4. Data analytics</h2>
<ul><li>Inventory differences by site and by month, in volume and percentage; outlier sites.</li><li>Deliveries to unregistered customers or to addresses identical to employees' addresses.</li><li>Manual changes to quantities in the ERP after receipt.</li><li>Oilfield service supplier invoices without a purchase order, or split to stay below approval thresholds.</li></ul>
<div class="box key"><h4>Key takeaway</h4><p>In oil, <b>volume is the currency</b>. The heart of the audit is reconciling volumes at each step (purchase, receipt, stock, dispatch, sale) and making sure the systems that measure and transmit them are reliable.</p></div>
`}
];

const c = CERTS.find(x => x.id === "petrole");
c.en = {
  title:"Oil and gas", org:"Business sector",
  intro:"Understand the oil and gas chain (upstream, midstream, downstream), contracts with the State, sector-specific accounting (exploration, reserves, decommissioning), volume management and auditing the sector's systems.",
  exam:`<p>Internal campus knowledge test: 20 random questions, 30 minutes, recommended pass mark 70%.</p>`,
  modules,
  pages:[{ title:"Oil and gas glossary", html:`
${T(["Term","Definition"],[
["Upstream / downstream","Exploration-production / refining-distribution"],
["Cash call","Operator's request to partners to fund their share of costs"],
["Barrel","Unit of volume for oil, about 159 litres"],
["Brent","International benchmark price for crude oil"],
["Cost oil","Share of production that reimburses the company's costs"],
["PSC","Production sharing contract"],
["Decommissioning","Removal of facilities and restoration of the site at end of life"],
["Full cost / successful efforts","Methods of accounting for exploration expenditure"],
["LNG","Liquefied natural gas"],
["EITI","Extractive Industries Transparency Initiative"],
["Gauging","Measuring the level of a product in a tank"],
["Joint venture","Partnership to exploit a licence"],
["Operator","Partner that runs operations on behalf of the joint venture"],
["OT / ICS / SCADA","Industrial systems that control the facilities"],
["Profit oil","Share of production shared between the State and the company after cost oil"],
["Royalty","State levy on production"],
["Reserves 1P / 2P / 3P","Proved / proved + probable / + possible"],
["Price structure","Regulated breakdown of the pump price"],
["Units of production","Depreciation method based on volumes produced"],
["Volume at 15 °C","Standard volume corrected for temperature"]])}
`}]
};
})();
