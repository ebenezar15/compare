/* Theology Compass — content data.
   Every doctrine carries: roots, formation history, key texts, outside influences,
   church-father witness, internal tensions, alternative responses, and the
   defenders' rebuttal so both sides are heard. */

window.TC = {};

/* ---------- Alternative lenses ---------- */
TC.lenses = {
  rel: {
    name: "Relational Gospel",
    short: "Relational",
    color: "#2f8f83",
    thesis: "God is love in his very being (Father, Son and Spirit in self-giving communion). Sin is a broken relationship, not chiefly a legal debt, and salvation is God drawing humanity back into the life of the Trinity.",
    proponents: "T. F. Torrance, C. Baxter Kruger, Thomas Jay Oord, Brad Jersak, Greg Boyd, Michael Hardin",
    texts: ["1 John 4:8,16", "John 17:3,21-23", "2 Corinthians 5:18-19", "Luke 15:11-32", "Romans 5:10"]
  },
  vic: {
    name: "Victorious Eschatology",
    short: "Victorious",
    color: "#c07a1c",
    thesis: "Most of the end-time warnings in Matthew 24 and Revelation were fulfilled in the first century, culminating in AD 70. Christ already reigns, and his kingdom grows through history until it fills the earth before his bodily return.",
    proponents: "Harold Eberle & Martin Trench, Kenneth Gentry, Gary DeMar, N. T. Wright (partly), historic postmillennialists such as Jonathan Edwards",
    texts: ["Matthew 24:34", "Daniel 2:35,44", "Matthew 13:31-33", "Psalm 110:1", "1 Corinthians 15:25", "Isaiah 9:7"]
  },
  cv: {
    name: "Christus Victor",
    short: "Christus Victor",
    color: "#b23b3b",
    thesis: "On the cross and in the resurrection Christ defeats sin, death and the devil, freeing captive humanity. The problem the cross solves is bondage, not an angry Father's need to punish.",
    proponents: "Irenaeus, Athanasius, Gregory of Nyssa, Gustaf Aulén (1931), Greg Boyd, Eastern Orthodox liturgy",
    texts: ["Colossians 2:15", "Hebrews 2:14-15", "1 John 3:8", "Genesis 3:15", "1 Corinthians 15:54-57"]
  },
  ur: {
    name: "Universal Reconciliation",
    short: "Reconciliation",
    color: "#6a4fb3",
    thesis: "God's love will finally win every person. Judgment is real, severe and corrective, but it is the purifying fire of love that ends when all bow willingly and God is all in all.",
    proponents: "Clement of Alexandria, Origen, Gregory of Nyssa, Isaac of Nineveh, George MacDonald, Thomas Talbott, Robin Parry, David Bentley Hart, Ilaria Ramelli",
    texts: ["1 Corinthians 15:22,28", "Colossians 1:19-20", "Romans 5:18", "Philippians 2:10-11", "1 Timothy 2:4; 4:10", "Acts 3:21"]
  },
  ci: {
    name: "Conditional Immortality",
    short: "Conditional",
    color: "#5a7a2e",
    thesis: "Humans are not born immortal. Eternal life is God's gift in Christ; the finally impenitent are destroyed (perish) rather than kept alive to be tormented for ever.",
    proponents: "Arnobius (4th c.), Edward Fudge, John Stott (tentatively), Clark Pinnock, John Wenham, Chris Date",
    texts: ["Romans 6:23", "Matthew 10:28", "John 3:16", "2 Thessalonians 1:9", "1 Timothy 6:16"]
  },
  th: {
    name: "Theosis & Participation",
    short: "Theosis",
    color: "#2d6aa3",
    thesis: "Salvation is union with God: by grace humans share in the divine life, growing in love from glory to glory. Healing, not courtroom acquittal, is the central picture.",
    proponents: "Irenaeus, Athanasius, Maximus the Confessor, Gregory Palamas, the Eastern Orthodox tradition; Finnish Luther research (Tuomo Mannermaa)",
    texts: ["2 Peter 1:4", "2 Corinthians 3:18", "John 15:4-5", "Galatians 2:20", "Romans 8:29"]
  },
  npp: {
    name: "New Perspective on Paul",
    short: "New Perspective",
    color: "#8a5a3c",
    thesis: "Second Temple Judaism was a religion of grace (covenantal nomism). Paul's quarrel over 'works of the law' was mainly about the badges (circumcision, food, sabbath) that kept Gentiles out, and justification is God declaring who belongs to his one covenant family.",
    proponents: "E. P. Sanders (1977), James D. G. Dunn (who named it in 1982), N. T. Wright",
    texts: ["Galatians 2:11-16", "Romans 3:29-30", "Ephesians 2:14-16", "Romans 4:16"]
  }
};

/* ---------- Outside influences (philosophical, mythic, legal, cultural) ---------- */
TC.influences = {
  plato:   { name: "Platonism", kind: "Pagan philosophy", era: "c. 380 BC", desc: "Plato's Phaedo argues the soul is naturally immortal and indestructible; his myths (Gorgias, Republic X) describe judgment and punishment of souls in Tartarus. Christians who absorbed this assumed every soul must live for ever somewhere." },
  myth:    { name: "Greek & Roman underworld myth", kind: "Pagan myth", era: "Homer to Virgil", desc: "Hades as the realm of the dead and Tartarus as a pit of torment for the wicked (Homer, Hesiod, Virgil's Aeneid VI). The New Testament uses 'Hades' and once 'tartaroō' (2 Pet 2:4); later art and preaching often read Greek imagery back into them." },
  stoic:   { name: "Stoic fate & providence", kind: "Pagan philosophy", era: "c. 300 BC onward", desc: "Stoics taught an all-ordering providence (pronoia) and fate (heimarmenē): every event is fixed by the divine Logos, so the wise accept suffering as necessary. Early fathers such as Justin and Origen rejected this as fatalism." },
  neoplat: { name: "Neoplatonism", kind: "Pagan philosophy", era: "3rd century", desc: "Plotinus's simple, unmoved, impassible One shaped Augustine and later classical theism. It favoured a God untouched by creatures, which sits awkwardly with the biblical picture of a God who grieves and relents." },
  aristotle:{ name: "Aristotle & Scholasticism", kind: "Pagan philosophy", era: "Recovered 12th–13th c.", desc: "Aristotle's Unmoved Mover and virtue-by-habit ethics entered theology through Aquinas, shaping both classical theism and the idea of sanctification as gradual habituation." },
  roman:   { name: "Roman law", kind: "Legal culture", era: "Republic to Empire", desc: "Latin theology from Tertullian on borrowed legal categories: satisfaction (satisfactio), merit, guilt and debt. The West came to frame salvation chiefly as a courtroom problem." },
  feudal:  { name: "Feudal honour culture", kind: "Medieval culture", era: "10th–12th c.", desc: "Anselm's satisfaction theory (1098) mirrors feudal society: an offence against a lord's honour must be repaid by satisfaction or punishment. The greater the lord, the greater the debt." },
  human:   { name: "Renaissance humanism", kind: "Intellectual movement", era: "14th–16th c.", desc: "'Ad fontes' (back to the sources): Erasmus's Greek New Testament (1516) and the printing press let reformers bypass church tradition and read the text directly." },
  nominal: { name: "Late-medieval nominalism", kind: "Intellectual movement", era: "14th–15th c.", desc: "Ockham and Biel stressed God's absolute will and covenant (pactum). Luther was trained in this school; its voluntarism shaped Reformation views of decree and imputation." },
  counter: { name: "Counter-Reformation polemic", kind: "Ecclesiastical politics", era: "Late 16th c.", desc: "Jesuit scholars answered the Protestant charge that the papacy was Antichrist. Ribera pushed Antichrist into the far future (futurism) and Alcázar into the distant past (preterism)." },
  enlight: { name: "Enlightenment rationalism & individualism", kind: "Intellectual movement", era: "17th–18th c.", desc: "Autonomy, the individual chooser, and certainty by reason. It fed the 'personal decision' model of conversion and a Bible treated as a set of propositional facts." },
  scsr:    { name: "Scottish Common Sense Realism", kind: "Intellectual movement", era: "18th–19th c.", desc: "Thomas Reid's philosophy, dominant at Princeton, held that plain readers can grasp plain facts. It underwrote 'Baconian' Bible reading, inerrancy theory and the 'plain literal sense' of prophecy." },
  reviv:   { name: "American revivalism & market culture", kind: "Cultural", era: "1730s onward", desc: "Mass revival methods (Finney's 'new measures', the anxious bench, the altar call) and a free religious market rewarded instant decisions, entrepreneurial ministries and emotional crisis experiences." },
  apoc:    { name: "Apocalyptic & tour-of-hell literature", kind: "Jewish & early Christian texts", era: "2nd c. BC – 2nd c. AD", desc: "1 Enoch and the Apocalypse of Peter (c. 135 AD) give graphic, sorted punishments for sinners. The Apocalypse of Peter was widely read and shaped later images, including Dante's Inferno." },
  persian: { name: "Persian dualism (contested)", kind: "Pagan religion", era: "6th c. BC onward", desc: "Some scholars argue Zoroastrian ideas of a cosmic battle, final ordeal and resurrection influenced Jewish apocalyptic during and after the exile. The extent of this influence is disputed." }
};

/* ---------- Era bands for the timeline ---------- */
TC.eras = [
  { name: "Apostolic", from: 30, to: 100 },
  { name: "Patristic", from: 100, to: 600 },
  { name: "Medieval", from: 600, to: 1500 },
  { name: "Reformation", from: 1500, to: 1650 },
  { name: "Early modern", from: 1650, to: 1800 },
  { name: "Modern", from: 1800, to: 2026 }
];

