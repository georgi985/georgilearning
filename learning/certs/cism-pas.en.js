/* CISM: English version of the beginner track (same order as cism-pas.js). */
PAS("cism", [
{voc:[
["Governance","<b>Directing and controlling</b>. Leadership sets the course (what to protect, how much risk is acceptable) and checks that it is followed. Management executes day to day."],
["Risk appetite","The amount of risk the organization is willing to take to reach its objectives. Example: \"no mobile payment outage longer than 4 hours\"."],
["Risk tolerance","The acceptable deviation around the appetite: for example, a 5-hour outage is tolerated once a year."],
["Risk owner","The business person who will bear the consequences and has the authority to decide: accept, mitigate, transfer or avoid."],
["Stakeholder","Anyone concerned: shareholders, customers, regulators (central bank, telecom regulator), staff, partners."],
["Roadmap","A dated plan that takes the organization from the current state to the target state, with budget and owners."]],
ex:`<p>The fictitious bank <b>Banque Lagune</b> is launching a mobile app. The CEO wants it live in 3 months. The CISO sees that security testing will not be finished.</p>
<ul><li><b>Wrong technical reflex</b>: the CISO blocks the launch alone.</li>
<li><b>CISM reflex</b>: the CISO presents the risk to the steering committee in business terms (possible fraud, regulatory sanction, reputation), with options: delay by 3 weeks, launch with lower transaction limits, or accept the risk. The <b>risk owner</b> (head of digital banking) decides and signs.</li></ul>
<p>Security does not say "no": it informs the decision of those who have authority.</p>`,
steps:[
"Read the business strategy: what are its 3-year objectives (growth, new products, compliance)?",
"Identify stakeholders and what they expect from security.",
"Measure the current state: maturity, past incidents, audit results.",
"Define the target state that supports these objectives, within the risk appetite set by the board.",
"List the gaps, cost them and rank them by priority.",
"Present the roadmap to leadership to obtain approval and a budget."],
exo:[
["a new CISO joins an insurance company. What is the very first action?","<p>Understand the organization: its strategy, business objectives, culture and stakeholders. You cannot align security with objectives you do not know. Buying a tool or writing a policy comes later.</p>"],
["a business manager refuses to fix a weakness and says \"I accept this risk\". The CISO thinks it is dangerous. What does the CISO do?","<p>Check that the risk is within the appetite set by leadership. If so, document the acceptance (risk register, signature). If it exceeds the appetite, escalate to the next management level or the committee. The CISO does not force a fix.</p>"]],
piege:[
"An answer where the CISO \"decides\" or \"accepts\" the risk is almost always wrong.",
"Senior management support comes before everything else: without it, the programme fails.",
"Between a technical answer and a business-alignment answer, choose alignment."]},

{voc:[
["Policy","A short document approved by leadership that states <b>what</b> and <b>why</b>. It rarely changes."],
["Standard","A mandatory, measurable rule that details the policy. Example: \"passwords of at least 12 characters\"."],
["Procedure","Step-by-step instructions: <b>how</b> to do it."],
["Guideline","A non-mandatory recommendation."],
["Framework","A recognized model to structure the programme: ISO 27001, COBIT, NIST CSF."],
["KGI, KPI, KRI","KGI: is the goal reached? KPI: is the process performing well? KRI: is the risk increasing (early warning)?"]],
ex:`<p>The fictitious telecom operator <b>SavaneTel</b> organizes its documentation as a pyramid:</p>
${'<div class="tablewrap"><table><thead><tr><th>Level</th><th>Example</th><th>Approved by</th></tr></thead><tbody><tr><td>Policy</td><td>"Access is granted on a need-to-know basis."</td><td>CEO</td></tr><tr><td>Standard</td><td>"Access review every 6 months; MFA for all remote access."</td><td>CISO / committee</td></tr><tr><td>Procedure</td><td>"Step 1: the manager fills in the request in the tool…"</td><td>Process owner</td></tr><tr><td>Guideline</td><td>"Tip: use a passphrase."</td><td>Security team</td></tr></tbody></table></div>'}
<p>Indicators: <b>KGI</b> = 100% of critical applications covered by access review; <b>KPI</b> = average time to remove a leaver's access (target: 24 h); <b>KRI</b> = number of active accounts of leavers (alert above 5).</p>`,
steps:[
"Start from requirements: laws, regulators, contracts, major risks.",
"Write a short policy signed by leadership.",
"Break it down into measurable standards, then procedures.",
"Choose indicators that speak to leadership (risk, cost, compliance), not only technical figures.",
"Review documents at least once a year or after a major change."],
exo:[
["\"Every laptop must be encrypted with AES 256-bit\": policy, standard or procedure?","<p>A <b>standard</b>: mandatory, precise and measurable. A policy would only say \"data on mobile devices must be protected\".</p>"],
["which indicator should go to the board: the number of viruses blocked, or the percentage of critical systems unpatched for more than 30 days?","<p>The second. It is linked to risk and to a possible decision (resources, priorities). Viruses blocked is an operational figure that means nothing to the board.</p>"]],
piege:[
"A policy contains no technical details; if technology changes, only the standard changes.",
"The best indicator is the one that helps leadership decide.",
"A policy exception must be documented, approved by the risk owner and time-limited."]},

{voc:[
["Asset","Anything of value: customer data, payment app, servers, reputation, key people."],
["Threat","What can cause harm: fraudster, ransomware, fire, human error."],
["Vulnerability","An exploitable weakness: weak password, unpatched software, no backup."],
["Risk","The combination of the <b>likelihood</b> that a threat exploits a vulnerability and the <b>impact</b> on the business."],
["Inherent / residual risk","Inherent: before controls. Residual: what remains after controls."],
["BIA (business impact analysis)","A study that measures the consequences of each process stopping over time, to set recovery priorities."],
["SLE, ARO, ALE","Quantitative analysis: loss per event (SLE) × number of events per year (ARO) = annualized loss expectancy (ALE)."]],
ex:`<p>A fictitious e-money issuer, <b>FlashPay</b>, assesses the risk of \"SIM swap fraud\" on customer wallets.</p>
<ul><li>Asset: customer wallets.</li><li>Threat: fraudsters who obtain a duplicate SIM.</li><li>Vulnerability: transactions validated by SMS only.</li>
<li>Likelihood: 3 out of 5 (cases already seen in the market). Impact: 4 out of 5 (losses, complaints, regulator). Score: 12 out of 25, high risk.</li>
<li>Quantitative: average loss per fraud 2 million FCFA (SLE); 15 cases a year (ARO); ALE = 30 million FCFA a year. A control costing 10 million FCFA a year that divides cases by 3 is worth it.</li></ul>`,
steps:[
"Define the scope and method (scales, acceptance criteria) before starting.",
"Identify assets and their owners.",
"For each asset, identify threats and vulnerabilities.",
"Assess likelihood and impact (qualitative or quantitative).",
"Compare each risk level with the risk appetite.",
"Record the result in the risk register with an owner."],
exo:[
["SLE = 5 million FCFA; ARO = 0.5. Compute the ALE.","<p>ALE = 5 million × 0.5 = <b>2.5 million FCFA a year</b>. A control costing more than 2.5 million FCFA a year to remove this risk is not justified on financial grounds alone.</p>"],
["the CISO wants to start the risk assessment by installing a vulnerability scanner. Good idea?","<p>Not first. Start by identifying critical assets and processes (with the BIA): otherwise you do not know which vulnerabilities really matter to the business.</p>"]],
piege:[
"A vulnerability without a threat or impact is not a priority risk.",
"The BIA measures business impact; it does not measure likelihood.",
"Risk assessment is a continuous process, not a one-off exercise."]},

{voc:[
["Mitigate (reduce)","Implement controls to lower likelihood or impact."],
["Transfer (share)","Have a third party bear part of the financial impact: insurance, contract. Accountability stays with the organization."],
["Avoid","Stop the activity that creates the risk."],
["Accept","Decide knowingly to do nothing more, because the risk is within appetite."],
["Preventive, detective, corrective control","Prevent, detect, repair. Examples: MFA, logging with alerts, restoring a backup."],
["Risk register","A table listing each risk, its level, owner, chosen treatment and progress."]],
ex:`<p>FlashPay case continued (SIM swap fraud, ALE 30 million FCFA):</p>
${'<div class="tablewrap"><table><thead><tr><th>Option</th><th>What we do</th><th>Annual cost</th><th>Residual risk</th></tr></thead><tbody><tr><td>Mitigate</td><td>In-app PIN + 48-hour block after a SIM change</td><td>8 M</td><td>ALE ≈ 6 M</td></tr><tr><td>Transfer</td><td>Fraud insurance</td><td>12 M</td><td>Losses refunded, but reputation and regulator remain</td></tr><tr><td>Avoid</td><td>Remove SMS cash-out</td><td>Loss of customers</td><td>None for this scenario</td></tr><tr><td>Accept</td><td>Nothing</td><td>0</td><td>30 M</td></tr></tbody></table></div>'}
<p>The risk owner chooses "mitigate": 8 million spent to avoid 24 million of losses. The choice is recorded in the register with an implementation date.</p>`,
steps:[
"For each risk outside appetite, study the four options.",
"Compare the cost of the control with the risk reduction (cost-benefit analysis).",
"Have the risk owner choose and sign the option.",
"Implement the control and check that it works.",
"Monitor key risk indicators (KRIs) and review the register regularly."],
exo:[
["a company buys cyber insurance. Has the risk disappeared?","<p>No. The risk is <b>transferred</b> for its financial part. Business interruption, reputation damage and regulatory obligations remain. And the insurer may refuse to pay if the promised controls were not in place.</p>"],
["a control costs 20 million a year to reduce a risk whose ALE is 15 million. What does the CISO advise?","<p>Not to select it on financial grounds alone: it costs more than it saves. Look for a cheaper control or propose accepting the risk, unless there is a legal requirement or a major non-financial impact.</p>"]],
piege:[
"Transferring never transfers accountability.",
"Residual risk must also be formally accepted.",
"A control should not cost more than the loss it prevents, unless required by regulation."]},

{voc:[
["Security programme","The organized set of projects, processes, people and tools that implements the strategy."],
["Security architecture","The overall plan showing how controls fit together (network, identities, data, applications)."],
["Defence in depth","Several layers of protection: if one fails, the next still protects."],
["Security by design","Building security requirements into every project from the start, not at the end."],
["Third-party management","Assessing and monitoring suppliers' security: contract, questionnaire, right to audit, monitoring."]],
ex:`<p>The fictitious insurer <b>Assur'Ivoire</b> builds its programme over 2 years:</p>
<ol><li>Programme charter signed by the CEO: objectives, scope, budget, governance.</li>
<li>Asset inventory and data classification.</li>
<li>Priority projects: MFA, offline backups, awareness, patch management.</li>
<li>Security clause in all new contracts (right to audit, incident notification within 24 hours).</li>
<li>Mandatory security review for every new IT project.</li></ol>`,
steps:[
"Start from the approved strategy and the gap analysis.",
"Write a programme charter and have it signed.",
"Choose a framework to structure controls.",
"Define projects, resources and timeline.",
"Embed security in existing processes: procurement, projects, HR, change.",
"Track progress with indicators."],
exo:[
["a cloud provider refuses a right-to-audit clause. What does the security manager do?","<p>Ask for an alternative: an independent audit report (for example ISAE 3402 or SOC 2), ISO 27001 certification with its scope. Assess the residual risk and have the business owner accept it if no alternative is possible.</p>"],
["when should security requirements be built into a project?","<p>From the very start, at requirements stage. Fixing a weakness after go-live costs far more.</p>"]],
piege:[
"The programme serves the strategy; it does not replace it.",
"Third-party security starts with the contract, before signature.",
"A tool does not replace a process."]},

{voc:[
["Awareness","Making everyone aware of risks and good practices (posters, emails, campaigns)."],
["Training","Giving skills to a specific audience (developers, administrators)."],
["Phishing simulation","A fake phishing email sent to measure and improve reflexes."],
["Operating / capital budget","Opex: recurring spend (licences, salaries). Capex: durable purchases (equipment)."],
["Maturity model","A scale (often 0 to 5) measuring how well a process is organized."]],
ex:`<p>At <b>SavaneTel</b>, 28% of employees click in the first phishing simulation. The CISO:</p>
<ul><li>launches a short training (15 minutes) for those who clicked, without sanctions;</li><li>adds a "report" button to the email client;</li><li>repeats the simulation every quarter.</li></ul>
<p>Six months later: 9% clicks and 45% reports. He presents these two figures to leadership: the risk reduction is visible.</p>`,
steps:[
"Identify audiences (leadership, users, IT, developers) and their needs.",
"Adapt the message and format to each audience.",
"Measure before and after (click rate, report rate, incidents).",
"Report effectiveness to leadership, not just activity.",
"Adjust the programme and budget based on results."],
exo:[
["which measure best proves an awareness programme works: the number of people trained, or the change in the rate of suspicious emails reported?","<p>The change in the report rate: it measures a change in behaviour. The number of people trained only measures activity.</p>"]],
piege:[
"Awareness also applies to senior management.",
"A result (fewer incidents, more reports) is worth more than a volume of activity.",
"The budget is justified by risk reduction, in business language."]},

{voc:[
["Event / incident","Event: an observable fact (an alert). Incident: an event that actually threatens confidentiality, integrity or availability."],
["Incident response plan","A document stating who does what, how severity is rated and who is notified."],
["BCP / DRP","Business continuity plan (keep the business running in degraded mode) and disaster recovery plan (restore IT systems)."],
["RTO","Maximum acceptable downtime before recovery."],
["RPO","Maximum acceptable data loss, expressed as time (for example 1 hour of transactions)."],
["MTD (maximum tolerable downtime)","Beyond it, the business suffers serious harm. The RTO must be shorter than the MTD."]],
ex:`<p><b>Banque Lagune</b>'s BIA for online transfers gives: MTD 8 h, RTO 4 h, RPO 15 min. Consequences:</p>
<ul><li>data replicated every 15 minutes to a second site;</li><li>recovery site ready to start in under 4 hours;</li><li>manual procedure for urgent transfers during the outage;</li><li>full plan test once a year, with a report to leadership.</li></ul>`,
steps:[
"Perform the BIA: critical processes, MTD, RTO, RPO.",
"Choose suitable recovery strategies (recovery site, backups, contracts).",
"Write the plans and set up the response team (roles, contacts, on-call).",
"Train teams and test: walkthrough, tabletop exercise, live test.",
"Update after every test, change or incident."],
exo:[
["RPO of 1 hour, backup every 24 hours. Compliant?","<p>No. If a failure happens just before the backup, up to 24 hours of data are lost, while the business only accepts 1 hour. Backup or replication is needed at least every hour.</p>"],
["who sets the RTO: IT or the business?","<p>The <b>business</b>, based on the BIA. IT then proposes technical solutions and their cost.</p>"]],
piege:[
"RTO = downtime; RPO = data loss. Do not swap them.",
"An untested plan cannot be considered reliable.",
"Preparation (plan, team, tools) comes before the incident."]},

{voc:[
["Triage","Quickly qualify the alert: false positive or incident? What severity?"],
["Containment","Limit the spread: isolate a machine, disable an account."],
["Eradication","Remove the cause: malware, attacker-created account, vulnerability."],
["Recovery","Bring systems back safely and monitor."],
["Chain of custody","A written record of who handled evidence, when and how, so that it remains admissible."],
["Lessons learned","A post-incident meeting to understand causes and improve controls."]],
ex:`<p>One Monday morning, a department's files at <b>Assur'Ivoire</b> are encrypted by ransomware.</p>
<ol><li><b>Detection and triage</b>: antivirus alert, confirmed by the team: serious incident.</li>
<li><b>Escalation</b>: the plan is activated and leadership informed through the defined channel.</li>
<li><b>Containment</b>: affected computers are disconnected; admin accounts are reset.</li>
<li><b>Evidence</b>: memory and logs are copied before any reinstallation.</li>
<li><b>Eradication and recovery</b>: reinstallation, restore from offline backups, enhanced monitoring.</li>
<li><b>Notifications</b>: regulator and affected customers, according to legal obligations and deadlines.</li>
<li><b>Lessons learned</b>: the entry point was remote access without MFA. Action: MFA everywhere within 30 days.</li></ol>`,
steps:[
"Detect and qualify the incident according to the plan's criteria.",
"Escalate and communicate through the defined channel.",
"Contain, while preserving evidence.",
"Eradicate the cause and restore services.",
"Notify authorities and affected people if the law requires it.",
"Learn lessons and update plans and controls."],
exo:[
["an administrator wants to reinstall the infected server immediately. What do you tell them?","<p>First contain (isolate it from the network) and preserve evidence (images, logs). Reinstalling right away destroys evidence and prevents understanding how the attacker got in, so they could come back.</p>"],
["who decides to speak to the press during an incident?","<p>Leadership, through the communication channel defined in the plan (communications, legal). Never a technician on their own initiative.</p>"]],
piege:[
"The first goal of response is to limit business impact.",
"Lessons learned are part of the response; they are not optional.",
"Do not forget legal and contractual notification obligations."]}
], true);
