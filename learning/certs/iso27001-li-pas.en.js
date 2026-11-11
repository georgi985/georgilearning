/* ISO/IEC 27001 Lead Implementer: English version of the beginner track (same order as iso27001-li-pas.js).
   Original content; it does not reproduce the text of the standard. Fictitious companies. */
PAS("iso27001-li", [
{voc:[
["Information","Any data with value: customer files, contracts, plans, and also what an employee knows."],
["Information security","Preserving the confidentiality, integrity and availability of information."],
["ISMS","Information security management system: the organized set of rules, roles, processes and controls that steers security and improves it continually."],
["Asset","Anything of value to the organization: information, software, hardware, services, people, reputation."],
["Control","What is put in place to reduce a risk."],
["PDCA cycle","Plan, do, check, act: the continual improvement loop behind every management system."]],
ex:`<p>A fictitious freight-forwarding SME, <b>Port Logistique</b>, loses its sales director's laptop, containing its customer list and prices.</p>
<ul><li><b>Confidentiality</b> affected: a competitor could read the prices.</li><li><b>Availability</b> affected: there was no copy.</li></ul>
<p>Without an ISMS, you buy an antivirus and forget it. With an ISMS, you ask: what are our assets? What risks? What controls (encryption, backup, storage rule)? Who is responsible? How do we check it works? And you improve year after year.</p>`,
steps:[
"Understand that security covers information in all forms (paper, digital, spoken).",
"Remember the three objectives: C, I, A.",
"See the ISMS as a management system, not a technical tool.",
"Remember the PDCA loop: plan, do, check, act, and repeat."],
exo:[
["an employee mistakenly changes prices in the billing file. Which criterion is affected?","<p><b>Integrity</b>: the information is no longer accurate.</p>"],
["is an ISMS software you buy?","<p>No. It is an organization: policy, roles, risk assessment, controls, checks and improvement. Tools can help but do not replace it.</p>"]],
piege:[
"ISO 27001 is a requirements standard (certifiable); ISO 27002 is implementation guidance for controls (not certifiable).",
"An ISMS covers people, processes and technology.",
"PDCA applies to the whole system, not to a single project."]},

{voc:[
["Harmonized structure","The common layout of all ISO management system standards (quality, environment, security): same clauses, same vocabulary."],
["Clauses 4 to 10","The mandatory requirements: context (4), leadership (5), planning (6), support (7), operation (8), performance evaluation (9), improvement (10)."],
["Annex A","A list of 93 reference controls in 4 themes: organizational (37), people (8), physical (14), technological (34)."],
["Requirement","What the organization must do (\"shall\" in the standard)."],
["Documented information","A document the organization must maintain (procedure) or retain (evidence)."]],
ex:`<p>To remember the clauses, map them to PDCA:</p>
${'<div class="tablewrap"><table><thead><tr><th>PDCA</th><th>Clauses</th><th>In plain words</th></tr></thead><tbody><tr><td>Plan</td><td>4, 5, 6, 7</td><td>Who are we, who leads, what risks, what resources?</td></tr><tr><td>Do</td><td>8</td><td>We apply the plan and treat risks.</td></tr><tr><td>Check</td><td>9</td><td>We measure, audit, and leadership reviews.</td></tr><tr><td>Act</td><td>10</td><td>We fix nonconformities and improve.</td></tr></tbody></table></div>'}`,
steps:[
"Remember that clauses 0 to 3 are informative (introduction, scope, references, terms).",
"Clauses 4 to 10 are mandatory: none can be excluded.",
"Annex A controls can be excluded if the exclusion is justified in the Statement of Applicability.",
"Map each clause to a PDCA step."],
exo:[
["can a company exclude clause 9 (performance evaluation) because it \"has no time to audit\"?","<p>No. Clauses 4 to 10 are mandatory for certification. Only Annex A controls can be excluded, with justification.</p>"],
["how many themes does the 2022 Annex A have?","<p><b>Four</b>: organizational, people, physical, technological.</p>"]],
piege:[
"2022 version: 93 controls (not 114 as in 2013).",
"\"Shall\" = requirement; \"should\" = recommendation (in guidance).",
"The harmonized structure makes integration with ISO 9001 or ISO 14001 easier."]},

{voc:[
["Internal issues","Factors within the organization: culture, structure, skills, systems, resources."],
["External issues","Factors from outside: laws, market, competition, technology, threats, political and economic situation."],
["Interested party","A person or organization that can affect or be affected by the organization's decisions: customers, regulator, shareholders, staff, suppliers."],
["Requirements of interested parties","Their security expectations, including legal and contractual obligations."],
["Scope","What the ISMS covers: activities, sites, systems, and its interfaces with what is out of scope."]],
ex:`<p><b>FlashPay</b>, an e-money issuer, prepares its ISMS:</p>
<ul><li><b>External issues</b>: central bank requirements, data protection law, rising SIM-swap fraud, strong competition.</li>
<li><b>Internal issues</b>: IT team of 8 people, fast growth, platform hosted by a provider.</li>
<li><b>Interested parties</b>: customers (protection of their money and data), central bank (compliance), partner bank (contract), licensed agents, mobile operator.</li>
<li><b>Scope</b>: "the mobile payment platform, its operation in Abidjan and the related support processes". Interface: the hosting provider is out of scope but governed by contract.</li></ul>`,
steps:[
"List internal and external issues (possible methods: SWOT, PESTEL).",
"List interested parties and their requirements.",
"Decide which requirements the ISMS will address.",
"Define the scope: activities, locations, systems, interfaces and dependencies.",
"Document the scope and have leadership validate it."],
exo:[
["can you exclude the call centre that accesses customer data from the scope, to keep things simple?","<p>You can leave it out of scope, but you must manage the <b>interface</b>: in-scope data flows there, so controls (access, contract, rules) must protect it. A scope that leaves out something essential just to look simpler will be challenged by the auditor.</p>"],
["is the central bank an interested party for FlashPay?","<p>Yes: as regulator, it imposes requirements (security, continuity, incident reporting).</p>"]],
piege:[
"The scope must be clear, justified and documented.",
"Legal and contractual requirements are part of interested parties' requirements.",
"Context is analysed before risks: it informs them."]},

{voc:[
["Top management","The person or group that directs the organization at the highest level."],
["Leadership","Management commits visibly: objectives aligned with strategy, resources, communication, support for managers."],
["Information security policy","Management's written commitment: it frames objectives and commits to meeting requirements and improving."],
["Roles and responsibilities","Who does what in the ISMS, assigned and communicated by top management."],
["RACI","A table stating, for each task, who is Responsible, Accountable, Consulted and Informed."]],
ex:`<p>At <b>Port Logistique</b>, the security policy fits on one page, signed by the CEO:</p>
<ul><li>"We protect the information of our customers and partners."</li><li>"We comply with applicable laws and contracts."</li><li>"We set measurable security objectives every year."</li><li>"We continually improve our ISMS."</li></ul>
<p>The CEO appoints an ISMS manager, gives her time and a budget, and presents the policy at the annual staff meeting.</p>`,
steps:[
"Obtain top management commitment (the condition for success).",
"Write the policy and have top management sign it.",
"Communicate it to all staff and make it available to interested parties as needed.",
"Define roles (ISMS manager, risk owners, committee) and communicate them.",
"Provide resources: time, budget, skills."],
exo:[
["the IT manager writes and signs the security policy alone. Compliant?","<p>No. The policy must be <b>established by top management</b>. IT can draft it, but top management approves and commits.</p>"],
["how does the auditor check leadership?","<p>Through evidence: signed policy, management review minutes, budget granted, interview with top management, internal communication.</p>"]],
piege:[
"Top management can delegate tasks, not accountability.",
"The policy contains commitments, not technical details.",
"Without management commitment, the project fails: this is often the right answer."]},

{voc:[
["Risk assessment","Identifying, analysing and evaluating risks."],
["Risk owner","The person with the authority and accountability to manage a risk."],
["Acceptance criteria","The threshold above which a risk must be treated. Example: any risk scored 12 or more out of 25."],
["Likelihood and consequences","Probability that the risk occurs; impact if it does."],
["Asset-based or scenario-based method","Start from assets and their threats, or from feared events. ISO 27005 describes both."],
["Repeatable results","Two assessments with the same method must give consistent, comparable results."]],
ex:`<p><b>Port Logistique</b>'s method: likelihood 1 to 5 × consequence 1 to 5; accepted if the score is below 10.</p>
${'<div class="tablewrap"><table><thead><tr><th>Risk</th><th>Owner</th><th>L</th><th>C</th><th>Score</th><th>Decision</th></tr></thead><tbody><tr><td>Ransomware on the customs clearance server</td><td>Operations director</td><td>4</td><td>5</td><td>20</td><td>Treat</td></tr><tr><td>Laptop theft with customer data</td><td>Sales director</td><td>3</td><td>4</td><td>12</td><td>Treat</td></tr><tr><td>Outage of the showcase website</td><td>Marketing manager</td><td>2</td><td>2</td><td>4</td><td>Accepted</td></tr></tbody></table></div>'}`,
steps:[
"Define the method and criteria before starting (and have them approved).",
"Identify risks: assets, threats, vulnerabilities or scenarios.",
"Assign an owner to each risk.",
"Analyse: likelihood and consequences, taking existing controls into account.",
"Evaluate: compare with criteria and rank by priority.",
"Retain results as documented information and repeat the assessment at planned intervals or after a significant change."],
exo:[
["the team scores risks by gut feeling, with no written scale. Which requirement is not met?","<p>The method must produce <b>consistent, valid and comparable</b> results: criteria must be defined and documented.</p>"],
["L = 2, C = 5, acceptance threshold: below 10. Is the risk accepted?","<p>Score 10: it is <b>not</b> below 10, so it must be treated (or formally accepted by the owner according to the defined rule).</p>"]],
piege:[
"The standard does not impose a specific method, but it requires defined criteria and repeatable results.",
"Every risk must have an owner.",
"The assessment must be repeated after significant changes."]},

{voc:[
["Treatment options","Modify (reduce) the risk, retain (accept) it, avoid it, share it."],
["Risk treatment plan","Who does what, with what resources, by when, for each treated risk."],
["Statement of Applicability (SoA)","A document listing the 93 Annex A controls, stating whether each is applied, justifying each inclusion and exclusion, and giving its implementation status."],
["Residual risk","The risk left after treatment; it must be accepted by its owner."],
["Additional controls","You can add controls beyond Annex A (regulatory, industry-specific)."]],
ex:`<p><b>Port Logistique</b> case continued:</p>
<ul><li>Ransomware (20) → <b>reduce</b>: daily offline backup (A.8.13), EDR (A.8.7), MFA for remote access (A.8.5). Owner: CIO. Deadline: 3 months. Target residual risk: 8.</li>
<li>Laptop theft (12) → <b>reduce</b>: disk encryption (A.8.24), rules for user endpoint devices (A.8.1).</li></ul>
<p>Extract from the SoA:</p>
${'<div class="tablewrap"><table><thead><tr><th>Control</th><th>Applicable</th><th>Justification</th><th>Status</th></tr></thead><tbody><tr><td>A.8.13 Backup</td><td>Yes</td><td>Ransomware risk (20)</td><td>In progress</td></tr><tr><td>A.8.28 Secure coding</td><td>No</td><td>No in-house development; purchased software only</td><td>—</td></tr><tr><td>A.7.4 Physical security monitoring</td><td>Yes</td><td>Warehouse holding customs documents</td><td>Implemented</td></tr></tbody></table></div>'}`,
steps:[
"For each risk to treat, choose a treatment option.",
"Determine the necessary controls, using Annex A.",
"Compare with Annex A to check that no necessary control was missed.",
"Write the SoA: all controls, applicable or not, with justification.",
"Draw up the treatment plan and have it approved.",
"Have risk owners accept residual risks."],
exo:[
["an Annex A control is excluded without explanation in the SoA. Is this a nonconformity?","<p>Yes. Every exclusion must be <b>justified</b>. The auditor will raise a nonconformity.</p>"],
["who approves the treatment plan and accepts residual risks?","<p>The <b>risk owners</b>.</p>"]],
piege:[
"The SoA lists all 93 controls, not just those applied.",
"Annex A is a checklist: start from the risks, then check against Annex A.",
"Residual risk must be formally accepted."]},

{voc:[
["Organizational controls (A.5, 37)","Policies, roles, asset management, suppliers, incidents, continuity, compliance."],
["People controls (A.6, 8)","Screening, employment terms, awareness, disciplinary process, termination, confidentiality, remote working, event reporting."],
["Physical controls (A.7, 14)","Perimeters, entry, offices, monitoring, equipment, clear desk, media, cabling, maintenance, disposal."],
["Technological controls (A.8, 34)","Endpoints, privileged access, authentication, malware, vulnerabilities, backup, logging, network, cryptography, development."],
["New controls in 2022","Threat intelligence, cloud security, ICT readiness for business continuity, physical security monitoring, configuration management, information deletion, data masking, data leakage prevention, monitoring activities, web filtering, secure coding."]],
ex:`<p>Tip to classify a control: <b>who or what carries it?</b></p>
<ul><li>A process or organizational rule → organizational (A.5). Example: "incident management".</li>
<li>A person, during their employment → people (A.6). Example: "awareness".</li>
<li>A place or physical object → physical (A.7). Example: "clear desk and clear screen".</li>
<li>An IT system → technological (A.8). Example: "logging".</li></ul>
<p>Case: <b>FlashPay</b> uses customer data to test its app. Controls concerned: A.8.33 (test information) with A.8.11 (data masking).</p>`,
steps:[
"Learn the 4 themes and their counts: 37, 8, 14, 34.",
"For each risk, find which theme holds the answer.",
"Read ISO 27002 to understand each control's purpose and implementation.",
"Use the 27002 attributes (control type, security property, cybersecurity concept) to filter."],
exo:[
["background checks before hiring belong to which theme?","<p>The <b>people</b> theme (A.6).</p>"],
["security of cloud services used by the company belongs to which theme?","<p>The <b>organizational</b> theme (A.5): it is a process for acquiring, using and exiting cloud services.</p>"]],
piege:[
"Annex A controls are not all mandatory; they are considered according to risks.",
"Clear desk is a physical control, even though it concerns behaviour.",
"ISO 27002 gives detailed guidance; Annex A only gives the control statement."]},

{voc:[
["Security objective","A measurable goal consistent with the policy: what, what resources, who, by when, how the result will be evaluated."],
["Competence","Proven ability (training, experience, degree) to do work that affects security."],
["Awareness","Everyone knows the policy, their contribution and the consequences of not complying."],
["Communication","What is communicated, when, to whom, how, and by whom."],
["Control of documents","Identification, version, approval, distribution, access, retention, disposal."]],
ex:`<p><b>Port Logistique</b>'s objectives for the year:</p>
${'<div class="tablewrap"><table><thead><tr><th>Objective</th><th>Indicator</th><th>Owner</th><th>Deadline</th></tr></thead><tbody><tr><td>Reduce clicks on phishing emails</td><td>Click rate &lt; 10%</td><td>ISMS manager</td><td>December</td></tr><tr><td>Restore customs clearance within 4 h</td><td>Successful recovery test</td><td>CIO</td><td>September</td></tr><tr><td>Zero active leaver accounts</td><td>Monthly review</td><td>HR + IT</td><td>Ongoing</td></tr></tbody></table></div>'}
<p>For the network administrator's competence: job description, CV, training certificate, kept on file.</p>`,
steps:[
"Set measurable objectives and plan them (what, who, when, how to measure).",
"Provide the necessary resources.",
"Define required competences and keep evidence.",
"Organize awareness and communication.",
"Control documents: version, approval, access, retention."],
exo:[
["is \"improve security\" a good objective?","<p>No: it is not <b>measurable</b>. Correct example: \"100% of remote access protected by MFA by June\".</p>"],
["what evidence does the auditor ask for competence?","<p><b>Documented information</b>: degrees, training certificates, assessments, experience.</p>"]],
piege:[
"An objective without an indicator or deadline is not compliant.",
"Awareness also covers contractors working for the organization.",
"An outdated document in circulation is a document-control nonconformity."]},

{voc:[
["Operational planning","Implementing the planned processes and controls, and keeping evidence that they work."],
["Planned changes","Changes are controlled and their unintended effects are reviewed."],
["Externally provided processes","Outsourced activities remain under the organization's control."],
["Implementing the treatment plan","The chosen controls are actually deployed, with evidence."],
["Record","Evidence that an activity was performed: ticket, log, minutes, signed form."]],
ex:`<p>Implementing backup at <b>Port Logistique</b>:</p>
<ol><li>Written procedure: what to back up, when, where, who checks.</li><li>Tool configured: backup every night, weekly copy on a disconnected disk stored off-site.</li><li>Check: daily report reviewed by the technician (signed record).</li><li>Monthly restore test: 3 random files, result recorded.</li></ol>
<p>Without these records, the auditor cannot verify that the control works.</p>`,
steps:[
"Turn each control in the plan into a procedure or configuration.",
"Train the people who apply them.",
"Keep records proving application.",
"Control changes and providers.",
"Repeat the risk assessment at planned intervals or after a major change."],
exo:[
["the backup procedure exists, but no restore test has ever been done. What will the auditor say?","<p>That the effectiveness of the control is not demonstrated. It is a nonconformity or at least a significant opportunity for improvement depending on internal requirements: tests must be performed and evidence kept.</p>"],
["a provider manages the firewalls. Is the organization still responsible for their security?","<p>Yes. It must control this outsourced process: contract, requirements, monitoring, reports.</p>"]],
piege:[
"No record = no evidence for the auditor.",
"Clause 8 also requires reassessing and retreating risks.",
"Outsourcing does not remove accountability."]},

{voc:[
["Monitoring","Determining the status of a system or activity (observing)."],
["Measurement","Determining a value (counting, computing)."],
["Indicator","A measure compared with a target, which helps decide."],
["Effectiveness","Is the intended result achieved?"],
["Dashboard","A set of indicators presented regularly to management."]],
ex:`<p><b>Port Logistique</b>'s ISMS manager defines, for each indicator: what to measure, how, when, who measures, when to analyse, who analyses.</p>
${'<div class="tablewrap"><table><thead><tr><th>Indicator</th><th>Target</th><th>Q1</th><th>Q2</th><th>Analysis</th></tr></thead><tbody><tr><td>Critical patches applied within 15 days</td><td>95%</td><td>70%</td><td>92%</td><td>Progress thanks to the new tool</td></tr><tr><td>Phishing simulation click rate</td><td>&lt; 10%</td><td>25%</td><td>14%</td><td>Training to continue</td></tr></tbody></table></div>'}`,
steps:[
"Choose what to monitor: important processes and controls.",
"Define method, frequency and responsibilities.",
"Collect data and compute indicators.",
"Analyse results and gaps against the target.",
"Present to management and decide actions."],
exo:[
["is \"number of firewall alerts\" a good effectiveness indicator?","<p>Not on its own: it does not say whether the result is good or bad. A useful indicator has a target and measures an outcome (example: \"serious incidents due to unauthorized network access: 0\").</p>"]],
piege:[
"The standard requires defining who measures and who analyses.",
"Results must be retained as evidence.",
"You measure security performance and ISMS effectiveness."]},

{voc:[
["Internal audit","A planned, independent check that the ISMS meets the standard and internal rules, and is effectively implemented."],
["Audit programme","The plan of audits over a period (often 3 years): frequency, methods, responsibilities."],
["Objectivity and impartiality","The auditor does not audit their own work."],
["Management review","A meeting where top management reviews the ISMS at planned intervals and takes decisions."],
["Review inputs","Status of previous actions, changes in context, feedback from interested parties, measurement results, audits, risks, improvement opportunities."]],
ex:`<p><b>Port Logistique</b>'s audit programme: the whole ISMS audited over 12 months, in 3 audits. The ISMS manager does not audit her own processes: a colleague from quality, trained on 27001, does it.</p>
<p>December management review: the CEO reviews indicators, audit results (2 minor nonconformities), the year's incidents, changes (a demanding new European customer), and decides: budget for an EDR, 4-hour recovery objective, new supplier audit.</p>`,
steps:[
"Establish the audit programme based on process importance and past results.",
"Choose objective and competent auditors.",
"For each audit: criteria, scope, evidence, report to the relevant management.",
"Hold the management review with all required inputs.",
"Retain evidence (audit reports, review minutes with decisions)."],
exo:[
["can the ISMS manager audit the incident management procedure she wrote?","<p>No: she would not be impartial. Another internal auditor or an external provider is needed.</p>"],
["the management review took place but no decision is recorded. Problem?","<p>Yes: the <b>outputs</b> (decisions on improvement and necessary changes) must be documented.</p>"]],
piege:[
"Internal audit is mandatory before the certification audit.",
"The internal auditor must not audit their own work.",
"The management review must produce documented decisions."]},

{voc:[
["Nonconformity","A requirement not met (of the standard, an internal rule, a law, a contract)."],
["Correction","Immediate action to remove the detected gap (fix it)."],
["Corrective action","Action to remove the <b>cause</b> of the gap, so that it does not recur."],
["Root cause analysis","Methods: the \"5 whys\", the Ishikawa (fishbone) diagram."],
["Continual improvement","Making the ISMS ever more suitable, adequate and effective."]],
ex:`<p>Audit finding: 6 leavers' accounts still active.</p>
<ul><li><b>Correction</b>: disable the 6 accounts today.</li>
<li><b>Root cause analysis</b> (5 whys): why active? IT was not informed. Why? HR sends an email to one person. Why? No procedure. Why? The joiner-leaver process was not formalized when the ISMS was set up.</li>
<li><b>Corrective action</b>: leaver procedure with automatic notification from the HR tool, and a monthly check.</li>
<li><b>Effectiveness check</b>: 3 months later, the monthly review finds no active leaver account.</li></ul>`,
steps:[
"React to the nonconformity: correct it and deal with consequences.",
"Analyse the cause and look for similar gaps elsewhere.",
"Implement the corrective action.",
"Check its effectiveness.",
"Update the ISMS if needed and keep evidence."],
exo:[
["disabling the leaver accounts found by the auditor: correction or corrective action?","<p>A <b>correction</b>. The corrective action addresses the cause (the leaver process).</p>"]],
piege:[
"Correction ≠ corrective action.",
"The effectiveness of the corrective action must be checked.",
"The corrective action must be proportionate to the effects of the nonconformity."]},

{voc:[
["Certification body","An independent, accredited body that audits and issues the certificate."],
["Stage 1","Documentation and readiness review: scope, SoA, risk assessment, internal audit, management review. It says whether the organization is ready for stage 2."],
["Stage 2","On-site audit of the implementation and effectiveness of the ISMS."],
["Major / minor nonconformity","Major: a requirement is not met or the system cannot achieve its intended results; it blocks certification until fixed. Minor: an isolated gap requiring an action plan."],
["Certification cycle","Certificate valid for 3 years, with surveillance audits every year, then a recertification audit."]],
ex:`<p><b>Port Logistique</b>'s timeline:</p>
<ol><li>Months 1 to 8: ISMS implementation.</li><li>Month 9: full internal audit and management review.</li><li>Month 10: <b>stage 1</b>. The auditor asks for better justification of 3 SoA exclusions.</li><li>Month 11: <b>stage 2</b>. One minor nonconformity: restore tests not recorded in March.</li><li>Action plan accepted → certificate issued. Surveillance audits at months 23 and 35, recertification at month 36.</li></ol>`,
steps:[
"Check that the whole PDCA cycle has run at least once (including internal audit and management review).",
"Prepare documents and evidence, and appoint contacts.",
"Pass stage 1 and address the points raised.",
"Pass stage 2: show evidence that the system works.",
"Respond to nonconformities with corrections and corrective actions on time.",
"Maintain the ISMS for surveillance audits."],
exo:[
["the organization did no internal audit before stage 1. Likely consequence?","<p>A <b>major nonconformity</b> (clause 9 requirement not met). Certification cannot be granted until it is fixed.</p>"],
["how long is an ISO 27001 certificate valid?","<p><b>Three years</b>, with annual surveillance audits.</p>"]],
piege:[
"The consultant who implemented the ISMS cannot perform the certification audit (conflict of interest).",
"Stage 1 is not an effectiveness audit: it is a readiness check.",
"A major nonconformity blocks certification until correction is proven."]}
], true);
