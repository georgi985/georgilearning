/* CISSP: English version of the beginner track (same order as cissp-pas.js). */
PAS("cissp", [
{voc:[
["CIA triad","<b>Confidentiality</b>: only authorized people see the information. <b>Integrity</b>: information is not changed without authorization. <b>Availability</b>: it is accessible when needed."],
["Due diligence / due care","Due diligence: investigate and analyse before acting. Due care: act as a prudent person would (put controls in place)."],
["ISC2 Code of Ethics","Four canons, in order: protect society, act honourably, provide diligent and competent service to principals, advance the profession."],
["Administrative, technical, physical control","Policy and training; firewall and encryption; badge and camera."],
["Compensating control","A substitute control when the normal control is not possible."]],
ex:`<p>A fictitious clinic, <b>Clinique du Plateau</b>, analyses its electronic patient record:</p>
<ul><li><b>Confidentiality</b>: a patient's neighbour must not read their diagnosis → role-based access control.</li>
<li><b>Integrity</b>: an altered drug dosage can kill → logging and validation.</li>
<li><b>Availability</b>: at night, in the emergency room, the record must open → standby server.</li></ul>
<p>Here, integrity and availability matter more than confidentiality, because the patient's life is at stake. Human safety always comes first.</p>`,
steps:[
"Identify what has value and what must be protected (C, I or A).",
"Know the applicable laws and obligations (data protection, industry rules).",
"Assess risks: threats, vulnerabilities, likelihood, impact.",
"Choose proportionate controls (administrative, technical, physical).",
"Document them in policies and train people.",
"Monitor and review regularly."],
exo:[
["a colleague asks you to turn a blind eye to unauthorized access \"to avoid trouble\". What does the code of ethics say?","<p>The first canon is to protect society and the infrastructure. Acting honourably means not covering up misconduct. You report it through the proper channels.</p>"],
["a legacy system cannot be encrypted. What control do you propose?","<p>A <b>compensating control</b>: isolate the system in a dedicated network segment, restrict access and increase monitoring, pending replacement.</p>"]],
piege:[
"Human safety comes before data and assets.",
"On the CISSP, think like an adviser to leadership, not like a technician.",
"Do not confuse due diligence (investigate) with due care (act)."]},

{voc:[
["Classification","Ranking information by sensitivity: public, internal, confidential, secret."],
["Data owner","The business manager who decides classification and access."],
["Custodian","The team, often IT, that applies the protections decided (backups, permissions)."],
["Data remanence","Data that remains readable after a simple deletion."],
["Clearing, purging, destruction","Clear (internal reuse), purge (unrecoverable even in a lab), physically destroy (shredding, incineration)."],
["Data at rest, in transit, in use","Stored; moving across a network; being processed in memory."]],
ex:`<p>At <b>Banque Lagune</b>, a payroll file is classified "confidential" by the HR director (owner). IT (custodian) encrypts it on the server (at rest), enforces TLS when it is sent (in transit) and restricts access to HR.</p>
<p>At end of life, the bank does not just "format" hard drives: they are purged then shredded by a provider who issues a certificate of destruction.</p>`,
steps:[
"Inventory assets and assign an owner to each.",
"Classify information by its impact if it leaked or was altered.",
"Label documents and media.",
"Apply the protections required for each level.",
"Retain only as long as necessary, then destroy securely."],
exo:[
["who decides that a customer file is \"confidential\": the system administrator or the sales director?","<p>The sales director, the <b>owner</b> of the data. The administrator is the custodian: they apply the protections.</p>"],
["a company sells old computers to employees. Is deleting the files enough?","<p>No: deletion leaves recoverable data (remanence). Use a suitable, verified secure-erase tool, or replace the drive.</p>"]],
piege:[
"The owner decides; the custodian executes.",
"Formatting is not secure erasure.",
"For SSDs, classic overwriting may not be enough: full-disk encryption then crypto-erase, or physical destruction."]},

{voc:[
["Symmetric encryption","One shared key to encrypt and decrypt (AES). Fast, but the key must be exchanged securely."],
["Asymmetric encryption","A key pair: public (to share) and private (to keep). Slow, but solves key exchange and enables signatures (RSA, elliptic curves)."],
["Hashing","A fixed-length fingerprint of a message (SHA-256). One-way: the message cannot be recovered. Used to check integrity."],
["Digital signature","A hash encrypted with the sender's private key: proves origin and integrity, and prevents denial of sending."],
["Bell-LaPadula and Biba models","Bell-LaPadula protects confidentiality (no read up, no write down). Biba protects integrity (the reverse)."],
["Least privilege, separation of duties, defence in depth","Secure design principles."]],
ex:`<p>Awa sends a contract to Koffi:</p>
<ol><li>She hashes the contract and encrypts the hash with <b>her private key</b>: that is the signature.</li>
<li>She generates an AES key and encrypts the contract with it (fast).</li>
<li>She encrypts the AES key with <b>Koffi's public key</b>: only Koffi can open it.</li>
<li>Koffi decrypts the AES key with his private key, then the contract.</li>
<li>He verifies the signature with Awa's public key: the contract really comes from her and has not changed.</li></ol>
<p>This is the principle of <b>hybrid</b> encryption used by TLS and secure email.</p>`,
steps:[
"Confidentiality of large volumes → symmetric encryption.",
"Exchanging the key → asymmetric encryption with the recipient's public key.",
"Integrity only → hashing.",
"Origin and non-repudiation → signature with the sender's private key.",
"Trusting a public key → certificate issued by a certificate authority (PKI)."],
exo:[
["Awa wants only Koffi to read her message. Which key does she encrypt with?","<p><b>Koffi's public key</b>. Only Koffi's private key can decrypt it.</p>"],
["Awa wants to prove she wrote the message. Which key does she use?","<p><b>Her own private key</b> to sign. Anyone can verify with her public key.</p>"],
["under Bell-LaPadula, can a \"secret\" user write to a \"public\" document?","<p>No: the \"no write down\" rule prevents secret information from leaking to a lower level.</p>"]],
piege:[
"Encrypt with the recipient's public key = confidentiality; sign with your own private key = authenticity.",
"Hashing is not encryption: it cannot be decrypted.",
"Bell-LaPadula = confidentiality; Biba = integrity."]},

{voc:[
["OSI model","7 layers: physical, data link, network, transport, session, presentation, application. Used to place a protocol or an attack."],
["TCP / UDP","TCP: reliable, connection-oriented (three-way handshake). UDP: fast, no guarantee (voice, video, DNS)."],
["Firewall","Filters traffic by rules. Stateful: it tracks open connections."],
["Segmentation, DMZ","Splitting the network into zones; the DMZ hosts internet-facing servers, separated from the internal network."],
["VPN","An encrypted tunnel across an untrusted network (IPsec, TLS)."],
["IDS / IPS","Intrusion detection (alert) / prevention (block)."]],
ex:`<p>The network of a fictitious fuel distributor, <b>Sahel Énergie</b>:</p>
<ul><li>Internet → firewall → <b>DMZ</b> (website, email) → firewall → internal office network.</li>
<li>The depots' industrial network (pumping controllers) is in a separate zone, with no direct internet access.</li>
<li>Travelling sales staff go through a VPN with MFA.</li>
<li>An IPS monitors traffic between the DMZ and the internal network.</li></ul>
<p>If the website is hacked, the attacker stays stuck in the DMZ.</p>`,
steps:[
"Place the problem in the OSI model (cable? IP address? application?).",
"Split the network into zones by sensitivity.",
"Filter between zones: deny everything not explicitly allowed.",
"Encrypt sensitive flows (TLS, VPN).",
"Monitor (IDS/IPS, logs) and respond."],
exo:[
["at which OSI layer is an IP address? A MAC address?","<p>IP: layer 3 (network). MAC: layer 2 (data link).</p>"],
["why put the web server in a DMZ rather than the internal network?","<p>It is exposed to the internet and therefore more exposed to attack. In a DMZ, a compromise does not give direct access to the internal network.</p>"]],
piege:[
"Default firewall rule: deny everything not explicitly allowed.",
"An IDS alerts; an IPS blocks.",
"Passwords sent in clear text (Telnet, FTP, HTTP) are a weakness: prefer SSH, SFTP, HTTPS."]},

{voc:[
["Identification, authentication, authorization, accountability","Stating who you are (user ID); proving it; receiving rights; leaving traces (logs)."],
["Authentication factors","Something you know (password), something you have (phone, card), something you are (fingerprint). MFA combines factors of different types."],
["FAR / FRR / CER","Biometrics: false acceptance rate (type II), false rejection rate (type I), the point where both are equal (the lower, the better)."],
["DAC, MAC, RBAC, ABAC","Access decided by the owner; by labels enforced by the system; by role; by attributes (time, location, department)."],
["Federation, SSO","One sign-in for several applications, sometimes across organizations (SAML, OpenID Connect)."],
["Access lifecycle","Joiner, mover, leaver, with periodic reviews."]],
ex:`<p>At <b>SavaneTel</b>, Moussa moves from customer service to billing:</p>
<ul><li>His manager requests the rights of the "billing" role (RBAC).</li>
<li>His old "customer service" rights are <b>removed</b> the same day: otherwise he would accumulate rights.</li>
<li>Six months later, the access review confirms his rights match his job.</li>
<li>When he leaves the company, his account is disabled on his last day.</li></ul>`,
steps:[
"Create a unique identity for each person (no shared accounts).",
"Authenticate strongly (MFA for sensitive and remote access).",
"Grant rights by role, on least privilege.",
"Adjust rights at every job change.",
"Review rights periodically and remove leavers' rights immediately.",
"Log access to keep accountability."],
exo:[
["password + PIN: is that MFA?","<p>No. Both are the same type (something you know). MFA requires different types, for example password + code received on the phone.</p>"],
["a biometric system lets impostors in. Which rate is too high?","<p>The <b>FAR</b> (false acceptances, type II error). It is the most serious error for security.</p>"]],
piege:[
"Rights accumulating across job changes is a common audit finding.",
"Authentication = proving who you are; authorization = what you may do.",
"Type I error = false rejection (nuisance); type II = false acceptance (danger)."]},

{voc:[
["Vulnerability scan","Automated search for known weaknesses. It does not exploit them."],
["Penetration test","Controlled exploitation of weaknesses, with written authorization and a defined scope, to measure real impact."],
["Black, grey, white box","The tester knows nothing; knows a little; has all documentation and code."],
["Code review, static, dynamic testing","Reading the code; analysis without execution (SAST); testing the running application (DAST)."],
["Internal / external / third-party audit","By the company itself; by a firm for the company; by an independent body for a customer or regulator."],
["False positive / false negative","Alert on a problem that does not exist / real problem not detected."]],
ex:`<p><b>FlashPay</b> has its payment app tested before launch:</p>
<ol><li>Authorization letter signed by leadership, with scope, dates and emergency contacts.</li>
<li>Vulnerability scan: 40 alerts, 12 of them false positives ruled out after checking.</li>
<li>Grey-box penetration test: the tester manages to see another customer's transactions by changing a number in the web address.</li>
<li>Report ranked by severity, presented to developers and leadership; fix, then retest.</li></ol>`,
steps:[
"Define the objective, scope and rules of engagement.",
"Obtain written authorization from leadership.",
"Choose the appropriate test (vulnerability scan, penetration test, code review).",
"Execute, verify results, rule out false positives.",
"Report with recommendations ranked by risk.",
"Verify the fix with a retest."],
exo:[
["what is the first thing to obtain before a penetration test?","<p><b>Written authorization</b> from leadership, with the scope. Without it, the test is an illegal attack.</p>"],
["a scanner finds nothing on a server that is actually misconfigured. What is this called?","<p>A <b>false negative</b>: the most dangerous case, because you believe you are protected.</p>"]],
piege:[
"A vulnerability scan is not a penetration test: it does not prove exploitation.",
"No written authorization = no test.",
"A false negative is worse than a false positive."]},

{voc:[
["SIEM","A tool that centralizes logs, correlates them and raises alerts."],
["Change management","Every production change is requested, assessed, approved, tested and documented."],
["Patch management","Inventory, test, then deploy security updates by criticality."],
["Full, incremental, differential backup","Everything; what changed since the last backup; what changed since the last full backup."],
["Hot, warm, cold site","Ready in hours; in days; an empty room to equip (several weeks)."],
["Digital forensics","Collecting and analysing evidence while respecting chain of custody and order of volatility."]],
ex:`<p><b>Assur'Ivoire</b>'s backups: full on Sunday, differential every evening. Failure on Thursday morning:</p>
<ul><li>With <b>differentials</b>, restore: Sunday's full + Wednesday's differential (2 sets).</li>
<li>With <b>incrementals</b>, you would need: full + Monday + Tuesday + Wednesday (4 sets). Faster backup each evening, slower restore.</li></ul>
<p>One copy is kept offline: ransomware cannot encrypt it.</p>`,
steps:[
"Log important events and centralize them (SIEM).",
"Control every change before production.",
"Fix vulnerabilities according to criticality.",
"Back up (3-2-1 rule: 3 copies, 2 media, 1 off-site) and test restores.",
"Prepare recovery (recovery site) according to RTO and RPO.",
"In an incident, preserve evidence before acting."],
exo:[
["in which order do you collect evidence from a running computer: hard disk or RAM?","<p><b>RAM</b> first: it disappears when powered off (order of volatility). Then the disk.</p>"],
["an administrator applies an urgent patch directly in production, without a ticket. Problem?","<p>Yes: the change bypasses the process. Even in an emergency, there must be an emergency procedure with approval (even after the fact), documentation and a rollback option.</p>"]],
piege:[
"An untested backup is not a reliable backup.",
"Differential = 2 sets to restore; incremental = all since the full.",
"Hot site = expensive but fast; cold site = cheap but slow."]},

{voc:[
["Secure development lifecycle","Building security into each stage: requirements, design, coding, testing, release, maintenance."],
["SQL injection","The attacker slips commands into an input field so that the database executes them."],
["XSS (cross-site scripting)","The attacker makes a script run in another person's browser."],
["Input validation","Checking everything coming from the user: type, length, format, allowed characters."],
["Parameterized query","A way of writing queries that separates code from data: it blocks SQL injection."],
["DevSecOps","Automating security checks in the delivery pipeline (code analysis, dependency checks)."]],
ex:`<p>On <b>Banque Lagune</b>'s website, the "account number" field sends the typed text straight to the database. An attacker types an instruction that adds "or always true" to the query: the page displays all accounts.</p>
<p>Fix: parameterized query (input is treated as data, never as code), validation that the field contains digits only, a database account with minimal rights, and an automated test added to the pipeline.</p>`,
steps:[
"Write security requirements along with functional requirements.",
"Analyse threats at design stage.",
"Code securely: validate input, encode output, parameterized queries.",
"Test: code review, static and dynamic analysis, dependencies.",
"Separate development, test and production; control releases.",
"Fix vulnerabilities found after delivery."],
exo:[
["what is the best protection against SQL injection?","<p><b>Parameterized queries</b> (or well-written stored procedures), plus input validation. A web application firewall helps but does not replace secure code.</p>"],
["at which stage is fixing a flaw cheapest?","<p>At <b>design</b> (or requirements). The later a flaw is found, the more expensive the fix.</p>"]],
piege:[
"Never trust user input.",
"Developers must not put their own code into production (separation of duties).",
"External libraries must also be tracked and updated."]}
], true);
