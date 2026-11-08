/* ISC2 CISSP: English version of the course. Same module order as cissp.js.
   Original content written for revision; it does not reproduce the official ISC2 guide. */
(function(){
const T = (head, rows) => '<div class="tablewrap"><table><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const D = (n, name, w) => '<p class="eyebrow">Domain ' + n + ' · ' + name + ' · ' + w + '% of the exam</p>';

const modules = [
{ day:"Domain 1", title:"Security and risk management", html: D(1,"Security and Risk Management",16) + `
<p class="lead">CISSP is often described as "a mile wide and an inch deep". This domain sets the mindset: think like an adviser to management who protects the organization, not like a technician.</p>
<h2>The ISC2 Code of Ethics</h2>
<p>Four canons, in this order of priority: protect society, the common good and the infrastructure; act honorably, honestly, justly, responsibly and legally; provide diligent and competent service to principals; advance and protect the profession. In case of conflict, the higher canon prevails.</p>
<h2>Core concepts</h2>
<p>CIA (confidentiality, integrity, availability) and its opposite DAD (disclosure, alteration, destruction). Authenticity, non-repudiation. <b>Due care</b> (acting as a reasonable person) and <b>due diligence</b> (getting informed, verifying continuously).</p>
<h2>Governance</h2>
<p>Alignment with strategy, roles (management, owners, custodians, users), committees, frameworks (COBIT, ISO 27001, NIST CSF), policies, standards, procedures, guidelines and baselines.</p>
<h2>Law and compliance</h2>
${T(["Notion","Key point"],[
["Types of law","Criminal, civil, administrative (regulatory)"],
["Intellectual property","Copyright, trademark, patent, trade secret"],
["Privacy","GDPR, national laws (Côte d'Ivoire: Law 2013-450); cross-border data flows"],
["Licensing","License agreements, open source, compliant use"],
["Investigations","Administrative, criminal, civil, regulatory; different standards of proof"]])}
<h2>Risk management</h2>
<p>Identify assets, threats, vulnerabilities; analyze (qualitative, quantitative: SLE = AV × EF, ALE = SLE × ARO); treat (mitigate, transfer, avoid, accept); monitor. Value of a safeguard = ALE before − ALE after − annual cost of the safeguard.</p>
<p>Frameworks: NIST RMF (SP 800-37: categorize, select, implement, assess, authorize, monitor), ISO 31000, ISO/IEC 27005, FAIR.</p>
<h2>Threat modeling</h2>
<p><b>STRIDE</b>: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege. Others: PASTA, DREAD, attack trees, MITRE ATT&amp;CK.</p>
<h2>Business continuity</h2>
<p>Scope and team, <b>BIA</b> (MTD, RTO, RPO, WRT), strategy, plan, testing, maintenance. Management support is the first condition.</p>
<h2>Personnel and awareness</h2>
<p>Pre-employment screening, NDAs, segregation of duties, job rotation, mandatory vacations, controlled terminations, third-party security, awareness and training programs tailored to roles.</p>
`},

{ day:"Domain 2", title:"Asset security", html: D(2,"Asset Security",10) + `
<h2>Classification</h2>
<p>Government: Top Secret, Secret, Confidential, Unclassified. Private sector: Confidential / proprietary, Private, Sensitive, Public. Classification depends on value and the impact of disclosure; it determines handling, storage and destruction rules.</p>
<h2>Data roles</h2>
${T(["Role","Responsibility"],[["Data owner","Ultimately accountable, classifies, approves access"],["Controller","Decides the purposes of processing personal data"],["Processor","Processes on behalf of the controller"],["Custodian","Implements protection day to day (IT)"],["Steward","Data quality and business use"],["Data subject","The person whose data is processed"]])}
<h2>Data life cycle</h2>
<p>Creation / collection, storage, use, sharing, archiving, destruction. <b>Minimization</b>: collect only what is needed. <b>Retention</b>: duration defined by law and business needs.</p>
<h2>Data states</h2><p>At rest (disk, database encryption), in transit (TLS, IPsec), in use (memory protection, enclaves).</p>
<h2>Erasure and destruction</h2>
${T(["Method","Description"],[["Erasing","Logical deletion: recoverable"],["Clearing / overwriting","Rewriting: protects against common tools"],["Purging","Makes recovery impossible even in a lab (degaussing, cryptographic erasure)"],["Destruction","Shredding, incineration, disintegration: the most secure"]])}
<p>Data <b>remanence</b> is the trace left after erasure. For SSDs, degaussing is ineffective: prefer cryptographic erasure or physical destruction.</p>
<h2>Protection</h2><p>DLP, DRM, CASB, encryption, masking, tokenization, anonymization and pseudonymization, baselines (scoping and tailoring: select, then adapt the controls of a baseline).</p>
`},

{ day:"Domain 3", title:"Security architecture and engineering", html: D(3,"Security Architecture and Engineering",13) + `
<h2>Secure design principles</h2>
<p>Least privilege, defense in depth, secure defaults, fail secure, segregation of duties, keep it simple, Zero Trust, privacy by design, trust but verify, shared responsibility.</p>
<h2>Security models</h2>
${T(["Model","Goal","Key rules"],[
["Bell-LaPadula","Confidentiality","No read up, no write down"],
["Biba","Integrity","No read down, no write up"],
["Clark-Wilson","Commercial integrity","Well-formed transactions, segregation of duties, subject / program / object triple"],
["Brewer-Nash (Chinese Wall)","Conflicts of interest","Access depends on what the user has already accessed"],
["Graham-Denning / HRU","Rights management","Secure creation and deletion of subjects, objects and rights"]])}
<div class="box tip"><h4>Memory aid</h4><p>Bell-LaPadula protects secrets: do not read higher, do not leak lower. Biba is the reverse: do not get contaminated by lower, do not contaminate higher.</p></div>
<h2>System evaluation</h2><p><b>Common Criteria</b> (ISO/IEC 15408): protection profile (needs), security target (what the product claims), assurance levels EAL1 to EAL7. <b>Certification</b> = technical evaluation; <b>accreditation</b> (authorization) = formal acceptance of risk by management.</p>
<h2>Architecture vulnerabilities</h2>
<p>Client, server, databases (aggregation, inference), cloud, virtualization (VM escape), containers, serverless, IoT, ICS/SCADA, embedded systems, edge computing, distributed systems, covert channels, race conditions, maintenance hooks.</p>
<h2>Cryptography</h2>
${T(["Family","Examples","Use"],[["Symmetric","AES, ChaCha20; legacy DES, 3DES","Bulk data"],["Asymmetric","RSA, ECC, Diffie-Hellman","Key exchange, signatures"],["Hashing","SHA-2, SHA-3","Integrity"],["Post-quantum","ML-KEM, ML-DSA (NIST 2024)","Resisting future quantum computers"]])}
<p>Number of keys: symmetric n(n−1)/2; asymmetric 2n. Key management: generation, distribution, storage (HSM), rotation, revocation, destruction. PKI: CA, RA, CRL, OCSP. Attacks: brute force, known or chosen plaintext, side channels, birthday attack, replay.</p>
<h2>Site and facility security</h2>
<p>CPTED (crime prevention through environmental design), perimeters, mantraps, lighting, access control, intrusion detection, fire suppression (fire classes, inert gases, pre-action sprinklers), power (UPS, generator), HVAC. Human safety always comes first.</p>
`},

{ day:"Domain 4", title:"Communication and network security", html: D(4,"Communication and Network Security",13) + `
<h2>OSI and TCP/IP models</h2>
${T(["OSI layer","Examples","Devices"],[["7 Application","HTTP, DNS, SMTP","Application firewall, WAF, proxy"],["6 Presentation","Encoding, encryption (TLS in part)",""],["5 Session","RPC, NetBIOS",""],["4 Transport","TCP, UDP","Stateful firewall"],["3 Network","IP, ICMP, IPsec","Router"],["2 Data link","Ethernet, ARP, 802.1X","Switch"],["1 Physical","Cables, radio waves","Hub, repeater"]])}
<h2>Secure protocols</h2>
<p>TLS 1.3, IPsec (AH, ESP, transport and tunnel modes, IKE), SSH, SFTP, DNSSEC, HTTPS, S/MIME, SNMPv3, LDAPS, 802.1X / EAP, WPA3.</p>
<h2>Network architecture</h2>
<ul><li>Physical and logical (VLAN) segmentation, micro-segmentation, DMZ.</li><li>SDN, SD-WAN, SASE, Zero Trust (ZTNA).</li><li>Wireless networks: WPA3, guest isolation, site survey.</li><li>Cellular, satellite and IoT networks.</li><li>Content delivery networks (CDN), cloud and hybrid.</li><li>Voice over IP: SIP, SRTP.</li></ul>
<h2>Devices</h2>
<p>Firewalls (packet filtering, stateful, application proxy, NGFW), IDS / IPS (signatures, anomalies), NAC, proxies, load balancers, email gateways, bastion hosts.</p>
<h2>Network attacks</h2>
<p>Distributed denial of service, spoofing (IP, ARP, DNS), man in the middle, session hijacking, eavesdropping, Wi-Fi attacks (evil twin, deauthentication), VLAN hopping. Defenses: encryption, mutual authentication, filtering, segmentation, monitoring.</p>
`},

{ day:"Domain 5", title:"Identity and access management", html: D(5,"Identity and Access Management",13) + `
<h2>Steps of access</h2>
<p>Identification, authentication, authorization, accountability. Accountability requires unique identifiers.</p>
<h2>Authentication</h2>
${T(["Type","Examples"],[["Type 1: something you know","Password, PIN, passphrase"],["Type 2: something you have","Smart card, token, phone, FIDO2 key"],["Type 3: something you are","Fingerprint, face, iris"]])}
<p>Biometrics: type I error = false rejection (FRR); type II error = false acceptance (FAR, the more serious); CER / EER = crossover point. Passkeys (FIDO2) resist phishing.</p>
<h2>Access control models</h2>
${T(["Model","Principle"],[["DAC","The owner decides"],["MAC","Security labels enforced by the system"],["RBAC","Rights based on role"],["ABAC","Rights based on combined attributes (subject, object, environment)"],["Rule-based","Global rules (firewall, time of day)"],["Risk-based","Adapts requirements to context (unusual location → MFA)"]])}
<h2>Federation and SSO</h2>
<p>SAML (identity provider and service provider), OAuth 2.0 (delegated authorization), OpenID Connect (authentication on top of OAuth), Kerberos (KDC, TGT, service tickets, synchronized clocks), LDAP, RADIUS, TACACS+, Diameter.</p>
<h2>Identity life cycle</h2>
<p>Provisioning, periodic access reviews, managing job changes (avoiding privilege creep), prompt deprovisioning, service and machine accounts, privileged access management (PAM, just-in-time, vaults).</p>
<h2>Access attacks</h2>
<p>Credential phishing, credential stuffing, password spraying, pass-the-hash, Kerberos attacks, MFA fatigue (push bombing). Defenses: phishing-resistant MFA, anomaly detection, least privilege.</p>
`},

{ day:"Domain 6", title:"Security assessment and testing", html: D(6,"Security Assessment and Testing",12) + `
<h2>Assessment strategies</h2>
<p>Internal, external, third party. The choice depends on the objective (compliance, assurance, improvement), the risks and regulatory requirements.</p>
<h2>Types of tests</h2>
${T(["Test","Purpose"],[
["Vulnerability assessment","Identify known weaknesses (credentialed or not)"],
["Penetration test","Authorized exploitation to measure real impact; signed rules of engagement"],
["Log review","Detect anomalies, verify accountability"],
["Synthetic transactions","Simulate transactions to monitor availability and performance"],
["Code review and SAST","Static analysis of source code"],
["DAST and fuzzing","Dynamic testing, random or malformed inputs"],
["Misuse case testing","Check behavior against malicious use"],
["Test coverage","Proportion of code or requirements tested"],
["Interface testing","APIs, user interfaces, physical interfaces"],
["Breach and attack simulation","Red / blue / purple team exercise"]])}
<p>Tester knowledge: unknown environment (black box), partially known, known (white box).</p>
<h2>Collecting security process data</h2>
<p>Performance and risk indicators, account management data, management reviews, backup verification data (restore tests), training and awareness, tested continuity plans.</p>
<h2>Audits</h2>
<p>Internal, external, third-party audits. <b>SOC 1</b> reports (financial controls), <b>SOC 2</b> (security, availability, processing integrity, confidentiality, privacy; type I at a point in time, type II over a period), <b>SOC 3</b> (summarized public version). Standards: ISAE 3402, SSAE 18.</p>
<h2>Analyzing and reporting</h2>
<p>Prioritize results by risk, handle exceptions, report to management with recommendations, track remediation. Ethical disclosure of vulnerabilities found in third parties.</p>
`},

{ day:"Domain 7", title:"Security operations", html: D(7,"Security Operations",13) + `
<h2>Investigations</h2>
<p>Evidence collection and handling, chain of custody, order of volatility, bit-by-bit copy with hashing, admissibility (relevance, reliability, legality), best evidence rule. Types of evidence: real, documentary, testimonial, demonstrative.</p>
<h2>Logging and monitoring</h2>
<p>SIEM, SOAR, UEBA, continuous monitoring, threat intelligence, threat hunting, log management (protection, retention, clock synchronization), egress monitoring.</p>
<h2>Operational concepts</h2>
<p>Need to know, least privilege, segregation of duties, job rotation, privileged account management, service level agreements.</p>
<h2>Change, configuration and patch management</h2>
<p>Request, review, approval, testing, deployment, documentation. Baseline configuration, inventory, version control. Patches prioritized by risk and tested.</p>
<h2>Incident management</h2>
<p>Detection, response, mitigation (containment), reporting, recovery, remediation, lessons learned. Preventive measures: firewalls, IDS/IPS, allow lists, antimalware, sandboxing, honeypots, filtering.</p>
<h2>Recovery and continuity</h2>
${T(["Strategy","Recovery time"],[["Mirrored site / active-active","Almost immediate"],["Hot site","Hours"],["Warm site","Days"],["Cold site","Weeks"],["Cloud (disaster recovery as a service)","Varies with the contract"]])}
<p>Full, incremental, differential backups; replication; plan tests: read-through, walkthrough, tabletop, simulation, parallel, full interruption.</p>
<h2>Physical and personnel safety</h2>
<p>Site access control, travel security, crisis management, staff safety in emergencies. Always: human life first.</p>
`},

{ day:"Domain 8", title:"Software development security", html: D(8,"Software Development Security",10) + `
<h2>Development life cycles</h2>
<p>Waterfall, spiral (risk-driven), agile (Scrum, Kanban), DevOps and DevSecOps (security built into and automated in the CI/CD pipeline), rapid application development, prototyping. Maturity models: CMMI, OWASP SAMM, BSIMM.</p>
<h2>Security in the life cycle</h2>
<ol><li>Requirements: security and compliance needs.</li><li>Design: threat modeling, secure architecture.</li><li>Development: secure coding, code reviews, SAST.</li><li>Testing: DAST, fuzzing, penetration tests, acceptance.</li><li>Deployment: secure configuration, code signing.</li><li>Operations and maintenance: patches, monitoring, change management.</li><li>Retirement: secure data disposal.</li></ol>
<h2>Common vulnerabilities</h2>
<p>Injections (SQL, command), XSS, CSRF, buffer overflow, insecure deserialization, broken access control, misconfiguration, vulnerable components, hard-coded secrets, insufficient logging. Reference: OWASP Top 10.</p>
<h2>Secure coding practices</h2>
<p>Validate all input, encode output, parameterized queries, safe error handling (no disclosure), secure session management, least privilege for applications, secrets managed in a vault.</p>
<h2>Acquired software and supply chain</h2>
<p>COTS, open source, SaaS, outsourced development: assess security, require evidence (tests, certifications), track components with an <b>SBOM</b> (software bill of materials), monitor library vulnerabilities (software composition analysis, SCA), source code escrow.</p>
<h2>Databases</h2>
<p>Aggregation (harmless data becomes sensitive when combined), inference (deducing sensitive information), polyinstantiation (several versions depending on clearance level), ACID properties of transactions, views to restrict access.</p>
<h2>AI and generated code</h2>
<p>Code produced by AI assistants must go through the same reviews and tests as human code; watch for secrets, invented dependencies and reproduced flaws.</p>
`}
];

const exam = `
<p class="lead">ISC2's CISSP (Certified Information Systems Security Professional) is the most recognized general security certification. Check the latest information on isc2.org before registering.</p>
<div class="grid">
<div class="card"><span class="stat">100–150</span><span class="t">questions (adaptive English version)</span><span class="d">The exam stops once your level is established</span></div>
<div class="card"><span class="stat">3 h</span><span class="t">maximum duration</span><span class="d">English version in adaptive format (CAT)</span></div>
<div class="card"><span class="stat">700</span><span class="t">out of 1,000 to pass</span><span class="d">Scaled score</span></div>
</div>
<p>In the adaptive format, you cannot go back to a question already submitted. Other languages exist in a longer linear format; check which ones on isc2.org. The exam is taken at a Pearson VUE test center. Aim for at least 75% on this site's mock exams.</p>
<h2>The 8 domains</h2>
<div class="tablewrap"><table><thead><tr><th>Domain</th><th>Weight</th></tr></thead><tbody>
<tr><td>1. Security and Risk Management</td><td class="num">16%</td></tr>
<tr><td>2. Asset Security</td><td class="num">10%</td></tr>
<tr><td>3. Security Architecture and Engineering</td><td class="num">13%</td></tr>
<tr><td>4. Communication and Network Security</td><td class="num">13%</td></tr>
<tr><td>5. Identity and Access Management (IAM)</td><td class="num">13%</td></tr>
<tr><td>6. Security Assessment and Testing</td><td class="num">12%</td></tr>
<tr><td>7. Security Operations</td><td class="num">13%</td></tr>
<tr><td>8. Software Development Security</td><td class="num">10%</td></tr>
</tbody></table></div>
<p>Each domain has a matching module on this site.</p>
<h2>After the exam</h2>
<p>You need <b>5 years of paid professional experience</b> in at least 2 of the 8 domains. A university degree or an ISC2-recognized certification (for example CISA, CISM or Security+) can count for 1 year. Without the experience, you become an <b>Associate of ISC2</b> and have 6 years to gain it. You must then be endorsed by a certified member. Maintenance: 120 CPEs over 3 years and an annual fee.</p>
<h2>Think like a CISSP</h2>
<ol><li>Think as an adviser to management, not as a technician who fixes things.</li><li>Human safety comes before everything else.</li><li>Among several good answers, choose the one that addresses the cause, at the organization level, and follows the processes (policy, risk, approval).</li><li>CISSP likes steps in order: assess before acting, get approval before deploying.</li><li>Read every word: "BEST", "FIRST", "MOST", "LEAST" change the answer.</li></ol>
<h2>10-week study plan</h2>
<div class="tablewrap"><table><thead><tr><th>Week</th><th>Work</th></tr></thead><tbody>
<tr><td>1 and 2</td><td>Domain 1 (the heaviest) and domain 2</td></tr><tr><td>3 and 4</td><td>Domains 3 and 4</td></tr><tr><td>5</td><td>Domain 5</td></tr><tr><td>6</td><td>Domains 6 and 7</td></tr><tr><td>7</td><td>Domain 8</td></tr><tr><td>8 to 10</td><td>Mock exams, official ISC2 guide and questions, reviewing mistakes</td></tr>
</tbody></table></div>
`;

const c = CERTS.find(x => x.id === "cissp");
c.en = { title:"CISSP", intro:"The reference general certification in information security: 8 domains, from risk management to secure development, with the perspective of an adviser to management.", modules, exam };
})();
