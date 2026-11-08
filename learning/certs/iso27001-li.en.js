/* ISO/IEC 27001 Lead Implementer: English version of the course (original wording, clauses cited by number). */
(function(){
const C = s => '<span class="clause">' + s + '</span>';
const N = '<span class="new">new in 2022</span>';
const T = (head, rows) => '<div class="tablewrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';

const annexA = [
["5.1","Information security policies","Overall policy plus topic-specific policies, approved and reviewed"],
["5.2","Information security roles and responsibilities","Who does what, formally assigned"],
["5.3","Segregation of duties","No single person controls a whole sensitive process"],
["5.4","Management responsibilities","Managers require staff to apply the rules"],
["5.5","Contact with authorities","Established contacts (police, regulator, national CERT)"],
["5.6","Contact with special interest groups","Forums, associations, sector CERTs"],
["5.7","Threat intelligence","Collect and analyse information about threats",1],
["5.8","Information security in project management","Security requirements from the start of every project"],
["5.9","Inventory of information and associated assets","Up-to-date inventory with an owner"],
["5.10","Acceptable use of assets","Acceptable use rules"],
["5.11","Return of assets","Recover equipment and badges on departure"],
["5.12","Classification of information","Levels based on C, I, A needs and legal requirements"],
["5.13","Labelling of information","Label according to the classification scheme"],
["5.14","Information transfer","Rules for every transfer: email, media, verbal"],
["5.15","Access control","Policy based on need to know"],
["5.16","Identity management","Full lifecycle of identities"],
["5.17","Authentication information","Allocation and management of secrets (passwords…)"],
["5.18","Access rights","Provisioning, periodic review, removal"],
["5.19","Information security in supplier relationships","Manage supplier-related risks"],
["5.20","Security within supplier agreements","Security clauses in contracts"],
["5.21","ICT supply chain security","Risks cascading through ICT products and services"],
["5.22","Monitoring of supplier services","Monitor, review and manage changes to services"],
["5.23","Information security for cloud services","Acquiring, using, managing and exiting cloud services",1],
["5.24","Incident management planning and preparation","Process, roles and procedures ready in advance"],
["5.25","Assessment of security events","Decide whether an event is an incident"],
["5.26","Response to security incidents","Respond according to documented procedures"],
["5.27","Learning from incidents","Lessons learned to strengthen controls"],
["5.28","Collection of evidence","Identify, collect and preserve evidence"],
["5.29","Information security during disruption","Keep security in place during a crisis"],
["5.30","ICT readiness for business continuity","ICT ready according to continuity objectives",1],
["5.31","Legal, regulatory and contractual requirements","Identify and keep obligations up to date"],
["5.32","Intellectual property rights","Licences, copyright"],
["5.33","Protection of records","Against loss, destruction, falsification"],
["5.34","Privacy and protection of PII","Comply with personal data laws"],
["5.35","Independent review of information security","Planned independent review or after major changes"],
["5.36","Compliance with policies and standards","Check regularly that rules are applied"],
["5.37","Documented operating procedures","Written and available procedures"],
["6.1","Screening","Background checks before hiring"],
["6.2","Terms and conditions of employment","Security responsibilities in the contract"],
["6.3","Awareness, education and training","Programme adapted to roles"],
["6.4","Disciplinary process","Formal and communicated"],
["6.5","Responsibilities after termination or change","Duties that remain valid after leaving"],
["6.6","Confidentiality agreements","NDAs identified, signed, reviewed"],
["6.7","Remote working","Controls for remote work"],
["6.8","Information security event reporting","Simple channel known to everyone"],
["7.1","Physical security perimeters","Defined and protected areas"],
["7.2","Physical entry","Controlled entry points"],
["7.3","Securing offices, rooms and facilities","Secure design of premises"],
["7.4","Physical security monitoring","Intrusion detection, video surveillance",1],
["7.5","Physical and environmental threats","Fire, flood, earthquake…"],
["7.6","Working in secure areas","Rules specific to sensitive areas"],
["7.7","Clear desk and clear screen","Nothing sensitive left in view"],
["7.8","Equipment siting and protection","Safe placement of equipment"],
["7.9","Security of assets off-premises","Laptops and equipment on the move"],
["7.10","Storage media","Lifecycle: use, transport, disposal"],
["7.11","Supporting utilities","Power, air conditioning, telecoms"],
["7.12","Cabling security","Protection of power and network cables"],
["7.13","Equipment maintenance","Correct and controlled maintenance"],
["7.14","Secure disposal or re-use of equipment","Secure wiping before disposal"],
["8.1","User endpoint devices","Protection of workstations and mobiles"],
["8.2","Privileged access rights","Restricted and managed"],
["8.3","Information access restriction","According to the access control policy"],
["8.4","Access to source code","Controlled read and write access"],
["8.5","Secure authentication","MFA, lockout, etc. according to risk"],
["8.6","Capacity management","Capacity monitored and planned"],
["8.7","Protection against malware","Anti-malware plus awareness"],
["8.8","Management of technical vulnerabilities","Monitoring, assessment, patching"],
["8.9","Configuration management","Secure baselines established and monitored",1],
["8.10","Information deletion","Delete when no longer needed",1],
["8.11","Data masking","Pseudonymisation, anonymisation, masking",1],
["8.12","Data leakage prevention","DLP on systems, networks, endpoints",1],
["8.13","Information backup","Tested copies according to a policy"],
["8.14","Redundancy of processing facilities","Sufficient availability"],
["8.15","Logging","Logs produced, protected, analysed"],
["8.16","Monitoring activities","Detect anomalous behaviour",1],
["8.17","Clock synchronisation","Common time source"],
["8.18","Use of privileged utility programs","Restricted and controlled use"],
["8.19","Installation of software on operational systems","Controlled procedures"],
["8.20","Network security","Networks protected and managed"],
["8.21","Security of network services","Requirements for network services"],
["8.22","Segregation of networks","Segmentation"],
["8.23","Web filtering","Block malicious websites",1],
["8.24","Use of cryptography","Rules and key management"],
["8.25","Secure development life cycle","Security at every development stage"],
["8.26","Application security requirements","Defined before development or purchase"],
["8.27","Secure architecture and engineering","Principles applied to systems"],
["8.28","Secure coding","Good programming practices",1],
["8.29","Security testing","During development and acceptance"],
["8.30","Outsourced development","Direct and monitor the provider"],
["8.31","Separation of environments","Development, test and production kept apart"],
["8.32","Change management","Changes follow a procedure"],
["8.33","Test information","Select and protect test data"],
["8.34","Protection during audit testing","Plan audit tests so they do not disrupt operations"]
];
function annexTable(prefix){
  const rows = annexA.filter(r => r[0].split('.')[0] === prefix).map(r => '<tr><td class="num">A.' + r[0] + '</td><td>' + r[1] + (r[3] ? N : '') + '</td><td>' + r[2] + '</td></tr>').join('');
  return '<div class="tablewrap"><table><thead><tr><th>Control</th><th>Title (paraphrased)</th><th>Key idea</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
}

const modules = [
{ day:"Day 1", title:"Information security fundamentals", html:`
<p class="lead">Before implementing an ISMS you need to speak the same language as the standard and the examiner. This module sets the vocabulary.</p>
<h2>The CIA triad</h2>
${T(["Property","Plain definition","Example of a breach"],[
["<b>Confidentiality</b>","Information is available only to authorised people, entities or processes.","A bank's customer database is leaked."],
["<b>Integrity</b>","Information is accurate and complete and has not been changed without authorisation.","A supplier's bank details are altered in the ERP."],
["<b>Availability</b>","Information is accessible and usable when an authorised entity needs it.","Ransomware stops invoicing."]])}
<p>Authenticity, non-repudiation, accountability and reliability are often added. ISO/IEC 27000 gives the reference definitions.</p>
<h2>Risk vocabulary</h2>
<ul>
<li><b>Asset</b>: anything of value to the organisation (information, software, hardware, people, reputation…). The 2022 edition speaks of "information and other associated assets".</li>
<li><b>Threat</b>: potential cause of an incident (attacker, fire, human error).</li>
<li><b>Vulnerability</b>: weakness of an asset or control that a threat can exploit (missing patch, weak password).</li>
<li><b>Risk</b>: effect of uncertainty on objectives. In practice: the combination of the likelihood of an event and its consequences.</li>
<li><b>Control</b>: measure that maintains or modifies risk. It can be preventive, detective or corrective.</li>
<li>Security <b>event</b>: an occurrence indicating a possible breach. <b>Incident</b>: one or more unwanted events with a significant probability of compromising operations.</li>
<li><b>Residual risk</b>: risk remaining after treatment.</li>
</ul>
<div class="box key"><h4>Remember for the exam</h4><p>Threat + vulnerability + asset = risk scenario. A control acts on likelihood (preventive), on detection (detective) or on impact (corrective).</p></div>
<h2>Types of controls</h2>
${T(["By nature","Examples"],[["Organisational / administrative","Policies, procedures, access reviews, contracts"],["Technical","Firewall, encryption, MFA, logging"],["Physical","Badges, CCTV, locked server room"],["People","Screening, awareness, NDAs"],["Legal","Contract clauses, legal compliance"]])}
<h2>What is a management system?</h2>
<p>A management system is the set of interrelated elements of an organisation (policies, objectives, processes, roles) used to achieve objectives. The <b>ISMS</b> (information security management system) applies this logic to information security, starting from risk.</p>
<p>The ISMS is not an IT project. It involves top management, HR, purchasing, legal, facilities and IT.</p>
<h2>The PDCA cycle</h2>
${T(["Phase","ISO 27001 clauses","What you do"],[["<b>Plan</b>","4, 5, 6, 7","Context, scope, policy, risks, objectives, resources"],["<b>Do</b>","8","Implement the treatment plan and processes"],["<b>Check</b>","9","Measure, audit, management review"],["<b>Act</b>","10","Correct nonconformities, improve continually"]])}
<p>The 2022 edition no longer names PDCA explicitly, but the logic remains. Trainers and the PECB exam still use it.</p>
<h2>The ISO/IEC 27000 family</h2>
${T(["Standard","Purpose","Certifiable?"],[
["ISO/IEC 27000","Overview and vocabulary","No"],["<b>ISO/IEC 27001</b>","ISMS requirements (the \"shall\")","<b>Yes</b>"],["ISO/IEC 27002","Detailed guidance on the 93 Annex A controls","No"],["ISO/IEC 27003","Guidance for implementing the ISMS","No"],["ISO/IEC 27004","Monitoring, measurement, analysis, evaluation","No"],["ISO/IEC 27005","Information security risk management","No"],["ISO/IEC 27006","Requirements for bodies certifying ISMSs","For certification bodies"],["ISO/IEC 27007","ISMS auditing (complements ISO 19011)","No"],["ISO/IEC 27017 / 27018","Cloud security / PII in public cloud","No (added to the ISMS)"],["ISO/IEC 27701","Privacy information management (PIMS)","Yes (standalone 2025 edition)"],["ISO/IEC 27035","Incident management","No"],["ISO 22301","Business continuity","Yes"],["ISO 31000","Risk management (generic)","No"],["ISO 19011","Guidelines for auditing management systems","No"]])}
<div class="box tip"><h4>Classic trap</h4><p>No one is <b>ever</b> certified against ISO 27002. An organisation is certified against ISO/IEC 27001; ISO 27002 is a guide to good practice.</p></div>
<h2>Requirement, recommendation, possibility</h2>
<ul><li><b>shall</b>: mandatory, auditable requirement;</li><li><b>should</b>: recommendation;</li><li><b>may</b>: permission; <b>can</b>: possibility or capability.</li></ul>
<p>Clauses 4 to 10 of ISO 27001 contain "shall" statements. ISO 27002 contains "should" statements.</p>
`},
{ day:"Day 1", title:"ISO/IEC 27001:2022 and its structure", html:`
<h2>History</h2>
<ul><li>1995: BS 7799 (United Kingdom);</li><li>2005: first ISO/IEC 27001;</li><li>2013: rewritten on the common management system structure;</li><li>October 2022: current edition, with Annex A reduced from 114 to 93 controls;</li><li>February 2024: <b>Amendment 1</b> on climate change.</li></ul>
<p>2013 certificates had to move to the 2022 version before <b>31 October 2025</b>. Only 2022 certificates are now valid.</p>
<h2>The harmonized structure (HS)</h2>
<p>All recent management system standards (ISO 9001, 14001, 22301, 27001, 42001…) share the same 10-clause structure, formerly called "Annex SL" and now the "harmonized structure". This makes integrated management systems easier.</p>
${T(["Clause","Title","Main content"],[["0–3","Introduction, scope, references, terms","No requirements"],["4","Context of the organization","Issues, interested parties, scope, ISMS"],["5","Leadership","Top management commitment, policy, roles"],["6","Planning","Risks and opportunities, objectives, changes"],["7","Support","Resources, competence, awareness, communication, documentation"],["8","Operation","Operational control, risk assessment and treatment"],["9","Performance evaluation","Measurement, internal audit, management review"],["10","Improvement","Continual improvement, nonconformities, corrective action"],["Annex A","Control reference","93 controls in 4 themes"]])}
<div class="box key"><h4>Remember</h4><p>To be certified, an organisation must meet <b>all</b> requirements of clauses 4 to 10. No exclusions are allowed there. Only Annex A controls can be excluded, with a justification in the Statement of Applicability.</p></div>
<h2>What changed in 2022</h2>
<ul>
<li>${C("4.2")}: determine which interested-party requirements will be addressed through the ISMS.</li>
<li>${C("4.4")}: the ISMS includes the needed processes and their interactions.</li>
<li>${C("6.2")}: objectives must be monitored and available as documented information.</li>
<li>${C("6.3")} ${N}: changes to the ISMS must be planned.</li>
<li>${C("8.1")}: criteria for processes and control of externally provided processes, products or services.</li>
<li>${C("9.3.2")}: management review also considers changes in the needs and expectations of interested parties.</li>
<li>${C("10")}: sub-clauses swapped (10.1 continual improvement, 10.2 nonconformity).</li>
<li>Annex A: 93 controls in 4 themes, 11 of them new, with attributes in ISO 27002.</li>
</ul>
<h2>Amendment 1:2024 (climate)</h2>
<p>Two short additions: in ${C("4.1")}, the organisation shall determine whether climate change is a relevant issue; in ${C("4.2")}, a note says interested parties can have climate-related requirements. An auditor may ask for evidence that the question was considered, even if the answer is "not relevant".</p>
<h2>Required documented information</h2>
<p>The standard requires documented information to be "maintained" or "retained". This minimum list must be known by heart.</p>
${T(["Clause","Documented information"],[["4.3","Scope of the ISMS"],["5.2","Information security policy"],["6.1.2","Risk assessment process"],["6.1.3","Risk treatment process"],["6.1.3 d)","Statement of Applicability (SoA)"],["6.2","Information security objectives"],["7.2","Evidence of competence"],["7.5.1 b)","Any information the organisation deems necessary"],["8.1","Information showing processes are carried out as planned"],["8.2","Results of risk assessments"],["8.3","Results of risk treatment"],["9.1","Results of monitoring and measurement"],["9.2.2","Audit programme and audit results"],["9.3.3","Results of management reviews"],["10.2","Nature of nonconformities, actions taken and results of corrective actions"]])}
<p>The risk treatment plan is required by ${C("6.1.3 e)")}; in practice it is always documented. Annex A policies and procedures become mandatory once a selected control calls for them (for example A.5.1 for topic-specific policies, A.5.37 for operating procedures).</p>
`},
{ day:"Day 1", title:"Starting the project: context, interested parties and scope", html:`
<p class="lead">The Lead Implementer runs the project. This module covers project initiation and clause 4.</p>
<h2>Before the standard: prepare the project</h2>
<ol><li><b>Understand the organisation</b>: mission, business processes, organisation chart, information system, legal obligations (in Côte d'Ivoire, for example, Law No. 2013-450 on personal data protection enforced by ARTCI, and BCEAO requirements for banks).</li><li><b>Gap analysis</b>: compare the current state with clauses 4 to 10 and Annex A to size the effort.</li><li><b>Business case</b>: benefits (customer trust, tenders, compliance, fewer incidents), costs, duration, project risks.</li><li><b>Management approval</b>: without formal top management commitment the project fails. It is also a clause 5 requirement.</li><li><b>Project organisation</b>: sponsor, project manager (often the Lead Implementer), CISO, steering committee, business contacts; schedule and budget.</li></ol>
<h2>${C("4.1")} Internal and external issues</h2>
<p>The organisation identifies the issues that affect its ability to achieve the intended outcomes of the ISMS. Practical tools: <b>PESTLE</b> for external issues (political, economic, social, technological, legal, environmental), <b>SWOT</b> and analysis of culture and structure for internal issues. Since Amendment 1, climate change is considered.</p>
<h2>${C("4.2")} Interested parties</h2>
<p>Three steps: determine the relevant interested parties, their relevant requirements, then which of these requirements will be addressed through the ISMS.</p>
${T(["Interested party","Possible requirement"],[["Customers","Confidentiality of their data, service availability"],["Regulator (ARTCI, BCEAO, banking commission)","Compliance, incident reporting"],["Shareholders","Protection of value and reputation"],["Employees","Protection of their HR data, clear rules"],["Suppliers, hosting providers","Contract clauses"]])}
<h2>${C("4.3")} ISMS scope</h2>
<p>The scope takes into account the issues (4.1), the requirements (4.2) and the <b>interfaces and dependencies</b> with activities performed by other organisations. It is documented and described along several axes:</p>
<ul><li>organisational (entities, departments);</li><li>processes and activities;</li><li>physical (sites);</li><li>information system (networks, applications, hosting, cloud);</li><li>justified exclusions and interfaces.</li></ul>
<div class="box tip"><h4>Classic trap</h4><p>The scope can be limited (one data centre, one department) but must be coherent. Excluding a part that clearly processes in-scope information, or a critical interface without controlling it, is a weakness an auditor will raise.</p></div>
<h2>${C("4.4")} The ISMS</h2>
<p>The organisation establishes, implements, maintains and continually improves the ISMS, including its processes and their interactions. A process map of the ISMS is the best evidence.</p>
`},
{ day:"Day 2", title:"Leadership, policy and roles", html:`
<h2>${C("5.1")} Leadership and commitment</h2>
<p>Top management must demonstrate commitment, in particular by:</p>
<ul><li>establishing the policy and objectives, compatible with strategy;</li><li>integrating ISMS requirements into business processes;</li><li>providing resources;</li><li>communicating the importance of security and compliance;</li><li>ensuring the ISMS achieves its outcomes;</li><li>directing and supporting people;</li><li>promoting continual improvement;</li><li>supporting other managers in their areas.</li></ul>
<p>Typical evidence: signed policy, allocated budget, participation in management reviews, a security committee chaired by a member of top management.</p>
<h2>${C("5.2")} Information security policy</h2>
<p>It must suit the organisation's purpose, provide a framework for setting objectives, include a commitment to meet applicable requirements and a commitment to continual improvement. It is documented, communicated internally and made available to interested parties as appropriate.</p>
<h3>Overall policy and topic-specific policies</h3>
<p>The clause 5.2 policy is the high-level document. Control A.5.1 adds <b>topic-specific policies</b> (access control, backup, cryptography, remote working, suppliers…) approved by management and reviewed at planned intervals.</p>
${T(["Level","Document","Question"],[["1","Overall policy","Why?"],["2","Topic-specific policies","What?"],["3","Procedures","How, who, when?"],["4","Work instructions, forms, records","Detail and evidence"]])}
<h2>${C("5.3")} Roles, responsibilities and authorities</h2>
<p>Top management assigns and communicates responsibilities, in particular for ensuring ISMS conformity and reporting on its performance to top management.</p>
<ul><li><b>Top management</b>: ultimately accountable, approves the policy and major residual risks.</li><li><b>Security / steering committee</b>: decisions, follow-up.</li><li><b>CISO</b>: runs the ISMS day to day.</li><li><b>Risk owners</b>: accept the treatment plan and residual risks.</li><li><b>Asset owners</b>: classification, access rights.</li><li><b>Users</b>: apply the rules and report events.</li></ul>
<p>A <b>RACI</b> matrix (Responsible, Accountable, Consulted, Informed) is the usual tool. Remember segregation of duties (A.5.3): whoever administers a system should not audit it.</p>
`},
{ day:"Day 2", title:"Risk assessment", html:`
<p class="lead">The heart of the ISMS and a big part of the exam. The standard imposes a process, not a method.</p>
<h2>${C("6.1.1")} Actions to address risks and opportunities</h2>
<p>Considering 4.1 and 4.2, the organisation determines the risks and opportunities to address so the ISMS achieves its outcomes, prevents undesired effects and improves. These are risks <i>to the ISMS</i> (for example lack of support, staff turnover); information security risks themselves are handled in 6.1.2 and 6.1.3.</p>
<h2>${C("6.1.2")} The assessment process</h2>
<p>The organisation defines and applies a process that:</p>
<ol type="a"><li>establishes and maintains <b>criteria</b>: risk acceptance criteria and criteria for performing assessments;</li><li>produces <b>consistent, valid and comparable</b> results when repeated;</li><li><b>identifies</b> risks associated with loss of confidentiality, integrity and availability within the scope, and their <b>owners</b>;</li><li><b>analyses</b> risks: potential consequences, realistic likelihood, risk levels;</li><li><b>evaluates</b> risks: compares them with the criteria and prioritises them for treatment.</li></ol>
<p>The process is documented (6.1.2) and the results of each assessment are retained (8.2). Assessments are repeated at planned intervals or when significant changes occur (8.2).</p>
<h2>ISO/IEC 27005 and methods</h2>
<p>ISO/IEC 27005:2022 provides the framework: context establishment, assessment (identification, analysis, evaluation), treatment, acceptance, communication and consultation, monitoring and review. It offers two identification approaches:</p>
<ul><li><b>asset-based</b>: assets → threats → vulnerabilities → consequences;</li><li><b>event-based</b> (strategic scenarios): risk sources, targeted objectives, attack paths.</li></ul>
<p>Known methods: <b>EBIOS Risk Manager</b> (ANSSI, widely used in French-speaking Africa), MEHARI (CLUSIF), OCTAVE, NIST SP 800-30, CRAMM. All are acceptable if they meet 6.1.2.</p>
<h2>Qualitative or quantitative analysis</h2>
${T(["Approach","Principle","Strength","Limit"],[["Qualitative","Scales (low, medium, high)","Simple, quick, easy to understand","Subjective"],["Semi-quantitative","Numbered scales 1 to 4, risk = L × I","Allows ranking","Numbers remain conventional"],["Quantitative","Monetary values: ALE = SLE × ARO","Speaks to finance","Data rarely available"]])}
<h3>Example of a 4 × 4 matrix</h3>
${T(["Likelihood \\ Impact","1 Minor","2 Significant","3 Serious","4 Critical"],[["4 Almost certain","4","8","12","16"],["3 Likely","3","6","9","12"],["2 Possible","2","4","6","8"],["1 Rare","1","2","3","4"]])}
<p>Example acceptance criterion: a risk ≤ 4 is acceptable; 6 to 8 is treated within 6 months; ≥ 9 is a priority and requires management approval.</p>
<div class="box"><h4>Quantitative calculation</h4><p>A server is worth 20,000,000 XOF. A flood would destroy 50% of it (exposure factor). SLE = 10,000,000 XOF. One flood every 5 years: ARO = 0.2. ALE = 2,000,000 XOF per year. A control costing more than that each year is not cost-effective for this risk alone.</p></div>
<div class="box tip"><h4>Classic trap</h4><p>The risk owner is not necessarily the asset owner or the CISO. It is the person with the authority and accountability to manage the risk, usually a business manager.</p></div>
`},
{ day:"Day 2", title:"Risk treatment and Statement of Applicability", html:`
<h2>${C("6.1.3")} The treatment process</h2>
<p>The six steps, to know in order:</p>
<ol type="a"><li>select appropriate <b>treatment options</b>;</li><li>determine <b>all controls</b> needed to implement those options (from any source);</li><li><b>compare</b> them with Annex A to verify no necessary control has been omitted;</li><li>produce the <b>Statement of Applicability</b>;</li><li>formulate a <b>risk treatment plan</b>;</li><li>obtain <b>risk owners' approval</b> of the plan and their <b>acceptance of residual risks</b>.</li></ol>
<div class="box key"><h4>Key point</h4><p>Annex A is not the starting point: you start from risks, choose controls, then check against Annex A. The organisation can also design its own controls or take them from other frameworks (NIST, PCI DSS, CIS).</p></div>
<h2>The four options (ISO 27005)</h2>
${T(["Option","Principle","Example"],[["<b>Modify</b> (reduce)","Add or strengthen controls","MFA on email"],["<b>Retain</b> (accept)","Informed decision to keep the risk","Low risk, control too costly"],["<b>Avoid</b>","Remove the activity or source","Shut down an obsolete web service"],["<b>Share</b> (transfer)","Share with a third party","Cyber insurance, outsourcing"]])}
<p><b>Accountability</b> is never transferred: if a subcontractor leaks data, the organisation remains accountable to its customers and regulator.</p>
<h2>The Statement of Applicability (SoA)</h2>
<p>Mandatory document and central piece of the certification audit. It contains:</p>
<ul><li>the necessary controls (including those outside Annex A);</li><li>the justification for their inclusion;</li><li>their implementation status (yes, no, partial);</li><li>the justification for excluding any Annex A control.</li></ul>
${T(["Control","Applicable","Justification","Status","Reference"],[["A.5.23","Yes","Email and storage in SaaS (risks R-07, R-12)","Partial","POL-CLOUD v1"],["A.8.4","No","No in-house development, no source code held","n/a","Scope §3"],["A.7.4","Yes","On-site server room (R-03); guarding contract","Yes","PRO-PHY-02"]])}
<p>A justification for inclusion can come from a risk, a legal or contractual requirement, or a good-practice decision.</p>
<h2>The risk treatment plan</h2>
<p>For each risk to treat: controls to implement, owner, resources, deadline, priority, target residual risk, how it will be verified. It is approved by risk owners (6.1.3 f) and its results are retained (8.3).</p>
<h2>Risk acceptance</h2>
<p>A risk above the threshold can be accepted only by a formal, traceable decision of an authorised person, with follow-up. This is a frequent exam question.</p>
`},
{ day:"Day 2–3", title:"Annex A: the 93 controls", html:`
<p class="lead">Annex A of ISO 27001:2022 lists 93 controls in 4 themes. ISO 27002:2022 explains each one (purpose, guidance, other information).</p>
<div class="grid"><div class="card"><span class="stat">37</span><span class="t">Organisational</span><span class="d">A.5.1 to A.5.37</span></div><div class="card"><span class="stat">8</span><span class="t">People</span><span class="d">A.6.1 to A.6.8</span></div><div class="card"><span class="stat">14</span><span class="t">Physical</span><span class="d">A.7.1 to A.7.14</span></div><div class="card"><span class="stat">34</span><span class="t">Technological</span><span class="d">A.8.1 to A.8.34</span></div></div>
<p>Before 2022: 114 controls in 14 domains (A.5 to A.18). Controls were merged: 58 revised, 24 merged, 11 new.</p>
<h2>The 11 new controls</h2>
<p>A.5.7 threat intelligence · A.5.23 cloud services · A.5.30 ICT readiness for continuity · A.7.4 physical monitoring · A.8.9 configuration management · A.8.10 information deletion · A.8.11 data masking · A.8.12 data leakage prevention · A.8.16 monitoring activities · A.8.23 web filtering · A.8.28 secure coding.</p>
<h2>Attributes (ISO 27002)</h2>
${T(["Attribute","Values"],[["Control type","Preventive, detective, corrective"],["Security properties","Confidentiality, integrity, availability"],["Cybersecurity concepts","Identify, protect, detect, respond, recover (aligned with NIST CSF)"],["Operational capabilities","Governance, asset management, information protection, HR security, physical security, etc."],["Security domains","Governance and ecosystem, protection, defence, resilience"]])}
<p>Attributes let you filter and present controls as needed. They are in ISO 27002 only, not in ISO 27001.</p>
<h2>A.5 Organisational controls (37)</h2>${annexTable("5")}
<h2>A.6 People controls (8)</h2>${annexTable("6")}
<h2>A.7 Physical controls (14)</h2>${annexTable("7")}
<h2>A.8 Technological controls (34)</h2>${annexTable("8")}
<div class="box tip"><h4>Memory aid</h4><p>People = theme 6 with 8 controls; physical = theme 7 with 14 (twice as many); then 37 and 34 for the two big themes. 37 + 8 + 14 + 34 = 93.</p></div>
`},
{ day:"Day 3", title:"Objectives, support and documented information", html:`
<h2>${C("6.2")} Information security objectives</h2>
<p>Objectives are consistent with the policy, measurable where practicable, take requirements and risk results into account, and are monitored, communicated, updated and documented. For each objective the organisation determines: what will be done, resources, who is responsible, when it will be completed and how results will be evaluated.</p>
<div class="box"><h4>SMART objective</h4><p>"By 30 June 2027, 95% of privileged accounts are protected by MFA, measured monthly by the IAM team."</p></div>
<h2>${C("6.3")} Planning of changes ${N}</h2>
<p>When the ISMS needs to change (new site, merger, new scope), the change is carried out in a planned manner. Do not confuse with control A.8.32 (technical change management).</p>
<h2>${C("7.1")} Resources</h2><p>People, money, technology, time. Evidence: planned budget and headcount.</p>
<h2>${C("7.2")} Competence</h2>
<p>Determine the competence needed, ensure people are competent (training, experience), act where needed (training, mentoring, hiring) and evaluate the effectiveness of actions. <b>Evidence of competence</b> is retained: diplomas, certificates, training records.</p>
<h2>${C("7.3")} Awareness</h2>
<p>Everyone working under the organisation's control must be aware of the policy, their contribution to ISMS effectiveness and the implications of not conforming. Do not confuse: <b>competence</b> concerns roles that affect security; <b>awareness</b> concerns everyone.</p>
<h2>${C("7.4")} Communication</h2><p>Determine what, when, with whom and how to communicate (internal and external). A communication matrix is enough.</p>
<h2>${C("7.5")} Documented information</h2>
<ul><li>${C("7.5.1")}: what the standard requires and what the organisation deems necessary. The amount depends on size, complexity and competence.</li><li>${C("7.5.2")}: when creating and updating: identification (title, date, author, reference), format and media, review and approval.</li><li>${C("7.5.3")}: control: availability, protection, distribution, access, storage, retention, version control, disposal; including documents of external origin.</li></ul>
<p>Legacy vocabulary: "documents" are <i>maintained</i> (procedures, policies), "records" are <i>retained</i> (evidence).</p>
`},
{ day:"Day 3", title:"Operational implementation", html:`
<h2>${C("8.1")} Operational planning and control</h2>
<p>The organisation plans, implements and controls the needed processes: it sets criteria, controls processes against them, keeps evidence that they run as planned, controls planned changes and the consequences of unintended changes, and controls externally provided processes, products or services (providers, cloud).</p>
<h2>${C("8.2")} and ${C("8.3")}</h2>
<p>Perform risk assessments at planned intervals or when significant changes occur, and implement the treatment plan, retaining the results.</p>
<h2>Typical Lead Implementer workstreams</h2>
<h3>1. Write the documentation system</h3><p>Policy, topic-specific policies, procedures. Golden rule: write what you actually do and can prove.</p>
<h3>2. Manage assets</h3><p>Inventory (A.5.9), owners, classification (A.5.12), labelling (A.5.13).</p>
<h3>3. Implement the treatment plan controls</h3><p>In batches prioritised by risk level.</p>
<h3>4. Raise awareness and train</h3><p>Awareness plan: onboarding, simulated phishing campaigns, periodic reminders, specific training for administrators. Measure: participation rate, click rate.</p>
<h3>5. Manage incidents (A.5.24 to A.5.28, A.6.8)</h3>
${T(["Step","Control"],[["Prepare (roles, procedures, contacts, tools)","A.5.24"],["Report (simple channel)","A.6.8"],["Assess the event","A.5.25"],["Respond (contain, eradicate, recover)","A.5.26"],["Lessons learned","A.5.27"],["Preserve evidence","A.5.28"]])}
<p>Detailed reference: ISO/IEC 27035.</p>
<h3>6. Manage changes (A.8.32)</h3><p>Request, impact analysis, approval, testing, rollback plan, communication.</p>
<h3>7. Lead the human change</h3><p>The ISMS changes habits. Identify resistance, involve the business, explain the "why", find champions.</p>
<h3>8. Run operations</h3><p>Tested backups (A.8.13), vulnerabilities (A.8.8), logs (A.8.15), monitoring (A.8.16), access reviews (A.5.18), suppliers (A.5.19 to A.5.22).</p>
`},
{ day:"Day 4", title:"Monitoring, measurement, analysis and evaluation", html:`
<h2>${C("9.1")} What the standard requires</h2>
<p>The organisation determines <b>what</b> to monitor and measure, <b>the methods</b> (for comparable and reproducible results), <b>when</b> to monitor, <b>who</b> monitors, <b>when</b> to analyse and evaluate, and <b>who</b> analyses. It evaluates the performance and effectiveness of the ISMS. Results are retained.</p>
<h2>ISO/IEC 27004: building an indicator</h2>
<ul><li><b>Performance indicator</b> (efficiency, activity): did we do what was planned? (patched workstation rate);</li><li><b>Effectiveness indicator</b>: did we get the result? (incidents caused by missing patches).</li></ul>
${T(["Indicator","Formula","Target","Frequency"],[["Critical patches applied within 15 days","patches applied ≤ 15 days / critical patches released","≥ 95%","Monthly"],["Leavers' accounts disabled by day+1","accounts disabled ≤ 24 h / leavers","100%","Monthly"],["Simulated phishing click rate","clicks / recipients","&lt; 5%","Quarterly"],["Successful backup restores","successful tests / tests performed","100%","Quarterly"]])}
<p>An indicator sheet states: linked objective, formula, data source, collector, analyst, frequency, target, alert thresholds, recipient.</p>
<h2>Dashboard</h2><p>Summary for management: few indicators, trend, colour coding, decided actions. It feeds the management review (9.3).</p>
`},
{ day:"Day 4", title:"Internal audit and management review", html:`
<h2>${C("9.2")} Internal audit</h2>
<p>Internal audits are conducted at planned intervals to check that the ISMS conforms to the organisation's own requirements and the standard, and is effectively implemented and maintained.</p>
<p>${C("9.2.2")} The <b>audit programme</b> sets frequency, methods, responsibilities, planning requirements and reporting. It considers the importance of the processes and previous audit results. For each audit: defined criteria and scope, auditors selected to ensure <b>objectivity and impartiality</b>, results reported to relevant management. Programme and results are retained.</p>
<div class="box tip"><h4>Classic trap</h4><p>An auditor must not audit their own work. The CISO who wrote the procedures cannot audit them. Solutions: an auditor from another department, an external auditor, cross-audits between subsidiaries.</p></div>
<h3>Audit flow (ISO 19011)</h3>
<ol><li>Initiation and preparation (audit plan, checklists);</li><li>Opening meeting;</li><li>Collecting evidence: interviews, observation, document review, sampling;</li><li>Findings: conformity, nonconformity, opportunity for improvement;</li><li>Closing meeting;</li><li>Report;</li><li>Follow-up of actions.</li></ol>
<h3>Grading findings</h3>
${T(["Type","Practical definition","Example"],[["<b>Major NC</b>","Absence or total failure of a requirement; serious doubt about the ISMS achieving its outcomes","No management review since the ISMS started; no SoA"],["<b>Minor NC</b>","Isolated lapse that does not call the system into question","2 leavers' accounts active out of 25 sampled"],["<b>Opportunity for improvement</b> / observation","No lapse, but a risk of drift","Procedure accurate but hard to read"]])}
<h2>${C("9.3")} Management review</h2>
<p>Top management reviews the ISMS at planned intervals to ensure it remains suitable, adequate and effective.</p>
<h3>${C("9.3.2")} Inputs</h3>
<ol type="a"><li>status of actions from previous reviews;</li><li>changes in external and internal issues;</li><li>changes in the needs and expectations of interested parties ${N};</li><li>feedback on performance: nonconformities and corrective actions, monitoring and measurement results, audit results, achievement of objectives;</li><li>feedback from interested parties;</li><li>risk assessment results and status of the treatment plan;</li><li>opportunities for continual improvement.</li></ol>
<h3>${C("9.3.3")} Outputs</h3>
<p>Decisions on improvement opportunities and any need to change the ISMS. Results are retained (signed minutes).</p>
`},
{ day:"Day 4", title:"Continual improvement and corrective action", html:`
<h2>${C("10.1")} Continual improvement</h2>
<p>The organisation continually improves the suitability, adequacy and effectiveness of the ISMS. Sources: audits, indicators, incidents, management review, monitoring of trends, suggestions.</p>
<h2>${C("10.2")} Nonconformity and corrective action</h2>
<p>When a nonconformity occurs, the organisation:</p>
<ol type="a"><li><b>reacts</b>: takes action to control and correct it and deals with the consequences;</li><li><b>evaluates</b> the need to act on causes so it does not recur or occur elsewhere: review, root cause analysis, search for similar nonconformities;</li><li>implements the actions needed;</li><li>reviews the <b>effectiveness</b> of corrective actions;</li><li>changes the ISMS if necessary.</li></ol>
${T(["Concept","Target","Example (leaver's account still active)"],[["<b>Correction</b>","The symptom","Disable the account today"],["<b>Corrective action</b>","The cause, to prevent recurrence","Automatic HR-to-IT notification for every departure"],["Preventive action (old concept)","A potential cause","Replaced in the standard by the risk-based approach (6.1)"]])}
<h2>Root cause analysis</h2>
<ul><li><b>5 whys</b>: ask "why?" until you reach the root cause;</li><li><b>Ishikawa</b> (5M): manpower, methods, machines, milieu (environment), materials;</li><li><b>Pareto</b>: tackle first the 20% of causes producing 80% of effects.</li></ul>
<div class="box"><h4>5 whys example</h4><p>A leaver's account is active. Why? IT was not informed. Why? The HR form is on paper. Why? No shared tool. Root cause: the leaver process is not automated. Corrective action: automatic HR → directory workflow.</p></div>
`},
{ day:"Day 4", title:"Preparing for and passing the certification audit", html:`
<h2>The actors</h2>
<ul><li><b>Certification body</b>: performs the audit and issues the certificate. It is accredited against ISO/IEC 17021-1 and ISO/IEC 27006.</li><li><b>Accreditation body</b>: checks certification bodies' competence (COFRAC in France, UKAS in the UK, SOAC for the WAEMU region).</li><li><b>The audited organisation</b>: prepares evidence and guides the auditors.</li></ul>
<p>A consultant who helped implement the ISMS cannot certify that same ISMS (conflict of interest).</p>
<h2>Prerequisites before the audit</h2>
<ul><li>ISMS running for a few months with records;</li><li>at least one complete internal audit cycle;</li><li>at least one management review;</li><li>up-to-date SoA, risk assessment and treatment plan;</li><li>corrective actions under way on internal findings.</li></ul>
<p>A <b>pre-audit</b> (mock audit) is optional but recommended.</p>
<h2>The certification cycle (3 years)</h2>
${T(["Step","Purpose"],[["<b>Stage 1</b>","Documentation and readiness review: scope, SoA, risks, internal audit, management review. Confirms the organisation is ready for stage 2. Often partly on site."],["<b>Stage 2</b>","On site: evaluates the implementation and effectiveness of the ISMS through interviews, observation and samples."],["Certification decision","Made by the certification body (not by the auditor alone) after nonconformities are addressed."],["Surveillance audits","At least once a year (years 1 and 2)."],["Recertification audit","Before the end of the 3 years."]])}
<h2>Handling audit nonconformities</h2>
<ul><li><b>Major NC</b>: blocks certification. Correction and corrective action, often verified by a follow-up audit.</li><li><b>Minor NC</b>: action plan accepted by the auditor, checked at the next audit.</li><li>For each NC: correction, root cause analysis, corrective action, evidence of implementation.</li></ul>
<h2>On the day</h2>
<ul><li>Assign a guide to each auditor;</li><li>prepare a room and access to evidence;</li><li>answer precisely, without inventing: "I will bring you the evidence" is better than a guess;</li><li>note the findings at the closing meeting.</li></ul>
<h2>After certification</h2><p>The ISMS goes on: indicators, internal audits, management reviews, updated risks. A certificate can be suspended or withdrawn if the ISMS is no longer maintained.</p>
`}
];

const exam = `
<p class="lead">This summarises what PECB publishes about the certification. Always check the latest version on pecb.com before registering, as the format changes.</p>
<h2>The PECB training</h2>
<p>The official course lasts 5 days: day 1 introduction and ISMS initiation; day 2 planning; day 3 implementation; day 4 monitoring, improvement and certification preparation; day 5 exam. This site follows that structure.</p>
<h2>The exam</h2>
<div class="grid"><div class="card"><span class="stat">180</span><span class="t">minutes</span><span class="d">Usual duration (3 hours)</span></div><div class="card"><span class="stat">80</span><span class="t">multiple-choice questions</span><span class="d">Many are scenario-based</span></div><div class="card"><span class="stat">70%</span><span class="t">to pass</span><span class="d">Usual minimum score</span></div></div>
<p>The exam is usually <b>open book</b>: you may consult the standard and printed course materials, but no connected device. It is available online (remotely proctored) or in a test centre, in several languages including French and English. If you fail, a free retake is often possible within 12 months.</p>
<h2>The 7 competency domains</h2>
${T(["Domain","Site modules"],[["1. Fundamental principles and concepts of an ISMS","1, 2"],["2. ISMS requirements","2, 3, 4"],["3. Planning an ISMS implementation","3, 5, 6, 7, 8"],["4. Implementing an ISMS","7, 8, 9"],["5. Monitoring and measurement","10, 11"],["6. Continual improvement","12"],["7. Preparing for the certification audit","13"]])}
<h2>After the exam: certification levels</h2>
${T(["Title","Professional experience","ISMS experience"],[["Provisional Implementer","None","None"],["Implementer","2 years (1 in information security)","200 hours"],["<b>Lead Implementer</b>","5 years (2 in information security)","300 hours"],["Senior Lead Implementer","10 years (7 in information security)","1,000 hours"]])}
<p>Passing the exam is not enough: you then apply for certification in your PECB account, declaring your experience with references. An annual fee and continuing professional development (CPD) hours maintain the title.</p>
<h2>How to handle scenario questions</h2>
<ol><li>Read the question first, then the scenario: you will know what to look for.</li><li>Identify the relevant clause and open the standard at that number.</li><li>Eliminate answers citing a non-existent requirement or the wrong step.</li><li>Prefer the answer that respects the logical order (risks before controls, cause before action).</li><li>Beware of absolute answers ("always", "mandatory") unless the standard says "shall".</li><li>Manage your time: just over 2 minutes per question.</li></ol>
<div class="box tip"><h4>Prepare your copy of the standard</h4><p>Since the exam is open book, tab clauses 4.3, 6.1.2, 6.1.3, 7.5, 9.2, 9.3 and 10.2, and the start of each Annex A theme. It saves a lot of time.</p></div>
<h2>4-week revision plan</h2>
${T(["Week","Work"],[["1","Modules 1 to 4 + module quizzes; read clauses 4 and 5 of the standard"],["2","Modules 5 to 7; redo the risk matrix on a real case from your job"],["3","Modules 8 to 13 + module quizzes"],["4","Two timed mock exams; review every mistake with its explanation and clause"]])}
`;

const c = CERTS.find(x => x.id === "iso27001-li");
c.en = {
  title:"ISO/IEC 27001 Lead Implementer",
  intro:"Complete preparation for the PECB Certified ISO/IEC 27001 Lead Implementer certification, based on the 2022 edition of the standard (with Amendment 1:2024).",
  modules, exam
};
})();
