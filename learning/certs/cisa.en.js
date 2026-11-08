/* ISACA CISA: English version of the course. Same module order as cisa.js.
   Original content written for revision; it does not reproduce the official ISACA review manual (CRM). */
(function(){
const T = (head, rows) => '<div class="tablewrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const D = (n, name, w) => '<p class="eyebrow">Domain ' + n + ' · ' + name + ' · ' + w + '% of the exam</p>';

const modules = [
{ day:"Domain 1", title:"Planning a risk-based IS audit", html: D(1,"Information System Auditing Process",18) + `
<p class="lead">CISA first tests your auditor's reasoning: independence, a risk-based approach, sufficient evidence. Keep this reflex for every question.</p>
<h2>ISACA standards and ethics</h2>
<p>ISACA publishes the <b>ITAF framework</b> (standards, guidelines, tools and techniques for IS auditing) and a <b>code of professional ethics</b>. General standards cover the audit charter, independence, objectivity, due professional care, proficiency and assertions. Performance standards cover planning, evidence, using the work of others and supervision. Reporting standards cover reporting and follow-up.</p>
<h2>The audit charter</h2>
<p>A document approved at the highest level (board or audit committee) that sets out the mission, <b>authority</b>, <b>responsibilities</b> and <b>independence</b> of the audit function, as well as its right of access to information and people. The engagement letter plays this role for an external auditor.</p>
<div class="box key"><h4>Independence</h4><p>The auditor reports to the <b>audit committee</b>, not to the IT department being audited. They neither design nor operate the controls they audit. If they took part in a project, they must disclose it and not audit what they designed. They can advise, but not decide on management's behalf.</p></div>
<h2>The risk-based audit plan</h2>
<ol><li>Understand the business, its objectives and the audit universe (all auditable processes and systems).</li><li>Assess the risks of each entity.</li><li>Prioritize: high-risk areas are audited more often.</li><li>Build the annual plan and have it approved by the audit committee.</li></ol>
<h2>Audit risk</h2>
${T(["Component","Definition","Who acts on it?"],[
["Inherent risk","Risk of a material error before any control","No one: it depends on the business"],
["Control risk","Risk that internal controls neither prevent nor detect the error","The auditee, through its controls"],
["Detection risk","Risk that the auditor's procedures do not detect the error","The auditor, through the extent of testing"]])}
<p>Audit risk = inherent × control × detection. If inherent and control risks are high, the auditor reduces detection risk by increasing substantive testing.</p>
<h2>Types of controls</h2>
${T(["Type","Example"],[["Preventive","Segregation of duties, input validation"],["Detective","Bank reconciliation, log review"],["Corrective","Restore, recovery procedure"],["Compensating","Enhanced review when segregation of duties is impossible"]])}
<p><b>IT general controls</b> (ITGC): access, change, operations, development. <b>Application controls</b> (ITAC): input, processing, output. If ITGCs are weak, automated application controls cannot be relied upon.</p>
<h2>Types of audits</h2>
<p>Compliance, financial, operational, integrated (financial + operational + IS), administrative, specialized (third party, fraud, forensic), IS audit. Evaluation of controls by the auditee itself: <b>control self-assessment</b> (CSA), which complements the audit without replacing it.</p>
`},

{ day:"Domain 1", title:"Performing the audit: evidence, sampling and reporting", html: D(1,"Information System Auditing Process",18) + `
<h2>Tests</h2>
${T(["Test","Purpose","Example"],[
["Compliance (control) test","Check that a control exists and works","Are all access requests approved?"],
["Substantive test","Check the accuracy of data and balances","Recalculate interest on a sample of loans"]])}
<p>Logical order: test controls first. If they are effective, reduce substantive testing.</p>
<h2>Evidence</h2>
<p>Evidence must be <b>sufficient</b> (quantity), <b>relevant</b> and <b>reliable</b>. Reliability is better when evidence:</p>
<ul><li>comes from an <b>independent</b> external source (bank confirmation) rather than internal;</li><li>is obtained <b>directly</b> by the auditor (observation, reperformance) rather than reported;</li><li>is <b>written</b> rather than oral;</li><li>is produced by a system with good controls.</li></ul>
<p>Techniques: document review, interviews, observation, reperformance, confirmation, data analytics, <b>CAATs</b> (computer-assisted audit techniques: ACL, IDEA, Python, SQL).</p>
<h2>Sampling</h2>
${T(["Method","Use"],[
["Attribute sampling","Compliance tests: deviation rate (approved / not approved)"],
["Variable sampling","Substantive tests: amounts"],
["Stop-or-go","Stop early if no deviation (population with low expected error)"],
["Discovery","Find at least one occurrence of a rare fraud"],
["Statistical","Random selection, measurable risk, results can be extrapolated"],
["Non-statistical (judgmental)","Auditor's choice, cannot be extrapolated"]])}
<p>The <b>confidence coefficient</b>: the higher it is, the larger the sample. Strong internal control allows a lower coefficient.</p>
<h2>Continuous auditing</h2><p>Embedded audit modules (EAM), SCARF review files, audit hooks, integrated test facility (ITF), snapshots. Useful for online systems with no paper trail.</p>
<h2>Reporting</h2>
<ol><li>Exit meeting: validate findings with the auditee.</li><li>Report: objectives, scope, period, approach, findings (condition, criteria, cause, effect), recommendations, opinion, management responses.</li><li>Follow-up: the auditor checks that actions have been implemented.</li></ol>
<div class="box tip"><h4>Classic traps</h4><ul><li>The auditor recommends; management decides and fixes.</li><li>If management refuses to fix a serious risk, the auditor reports it to the audit committee.</li><li>A weakness found during the audit is first discussed with the auditee before going into the final report.</li></ul></div>
`},

{ day:"Domain 2", title:"IT governance", html: D(2,"Governance and Management of IT",18) + `
<h2>Governance and management</h2>
<p><b>Governance</b> (board) sets direction, evaluates and monitors. <b>Management</b> (executive management) plans, builds, runs and monitors. COBIT 2019 formalizes this distinction with 40 governance and management objectives.</p>
<h2>Structures</h2>
${T(["Body","Role"],[["Board of directors","Ultimately accountable for IT governance"],["IT strategy committee","Advises the board on strategic alignment"],["IT steering committee","Management level: prioritizes projects, allocates resources"],["Audit committee","Oversees internal and external audit"],["CIO","Executes the IT strategy"],["CISO","Leads security"]])}
<h2>Strategy and alignment</h2>
<p>The IT strategy derives from the business strategy. Tools: IT <b>balanced scorecard</b> (business contribution, user orientation, operational excellence, future orientation), enterprise architecture (TOGAF, Zachman), portfolio management.</p>
<h2>Policies and procedures</h2>
<p>Top-down approach: policies derive from strategy, more consistent. Bottom-up approach: from operational risks, more pragmatic. The auditor checks approval, communication, review and enforcement.</p>
<h2>Reference frameworks</h2>
${T(["Framework","Use"],[["COBIT 2019","IT governance and management"],["ISO/IEC 27001","Information security management system"],["ITIL 4","IT service management"],["COSO","Internal control (5 components)"],["ISO 38500","Board-level governance of IT"],["NIST CSF 2.0","Cybersecurity (govern, identify, protect, detect, respond, recover)"]])}
<h2>Compliance and data</h2>
<p>Laws and regulations (in Côte d'Ivoire: Law 2013-450 on personal data, the cybercrime law, BCEAO instructions for banks), contracts, industry standards. Data governance: ownership, quality, classification, life cycle.</p>
`},

{ day:"Domain 2", title:"IT management: risk, resources, third parties and performance", html: D(2,"Governance and Management of IT",18) + `
<h2>Enterprise risk management</h2>
<p>Identify assets, threats and vulnerabilities, assess impact and likelihood, then treat: mitigate, transfer, avoid, accept. <b>Risk appetite</b> is set by the board. Residual risk must stay within this appetite.</p>
<h2>Human resources</h2>
<p>HR controls: background checks, employment contract with confidentiality clauses, training, <b>mandatory leave</b> and <b>job rotation</b> (to detect fraud), termination procedure (immediate removal of access).</p>
<h2>Segregation of duties</h2>
<p>Separate: authorization, recording, custody of assets, and reconciliation. In IT: development / operations / security administration / data entry. If segregation is impossible (small organization), put compensating controls in place: log review, supervision, independent reconciliations.</p>
<h2>Outsourcing and third parties</h2>
<ul><li>Accountability cannot be outsourced: the company remains accountable.</li><li>Contract: SLA, right to audit, confidentiality, exit/reversibility, data location, subcontracting.</li><li>Assurance: <b>SOC 1</b> reports (controls relevant to financial reporting), <b>SOC 2</b> (security, availability, processing integrity, confidentiality, privacy); <b>type I</b> = design at a point in time, <b>type II</b> = operating effectiveness over a period.</li></ul>
<h2>Performance management</h2>
<p>KPIs (performance), KRIs (risk), KGIs (goal achievement). Maturity models: COBIT uses capability levels from 0 to 5.</p>
<h2>Quality management</h2><p>ISO 9001, continual improvement, user satisfaction.</p>
`},

{ day:"Domain 3", title:"Acquisition and project management", html: D(3,"Information Systems Acquisition, Development and Implementation",12) + `
<h2>The business case</h2>
<p>Justifies the investment: business need, options, costs, benefits, risks. It must be reviewed at each key project milestone: if the assumptions change, the project can be stopped.</p>
<p>Financial indicators: return on investment (ROI), net present value (NPV), payback period, total cost of ownership (TCO).</p>
<h2>Project management</h2>
${T(["Role","Responsibility"],[["Sponsor","Funds the project, accountable for the benefits"],["Steering committee","Major decisions, trade-offs"],["Project manager","Day-to-day management"],["Key users","Express requirements, perform acceptance testing"],["Quality assurance","Checks compliance with standards"],["Auditor","Advises on controls, stays independent"]])}
<p>Tools: WBS (breakdown), Gantt, PERT, <b>critical path</b> (sequence of tasks with no slack: any delay delays the project), <b>earned value analysis</b> (EVA), function points to estimate software size.</p>
<h2>Software acquisition</h2>
<ol><li>Feasibility study.</li><li>Requirements definition (functional, security, control).</li><li>Request for proposal (RFP) and evaluation grid.</li><li>Site visits and customer references.</li><li>Contract: licenses, maintenance, <b>source code escrow</b> to protect against the vendor going bankrupt.</li></ol>
<div class="box tip"><h4>Key moment for the auditor</h4><p>Controls and security requirements must be defined as early as the <b>design</b> (requirements) phase. Adding them later costs much more.</p></div>
`},

{ day:"Domain 3", title:"Development, testing and go-live", html: D(3,"Information Systems Acquisition, Development and Implementation",12) + `
<h2>Development approaches</h2>
${T(["Approach","Characteristic","Audit point of attention"],[
["Waterfall (traditional SDLC)","Sequential phases, heavy documentation","Rigid, late discovery of problems"],
["Agile (Scrum)","Short iterations (sprints), backlog, frequent feedback","Light documentation, controls to include in the \"definition of done\""],
["Prototyping","Quick mock-ups","The prototype must not become production without controls"],
["RAD","Rapid development","Quality and security sacrificed"],
["DevOps / DevSecOps","Continuous integration and deployment, automation","Segregation of duties to be compensated by automated controls and traceability"]])}
<h2>Testing</h2>
${T(["Test","Object"],[["Unit","A single module"],["Integration","Interfaces between modules"],["System","The whole system: performance, security, load, recovery"],["User acceptance (UAT)","Users confirm the need is met"],["Regression","A change did not break anything elsewhere"],["Pilot","Deployment limited to one site"],["Parallel","Old and new systems run together and results are compared"]])}
<p>White box (internal logic) and black box (functionality). <b>Bottom-up</b> testing (modules first) and <b>top-down</b> testing (interfaces first, critical errors found early).</p>
<h2>Migration and cutover</h2>
<p>Data conversion: reconciliation of control totals, record counts, sums, samples. Cutover strategies: parallel (safe, costly), phased, direct ("big bang", risky). Plan a rollback.</p>
<h2>Post-implementation review</h2>
<p>A few weeks or months later: are the business case benefits achieved? Do the controls work? Lessons for future projects.</p>
<h2>Application controls (ITAC)</h2>
${T(["Phase","Controls"],[
["Input","Format, range, reasonableness and existence checks, check digit, batch totals, double entry"],
["Processing","Run-to-run control totals, reconciliations, error handling, audit trails"],
["Output","Controlled distribution, total reconciliation, protection of sensitive reports"]])}
`},

{ day:"Domain 4", title:"IS operations and service management", html: D(4,"Information Systems Operations and Business Resilience",26) + `
<h2>Service management (ITIL)</h2>
${T(["Process","Key point"],[
["Incident management","Restore service as quickly as possible"],
["Problem management","Find the root cause of recurring incidents"],
["Change management","Request, assessment, approval (CAB), testing, deployment, review; documented emergency procedure approved after the fact"],
["Release management","Bundle and deploy approved changes"],
["Configuration management","CMDB: configuration items and their relationships"],
["Service level management","SLAs with the business, OLAs internally, underpinning contracts"],
["Capacity management","Anticipate resource needs"]])}
<div class="box key"><h4>Segregation of duties in change management</h4><p>Developers must not move their own code into production. A third party (operations team, controlled automated tool) moves the approved code. The auditor compares the list of changes in production with the approved requests.</p></div>
<h2>Operations</h2>
<p>Job scheduling (batch), monitoring, log management, patch management, asset and license management, control of powerful utilities, database management (DBA: very high privileges to monitor).</p>
<h2>Hardware and networks</h2>
<p>Preventive maintenance, capacity monitoring, exception reports. Network: OSI model, LAN/WAN, cloud, virtualization. The auditor checks documentation, monitoring and equipment security.</p>
<h2>Shadow IT and end-user computing</h2>
<p>Critical spreadsheets developed by users (EUC) often escape controls: inventory, protection, formula validation, backup.</p>
`},

{ day:"Domain 4", title:"Resilience: continuity and recovery", html: D(4,"Information Systems Operations and Business Resilience",26) + `
<h2>Business continuity plan steps</h2>
<ol><li><b>Business impact analysis (BIA)</b>: critical processes, impacts of an interruption, RTO, RPO. It is the first and most important step.</li><li>Continuity and recovery strategy.</li><li>Writing the BCP (business continuity) and DRP (IT disaster recovery).</li><li>Training and awareness.</li><li>Testing.</li><li>Plan maintenance.</li></ol>
${T(["Metric","Meaning"],[["RTO","Maximum tolerable downtime for recovery"],["RPO","Maximum tolerable data loss"],["SDO","Minimum service level during the crisis"],["MTO / MTD","Maximum time before irreversible damage"]])}
<p>The shorter the RTO and RPO, the more expensive the solution.</p>
<h2>Recovery sites</h2>
${T(["Site","Lead time","Cost"],[["Mirrored","Almost immediate","Very high"],["Hot","Hours","High"],["Warm","Days","Medium"],["Cold","Weeks","Low"],["Reciprocal agreement","Variable","Low but unreliable"]])}
<h2>Backups</h2>
<p>Full, incremental, differential; rotation (grandfather / father / son); off-site copy; regular restore tests; electronic journaling and mirroring for very short RPOs. RAID: availability, not backup.</p>
<h2>Plan testing</h2>
${T(["Test","Description"],[["Checklist review","Read through the plan"],["Tabletop / walkthrough","Run through a scenario in a meeting"],["Simulation","Play a scenario without stopping production"],["Parallel","Start the recovery site without stopping production"],["Full interruption","Actual shutdown of production: the most realistic and the riskiest"]])}
<div class="box tip"><h4>What the auditor checks first</h4><p>That the plan is based on an up-to-date BIA, that it was tested recently, that test results led to corrections, and that copies of the plan exist off-site.</p></div>
<h2>Security incident management</h2>
<p>Preparation, detection, containment, eradication, recovery, lessons learned. Distinguish incident, problem and crisis; plan crisis communication.</p>
`},

{ day:"Domain 5", title:"Asset protection: access and identities", html: D(5,"Protection of Information Assets",26) + `
<h2>Security framework</h2>
<p>Security policy, classification of information by the <b>owner</b>, roles (owner, custodian, user, security administrator), awareness, privacy compliance (principles: purpose limitation, minimization, consent, limited retention).</p>
<h2>Logical access control</h2>
<ul><li><b>Identification</b> (who you claim to be), <b>authentication</b> (proving it), <b>authorization</b> (what you can do), <b>accountability</b>.</li><li>Factors: knowledge, possession, characteristic (biometrics).</li><li>Biometrics: <b>FAR</b> (false acceptance rate), <b>FRR</b> (false rejection rate), <b>CER/EER</b> (crossover point: the lower, the better the system). For a sensitive site, reduce the FAR.</li><li>Least privilege, need to know, periodic access reviews.</li><li>Privileged and generic accounts: limit, monitor, make them named where possible.</li></ul>
<div class="box key"><h4>Access audit: the standard test</h4><p>Take the list of leavers for the period (HR source, independent) and check that accounts were disabled on time. Take a sample of access rights and check approval and consistency with the job.</p></div>
<h2>Physical and environmental security</h2>
<p>Access controls (badges, anti-tailgating vestibules), surveillance, fire detection and suppression (inert gases for server rooms, pre-action sprinklers), air conditioning, water detection, UPS, generators, raised floor.</p>
<h2>Network and endpoint security</h2>
<p>Firewalls (packet filtering, stateful, application, NGFW), DMZ, IDS/IPS, VPN, segmentation, WPA3 Wi-Fi, endpoint hardening, antimalware, EDR, patch management, mobile device management.</p>
`},

{ day:"Domain 5", title:"Asset protection: data, cryptography and monitoring", html: D(5,"Protection of Information Assets",26) + `
<h2>Cryptography</h2>
${T(["Tool","Provides"],[["Symmetric encryption (AES)","Confidentiality, fast"],["Asymmetric encryption (RSA, ECC)","Key exchange, signatures"],["Hashing (SHA-256)","Integrity"],["Digital signature","Integrity, authentication, non-repudiation"],["PKI","Trust in public keys through certificates"]])}
<p>The auditor mainly checks <b>key management</b>: generation, storage (HSM), rotation, revocation, segregation of roles.</p>
<h2>Data protection</h2>
<p>Classification, DLP, masking and anonymization of test data, encryption at rest and in transit, secure erasure and media destruction, retention according to legal rules.</p>
<h2>Cloud and third parties</h2>
<p>Shared responsibility (IaaS, PaaS, SaaS), data location, right to audit, SOC 2 reports, exit/reversibility, encryption with customer-controlled keys.</p>
<h2>Monitoring and testing</h2>
<ul><li>Logging and SIEM: logs protected against modification, synchronized clocks, regular review.</li><li>Authorized vulnerability scans and penetration tests.</li><li>Incident management and digital forensics: chain of custody, bit-by-bit copy, hashing.</li></ul>
<h2>Current threats</h2><p>Ransomware, phishing, CEO fraud, supply chain attacks, insider threats, AI-related risks (data leakage into public tools, uncontrolled automated decisions).</p>
`}
];

const exam = `
<p class="lead">ISACA's CISA (Certified Information Systems Auditor) is the global reference for IS auditors. Check the latest information on isaca.org before registering.</p>
<div class="grid">
<div class="card"><span class="stat">150</span><span class="t">multiple-choice questions</span><span class="d">4 options, one correct answer</span></div>
<div class="card"><span class="stat">4 h</span><span class="t">duration</span><span class="d">About 1.5 minutes per question</span></div>
<div class="card"><span class="stat">450</span><span class="t">out of 800 to pass</span><span class="d">Scaled score from 200 to 800</span></div>
</div>
<p>The exam is taken at a PSI test center or online with remote proctoring. It is offered in several languages, including French and English. The scaled score is not a percentage: on this site, aim for at least 75% on the mock exams to keep a margin.</p>
<h2>The 5 domains</h2>
<div class="tablewrap"><table><thead><tr><th>Domain</th><th>Weight</th><th>Modules</th></tr></thead><tbody>
<tr><td>1. Information System Auditing Process</td><td class="num">18%</td><td>1, 2</td></tr>
<tr><td>2. Governance and Management of IT</td><td class="num">18%</td><td>3, 4</td></tr>
<tr><td>3. Information Systems Acquisition, Development and Implementation</td><td class="num">12%</td><td>5, 6</td></tr>
<tr><td>4. Information Systems Operations and Business Resilience</td><td class="num">26%</td><td>7, 8</td></tr>
<tr><td>5. Protection of Information Assets</td><td class="num">26%</td><td>9, 10</td></tr>
</tbody></table></div>
<h2>After the exam</h2>
<p>To obtain the designation, you must apply for certification within 5 years of passing, with <b>5 years of experience</b> in IS audit, control, assurance or security. Substitutions reduce this to as little as 3 years (university degree, other certifications). Maintenance requires 20 hours of continuing education (CPE) per year and 120 hours over 3 years, plus an annual fee.</p>
<h2>Think like ISACA</h2>
<ol><li>You are the auditor: you identify, assess and recommend. You do not fix things yourself and you do not decide on management's behalf.</li><li>Risk first: the right answer often addresses the highest risk or the cause rather than the symptom.</li><li>Keywords "FIRST", "BEST", "MOST important" change everything: several answers can be true.</li><li>An answer that starts with understanding or assessing (review the policy, perform a BIA, identify risks) is often the first step.</li><li>Independence and the audit committee are the answer when the question is about a conflict.</li></ol>
<h2>8-week study plan</h2>
<div class="tablewrap"><table><thead><tr><th>Week</th><th>Work</th></tr></thead><tbody>
<tr><td>1 and 2</td><td>Modules 1 and 2, domain 1 quiz</td></tr><tr><td>3</td><td>Modules 3 and 4</td></tr><tr><td>4</td><td>Modules 5 and 6</td></tr><tr><td>5</td><td>Modules 7 and 8</td></tr><tr><td>6</td><td>Modules 9 and 10</td></tr><tr><td>7 and 8</td><td>Mock exams, official ISACA question bank (QAE), reviewing mistakes</td></tr>
</tbody></table></div>
`;

const c = CERTS.find(x => x.id === "cisa");
c.en = { title:"CISA", intro:"The reference certification for information systems auditing: audit process, governance, projects, operations, resilience and asset protection.", modules, exam };
})();
