/* CompTIA Security+ (V8, SY0-801): English version of the course.
   Same module order as secplus.js. Original content written for revision; it does not reproduce CompTIA's official objectives. */
(function(){
const T = (head, rows) => '<div class="tablewrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const D = (n, name, w) => '<p class="eyebrow">Domain ' + n + ' · ' + name + ' · ' + w + '% of the exam</p>';

const modules = [
{ day:"Domain 1", title:"General security concepts", html: D(1,"General Security Concepts",16) + `
<h2>The core objectives</h2>
${T(["Concept","Meaning","Example"],[
["Confidentiality","Only authorized people can read","Disk encryption"],
["Integrity","No unauthorized changes","Hashing a downloaded file"],
["Availability","Accessible when needed","Redundant servers"],
["Non-repudiation","The author cannot deny it","Digital signature"],
["AAA","Authentication, authorization, accounting","RADIUS logging VPN connections"]])}
<p>Authentication can apply to <b>people</b> or to <b>systems</b> (machine certificate, service account). Authorization follows a model (see the IAM module).</p>
<h2>Control categories and types</h2>
<p>The exam combines two axes: the <b>category</b> (who implements it) and the <b>type</b> (what the control does).</p>
${T(["Category","Examples"],[
["Technical","Firewall, encryption, EDR"],
["Managerial","Policies, risk analysis, reviews"],
["Operational","Guards, awareness, backups performed by people"],
["Physical","Fences, locks, lighting"]])}
${T(["Type","Role","Example"],[
["Preventive","Stops","Lock, firewall rule"],
["Deterrent","Discourages","\"CCTV in operation\" sign"],
["Detective","Spots","Log, IDS, camera"],
["Corrective","Fixes afterwards","Restoring from backup"],
["Compensating","Replaces a control that cannot be applied","Isolating an old system that cannot be patched"],
["Directive","Says what to do","Policy, posted instruction"]])}
<h2>Zero Trust</h2>
<p>Principle: "never trust, always verify". No user or device is trusted just because it is on the internal network.</p>
<ul><li><b>Control plane</b>: decides. It contains the <b>policy engine</b> and the <b>policy administrator</b>; together they form the <b>PDP</b> (policy decision point). It covers adaptive identity, threat scope reduction, policy-driven access control and security zones.</li>
<li><b>Data plane</b>: enforces. The <b>PEP</b> (policy enforcement point) allows or blocks the flow between subject and resource.</li></ul>
<h2>Physical security</h2>
<p>Bollards, access control vestibule (formerly "mantrap"), fencing, video surveillance, guards, badges, lighting, sensors (infrared, pressure, microwave, ultrasonic).</p>
<h2>Deception technologies</h2>
${T(["Decoy","Description"],[["Honeypot","Fake system to attract and observe the attacker"],["Honeynet","Network of honeypots"],["Honeyfile","Attractive fake file (\"passwords.xlsx\") that alerts when opened"],["Honeytoken","Fake data (fake account, fake API key) whose use reveals a leak"]])}
<h2>Change management</h2>
<p>Business process: approval, ownership, stakeholders, impact analysis, testing, backout plan, maintenance window, standard operating procedure. Technical impacts: allow lists, restarts, legacy applications, dependencies. Always update documentation and diagrams, and use version control.</p>
<h2>Gap analysis</h2><p>Compare the current state with a framework (NIST, ISO 27001) to identify what is missing.</p>
`},

{ day:"Domain 1", title:"Cryptography and PKI", html: D(1,"General Security Concepts",16) + `
<h2>Symmetric and asymmetric</h2>
${T(["","Symmetric","Asymmetric"],[
["Keys","One shared secret key","Public key / private key pair"],
["Speed","Fast, large data","Slow, small data"],
["Examples","AES, ChaCha20, (legacy: DES, 3DES, RC4)","RSA, ECC, Diffie-Hellman (key exchange)"],
["Problem","Distributing the key","Performance"]])}
<p>In practice they are combined: TLS exchanges a session key using asymmetric cryptography (or ECDHE), then encrypts the data with AES.</p>
<div class="box key"><h4>Who uses which key?</h4><ul><li>To <b>encrypt</b> a message to Awa: Awa's <b>public</b> key. Only her private key decrypts it.</li><li>To <b>sign</b>: the sender hashes the message and encrypts the digest with their <b>private</b> key. Anyone verifies it with the public key. This provides integrity, authentication and non-repudiation.</li></ul></div>
<h2>Hashing</h2>
<p>One-way function, fixed-size digest: SHA-256, SHA-3 (MD5 and SHA-1 are broken: collisions). Uses: integrity, password storage.</p>
<ul><li><b>Salt</b>: random value added before hashing, makes rainbow tables useless.</li><li><b>Key stretching</b>: bcrypt, PBKDF2, Argon2 deliberately slow down hashing to hinder brute force.</li><li><b>HMAC</b>: hashing with a secret key = integrity + authenticity.</li></ul>
<h2>Encryption by level</h2>
<p>Full disk (FDE, BitLocker), partition, volume, file, database, record, transport (TLS, IPsec). Encryption at rest protects against physical theft, not against a logged-in user.</p>
<h2>Hardware tools</h2>
${T(["Tool","Role"],[["TPM","Chip on the motherboard: stores keys, measured boot, BitLocker"],["HSM","Dedicated appliance to generate and protect keys at scale (banks, CAs)"],["Secure enclave","Isolated processor area for secrets (phones)"],["KMS","Key management service (often cloud)"]])}
<h2>Obfuscation</h2>
<p><b>Steganography</b>: hiding data in an image or sound. <b>Tokenization</b>: replacing sensitive data (card number) with a worthless token; the mapping is kept in a vault. <b>Masking</b>: displaying ****1234.</p>
<h2>PKI and certificates</h2>
<ul><li>A <b>CA</b> (certificate authority) signs certificates; an offline <b>root CA</b> and <b>intermediate CAs</b> for issuance form the chain of trust.</li><li><b>CSR</b>: certificate signing request, contains the public key.</li><li><b>Revocation</b>: <b>CRL</b> (downloaded list) or <b>OCSP</b> (real-time query); <b>OCSP stapling</b>: the server attaches the OCSP response.</li><li><b>Wildcard</b>: *.example.ci covers all subdomains at one level. <b>SAN</b>: several names in one certificate.</li><li><b>Self-signed</b>: no trusted third party, for testing or internal use only.</li><li><b>Key escrow</b>: a third party keeps a copy for recovery.</li><li><b>Pinning</b>: the application only accepts a specific certificate.</li></ul>
<h2>Other notions</h2>
<p><b>Blockchain</b>: distributed, immutable ledger. <b>Open public ledger</b>. <b>Post-quantum cryptography</b>: algorithms resistant to future quantum computers (NIST standardized ML-KEM and ML-DSA in 2024). <b>Perfect forward secrecy</b>: a compromised session key does not reveal other sessions.</p>
`},

{ day:"Domain 2", title:"Threat actors, vectors and social engineering", html: D(2,"Threats, Vulnerabilities, and Attacks",24) + `
<h2>Threat actors</h2>
${T(["Actor","Resources","Typical motivation"],[
["Nation-state / APT","Very high","Espionage, sabotage, war"],
["Organized crime","High","Money (ransomware, fraud)"],
["Hacktivist","Variable","Ideology, political cause"],
["Insider","Legitimate access","Revenge, money, mistake"],
["Unskilled attacker","Low, ready-made tools","Challenge, notoriety"],
["Shadow IT","Internal","Productivity without going through IT (unintended risk)"]])}
<p>Attributes: internal or external, level of resources, sophistication. Motivations: data exfiltration, espionage, service disruption, blackmail, financial gain, philosophical or political beliefs, revenge, disruption, war.</p>
<h2>Threat vectors and attack surfaces</h2>
<ul><li>Messages: email, SMS, instant messaging;</li><li>files, images, voice calls;</li><li>removable media (booby-trapped USB stick);</li><li>vulnerable software, client-based or agentless;</li><li>unsupported (end-of-life) systems;</li><li>unsecure networks: open Wi-Fi, Bluetooth;</li><li>open service ports, default credentials;</li><li>supply chain: managed service providers (MSPs), vendors, subcontractors.</li></ul>
<h2>Social engineering</h2>
${T(["Technique","Description"],[
["Phishing","Mass fraudulent email"],["Spear phishing","Targeted at one person"],["Whaling","Targeted at an executive"],
["Vishing","By voice (phone)"],["Smishing","By SMS"],
["Pretexting","Invented scenario to obtain information"],
["Impersonation","Pretending to be support, a supplier…"],
["BEC","Business email compromise: fake transfer order from the \"CEO\""],
["Watering hole","Booby-trapping a site visited by the targets"],
["Typosquatting","Look-alike domain: g00gle.com"],
["Brand impersonation","Fake site or email using a brand's identity"],
["Disinformation / misinformation","False information spread deliberately or not"]])}
<h2>AI-related threats</h2>
<p>Version V8 puts emphasis on AI:</p>
<ul><li><b>Prompt injection</b>: hidden instructions that hijack an AI assistant;</li><li><b>Training data poisoning</b>;</li><li><b>Model theft or extraction</b>;</li><li><b>Data leakage</b> through what employees paste into public AI tools;</li><li>Voice or video <b>deepfakes</b> for transfer fraud;</li><li><b>AI-generated phishing</b>, flawless and personalized.</li></ul>
<p>Defenses: AI acceptable use policy, input and output filtering, least privilege for AI agents, out-of-band verification of transfer requests.</p>
`},

{ day:"Domain 2", title:"Vulnerabilities, malware and attacks", html: D(2,"Threats, Vulnerabilities, and Attacks",24) + `
<h2>Vulnerabilities</h2>
${T(["Family","Examples"],[
["Applications","Buffer overflow, memory injection, race condition (TOCTOU), malicious update"],
["Operating system","Missing patches, privilege escalation"],
["Web","SQL injection, XSS"],
["Hardware","Vulnerable firmware, end of life (EOL), legacy products"],
["Virtualization","VM escape, resource reuse"],
["Cloud","Misconfiguration (public bucket), exposed keys"],
["Supply chain","Compromised software, hardware or service provider"],
["Cryptographic","Weak algorithms, poor key management"],
["Mobile","Sideloading, jailbreaking / rooting"],
["Zero-day","Flaw unknown to the vendor, no patch"]])}
<h2>Malware</h2>
${T(["Type","Characteristic"],[
["Ransomware","Encrypts data and demands a ransom; often double extortion"],
["Trojan","Poses as legitimate software"],
["Worm","Spreads by itself across the network"],
["Virus","Needs a host and a user action"],
["Spyware","Collects information without the user knowing"],
["Keylogger","Captures keystrokes"],
["Logic bomb","Triggers on a date or event"],
["Rootkit","Hides deep in the system with high privileges"],
["Bloatware","Useless preinstalled software that widens the attack surface"],
["Fileless","Lives in memory, uses PowerShell or WMI"]])}
<h2>Network attacks</h2>
<ul><li><b>DDoS</b>: saturation; <b>amplified</b> (small request, large response: DNS, NTP) and <b>reflected</b> (spoofed source address).</li><li><b>DNS attacks</b>: cache poisoning, domain hijacking.</li><li><b>Wireless</b>: rogue access point, evil twin, deauthentication, Bluetooth attacks.</li><li><b>On-path</b> (man in the middle): ARP poisoning, malicious proxy.</li><li><b>Credential replay</b>, pass-the-hash.</li></ul>
<h2>Application attacks</h2>
${T(["Attack","Principle","Defense"],[
["SQL injection","SQL code in a field","Parameterized queries, validation"],
["XSS","Injected script run in other users' browsers","Output encoding, CSP"],
["CSRF","Making a logged-in user perform an action","Anti-CSRF tokens, SameSite"],
["SSRF","The server queries an internal resource for the attacker","Destination allow list"],
["Directory traversal","../../etc/passwd","Path validation"],
["Buffer overflow","Writing beyond the allocated memory","Safe languages, ASLR, DEP"],
["Privilege escalation","Gaining more rights","Patching, least privilege"],
["Replay","Resending a captured request","Timestamps, nonce"]])}
<h2>Password and cryptographic attacks</h2>
<p><b>Password spraying</b>: one common password tried on many accounts (avoids lockout). <b>Brute force</b>: many attempts on one account. <b>Downgrade</b>: forcing a weaker protocol. <b>Collision</b> and <b>birthday attack</b>: two inputs, same digest.</p>
<h2>Physical attacks</h2><p>Physical brute force, RFID badge cloning, environmental attacks (cutting the air conditioning).</p>
<h2>Indicators of malicious activity</h2>
<p>Mass account lockouts, impossible travel (login from Abidjan then Moscow 10 minutes later), abnormal resource consumption, inaccessible resources, missing logs, blocked content, published or documented content (your data on a forum), concurrent sessions.</p>
<h2>Mitigation techniques</h2>
<p>Segmentation, access control (ACLs, permissions), application allow list, isolation, patching, encryption, monitoring, least privilege, configuration enforcement, proper decommissioning, hardening (EDR, host firewall, HIPS, disabling ports and protocols, changing default passwords, removing unnecessary software).</p>
`},

{ day:"Domain 3", title:"Secure architecture: cloud, network and systems", html: D(3,"Security Architecture",19) + `
<h2>Cloud models and shared responsibility</h2>
${T(["Model","Provider manages","Customer manages"],[
["IaaS","Hardware, physical network, virtualization","OS, applications, data, identities"],
["PaaS","+ OS and platform","Applications, data, identities"],
["SaaS","Almost everything","Data, accounts and configuration"]])}
<p>Whatever the model, the customer remains responsible for its data and access. Related concepts: hybrid cloud, multi-cloud, third parties, <b>IaC</b> (infrastructure as code), <b>serverless</b>, <b>microservices</b>, containers.</p>
<h2>Other architectures</h2>
<ul><li><b>Air gap</b>: physically isolated network.</li><li><b>SDN</b>: software-defined networking (separate control plane).</li><li><b>On-premises</b>, <b>centralized</b> or <b>decentralized</b>.</li><li><b>Virtualization</b> and <b>containerization</b>.</li><li><b>IoT</b>, <b>ICS / SCADA</b> (industrial), <b>OT</b>, <b>RTOS</b> (real-time), <b>embedded systems</b>: often hard to patch, hence segmentation.</li></ul>
<p>Selection criteria: availability, resilience, cost, responsiveness, scalability, ease of deployment, risk transference, ease of recovery, patch availability, power, compute.</p>
<h2>Network infrastructure</h2>
${T(["Concept","Key point"],[
["Security zones","Internal, DMZ (exposed services), guest, management"],
["Fail-open / fail-closed","On failure, lets everything through (availability) or blocks everything (security)"],
["Inline / tap (monitor)","An inline IPS can block; an IDS on a tap or mirror port only alerts"],
["Jump server","Single hardened point to administer a zone"],
["Proxy","Intermediary: filtering, caching, anonymization (forward or reverse proxy)"],
["Load balancer","Distributes traffic, active/active or active/passive"],
["802.1X / EAP","Port-based network access control with authentication (often RADIUS)"],
["Firewall","Layer 4 (ports, IPs), layer 7 / NGFW (applications), WAF (web), UTM (all-in-one)"]])}
<h2>Secure communications</h2>
<ul><li><b>VPN</b>: site-to-site or remote access; <b>IPsec</b> (AH = integrity, ESP = encryption; transport or tunnel mode); <b>TLS</b>.</li><li><b>SD-WAN</b>: software-defined WAN between sites.</li><li><b>SASE</b>: networking and security delivered from the cloud (SD-WAN + web gateway, CASB, ZTNA).</li></ul>
<h2>Wireless</h2>
<p>Prefer <b>WPA3</b> (SAE replaces WPA2's pre-shared key). In enterprises: WPA3-Enterprise with RADIUS and 802.1X. Run a site survey and a heat map to place access points.</p>
`},

{ day:"Domain 3", title:"Data protection and resilience", html: D(3,"Security Architecture",19) + `
<h2>Data types and states</h2>
<p>Types: regulated (health, payment cards), trade secrets, intellectual property, legal, financial; human-readable or not.</p>
<p>Usual classification: public, internal, confidential, restricted, critical; in the private sector "sensitive", "private"; in government "secret", "top secret".</p>
${T(["State","Protection"],[["At rest","Disk and database encryption, access control"],["In transit","TLS, VPN, IPsec"],["In use","Secure enclaves, memory protection"]])}
<p><b>Data sovereignty</b>: data is subject to the laws of the country where it is stored. <b>Geolocation</b>: restricting access by location.</p>
<p>Methods: geographic restrictions, encryption, hashing, masking, tokenization, obfuscation, segmentation, permission restrictions.</p>
<h2>High availability and resilience</h2>
<ul><li><b>Load balancing</b> (several active servers) or <b>clustering</b> (nodes that take over).</li><li>Recovery sites: <b>hot</b> (ready in minutes, expensive), <b>warm</b> (hardware present, data to restore), <b>cold</b> (empty premises, cheaper, slow).</li><li>Geographic dispersion, platform diversity, multi-cloud.</li><li><b>COOP</b>: continuity of operations.</li><li>Capacity planning: people, technology, infrastructure.</li></ul>
<h2>Testing</h2><p>Tabletop exercise, failover, simulation, parallel processing.</p>
<h2>Backups</h2>
${T(["Notion","Detail"],[
["Full","Everything, every time; simple restore"],
["Incremental","What changed since the last backup of any kind; fast, slow restore"],
["Differential","What changed since the last full backup; restore = full + latest differential"],
["Snapshot","Point-in-time image, common in virtualization"],
["Replication / journaling","Continuous copy / transaction log"],
["3-2-1 rule","3 copies, 2 media, 1 off-site (and ideally 1 offline against ransomware)"]])}
<h2>Continuity metrics</h2>
${T(["Acronym","Meaning"],[["RTO","Maximum acceptable downtime"],["RPO","Maximum acceptable data loss (in time)"],["MTTR","Mean time to repair"],["MTBF","Mean time between failures"]])}
<h2>Power</h2><p><b>UPS</b>: a few minutes to switch over or shut down cleanly. <b>Generator</b>: long duration. Highly relevant in West Africa where outages are frequent.</p>
`},

{ day:"Domain 4", title:"Operations: hardening, assets and vulnerabilities", html: D(4,"Security Operations",27) + `
<h2>Secure baselines</h2>
<p>Establish, deploy and maintain a secure baseline (CIS benchmarks, vendor guides). Hardening targets: mobile devices, workstations, switches, routers, cloud, servers, ICS/SCADA, embedded systems, IoT.</p>
<h2>Mobility</h2>
${T(["Model","Description"],[["BYOD","Employees use their personal device"],["COPE","Company-provided device, personal use allowed"],["CYOD","Employees choose from a list of company devices"]])}
<p><b>MDM</b>: centralized management (policies, remote wipe, containerization). Connections: cellular, Wi-Fi, Bluetooth.</p>
<h2>Application security</h2><p>Input validation, secure cookies (Secure, HttpOnly, SameSite), static (SAST) and dynamic (DAST) analysis, code signing, sandboxing.</p>
<h2>Asset management</h2><p>Acquisition/procurement process, assignment of an owner, classification, inventory and tracking, then disposal: sanitization, destruction, certificate of destruction, data retention according to the rules.</p>
<h2>Vulnerability management</h2>
${T(["Phase","Activities"],[
["Identification","Scans, application analysis, threat feeds (OSINT, partners, dark web), penetration tests, bug bounty, audits"],
["Analysis","Confirm (false positive / false negative), prioritize, CVSS (0 to 10 score), CVE (identifier), classification, exposure, environment, risk tolerance"],
["Response","Patching, insurance, segmentation, compensating control, documented exception"],
["Validation","Rescan, audit, verification"],
["Reporting","Communicate to owners"]])}
<div class="box tip"><h4>False positive and false negative</h4><p>False positive: the scanner reports a flaw that does not exist. False negative: a real flaw is not reported, which is the most dangerous. A <b>credentialed</b> scan reduces both.</p></div>
<h2>Monitoring</h2>
<p>Activities: log aggregation, alerting, scanning, reporting, archiving, response (quarantine, alert tuning). Tools: <b>SIEM</b>, <b>SCAP</b> (automated compliance content), benchmarks, agent-based or agentless, <b>SNMP traps</b>, <b>NetFlow</b>, antivirus, DLP, vulnerability scanners.</p>
`},

{ day:"Domain 4", title:"Enterprise defenses and identity management", html: D(4,"Security Operations",27) + `
<h2>Strengthening defenses</h2>
${T(["Tool","Use"],[
["Firewall rules","Ports, protocols, screened subnets; principle: deny by default"],
["IDS / IPS","Signatures and anomaly detection"],
["Web filtering","Agent, centralized proxy, URL reputation, categories"],
["DNS filtering","Block resolution of malicious domains"],
["Email security","SPF, DKIM, DMARC, email gateway"],
["FIM","File integrity monitoring"],
["DLP","Data loss prevention"],
["NAC","Network access control based on device posture"],
["EDR / XDR","Endpoint detection and response / extended to multiple sources"],
["UBA / UEBA","User (and entity) behavior analytics"]])}
<div class="box key"><h4>SPF, DKIM, DMARC</h4><ul><li><b>SPF</b>: DNS list of servers allowed to send for the domain.</li><li><b>DKIM</b>: cryptographic signature of the email, public key in DNS.</li><li><b>DMARC</b>: policy stating what to do if SPF or DKIM fails (none, quarantine, reject) and sends reports.</li></ul></div>
<h2>Identity life cycle</h2>
<p>Provisioning and deprovisioning, permission assignment, identity proofing, federation, attestation (periodic review of rights by managers).</p>
<h2>SSO and federation</h2>
${T(["Protocol","Role"],[["LDAP","Directory (Active Directory); LDAPS = encrypted"],["SAML","XML-based authentication federation between identity provider and service"],["OAuth 2.0","Delegated authorization (API access without sharing your password)"],["OpenID Connect","Authentication layer on top of OAuth"],["Kerberos","Authentication tickets on Windows networks"],["RADIUS / TACACS+","AAA for network access / device administration"]])}
<h2>Access control models</h2>
${T(["Model","Who decides","Example"],[["MAC (mandatory)","The system, based on sensitivity labels","Defense, \"secret\""],["DAC (discretionary)","The resource owner","Sharing a Windows folder"],["RBAC (role-based)","Based on the job","\"Accountant\" role"],["ABAC (attribute-based)","Based on attributes (location, time, department, device)","Access if department = Finance and device is managed"],["Rule-based","Global rules","Firewall, time-of-day restrictions"]])}
<p>Always apply <b>least privilege</b>.</p>
<h2>Multifactor authentication</h2>
<p>Factors: something you <b>know</b> (password), something you <b>have</b> (token, phone, FIDO2 key), something you <b>are</b> (biometrics), somewhere you <b>are</b>. Two passwords = a single factor. <b>Passkeys</b> (FIDO2 / WebAuthn) enable passwordless login and resist phishing.</p>
<p>Password best practices: length before complexity, no reuse, password manager, no arbitrary expiration without reason.</p>
<h2>Privileged access management (PAM)</h2>
<p><b>Just-in-time</b> (JIT) access, <b>password vaulting</b>, <b>ephemeral credentials</b>, session recording.</p>
<h2>Automation and orchestration</h2>
<p>Use cases: user provisioning, guardrails, ticketing, enabling or disabling services, continuous integration, APIs. Benefits: efficiency, consistency, faster reaction time, less fatigue. Considerations: complexity, cost, single point of failure, technical debt. V8 adds AI-assisted workflows: useful, but to be supervised.</p>
`},

{ day:"Domain 4", title:"Incident response and forensics", html: D(4,"Security Operations",27) + `
<h2>The response process</h2>
<ol><li><b>Preparation</b>: plan, team, tools, contacts.</li><li><b>Detection</b>.</li><li><b>Analysis</b>.</li><li><b>Containment</b>: isolate to limit spread.</li><li><b>Eradication</b>: remove the cause.</li><li><b>Recovery</b>: restore service and monitor.</li><li><b>Lessons learned</b>.</li></ol>
<div class="box tip"><h4>Order often tested</h4><p>Containment before eradication, eradication before recovery. Do not reformat a machine before collecting evidence if an investigation is possible.</p></div>
<p>Training and testing: tabletop exercise, simulation. <b>Root cause analysis</b>. <b>Threat hunting</b>: actively looking for an undetected compromise.</p>
<h2>Digital forensics</h2>
<ul><li><b>Legal hold</b>: prohibiting the destruction of data related to litigation.</li><li><b>Chain of custody</b>: who had the evidence, when, and why.</li><li><b>Acquisition</b>: bit-by-bit copy, hashing to prove integrity.</li><li><b>Preservation</b>, <b>reporting</b>, <b>e-discovery</b>.</li></ul>
<h3>Order of volatility (most to least volatile)</h3>
<p>CPU registers and cache → RAM → network state, running processes → temporary files and swap → disk → remote logs → backups and archives.</p>
<h2>Data sources</h2>
<p>Firewall, application, endpoint and OS logs, IDS/IPS, network logs, metadata; vulnerability scans, automated reports, dashboards, packet captures.</p>
`},

{ day:"Domain 5", title:"Governance, risk and third parties", html: D(5,"Security Program Management and Oversight",14) + `
<h2>Governance</h2>
${T(["Element","Examples"],[
["Guidelines","Non-mandatory recommendations"],
["Policies","Acceptable use (AUP), information security, business continuity, disaster recovery, incident response, SDLC, change management"],
["Standards","Passwords, access control, physical security, encryption"],
["Procedures","Change management, onboarding and offboarding, playbooks"],
["Structures","Boards, committees, government entities; centralized or decentralized"]])}
<h3>Data roles</h3>
${T(["Role","Responsibility"],[["Owner","Accountable for the data, decides its classification"],["Controller","Decides the purposes of processing personal data"],["Processor","Processes on behalf of the controller"],["Custodian / steward","Handles day-to-day care: backups, technical rights"]])}
<h2>Risk management</h2>
<p>Identification, assessment (ad hoc, recurring, one-time, continuous), qualitative or quantitative analysis.</p>
<div class="box key"><h4>Formulas</h4><p><b>SLE</b> = asset value × exposure factor. <b>ALE</b> = SLE × <b>ARO</b> (occurrences per year). A control is cost-effective if its annual cost is lower than the ALE reduction it brings.</p></div>
<ul><li><b>Risk register</b>: risks, owners, KRIs (key risk indicators), thresholds.</li><li><b>Risk appetite</b>: expansionary, conservative, neutral. <b>Risk tolerance</b>: acceptable deviation.</li><li><b>Strategies</b>: transfer (insurance), accept (with documented exemption or exception), avoid, mitigate.</li><li><b>BIA</b> (business impact analysis): sets RTO, RPO, MTTR, MTBF.</li></ul>
<h2>Third-party risk</h2>
<p>Vendor assessment: penetration testing, right-to-audit clause, evidence of internal audits, independent assessments, supply chain analysis. Selection: due diligence, conflicts of interest. Monitoring: questionnaires, ongoing monitoring, rules of engagement.</p>
${T(["Agreement","Purpose"],[["SLA","Measurable service level (99.9% availability)"],["MOU / MOA","Memorandum of understanding / agreement, shared intent, often not very binding"],["MSA","Master agreement for future services"],["SOW / WO","Statement of work for a specific engagement"],["NDA","Confidentiality"],["BPA","Business partners agreement (sharing profits and responsibilities)"]])}
`},

{ day:"Domain 5", title:"Compliance, audits and awareness", html: D(5,"Security Program Management and Oversight",14) + `
<h2>Compliance</h2>
<p>Internal and external reporting. Consequences of non-compliance: fines, sanctions, reputational damage, loss of license, contractual impacts. Monitoring: due diligence (getting informed) and due care (acting), attestation, automation.</p>
<h2>Privacy</h2>
<p>Local, national, regional and global laws (GDPR in Europe; in Côte d'Ivoire, Law No. 2013-450 and the ARTCI). Notions: data subject, controller and processor, data ownership, data inventory and retention, <b>right to be forgotten</b>.</p>
<h2>Audits and assessments</h2>
<ul><li><b>Attestation</b>: formal declaration of compliance.</li><li><b>Internal</b>: compliance, audit committee, self-assessment.</li><li><b>External</b>: regulator, examination, independent third-party audit.</li></ul>
<h2>Penetration testing</h2>
${T(["Notion","Meaning"],[
["Known environment (white box)","The tester has all the information"],
["Partially known (grey box)","Partial information"],
["Unknown (black box)","No information, like an external attacker"],
["Passive reconnaissance","Without touching the target (OSINT, public DNS)"],
["Active reconnaissance","Direct interaction (port scan)"],
["Physical / offensive / defensive / integrated","Red, blue, purple team"]])}
<p>A penetration test requires written and signed <b>rules of engagement</b>: scope, hours, contacts, what is forbidden.</p>
<h2>Security awareness</h2>
<p>Simulated phishing campaigns, recognizing anomalous behavior (risky, unexpected, unintentional), guidance (policies, passwords, removable media, social engineering, operational security, remote work), reporting, program development and execution, measuring results.</p>
`}
];

const pages = [
{ title:"Ports and protocols to know", html:`<p class="lead">A table that shows up throughout the exam, especially in performance-based questions on firewall rules.</p>` + T(["Port","Protocol","Secure?"],[
["20/21","FTP","No: prefer SFTP (22) or FTPS (990)"],["22","SSH, SFTP, SCP","Yes"],["23","Telnet","No: replace with SSH"],["25","SMTP","No (587 with STARTTLS for submission)"],["53","DNS (UDP, and TCP for zone transfers)","DNSSEC for integrity"],["67/68","DHCP","No"],["80","HTTP","No"],["88","Kerberos","Yes"],["110","POP3","No (995 = POP3S)"],["123","NTP","Not by default"],["143","IMAP","No (993 = IMAPS)"],["161/162","SNMP / traps","SNMPv3 only"],["389","LDAP","No (636 = LDAPS)"],["443","HTTPS","Yes"],["445","SMB","Never expose to the Internet"],["514","Syslog","No (6514 = syslog over TLS)"],["1812/1813","RADIUS","Partially"],["3389","RDP","Do not expose: go through VPN or a bastion"],["5060/5061","SIP / SIP over TLS","5061 yes"]])},
{ title:"Essential acronyms", html:`<p class="lead">CompTIA publishes a long list of acronyms. Here are the ones that come up most.</p>` + T(["Acronym","Meaning","In one sentence"],[
["AAA","Authentication, Authorization, Accounting","Who are you, what can you do, what did you do"],["ACL","Access Control List","List of access rules"],["ALE / ARO / SLE","Annualized Loss Expectancy / Rate of Occurrence / Single Loss Expectancy","Quantitative risk calculation"],["APT","Advanced Persistent Threat","Stealthy, long-term attacker"],["BIA","Business Impact Analysis","Impact of an outage on the business"],["CASB","Cloud Access Security Broker","Controls cloud usage"],["CVE / CVSS","Common Vulnerabilities and Exposures / Scoring System","Identifier / severity score"],["DLP","Data Loss Prevention","Prevents leaks"],["EDR / XDR","Endpoint / Extended Detection and Response","Detection on endpoints / extended"],["FIM","File Integrity Monitoring","Alerts if a critical file changes"],["HSM","Hardware Security Module","Hardware key vault"],["IoC","Indicator of Compromise","Trace of a compromise"],["MDM","Mobile Device Management","Managing mobile devices"],["NAC","Network Access Control","Controls admission to the network"],["OSINT","Open Source Intelligence","Intelligence from public sources"],["PAM","Privileged Access Management","Managing privileged accounts"],["PBQ","Performance-Based Question","Simulated practical question"],["RTO / RPO","Recovery Time / Point Objective","Tolerated downtime / data loss"],["SASE","Secure Access Service Edge","Networking and security from the cloud"],["SIEM","Security Information and Event Management","Log correlation"],["SOAR","Security Orchestration, Automation and Response","Response automation"],["TPM","Trusted Platform Module","Device security chip"],["WAF","Web Application Firewall","Firewall for web applications"],["ZTNA","Zero Trust Network Access","Application access without a full VPN"]])}
];

const exam = `
<p class="lead">CompTIA is replacing SY0-701 with <b>V8 (SY0-801)</b>, announced for around 17 November 2026. This course follows V8. If you are still taking SY0-701, 90% of the content remains valid; check its retirement date on comptia.org.</p>
<div class="grid">
<div class="card"><span class="stat">90</span><span class="t">questions maximum</span><span class="d">Multiple choice + performance-based questions (PBQs)</span></div>
<div class="card"><span class="stat">90</span><span class="t">minutes</span><span class="d">One minute per question on average</span></div>
<div class="card"><span class="stat">750</span><span class="t">out of 900 to pass</span><span class="d">Scale from 100 to 900</span></div>
</div>
<p>Language: the V8 exam is announced in English. Recommended experience: two years of security administration (not mandatory). Certification valid for 3 years, renewable through continuing education (CE).</p>
<h2>The 5 domains of V8</h2>
<div class="tablewrap"><table><thead><tr><th>Domain</th><th>Weight</th><th>Modules</th></tr></thead><tbody>
<tr><td>1. General Security Concepts</td><td class="num">16%</td><td>1, 2</td></tr>
<tr><td>2. Threats, Vulnerabilities, and Attacks</td><td class="num">24%</td><td>3, 4</td></tr>
<tr><td>3. Security Architecture</td><td class="num">19%</td><td>5, 6</td></tr>
<tr><td>4. Security Operations</td><td class="num">27%</td><td>7, 8, 9</td></tr>
<tr><td>5. Security Program Management and Oversight</td><td class="num">14%</td><td>10, 11</td></tr>
</tbody></table></div>
<p>Themes highlighted by V8: AI risks, AI-assisted automated workflows, Zero Trust, cloud, hybrid and OT architectures, third-party risk, privileged access management and federation.</p>
<h2>Strategy</h2>
<ol><li>PBQs often come first: flag them and come back at the end so you do not lose time.</li><li>Look for the keyword in the question: "BEST", "FIRST", "MOST likely". Several answers can be true; only one matches that word.</li><li>For "FIRST" in incident response, follow the order of the process.</li><li>Learn the ports and acronyms (see the resources).</li><li>Take the mock exam until you are consistently above 85% before booking.</li></ol>
<h2>6-week study plan</h2>
<div class="tablewrap"><table><thead><tr><th>Week</th><th>Work</th></tr></thead><tbody>
<tr><td>1</td><td>Modules 1 and 2, ports and acronyms</td></tr><tr><td>2</td><td>Modules 3 and 4</td></tr><tr><td>3</td><td>Modules 5 and 6</td></tr><tr><td>4</td><td>Modules 7 to 9 (the largest domain)</td></tr><tr><td>5</td><td>Modules 10 and 11, full quiz</td></tr><tr><td>6</td><td>Mock exams, reviewing mistakes, hands-on lab (firewall, logs)</td></tr>
</tbody></table></div>
`;

const c = CERTS.find(x => x.id === "secplus");
c.en = { title:"CompTIA Security+ (V8, SY0-801)", intro:"The foundations of operational cybersecurity, recognized everywhere: threats, architecture, operations, governance. Course aligned with the 5 domains of version V8.", modules, pages, exam };
})();
