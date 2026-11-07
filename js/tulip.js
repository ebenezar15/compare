/* Origins of TULIP: Augustine, Calvin and the link with Gnosticism.
   Adapted from the user's Claude Docs study. Claims are presented as the study's view; historians'
   notes and Calvinist responses are added for fairness. */

TC.tulip = {
  title: "Augustine, Calvin and the Origins of TULIP",
  lede: "This study argues that Calvinism traces back to Augustine — not to Calvin, and not to the New Testament — and that Augustine built it from Pelagian premises and his years in Manichaean Gnosticism.",
  doc: "https://claude.ai/artifact/3XgHcjizjyQGh482QdtPHq",
  calvinQuote: { text: "Augustine is so wholly within me that if I wish to write a confession of my faith, I could do so with all fullness and satisfaction to myself out of his writings.", who: "John Calvin, Concerning the Eternal Predestination of God (1552)" },

  petals: [
    { k: "T", name: "Total depravity", def: "Fallen humans cannot choose God unless he first regenerates them.",
      root: "No free will", rootNote: "The Manichaean denial of free will. In this view T is the root from which U, I and P logically cascade.",
      test: "Scripture repeatedly calls people to choose and holds them responsible: 'Choose this day whom you will serve' (Joshua 24:15); 'whoever calls on the name of the Lord will be saved' (Romans 10:13).",
      reply: "Calvinists cite Romans 3:10-11 ('no one seeks God'), Ephesians 2:1 ('dead in trespasses') and John 6:44." },
    { k: "U", name: "Unconditional election", def: "Before creation God chose some individuals for salvation, not based on anything in them.",
      root: "A chosen 'elect'", rootNote: "The Manichaean elect — a spiritual class saved by nature — which the study says is closer to Calvinist election than to Scripture's.",
      test: "Biblical election is mostly corporate and vocational: Israel chosen to bless the nations (Genesis 12:3), the church chosen 'in him' (Ephesians 1:4).",
      reply: "Calvinists cite Romans 9:11-16, Ephesians 1:4-5 and Acts 13:48 ('as many as were appointed to eternal life believed')." },
    { k: "L", name: "Limited atonement", def: "Christ died to secure salvation only for the elect.",
      root: "Gottschalk → Lombard", rootNote: "Developed by Gottschalk (9th century); later re-worded with Lombard's 'sufficient for all, efficient for the elect'.",
      test: "'He is the propitiation… not for ours only but also for the sins of the whole world' (1 John 2:2); 'one died for all' (2 Corinthians 5:14).",
      reply: "Calvinists cite John 10:15 ('I lay down my life for the sheep') and Ephesians 5:25 ('Christ loved the church and gave himself up for her')." },
    { k: "I", name: "Irresistible grace", def: "Those God regenerates will inevitably come to faith.",
      root: "Fatalism / determinism", rootNote: "Cascades from T and U: if no one can choose, grace must overpower the will of those chosen.",
      test: "Grace can be resisted: 'You always resist the Holy Spirit' (Acts 7:51); 'how often would I have gathered your children… and you were not willing' (Matthew 23:37).",
      reply: "Calvinists say grace does not force but renews the will, so the elect come willingly (Ezekiel 36:26; John 6:37)." },
    { k: "P", name: "Perseverance of the saints", def: "All the elect will persevere in faith to the end.",
      root: "Determinism", rootNote: "Cascades from the eternal decree: whatever God decreed for the elect must happen.",
      test: "Scripture includes real warnings to believers (Hebrews 6:4-6; 10:26-29) alongside assurance (John 10:28).",
      reply: "Calvinists say the warnings are the means by which God keeps his people (Philippians 1:6; 1 Peter 1:5)." }
  ],

  lineage: [
    { y: "373–382", who: "Augustine the Manichaean", what: "Spends about nine years as a Manichaean 'hearer'.", note: "Confessions 4.1 — 'for nine years'.", stream: "gnostic" },
    { y: "c. 390–418", who: "Pelagius", what: "Teaches that humans can obey God by their natural abilities.", note: "The study argues Augustine argued from the same premise about the will, only in reverse.", stream: "pelagian" },
    { y: "396–430", who: "Augustine", what: "Developed the doctrine of predestination.", note: "Historians date his shift on grace to To Simplician (396) or to the Pelagian controversy (412 onward; Ken Wilson's Oxford thesis, published 2018).", stream: "main" },
    { y: "808–867", who: "Gottschalk of Orbais", what: "Developed the idea of limited atonement: Christ's blood only for the elect.", note: "Condemned at the synods of Mainz (848) and Quierzy (849).", stream: "main" },
    { y: "c. 1150", who: "Peter Lombard", what: "'Sufficient for all, efficient for the elect.'", note: "Historians' note: Lombard (Sentences III, d. 20) used the formula to affirm that Christ died for all; later Reformed writers used it to support limited atonement.", stream: "main" },
    { y: "1536–1559", who: "John Calvin", what: "Systematised Augustine's thought (Institutes).", note: "Calvin quotes Augustine more than any other writer.", stream: "main" },
    { y: "c. 1600", who: "Theodore Beza", what: "Calvin's successor sharpens predestination (supralapsarianism).", note: "'Bezan Calvinism' is the system the Remonstrants objected to.", stream: "main" },
    { y: "1610", who: "The Remonstrance", what: "Arminius's followers object to points of Bezan Calvinism.", note: "Arminius had recommended Calvin's commentaries above everything except Scripture.", stream: "arminian" },
    { y: "1618–19", who: "Synod of Dort", what: "The Counter-Remonstrants' Canons of Dort, later summarised as five points.", note: "The five heads of doctrine answer the Remonstrance's five articles.", stream: "main" },
    { y: "1932", who: "Loraine Boettner", what: "TULIP popularised in The Reformed Doctrine of Predestination.", note: "Historians' note: Kenneth Stewart traces the acronym to c. 1905 (Cleland McAfee, reported 1913). The five points themselves are older.", stream: "main" }
  ],

  twoViews: {
    left: { name: "The Pelagian-premise view", who: ["Augustine", "Calvin", "Arminius", "Wesley"], def: "Predestination = God's original, eternal decision to save some and not others (Augustine).", note: "One system with variations: Arminianism is a branch of Calvinism, not its opposite. In this view prevenient grace only seems necessary inside a Calvinistic framework." },
    right: { name: "The scriptural view", def: "Predestination in the New Testament is about the destiny God has prepared for those in Christ — not who gets saved.",
      uses: [["Romans 8:29", "to be conformed to the image of his Son"], ["Ephesians 1:5", "for adoption as sons through Jesus Christ"], ["Ephesians 1:11", "for an inheritance, in him"], ["1 Corinthians 2:7", "God's wisdom, for our glory"], ["Acts 4:28", "the events of the cross"]] }
  },

  ingredients: [
    { n: "Manichaean Gnosticism", d: "No free will, a chosen elect, fatalism and dualism.", c: "#6a4fb3" },
    { n: "Pelagian premises", d: "Starting from a presumption about the human will rather than from Scripture.", c: "#c07a1c" },
    { n: "Allegorical Catholicism", d: "Reading the text through a system, with a pretence of Christianity.", c: "#2d6aa3" }
  ],

  atonement: {
    a: { who: "Gottschalk (9th c.)", say: "Christ's blood was only powerful enough to save the elect." },
    b: { who: "Peter Lombard (12th c.)", say: "Sufficient to save all, but efficient only for the elect." },
    point: "A semantic word game about optics: the same idea, made to sound palatable."
  },
  russell: {
    intro: "A Russell conjugation says the same thing in a way that sounds good or bad.",
    scale: ["He's persistent", "He's stubborn", "He's a pig-headed fool"],
    pair: [{ soft: "God passes over the non-elect", hard: "God chooses the non-elect for hell" }, { soft: "Sufficient for all, efficient for the elect", hard: "Christ's blood cannot save the non-elect" }],
    point: "If God knows everything and chose some, knowing what would happen to the rest, he chose the rest for condemnation too. Rewording it so it sounds less bad does not change the substance.",
    challenge: "Avoid becoming attached to a theological paradigm for its own sake, and test it against Scripture."
  },
  cross: [
    { ref: "Romans 5:9", t: "Justified by his blood", role: "Death" },
    { ref: "Romans 4:25", t: "Raised for our justification", role: "Resurrection" },
    { ref: "Romans 5:10", t: "Saved by his life", role: "Resurrection" }
  ],
  crossNote: "Christ's death is necessary but not sufficient on its own, and not the deciding factor in who is saved. The study argues that no case in the Bible presents Christ dying for someone as what decides whether they are saved — resurrection life and faith are part of the whole.",
  dort: ["Remonstrance (1610): the Arminian Calvinists object to five points of Bezan Calvinism", "Counter-Remonstrance (1611): the Bezan Calvinists answer with five points", "Canons of Dort (1619): summarised as five main points", "TULIP (popularised 1932): Boettner's acronym"],

  links: [
    { k: "Historically", d: "Augustine was a Manichaean for nine years and, in the Pelagian dispute, fell back on Manichaean ideas. Even sympathetic textbooks — Alister McGrath (who calls Augustine's shift a 'maturation') and Tony Lane — discuss the change.", icon: "scroll" },
    { k: "Argumentatively", d: "Before Augustine, Gnostics argued against Christians with the same proof texts and arguments Calvinists use today. The church fathers' replies are in Irenaeus, Tertullian, Clement of Alexandria and Justin Martyr.", icon: "scales" },
    { k: "Practically", d: "Calvinism passes on knowledge (gnosis) about things the text does not say — for example, knowing that a sin was God's 'decretive will'.", icon: "eye" }
  ],
  tenets: [
    { g: "No free will", c: "Total depravity (T) — from which U, I and P cascade" },
    { g: "A chosen 'elect'", c: "Unconditional election" },
    { g: "Fatalism / determinism", c: "God's eternal decree" },
    { g: "Dualism", c: "Black-and-white thinking and tribalism" }
  ],
  augustineLife: [
    { y: 354, t: "Born in Thagaste, North Africa" },
    { y: 373, t: "Joins the Manichaeans as a 'hearer'" },
    { y: 384, t: "Moves to Milan; hears Ambrose preach" },
    { y: 386, t: "Conversion in the garden at Milan" },
    { y: 387, t: "Baptised by Ambrose" },
    { y: 396, t: "To Simplician: first strong statement of predestination" },
    { y: 412, t: "Begins writing against Pelagius" },
    { y: 430, t: "Dies at Hippo" }
  ],
  chameleon: "Manichaeans blended into whatever religion was nearest — they could appear as Buddhists, Hindus or Christians. The study argues Calvinism does the same inside Christianity, which is why evangelism and prayer survive in it: logically unnecessary in the system, but needed for it to look Christian.",
  gnosis: { verse: "1 Thessalonians 4:3", text: "This is the will of God… that you abstain from sexual immorality.", case: "When a well-known Calvinist pastor fell into sexual sin, some explained it as God's 'decretive will'. No scripture says that.", point: "This is gnosis in practice: knowledge from somewhere other than Scripture. Since no passage states the Calvinist distinctives, the study argues, such gnosis is needed for each of them." },
  fallacies: [
    { n: "Genetic fallacy", d: "Dismissing a claim by its supposed origin: 'You're just following Ken Wilson.'" },
    { n: "Guilt by association", d: "Linking an argument to a person without saying what is wrong with it." }
  ],
  fairPlay: [
    { h: "Augustine wrote against the Manichaeans", t: "Calvinists note Augustine's anti-Manichaean works (On Free Choice of the Will, Against Fortunatus) defended the goodness of creation and human responsibility, unlike Manichaean dualism of two natures." },
    { h: "Different 'elect'", t: "The Manichaean elect were saved by their spiritual nature and knowledge; the Reformed elect are sinners saved by grace through faith in Christ." },
    { h: "Scripture, not Mani", t: "Reformed theologians ground their doctrines in Romans 9, Ephesians 1 and John 6, and argue that similarity to a pagan idea does not make a doctrine false." },
    { h: "The genetic fallacy cuts both ways", t: "Tracing a doctrine to Gnosticism is itself an argument from origin. The study answers that its case rests on shared tenets and arguments, not just on history — which is why each tenet must be tested against Scripture." }
  ],
  questions: [
    { q: "What does 'predestination' mean in Augustine's framework, and how does that compare with its use in Romans 8 and Ephesians 1?", hint: "See the word study proorizō: all six New Testament uses concern the destiny prepared for those in Christ." },
    { q: "Why might Arminianism be viewed as a branch of Calvinism rather than its opposite?", hint: "Arminius was a Reformed pastor who recommended Calvin's commentaries; the Remonstrance was an internal Reformed dispute." },
    { q: "How did limited atonement develop from Gottschalk to Peter Lombard? What changed in the wording, and what stayed the same?", hint: "Compare 'only powerful enough for the elect' with 'sufficient for all, efficient for the elect'." },
    { q: "What is a Russell conjugation? Is 'passing over' the non-elect different in substance from choosing them for condemnation?", hint: "Try the tone dial above." },
    { q: "Compare Romans 4:25, 5:9 and 5:10. What roles do Christ's death and resurrection each play in salvation?", hint: "Blood justifies (5:9); he was raised for our justification (4:25); we are saved by his life (5:10)." },
    { q: "Trace the path from the Remonstrance to the Canons of Dort to TULIP.", hint: "1610 → 1611 → 1619 → c. 1905/1932." },
    { q: "Which Manichaean tenets are said to parallel Calvinist distinctives? Evaluate each against Scripture.", hint: "No free will, a chosen elect, fatalism, dualism." },
    { q: "What are the genetic fallacy and guilt by association? Why don't they answer an argument?", hint: "See the Logic & fallacies glossary." },
    { q: "Read Irenaeus, Tertullian or Justin Martyr against the Gnostics. Do the proof texts overlap with modern Calvinist ones?", hint: "Irenaeus, Against Heresies 4.37; Justin, First Apology 43-44." },
    { q: "What is the difference between knowledge drawn from the text of Scripture and gnosis claimed beyond it?", hint: "Compare 1 Thessalonians 4:3 with claims about God's hidden decree." }
  ]
};