/* ---------- The doctrines ---------- */
TC.doctrines = [
{
  id: "evangelical",
  name: "Western Evangelicalism",
  family: "Movement",
  span: [1730, 2026], seeds: 1517,
  summary: "A trans-denominational Protestant movement defined by personal conversion, a high view of the Bible, the centrality of the cross and active mission. Historian David Bebbington's 'quadrilateral' (1989) names its four marks: biblicism, crucicentrism, conversionism and activism.",
  claims: ["Each person must be 'born again' through a personal decision of faith", "The Bible is the final, often inerrant, authority", "Christ's substitutionary death is the heart of the gospel", "Believers must evangelise and live it out"],
  roots: "Evangelicalism grew from three streams: Reformation teaching on grace and Scripture, German Pietism's stress on heartfelt religion (Spener, Francke), and the trans-Atlantic Great Awakening (Edwards, Whitefield, the Wesleys). In 19th-century America revivalism, voluntary societies and a free religious market reshaped it into a populist, decision-centred faith. After the fundamentalist–modernist split (1920s), 'neo-evangelicals' such as Carl Henry and Billy Graham rebuilt a more engaged movement (NAE 1942, Fuller Seminary 1947, Christianity Today 1956).",
  timeline: [
    { y: 1675, t: "Spener's Pia Desideria launches German Pietism" },
    { y: 1738, t: "John Wesley's heart 'strangely warmed' at Aldersgate" },
    { y: 1741, t: "Jonathan Edwards preaches 'Sinners in the Hands of an Angry God'" },
    { y: 1835, t: "Charles Finney's Lectures on Revivals: conversion by the right 'new measures'" },
    { y: 1910, t: "The Fundamentals (1910–15) define a conservative front" },
    { y: 1942, t: "National Association of Evangelicals founded" },
    { y: 1949, t: "Billy Graham's Los Angeles crusade" },
    { y: 1974, t: "Lausanne Covenant joins evangelism and social concern" },
    { y: 1979, t: "Moral Majority fuses evangelicals with partisan politics" },
    { y: 1989, t: "Bebbington's quadrilateral becomes the standard definition" }
  ],
  scriptures: [
    { ref: "John 3:3,7", use: "'You must be born again' — the basis of conversionism" },
    { ref: "Romans 10:9-10", use: "Confess and believe: the model for the 'sinner's prayer'" },
    { ref: "2 Timothy 3:16", use: "All Scripture is God-breathed: biblicism" },
    { ref: "1 Corinthians 2:2", use: "'Christ and him crucified': crucicentrism" },
    { ref: "Matthew 28:19-20", use: "The Great Commission: activism" }
  ],
  influences: ["enlight", "scsr", "reviv"],
  fathers: [
    { name: "No patristic equivalent", date: "—", held: "The movement is modern. Fathers spoke of conversion as a lifelong journey through baptism, catechesis and the church, not a single decision-moment." },
    { name: "Augustine", date: "354–430", held: "His Confessions supplied the template of a dramatic personal conversion (Milan, 386) that evangelical testimony later imitated." }
  ],
  tensions: [
    { title: "Gospel shrunk to 'going to heaven'", text: "Jesus announced the kingdom of God arriving on earth (Mark 1:14-15) and the Bible ends with heaven coming down to a renewed earth (Rev 21:1-3). Much evangelical preaching reduces the gospel to a ticket out of the world after death.", refs: ["Mark 1:14-15", "Revelation 21:1-3", "Matthew 6:10"] },
    { title: "The sinner's prayer is absent from Scripture", text: "No apostle leads anyone in a scripted prayer. Acts records repentance, baptism and receiving the Spirit (Acts 2:38). The single-moment 'decision' owes much to Finney's revival methods.", refs: ["Acts 2:38", "Acts 8:36-38"] },
    { title: "Individualism over the people of God", text: "'Personal Lord and Saviour' is not biblical vocabulary. Salvation in Scripture is the making of a new people, one body, a household (Eph 2:19-22; 1 Pet 2:9-10).", refs: ["Ephesians 2:19-22", "1 Peter 2:9-10"] },
    { title: "Political capture", text: "Jesus refused political power (John 18:36; Matt 4:8-10). The fusion of evangelical identity with nationalism and party politics in the US contradicts the kingdom 'not of this world'.", refs: ["John 18:36", "Matthew 4:8-10"] },
    { title: "Biblicism without agreement", text: "A movement built on 'the Bible alone' has no agreed reading on baptism, gifts, women in ministry, end times or atonement, so the authority claimed in theory is hard to locate in practice.", refs: ["2 Peter 3:16"] }
  ],
  responses: [
    { lens: "rel", s: 3, arg: "The gospel is the news that the Father, Son and Spirit have already embraced humanity in Jesus (2 Cor 5:19: 'God was in Christ reconciling the world to himself, not counting their sins against them'). Faith is waking up to a relationship God has already established, not a transaction we complete to make God favourable.", refs: ["2 Corinthians 5:19", "Colossians 1:21-22", "John 17:3"] },
    { lens: "vic", s: 2, arg: "The kingdom has come and is growing like yeast through the whole lump (Matt 13:33). Christians are agents of renewal on earth, not passengers waiting to be evacuated. This rebuilds the activism of early evangelicals (abolition, reform) on hope instead of fear.", refs: ["Matthew 13:31-33", "Romans 8:19-21"] },
    { lens: "npp", s: 2, arg: "Paul's gospel is 'Jesus is Lord' (Rom 1:3-4; 10:9), the announcement of a royal enthronement, with a multi-ethnic family as its fruit. It is not first a method of individual guilt relief (N. T. Wright; Scot McKnight's The King Jesus Gospel).", refs: ["Romans 1:3-4", "1 Corinthians 15:1-5"] },
    { lens: "th", s: 1, arg: "Conversion is the start of lifelong union with God, sacramental and communal, rather than a one-off decision.", refs: ["2 Peter 1:3-4"] }
  ],
  rebuttal: "Evangelicals answer that personal conversion is explicitly biblical (John 3; Acts 3:19), that the cross is central because Paul makes it central (1 Cor 15:3), and that the movement's global growth, especially in Africa, Asia and Latin America, shows it is not merely a Western cultural product. Many evangelicals (Lausanne, John Stott) have affirmed social action and the kingdom alongside personal salvation.",
  logic: {
    trad: ["All have sinned and face God's judgment", "Christ died in your place", "Make a personal decision: pray to receive Christ", "Assurance of heaven after death", "Win others the same way"],
    alt: ["God created humanity for communion", "In Christ, God has joined himself to humanity and defeated death", "Jesus is enthroned as Lord: repent and trust him", "Join his people, receive the Spirit, be transformed", "Join the renewal of all things on earth"],
    altLens: "rel", pressure: 2
  }
},
{
  id: "psa",
  name: "Penal Substitution",
  family: "Atonement",
  span: [1536, 2026], seeds: 1098,
  summary: "The teaching that on the cross Christ bore the legal penalty for human sin in our place, satisfying God's retributive justice so that God can justly forgive. It is the dominant atonement model in Reformed and evangelical churches.",
  claims: ["God's justice demands that sin be punished", "Christ was punished by God in our place", "God's wrath was poured out on the Son", "The penalty is paid, so believers are acquitted"],
  roots: "The early church used many pictures of the cross: ransom, victory over the devil, sacrifice and healing. Substitutionary phrases appear (Eusebius, Athanasius), but the fully penal, legal model came later. Anselm's Cur Deus Homo (1098) reframed the cross as satisfaction of God's offended honour, using feudal categories. The Reformers, especially Calvin (Institutes II.16, 1536–59), shifted the focus from honour to the law: Christ endures the punishment, even the torments of hell, that we deserved. Later Reformed theologians (Turretin, Charles Hodge) systematised it, and in the 20th century J. I. Packer, John Stott and Pierced for Our Transgressions (2007) defended it against critics like Steve Chalke, who in 2003 called crude versions 'cosmic child abuse'.",
  timeline: [
    { y: 180, t: "Irenaeus: recapitulation and victory — no penal theory" },
    { y: 320, t: "Eusebius (Demonstration of the Gospel 10.1) uses substitution language from Isaiah 53" },
    { y: 1098, t: "Anselm's Cur Deus Homo: satisfaction for God's offended honour" },
    { y: 1120, t: "Abelard counters with the 'moral influence' view" },
    { y: 1536, t: "Calvin's Institutes: Christ bears the penalty and the wrath of God" },
    { y: 1625, t: "Grotius proposes the 'governmental' alternative" },
    { y: 1931, t: "Aulén's Christus Victor challenges the 'Latin' theory" },
    { y: 1973, t: "J. I. Packer, 'What Did the Cross Achieve?'" },
    { y: 2003, t: "Steve Chalke's 'cosmic child abuse' controversy" },
    { y: 2007, t: "Pierced for Our Transgressions defends the doctrine" }
  ],
  scriptures: [
    { ref: "Isaiah 53:4-6,10", use: "'Pierced for our transgressions… the LORD has laid on him the iniquity of us all'" },
    { ref: "2 Corinthians 5:21", use: "God made him who knew no sin to be sin for us" },
    { ref: "Galatians 3:13", use: "Christ became a curse for us" },
    { ref: "Romans 3:25-26", use: "Christ as hilastērion so God is just and justifier" },
    { ref: "1 Peter 2:24; 3:18", use: "He bore our sins in his body; the righteous for the unrighteous" }
  ],
  influences: ["roman", "feudal", "nominal"],
  fathers: [
    { name: "Irenaeus", date: "c. 130–202", held: "Recapitulation: Christ relives and heals the human story and defeats the devil. No idea of the Father punishing the Son." },
    { name: "Athanasius", date: "c. 296–373", held: "Christ pays the 'debt' of death on behalf of all and destroys corruption. Substitution, but aimed at death and corruption, not divine wrath." },
    { name: "Eusebius", date: "c. 260–339", held: "Reads Isaiah 53 as Christ receiving the chastisement due to us — the nearest early parallel to penal language." },
    { name: "Gregory of Nazianzus", date: "329–390", held: "Explicitly rejects the idea that the ransom was paid to the Father: the Father did not demand or need the blood of his Son (Oration 45.22)." },
    { name: "Augustine", date: "354–430", held: "Mixed: Christ as sacrifice and as defeating the devil; some substitutionary statements, no developed penal system." }
  ],
  tensions: [
    { title: "Paid debts are not forgiven debts", text: "If a debt is fully paid, it is not forgiven. Jesus describes God forgiving debts freely (Matt 18:27; Luke 7:42) and tells us to forgive without demanding payment. PSA makes God the one being who cannot forgive without full payment.", refs: ["Matthew 18:27", "Luke 7:42", "Matthew 6:12"] },
    { title: "A divided Trinity", text: "PSA often pictures the Father pouring wrath on the Son and turning away. But 'God was in Christ reconciling the world to himself' (2 Cor 5:19) and the Father is always with the Son (John 16:32). Psalm 22, quoted from the cross, goes on to say God 'has not hidden his face' (Ps 22:24).", refs: ["2 Corinthians 5:19", "John 16:32", "Psalm 22:24"] },
    { title: "Israel's sacrifices were not punishments", text: "In Leviticus the animal is not tortured or punished; its blood cleanses and gives life. A poor person could offer flour for a sin offering (Lev 5:11-13), which cannot be a penal substitute. The prophets say God did not want sacrifice for its own sake (Ps 40:6; Hos 6:6).", refs: ["Leviticus 5:11-13", "Leviticus 17:11", "Psalm 40:6", "Hosea 6:6"] },
    { title: "'We considered him punished by God'", text: "Isaiah 53:4 reports what the onlookers wrongly thought: 'we esteemed him stricken, smitten by God'. Verse 5 corrects them: he was wounded for our sins, by us and for us.", refs: ["Isaiah 53:4-5"] },
    { title: "Hilastērion means mercy seat", text: "In Romans 3:25 the word is used in the Greek Old Testament for the mercy seat (Ex 25:17-22; Heb 9:5), the place of meeting and cleansing, not the place of punishment. 'Propitiation' (appeasing anger) is disputed; many translate 'expiation' or 'place of atonement'.", refs: ["Romans 3:25", "Exodus 25:22", "Hebrews 9:5"] },
    { title: "Retribution versus the character Jesus reveals", text: "Jesus tells us to love enemies and not repay evil 'so that you may be children of your Father' (Matt 5:44-48). A theory in which God can only forgive through retribution makes God less merciful than he asks us to be.", refs: ["Matthew 5:44-48", "Romans 12:17-21"] }
  ],
  responses: [
    { lens: "cv", s: 3, arg: "The cross is God's victory, not God's punishment. Christ disarmed the powers (Col 2:15) and through death destroyed the one who held the power of death (Heb 2:14). The Father is not the problem the cross solves; sin, death and the devil are. This was the dominant picture for the first thousand years (Aulén), though historians such as Meyer argue the fathers held several models together.", refs: ["Colossians 2:15", "Hebrews 2:14-15", "1 John 3:8"] },
    { lens: "rel", s: 3, arg: "God does not need to be changed; we do. 'While we were enemies we were reconciled to God' (Rom 5:10) — reconciliation always moves from God to us. The cross is God absorbing our violence and answering it with forgiveness ('Father, forgive them', Luke 23:34), revealing that God has always been like Jesus.", refs: ["Romans 5:8-10", "Luke 23:34", "John 14:9"] },
    { lens: "th", s: 2, arg: "Christ became what we are so that we might become what he is (Irenaeus, Athanasius). The cross heals a sick humanity from inside; sin is a disease, not mainly a debt.", refs: ["Hebrews 2:17", "2 Peter 1:4"] },
    { lens: "ur", s: 1, arg: "If Christ really 'bore the sins of the whole world' (1 John 2:2), consistency suggests the whole world will finally be reconciled (Col 1:20). Otherwise sins are punished twice: once in Christ and again in hell.", refs: ["1 John 2:2", "Colossians 1:20"] }
  ],
  rebuttal: "Defenders reply that Isaiah 53:10 says 'it was the will of the LORD to crush him', that Galatians 3:13 and 2 Corinthians 5:21 are explicitly substitutionary, and that Romans 3:25-26 shows the cross demonstrates God's justice. John Stott argued it is not the Father punishing a third party but God substituting himself: the Judge takes the sentence. They also note the fathers did use substitution language (Meyer, Tyndale Bulletin 2020), and that Christus Victor needs PSA to explain how the devil's accusations lose their power (Col 2:14).",
  logic: {
    trad: ["God is holy and just", "Justice requires sin to be punished", "Humans cannot pay the infinite penalty", "The Father punishes the Son in our place", "Wrath satisfied → God can forgive"],
    alt: ["God is love and has always been for us", "Sin enslaves us to death and dark powers", "God enters our condition in Christ", "Christ absorbs our violence, forgives, and defeats death", "Resurrection frees captives → we are reconciled"],
    altLens: "cv", pressure: 3
  }
},
{
  id: "holiness",
  name: "Holiness Movement",
  family: "Sanctification",
  span: [1836, 2026], seeds: 1766,
  summary: "A 19th-century movement, largely Methodist in origin, teaching a second work of grace after conversion — entire sanctification — in which the heart is cleansed from inbred sin and filled with perfect love.",
  claims: ["After conversion, a second definite crisis experience is available", "Inbred sin (the sinful nature) can be cleansed in this life", "Believers can live in 'perfect love' without wilful sin", "Holiness is shown by separated living"],
  roots: "John Wesley's teaching on Christian perfection (A Plain Account of Christian Perfection, 1766) drew on Eastern sources such as Macarius and Ephrem. In the US, Phoebe Palmer's Tuesday Meetings (from 1836) and her 'altar theology' taught a 'shorter way': lay all on the altar, believe, and you are sanctified now. Oberlin perfectionism (Finney, Mahan), camp meetings (National Camp Meeting Association, 1867), and the British Keswick 'Higher Life' conventions (from 1875) spread variants. The movement produced the Church of the Nazarene (1908), the Salvation Army and the Wesleyan Church, and its 'second blessing' pattern became the seedbed of Pentecostalism (Parham, 1901; Azusa Street, 1906).",
  timeline: [
    { y: 390, t: "Pseudo-Macarius's Homilies on the Spirit-filled, perfected heart" },
    { y: 1766, t: "Wesley, A Plain Account of Christian Perfection" },
    { y: 1836, t: "Phoebe Palmer begins the Tuesday Meetings for the Promotion of Holiness" },
    { y: 1843, t: "Palmer, The Way of Holiness: 'altar theology'" },
    { y: 1867, t: "National Camp Meeting Association for holiness" },
    { y: 1875, t: "First Keswick Convention (Higher Life)" },
    { y: 1906, t: "Azusa Street: holiness 'second blessing' becomes Spirit baptism" },
    { y: 1908, t: "Church of the Nazarene formed" }
  ],
  scriptures: [
    { ref: "Matthew 5:48", use: "'Be perfect as your heavenly Father is perfect'" },
    { ref: "1 Thessalonians 5:23", use: "'May God sanctify you entirely'" },
    { ref: "Hebrews 12:14", use: "'Holiness, without which no one will see the Lord'" },
    { ref: "1 Peter 1:15-16", use: "'Be holy, for I am holy'" },
    { ref: "1 John 3:9", use: "Those born of God do not keep on sinning" }
  ],
  influences: ["stoic", "reviv", "enlight"],
  fathers: [
    { name: "Clement of Alexandria", date: "c. 150–215", held: "The 'true gnostic' Christian advances to a passionless (apatheia) perfection — a Stoic-coloured ideal." },
    { name: "Gregory of Nyssa", date: "c. 335–395", held: "Perfection is never-ending growth (epektasis, Phil 3:13): 'the one limit of perfection is that it has no limit'. Progress, not a finished state." },
    { name: "Pseudo-Macarius", date: "late 4th c.", held: "Grace and sin can coexist in the heart; the Spirit progressively purifies it. Wesley read and loved these homilies." },
    { name: "Augustine", date: "354–430", held: "Against Pelagius: no one in this life lives without sin (citing 1 John 1:8). The opposite pole to perfectionism." }
  ],
  tensions: [
    { title: "'If we say we have no sin, we deceive ourselves'", text: "The same letter that says the born-again do not keep sinning also says claiming sinlessness is self-deception (1 John 1:8-10). A crisis-moment of entire cleansing fits awkwardly with John's both/and.", refs: ["1 John 1:8-10", "1 John 3:9"] },
    { title: "No second-blessing pattern in the epistles", text: "Paul tells believers they have already been sanctified (1 Cor 6:11) and urges growth, but never instructs them to seek a second crisis experience.", refs: ["1 Corinthians 6:11", "Hebrews 10:14"] },
    { title: "Holiness defined by rules", text: "In practice many holiness churches measured holiness by dress codes, bans on jewellery, cinema and cosmetics. Jesus located defilement in the heart, not externals (Mark 7:15-23), and Paul warns against 'do not touch, do not taste' (Col 2:20-23).", refs: ["Mark 7:15-23", "Colossians 2:20-23"] },
    { title: "Scrupulosity and burnout", text: "Members who did not feel or maintain the experience often concluded they had lost it, producing cycles of re-consecration and anxiety. Perfect love 'casts out fear' (1 John 4:18), but the system frequently produced fear.", refs: ["1 John 4:18"] }
  ],
  responses: [
    { lens: "rel", s: 3, arg: "Holiness is not a sinless state but a relationship: being set apart by and for the God who is love. Jesus sums up the law as love of God and neighbour (Matt 22:37-40); 'perfect' in Matthew 5:48 means complete in love, as the context of loving enemies shows.", refs: ["Matthew 5:43-48", "Matthew 22:37-40", "1 Thessalonians 3:12-13"] },
    { lens: "th", s: 2, arg: "Wesley was right that grace really transforms, but the East frames it as endless participation in God's life — from glory to glory (2 Cor 3:18) — not a finished second stage.", refs: ["2 Corinthians 3:18", "Philippians 3:12-14"] },
    { lens: "cv", s: 1, arg: "The power of sin was broken at the cross (Rom 6:6-7). Believers fight from victory, not toward it; holiness flows from Christ's triumph rather than from a crisis we must reach.", refs: ["Romans 6:6-11"] }
  ],
  rebuttal: "Holiness teachers answer that Scripture commands holiness as a real, attainable goal (1 Thess 4:3; 5:23-24: 'he who calls you is faithful; he will do it'), that Wesley defined perfection as perfect love, not sinless infallibility, and that the experience is testified to by millions. Pessimism about sin, they argue, sells grace short.",
  logic: {
    trad: ["Conversion forgives actual sins", "Inbred sin (the old nature) remains", "Consecrate all and believe", "Second crisis: heart cleansed, filled with perfect love", "Maintain it by separated living"],
    alt: ["We are already joined to Christ", "Old self crucified with him", "Spirit pours love into our hearts", "Grow in love for ever, glory to glory", "Holiness = love made visible"],
    altLens: "rel", pressure: 1
  }
},
{
  id: "reformation",
  name: "Reformation Theology",
  family: "Salvation",
  span: [1517, 2026], seeds: 400,
  summary: "The 16th-century recovery of salvation by grace through faith, summed up in the five solas: Scripture alone, grace alone, faith alone, Christ alone, to God's glory alone. Its centre is forensic justification: God declares the sinner righteous by imputing Christ's righteousness.",
  claims: ["Justification is a legal declaration, not a process of becoming just", "Christ's righteousness is imputed (credited) to the believer", "Faith alone receives it; works are fruit, not the ground", "Scripture judges church tradition"],
  roots: "Luther's struggle to find a gracious God within the late-medieval penance system, read through Augustine and Romans, produced his breakthrough on 'the righteousness of God' as a gift. Melanchthon sharpened it into a forensic declaration (Augsburg Confession, 1530; Apology). Zwingli in Zurich and Calvin in Geneva gave it Reformed shape, adding stress on God's sovereign election. Renaissance humanism ('ad fontes', Erasmus's Greek New Testament of 1516) and the printing press made the movement possible; German princes gave it political protection. Rome replied at the Council of Trent (1545–63), and Reformed orthodoxy was fixed at Dort (1618–19) and Westminster (1646).",
  timeline: [
    { y: 418, t: "Council of Carthage backs Augustine against Pelagius" },
    { y: 1516, t: "Erasmus publishes the Greek New Testament" },
    { y: 1517, t: "Luther's 95 Theses at Wittenberg" },
    { y: 1521, t: "Diet of Worms: 'Here I stand'" },
    { y: 1525, t: "Anabaptists baptise adults in Zurich — later persecuted by Protestants and Catholics" },
    { y: 1530, t: "Augsburg Confession" },
    { y: 1536, t: "Calvin's Institutes, first edition" },
    { y: 1547, t: "Trent's decree on justification" },
    { y: 1618, t: "Synod of Dort defines the Calvinist 'five points'" },
    { y: 1646, t: "Westminster Confession" },
    { y: 1977, t: "E. P. Sanders's Paul and Palestinian Judaism reopens the debate" },
    { y: 1999, t: "Lutheran–Catholic Joint Declaration on Justification" }
  ],
  scriptures: [
    { ref: "Romans 1:17", use: "'The righteous shall live by faith' — Luther's breakthrough" },
    { ref: "Romans 3:28", use: "Justified by faith apart from works of the law (Luther added 'alone')" },
    { ref: "Romans 4:5-6", use: "Righteousness counted to the ungodly" },
    { ref: "Galatians 2:16", use: "Not by works of the law but through faith in Christ" },
    { ref: "Ephesians 2:8-9", use: "By grace through faith, not of works" }
  ],
  influences: ["human", "nominal", "roman"],
  fathers: [
    { name: "Augustine", date: "354–430", held: "Grace alone, against Pelagius — the Reformers' favourite father. But for Augustine justification means being made righteous by grace, not only declared righteous." },
    { name: "Ambrosiaster", date: "4th c.", held: "Comments that the ungodly are justified 'by faith alone' (sola fide) — one of a few early uses of the phrase." },
    { name: "John Chrysostom", date: "c. 347–407", held: "Salvation by grace and faith, but with real human cooperation (synergy) and transformation; no imputation scheme." },
    { name: "Irenaeus", date: "c. 130–202", held: "Salvation as recapitulation and incorruption — participation in God — rather than a forensic verdict." }
  ],
  tensions: [
    { title: "'Not by faith alone' — the only time the phrase appears", text: "The only biblical verse with the words 'faith alone' says 'a person is justified by works and not by faith alone' (James 2:24). Luther called James 'an epistle of straw' and placed it at the back of his Bible.", refs: ["James 2:24", "James 2:14-26"] },
    { title: "Judgment according to works", text: "Paul himself says God 'will repay each person according to their deeds' and that 'the doers of the law will be justified' (Rom 2:6-13; 2 Cor 5:10). A purely forensic system struggles to integrate these.", refs: ["Romans 2:6-13", "2 Corinthians 5:10", "Matthew 25:31-46"] },
    { title: "Imputation is hard to find", text: "Scripture says faith is counted as righteousness (Rom 4:3,5) but never explicitly that Christ's own law-keeping is credited to us. Many Reformed scholars now ground imputation in union with Christ instead.", refs: ["Romans 4:3-5", "Philippians 3:9"] },
    { title: "Works of the law = boundary markers?", text: "In Galatians the argument begins with Peter refusing to eat with Gentiles (Gal 2:11-14). 'Works of the law' there are circumcision and food laws that divide Jew from Gentile, not good deeds in general.", refs: ["Galatians 2:11-16", "Romans 3:29-30"] },
    { title: "Unity lost", text: "Jesus prayed that his people would be one so the world might believe (John 17:21). The Reformation principle produced thousands of competing bodies and wars of religion, including the drowning of Anabaptists by Protestants.", refs: ["John 17:21", "Ephesians 4:3-6"] }
  ],
  responses: [
    { lens: "npp", s: 3, arg: "Second Temple Judaism was not a religion of earning salvation (Sanders). Paul's opponents insisted Gentiles become Jews to belong. Justification is God's verdict that all who trust Christ, Jew and Gentile, are in the one family (Rom 3:29-30; Gal 3:28-29).", refs: ["Galatians 3:28-29", "Romans 3:29-30", "Ephesians 2:14-16"] },
    { lens: "th", s: 3, arg: "Salvation is union with Christ, not a transfer of credit. 'It is no longer I who live, but Christ lives in me' (Gal 2:20). Finnish Luther scholars (Mannermaa) argue Luther himself taught that Christ is present in faith — closer to theosis than later Lutheran forensic theology.", refs: ["Galatians 2:20", "2 Peter 1:4", "Romans 6:3-5"] },
    { lens: "rel", s: 2, arg: "'Righteousness' in the Hebrew Bible is covenant faithfulness — being right in relationship. God's righteousness (Rom 1:17) is God's faithfulness to put the world right, not a moral substance moved between ledgers.", refs: ["Romans 3:21-26", "Psalm 98:2-3"] }
  ],
  rebuttal: "Reformed and Lutheran scholars respond that James addresses dead, professed faith, not the ground of justification; that Romans 4:4-5 explicitly contrasts working and believing; that Sanders oversimplified Judaism (D. A. Carson et al., Justification and Variegated Nomism, 2001); and that the Reformation restored assurance and grace to ordinary believers. Joint Lutheran–Catholic agreement (1999) suggests the differences can be bridged without abandoning the core.",
  logic: {
    trad: ["God's law demands perfect obedience", "All fail; guilt is imputed from Adam", "Christ's obedience and death are credited to us", "Faith alone receives the verdict 'righteous'", "Good works follow as fruit"],
    alt: ["God promised Abraham a worldwide family", "Israel's law could not create it", "In the Messiah, God keeps covenant faithfulness", "All who trust him are declared family", "The Spirit makes them actually righteous"],
    altLens: "npp", pressure: 0
  }
},
{
  id: "sola",
  name: "Sola Scriptura",
  family: "Authority",
  span: [1521, 2026], seeds: 367,
  summary: "The Reformation principle that Scripture is the only infallible rule of faith and practice, above all church tradition and councils. In modern evangelicalism it is often joined to the doctrine of inerrancy.",
  claims: ["Scripture alone is the final, infallible authority", "Scripture is clear (perspicuous) on what is needed for salvation", "Scripture interprets Scripture", "Tradition and councils are subordinate and fallible"],
  roots: "The fathers revered Scripture as supreme but read it within the church's 'rule of faith' and living tradition. At Worms (1521) Luther refused to recant unless 'convinced by Scripture and plain reason', and the principle hardened in the Formula of Concord (1577) and Westminster Confession 1.6. Reformers distinguished it from 'solo scriptura' (no tradition at all) — creeds still mattered. Renaissance humanism and printing made it practical. In the 19th century, Scottish Common Sense Realism at Princeton (Hodge, Warfield) produced a theory of inerrancy, codified in the Chicago Statement (1978).",
  timeline: [
    { y: 180, t: "Irenaeus appeals to Scripture and the apostolic 'rule of faith' and succession" },
    { y: 350, t: "Cyril of Jerusalem: 'do not believe even me unless I prove it from Scripture'" },
    { y: 367, t: "Athanasius's Festal Letter 39 lists the 27-book New Testament" },
    { y: 375, t: "Basil appeals to unwritten apostolic traditions (On the Holy Spirit 27)" },
    { y: 434, t: "Vincent of Lérins: what has been believed 'everywhere, always, by all'" },
    { y: 1521, t: "Luther at Worms: 'my conscience is captive to the Word of God'" },
    { y: 1546, t: "Trent: Scripture and unwritten traditions to be received with equal reverence" },
    { y: 1646, t: "Westminster Confession 1.6: the whole counsel of God is in Scripture" },
    { y: 1881, t: "Hodge & Warfield, 'Inspiration' — inerrancy of original autographs" },
    { y: 1978, t: "Chicago Statement on Biblical Inerrancy" },
    { y: 2011, t: "Christian Smith, The Bible Made Impossible: 'pervasive interpretive pluralism'" }
  ],
  scriptures: [
    { ref: "2 Timothy 3:16-17", use: "All Scripture is God-breathed… that the servant of God may be fully equipped" },
    { ref: "Acts 17:11", use: "The Bereans examined the Scriptures daily" },
    { ref: "Isaiah 8:20", use: "'To the law and to the testimony!'" },
    { ref: "Mark 7:8-13", use: "Jesus condemns human traditions that nullify God's word" },
    { ref: "Matthew 4:4", use: "'It is written' — Jesus answers the devil from Scripture" }
  ],
  influences: ["human", "enlight", "scsr"],
  fathers: [
    { name: "Irenaeus", date: "c. 130–202", held: "Scripture plus the 'rule of faith' kept by bishops in apostolic succession; heretics also quote Scripture." },
    { name: "Athanasius", date: "c. 296–373", held: "'These are the fountains of salvation… let no one add to them' — strong Scripture supremacy, but within the church's faith." },
    { name: "Basil the Great", date: "330–379", held: "Some doctrines and practices come from unwritten apostolic tradition, which carries the same force for piety." },
    { name: "Cyril of Jerusalem", date: "c. 313–386", held: "Every doctrine must be shown from the divine Scriptures (Catechetical Lectures 4.17)." },
    { name: "Vincent of Lérins", date: "d. c. 445", held: "Scripture is sufficient, but because people interpret it many ways, the church's consensus is needed to read it rightly." }
  ],
  tensions: [
    { title: "The canon is not in the canon", text: "No biblical book lists which books belong in the Bible. The New Testament canon was recognised by the church over centuries (Athanasius 367; councils of Hippo 393 and Carthage 397). Sola Scriptura relies on a tradition to define 'Scripture'.", refs: ["2 Peter 3:15-16"] },
    { title: "2 Timothy 3:16 says 'useful', not 'alone'", text: "Paul refers to the Jewish Scriptures Timothy knew from childhood, and calls them profitable, not exclusive. The same letter tells Timothy to pass on what he heard orally (2 Tim 2:2), and 2 Thessalonians 2:15 says to hold traditions 'by word of mouth or by letter'.", refs: ["2 Timothy 3:15-17", "2 Timothy 2:2", "2 Thessalonians 2:15"] },
    { title: "Jesus is the Word; the Bible witnesses to him", text: "'You search the Scriptures because you think in them you have eternal life… yet you refuse to come to me' (John 5:39-40). Hebrews 1:1-3 says God spoke partially in the prophets and fully in the Son. Making the book the final authority can displace the Person.", refs: ["John 5:39-40", "Hebrews 1:1-3", "John 1:1,14"] },
    { title: "One rule, many readings", text: "If Scripture is clear and sufficient, why do its most devoted readers disagree on baptism, communion, election, gifts and end times? Each tradition in practice uses its own confession or teachers as an interpretive authority.", refs: ["2 Peter 1:20", "Acts 8:30-31"] },
    { title: "Acts 15 shows a council deciding", text: "The first big doctrinal dispute was settled by apostles and elders in council, guided by the Spirit and experience ('it seemed good to the Holy Spirit and to us', Acts 15:28), not by a proof-text alone.", refs: ["Acts 15:6-29"] }
  ],
  responses: [
    { lens: "rel", s: 3, arg: "Authority lives in a Person. Scripture is the inspired, trustworthy witness that leads us to Jesus, read through his life and teaching ('You have heard it said… but I say', Matt 5). The Spirit leads the community into truth (John 16:13). This is a Christ-centred, not flat, reading of the Bible.", refs: ["John 5:39-40", "John 16:13", "Matthew 5:21-48", "Luke 24:27"] },
    { lens: "th", s: 2, arg: "Scripture lives inside the worshipping church: read in liturgy, interpreted by the fathers and creeds. The Bible came from the church's life as much as the church from the Bible.", refs: ["2 Thessalonians 2:15", "1 Timothy 3:15"] },
    { lens: "ur", s: 1, arg: "Universalist readers argue that inerrantist literalism forces 'eternal' (aiōnios) and 'hell' to mean what later Latin and English traditions made them mean, rather than what Greek-speaking fathers heard.", refs: ["Matthew 25:46"] }
  ],
  rebuttal: "Protestants reply that sola Scriptura never meant 'no tradition' but that tradition is accountable to Scripture (Keith Mathison, The Shape of Sola Scriptura). The church recognised, not created, the canon. Interpretive disagreement exists in Rome and Orthodoxy too; an infallible interpreter only moves the problem. Jesus repeatedly appealed to 'It is written' and judged tradition by Scripture (Mark 7).",
  logic: {
    trad: ["God has spoken infallibly in Scripture", "Scripture is clear and sufficient", "All tradition is tested by Scripture", "Read the plain sense", "Final authority = the text"],
    alt: ["God has spoken fully in Jesus", "Scripture is the inspired witness to him", "Read it through Christ's life, death and resurrection", "Spirit and community guide interpretation", "Final authority = the living Word"],
    altLens: "rel", pressure: 2
  }
},
{
  id: "arminian",
  name: "Arminian-Wesleyan Theology",
  family: "Salvation",
  span: [1610, 2026], seeds: 150,
  summary: "The view that God's grace enables all people to respond to the gospel and that election is conditional on foreseen faith. Grace can be resisted and, many hold, salvation can be forfeited. Wesley added optimism about grace transforming the heart.",
  claims: ["Prevenient grace restores freedom to every person", "Election is conditional on foreseen faith", "Christ died for all, not only the elect", "Grace can be resisted; believers can fall away"],
  roots: "Before Augustine, nearly all church fathers taught that humans freely respond to God (Justin, Irenaeus, Origen, Chrysostom). Augustine's later anti-Pelagian writings shifted the West towards predestination. Jacobus Arminius (1560–1609), a Dutch Reformed professor, questioned Beza's high Calvinism; his followers' Remonstrance (1610) produced five counter-points, which the Synod of Dort rejected (1618–19). In England, the Wesleys (from the 1730s) wove Arminianism with Anglican and Eastern spirituality into Methodism, which became the largest Protestant family in 19th-century America. Arminius also engaged the Jesuit Luis de Molina's 'middle knowledge'.",
  timeline: [
    { y: 155, t: "Justin Martyr defends human free will against Stoic fate" },
    { y: 400, t: "Chrysostom: God draws but does not compel" },
    { y: 529, t: "Council of Orange: grace needed to begin faith, rejects predestination to evil" },
    { y: 1588, t: "Molina's Concordia proposes middle knowledge" },
    { y: 1603, t: "Arminius becomes professor at Leiden" },
    { y: 1610, t: "The Remonstrance: five articles" },
    { y: 1619, t: "Synod of Dort condemns the Remonstrants" },
    { y: 1740, t: "Wesley's sermon 'Free Grace' breaks with Whitefield" },
    { y: 1784, t: "Methodist Episcopal Church founded in America" }
  ],
  scriptures: [
    { ref: "1 Timothy 2:4", use: "God desires all people to be saved" },
    { ref: "2 Peter 3:9", use: "Not willing that any should perish" },
    { ref: "John 3:16", use: "Whoever believes — the offer is universal" },
    { ref: "Titus 2:11", use: "The grace of God has appeared, bringing salvation to all" },
    { ref: "Hebrews 6:4-6", use: "Warning against falling away" }
  ],
  influences: ["human", "enlight"],
  fathers: [
    { name: "Justin Martyr", date: "c. 100–165", held: "Humans are free and responsible; if all were fated there would be no praise or blame (First Apology 43)." },
    { name: "Irenaeus", date: "c. 130–202", held: "God made humans free, 'with power of their own' (Against Heresies 4.37)." },
    { name: "Origen", date: "c. 185–254", held: "Free will is central (On First Principles III.1) — which also led him to hope all would finally choose God." },
    { name: "John Cassian", date: "c. 360–435", held: "Grace and will cooperate; sometimes the will starts toward God. Later labelled 'semi-Pelagian'." },
    { name: "Augustine (late)", date: "354–430", held: "Grace is irresistible for the elect; the opposite pole." }
  ],
  tensions: [
    { title: "God foreknows and still creates the damned", text: "If God foresees that a person will reject him and suffer eternal torment, and creates them anyway, the problem Arminians raise against Calvinism largely returns. Free will softens but does not solve it while ECT is retained.", refs: ["Ezekiel 18:23,32", "1 Timothy 2:4"] },
    { title: "God wills all — but fails?", text: "Arminians take 1 Timothy 2:4 at face value: God wants all saved. Yet they conclude most will be lost for ever, so God's deepest desire is permanently defeated. Isaiah 46:10 says 'my purpose will stand'.", refs: ["1 Timothy 2:4", "Isaiah 46:10", "Ephesians 1:11"] },
    { title: "Insecurity", text: "If salvation can be lost, believers can live in fear about whether they have fallen. Jesus says no one can snatch his sheep from his hand (John 10:28-29).", refs: ["John 10:28-29", "Romans 8:38-39"] },
    { title: "Prevenient grace is inferred, not stated", text: "Arminians infer universal enabling grace from John 1:9 and 12:32, but the term and mechanism are theological constructs.", refs: ["John 1:9", "John 12:32"] }
  ],
  responses: [
    { lens: "ur", s: 3, arg: "Thomas Talbott's trilemma: (1) God wills all to be saved (Arminian); (2) God's will cannot finally be defeated (Calvinist); (3) some are lost for ever. Scripture affirms the first two, so the third must go. God's love is patient beyond death: 'love never fails' (1 Cor 13:8), and every knee will bow and every tongue confess (Phil 2:10-11).", refs: ["1 Timothy 2:4", "Ephesians 1:11", "Philippians 2:10-11", "1 Corinthians 13:8"] },
    { lens: "rel", s: 2, arg: "Open and relational theology extends Arminian freedom consistently: if love is uncontrolling (Oord), then God's future with creatures is genuinely open, and God's commitment never stops.", refs: ["Jeremiah 18:7-10", "Genesis 6:6"] },
    { lens: "cv", s: 1, arg: "Arminian-Wesleyan theology still largely relies on penal substitution; Christus Victor fits its stress on grace and freedom better (Wesley himself used much victory and healing language).", refs: ["1 John 3:8"] }
  ],
  rebuttal: "Arminians answer that real love requires real freedom, including freedom to refuse (Matt 23:37: 'you were not willing'). God's 'will' in 1 Timothy 2:4 is his desire, not his decree, and the persistent warnings of Hebrews show apostasy is a real danger. Wesley's grace-optimism offers assurance through the Spirit's witness (Rom 8:16).",
  logic: {
    trad: ["All are fallen and unable", "Prevenient grace frees every will", "God elects those he foresees will believe", "Each person accepts or resists", "Many resist → eternally lost"],
    alt: ["God wills all to be saved", "God's love never gives up", "Freedom is healed, not overruled", "Judgment corrects and purifies", "Finally all freely bow"],
    altLens: "ur", pressure: 4
  }
},
{
  id: "progressive",
  name: "Progressive Sanctification",
  family: "Sanctification",
  span: [1646, 2026], seeds: 420,
  summary: "The Reformed teaching that while justification is instant and complete, sanctification is a gradual, lifelong cooperation with the Spirit in which the believer dies to sin and grows in holiness but never reaches sinless perfection in this life.",
  claims: ["Justification is once-for-all; sanctification is a process", "Indwelling sin remains until death", "The believer mortifies sin by the Spirit through means of grace", "Perfection comes only at glorification"],
  roots: "Augustine taught that concupiscence remains in the baptised and that grace heals gradually. The Reformers separated justification (declared) from sanctification (made holy), with Calvin calling them a 'double grace' inseparably joined in union with Christ. Puritans (John Owen, The Mortification of Sin, 1656) developed a detailed spirituality of fighting indwelling sin. Westminster Confession 13 and the Shorter Catechism (Q.35) defined it. B. B. Warfield's Perfectionism (1918) attacked Keswick and holiness teaching. Recent debates: Lutheran Gerhard Forde ('sanctification is the art of getting used to justification') and the 'hyper-grace' controversies.",
  timeline: [
    { y: 180, t: "Irenaeus: humanity created immature, to grow into God's likeness" },
    { y: 380, t: "Gregory of Nyssa: endless progress (epektasis)" },
    { y: 420, t: "Augustine: concupiscence remains after baptism" },
    { y: 1270, t: "Aquinas: infused virtues and habits grow with grace" },
    { y: 1559, t: "Calvin's 'double grace': justification and sanctification" },
    { y: 1646, t: "Westminster Confession ch. 13 'Of Sanctification'" },
    { y: 1656, t: "John Owen, The Mortification of Sin" },
    { y: 1918, t: "Warfield, Perfectionism, against Keswick" },
    { y: 1988, t: "Forde, in Christian Spirituality: Five Views of Sanctification" }
  ],
  scriptures: [
    { ref: "Philippians 3:12-14", use: "'Not that I have already attained… I press on'" },
    { ref: "2 Corinthians 3:18", use: "Being transformed from one degree of glory to another" },
    { ref: "Romans 7:14-25", use: "The struggle with indwelling sin (read as Paul's Christian experience)" },
    { ref: "Philippians 2:12-13", use: "Work out your salvation… for God works in you" },
    { ref: "Romans 8:13", use: "By the Spirit put to death the deeds of the body" }
  ],
  influences: ["aristotle", "stoic"],
  fathers: [
    { name: "Irenaeus", date: "c. 130–202", held: "Humanity created as infants who grow toward maturity — growth is built into creation itself." },
    { name: "Gregory of Nyssa", date: "c. 335–395", held: "The soul stretches forward endlessly into God; growth never ends, even in eternity." },
    { name: "Augustine", date: "354–430", held: "Healing grace works gradually; sin's desire remains though its guilt is removed." },
    { name: "John Cassian", date: "c. 360–435", held: "Monastic ascetic progress through stages of purification toward purity of heart." }
  ],
  tensions: [
    { title: "Past-tense sanctification", text: "Scripture often speaks of sanctification as already done: 'you were washed, you were sanctified, you were justified' (1 Cor 6:11); 'by one offering he has perfected for all time those who are being sanctified' (Heb 10:14). A purely progressive model underplays this.", refs: ["1 Corinthians 6:11", "Hebrews 10:10,14", "Acts 26:18"] },
    { title: "New creation, or 'miserable sinner'?", text: "'If anyone is in Christ, new creation' (2 Cor 5:17). Paul addresses believers as 'saints', not sinners. Constant focus on remaining sin can produce the 'sin-consciousness' Hebrews says the cross removes (Heb 10:2).", refs: ["2 Corinthians 5:17", "Hebrews 10:2", "Romans 6:11"] },
    { title: "Romans 7 in context", text: "Romans 7:14 says 'sold as a slave to sin', but Romans 6:18 and 8:2 say believers have been set free from sin. Many scholars since the fathers read Romans 7 as life under the law without the Spirit, not normal Christian experience.", refs: ["Romans 6:18", "Romans 7:14", "Romans 8:2"] },
    { title: "Performance anxiety", text: "When growth is measured by one's own sin-management, believers drift back to the law as a ladder. Paul asks: 'Having begun by the Spirit, are you now being perfected by the flesh?' (Gal 3:3).", refs: ["Galatians 3:3", "Colossians 2:6"] }
  ],
  responses: [
    { lens: "rel", s: 2, arg: "Growth happens by beholding, not straining: 'we all, with unveiled face, beholding the glory of the Lord, are being transformed' (2 Cor 3:18). Transformation flows from knowing we are loved and joined to Christ (identity), not from sin-management.", refs: ["2 Corinthians 3:18", "1 John 3:1-3", "John 15:4-5"] },
    { lens: "th", s: 2, arg: "The East agrees growth is lifelong but frames it as deification — becoming by grace what God is by nature — rather than mainly the fight with remaining corruption.", refs: ["2 Peter 1:4-8"] },
    { lens: "cv", s: 2, arg: "Romans 6: the old self was crucified with Christ, so sin's dominion is broken. Believers reckon themselves dead to sin (Rom 6:11) — enforcing a victory already won.", refs: ["Romans 6:6-14", "Colossians 3:1-3"] }
  ],
  rebuttal: "Reformed teachers agree sanctification has a definitive, once-for-all side (John Murray's 'definitive sanctification') and a progressive side; Hebrews 10:14 itself says 'being sanctified'. They argue honest experience and texts like Philippians 3:12 and 1 John 1:8 show perfection is future, and that 'identity-only' teaching can slide into antinomianism.",
  logic: {
    trad: ["Justified instantly by faith", "Indwelling sin remains", "Mortify sin through means of grace", "Slow, uneven growth", "Perfect only at death or return"],
    alt: ["Joined to Christ: new creation", "Already sanctified and loved", "Behold his glory, abide in him", "Love grows from glory to glory", "Endless growth into God"],
    altLens: "rel", pressure: 1
  }
},
{
  id: "sovereignty",
  name: "God's Sovereignty in Suffering",
  family: "Providence",
  span: [1559, 2026], seeds: 410,
  summary: "Meticulous providence: God ordains or actively wills every event, including suffering, sickness, disasters and evil, for his good purposes. 'Everything happens for a reason.' It is strongest in Reformed theology (Westminster: God ordains 'whatsoever comes to pass') and popular evangelical piety.",
  claims: ["Nothing happens outside God's decree", "Suffering is sent or designed by God for a purpose", "God is never the morally guilty author of sin, though he ordains it", "Believers should accept suffering as God's will"],
  roots: "Early Christians fiercely opposed the Stoic and astrological fatalism of their culture (Justin, Origen, Gregory of Nyssa). Augustine's later works moved toward a God whose will is never thwarted, combining biblical texts with Neoplatonic ideas of an unchanging, impassible God. Calvin (Institutes I.16–18) taught that 'not one drop of rain falls without God's sure command', insisting this is not Stoic fate but personal providence. The Westminster Confession (3.1, 5) formalised it. In recent decades John Piper and the 'Young, Restless, Reformed' movement popularised it ('God is most glorified…'), while open and relational theologians (Boyd, Oord) and warfare theologians pushed back.",
  timeline: [
    { y: 155, t: "Justin Martyr rejects Stoic fate" },
    { y: 230, t: "Origen, On First Principles: providence respects freedom" },
    { y: 426, t: "Augustine, On Grace and Free Choice — strong predestination" },
    { y: 524, t: "Boethius, Consolation of Philosophy: providence and fortune" },
    { y: 1559, t: "Calvin's final Institutes, I.16–18 on providence" },
    { y: 1646, t: "Westminster 3.1: God ordains whatsoever comes to pass" },
    { y: 1755, t: "Lisbon earthquake triggers a crisis in providence theology" },
    { y: 1997, t: "Greg Boyd, God at War: a warfare worldview" },
    { y: 2015, t: "Thomas Jay Oord, The Uncontrolling Love of God" }
  ],
  scriptures: [
    { ref: "Genesis 50:20", use: "'You meant evil… God meant it for good'" },
    { ref: "Romans 8:28", use: "All things work together for good" },
    { ref: "Isaiah 45:7", use: "'I form light and create darkness, I make peace and create calamity'" },
    { ref: "Lamentations 3:37-38", use: "From the mouth of the Most High come both bad and good" },
    { ref: "Ephesians 1:11", use: "He works all things after the counsel of his will" },
    { ref: "Job 1:21", use: "'The LORD gave, the LORD has taken away'" }
  ],
  influences: ["stoic", "neoplat", "nominal"],
  fathers: [
    { name: "Justin Martyr", date: "c. 100–165", held: "Rejects fate: if everything is fixed, there is no virtue or vice (First Apology 43–44)." },
    { name: "Irenaeus", date: "c. 130–202", held: "God permits evil within a world of free creatures, allowing growth (Against Heresies 4.37–39)." },
    { name: "Origen", date: "c. 185–254", held: "God's foreknowledge does not cause events; creatures are free. Wrote against astrological determinism." },
    { name: "Gregory of Nyssa", date: "c. 335–395", held: "Evil is non-being, a turning from good; God is not its cause." },
    { name: "Augustine (late)", date: "354–430", held: "God's will is always done; he uses even evil wills. Pivot toward meticulous providence." }
  ],
  tensions: [
    { title: "Jesus heals; he never says God sent the illness", text: "Jesus healed 'all who were oppressed by the devil' (Acts 10:38). He rebuked fevers (Luke 4:39) and storms (Mark 4:39) — you do not rebuke what your Father sent. He called a crippled woman one 'whom Satan bound' (Luke 13:16).", refs: ["Acts 10:38", "Luke 4:39", "Mark 4:39", "Luke 13:16"] },
    { title: "The tower of Siloam", text: "Jesus explicitly denies that those killed by the falling tower were singled out for a reason (Luke 13:1-5). Disaster is not a coded divine message about the victims.", refs: ["Luke 13:1-5", "John 9:1-3"] },
    { title: "God tempts no one", text: "'God cannot be tempted by evil, and he himself tempts no one… every good and perfect gift is from above' (Jas 1:13,17). 'God is light and in him is no darkness at all' (1 John 1:5). Yet meticulous providence makes God the ultimate decider of every sin.", refs: ["James 1:13-17", "1 John 1:5"] },
    { title: "Job's narrator names the cause", text: "The book of Job reveals what Job did not know: the satan inflicted the losses (Job 1:12; 2:7). Job's 'the LORD has taken away' is an honest but partial perspective that God later reframes.", refs: ["Job 1:12", "Job 2:7", "Job 42:7"] },
    { title: "Prayer and lament lose their point", text: "If every event is decreed, Jesus' instruction to pray 'your will be done on earth' (Matt 6:10) implies God's will is not yet always done. The lament psalms protest, rather than accept, suffering.", refs: ["Matthew 6:10", "Psalm 13:1-2", "Psalm 44:23-26"] },
    { title: "Reading Genesis 50:20 and Isaiah 45:7", text: "Genesis 50:20 shows God redeeming human evil after the fact, not authoring it. Isaiah 45:7's 'calamity' (Hebrew ra') refers to the judgment of nations in context (Cyrus), not every personal tragedy.", refs: ["Genesis 50:20", "Isaiah 45:1-7"] }
  ],
  responses: [
    { lens: "rel", s: 3, arg: "God's power is the power of uncontrolling love (Oord): love by nature does not coerce. God is not the author of tragedy but the first to suffer with us and the tireless worker to bring good out of it (Rom 8:28 says God works in all things for good, not that all things are good). 'God is love' defines how God's sovereignty operates.", refs: ["1 John 4:8", "Romans 8:28", "1 Corinthians 13:4-5"] },
    { lens: "cv", s: 3, arg: "Scripture is a war story. Real spiritual enemies cause real harm (Eph 6:12; 1 Pet 5:8), and Jesus came 'to destroy the works of the devil' (1 John 3:8). The cross is God's decisive victory, but the mop-up continues (Boyd's warfare worldview).", refs: ["1 John 3:8", "Ephesians 6:12", "Hebrews 2:14"] },
    { lens: "ur", s: 1, arg: "Universalists add that God's sovereignty is real but expressed in the end: every tear wiped away, every loss redeemed, nothing and no one finally lost (Rev 21:4-5).", refs: ["Revelation 21:4-5", "Colossians 1:20"] },
    { lens: "vic", s: 1, arg: "Christ reigns now and is putting enemies under his feet (1 Cor 15:25). Suffering is resisted as part of an advancing kingdom, not accepted as fate.", refs: ["1 Corinthians 15:25-26"] }
  ],
  rebuttal: "Reformed theologians reply that Scripture plainly attributes calamity to God (Amos 3:6; Isa 45:7; Lam 3:38), that the cross itself was 'predestined' while carried out by wicked men (Acts 2:23; 4:27-28), and that a God who does not control evil cannot guarantee its defeat. Compatibilism, they argue, holds both divine ordination and human responsibility, and offers comfort that suffering is never meaningless.",
  logic: {
    trad: ["God ordains everything", "Suffering occurs", "Therefore God willed this suffering", "For a hidden good purpose", "Accept it as his will"],
    alt: ["God is love and gives creatures real freedom", "Sin, enemies and a broken creation cause harm", "God opposes evil and suffers with us", "God works in all things to redeem", "Resist evil, lament, and trust his victory"],
    altLens: "cv", pressure: 2
  }
},
{
  id: "hell",
  name: "Traditional Hell (Eternal Conscious Torment)",
  family: "Last things",
  span: [400, 2026], seeds: 200,
  summary: "The teaching that those who die without saving faith will suffer conscious, unending punishment in body and soul with no possibility of repentance or release. It became the majority Western view from Augustine onward.",
  claims: ["Every soul is immortal and will exist for ever", "Destiny is fixed at death", "The lost suffer conscious punishment without end", "This is required by God's infinite holiness and justice"],
  roots: "Hebrew Scripture mainly speaks of Sheol, the shadowy grave of all the dead. In the intertestamental period, Jewish apocalyptic (1 Enoch) developed places of punishment. The New Testament uses Gehenna (the Valley of Hinnom outside Jerusalem), Hades, and once Tartarus. Early Christian writers held a range of views: eternal punishment (Tertullian, Hippolytus), destruction (perhaps Irenaeus, Arnobius) and final restoration (Clement, Origen, Gregory of Nyssa). Augustine (City of God XXI) argued for eternal torment against the 'merciful-hearted' who denied it, and his view became dominant in the Latin West. Medieval imagination (the Apocalypse of Peter, Dante's Inferno, 1320) fixed the picture. Translators then rendered Sheol, Hades, Tartarus and Gehenna alike as 'hell' (KJV, 1611).",
  timeline: [
    { y: 135, t: "Apocalypse of Peter: graphic tour of punishments" },
    { y: 197, t: "Tertullian (On the Spectacles 30) delights in the future torments of persecutors" },
    { y: 230, t: "Origen, On First Principles: punishment is remedial; final restoration" },
    { y: 380, t: "Gregory of Nyssa teaches the restoration of all (apokatastasis)" },
    { y: 421, t: "Augustine, Enchiridion 112 & City of God XXI against the 'merciful'" },
    { y: 553, t: "Anathemas against Origenism linked to Constantinople II (authenticity of their conciliar status debated)" },
    { y: 1320, t: "Dante's Inferno" },
    { y: 1611, t: "KJV translates Sheol, Hades, Gehenna and Tartarus all as 'hell'" },
    { y: 1741, t: "Edwards, 'Sinners in the Hands of an Angry God'" },
    { y: 1982, t: "Edward Fudge, The Fire That Consumes (conditional immortality)" },
    { y: 1988, t: "John Stott tentatively endorses annihilationism" },
    { y: 2011, t: "Rob Bell, Love Wins, sparks a popular debate" },
    { y: 2019, t: "David Bentley Hart, That All Shall Be Saved" }
  ],
  scriptures: [
    { ref: "Matthew 25:46", use: "'Eternal punishment… eternal life' — the key parallel" },
    { ref: "Mark 9:43-48", use: "Unquenchable fire, the worm that does not die" },
    { ref: "Revelation 14:10-11; 20:10", use: "Smoke of torment rises for ever and ever" },
    { ref: "Luke 16:19-31", use: "The rich man in torment in Hades" },
    { ref: "2 Thessalonians 1:9", use: "'Eternal destruction, away from the presence of the Lord'" },
    { ref: "Daniel 12:2", use: "Some to everlasting life, some to everlasting contempt" }
  ],
  influences: ["plato", "myth", "apoc", "roman", "persian"],
  fathers: [
    { name: "Ignatius & Justin", date: "early 2nd c.", held: "Speak of 'unquenchable' and eternal fire for the wicked." },
    { name: "Irenaeus", date: "c. 130–202", held: "Eternal punishment language, but also suggests the soul's continuance depends on God's gift — cited by conditionalists." },
    { name: "Tertullian", date: "c. 155–220", held: "Firm eternal torment, grounded partly in his belief in the soul's natural immortality — a Platonic idea he adopted." },
    { name: "Clement of Alexandria", date: "c. 150–215", held: "God's punishments are corrective and saving, like a teacher's." },
    { name: "Origen", date: "c. 185–254", held: "Fire purifies; all rational beings will be restored, perhaps over many ages." },
    { name: "Gregory of Nyssa", date: "c. 335–395", held: "Evil will be wholly removed; all will be restored to God. Never condemned, and honoured as 'Father of Fathers' at Nicaea II (787)." },
    { name: "Augustine", date: "354–430", held: "Defends unending torment and admits 'very many' (plurimi) Christians in his day doubted it (Enchiridion 112)." },
    { name: "Isaac of Nineveh", date: "7th c.", held: "Hell is the scourge of love; God's love will not ultimately fail. A saint of the Syriac and Orthodox churches." }
  ],
  tensions: [
    { title: "Aiōnios: 'of the age', not necessarily endless", text: "The Greek aiōnios comes from aiōn (age). It describes what belongs to the coming age; its duration depends on what it modifies. In Jude 7, Sodom suffers 'eternal fire' — a fire that is no longer burning. The same aiōnios in Romans 16:25 describes times that have ended.", refs: ["Matthew 25:46", "Jude 7", "Romans 16:25-26"] },
    { title: "Kolasis is corrective", text: "Matthew 25:46 uses kolasis, in Greek usage often corrective chastisement (originally pruning), rather than timōria (retributive vengeance). Aristotle (Rhetoric 1.10) distinguishes the two.", refs: ["Matthew 25:46"] },
    { title: "Gehenna is a real valley", text: "Gehenna is the Valley of Hinnom, where Israel sacrificed children by fire — something God says 'never entered my mind' (Jer 7:31; 19:5). Jesus' warnings about Gehenna echo Jeremiah's prophecy of Jerusalem's destruction, fulfilled in AD 70.", refs: ["Jeremiah 7:31-32", "Jeremiah 19:5-6", "Matthew 23:33-36"] },
    { title: "Four words, one English word", text: "Sheol (grave), Hades (realm of the dead), Tartarus (prison of fallen angels) and Gehenna (the valley) are distinct. Merging them as 'hell' imported a single Greco-Latin concept. In Revelation 20:14 Hades itself is thrown into the lake of fire — it ends.", refs: ["Psalm 16:10", "Acts 2:27", "2 Peter 2:4", "Revelation 20:14"] },
    { title: "Infinite punishment for finite sin", text: "Unending torment for sins committed in a finite life breaks the biblical principle of proportion (an eye for an eye, Ex 21:24; Luke 12:47-48 speaks of few or many stripes).", refs: ["Exodus 21:23-25", "Luke 12:47-48"] },
    { title: "God all in all — except hell?", text: "Paul expects God to be 'all in all' (1 Cor 15:28), all things reconciled (Col 1:20), and every knee to bow and tongue confess to God's glory (Phil 2:10-11; the word for 'confess' is joyful praise). An eternal realm of rebellious torment means evil is never removed.", refs: ["1 Corinthians 15:22-28", "Colossians 1:19-20", "Philippians 2:10-11"] },
    { title: "Immortality is a gift", text: "Scripture says God 'alone has immortality' (1 Tim 6:16) and that immortality is given in Christ (2 Tim 1:10; Rom 2:7). The natural immortality of every soul is a Platonic premise (Phaedo).", refs: ["1 Timothy 6:16", "2 Timothy 1:10", "Romans 2:7"] }
  ],
  responses: [
    { lens: "ur", s: 3, arg: "God's punishment is the purifying fire of love (Heb 12:29; Mal 3:2-3; 1 Cor 3:13-15). God 'does not reject for ever… though he causes grief, he will have compassion' (Lam 3:31-33). The gates of the New Jerusalem are never shut (Rev 21:25), and the nations walk in. Christ will draw all people to himself (John 12:32).", refs: ["Lamentations 3:31-33", "1 Corinthians 3:13-15", "Revelation 21:25", "John 12:32", "Romans 11:32"] },
    { lens: "ci", s: 3, arg: "The Bible's constant contrast is life versus death and destruction: 'the wages of sin is death, but the gift of God is eternal life' (Rom 6:23); the wicked 'perish' (John 3:16); God destroys body and soul in Gehenna (Matt 10:28). 'Eternal punishment' is a punishment with eternal results — like 'eternal redemption' (Heb 9:12) — not eternal punishing.", refs: ["Romans 6:23", "Matthew 10:28", "Hebrews 9:12", "Malachi 4:1-3"] },
    { lens: "rel", s: 2, arg: "A God who tortures for ever those he could save is not the Father of Luke 15 who runs to the returning son. Hell is real as the self-chosen agony of resisting love, but love never stops calling (Isaac of Nineveh, George MacDonald).", refs: ["Luke 15:20", "1 Corinthians 13:7-8"] },
    { lens: "vic", s: 2, arg: "Most Gehenna warnings were fulfilled in AD 70 when Jerusalem burned and the bodies filled the Hinnom valley (Josephus). They are historical judgments on 'this generation', not a timeless map of the afterlife.", refs: ["Matthew 23:33-36", "Luke 21:20-24"] },
    { lens: "cv", s: 1, arg: "Christ holds 'the keys of death and Hades' (Rev 1:18). The Orthodox icon of the Harrowing of Hell shows Christ breaking its gates and raising Adam and Eve — hell is the defeated prison, not God's eternal torture chamber.", refs: ["Revelation 1:18", "1 Peter 3:18-20; 4:6"] }
  ],
  rebuttal: "Traditionalists respond that Matthew 25:46 sets 'eternal punishment' beside 'eternal life' with the same adjective, so if one ends, both do (Augustine's argument). Revelation 14:11 and 20:10 use the strongest Greek idiom for endlessness ('to the ages of the ages'). Jesus spoke of hell more than anyone else in Scripture. Sin against an infinitely holy God is infinitely serious, and C. S. Lewis argued the doors of hell are locked from the inside: people keep choosing self over God. Universalism, they add, was condemned in the anathemas of 543/553.",
  logic: {
    trad: ["Every soul is immortal", "Sin against an infinite God deserves infinite punishment", "Destiny fixed at death", "The lost suffer consciously for ever", "God's justice is glorified"],
    alt: ["Only God is immortal; life is his gift", "Judgment is real, fitted to deeds", "God's fire purifies (UR) or destroys (CI)", "Evil is finally ended", "God all in all"],
    altLens: "ur", pressure: 0
  }
},
{
  id: "futurism",
  name: "Futurism & Dispensationalism",
  family: "Last things",
  span: [1830, 2026], seeds: 1590,
  summary: "The view that most of Revelation and the Olivet Discourse (Matthew 24) describe events still in the future: a rapture of the church, a seven-year Great Tribulation, a personal Antichrist, a rebuilt temple, and a literal thousand-year reign centred on national Israel.",
  claims: ["Prophecy is read 'literally' and mostly unfulfilled", "Israel and the church are distinct peoples with distinct programmes", "The church is raptured before (or during) a future 7-year tribulation", "A personal Antichrist will rule a revived empire"],
  roots: "Early writers like Irenaeus and Hippolytus expected a future Antichrist and an earthly millennium (chiliasm), while Augustine read the millennium as the present church age. Reformers identified the papacy as Antichrist (historicism). In reply, the Jesuit Francisco Ribera (c. 1590) placed Antichrist and most of Revelation in the distant future (futurism) and Luis de Alcázar placed it in the past (preterism). Futurism re-entered Protestantism through Samuel Maitland (1826), Edward Irving (who in 1827 published Lacunza's futurist work) and the Albury prophecy conferences. John Nelson Darby (1800–1882) of the Plymouth Brethren built dispensationalism with a secret pre-tribulation rapture (from c. 1830). It spread through the Niagara Bible conferences, the Scofield Reference Bible (1909), Dallas Theological Seminary (1924), Hal Lindsey's The Late Great Planet Earth (1970) and the Left Behind novels (1995–2007).",
  timeline: [
    { y: 180, t: "Irenaeus expects a future Antichrist and earthly millennium" },
    { y: 204, t: "Hippolytus, On Christ and Antichrist" },
    { y: 325, t: "Eusebius records the fulfilment of Jesus' warnings in AD 70" },
    { y: 426, t: "Augustine, City of God XX: the millennium is now" },
    { y: 1590, t: "Ribera's commentary on Revelation (futurism)" },
    { y: 1614, t: "Alcázar's preterist commentary" },
    { y: 1812, t: "Lacunza, The Coming of Messiah in Glory and Majesty" },
    { y: 1826, t: "Maitland revives futurism in England; Albury conferences begin" },
    { y: 1830, t: "Darby and the Brethren: pre-tribulation rapture" },
    { y: 1909, t: "Scofield Reference Bible" },
    { y: 1970, t: "Hal Lindsey, The Late Great Planet Earth" },
    { y: 1988, t: "'88 Reasons Why the Rapture Will Be in 1988' — one of many failed dates" },
    { y: 1995, t: "Left Behind series begins" },
    { y: 2006, t: "Eberle & Trench, Victorious Eschatology" }
  ],
  scriptures: [
    { ref: "1 Thessalonians 4:16-17", use: "Caught up to meet the Lord in the air (the rapture)" },
    { ref: "Daniel 9:24-27", use: "Seventy weeks, with a 'gap' before the 70th week" },
    { ref: "Matthew 24:21,29-31", use: "Great tribulation and the coming of the Son of Man" },
    { ref: "2 Thessalonians 2:3-4", use: "The man of lawlessness in the temple" },
    { ref: "Revelation 20:1-6", use: "A thousand-year reign" },
    { ref: "Revelation 3:10", use: "Kept 'from the hour of trial'" }
  ],
  influences: ["counter", "scsr", "apoc", "persian"],
  fathers: [
    { name: "Irenaeus", date: "c. 130–202", held: "Future Antichrist and literal millennium (chiliasm). Supports futurist elements, but no rapture separate from the second coming." },
    { name: "Hippolytus", date: "c. 170–235", held: "Future Antichrist from the tribe of Dan; Daniel's 70th week split. Closest early parallel to a 'gap'." },
    { name: "Eusebius", date: "c. 260–339", held: "Reads Matthew 24's tribulation as fulfilled in the Roman siege of Jerusalem (Church History III.5–7)." },
    { name: "John Chrysostom", date: "c. 347–407", held: "Applies much of Matthew 24 to the destruction of Jerusalem." },
    { name: "Augustine", date: "354–430", held: "Amillennial: the 'thousand years' is the church age; the West followed him for 1,000 years." },
    { name: "No father", date: "—", held: "No church father taught a secret pre-tribulation rapture of the church separate from Christ's visible return." }
  ],
  tensions: [
    { title: "'This generation will not pass away'", text: "Jesus said all these things would happen within 'this generation' (Matt 24:34) — the same phrase he used for his hearers (Matt 23:36). He told the disciples they would see it (Matt 16:28; 24:33) and would not finish Israel's towns first (Matt 10:23).", refs: ["Matthew 24:34", "Matthew 23:36", "Matthew 16:28", "Matthew 10:23"] },
    { title: "'Soon', 'near', 'at hand'", text: "Revelation opens and closes saying its events 'must soon take place' and 'the time is near' (Rev 1:1,3; 22:6,10). Daniel was told to seal his prophecy because it was far off (Dan 12:4); John is told not to seal his (Rev 22:10).", refs: ["Revelation 1:1-3", "Revelation 22:6,10", "Daniel 12:4"] },
    { title: "Who is 'left behind'?", text: "In Matthew 24:37-41 those 'taken' are compared to those swept away by the flood — taken in judgment. Noah, the righteous one, was left behind. The popular reading reverses the picture.", refs: ["Matthew 24:37-41", "Luke 17:34-37"] },
    { title: "The 2,000-year gap", text: "Daniel's seventy weeks are presented as a continuous 490-year period (Dan 9:24). Inserting a gap of two millennia between week 69 and 70 has no textual signal.", refs: ["Daniel 9:24-27"] },
    { title: "Two peoples of God?", text: "Paul says Christ has made Jew and Gentile 'one new man', breaking the dividing wall (Eph 2:14-16), and that all in Christ are Abraham's offspring (Gal 3:28-29). Dispensationalism's permanent Israel/church distinction rebuilds the wall.", refs: ["Ephesians 2:14-16", "Galatians 3:28-29", "Romans 2:28-29"] },
    { title: "Failed predictions and fear", text: "Generations of date-setting (1843, 1914, 1981, 1988, 2011) and newspaper exegesis have failed. Jesus warned against date-setting (Acts 1:7). Escapist expectation discourages long-term care for the world.", refs: ["Acts 1:6-8", "Matthew 24:36"] }
  ],
  responses: [
    { lens: "vic", s: 3, arg: "Matthew 24:1-34 answers the disciples' question about the temple (24:1-3) and was fulfilled when Rome destroyed Jerusalem in AD 70; from 24:36 Jesus turns to his final, unpredictable coming (Eberle & Trench). Christ already reigns at the Father's right hand (Ps 110:1; Acts 2:34-36) and his kingdom grows like a stone that becomes a mountain filling the earth (Dan 2:35), so the church's future is victory, not retreat.", refs: ["Matthew 24:1-3,34", "Daniel 2:34-35,44", "Psalm 110:1", "Acts 2:34-36", "Isaiah 9:7"] },
    { lens: "rel", s: 1, arg: "Fear-driven prophecy pictures God as a coming destroyer. Revelation's centre is the slain Lamb on the throne (Rev 5:6) who conquers by sacrificial love, not a war-machine Messiah.", refs: ["Revelation 5:5-6", "Revelation 12:11"] },
    { lens: "cv", s: 2, arg: "The decisive battle is behind us: 'now the ruler of this world will be cast out' (John 12:31); the dragon was thrown down at Christ's enthronement (Rev 12:5-10). Revelation celebrates a victory won at the cross.", refs: ["John 12:31-32", "Revelation 12:5-11", "Colossians 2:15"] },
    { lens: "ur", s: 1, arg: "Revelation ends with kings of the earth — previously Christ's enemies — bringing their glory into the city whose gates never close, and leaves for the healing of the nations (Rev 21:24-26; 22:2).", refs: ["Revelation 21:24-26", "Revelation 22:2"] }
  ],
  rebuttal: "Futurists answer that Jesus' coming 'on the clouds' with every eye seeing him (Matt 24:30; Rev 1:7) did not happen in AD 70; 'this generation' may mean 'this race' or the generation that sees the signs; 'soon' is from God's perspective (2 Pet 3:8). They argue Romans 11:25-29 promises a future for ethnic Israel, and that 'literal' reading guards against allegorising. Many non-dispensational futurists (historic premillennialists like George Ladd) reject the rapture-gap system while keeping a future tribulation and millennium.",
  logic: {
    trad: ["Prophecy is mostly unfulfilled", "God's prophetic clock paused at Daniel's 69th week", "Church raptured out", "7-year tribulation, Antichrist, rebuilt temple", "Christ returns to rule from Jerusalem 1,000 years"],
    alt: ["Jesus' warnings target his generation", "AD 70: temple destroyed as foretold", "Christ enthroned now; Spirit poured out", "Kingdom grows through the church in history", "Christ returns to a maturing world; resurrection & new creation"],
    altLens: "vic", pressure: 0
  }
}
];

