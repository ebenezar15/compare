/* Word studies with evidence. Each word: root/etymology, traditional and alternative readings,
   an evidence trail from ancient and modern sources (each tagged with what kind of source it is
   and which reading it supports), and a balanced verdict.
   side: "alt" supports the alternative reading, "trad" supports the traditional reading,
   "ctx" is context that both sides use. */

TC.evKinds = {
  "Classical Greek": "Greek literature and philosophy before and around the New Testament",
  "Septuagint": "The Greek Old Testament (3rd–1st c. BC), the Bible of the apostles",
  "Hebrew Bible": "Usage in the Hebrew text itself",
  "Second Temple": "Jewish writings c. 200 BC – AD 100: Maccabees, Wisdom, 1 Enoch, Josephus, Philo",
  "Dead Sea Scrolls": "Texts from Qumran, 3rd c. BC – 1st c. AD",
  "Rabbinic": "Mishnah, Tosefta, Talmud and medieval Jewish commentators",
  "Papyri & inscriptions": "Everyday documents, letters, contracts and monuments",
  "New Testament": "How the word is used elsewhere in the New Testament",
  "Church Fathers": "Early Christian writers, especially Greek-speaking ones",
  "Lexicon": "Standard dictionaries: LSJ, BDAG, Thayer, BDB, HALOT, Moulton-Milligan, Trench",
  "Scholarship": "Modern academic studies"
};

