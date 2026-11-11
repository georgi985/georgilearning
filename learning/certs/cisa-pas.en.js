/* CISA: English version of the beginner track (same order as cisa-pas.js). */
PAS("cisa", [
{voc:[
["Audit universe","Everything that could be audited: processes, applications, sites, suppliers."],
["Annual audit plan","The selection of engagements for the year from the universe, based on risk."],
["Inherent risk","Risk of error or fraud before any control (complex activity, large amounts)."],
["Control risk","Risk that the company's controls do not prevent or detect the error."],
["Detection risk","Risk that the auditor misses it. It is the only risk the auditor controls, through the extent of testing."],
["Audit charter","A board-approved document giving internal audit its mandate, authority and independence."]],
ex:`<p><b>Banque Lagune</b>'s internal audit prepares its annual plan, scoring each area from 1 to 5:</p>
${'<div class="tablewrap"><table><thead><tr><th>Area</th><th>Impact</th><th>Likelihood</th><th>Score</th><th>Decision</th></tr></thead><tbody><tr><td>Mobile payment (new)</td><td>5</td><td>4</td><td>20</td><td>Audit this year</td></tr><tr><td>Access management for the banking system</td><td>5</td><td>3</td><td>15</td><td>Audit this year</td></tr><tr><td>Email</td><td>3</td><td>2</td><td>6</td><td>In 2 or 3 years</td></tr><tr><td>Intranet</td><td>1</td><td>2</td><td>2</td><td>Out of plan</td></tr></tbody></table></div>'}
<p>The plan is submitted to the audit committee, which approves it.</p>`,
steps:[
"Understand the business, its objectives, systems and risks.",
"Build the audit universe and score each item's risk.",
"Select priority engagements based on risk and resources.",
"Have the plan approved by the audit committee.",
"For each engagement: objectives, scope, work programme, team.",
"Revise the plan during the year if risks change."],
exo:[
["high inherent risk and weak controls. What does the auditor do with detection risk?","<p>They must <b>lower</b> it: more substantive tests, larger samples, more experienced auditors. Overall audit risk = inherent × control × detection must stay acceptable.</p>"],
["a director asks internal audit not to audit their department this year. What does the chief audit executive do?","<p>Keep the risk-based choice. If there is pressure, inform the audit committee. Independence is guaranteed by the charter.</p>"]],
piege:[
"The only risk the auditor controls is detection risk.",
"The audit plan is risk-based, not based on convenience or requests.",
"The auditor does not design or operate the controls they audit (independence)."]},

{voc:[
["Audit evidence","Information supporting the conclusion. It must be sufficient (quantity) and appropriate (relevant and reliable)."],
["Reliability of evidence","Evidence obtained from a third party, or directly by the auditor, is worth more than an oral statement by the auditee."],
["Compliance test (test of controls)","Checks that a control exists and works. Example: are access requests approved?"],
["Substantive test (test of details)","Checks the accuracy of data directly. Example: recomputing interest."],
["Statistical sampling","Random selection that lets you measure the sampling risk."],
["Finding","A gap observed, presented with: condition, criteria, cause, effect, recommendation."]],
ex:`<p>"Access management" engagement at <b>SavaneTel</b>:</p>
<ol><li>Compliance test: 25 new accounts picked at random over the year. 4 have no approved request.</li>
<li>Substantive test: list of active accounts compared with HR's list of leavers: 7 leavers' accounts still active, 2 used after departure.</li>
<li>Finding: <b>condition</b> 7 active accounts; <b>criteria</b> policy requires disabling within 24 h; <b>cause</b> HR does not notify IT; <b>effect</b> possible access to customer data; <b>recommendation</b> automated HR-directory link and monthly review.</li>
<li>Closing meeting: the IT director commits to a dated action plan.</li></ol>`,
steps:[
"Execute the work programme: interviews, observation, inspection, recalculation.",
"Choose representative samples.",
"Document every test in the working papers.",
"Assess exceptions and their severity.",
"Discuss findings with the auditee before the report.",
"Issue the report and follow up implementation of recommendations."],
exo:[
["which evidence is more reliable: the IT director's statement or an extraction performed by the auditor in the system?","<p>The auditor's own extraction: it is obtained directly, without relying on the auditee's word.</p>"],
["the auditee disputes a finding. Should the auditor withdraw it?","<p>Not if it is supported by evidence. They can rephrase it and include the auditee's position in the report. They withdraw it only if the auditee provides contrary evidence.</p>"]],
piege:[
"If controls are weak, increase substantive testing.",
"Suspected fraud is reported to the appropriate level (management, audit committee), without investigating alone beyond the mandate.",
"Follow-up of recommendations is part of the audit work."]},

{voc:[
["IT governance","How leadership ensures IT serves the strategy, manages its risks and uses its resources well."],
["IT strategy committee","Advises the board on IT direction."],
["IT steering committee","Management level: prioritizes projects, tracks budgets and results."],
["COBIT","Framework for governance and management of enterprise IT."],
["IT strategic plan","A multi-year IT plan aligned with the business strategy."],
["Segregation of duties","One person must not be able to initiate, approve and record a transaction."]],
ex:`<p>The insurer <b>Assur'Ivoire</b> wants to sell policies online. The auditor checks:</p>
<ul><li>does the IT strategic plan include this project and the required resources?</li><li>has the steering committee set priorities and does it track the budget?</li><li>are IT policies approved and up to date?</li><li>does the CIO report measurable results to leadership?</li></ul>
<p>Possible finding: each department launches projects without joint prioritization; several overlap. Recommendation: a steering committee that prioritizes according to strategy.</p>`,
steps:[
"Read the business strategy and the IT strategic plan.",
"Check that committees exist, meet and decide (minutes).",
"Review policies: approval, communication, updates.",
"Check roles and segregation of duties.",
"Review IT performance indicators reported to leadership."],
exo:[
["the best evidence that IT governance works: the existence of a committee, or decisions taken and followed up by that committee?","<p>Decisions taken and followed up. A committee that exists on paper but decides nothing provides no governance.</p>"],
["a database administrator can also post accounting entries. Risk?","<p>Yes: insufficient segregation of duties. They could post and then alter data without a trace. Recommendation: remove one of the rights or, failing that, add a compensating control (log review by an independent person).</p>"]],
piege:[
"Governance belongs to the board and leadership; management belongs to the CIO.",
"A compensating control is the answer when segregation of duties is impossible (small team).",
"Alignment with strategy is the first evaluation criterion."]},

{voc:[
["Outsourcing","Entrusting an IT activity to a provider. Accountability stays with the company."],
["Service level agreement (SLA)","The provider's measurable commitment: availability, resolution times, penalties."],
["Right-to-audit clause","The contractual right to audit the provider or obtain an independent report."],
["ISAE 3402 / SOC report","An independent auditor's report on a service provider's controls. Type 1: design at a date. Type 2: operating effectiveness over a period."],
["Portfolio management","Selecting and tracking all projects and services according to their value and risk."]],
ex:`<p><b>FlashPay</b> hosts its platform with a provider. The auditor reviews the contract: 99.9% availability, incident notification within 24 h, data location, reversibility (getting data back at contract end), right to audit.</p>
<p>They request the provider's ISAE 3402 <b>type 2</b> report and read the "complementary user entity controls" section: FlashPay must manage its own employees' access itself. So they check that point at FlashPay.</p>`,
steps:[
"Check that a risk assessment preceded the choice of provider.",
"Read the contract: SLA, security, confidentiality, audit, reversibility, subcontracting.",
"Check monitoring: dashboards, committees, penalties applied.",
"Obtain and analyse independent reports (type, period, qualifications, user controls).",
"Review management of internal resources and skills."],
exo:[
["is an ISAE 3402 type 1 report enough to conclude that the provider's controls worked all year?","<p>No. Type 1 describes control design at a date. You need a <b>type 2</b>, which tests effectiveness over a period.</p>"],
["the provider suffers a leak of the bank's customer data. Who is accountable to customers and the regulator?","<p>The <b>bank</b>. You outsource the activity, not the accountability.</p>"]],
piege:[
"Reversibility (exit from the contract) is often forgotten.",
"The provider's report lists controls the customer must perform itself: check them.",
"The SLA must be measurable and monitored, otherwise it has no effect."]},

{voc:[
["Feasibility study / business case","Justifies the project: needs, options, costs, benefits, risks."],
["Requirements specification","Description of the needs the solution must meet."],
["Critical path","The sequence of tasks that sets the total project duration: any delay on them delays the end."],
["Earned value management","Compares planned work, completed work and actual cost to detect cost and schedule overruns."],
["Waterfall / agile methods","Successive frozen phases / short cycles with frequent deliveries."],
["Post-implementation review","Checks after go-live that expected benefits are achieved."]],
ex:`<p>New billing software project at <b>SavaneTel</b>: budget 500 million FCFA, 12 months. At month 6:</p>
<ul><li>work planned to date: 250 M;</li><li>work actually done (earned value): 200 M;</li><li>actual cost spent: 280 M.</li></ul>
<p>Behind schedule: 200 &lt; 250. Over budget: 280 &gt; 200, i.e. 80 M more than the value produced. The auditor alerts the steering committee before it is too late.</p>`,
steps:[
"Check that the project is justified and approved (business case).",
"Review governance: sponsor, project manager, committee, milestones.",
"Track cost, time and quality; spot overruns early.",
"Check that security and control requirements are in the requirements.",
"After go-live, check the benefits obtained."],
exo:[
["earned value 300 M; actual cost 250 M. Is the project over or under budget?","<p><b>Under</b> budget: it produced 300 M of work while spending only 250 M.</p>"],
["what is the best time for the auditor to get involved in a project?","<p>Throughout the project, and especially early (requirements, design), to make sure controls are planned. An audit only after go-live is too late to fix things cheaply.</p>"]],
piege:[
"The business sponsor owns the project; not the CIO alone.",
"The auditor advises on controls but does not take project decisions (independence).",
"The post-implementation review measures benefits, not just schedule compliance."]},

{voc:[
["Unit, integration, system, acceptance testing","One function; several modules together; the whole system; final validation by users."],
["Regression testing","Checks that a change has not broken what worked."],
["Changeover (conversion)","Moving from the old system to the new: parallel, phased, pilot or direct."],
["Data migration","Transferring data from the old to the new system, with reconciliation controls."],
["Separate environments","Development, test and production kept apart."],
["Version control","Tracking versions of code and configurations."]],
ex:`<p>Migration of <b>Assur'Ivoire</b>'s payroll software. The auditor checks migration controls:</p>
<ul><li>number of employees before and after: 1,250 = 1,250;</li><li>total gross pay for the last month: identical to the franc;</li><li>sample of 20 records compared field by field;</li><li>sign-off by the HR director (user acceptance);</li><li><b>parallel</b> run for one month: both systems compute payroll and results are compared.</li></ul>`,
steps:[
"Check that tests cover requirements, including security.",
"Check that users sign off (acceptance) before production.",
"For a migration, reconcile counts and totals before and after.",
"Choose a changeover method suited to the risk.",
"Check that the release to production is done by someone other than the developer."],
exo:[
["which changeover method is the safest but the most expensive?","<p><b>Parallel</b> changeover: both systems run together, so results can be compared before the old one is stopped.</p>"],
["who should sign off acceptance of new payroll software?","<p>The <b>business</b> (HR director), owner of the process, not the IT team.</p>"]],
piege:[
"Production data must not be used in test without anonymization.",
"A developer must not have access to production.",
"Control totals (counts, amounts) are the key evidence of a successful migration."]},

{voc:[
["Incident / problem management","Incident: restore service quickly. Problem: find and remove the cause of repeated incidents."],
["Change management","Request, assessment, approval, test, release, review."],
["CMDB","Database of configuration items (servers, software, relationships between them)."],
["Batch scheduling","Planned automated jobs, for example the nightly accounting close."],
["Capacity management","Anticipating resources (storage, computing power) before they run out."]],
ex:`<p>At <b>Banque Lagune</b>, the auditor extracts from production the list of all changes for the year (system log), then compares it with approved tickets:</p>
<ul><li>312 changes in the system, 298 approved tickets.</li><li>14 changes <b>without a ticket</b>: 9 emergency fixes not regularized, 5 unexplained.</li></ul>
<p>Key point: go from the system to the tickets (not the reverse) to find unauthorized changes.</p>`,
steps:[
"Obtain the list of changes from the system itself.",
"Reconcile with approved tickets, in both directions.",
"Review major incidents: timelines, causes, problem management.",
"Check overnight jobs: monitoring of failures and reruns.",
"Review capacity management and logs."],
exo:[
["to find unauthorized changes, do you start from tickets or from actual system changes?","<p>From <b>actual system changes</b> (logs, version comparison). Starting from tickets only shows declared changes.</p>"],
["the same incident happens every week and is fixed by rebooting the server. What is missing?","<p><b>Problem management</b>: nobody looks for the root cause. A problem record must be opened, analysed and fixed.</p>"]],
piege:[
"Emergency changes are allowed, but regularized and approved afterwards.",
"Test direction matters: from the population to the evidence for completeness.",
"Incident ≠ problem."]},

{voc:[
["BIA","Business impact analysis: critical processes, consequences of an outage, RTO and RPO."],
["RTO / RPO","Acceptable downtime / acceptable data loss."],
["BCP / DRP","Business continuity / IT disaster recovery."],
["Types of tests","Document review, tabletop exercise, partial test, full test."],
["3-2-1 backup","3 copies, on 2 different media, 1 off-site (ideally offline)."]],
ex:`<p>The auditor reviews <b>FlashPay</b>'s disaster recovery plan:</p>
<ul><li>BIA dated 4 years ago, while the company has launched 3 new services: <b>finding</b>.</li>
<li>Stated RTO: 2 h. Last live test: recovery achieved in 9 h: <b>major finding</b>.</li>
<li>Backups on the same site as the servers: a fire would destroy everything: <b>finding</b>.</li></ul>
<p>Recommendations: redo the BIA, off-site copy, retest after fixes, report to leadership.</p>`,
steps:[
"Check that the BIA exists, is recent and approved by the business.",
"Compare technical solutions with the required RTO and RPO.",
"Review tests: frequency, realism, results, fixes.",
"Check backups: frequency, location, restore tests.",
"Check that the plan is up to date (contacts, systems, suppliers)."],
exo:[
["what is the best indicator that a recovery plan will work?","<p><b>Regular, successful</b>, realistic tests with gaps fixed. A well-written but never-tested plan proves nothing.</p>"],
["what is the first step in building a BCP?","<p>The <b>BIA</b>: it tells what is critical and within what time.</p>"]],
piege:[
"The BIA comes before the recovery strategy.",
"A tabletop test does not prove technical recovery works.",
"Backups must be kept away from the main site."]},

{voc:[
["Access review","Periodic check by managers that each right is still justified."],
["Privileged accounts","Accounts with high rights (administrators). They require stronger protection and monitoring."],
["PAM","Privileged access management tool: password vault, session recording."],
["Generic / shared account","An account used by several people: you cannot tell who did what."],
["Physical security","Control of entry to the server room: badges, register, cameras."]],
ex:`<p>Test of the access review for <b>Sahel Énergie</b>'s accounting software:</p>
<ol><li>The auditor obtains the list of 180 users, extracted by themselves.</li><li>They check that the last review was performed by managers: yes, 6 months ago.</li><li>But 12 rights flagged "to remove" during the review are still active: the review was not acted on.</li><li>They find 3 "admin" accounts shared by the IT team.</li></ol>
<p>Findings: removals not applied and shared accounts with no accountability. Recommendations: check that removals are actually made, named accounts, a PAM tool.</p>`,
steps:[
"Obtain the list of accounts and rights yourself.",
"Reconcile with the staff list (leavers, transfers).",
"Review privileged accounts and their monitoring.",
"Check the access review and that it is acted on.",
"Check authentication settings (MFA, passwords, lockout)."],
exo:[
["the access review took place, but rights to be removed were not removed. Is the control effective?","<p>No. The control includes the review <b>and</b> the removal. Without removal, it does not meet its objective.</p>"],
["why is a shared administrator account a problem?","<p>You cannot tell who performed an action (no accountability, no individual responsibility).</p>"]],
piege:[
"A list provided by the auditee must be checked (completeness and accuracy).",
"A leaver's account still active is a classic finding.",
"Physical access to the server room must also be audited."]},

{voc:[
["Data loss prevention (DLP)","A tool that detects and blocks sending of sensitive data (card numbers, customer files)."],
["Key management","Creation, storage, rotation, revocation and destruction of encryption keys."],
["HSM","A secure hardware device that generates and protects keys (widely used in banking and card payments)."],
["Logging and monitoring","Recording security events, protecting them and analysing them."],
["Personal data protection","Compliance with data protection law (in Côte d'Ivoire, the 2013 law and the ARTCI): purpose, consent, security, retention period."]],
ex:`<p>At <b>Banque Lagune</b>, the auditor checks encryption of card numbers:</p>
<ul><li>Data is encrypted in the database: good.</li><li>But the encryption key is stored in a file on the same server: an attacker who steals the server gets both. <b>Finding</b>.</li><li>Database access logs are kept only 30 days and nobody reads them: <b>finding</b>.</li></ul>
<p>Recommendations: keys in an HSM, separation of duties over keys, longer log retention and SIEM alerts.</p>`,
steps:[
"Identify sensitive data and where it lives.",
"Check protection at rest, in transit and on exit (DLP).",
"Review key management: storage, access, rotation.",
"Check logging: what, how long, who reads it.",
"Check compliance with data protection laws."],
exo:[
["data is encrypted but the key sits next to it. Is the risk addressed?","<p>No: whoever obtains the data also obtains the key. Encryption is only as strong as the protection of the key.</p>"],
["logs exist but nobody looks at them. What is the weakness?","<p>Monitoring is not effective: logs are a detective control only if they are analysed, with alerts and follow-up.</p>"]],
piege:[
"Encrypting without managing keys does not protect.",
"Logging without review detects nothing.",
"Logs themselves must be protected against tampering."]}
], true);