/* ---------- Contested texts: how each side reads them ---------- */
TC.texts = [
  { ref: "Matthew 25:46", topic: "hell", trad: "'Eternal' punishment must last as long as 'eternal' life — the same word.", alt: "Aiōnios means 'of the coming age'. Kolasis is corrective. Its duration follows its object: life of the age is endless because God's life is; correction of the age lasts as long as correction is needed.", lens: "ur" },
  { ref: "Mark 9:48", topic: "hell", trad: "The worm does not die and the fire is not quenched: endless torment.", alt: "It quotes Isaiah 66:24, where the worms and fire consume corpses — destruction, not living torment.", lens: "ci" },
  { ref: "Revelation 14:11", topic: "hell", trad: "'The smoke of their torment goes up for ever and ever' — no rest day or night.", alt: "The same image describes Edom (Isa 34:10), a land long since quiet. Smoke rising is the lasting memorial of a completed judgment.", lens: "ci" },
  { ref: "Luke 16:19-31", topic: "hell", trad: "The rich man's conscious torment in Hades proves the lost suffer after death.", alt: "A parable using a familiar Jewish story-form; it addresses wealth and Israel's leaders, and is set in Hades, which Revelation 20:14 says will itself be ended.", lens: "vic" },
  { ref: "1 Corinthians 15:22,28", topic: "hell", trad: "'All' who are 'in Christ' will be made alive — believers only.", alt: "The two 'alls' are parallel: as all die in Adam, so all will be made alive in Christ, each in his own order, until God is all in all.", lens: "ur" },
  { ref: "Philippians 2:10-11", topic: "hell", trad: "Every knee bows, some in forced submission.", alt: "The confession is 'to the glory of God the Father'; the verb (exomologeō) is praise and thanksgiving. It echoes Isaiah 45:22-24, where all the ends of the earth are saved.", lens: "ur" },
  { ref: "Isaiah 53:10", topic: "psa", trad: "'It was the will of the LORD to crush him' — the Father punishes the Son.", alt: "The Servant's suffering is God's will in that God gives himself into human hands to save; the poem's 'we' thought he was smitten by God (v.4), but he was pierced by our sins (v.5).", lens: "cv" },
  { ref: "2 Corinthians 5:21", topic: "psa", trad: "Christ was made sin: our guilt was transferred to him and punished.", alt: "Two verses earlier: 'God was in Christ reconciling the world' (5:19). 'Made sin' can mean 'made a sin offering' (as in the Greek OT, Lev 4), which cleanses rather than punishes.", lens: "rel" },
  { ref: "Romans 3:25", topic: "psa", trad: "Christ is the propitiation that turns aside God's wrath.", alt: "Hilastērion is the mercy seat (Heb 9:5), where God meets and cleanses his people. God provides it; it is not offered to change God.", lens: "rel" },
  { ref: "Galatians 3:13", topic: "psa", trad: "Christ became a curse, bearing God's curse in our place.", alt: "The curse is the law's curse (Deut 21:23), and Christ redeems us by entering it and exhausting its power — a victory over the law's condemnation.", lens: "cv" },
  { ref: "Matthew 24:34", topic: "futurism", trad: "'This generation' means the generation alive when the signs appear.", alt: "Every other use of 'this generation' in Matthew means Jesus' contemporaries (11:16; 12:41-45; 23:36). Fulfilled in AD 70.", lens: "vic" },
  { ref: "1 Thessalonians 4:17", topic: "futurism", trad: "A secret rapture removes the church before the tribulation.", alt: "'Meet' (apantēsis) describes citizens going out to meet a visiting king and escorting him back into the city. Believers meet Christ and return with him to earth; it is loud and public, with a trumpet.", lens: "vic" },
  { ref: "Daniel 2:35", topic: "futurism", trad: "The stone strikes at Christ's second coming.", alt: "'In the days of those kings' (2:44) — the Roman era — God sets up his kingdom; the stone grows gradually into a mountain filling the earth.", lens: "vic" },
  { ref: "James 2:24", topic: "reformation", trad: "James means works show that faith is genuine before people.", alt: "James means what he says: justification includes the faithful life. Faith is allegiance (pistis), not just inner assent.", lens: "npp" },
  { ref: "Galatians 2:16", topic: "reformation", trad: "No one is justified by doing good works to earn favour.", alt: "In context (2:11-14), 'works of the law' are the Jewish boundary markers Peter enforced at table. Justification is about who belongs at the table.", lens: "npp" },
  { ref: "2 Timothy 3:16", topic: "sola", trad: "Scripture is God-breathed and therefore the sole infallible rule.", alt: "Scripture is inspired and profitable; it equips. It points beyond itself to Christ and lives in a community that also holds apostolic tradition (2 Thess 2:15).", lens: "rel" },
  { ref: "John 5:39-40", topic: "sola", trad: "The Scriptures testify about Christ, so knowing Scripture is knowing Christ.", alt: "Jesus warns that the Bible can be studied while refusing him. Scripture is a signpost; he is the destination.", lens: "rel" },
  { ref: "Isaiah 45:7", topic: "sovereignty", trad: "God creates calamity — all suffering is from him.", alt: "In context (45:1-7) God raises Cyrus to judge Babylon: 'calamity' (ra') is national judgment, not every cancer or accident.", lens: "rel" },
  { ref: "Romans 8:28", topic: "sovereignty", trad: "All things are ordained to work for good.", alt: "Better manuscripts and translations: 'in all things God works for the good' — God works within tragedy to redeem it, not that tragedy is good.", lens: "rel" },
  { ref: "Genesis 50:20", topic: "sovereignty", trad: "God meant the brothers' evil for good — he planned it.", alt: "God brought good out of what humans meant for evil. The text holds both intentions side by side and shows God as redeemer.", lens: "cv" },
  { ref: "1 John 1:8", topic: "holiness", trad: "Reformed: sin remains until death. Holiness: refers to the unconverted claiming no need.", alt: "John holds both: we confess real sin and are cleansed (1:9), and the new birth breaks sin's grip (3:9). Love made complete is the goal (4:17).", lens: "rel" },
  { ref: "Hebrews 10:14", topic: "progressive", trad: "Perfected positionally, being sanctified practically.", alt: "The perfecting is real and done; growth is living out a holiness already given in union with Christ.", lens: "th" },
  { ref: "1 Timothy 2:4", topic: "arminian", trad: "Arminian: God desires all, but respects free refusal. Calvinist: 'all kinds of people'.", alt: "God desires all; and 1 Timothy 4:10 calls God 'the Saviour of all people, especially of those who believe'. The desire will be fulfilled.", lens: "ur" },
  { ref: "John 3:3", topic: "evangelical", trad: "You must be born again by a personal decision.", alt: "'Born from above' — a work of the Spirit like the wind (3:8), not a technique. Nicodemus is invited into God's life, not given a formula.", lens: "rel" }
];