TC.words = [
/* ---------------- HELL & JUDGMENT ---------------- */
{ w: "kolasis", s: "κόλασις (verb κολάζω)", lang: "Greek", topic: "hell", gloss: "chastisement, correction, punishment",
  root: "From kolazō, 'to curtail, lop, prune' (Thayer: 'properly, to lop, prune, as trees, wings'; related to kolos, 'docked'). From 'check the growth of' it came to mean 'restrain', then 'chastise, punish'.",
  trad: "In Koine Greek kolasis is the ordinary word for punishment, including retribution. 'Eternal kolasis' in Matthew 25:46 is endless punishment.",
  alt: "The root idea is pruning to improve growth. Classical writers distinguish kolasis (for the good of the one punished) from timōria (for the satisfaction of the punisher). Jesus chose kolasis, not timōria.",
  ev: [
    { k: "Classical Greek", src: "Aristotle, Rhetoric 1.10.17 (1369b)", side: "alt", note: "Distinguishes kolasis, inflicted 'for the sake of the one who suffers', from timōria, inflicted 'for the satisfaction of the one who inflicts it'." },
    { k: "Classical Greek", src: "Plato, Protagoras 324a-b", side: "alt", note: "Protagoras argues that rational punishment (kolazein) looks forward, to reform the wrongdoer and deter others, rather than avenging the past 'like a wild beast'." },
    { k: "Classical Greek", src: "Plato, Gorgias 525b-c; Phaedo 113e", side: "trad", note: "Yet Plato also says 'incurable' souls are punished for ever in Tartarus as an example to others. Even the classical distinction allowed endless punishment." },
    { k: "Second Temple", src: "Josephus, Jewish War 2.163", side: "trad", note: "Josephus says the Pharisees held that the souls of the wicked are 'punished (kolazesthai) with eternal (aidios) retribution (timōria)' — the verb kolazō used for endless punishment, a strong first-century Jewish parallel." },
    { k: "Second Temple", src: "2 Maccabees 4:38; Wisdom 16:24", side: "trad", note: "Kolasis is used for deserved punitive judgment (the Lord 'repaid him the punishment he deserved')." },
    { k: "New Testament", src: "1 John 4:18", side: "ctx", note: "The only other New Testament use: 'fear has to do with kolasis; perfect love casts out fear'." },
    { k: "Church Fathers", src: "Clement of Alexandria, Stromata 4.24; Paedagogus 1.8", side: "alt", note: "Clement describes God's punishments as instructive and 'the surgery of the passions of the soul', aimed so that the sinner 'may sin no more'." },
    { k: "Lexicon", src: "Thayer, Greek-English Lexicon, κόλασις; Trench, Synonyms of the NT §7", side: "both", note: "Both record the Aristotelian distinction and note that later usage does not always keep it." }
  ],
  verdict: "The root meaning and the classical distinction support a corrective sense, and Greek fathers like Clement used it so. But by the first century kolasis was also the normal word for punishment in general, and Josephus pairs it with eternal retribution. The word alone cannot settle Matthew 25:46; the argument must rest on context and the wider theology of judgment." },

{ w: "aiōnios", s: "αἰώνιος", lang: "Greek", topic: "hell", gloss: "eternal; of the age; age-long",
  root: "Adjective from aiōn: 'lifetime, age, era', later also 'eternity'. Its counterpart aïdios (from aei, 'always') is the stricter philosophical word for 'everlasting'.",
  trad: "Aiōnios means everlasting. In Matthew 25:46 the same word describes life and punishment, so both are endless.",
  alt: "Aiōnios means 'belonging to the age (to come)'. Its duration depends on the thing described. Greek-speaking Jews and Christians had a stricter word for endless (aïdios) that the New Testament never uses for human punishment.",
  ev: [
    { k: "Classical Greek", src: "Plato, Timaeus 37d", side: "ctx", note: "Plato uses aiōn for the timeless eternity of the ideal world, of which time is a 'moving image'. Aiōnios could therefore carry a sense of 'eternal' well before the New Testament." },
    { k: "Septuagint", src: "Habakkuk 3:6; Numbers 25:13; Exodus 40:15", side: "alt", note: "'Aiōnios hills' and an 'aiōnios priesthood' (Aaron's, which ended, Heb 7:11-12) show the word used for long-lasting, not literally endless, things." },
    { k: "New Testament", src: "Romans 16:25-26", side: "alt", note: "In one sentence Paul speaks of a mystery kept secret 'for times aiōnios' (chronois aiōniois), which have now ended, and of 'the aiōnios God'. The word bends to its context." },
    { k: "Second Temple", src: "Josephus, Jewish War 2.163; Antiquities 18.14", side: "alt", note: "When Josephus states plainly that the Pharisees believed in endless punishment, he uses aïdios ('eternal retribution', 'eternal prison'), not aiōnios." },
    { k: "Second Temple", src: "4 Maccabees 9:9; 12:12", side: "trad", note: "But 4 Maccabees threatens the tyrant with 'aiōnios torment' and 'aiōnios fire' — aiōnios used for endless punishment in a Jewish text close to the New Testament." },
    { k: "New Testament", src: "Jude 6", side: "ctx", note: "Fallen angels are kept in aïdios chains 'until the judgment of the great day' — the strict word, yet with an end point." },
    { k: "Scholarship", src: "Ilaria Ramelli & David Konstan, Terms for Eternity: Aiônios and Aïdios in Classical and Christian Texts (Gorgias, 2007/2013)", side: "alt", note: "Find that in the Greek Bible aiōnios does not necessarily denote absolute eternity, and that early fathers call eternal life aïdios while calling punishment only aiōnios." },
    { k: "Scholarship", src: "N. A. Pedersen, Journal of Theological Studies (2024)", side: "trad", note: "Critiques Ramelli's reading of pre-Origen sources for not distinguishing early concepts from later interpretations." }
  ],
  verdict: "Aiōnios can mean everlasting, and when used of God or his life it does. It can also mean 'age-long' or 'of the coming age'. The evidence shows the word's duration is set by context, which is exactly why Matthew 25:46 is debated. Neither side can settle it by dictionary alone." },

{ w: "ʿolam", s: "עוֹלָם", lang: "Hebrew", topic: "hell", gloss: "long duration, antiquity, forever",
  root: "Possibly from a root meaning 'hidden' — time whose end is out of sight. The Septuagint usually translates it with aiōn and aiōnios.",
  trad: "'Everlasting' — Daniel 12:2's 'everlasting contempt' is endless.",
  alt: "'Olam means time beyond the horizon, often a lifetime or an era. Its length depends on what it describes.",
  ev: [
    { k: "Hebrew Bible", src: "Exodus 21:6; 1 Samuel 1:22", side: "alt", note: "A slave serves his master 'forever' ('olam) — for life. Samuel stays at the sanctuary 'forever' — for his lifetime." },
    { k: "Hebrew Bible", src: "Jonah 2:6", side: "alt", note: "Jonah says the earth's bars closed on him 'forever' — he was in the fish three days." },
    { k: "Hebrew Bible", src: "Isaiah 32:14-15", side: "alt", note: "The city will be a wasteland 'forever ('olam)… until the Spirit is poured upon us from on high' — an 'olam with an until." },
    { k: "Hebrew Bible", src: "Psalm 90:2", side: "trad", note: "'From everlasting to everlasting ('olam) you are God' — when it describes God, it means true eternity." },
    { k: "Scholarship", src: "E. Jenni, 'ʿôlām', Theological Lexicon of the OT; BDB; HALOT", side: "ctx", note: "The standard lexicons give 'long duration', 'antiquity', 'futurity' — the most distant time in view, past or future." }
  ],
  verdict: "'Olam is strongly context-dependent. It proves neither endless nor limited punishment by itself; the Hebrew Bible has no single technical word for philosophical eternity." },

{ w: "Gehenna", s: "γέεννα / גֵּי הִנֹּם", lang: "Greek from Hebrew", topic: "hell", gloss: "Valley of (the son of) Hinnom",
  root: "Greek form of Hebrew Ge-Hinnom, the valley south-west of Jerusalem's old city.",
  trad: "Jesus' name for the final place of punishment of body and soul.",
  alt: "A real place with a history of child sacrifice and prophetic judgment. Jesus' Gehenna warnings echo Jeremiah's prophecy of Jerusalem's destruction.",
  ev: [
    { k: "Hebrew Bible", src: "Joshua 15:8; 2 Kings 23:10; Jeremiah 7:31-32; 19:2-6", side: "alt", note: "A boundary valley; the site of Topheth where children were burned to Molech; Jeremiah renames it 'the Valley of Slaughter', where Jerusalem's dead will lie unburied." },
    { k: "Hebrew Bible", src: "Jeremiah 31:40", side: "alt", note: "'The whole valley of the dead bodies and the ashes… shall be holy to the LORD.' Jeremiah foresees even this valley restored." },
    { k: "Second Temple", src: "1 Enoch 27:1-3; 4 Ezra 7:36", side: "trad", note: "By the 2nd century BC the 'accursed valley' had become a place of judgment for the wicked, and 4 Ezra speaks of 'the furnace of Gehenna'. Jesus' hearers knew this meaning." },
    { k: "Rabbinic", src: "Mishnah Eduyot 2:10", side: "alt", note: "Rabbi Akiva: 'the judgment of the wicked in Gehenna lasts twelve months'. For many rabbis Gehenna was temporary." },
    { k: "Rabbinic", src: "Tosefta Sanhedrin 13:3 (as summarised in the Jewish Encyclopedia, 'Purgatory')", side: "alt", note: "The school of Shammai held that the 'intermediate' go down to Gehenna and rise up purified." },
    { k: "Rabbinic", src: "David Kimhi on Psalm 27:13 (c. 1200)", side: "ctx", note: "The popular idea of Gehenna as a burning rubbish dump comes from this medieval commentator. Scholars (Strack-Billerbeck, Beasley-Murray) find no earlier literary or archaeological evidence for it, so it should not be used as an argument." }
  ],
  verdict: "Gehenna had a double meaning in Jesus' day: a real valley tied to Jeremiah's prophecies of national judgment, and a developing Jewish image of post-mortem punishment, often temporary in rabbinic thought. Its duration is not settled by the word. The 'garbage dump' explanation is unsupported and best dropped." },

{ w: "Sheol", s: "שְׁאוֹל", lang: "Hebrew", topic: "hell", gloss: "the grave, the underworld of all the dead",
  root: "Etymology uncertain (perhaps 'place of asking' or 'hollow place'). Occurs about 65 times.",
  trad: "Sometimes the place of the wicked's punishment; the KJV renders it 'hell' 31 times.",
  alt: "The common destination of all the dead, righteous and wicked, without torment.",
  ev: [
    { k: "Hebrew Bible", src: "Genesis 37:35; Psalm 89:48; Ecclesiastes 9:10", side: "alt", note: "Righteous Jacob expects to go to Sheol. 'What man can live and never see death? Who can deliver his soul from the power of Sheol?'" },
    { k: "Hebrew Bible", src: "Psalm 139:8; 1 Samuel 2:6; Hosea 13:14", side: "alt", note: "God is present in Sheol, brings down to it and raises up from it, and will ransom from it." },
    { k: "Lexicon", src: "KJV translation statistics; BDB, HALOT", side: "ctx", note: "The KJV translated Sheol as 'hell' 31 times, 'grave' 31 times and 'pit' 3 times — the same word, chosen by the translators' theology. Modern versions usually keep 'Sheol'." }
  ],
  verdict: "There is broad scholarly agreement that Sheol is the shadowy realm of all the dead, not a place of torment. Translating it 'hell' imported later ideas." },

{ w: "Hades", s: "ᾅδης", lang: "Greek", topic: "hell", gloss: "the underworld",
  root: "The name of the Greek god of the underworld and his realm, 'the unseen place'.",
  trad: "The intermediate state; for the wicked a place of torment (Luke 16).",
  alt: "The Septuagint's translation of Sheol — a borrowed Greek mythic term for the realm of the dead, which Christ conquers and which ends.",
  ev: [
    { k: "Classical Greek", src: "Homer, Odyssey 11; Iliad 23", side: "ctx", note: "In Homer, Hades is a gloomy realm of shades, mostly without punishment except for a few notorious figures." },
    { k: "Septuagint", src: "Translation of Sheol in Genesis 37:35, Psalm 16:10 and elsewhere", side: "alt", note: "Greek-speaking Jews used Hades as the equivalent of Sheol, so its New Testament use carries Sheol's meaning (Acts 2:27 quotes Ps 16:10)." },
    { k: "New Testament", src: "Matthew 16:18; Revelation 1:18; 20:13-14", side: "alt", note: "Hades' gates will not prevail; Christ holds its keys; Hades gives up its dead and is thrown into the lake of fire." },
    { k: "New Testament", src: "Luke 16:23", side: "trad", note: "The rich man is 'in torment' in Hades — the main text for conscious punishment before the final judgment." }
  ],
  verdict: "Hades is mainly the realm of the dead, as Sheol. Luke 16 is the one text showing torment there, and whether it describes the afterlife literally depends on how one reads the parable." },

{ w: "tartaroō", s: "ταρταρόω", lang: "Greek", topic: "hell", gloss: "to confine in Tartarus",
  root: "From Tartaros, in Greek myth the deepest pit below Hades.",
  trad: "Rendered 'cast down to hell'; shows hell is a real place of confinement.",
  alt: "Peter borrows a pagan mythic image for fallen angels awaiting judgment — not humans, and not final.",
  ev: [
    { k: "Classical Greek", src: "Hesiod, Theogony 713-735", side: "ctx", note: "Zeus imprisons the rebel Titans in Tartarus, as far below the earth as heaven is above it." },
    { k: "Septuagint", src: "Job 40:20; 41:24 (LXX)", side: "ctx", note: "The Greek Old Testament already uses 'Tartarus' for the depths." },
    { k: "Second Temple", src: "1 Enoch 20:2 (Greek)", side: "ctx", note: "The angel Uriel is set over 'Tartarus', the prison of the Watchers — the same tradition 2 Peter and Jude draw on." },
    { k: "New Testament", src: "2 Peter 2:4; Jude 6", side: "alt", note: "Used once, for angels 'kept until the judgment' — a holding place, not the final state." }
  ],
  verdict: "A clear case of Jewish and Christian writers using Greek mythic vocabulary. It concerns fallen angels before judgment and says little about the final fate of humans." },

{ w: "apollumi / olethros", s: "ἀπόλλυμι / ὄλεθρος", lang: "Greek", topic: "hell", gloss: "destroy, perish, lose / ruin, destruction",
  root: "Apo + ollumi ('destroy'): to destroy utterly, or to lose. Olethros from the same root: ruin, death.",
  trad: "To be ruined or lost, not to cease to exist; eternal destruction is endless ruin.",
  alt: "Conditionalists: the plain sense is destroy or kill. Universalists: what is lost is lost in order to be found.",
  ev: [
    { k: "New Testament", src: "Matthew 2:13; 12:14; 10:28", side: "alt", note: "Herod seeks to 'destroy' (kill) the child; the Pharisees plot to 'destroy' Jesus; God can 'destroy' soul and body. Conditionalists read 'kill' literally." },
    { k: "New Testament", src: "Luke 15:4-9, 24, 32", side: "alt", note: "The 'lost' (apolōlos) sheep, coin and son still exist and are found: 'he was lost and is found'. Universalists see a pattern." },
    { k: "New Testament", src: "1 Corinthians 5:5", side: "alt", note: "Paul hands a man over 'for the olethros of the flesh, so that his spirit may be saved' — destruction aimed at salvation." },
    { k: "Second Temple", src: "4 Maccabees 10:15", side: "trad", note: "'The aiōnios olethros of the tyrant' — the same phrase as 2 Thessalonians 1:9 in a Jewish martyr text that also speaks of endless torment." },
    { k: "Lexicon", src: "BDAG, ἀπόλλυμι", side: "ctx", note: "Lists both 'ruin, destroy, kill' and 'lose'; the sense must be chosen from context." }
  ],
  verdict: "All three views can find support. The words' everyday meaning is death and destruction, which favours conditionalism; the 'lost and found' usage gives universalists a real pattern; and traditionalists can point to 4 Maccabees for 'eternal destruction' alongside eternal torment." },

{ w: "basanos", s: "βάσανος (verb βασανίζω)", lang: "Greek", topic: "hell", gloss: "touchstone; testing; torture, torment",
  root: "Originally a touchstone: a dark stone on which gold was rubbed to test its purity. Then 'test', then 'interrogation under torture', then 'torment'.",
  trad: "Revelation 14:10-11 and 20:10 describe torment — conscious pain without relief.",
  alt: "The root image is testing for purity. Torment 'in the presence of the Lamb' is the refining that proves and purifies.",
  ev: [
    { k: "Lexicon", src: "LSJ, βάσανος", side: "alt", note: "First meaning: 'touchstone', the testing stone for gold (Theognis, Pindar); then 'test', 'inquiry by torture'." },
    { k: "Septuagint", src: "Wisdom 3:1-6", side: "ctx", note: "'Like gold in the furnace he tried them' — the testing image applied to the righteous." },
    { k: "New Testament", src: "Matthew 4:24; 8:6; 14:24", side: "trad", note: "In the Gospels the word means severe pain or distress (the paralysed servant 'terribly tormented'; waves 'tormenting' the boat). By then the sense 'torment' was standard." },
    { k: "Second Temple", src: "4 Maccabees 9:9; 12:12", side: "trad", note: "Used for the tyrant's eternal torment." }
  ],
  verdict: "The etymology is genuinely about testing, but in first-century usage basanos usually just means torment. The 'touchstone' argument is suggestive, not decisive." },

{ w: "theion", s: "θεῖον", lang: "Greek", topic: "hell", gloss: "sulphur, brimstone",
  root: "Spelled like the adjective theios, 'divine'; ancient writers connected sulphur with the gods and with purification.",
  trad: "Fire and brimstone: the destruction of Sodom and the lake of fire.",
  alt: "Sulphur was used in the ancient world to purify and disinfect; 'fire and sulphur' can picture divine purging.",
  ev: [
    { k: "Classical Greek", src: "Homer, Odyssey 22.481-494", side: "alt", note: "After killing the suitors, Odysseus calls for sulphur and fire to purify (fumigate) his hall." },
    { k: "Hebrew Bible", src: "Genesis 19:24; Psalm 11:6; Ezekiel 38:22", side: "trad", note: "Fire and sulphur as God's destroying judgment on Sodom, the wicked and Gog." },
    { k: "Scholarship", src: "Robin Parry (Gregory MacDonald), The Evangelical Universalist (2006)", side: "alt", note: "Uses the purification associations to read Revelation's lake of fire as corrective." }
  ],
  verdict: "The biblical background (Sodom) points to destructive judgment. The purification sense is real in Greek culture but secondary in the biblical texts." },

{ w: "apokatastasis", s: "ἀποκατάστασις", lang: "Greek", topic: "hell", gloss: "restoration, return to a former state",
  root: "Apo + kathistēmi: to set back again, restore.",
  trad: "Acts 3:21 is the restoration of creation or of Israel, not of every person; the term later came to mean Origenism.",
  alt: "'The restoration of all things' (Acts 3:21) became the fathers' word for God's final restoration of every creature.",
  ev: [
    { k: "Classical Greek", src: "Stoic cosmology", side: "ctx", note: "Stoics used apokatastasis for the return of the heavenly bodies to their starting positions, and the cyclic renewal of the world." },
    { k: "Septuagint", src: "Malachi 3:23 (4:6); Jeremiah 16:15", side: "alt", note: "The verb is used of Elijah 'restoring' hearts and God 'restoring' Israel to its land." },
    { k: "New Testament", src: "Acts 3:21; Matthew 17:11", side: "alt", note: "'Until the time for the restoration (apokatastasis) of all things which God spoke through his holy prophets.'" },
    { k: "Church Fathers", src: "Origen, On First Principles 1.6; Gregory of Nyssa, On the Soul and the Resurrection", side: "alt", note: "Both use the word for the final restoration of all rational beings to God." },
    { k: "Scholarship", src: "Ilaria Ramelli, The Christian Doctrine of Apokatastasis (Brill, 2013)", side: "alt", note: "Traces the doctrine through the first Christian millennium." },
    { k: "Scholarship", src: "Michael McClymond, review in Theological Studies (2015); The Devil's Redemption (2018)", side: "trad", note: "Argues Ramelli overstates the number of universalists and that Acts 3:21 does not teach universal salvation." }
  ],
  verdict: "The word is biblical, but whether 'all things' in Acts 3:21 includes every person is an interpretive step. Its later universalist use is well attested in Origen and Gregory of Nyssa." },

/* ---------------- ATONEMENT ---------------- */
{ w: "hilastērion", s: "ἱλαστήριον", lang: "Greek", topic: "psa", gloss: "mercy seat; place or means of atonement; propitiatory offering",
  root: "From hilaskomai, 'to make gracious, propitiate, expiate'. The -tērion ending marks a place or object.",
  trad: "Propitiation: a sacrifice that turns away God's wrath.",
  alt: "The mercy seat: the gold lid of the ark where God met Israel and where blood cleansed the sanctuary.",
  ev: [
    { k: "Septuagint", src: "Exodus 25:17-22; Leviticus 16:2, 13-15", side: "alt", note: "The Septuagint uses hilastērion about 20 times for the kapporet, the lid of the ark — 'there I will meet with you'. This is its dominant biblical sense." },
    { k: "New Testament", src: "Hebrews 9:5", side: "alt", note: "The only other New Testament use: 'the cherubim of glory overshadowing the hilastērion' — clearly the mercy seat." },
    { k: "Second Temple", src: "Philo, Life of Moses 2.95; On the Cherubim 25", side: "alt", note: "Philo, a contemporary of Paul, calls the lid of the ark the hilastērion." },
    { k: "Second Temple", src: "4 Maccabees 17:22", side: "trad", note: "The martyrs' deaths are a 'hilastērion death' through which 'divine providence preserved Israel' — a death that turned away judgment, the nearest parallel to a propitiatory sense." },
    { k: "Classical Greek", src: "Dio Chrysostom, Oration 11.121; Josephus, Antiquities 16.182", side: "trad", note: "In Greek usage a hilastērion could be a votive monument or offering given to win a god's favour. Lexicons note the Dio passage refers to a monument dedicated to Athena." },
    { k: "Scholarship", src: "C. H. Dodd, Journal of Theological Studies (1931); The Bible and the Greeks (1935)", side: "alt", note: "Argued that in the Greek Bible the hilaskomai word-group means expiation (removing sin), not propitiation (appeasing God)." },
    { k: "Scholarship", src: "Leon Morris, The Apostolic Preaching of the Cross (1955)", side: "trad", note: "Replied that wrath is present in the context (Rom 1:18-3:20) and that the word-group keeps a propitiatory element." },
    { k: "Scholarship", src: "Daniel P. Bailey, Jesus as the Mercy Seat (Cambridge PhD, 1999)", side: "alt", note: "Shows hilastērion never designates a sacrificial victim in Greek, so 'sacrifice of atonement' lacks support; Romans 3:25 presents Christ as the new mercy seat." },
    { k: "Lexicon", src: "English 'mercy seat': William Tyndale (1530), following Luther's 'Gnadenstuhl'", side: "ctx", note: "The English term itself is a Reformation translation choice." }
  ],
  verdict: "The strongest evidence (Septuagint, Hebrews 9:5, Philo) supports 'mercy seat' — the place where God himself provides cleansing. Greek usage and 4 Maccabees show a propitiatory sense also existed. Many scholars now hold that Romans 3:25 means 'mercy seat' and that it involves both cleansing of sin and the averting of judgment." },

{ w: "hilaskomai / hilasmos", s: "ἱλάσκομαι / ἱλασμός", lang: "Greek", topic: "psa", gloss: "to be merciful, make atonement / atoning, expiation, propitiation",
  root: "In pagan Greek: to appease or win the favour of a god. In the Septuagint it translates the Hebrew kipper and salach (forgive).",
  trad: "To propitiate — to satisfy God's wrath (1 John 2:2; 4:10: 'propitiation for our sins').",
  alt: "In the Bible God is the subject who forgives and cleanses; humans do not appease him.",
  ev: [
    { k: "Classical Greek", src: "Homer, Iliad 1.100, 1.147", side: "trad", note: "The Greeks seek to 'propitiate' (hilaskomai) Apollo to stop the plague — the pagan sense of appeasing an angry god." },
    { k: "Septuagint", src: "Psalm 78:38 (77:38 LXX); Psalm 79:9 (78:9 LXX)", side: "alt", note: "'He, being compassionate, atoned for (hilasetai) their iniquity' — God is the one who atones, i.e. forgives and covers sin." },
    { k: "New Testament", src: "Luke 18:13", side: "alt", note: "The tax collector prays 'God, be merciful (hilasthēti) to me, a sinner' — the verb means 'be merciful'." },
    { k: "New Testament", src: "1 John 4:10", side: "alt", note: "'Not that we loved God but that he loved us and sent his Son to be the hilasmos for our sins' — God's love is the source, not the object, of the atonement." },
    { k: "Hebrew Bible", src: "Numbers 16:46-48", side: "trad", note: "Aaron 'makes atonement' and the wrath-plague stops — atonement here does avert wrath." }
  ],
  verdict: "The Bible transforms a word that in paganism meant appeasing a god: God is the one who provides atonement. But the averting of wrath is not entirely absent (Numbers 16). 'Atoning sacrifice' captures both sides." },

{ w: "kipper / kapporet", s: "כִּפֶּר / כַּפֹּרֶת", lang: "Hebrew", topic: "psa", gloss: "to make atonement, purge, cover, ransom / the atonement lid (mercy seat)",
  root: "Debated: Arabic kafara ('cover') or Akkadian kuppuru ('wipe off, cleanse', used in Mesopotamian purification rituals). Related to kopher, 'ransom'.",
  trad: "To cover sin by a substitutionary payment (kopher, ransom) that satisfies God.",
  alt: "To purge or cleanse impurity, including from objects — which cannot be propitiated.",
  ev: [
    { k: "Hebrew Bible", src: "Leviticus 16:16-20, 33", side: "alt", note: "The priest makes atonement 'for the holy place', 'the tent' and 'the altar' — objects are cleansed. Atonement here is purification, not appeasing anger." },
    { k: "Hebrew Bible", src: "Deuteronomy 21:8; Psalm 65:3; 78:38", side: "alt", note: "God is the subject of kipper: 'Atone (kapper), O LORD, for your people Israel'; 'you atone for our transgressions'." },
    { k: "Hebrew Bible", src: "Genesis 32:20", side: "trad", note: "Jacob plans to 'appease (akapperah) his face' with a gift before meeting Esau — kipper in the sense of pacifying an offended person." },
    { k: "Hebrew Bible", src: "Exodus 30:12-16; Numbers 35:31", side: "trad", note: "Kopher is a ransom price paid for a life." },
    { k: "Scholarship", src: "Jacob Milgrom, Leviticus 1-16 (Anchor Bible, 1991)", side: "alt", note: "Argues the core of kipper in the priestly texts is purging the sanctuary of the pollution caused by sin." },
    { k: "Scholarship", src: "Jay Sklar, Sin, Impurity, Sacrifice, Atonement (2005)", side: "both", note: "Argues kipper combines ransom (kopher) and purification: it rescues the guilty and cleanses the defiled." }
  ],
  verdict: "Kipper covers purification, ransom and, occasionally, appeasement. The dominant priestly sense is cleansing, with God as the one who provides it; ransom is also present. Pure 'propitiation of wrath' is a minor strand." },

{ w: "ḥaṭṭaʾt", s: "חַטָּאת", lang: "Hebrew", topic: "psa", gloss: "sin; sin offering; purification offering",
  root: "From ḥaṭa', 'to miss, sin'; in the piel stem 'to un-sin', i.e. to purify (Psalm 51:7, 'purge me').",
  trad: "The sin offering: the animal dies in the sinner's place, bearing the penalty.",
  alt: "The 'purification offering' cleanses the sanctuary; it is required even where no sin was committed.",
  ev: [
    { k: "Hebrew Bible", src: "Leviticus 12:6-8", side: "alt", note: "A mother brings a ḥaṭṭa't after childbirth — not a sin. The offering purifies, it does not punish." },
    { k: "Hebrew Bible", src: "Leviticus 5:11-13", side: "alt", note: "A poor person may offer flour as a ḥaṭṭa't, and 'he shall be forgiven' — a bloodless offering cannot be a penal death." },
    { k: "Septuagint", src: "Leviticus 4:24; 5:12 (peri hamartias, 'for sin')", side: "ctx", note: "The Greek phrase used for the sin offering reappears in Romans 8:3 and Hebrews 10:6-8 — background for '2 Corinthians 5:21: he made him to be sin (offering)'." },
    { k: "Scholarship", src: "Jacob Milgrom, 'Sin-Offering or Purification-Offering?', Vetus Testamentum 21 (1971)", side: "alt", note: "The classic argument for translating 'purification offering'." }
  ],
  verdict: "There is strong evidence that the ḥaṭṭa't purifies rather than punishes, and many modern translations note 'purification offering'. This weakens a penal reading of the sacrificial system, though it does not by itself rule out substitution." },

{ w: "lytron / apolytrōsis", s: "λύτρον / ἀπολύτρωσις", lang: "Greek", topic: "psa", gloss: "ransom price / release, redemption",
  root: "From lyō, 'to loose, release'. A lytron is the price for releasing a prisoner or slave.",
  trad: "Christ paid the ransom price to God's justice to release us from its penalty.",
  alt: "The emphasis is liberation. In the Exodus God 'redeems' Israel without paying Pharaoh anything.",
  ev: [
    { k: "Papyri & inscriptions", src: "Delphic manumission inscriptions (c. 200 BC – AD 100)", side: "ctx", note: "Over 1,000 inscriptions record slaves freed through a fictive sale to the god Apollo — background for Paul's 'you were bought with a price' (1 Cor 6:20). Deissmann, Light from the Ancient East (1910), drew the parallel." },
    { k: "Septuagint", src: "Exodus 6:6; Deuteronomy 7:8; Isaiah 52:3", side: "alt", note: "'I will redeem (lytrōsomai) you with an outstretched arm' — God frees Israel by power. 'You were sold for nothing, and you shall be redeemed without money.'" },
    { k: "New Testament", src: "Mark 10:45; 1 Peter 1:18-19", side: "trad", note: "'A ransom for many'; 'ransomed… with the precious blood of Christ' — a costly price is clearly in view." },
    { k: "Church Fathers", src: "Gregory of Nazianzus, Oration 45.22", side: "alt", note: "Asks to whom the ransom was paid: not to the devil (outrageous) and not to the Father, who did not demand it. Concludes the image must not be pressed." },
    { k: "Church Fathers", src: "Origen, Commentary on Matthew 16.8; Gregory of Nyssa, Great Catechism 22-24", side: "alt", note: "The ransom paid to the devil, who was deceived like a fish by a baited hook — the classic ransom/Christus Victor image." }
  ],
  verdict: "Ransom language stresses costly liberation. Scripture never says to whom it was paid; the fathers who asked rejected the idea that it was paid to the Father. It fits Christus Victor at least as naturally as penal substitution." },

{ w: "katallassō", s: "καταλλάσσω", lang: "Greek", topic: "psa", gloss: "to reconcile; to change enmity into friendship",
  root: "Kata + allassō, 'to change, exchange'. Used in Greek of reconciling estranged spouses, political enemies and parties in war.",
  trad: "God is reconciled to us when his wrath is satisfied.",
  alt: "In Paul, God always reconciles us and the world to himself; God is never the one who needs reconciling.",
  ev: [
    { k: "Second Temple", src: "2 Maccabees 1:5; 5:20; 7:33; 8:29", side: "trad", note: "In 2 Maccabees God is 'reconciled to his servants' — God is the one who changes from anger to favour. This was a live Jewish usage." },
    { k: "New Testament", src: "Romans 5:10; 2 Corinthians 5:18-20; Colossians 1:20-22", side: "alt", note: "Paul reverses it: 'we were reconciled to God', 'God… reconciled us to himself', 'be reconciled to God'. Humans are always the ones reconciled." },
    { k: "New Testament", src: "1 Corinthians 7:11", side: "ctx", note: "The everyday sense: a separated wife 'reconciled to her husband'." },
    { k: "Scholarship", src: "Stanley E. Porter, Katallassō in Ancient Greek Literature (1994)", side: "alt", note: "Shows Paul is the first known writer to make the offended party (God) the one who initiates reconciliation." }
  ],
  verdict: "This is one of the strongest lexical points for the relational view: Paul deliberately departs from the Jewish pattern of God being reconciled, and makes God the initiator who reconciles the world." },

{ w: "aphesis", s: "ἄφεσις", lang: "Greek", topic: "psa", gloss: "release, forgiveness, remission",
  root: "From aphiēmi, 'to send away, let go, release'.",
  trad: "Forgiveness of sins, possible because the penalty has been paid.",
  alt: "The Jubilee word: release of debts and slaves without payment. Forgiveness is cancelling, not collecting.",
  ev: [
    { k: "Septuagint", src: "Leviticus 25:10; Deuteronomy 15:1-3", side: "alt", note: "The Jubilee is the 'year of aphesis': liberty proclaimed, debts released, land returned — no repayment required." },
    { k: "Septuagint", src: "Isaiah 61:1; 58:6", side: "alt", note: "'To proclaim aphesis to the captives… to send the oppressed away in aphesis.'" },
    { k: "New Testament", src: "Luke 4:18-19", side: "alt", note: "Jesus' manifesto uses aphesis twice, announcing 'the year of the Lord's favour' — the Jubilee." },
    { k: "New Testament", src: "Matthew 18:27; 26:28", side: "ctx", note: "The king 'released (apheken)' the debt; Jesus' blood is poured out 'for the aphesis of sins'." }
  ],
  verdict: "Aphesis consistently means release by cancellation. Forgiveness in this vocabulary is a free release, which sits uneasily with a strictly payment-based model of the cross." },

{ w: "orgē", s: "ὀργή", lang: "Greek", topic: "psa", gloss: "wrath, anger",
  root: "Originally 'impulse, disposition', then 'anger'.",
  trad: "God's personal, holy anger against sin, which must be satisfied (Rom 1:18; 2:5).",
  alt: "God's wrath is his 'handing over' of people to the consequences of their choices, aimed at restoration.",
  ev: [
    { k: "New Testament", src: "Romans 1:18, 24, 26, 28", side: "alt", note: "Paul defines the present revelation of wrath three times as God 'gave them up' (paredōken) to their desires." },
    { k: "Hebrew Bible", src: "Psalm 81:11-12; Hosea 11:8-9", side: "alt", note: "'So I gave them over to their stubborn hearts.' 'My compassion grows warm… I will not execute my burning anger.'" },
    { k: "New Testament", src: "Romans 2:5; 2:8; John 3:36", side: "trad", note: "A future 'day of wrath' and wrath that 'remains' on those who do not obey — wrath is also personal and eschatological." },
    { k: "Scholarship", src: "A. T. Hanson, The Wrath of the Lamb (1957); C. H. Dodd, Romans (1932)", side: "alt", note: "Argued wrath in Paul is an impersonal process of cause and effect." },
    { k: "Scholarship", src: "Leon Morris; Stephen Travis, Christ and the Judgement of God (2009)", side: "both", note: "Morris defends personal wrath; Travis argues for wrath as relational consequence while keeping it personal." }
  ],
  verdict: "Wrath is real and personal in the Bible, but Paul's own description of its present working is 'handing over'. Whether wrath must be 'satisfied' is a theological inference, not something the word itself says." },

{ w: "ḥesed / eleos", s: "חֶסֶד / ἔλεος", lang: "Hebrew & Greek", topic: "psa", gloss: "steadfast love, covenant loyalty, mercy",
  root: "Ḥesed: loyal, generous love within a covenant relationship. The Septuagint usually translates it eleos (mercy).",
  trad: "God's mercy is shown in providing a substitute to satisfy justice.",
  alt: "God's character is defined by ḥesed: he forgives freely and desires mercy, not sacrifice.",
  ev: [
    { k: "Hebrew Bible", src: "Exodus 34:6-7", side: "both", note: "God's self-description: 'abounding in ḥesed… forgiving iniquity… yet by no means clearing the guilty'. Both sides claim this text." },
    { k: "Hebrew Bible", src: "Hosea 6:6; Micah 6:6-8", side: "alt", note: "'I desire ḥesed, not sacrifice' — quoted by Jesus twice (Matt 9:13; 12:7)." },
    { k: "Hebrew Bible", src: "Psalm 136", side: "ctx", note: "'His ḥesed endures forever' 26 times — covenant loyalty as the constant of God's nature." },
    { k: "Scholarship", src: "Nelson Glueck, Ḥesed in the Bible (1927); Katharine Sakenfeld, The Meaning of Hesed (1978)", side: "ctx", note: "Classic studies defining ḥesed as committed loyal love within relationship, going beyond obligation." }
  ],
  verdict: "Ḥesed places relationship and loyal love at the centre of God's character, which supports relational readings. Exodus 34:7 also keeps justice in view." },

/* ---------------- JUSTIFICATION & FAITH ---------------- */
{ w: "dikaioō", s: "δικαιόω", lang: "Greek", topic: "reformation", gloss: "to justify, declare righteous, vindicate, set free",
  root: "From dikaios, 'just'. In classical Greek: 'to deem right', and even 'to do justice to', i.e. sentence (LSJ). In the Septuagint it translates the Hebrew hitsdiq, 'to declare in the right'.",
  trad: "A forensic verb: to declare righteous in court, not to make righteous.",
  alt: "Covenant vindication — God declaring who belongs to his people — and liberation from sin's power.",
  ev: [
    { k: "Septuagint", src: "Deuteronomy 25:1; Proverbs 17:15; Isaiah 5:23", side: "trad", note: "Judges must 'justify the righteous and condemn the wicked'. The verb is a verdict, not a transformation — strong support for the forensic sense." },
    { k: "Septuagint", src: "Genesis 38:26", side: "alt", note: "Judah says of Tamar, 'she is more righteous than I' — righteousness as being in the right within a relationship and its obligations." },
    { k: "Dead Sea Scrolls", src: "1QS (Community Rule) 11:2-15", side: "both", note: "'As for me, my justification is with God… through his righteousness he will wipe out my transgression.' Justification by God's righteousness, before Paul. The Hebrew there is mishpat (judgment), as N. T. Wright notes." },
    { k: "New Testament", src: "Romans 6:7", side: "alt", note: "'The one who has died has been justified (dedikaiōtai) from sin' — most translations render 'freed from sin'. Justification includes liberation." },
    { k: "New Testament", src: "Romans 2:13; James 2:21-25", side: "alt", note: "'The doers of the law will be justified'; Abraham and Rahab 'justified by works'." },
    { k: "Scholarship", src: "Ernst Käsemann, 'The Righteousness of God in Paul' (1961); N. T. Wright, Paul and the Faithfulness of God (2013)", side: "alt", note: "Käsemann: God's righteousness is his saving power reclaiming creation. Wright: justification is the covenant verdict that defines God's people." },
    { k: "Scholarship", src: "D. A. Carson et al., Justification and Variegated Nomism (2001, 2004)", side: "trad", note: "Defends the forensic reading and challenges Sanders' picture of Judaism." }
  ],
  verdict: "The forensic (courtroom) sense is solidly attested and is the core meaning. But Paul uses the verb with a wider reach — covenant membership and liberation from sin (Romans 6:7). Both 'declared' and 'set free' belong to the word's biblical range." },

{ w: "tsedaqah / dikaiosynē", s: "צְדָקָה / δικαιοσύνη", lang: "Hebrew & Greek", topic: "reformation", gloss: "righteousness, justice; saving faithfulness",
  root: "Hebrew tsedeq/tsedaqah: rightness, fulfilling the demands of a relationship. The Septuagint usually translates it dikaiosynē.",
  trad: "A moral standard of perfect conformity to God's law, which Christ meets and imputes to believers.",
  alt: "God's righteousness is his faithfulness to his covenant and his saving action to put things right.",
  ev: [
    { k: "Hebrew Bible", src: "Isaiah 46:13; 51:5-8; Psalm 98:2-3", side: "alt", note: "God's righteousness is paired with his salvation: 'I bring near my righteousness… my salvation will not delay'." },
    { k: "Hebrew Bible", src: "Judges 5:11; 1 Samuel 12:7", side: "alt", note: "The 'righteous acts (tsidqot) of the LORD' are his victories that rescued Israel." },
    { k: "Hebrew Bible", src: "Psalm 143:1-2; Daniel 9:16", side: "alt", note: "Psalmists appeal to God's righteousness as the reason he will save them, not condemn them." },
    { k: "New Testament", src: "Romans 3:3-5, 25-26", side: "alt", note: "'The faithfulness of God' and 'the righteousness of God' are used side by side." },
    { k: "New Testament", src: "Philippians 3:9; Romans 5:17", side: "trad", note: "'A righteousness from God' and 'the free gift of righteousness' — a status given to believers." },
    { k: "Lexicon", src: "BDB, צדק; TDOT 'ṣādaq'", side: "ctx", note: "Lexicons note tsedaqah denotes conduct appropriate to a relationship, including saving help." }
  ],
  verdict: "Old Testament usage strongly supports 'covenant faithfulness and saving action' for God's righteousness. Paul also speaks of righteousness as a gift received. Most scholars now see both: God's saving faithfulness that results in a right standing given to believers." },

{ w: "logizomai", s: "λογίζομαι", lang: "Greek", topic: "reformation", gloss: "to count, reckon, credit, consider",
  root: "From logos, 'account'. An accounting term in everyday Greek: to enter in the books, to credit.",
  trad: "To impute: Christ's righteousness is credited to the believer's account.",
  alt: "What Scripture says is counted is faith (or a faithful deed) — not another's merit.",
  ev: [
    { k: "Papyri & inscriptions", src: "Commercial papyri (Moulton-Milligan, Vocabulary of the Greek Testament)", side: "trad", note: "Used for putting a sum to someone's account — supports accounting imagery." },
    { k: "New Testament", src: "Philemon 18 (ellogaō)", side: "trad", note: "Paul: 'if he owes you anything, charge that to my account' — a clear picture of one person's debt being credited to another." },
    { k: "Hebrew Bible", src: "Psalm 106:30-31", side: "alt", note: "Phinehas' zealous act 'was counted to him as righteousness' — the same phrase as Genesis 15:6, here for a deed." },
    { k: "Second Temple", src: "1 Maccabees 2:52", side: "alt", note: "'Was not Abraham found faithful when tested, and it was counted to him as righteousness?' — reading Genesis 15:6 through Abraham's faithfulness in the sacrifice of Isaac (as James 2:21-23 does)." },
    { k: "New Testament", src: "Romans 4:3-5, 22-24", side: "alt", note: "'His faith was counted as righteousness.' No verse says Christ's righteousness is counted to us." },
    { k: "New Testament", src: "Romans 4:6-8 (quoting Psalm 32:2); 2 Corinthians 5:19", side: "trad", note: "'Blessed is the man against whom the Lord will not count sin' — non-imputation of sin." }
  ],
  verdict: "Accounting language is real, and Philemon 18 shows Paul could picture a transfer of debt. But the texts explicitly say faith is counted, and Jewish tradition read Genesis 15:6 alongside faithful deeds. Imputation of Christ's own righteousness is a theological inference rather than a direct statement." },

{ w: "pistis", s: "πίστις / אֱמוּנָה", lang: "Greek & Hebrew", topic: "reformation", gloss: "faith, trust, faithfulness, loyalty, pledge",
  root: "From peithō, 'persuade'. The Hebrew 'emunah (from 'aman, 'firm') means steadiness, reliability, faithfulness.",
  trad: "Trust: the empty hand that receives salvation, distinct from works.",
  alt: "Trust that includes faithfulness and loyalty — allegiance to Jesus as King.",
  ev: [
    { k: "Second Temple", src: "Josephus, Life 110 (as discussed by N. T. Wright, Jesus and the Victory of God)", side: "alt", note: "Josephus tells a rebel leader to 'repent and be loyal (pistos) to me' — the same words as Jesus' 'repent and believe', in a political sense of allegiance." },
    { k: "Septuagint", src: "Habakkuk 2:4 (LXX 'by my faithfulness')", side: "alt", note: "The Hebrew 'emunah means steady faithfulness; the Greek Old Testament reads 'the righteous shall live by my (God's) faithfulness'." },
    { k: "New Testament", src: "Romans 3:3; Galatians 5:22", side: "alt", note: "'The faithfulness (pistis) of God'; faithfulness as a fruit of the Spirit — pistis plainly means faithfulness." },
    { k: "New Testament", src: "Romans 4:20-21; Hebrews 11:1", side: "trad", note: "Faith as full conviction and trust in God's promise." },
    { k: "Scholarship", src: "Teresa Morgan, Roman Faith and Christian Faith (Oxford, 2015)", side: "alt", note: "Shows pistis/fides in the Roman world is primarily a relationship of trust and loyalty that builds community, not a set of beliefs." },
    { k: "Scholarship", src: "Richard Hays, The Faith of Jesus Christ (1983); Matthew Bates, Salvation by Allegiance Alone (2017)", side: "alt", note: "Hays: 'pistis Christou' means Christ's own faithfulness. Bates: saving faith is allegiance to the King." }
  ],
  verdict: "The evidence that pistis includes faithfulness and loyalty is strong. Whether 'pistis Christou' means faith in Christ or Christ's faithfulness is still debated, but a thin 'mental assent' meaning is not supported." },

{ w: "charis", s: "χάρις", lang: "Greek", topic: "reformation", gloss: "grace, favour, gift, gratitude",
  root: "From chairō, 'rejoice'. In the Greco-Roman world the language of benefaction: the gift, the giver's favour, and the recipient's gratitude.",
  trad: "Unmerited favour that requires nothing in return.",
  alt: "Grace is unconditioned (given regardless of worth) but not unconditional: it creates a relationship and expects grateful loyalty.",
  ev: [
    { k: "Classical Greek", src: "Seneca, On Benefits; honorific inscriptions for benefactors", side: "alt", note: "Ancient gift culture: a benefit creates a bond of gratitude and return; the same word charis covers gift and thanks." },
    { k: "New Testament", src: "Romans 5:15-17; Ephesians 2:8-9", side: "trad", note: "Grace as free gift, 'not a result of works'." },
    { k: "New Testament", src: "Titus 2:11-12; Romans 12:1", side: "alt", note: "Grace 'trains us to renounce ungodliness'; 'by the mercies of God, present your bodies' — grace calls for a response." },
    { k: "Scholarship", src: "John M. G. Barclay, Paul and the Gift (2015); J. R. Harrison, Paul's Language of Grace in Its Graeco-Roman Context (2003)", side: "alt", note: "Barclay shows Paul's grace is 'incongruous' (given to the unworthy) and also transforming, expecting a return." }
  ],
  verdict: "Both sides are right in part. Grace is utterly free in its giving (Reformation), and in its ancient sense it creates a relationship of grateful loyalty (relational view)." },

/* ---------------- ESCHATOLOGY ---------------- */
{ w: "genea", s: "γενεά", lang: "Greek", topic: "futurism", gloss: "generation; people living at one time",
  root: "From ginomai, 'to be born, become'. Distinct from genos, 'race, kind, nation'.",
  trad: "In Matthew 24:34 possibly 'race' (the Jewish people) or 'the generation that sees the signs'.",
  alt: "Jesus' own contemporaries, as in every other use of 'this generation' in the Gospels.",
  ev: [
    { k: "New Testament", src: "Matthew 11:16; 12:39-45; 16:4; 17:17; 23:36", side: "alt", note: "Every other 'this generation' in Matthew means Jesus' hearers. Matthew 23:36: 'all these things will come upon this generation' — the same phrase two chapters earlier." },
    { k: "New Testament", src: "Mark 8:12, 38; Luke 11:29-32, 50-51", side: "alt", note: "Consistently the people of Jesus' day." },
    { k: "New Testament", src: "Acts 7:19; 1 Peter 2:9 (genos)", side: "alt", note: "When the New Testament means 'race' it uses genos." },
    { k: "Lexicon", src: "BDAG, γενεά", side: "ctx", note: "Primary sense: 'those born at the same time, contemporaries'; BDAG also lists a wider sense 'age, period'." },
    { k: "Scholarship", src: "Darrell Bock; some futurist commentators", side: "trad", note: "Argue that 'this generation' could mean the generation that sees the final signs, or carry a moral sense ('this evil kind')." }
  ],
  verdict: "The usage evidence strongly favours 'Jesus' contemporaries'. The futurist alternatives are possible meanings of the word, but unusual in the Gospels." },

{ w: "apantēsis", s: "ἀπάντησις", lang: "Greek", topic: "futurism", gloss: "meeting, going out to meet",
  root: "From apantaō, 'to meet, come face to face'.",
  trad: "The church meets Christ in the air and is taken to heaven (rapture).",
  alt: "The custom of citizens going out to meet an arriving king and escorting him back into the city.",
  ev: [
    { k: "New Testament", src: "Acts 28:15; Matthew 25:6", side: "alt", note: "Believers from Rome come out to meet Paul and return with him; the virgins go out to meet the bridegroom and accompany him in." },
    { k: "Scholarship", src: "Erik Peterson, 'Die Einholung des Kyrios', Zeitschrift für systematische Theologie 7 (1930)", side: "alt", note: "Collected papyri, inscriptions and literature to argue apantēsis was a technical term for the formal civic welcome of a dignitary." },
    { k: "Scholarship", src: "Michael R. Cosby, 'Hellenistic Formal Receptions and Paul's Use of ἀπάντησις in 1 Thessalonians 4:17', Bulletin for Biblical Research 4 (1994)", side: "trad", note: "Argues it was not a technical term, that only a minority of uses describe formal receptions, and that key elements of such receptions are missing in 1 Thessalonians 4." },
    { k: "Scholarship", src: "Joseph Plevnik, Biblica 80 (1999)", side: "trad", note: "Reads the passage as the faithful being brought in to the Lord rather than escorting him to earth." }
  ],
  verdict: "The 'welcoming escort' reading is attractive and fits Acts 28:15, but Cosby has shown it is not a technical term. On its own, the word does not decide whether believers return with Christ to earth; the rest of 1 Thessalonians 4-5 must decide." },

{ w: "parousia", s: "παρουσία", lang: "Greek", topic: "futurism", gloss: "presence, arrival, visit",
  root: "Para + ousia: 'being present'. In Hellenistic usage the official visit of a king or emperor.",
  trad: "The future, visible second coming of Christ.",
  alt: "A royal arrival or 'visitation' — which can describe Christ's coming in judgment on Jerusalem as well as his final return.",
  ev: [
    { k: "Papyri & inscriptions", src: "Adolf Deissmann, Light from the Ancient East (1910)", side: "ctx", note: "Documents the use of parousia for the visits of kings and emperors, with special taxes, coins and new eras dated from them." },
    { k: "New Testament", src: "1 Corinthians 16:17; 2 Corinthians 7:6; Philippians 1:26", side: "ctx", note: "The 'parousia' of Stephanas, Titus and Paul — simply arrival or presence." },
    { k: "New Testament", src: "Matthew 24:3, 27", side: "alt", note: "The disciples ask about the temple's destruction and 'your parousia' together." },
    { k: "New Testament", src: "1 Corinthians 15:23; 1 Thessalonians 4:15", side: "trad", note: "The parousia is linked to the resurrection of the dead — clearly a future final event." }
  ],
  verdict: "The word means a royal arrival. The New Testament uses it most often for the final return linked to resurrection. Partial preterists argue Matthew 24:27 is a judgment-visit in AD 70; that is a contextual, not a lexical, argument." },

/* ---------------- SANCTIFICATION ---------------- */
{ w: "teleios", s: "τέλειος / תָּמִים", lang: "Greek & Hebrew", topic: "holiness", gloss: "complete, mature, whole, perfect",
  root: "From telos, 'end, goal': having reached its goal. The Hebrew tamim means whole, sound, without blemish.",
  trad: "Holiness movement: the perfection of entire sanctification.",
  alt: "Maturity and wholeness, not flawlessness.",
  ev: [
    { k: "Septuagint", src: "Genesis 6:9; Deuteronomy 18:13", side: "alt", note: "Noah was 'teleios (tamim) in his generation' — yet he got drunk (Gen 9:21). Wholeness of heart, not sinlessness." },
    { k: "Hebrew Bible", src: "Leviticus 22:21", side: "ctx", note: "Tamim describes a sacrificial animal 'without blemish' — sound and whole." },
    { k: "New Testament", src: "1 Corinthians 14:20; Hebrews 5:14; Ephesians 4:13", side: "alt", note: "'In your thinking be teleioi' — mature adults, as opposed to children." },
    { k: "New Testament", src: "Philippians 3:12, 15", side: "alt", note: "Paul is not yet perfected (teteleiōmai) but calls some teleioi — mature." },
    { k: "Classical Greek", src: "Stoic ethics: the teleios sophos (perfect sage)", side: "ctx", note: "Stoics spoke of a perfect wise man without passions; Clement of Alexandria's 'perfect gnostic' echoes this." }
  ],
  verdict: "The evidence strongly supports 'mature/whole'. Wesley himself defined Christian perfection as perfect love, not sinlessness, which fits this sense." },

{ w: "hagiazō", s: "ἁγιάζω / קָדַשׁ", lang: "Greek & Hebrew", topic: "progressive", gloss: "to make holy, consecrate, set apart",
  root: "Hebrew qadash: to be set apart, belong to God. Holiness is first a matter of belonging, then of character.",
  trad: "Mainly the lifelong process of growing in moral holiness.",
  alt: "First a definitive act of setting apart to God, then a life that grows into that holiness.",
  ev: [
    { k: "Hebrew Bible", src: "Exodus 29:37; 40:9-11", side: "alt", note: "The altar, the tent and its utensils are 'sanctified' — objects, so holiness here means consecrated to God, not moral improvement." },
    { k: "New Testament", src: "1 Corinthians 7:14; Matthew 23:17-19", side: "alt", note: "An unbelieving spouse is 'sanctified' by the believer; the temple 'sanctifies' the gold — a status of belonging." },
    { k: "New Testament", src: "John 17:19", side: "alt", note: "Jesus says 'I sanctify myself' — the sinless one consecrates himself to his mission." },
    { k: "New Testament", src: "1 Corinthians 6:11; Hebrews 10:10, 14", side: "alt", note: "Past-tense, once-for-all sanctification." },
    { k: "New Testament", src: "1 Thessalonians 4:3-7; 2 Corinthians 7:1", side: "trad", note: "Sanctification as an ongoing moral process: 'this is God's will, your sanctification: abstain from sexual immorality'." }
  ],
  verdict: "Both senses are biblical. Holiness begins as belonging (definitive) and grows in character (progressive). Reformed theology (John Murray) and Wesleyans both accept this; the dispute is over emphasis." },

/* ---------------- PROVIDENCE ---------------- */
{ w: "raʿ / raʿah", s: "רַע / רָעָה", lang: "Hebrew", topic: "sovereignty", gloss: "bad, evil, harm, disaster",
  root: "A broad word for anything bad: ugly, harmful, sad, wicked or disastrous.",
  trad: "Isaiah 45:7 'I create evil' (KJV) — God is the source of calamity.",
  alt: "In context ra' is disaster as judgment, often conditional, not moral evil or every tragedy.",
  ev: [
    { k: "Hebrew Bible", src: "Genesis 41:3; Jeremiah 24:2", side: "ctx", note: "Ra' describes 'ugly' cows and 'bad' figs — the word is not inherently moral." },
    { k: "Hebrew Bible", src: "Jeremiah 18:8, 11; Jonah 3:10", side: "alt", note: "God 'plans ra'ah' against a nation and relents when it repents — the disaster is conditional judgment." },
    { k: "Hebrew Bible", src: "Isaiah 45:1-7", side: "alt", note: "The context is Cyrus overthrowing Babylon; ra' stands opposite shalom (peace/well-being) for the exiles." },
    { k: "Lexicon", src: "BDB; HALOT, רַע", side: "ctx", note: "Glosses include 'bad, disagreeable, malignant, distress, misery, injury, calamity, evil'." }
  ],
  verdict: "The evidence supports 'calamity/disaster' in Isaiah 45:7. That is still a strong claim about God's rule over history, but it does not say God authors moral evil or every personal tragedy." },

{ w: "pronoia & heimarmenē", s: "πρόνοια / εἱμαρμένη", lang: "Greek (philosophy)", topic: "sovereignty", gloss: "providence / fate",
  root: "Pronoia: 'forethought'. Heimarmenē: 'that which is allotted', the chain of fate.",
  trad: "Christian providence is personal and purposeful, unlike impersonal fate (Calvin, Institutes 1.16.8).",
  alt: "Meticulous providence re-imports the Stoic all-determining order under Christian names; the early fathers rejected it.",
  ev: [
    { k: "Classical Greek", src: "Chrysippus, as reported in Cicero, On Fate and On the Nature of the Gods", side: "ctx", note: "For the Stoics, providence and fate were two names for the same divine Logos determining every event." },
    { k: "Second Temple", src: "Josephus, Antiquities 13.172; Jewish War 2.162-165", side: "ctx", note: "Josephus contrasts the Essenes (everything by fate), Sadducees (no fate) and Pharisees (some things by fate, some by human choice)." },
    { k: "Second Temple", src: "Wisdom of Solomon 14:3", side: "ctx", note: "'Your providence (pronoia), O Father, steers' — Jewish use of the philosophical term." },
    { k: "Church Fathers", src: "Justin Martyr, First Apology 43-44; Origen, Philocalia 23", side: "alt", note: "Justin: if everything happened by fate, there would be no virtue or vice. Origen argues at length against astrological determinism." }
  ],
  verdict: "The early church clearly rejected Stoic fate. Whether later Augustinian and Reformed providence is a form of it is disputed: Reformed theologians insist God works through, not against, real secondary causes." },

{ w: "helkō", s: "ἕλκω", lang: "Greek", topic: "arminian", gloss: "to draw, drag, pull",
  root: "Physical pulling: to haul, drag, draw a sword or a net.",
  trad: "Arminian: an enabling draw that can be resisted. Calvinist: an effective draw of the elect only.",
  alt: "If the Father's drawing is effective (John 6:44) and Christ draws all (12:32), all will come.",
  ev: [
    { k: "New Testament", src: "John 21:6, 11; Acts 16:19; James 2:6", side: "trad", note: "Hauling a full net; dragging Paul and Silas; dragging the poor into court — forceful, effective pulling (used by Calvinists and universalists)." },
    { k: "Septuagint", src: "Jeremiah 31:3 (38:3 LXX); Song of Songs 1:4", side: "alt", note: "'With steadfast love I have drawn you'; 'draw me after you' — a drawing of love and attraction." },
    { k: "New Testament", src: "John 6:44; 12:32", side: "ctx", note: "'No one can come unless the Father draws him, and I will raise him up'; 'I will draw all people to myself'." }
  ],
  verdict: "Helkō usually means effective drawing, which supports Calvinists and universalists against a resistible reading, while the Septuagint shows it can describe love's attraction rather than force." },

{ w: "sōzō / sōtēria", s: "σῴζω / σωτηρία", lang: "Greek", topic: "evangelical", gloss: "to save, rescue, heal, make whole / salvation",
  root: "From sōs, 'safe, sound'. Rescue from danger, healing from disease, preservation.",
  trad: "Salvation is rescue from eternal punishment by personal faith.",
  alt: "Salvation is whole-person rescue and healing — body, soul, community and creation.",
  ev: [
    { k: "New Testament", src: "Mark 5:34; 10:52; Luke 8:36", side: "alt", note: "'Your faith has saved (sesōken) you' — said at physical healings; the healed demoniac was 'saved'." },
    { k: "New Testament", src: "Matthew 8:25; Acts 27:20, 31", side: "ctx", note: "'Lord, save us, we are perishing!' — rescue from drowning." },
    { k: "New Testament", src: "Romans 5:9; 1 Thessalonians 1:10", side: "trad", note: "'Saved from the wrath' — rescue from judgment is part of the meaning." },
    { k: "Septuagint", src: "Translation of Hebrew yasha' (Exodus 14:30)", side: "alt", note: "'The LORD saved Israel that day from the hand of the Egyptians' — salvation as historical liberation." }
  ],
  verdict: "The word's range is wide: rescue, healing and deliverance from judgment. A purely 'go to heaven' meaning is too narrow for the evidence." }
];

