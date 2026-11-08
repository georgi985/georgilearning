/* ISACA CISM: English version of the course. Same module order as cism.js.
   Original content written for revision; it does not reproduce the official ISACA manual. */
(function(){
const T = (head, rows) => '<div class="tablewrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const D = (n, name, w) => '<p class="eyebrow">Domain ' + n + ' · ' + name + ' · ' + w + '% of the exam</p>';

const modules = [
{ day:"Domain 1", title:"Governance: culture, strategy and roles", html: D(1,"Information Security Governance",17) + `
<p class="lead">CISM trains managers. The right answer is almost always the one that serves business objectives, with management support, not the best technical solution.</p>
<h2>Why govern security</h2>
<p>Security governance is part of corporate governance. Its expected outcomes: <b>strategic alignment</b> with the business, <b>risk management</b> at an acceptable level, <b>value delivery</b> (optimized investments), <b>resource management</b>, <b>performance measurement</b> and <b>integration</b> of assurance functions (audit, legal, HR, risk, continuity).</p>
<h2>Security culture</h2>
<p>A healthy culture shows when employees report incidents, follow the rules without constant enforcement, and security is considered in projects from the start. It is built through management's example, awareness, communication and accountability.</p>
<h2>Roles</h2>
${T(["Actor","Role"],[
["Board of directors","Ultimately accountable; sets risk appetite, oversees"],
["Senior management","Approves strategy and resources, leads by example"],
["Security steering committee","Business representatives; trade-offs, priorities, alignment"],
["CISO / security manager","Develops and runs the program, advises management"],
["Information and risk owners","Decide on classification and risk acceptance"],
["Custodians (IT)","Implement the controls"],
["Users","Follow the policies"]])}
<div class="box key"><h4>Who accepts risk?</h4><p>The risk owner, usually a business manager, within the appetite set by management. Never the CISO alone: they advise and make the risk visible.</p></div>
<h2>Security strategy</h2>
<ol><li>Understand the company's strategy, objectives and culture.</li><li>Assess the <b>current state</b> (maturity, risks, controls).</li><li>Define the <b>desired state</b> in line with business objectives and risk appetite.</li><li>Analyze the gap and build a <b>roadmap</b>.</li><li>Obtain approval and resources.</li></ol>
<p>Constraints to consider: laws and regulations, culture, budget, skills, time, existing technologies. Tools: maturity models (CMMI, COBIT), balanced scorecards, enterprise architecture (SABSA, TOGAF).</p>
`},

{ day:"Domain 1", title:"Governance: policies, frameworks and metrics", html: D(1,"Information Security Governance",17) + `
<h2>The documentation pyramid</h2>
${T(["Level","Content","Changes often?"],[["Policy","Management's intent and general rules","Rarely"],["Standards","Specific mandatory requirements (password length, algorithms)","Sometimes"],["Procedures","Detailed steps","Often"],["Guidelines","Non-mandatory advice","Often"]])}
<p>A policy must be short, approved by management, communicated, reviewed periodically and supported by standards and procedures.</p>
<h2>Reference frameworks</h2>
<p>COBIT 2019, ISO/IEC 27001 and 27002, NIST CSF 2.0, NIST SP 800-53, CIS Controls. Choose a framework suited to the sector and regulatory requirements, then tailor it to the company.</p>
<h2>Legal and contractual obligations</h2>
<p>Personal data protection, sector rules (banking, telecoms, health), incident notification, data retention, customer contracts. Legal and compliance are partners of the CISO.</p>
<h2>Metrics for management</h2>
<p>Management wants to know whether risks are under control and money is well spent. Good metrics are tied to business objectives.</p>
${T(["Type","Example"],[["KGI (goal)","No mobile payment service outage longer than 4 hours"],["KPI (performance)","95% of critical patches applied within 15 days"],["KRI (risk)","Number of privileged accounts without MFA"]])}
<div class="box tip"><h4>Classic trap</h4><p>The number of viruses blocked or packets filtered does not interest a board. Prefer metrics that speak of business impact and risk level.</p></div>
<h2>Security business case</h2>
<p>Present a security investment in terms of risk reduction, compliance, continuity and return (ROSI, total cost), not in technical terms.</p>
`},

{ day:"Domain 2", title:"Risk assessment", html: D(2,"Information Security Risk Management",20) + `
<h2>The risk management framework</h2>
<p>Establish context, identify, analyze, evaluate, treat, monitor, communicate. References: ISO 31000, ISO/IEC 27005, NIST SP 800-30 and 800-37, COBIT and Risk IT.</p>
<h2>Appetite, tolerance and capacity</h2>
${T(["Notion","Meaning"],[["Risk appetite","Level of risk the company accepts to achieve its objectives"],["Tolerance","Acceptable deviation around the appetite"],["Capacity","Maximum risk the company can bear without threatening its survival"]])}
<h2>Identifying risks</h2>
<p>Assets and their value, threats (internal, external, natural, technical), vulnerabilities, risk scenarios. Sources: inventories, BIA, audits, threat intelligence, past incidents, tests.</p>
<h2>Analyzing and evaluating</h2>
<p>Qualitative (scales), semi-quantitative, quantitative (ALE = SLE × ARO). The <b>risk register</b> records for each risk: description, owner, inherent level, controls, residual level, treatment decision, deadlines.</p>
<div class="box key"><h4>Inherent and residual risk</h4><p>Inherent: before controls. Residual: after. If residual risk exceeds the appetite, additional treatment or formal acceptance at the appropriate management level is required.</p></div>
<h2>Valuing assets</h2>
<p>The value of an information asset depends on the impact of its loss on the business (revenue, reputation, penalties), not on the price of the hardware. The <b>BIA</b> measures it best.</p>
`},

{ day:"Domain 2", title:"Risk treatment and monitoring", html: D(2,"Information Security Risk Management",20) + `
<h2>Options</h2>
${T(["Option","Example"],[["Mitigate","Add MFA"],["Transfer / share","Insurance, outsourcing with clauses"],["Avoid","Stop a service that is too risky"],["Accept","Formal decision by the risk owner, documented and reviewed"]])}
<p>Choose the treatment that brings risk back within the appetite at the most reasonable cost. The cost of a control should not exceed the value it protects.</p>
<h2>Selecting controls</h2>
<p>Preventive, detective, corrective, compensating, deterrent; technical, administrative, physical. Aim for <b>defense in depth</b>. Consider the impact on the business and user acceptance.</p>
<h2>Third-party risk</h2>
<p>Assess before contracting, require security clauses and a right to audit, monitor during the contract (SOC 2 reports, questionnaires, metrics), plan the end of the contract (return and destruction of data).</p>
<h2>Monitoring and communication</h2>
<ul><li>Review risks regularly and upon any significant change (new project, merger, new regulation).</li><li>Track KRIs and alert when a threshold is exceeded.</li><li>Report to management in an understandable form: risk heat map, trends, decisions required.</li></ul>
<h2>Risk management in projects and changes</h2>
<p>Integrate security into the life cycle of projects, procurement and changes, to avoid fixing things after the fact.</p>
`},

{ day:"Domain 3", title:"Building the security program", html: D(3,"Information Security Program",33) + `
<p class="lead">This is the largest domain. The program turns strategy into concrete, measurable actions.</p>
<h2>Program elements</h2>
<ul><li>Program charter or mandate, approved by management.</li><li>Roadmap derived from the strategy.</li><li>Resources: budget, staff, skills, tools, providers.</li><li>Control framework and security architecture.</li><li>Policies, standards, procedures.</li><li>Asset management and classification.</li><li>Awareness and training.</li><li>Identity and access management.</li><li>Vulnerability and patch management.</li><li>Operations, network and cloud security.</li><li>Third-party management.</li><li>Incident response and continuity.</li><li>Metrics and reporting.</li></ul>
<h2>Asset management and classification</h2>
<p>Inventory of information assets with an owner, classification by impact (confidentiality, integrity, availability), handling rules for each level. Without an inventory, you cannot protect what you do not know about.</p>
<h2>Security architecture</h2>
<p>Defense in depth, Zero Trust, segmentation, security by design, principles of least privilege and segregation of duties.</p>
<h2>Integration with other functions</h2>
<p>HR (joiners, leavers, sanctions), procurement (supplier clauses), legal, change management, project management, internal audit, enterprise risk management, business continuity.</p>
`},

{ day:"Domain 3", title:"Managing the program: resources, awareness and measurement", html: D(3,"Information Security Program",33) + `
<h2>Budget and resources</h2>
<p>Justify the budget by risks and business objectives. Weigh internal against outsourced resources. Track the total cost of controls.</p>
<h2>Awareness and training</h2>
${T(["Audience","Content"],[["All employees","Phishing, passwords, reporting, classification"],["Managers","Responsibilities, managing team access, business risks"],["IT and developers","Secure coding, hardening, change management"],["Senior management","Strategic risks, role during a crisis"]])}
<p>Measure effectiveness: click rate in simulated campaigns, reporting rate, quiz results, incidents caused by human error.</p>
<h2>Third-party and cloud management</h2>
<p>Due diligence before contracting, clauses (security, audit, incident notification, data location, exit), ongoing monitoring, shared responsibility in the cloud.</p>
<h2>Measuring the program</h2>
<ul><li>Policy compliance metrics.</li><li>Maturity metrics (progress toward the desired state).</li><li>Risk metrics (KRIs).</li><li>Operational metrics (time to remediate, EDR coverage).</li><li>Audit and test results.</li></ul>
<p>Report to management what helps it decide; keep technical metrics for the teams.</p>
<h2>Managing exceptions</h2>
<p>A policy exception must be requested, justified by the business, risk-assessed, approved by the risk owner, time-limited and reviewed.</p>
`},

{ day:"Domain 4", title:"Preparing incident management and continuity", html: D(4,"Incident Management",30) + `
<h2>The plans</h2>
${T(["Plan","Purpose"],[["Incident response plan (IRP)","Detect, contain, eradicate and recover after a security incident"],["Business continuity plan (BCP)","Keep critical business processes running"],["Disaster recovery plan (DRP)","Restore systems and data"],["Crisis communication plan","Messages for staff, customers, regulator, press"]])}
<p>All rely on the <b>BIA</b>, which sets criticality, RTO, RPO and the service delivery objective (SDO).</p>
<h2>Building response capability</h2>
<ul><li>Mandate approved by management and a definition of what an incident is.</li><li>Response team (CSIRT) with clear roles, including legal, communication, HR and business units.</li><li>Classification and prioritization by business impact.</li><li>Escalation and notification procedures (regulator, customers, national CERT).</li><li>Tools: SIEM, EDR, forensic tools, out-of-band contacts.</li><li>Contracts with response providers and insurance.</li></ul>
<h2>Testing</h2>
<p>Checklist review, tabletop exercise, simulation, parallel test, full interruption test. Test results feed into plan improvements.</p>
<div class="box key"><h4>The decisive factor</h4><p>An effective incident plan is approved by management, known to the people involved, tested regularly and updated after every test and every incident.</p></div>
`},

{ day:"Domain 4", title:"Responding to incidents and learning from them", html: D(4,"Incident Management",30) + `
<h2>The response cycle</h2>
<ol><li><b>Preparation</b>.</li><li><b>Detection and identification</b>: triage the event, determine whether it is an incident and how severe.</li><li><b>Containment</b>: limit the damage while preserving evidence.</li><li><b>Eradication</b>: remove the cause.</li><li><b>Recovery</b>: restore service according to business priorities and monitor.</li><li><b>Lessons learned</b>: causes, response effectiveness, improvements.</li></ol>
<h2>Escalation and communication</h2>
<p>Follow the escalation matrix according to severity. Inform management early for serious incidents. External communications go through designated people (communications, legal). Meet legal notification deadlines.</p>
<h2>Evidence and legal aspects</h2>
<p>Preserve evidence (chain of custody, bit-by-bit copies, hashing), involve legal before contacting law enforcement, document all actions and decisions.</p>
<h2>After the incident</h2>
<ul><li>Root cause analysis.</li><li>Update risks, controls and plans.</li><li>Report to management: impact, cost, decisions needed.</li><li>Track actions until closure.</li></ul>
<div class="box tip"><h4>Classic traps</h4><ul><li>The first goal of a response is to limit business impact, not to find the culprit.</li><li>Recovering before eradicating the cause exposes you to reinfection.</li><li>Recovery priority follows the business criticality defined in the BIA.</li></ul></div>
`}
];

const exam = `
<p class="lead">ISACA's CISM (Certified Information Security Manager) is aimed at those who lead security: CISOs, security managers, governance consultants. Check the latest information on isaca.org before registering.</p>
<div class="grid">
<div class="card"><span class="stat">150</span><span class="t">multiple-choice questions</span><span class="d">4 options, one correct answer</span></div>
<div class="card"><span class="stat">4 h</span><span class="t">duration</span><span class="d">About 1.5 minutes per question</span></div>
<div class="card"><span class="stat">450</span><span class="t">out of 800 to pass</span><span class="d">Scaled score from 200 to 800</span></div>
</div>
<p>Exam at a PSI test center or online with remote proctoring, offered in several languages. Aim for at least 75% on this site's mock exams to keep a margin.</p>
<h2>The 4 domains</h2>
<div class="tablewrap"><table><thead><tr><th>Domain</th><th>Weight</th><th>Modules</th></tr></thead><tbody>
<tr><td>1. Information Security Governance</td><td class="num">17%</td><td>1, 2</td></tr>
<tr><td>2. Information Security Risk Management</td><td class="num">20%</td><td>3, 4</td></tr>
<tr><td>3. Information Security Program</td><td class="num">33%</td><td>5, 6</td></tr>
<tr><td>4. Incident Management</td><td class="num">30%</td><td>7, 8</td></tr>
</tbody></table></div>
<h2>After the exam</h2>
<p>To obtain the designation: <b>5 years of experience</b> in information security, including 3 years in security management, gained within the 10 years preceding the application. Some certifications or degrees give up to 2 years of substitution. Maintenance requires 20 CPEs per year, 120 over 3 years, and an annual fee.</p>
<h2>Think like a CISM manager</h2>
<ol><li>Business objectives come before technology.</li><li>Management support is the condition for any program's success.</li><li>The risk owner decides; the security manager advises.</li><li>Assess before acting: BIA, risk assessment, gap analysis.</li><li>Among several good answers, choose the most strategic and sustainable one.</li></ol>
<h2>6-week study plan</h2>
<div class="tablewrap"><table><thead><tr><th>Week</th><th>Work</th></tr></thead><tbody>
<tr><td>1</td><td>Modules 1 and 2</td></tr><tr><td>2</td><td>Modules 3 and 4</td></tr><tr><td>3</td><td>Modules 5 and 6</td></tr><tr><td>4</td><td>Modules 7 and 8</td></tr><tr><td>5 and 6</td><td>Mock exams, official ISACA question bank (QAE), reviewing mistakes</td></tr>
</tbody></table></div>
`;

const c = CERTS.find(x => x.id === "cism");
c.en = { title:"CISM", intro:"The certification for security managers: governance, risk management, security program and incident management, seen from management's side.", modules, exam };
})();