/* ---------- Spectrums ---------- */
TC.spectra = [
  { name: "The fate of the lost", left: "Eternal conscious torment", right: "All finally reconciled", points: [
    { x: 4, label: "Tertullian", kind: "father" }, { x: 8, label: "Augustine", kind: "father" }, { x: 10, label: "Jonathan Edwards", kind: "modern" }, { x: 22, label: "C. S. Lewis (self-chosen hell)", kind: "modern" },
    { x: 45, label: "Conditional immortality (Fudge, Stott)", kind: "view" }, { x: 60, label: "Hopeful universalism (von Balthasar)", kind: "view" }, { x: 80, label: "Isaac of Nineveh", kind: "father" },
    { x: 88, label: "Gregory of Nyssa", kind: "father" }, { x: 92, label: "Origen", kind: "father" }, { x: 96, label: "D. B. Hart", kind: "modern" } ] },
  { name: "What the cross accomplishes", left: "Legal: penalty paid", right: "Victory & healing", points: [
    { x: 6, label: "Calvin", kind: "father" }, { x: 10, label: "J. I. Packer", kind: "modern" }, { x: 22, label: "Anselm (honour)", kind: "father" }, { x: 35, label: "Grotius (governmental)", kind: "view" },
    { x: 55, label: "Kaleidoscopic (Scot McKnight)", kind: "view" }, { x: 70, label: "Athanasius", kind: "father" }, { x: 80, label: "Abelard (moral influence)", kind: "father" }, { x: 88, label: "Irenaeus", kind: "father" }, { x: 94, label: "Aulén, Boyd", kind: "modern" } ] },
  { name: "How God governs suffering", left: "Meticulous: God ordains all", right: "Open & relational", points: [
    { x: 5, label: "Calvin", kind: "father" }, { x: 8, label: "John Piper", kind: "modern" }, { x: 18, label: "Augustine (late)", kind: "father" }, { x: 40, label: "Molinism (W. L. Craig)", kind: "view" },
    { x: 55, label: "Arminius, Wesley", kind: "father" }, { x: 68, label: "Irenaeus, Justin", kind: "father" }, { x: 82, label: "Greg Boyd", kind: "modern" }, { x: 94, label: "Thomas Jay Oord", kind: "modern" } ] },
  { name: "When is Bible prophecy fulfilled?", left: "Mostly future", right: "Mostly past", points: [
    { x: 4, label: "Darby, Scofield", kind: "modern" }, { x: 10, label: "Hal Lindsey", kind: "modern" }, { x: 22, label: "Historic premillennial (Ladd)", kind: "view" }, { x: 30, label: "Irenaeus, Hippolytus", kind: "father" },
    { x: 50, label: "Historicism (Reformers)", kind: "view" }, { x: 58, label: "Augustine (amillennial)", kind: "father" }, { x: 68, label: "Eusebius", kind: "father" },
    { x: 78, label: "Partial preterism (Eberle, Gentry)", kind: "view" }, { x: 96, label: "Full preterism (outside the creeds)", kind: "view" } ] }
];