/* Reference library for checking the word studies yourself. */
TC.wordLibrary = [
  { t: "LSJ — Liddell-Scott-Jones Greek Lexicon (Perseus)", u: "https://www.perseus.tufts.edu/hopper/resolveform?lang=greek", d: "The standard classical Greek dictionary." },
  { t: "Thayer's Greek Lexicon: κόλασις", u: "https://biblehub.com/thayers/2851.htm", d: "Cites Aristotle and Plato on kolasis vs. timōria." },
  { t: "Trench, Synonyms of the New Testament §7 (punishment)", u: "https://modernliteralversion.org/bibles/bs2/W/Trench-7.htm", d: "Classic 19th-century study of near-synonyms." },
  { t: "Ramelli & Konstan, Terms for Eternity (Gorgias Press)", u: "https://www.gorgiaspress.com/terms-for-eternity-aionios-and-aidios-in-classical-and-christian-texts", d: "The main study of aiōnios and aïdios." },
  { t: "BMCR review of Terms for Eternity", u: "https://bmcr.brynmawr.edu/?p=26380", d: "Independent classical review." },
  { t: "Bailey, Jesus as the Mercy Seat (Cambridge repository)", u: "https://www.repository.cam.ac.uk/handle/1810/251694", d: "Doctoral study of hilastērion." },
  { t: "Thayer's Greek Lexicon: ἱλαστήριον", u: "https://biblehub.com/greek/2435.htm", d: "Lists Septuagint, 4 Maccabees and Dio Chrysostom uses." },
  { t: "Cosby, 'Hellenistic Formal Receptions and Paul's Use of ἀπάντησις' (BBR 1994)", u: "https://www.galaxie.com/article/bbr04-1-02", d: "Critique of the 'technical term' view of apantēsis." },
  { t: "Mishnah Eduyot 2:10 and early Jewish texts on the afterlife (Posen Library)", u: "https://www.posenlibrary.com/node/11871", d: "Primary texts on Gehenna's twelve months." },
  { t: "Jewish Encyclopedia, 'Purgatory'", u: "https://www.jewishencyclopedia.com/articles/12446-purgatory", d: "Rabbinic views of Gehenna as purifying (Tosefta Sanhedrin 13:3)." },
  { t: "Todd Bolen on the Gehenna 'garbage dump' myth (BiblePlaces)", u: "https://www.bibleplaces.com/?p=12853", d: "Traces the idea to David Kimhi (c. 1200)." },
  { t: "1QS Community Rule, column 11 (University of Pennsylvania)", u: "https://ccat.sas.upenn.edu/gopher/other/courses/rels/225/Texts/1QS", d: "Qumran's 'my justification is with God'." },
  { t: "Teresa Morgan, Roman Faith and Christian Faith (BMCR review)", u: "https://bmcr.brynmawr.edu/?p=31225", d: "Pistis as relationship and loyalty." },
  { t: "Delphic manumission inscriptions", u: "https://en.wikipedia.org/wiki/Manumission_inscriptions_at_Delphi", d: "Background to ransom and redemption language." },
  { t: "Deissmann, Light from the Ancient East", u: "https://en.wikipedia.org/wiki/Gustav_Adolf_Deissmann", d: "Papyri and inscriptions illuminating New Testament words." },
  { t: "Clement of Alexandria, Stromata (Logos Library)", u: "https://logoslibrary.org/clement/stromata/424.html", d: "Clement on corrective punishment." },
  { t: "Sefaria — Hebrew Bible, Mishnah, Talmud and commentaries", u: "https://www.sefaria.org", d: "Free primary Jewish texts with Hebrew." },
  { t: "Rethinking Hell (conditionalist) — series on kolasis and timōria", u: "https://rethinkinghell.com/es/2025/09/", d: "A critique of the universalist reading of the Aristotle distinction." }
];
