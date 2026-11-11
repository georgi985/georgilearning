/* Security+: English version of the beginner track (same order as secplus-pas.js). */
PAS("secplus", [
{voc:[
["CIA","Confidentiality, integrity, availability: the three basic objectives."],
["Non-repudiation","Impossible to deny having performed an action (thanks to digital signatures and logs)."],
["AAA","Authentication (prove who you are), authorization (what you may do), accounting (trace of actions)."],
["Zero Trust","Nobody is trusted by default, even inside the network: every access is verified."],
["Control categories","Technical, managerial, operational, physical."],
["Control types","Preventive, deterrent, detective, corrective, compensating, directive."]],
ex:`<p>At the entrance of a fictitious bank branch:</p>
${'<div class="tablewrap"><table><thead><tr><th>Control</th><th>Category</th><th>Type</th></tr></thead><tbody><tr><td>"CCTV in operation" sign</td><td>Physical</td><td>Deterrent</td></tr><tr><td>Badge-controlled entrance airlock</td><td>Physical</td><td>Preventive</td></tr><tr><td>Recording camera</td><td>Physical</td><td>Detective</td></tr><tr><td>Restoring a backup</td><td>Technical</td><td>Corrective</td></tr><tr><td>Security policy</td><td>Managerial</td><td>Directive</td></tr><tr><td>Trained guard doing rounds</td><td>Operational</td><td>Detective / deterrent</td></tr></tbody></table></div>'}`,
steps:[
"First ask which objective is at stake: C, I or A.",
"Classify the control by category: who or what implements it?",
"Classify it by type: when does it act (before, during, after)?",
"In Zero Trust, verify every access: identity, device, context."],
exo:[
["an audit log recording who modified a file supports which principle?","<p><b>Accounting</b> (traceability) and <b>non-repudiation</b>: you can prove who acted.</p>"],
["a logon banner (\"authorized use only, all actions are logged\") is which type?","<p><b>Deterrent</b> (and directive): it discourages without technically preventing.</p>"]],
piege:[
"A control can belong to several types; pick the most obvious one for the question.",
"Hashing protects integrity, not confidentiality.",
"Zero Trust does not mean \"no firewall\": it means continuous verification."]},

{voc:[
["Symmetric (AES)","One key to encrypt and decrypt. Fast."],
["Asymmetric (RSA, ECC)","Public and private key. Used to exchange keys and to sign."],
["Hashing (SHA-256)","A unique, irreversible fingerprint. A salt (random value added) protects hashed passwords."],
["Digital certificate","A document signed by a certificate authority (CA) binding a public key to an identity (a site, a person)."],
["Revocation (CRL, OCSP)","List of cancelled certificates / online check of a certificate's status."],
["Disk, file, transport encryption","BitLocker, encrypting a file, TLS."]],
ex:`<p>When you open your bank's website over HTTPS:</p>
<ol><li>The site sends its <b>certificate</b>. Your browser checks that it is signed by a trusted CA, not expired or revoked, and that the name matches the site.</li>
<li>Browser and site agree on a <b>symmetric session key</b> using asymmetric cryptography.</li>
<li>The whole exchange is then encrypted with that key (AES), which is fast.</li></ol>
<p>If the certificate is fake, the browser shows a warning: it may be a man-in-the-middle attack.</p>`,
steps:[
"Confidentiality of large volumes → symmetric.",
"Key exchange or signature → asymmetric.",
"Checking a file has not changed → hashing.",
"Storing passwords → slow salted hash (bcrypt, PBKDF2, Argon2), never in clear text or reversibly encrypted.",
"Trusting a public key → certificate from a CA."],
exo:[
["why add a salt before hashing a password?","<p>So that two people with the same password get different hashes, and to defeat precomputed tables (rainbow tables).</p>"],
["a web server's private key has been stolen. What is the priority for the certificate?","<p><b>Revoke</b> it with the CA, generate a new key pair and obtain a new certificate.</p>"]],
piege:[
"Recipient's public key to encrypt; sender's private key to sign.",
"Hashing ≠ encryption (no key, no way back).",
"An expired or revoked certificate must not be accepted."]},

{voc:[
["Threat actors","Nation state (very powerful, espionage goals), organized crime (money), hacktivist (ideology), insider (employee), unskilled attacker, competitor."],
["Attack vector","The way in: email, SMS, USB stick, Wi-Fi, supplier, website."],
["Phishing","A fake message pushing you to click, give a password or pay. Smishing: by SMS. Vishing: by phone."],
["Business email compromise (BEC)","A fake message from the \"CEO\" asking for an urgent transfer."],
["Pretexting","An invented story to gain trust (\"I'm from IT support\")."],
["Watering hole","Booby-trapping a site the victims often visit."]],
ex:`<p>The accountant of a fictitious company receives an email from the "CEO": "I'm in a meeting, make an urgent transfer of 25 million FCFA to this supplier, I'll explain later." The address looks like the CEO's, one letter off.</p>
<p>Clues: urgency, secrecy, change of procedure, slightly different address. Right reaction: do not reply to the email, call the CEO on a known number, follow the dual-approval procedure for transfers, report the email to security.</p>`,
steps:[
"Spot the signals: urgency, fear, authority, reward, unusual request.",
"Verify the sender through another known channel.",
"Never give a password or a code received by SMS.",
"Report the message to the security team.",
"On the company side: awareness, email filtering, dual approval of payments."],
exo:[
["a fake technician calls an employee to get their MFA code. What is this attack?","<p><b>Vishing</b> (voice phishing) with a pretext.</p>"],
["which threat actor generally has the most resources and patience?","<p>A <b>nation-state</b> actor (often called an APT, advanced persistent threat).</p>"]],
piege:[
"Spear phishing targets a specific person; whaling targets an executive.",
"Typosquatting uses domain names close to the real one.",
"The best defence against BEC is an out-of-band verification procedure."]},

{voc:[
["Ransomware","Encrypts files and demands a ransom; often also steals data (double extortion)."],
["Trojan, worm, spyware, rootkit","Hides in normal software; spreads by itself; spies; hides deep in the system."],
["Zero-day","A flaw unknown to the vendor, with no patch available."],
["SQL injection, XSS","Attacks on web applications through crafted input."],
["Buffer overflow","The program writes more data than expected and may run attacker code."],
["Password attacks","Brute force, dictionary, spraying (one common password tried on many accounts), credential stuffing."]],
ex:`<p>An email system's logs show, in one hour, login attempts on 800 different accounts, each with the password "Abidjan2026!", and only one attempt per account.</p>
<p>Diagnosis: <b>password spraying</b>. Account lockout does not trigger because there is only one attempt per account. Defences: MFA, banning common passwords, detecting multiple logins from one source.</p>`,
steps:[
"Read the clues: one attempt per account (spraying), many attempts on one account (brute force), renamed files (ransomware).",
"Identify the weakness exploited (password, missing patch, unvalidated input).",
"Choose the control that cuts the cause: MFA, patch, input validation.",
"Add detection (logs, EDR) and recovery (backups)."],
exo:[
["a program copies itself from one computer to another without user action. What is it?","<p>A <b>worm</b>.</p>"],
["what is the best defence against a zero-day?","<p>There is no patch: rely on defence in depth (least privilege, segmentation, EDR spotting abnormal behaviour, backups).</p>"]],
piege:[
"A virus needs an action (opening a file); a worm spreads by itself.",
"A rootkit aims to stay hidden with high privileges.",
"Log clues give the answer: read them carefully."]},

{voc:[
["IaaS, PaaS, SaaS","Infrastructure (you manage the OS), platform (you manage the application), software (you mainly manage your data and access)."],
["Shared responsibility","In the cloud, the provider protects its part, the customer protects theirs (data, accounts, configuration)."],
["Segmentation, VLAN, DMZ","Separating network zones to limit spread."],
["Containers, virtualization","Isolated applications on one OS; virtual machines on one physical server."],
["IoT, OT/SCADA","Connected objects; industrial systems (pumps, valves), often old and hard to patch."],
["SASE / SD-WAN","Network and security services delivered from the cloud, close to the user."]],
ex:`<p>A fictitious company stores its invoices in a cloud storage bucket. An employee left it "public". The invoices are indexed by search engines.</p>
<p>Who is responsible? <b>The customer</b>: access configuration is part of its share of responsibility, even in IaaS or PaaS. Controls: block public access by default, configuration monitoring tool (CSPM), access review.</p>`,
steps:[
"Identify the model (IaaS, PaaS, SaaS) to know what you must protect.",
"Separate zones by sensitivity.",
"Isolate fragile systems (OT, IoT) in dedicated segments.",
"Apply secure baseline configurations and check them continuously."],
exo:[
["in SaaS (online email), who patches the server?","<p>The <b>provider</b>. The customer manages accounts, access, MFA and data.</p>"],
["how do you protect IP cameras that cannot be updated?","<p>Put them in an <b>isolated VLAN</b>, with no direct internet access, change default passwords and filter their traffic.</p>"]],
piege:[
"In every cloud model, data and access remain the customer's.",
"Default passwords on connected devices are a classic weakness.",
"A flat (unsegmented) network makes an attack spread easily."]},

{voc:[
["Data states","At rest, in transit, in use."],
["Masking, tokenization, anonymization","Hide part of it (**** 1234); replace with a worthless token; permanently remove the link to the person."],
["Data sovereignty","Data is subject to the laws of the country where it is stored."],
["High availability","Redundancy (two servers, two links) and load balancing to avoid outages."],
["Backup, snapshot, replication","Restorable copy; image of a state at a point in time; continuous copy to another site."],
["RTO / RPO","Acceptable downtime / acceptable data loss."]],
ex:`<p>A fictitious payment service does not keep card numbers: it replaces them with <b>tokens</b> (tokenization). If the database is stolen, the tokens are useless. Only a separate, highly protected vault holds the link.</p>
<p>For availability: two servers behind a load balancer, replication to a second data centre, daily offline backup tested every month.</p>`,
steps:[
"Classify data and minimize what you keep.",
"Protect according to state: encryption at rest and in transit, access control in use.",
"Mask or tokenize sensitive data when it does not need to be seen.",
"Plan redundancy according to RTO and RPO.",
"Test restores."],
exo:[
["a call centre must verify a customer's identity without seeing their full card number. Which technique?","<p><b>Masking</b>: show only the last 4 digits.</p>"],
["RPO of 5 minutes: daily backup or replication?","<p><b>Replication</b> (near continuous). A daily backup can lose up to 24 hours of data.</p>"]],
piege:[
"Tokenization is not encryption: the token has no mathematical link with the data.",
"RAID is not a backup: a deletion or encryption is mirrored on all disks.",
"Offline backups protect against ransomware."]},

{voc:[
["Hardening","Reducing the attack surface: disable unnecessary services, change default passwords, apply a baseline configuration."],
["Asset inventory","Knowing what you own: you cannot protect what you do not know."],
["CVE / CVSS","Public identifier of a vulnerability / severity score from 0 to 10."],
["Credentialed / non-credentialed scan","With an account (detailed inside view) / without (an outside attacker's view)."],
["Exception, accepted risk","When you cannot fix: documented decision, limited duration, compensating controls."]],
ex:`<p>A fictitious company's scan report lists 300 vulnerabilities. Order of treatment:</p>
<ol><li>CVSS 9.8 on the internet-facing web server, public exploit available → fix within 48 h.</li>
<li>CVSS 9.8 on an isolated internal server → fix within 15 days.</li>
<li>CVSS 5 on workstations → normal monthly update cycle.</li></ol>
<p>The score alone is not enough: consider exposure, asset value and whether an exploit is known.</p>`,
steps:[
"Keep an inventory of hardware and software.",
"Apply a hardened baseline configuration.",
"Scan regularly for vulnerabilities.",
"Prioritize by severity, exposure and asset value.",
"Fix, verify with a rescan, document exceptions."],
exo:[
["a non-credentialed scan finds few vulnerabilities on a server. Can you conclude it is secure?","<p>No: a <b>credentialed</b> scan sees much more (installed software, versions, configuration). The result may hide false negatives.</p>"],
["a business application does not work with the latest OS patch. What do you do?","<p>Create an approved, time-limited <b>exception</b>, add compensating controls (isolation, monitoring) and ask the vendor for an update.</p>"]],
piege:[
"Always start with the inventory.",
"Priority = severity × exposure × asset criticality.",
"Verify the fix with a new scan."]},

{voc:[
["Firewall, IPS, web filtering","Filter traffic; block known attacks; control websites visited."],
["EDR / XDR","Behavioural monitoring of endpoints and servers, with response (isolating a machine)."],
["SIEM / SOAR","Centralize and correlate logs / automate responses."],
["NAC","Control of devices that connect to the network."],
["SSO, federation, SAML, OAuth, OIDC","One sign-in for several services; delegated authorization; identity."],
["Least privilege, just-in-time access","Only the rights needed; elevated rights granted temporarily."]],
ex:`<p>The EDR on an accounting workstation detects that a Word document launches PowerShell, which downloads a file. The EDR automatically isolates the workstation from the network. The SIEM correlates this with a mail alert: the same document was received by 6 people. The SOAR removes the email from the 6 mailboxes. The analyst confirms and starts the investigation.</p>`,
steps:[
"Filter at the perimeter and between zones.",
"Monitor endpoints with an EDR.",
"Centralize logs in a SIEM and define alert rules.",
"Automate simple, repetitive responses (SOAR).",
"Manage identities: SSO, MFA, least privilege, access review."],
exo:[
["an unknown personal device is plugged into an office network socket. Which tool prevents it from accessing the network?","<p><b>NAC</b> (network access control), for example with 802.1X.</p>"],
["an administrator needs elevated rights one hour a month. Best practice?","<p><b>Just-in-time access</b> through a PAM tool: rights granted for the time needed, then removed automatically, with session recording.</p>"]],
piege:[
"OAuth is for authorization (delegating access), not authentication; OIDC adds identity.",
"The SIEM collects and alerts; the SOAR automates response.",
"An EDR sees behaviour, not just signatures."]},

{voc:[
["Response steps","Preparation, detection, analysis, containment, eradication, recovery, lessons learned."],
["Order of volatility","Collect first what disappears fastest: memory, network connections, then disk, then backups."],
["Chain of custody","A register tracing every handling of evidence."],
["Legal hold","An order not to delete anything in view of legal proceedings."],
["Tabletop exercise","A meeting-room simulation of an incident scenario to test roles and decisions."]],
ex:`<p>A file server is encrypting its data live:</p>
<ol><li><b>Detection</b>: EDR alert and user calls.</li><li><b>Containment</b>: isolate the server from the network (do not shut it down: memory would be lost).</li><li><b>Evidence</b>: memory capture, then disk image, with hash and chain of custody.</li><li><b>Eradication</b>: find the account used by the attacker, disable it, remove the backdoor.</li><li><b>Recovery</b>: restore from the offline backup, enhanced monitoring.</li><li><b>Lessons</b>: the attacker came in through a VPN without MFA.</li></ol>`,
steps:[
"Prepare: plan, team, tools, contacts, exercises.",
"Detect and analyse: is it an incident? What scope?",
"Contain without destroying evidence.",
"Eradicate the cause.",
"Recover and monitor.",
"Learn lessons and improve."],
exo:[
["which step does \"disconnect the infected machine from the network\" belong to?","<p><b>Containment</b>.</p>"],
["why compute the hash of a disk image?","<p>To prove the copy has not changed since it was collected (integrity of evidence).</p>"]],
piege:[
"Do not power off a machine before capturing memory, unless there is immediate danger.",
"Preparation is the first step, before any incident.",
"Analyse a copy, never the original."]},

{voc:[
["Policy, standard, procedure, guideline","What and why; measurable rule; how; advice."],
["Risk register","List of risks with owner, level and treatment."],
["SLE, ARO, ALE","Loss per event × annual frequency = annualized loss expectancy."],
["Accept, mitigate, transfer, avoid","The four risk treatments."],
["Third-party management","Questionnaire, right to audit, SLA, NDA, MSA, SOW, monitoring."],
["Risk appetite","The level of risk leadership accepts."]],
ex:`<p>Calculation for laptop theft in a fictitious company: value of a laptop with its data = 1.5 million FCFA (SLE), 8 thefts a year (ARO), ALE = 12 million FCFA. Disk encryption and cable locks cost 3 million a year: data no longer leaks and the impact drops to the hardware value. The control is worth it.</p>`,
steps:[
"Identify and assess risks.",
"Compare them with the risk appetite.",
"Choose a treatment and have the owner approve it.",
"Govern suppliers through contracts and assess them regularly.",
"Track the register and indicators."],
exo:[
["SLE 4 M, ARO 0.25. ALE?","<p>4 × 0.25 = <b>1 million FCFA a year</b>.</p>"],
["which document do you sign with a supplier to protect information exchanged even before the contract?","<p>An <b>NDA</b> (non-disclosure agreement).</p>"]],
piege:[
"MSA = master agreement; SOW = specific engagement; SLA = service levels.",
"Buying insurance = transferring, not removing, the risk.",
"The risk owner accepts the risk, not the technical team."]},

{voc:[
["Compliance","Meeting laws, regulations, standards and contracts (data protection, PCI DSS for cards)."],
["Data roles","Controller (decides purposes), processor (processes on its behalf), data subject (whose data is processed)."],
["Attestation","A formal statement that a requirement is met, often after an audit."],
["Internal / external audit","By the company / by an independent body."],
["Penetration test: known, partially known, unknown environment","The tester has all, some or no information."],
["Awareness","An ongoing programme: training, phishing simulation, indicators."]],
ex:`<p>A fictitious merchant accepts bank cards. It must comply with <b>PCI DSS</b>. It shrinks its scope by using a certified payment terminal that never stores card numbers, and a provider that tokenizes. The fewer systems see card data, the fewer controls to justify.</p>
<p>People side: quarterly phishing simulation, click rate tracked, targeted training for those who click.</p>`,
steps:[
"List applicable obligations (laws, industry, contracts).",
"Reduce the scope concerned when possible.",
"Implement and document controls.",
"Get audited and fix gaps.",
"Train and raise awareness continuously, measuring results."],
exo:[
["a company outsources payroll to a provider. Who is the controller?","<p>The <b>company</b>: it decides the purposes. The provider is the processor.</p>"],
["what can non-compliance cost, besides fines?","<p>Loss of the right to operate (licence withdrawn, ban on accepting cards), reputational damage, lawsuits from customers.</p>"]],
piege:[
"Reducing scope is often the best compliance strategy.",
"Awareness is measured (click rate, report rate).",
"A penetration test requires signed rules of engagement."]}
], true);