/* ---------- Sources & further reading ---------- */
TC.sources = [
  { group: "Atonement", items: [
    { t: "Gustaf Aulén, Christus Victor (1931)", u: "https://en.wikipedia.org/wiki/Christus_Victor" },
    { t: "J. D. Meyer, 'The Patristic Roots of Satisfaction Atonement Theories', Tyndale Bulletin (critique of Aulén)", u: "https://www.tyndalebulletin.org/article/27751-the-patristic-roots-of-satisfaction-atonement-theories-did-the-church-fathers-affirm-only-_christus-victor_.pdf" },
    { t: "Fuller Studio, 'Historical Reflections on Substitutionary Atonement'", u: "https://fullerstudio.fuller.edu/historical-reflections-on-substitutionary-atonement/" },
    { t: "J. A. Aloisi, 'His Flesh for Our Flesh': atonement in the second century", u: "https://dbts.edu/wp-content/uploads/2025/10/His-Flesh-for-our-Flesh-Aloisi.pdf" },
    { t: "New World Encyclopedia, Christus Victor", u: "https://www.newworldencyclopedia.org/entry/Christus_Victor" } ] },
  { group: "Hell & reconciliation", items: [
    { t: "Wikipedia, Hell in Christianity (Sheol, Hades, Gehenna, history)", u: "https://en.wikipedia.org/wiki/Hell_in_Christianity" },
    { t: "Ilaria Ramelli, Why was Gregory of Nyssa never condemned for apokatastasis?", u: "https://www.ceeol.com/search/article-detail?id=1059284" },
    { t: "M. McClymond, 'Origenes Vindicatus vel Rufinus Redivivus?' — critical review of Ramelli", u: "https://theologicalstudies.net/articles/origenes-vindicatus-vel-rufinus-redivivus-a-review-of-ilaria-ramellis-the-christian-doctrine-of-apokatastasis-2013/" },
    { t: "I. Ramelli, reply to McClymond, Theological Studies", u: "https://theologicalstudies.net/wp-content/uploads/2022/11/8-Ramelli-Reply-to-Professor.pdf" },
    { t: "S. Nemes, review of Ramelli, Journal of Analytic Theology", u: "https://jat-ojs-baylor.tdl.org/jat/article/download/jat.2015-3.181913130418a/271/494" },
    { t: "'The Enduring Distinction': Gregory of Nazianzus rejecting apokatastasis (JETS)", u: "https://etsjets.org/?p=29894" },
    { t: "Religion News Service, 'What is hell?'", u: "https://religionnews.com/2018/04/18/what-is-hell/" } ] },
  { group: "Eschatology", items: [
    { t: "Wikipedia, Futurism (Christianity) — Ribera and the Counter-Reformation", u: "https://en.wikipedia.org/wiki/Futurism_(Christianity)" },
    { t: "Adventist Biblical Research Institute, 'The Rapture' (history of futurism)", u: "https://adventistbiblicalresearch.org/articles/the-rapture" },
    { t: "H. C. Martin, The Origin of Dispensational Futurism (Lutheran Library)", u: "https://lutheranlibrary.org/634-martin-origin-dispensational-futurism" },
    { t: "Scholar's Corner, review of Victorious Eschatology", u: "https://scholarscorner.com/victorious-eschatology-a-book-review" },
    { t: "A futurist's critical review of Victorious Eschatology (Substack)", u: "https://studiojakemedia.substack.com/p/victorious-eschatology-christian" } ] },
  { group: "Providence & relational theology", items: [
    { t: "T. J. Oord, The Uncontrolling Love of God (IVP Academic, 2015)", u: "https://ivpress.com/the-uncontrolling-love-of-god" },
    { t: "Christianity Today review, 'God's Love Isn't Neat and Tidy'", u: "https://christianitytoday.com/ct/2016/march-web-only/gods-love-isnt-neat-and-tidy.html" },
    { t: "OnScript podcast with Thomas Jay Oord", u: "https://onscript.study/podcast/thomas-jay-oord-the-uncontrolling-love-of-god/" } ] },
  { group: "Classic primary texts", items: [
    { t: "Anselm, Cur Deus Homo (1098)", u: "https://www.ccel.org/ccel/anselm/basic_works.vi.html" },
    { t: "Calvin, Institutes of the Christian Religion", u: "https://www.ccel.org/ccel/calvin/institutes.html" },
    { t: "Athanasius, On the Incarnation", u: "https://www.ccel.org/ccel/athanasius/incarnation.html" },
    { t: "Augustine, Enchiridion (ch. 112 on the 'merciful')", u: "https://www.newadvent.org/fathers/1302.htm" },
    { t: "Gregory of Nyssa, On the Soul and the Resurrection", u: "https://www.newadvent.org/fathers/2915.htm" },
    { t: "Westminster Confession of Faith", u: "https://www.ccel.org/ccel/anonymous/westminster3.html" } ] }
];

/* ---------- Pathfinder decision trees ---------- */
TC.trees = {
  hell: { title: "Where do the lost end up?", start: "a", nodes: {
    a: { q: "Is every human soul naturally immortal?", opts: [["Yes, souls live for ever", "b"], ["No, immortality is God's gift", "c"]] },
    b: { q: "Can someone still turn to God after death?", opts: [["No, destiny is fixed at death", "r_ect"], ["Yes, love keeps calling", "d"]] },
    c: { q: "Will God's love finally win every person?", opts: [["Some finally refuse", "r_ci"], ["Yes, all are restored", "r_ur"]] },
    d: { q: "Will everyone eventually say yes?", opts: [["We may hope, not know", "r_hope"], ["Yes, God's purpose cannot fail", "r_ur"]] },
    r_ect: { view: "Eternal conscious torment", lens: null, text: "Augustine, Aquinas, Edwards: the lost suffer consciously without end. Key texts: Matthew 25:46; Revelation 14:11; 20:10." },
    r_ci: { view: "Conditional immortality", lens: "ci", text: "The finally impenitent perish: destroyed body and soul (Matthew 10:28; Romans 6:23). Fudge, Stott, Pinnock." },
    r_hope: { view: "Hopeful universalism", lens: "ur", text: "Hell is a real possibility, but Christians may pray and hope it is empty (von Balthasar; many Orthodox)." },
    r_ur: { view: "Universal reconciliation", lens: "ur", text: "Judgment purifies; God becomes all in all (1 Corinthians 15:28). Origen, Gregory of Nyssa, Isaac of Nineveh, Talbott, Hart." }
  } },
  cross: { title: "What did the cross accomplish?", start: "a", nodes: {
    a: { q: "What is humanity's deepest problem?", opts: [["Guilt before God's law", "b"], ["Bondage to sin, death and the devil", "c"], ["Estrangement from God's love", "d"]] },
    b: { q: "What does God's justice require?", opts: [["Sin must be punished", "r_psa"], ["God's government must be upheld", "r_gov"]] },
    c: { q: "How is the bondage broken?", opts: [["Christ defeats the powers by death and resurrection", "r_cv"], ["Christ heals human nature by uniting it to God", "r_th"]] },
    d: { q: "Who needs to change at the cross?", opts: [["God must be appeased", "r_psa"], ["We do: God was already for us", "r_rel"]] },
    r_psa: { view: "Penal substitution", lens: null, text: "Christ bears the penalty in our place (Calvin, Packer, Stott). Isaiah 53; 2 Corinthians 5:21." },
    r_gov: { view: "Governmental theory", lens: null, text: "Christ's death shows sin's seriousness so God can forgive while upholding moral order (Grotius, many Arminians)." },
    r_cv: { view: "Christus Victor", lens: "cv", text: "The cross and resurrection defeat sin, death and the devil (Colossians 2:15; Hebrews 2:14). Irenaeus, Aulén." },
    r_th: { view: "Recapitulation & theosis", lens: "th", text: "God became human so humans could share God's life (Athanasius). Christ heals humanity from the inside." },
    r_rel: { view: "Relational reconciliation", lens: "rel", text: "God was in Christ reconciling the world to himself (2 Corinthians 5:19); the cross reveals and enacts forgiving love." }
  } },
  end: { title: "How should we read Bible prophecy?", start: "a", nodes: {
    a: { q: "Who is 'this generation' in Matthew 24:34?", opts: [["Jesus' own hearers", "b"], ["A future generation or 'race'", "c"]] },
    b: { q: "Has Christ's final coming and resurrection already happened?", opts: [["No, they are still future", "r_vic"], ["Yes, all was fulfilled in AD 70", "r_full"]] },
    c: { q: "Are Israel and the church two distinct peoples with separate plans?", opts: [["Yes", "r_disp"], ["No, one people of God", "r_hist"]] },
    r_vic: { view: "Partial preterism / victorious eschatology", lens: "vic", text: "Matthew 24:1-34 fulfilled in AD 70; Christ reigns now; his kingdom grows until his bodily return (Eberle & Trench, Gentry)." },
    r_full: { view: "Full preterism", lens: null, text: "Everything, including the resurrection, was fulfilled by AD 70. Rejected by all historic creeds (compare 2 Timothy 2:18)." },
    r_disp: { view: "Dispensational futurism", lens: null, text: "Pre-tribulation rapture, future 7-year tribulation and Antichrist, millennial Jewish kingdom (Darby, Scofield)." },
    r_hist: { view: "Historic premillennialism", lens: null, text: "Future tribulation and millennium, but no secret rapture and one people of God (Irenaeus, George Ladd)." }
  } },
  suffer: { title: "Why do we suffer?", start: "a", nodes: {
    a: { q: "Does God decide every event, including evil?", opts: [["Yes, nothing is outside his decree", "b"], ["No, creatures have real freedom", "c"]] },
    b: { q: "Is God then responsible for evil?", opts: [["He ordains it but is not guilty", "r_cal"], ["That seems unavoidable", "r_det"]] },
    c: { q: "Can God unilaterally prevent all evil?", opts: [["Yes, but he allows it for reasons", "r_arm"], ["Love by nature doesn't control", "r_open"], ["There is a real war with spiritual enemies", "r_war"]] },
    r_cal: { view: "Meticulous providence (compatibilism)", lens: null, text: "God ordains all for his glory; humans remain responsible (Calvin, Westminster 3.1, Piper)." },
    r_det: { view: "Hard determinism", lens: null, text: "Few Christians accept this; it makes God the author of sin, which every major tradition rejects." },
    r_arm: { view: "Permissive providence", lens: null, text: "God permits evil to preserve freedom and brings good from it (Arminius, Wesley, Molinists)." },
    r_open: { view: "Open & relational theism", lens: "rel", text: "God's uncontrolling love works with creatures, suffers with us and redeems (Oord, Pinnock)." },
    r_war: { view: "Warfare worldview", lens: "cv", text: "Evil comes from rebel spirits and free agents; Christ came to destroy the devil's works (1 John 3:8; Boyd)." }
  } }
};
