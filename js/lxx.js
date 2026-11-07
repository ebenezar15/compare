/* Hebrew (Masoretic) vs Greek (Septuagint) textual studies.
   diff: the two readings in English with the words that differ in [brackets].
   cause: why the texts differ. nt: which reading the New Testament quotes. */

TC.lxxCauses = {
  consonants: { name: "Same consonants, read differently", desc: "Hebrew was written without vowels until the Masoretes (c. AD 600-1000). The Greek translators sometimes read the same letters as a different word." },
  vorlage: { name: "A different Hebrew text", desc: "The Dead Sea Scrolls show some Septuagint readings come from a Hebrew text that differed from the later standard one." },
  interpretive: { name: "Interpretive translation", desc: "The translator chose a word that interprets or softens the Hebrew." },
  greekcopy: { name: "A change inside the Greek copies", desc: "The Greek translation itself changed as scribes copied it." },
  letters: { name: "Similar-looking letters", desc: "Hebrew letters such as d (ד) and r (ר) look alike, and a scribe or translator could read one for the other." }
};

TC.isaiah.id = "isa53";
TC.isaiah.ref = "Isaiah 53:10";
TC.isaiah.cause = "consonants";
TC.isaiah.nt = "Neither quoted directly";
TC.isaiah.topics = ["psa"];
TC.isaiah.diff = { mt: "The LORD willed to [crush] him; he made him [sick]", lxx: "The Lord wills to [cleanse] him from his [wound]" };

TC.lxx = [TC.isaiah,
{ id: "ps40", ref: "Psalm 40:6 (LXX 39:7)", title: "Psalm 40:6: ears or a body?", cause: "greekcopy", nt: "Greek (Hebrews 10:5)", topics: ["psa"],
  intro: "The psalmist says God does not want sacrifices. The Hebrew continues 'ears you have dug for me'; Hebrews 10:5 quotes it as 'a body you have prepared for me' and builds its argument about Christ's self-offering on that wording.",
  diff: { mt: "Sacrifice and offering you did not desire; [ears you have dug] for me", lxx: "Sacrifice and offering you did not desire; [a body you prepared] for me" },
  witnesses: [
    { name: "Masoretic Text", date: "Standard Hebrew", lang: "Hebrew", text: "זֶבַח וּמִנְחָה לֹא חָפַצְתָּ אָזְנַיִם כָּרִיתָ לִּי", rtl: true, tr: "zevaḥ u-minḥah lo ḥaphatsta, 'oznayim karita li", en: "Sacrifice and offering you did not desire; ears you have dug (opened) for me.", side: "trad", note: "An open ear: a listening, obedient servant (compare Isaiah 50:5)." },
    { name: "Septuagint (Rahlfs' critical text)", date: "Old Greek, as reconstructed", lang: "Greek", text: "θυσίαν καὶ προσφορὰν οὐκ ἠθέλησας, ὠτία δὲ κατηρτίσω μοι", rtl: false, tr: "ōtia de katērtisō moi", en: "…but ears you prepared for me.", side: "trad", note: "Many scholars think the original Greek also said 'ears'." },
    { name: "Major Septuagint manuscripts and Hebrews 10:5", date: "Codices Vaticanus, Sinaiticus, Alexandrinus (4th–5th c.); Hebrews (1st c.)", lang: "Greek", text: "θυσίαν καὶ προσφορὰν οὐκ ἠθέλησας, σῶμα δὲ κατηρτίσω μοι", rtl: false, tr: "sōma de katērtisō moi", en: "…but a body you prepared for me.", side: "alt", note: "Probably a copying change in Greek: ΗΘΕΛΗΣΑΣ ΩΤΙΑ → ΗΘΕΛΗΣΑΣ ΣΩΜΑ (the final S doubled, and TI read as M)." }
  ],
  how: [ { h: "A copying slip in Greek", t: "Written in capitals without spaces, 'ēthelēsas ōtia' (you desired… ears) could easily become 'ēthelēsas sōma' (…body). Hebrews quotes the form current in its Greek Bible." } ],
  why: [
    { h: "Both readings oppose ritual sacrifice", t: "Hebrew: God wants a listening, obedient person rather than animals. Greek: God prepared a body to do his will. Either way the psalm says God did not desire sacrifice (40:6) but obedience: 'I delight to do your will' (40:8)." },
    { h: "For atonement debates", t: "Hebrews 10:5-10 uses the psalm to say Christ's sacrifice is his embodied obedience: 'by that will we have been sanctified through the offering of the body of Jesus Christ'. Relational and participatory readers stress obedience and self-offering; penal readers stress the body offered in death." }
  ],
  verdict: "The Hebrew 'ears' is original; 'body' is most likely a Greek copying change that Hebrews inherited. The meaning is close: God wants an obedient self rather than animal sacrifice, which Christ supremely gives.",
  links: [ { t: "Brenton's Septuagint, Psalm 39", u: "https://biblehub.com/sep/psalms/39.htm" }, { t: "Hebrews 10:5 (Greek interlinear)", u: "https://biblehub.com/interlinear/hebrews/10-5.htm" } ] },

{ id: "amos9", ref: "Amos 9:11-12", title: "Amos 9:12: possess Edom, or all humanity seeks the Lord?", cause: "letters", nt: "Greek (Acts 15:16-17)", topics: ["evangelical", "arminian"],
  intro: "At the Jerusalem Council, James settles whether Gentiles must become Jews by quoting Amos. His quotation follows the Septuagint, which promises 'the rest of humanity' seeking the Lord — not Israel possessing what is left of Edom.",
  diff: { mt: "that they may [possess] the remnant of [Edom] and all the nations called by my name", lxx: "that the rest of [humanity] may [seek] the Lord, and all the nations called by my name" },
  witnesses: [
    { name: "Masoretic Text", date: "Standard Hebrew", lang: "Hebrew", text: "לְמַעַן יִירְשׁוּ אֶת שְׁאֵרִית אֱדוֹם וְכָל הַגּוֹיִם", rtl: true, tr: "lema'an yirshu et she'erit Edom ve-khol ha-goyim", en: "So that they may possess the remnant of Edom and all the nations…", side: "trad", note: "A national restoration: David's kingdom regains its former territories." },
    { name: "Septuagint", date: "c. 2nd century BC", lang: "Greek", text: "ὅπως ἐκζητήσωσιν οἱ κατάλοιποι τῶν ἀνθρώπων", rtl: false, tr: "hopōs ekzētēsōsin hoi kataloipoi tōn anthrōpōn", en: "So that the rest of humanity may seek [the Lord]…", side: "alt", note: "Reads yidreshu ('seek', with d) for yirshu ('possess'), and 'adam ('humanity') for 'edom ('Edom') — the same consonants without vowels, ʾ-d-m." },
    { name: "Acts 15:16-17 (James)", date: "1st century", lang: "Greek", text: "ὅπως ἂν ἐκζητήσωσιν οἱ κατάλοιποι τῶν ἀνθρώπων τὸν κύριον", rtl: false, tr: "", en: "…that the rest of mankind may seek the Lord, and all the Gentiles who are called by my name.", side: "alt", note: "The church's decision to welcome Gentiles without circumcision rests on this reading." }
  ],
  how: [ { h: "Two small changes", t: "Edom (אדום) and humanity (אדם) share the consonants ʾ-d-m. 'Possess' (יירשו) and 'seek' (ידרשו) differ by one letter, and Hebrew d (ד) and r (ר) look very alike." } ],
  why: [
    { h: "Gentile inclusion", t: "The Hebrew already ends with 'all the nations called by my name', so both texts include the nations. The Greek makes it a seeking rather than a conquest." },
    { h: "For mission and election debates", t: "James reads the restored 'tent of David' as the church gathering all peoples — a corporate, inclusive picture of God's people that relational and New Perspective readers emphasise." }
  ],
  verdict: "The Masoretic text is probably closer to Amos's original; the Septuagint reflects a reading of nearly identical letters. The apostles nonetheless used the Greek, because its point — the nations seeking God — matched the Hebrew's own conclusion about 'all the nations called by my name'.",
  links: [ { t: "Brenton's Septuagint, Amos 9", u: "https://biblehub.com/sep/amos/9.htm" }, { t: "Acts 15:17 (Greek interlinear)", u: "https://biblehub.com/interlinear/acts/15-17.htm" } ] },

{ id: "hab2", ref: "Habakkuk 2:4", title: "Habakkuk 2:4: his faithfulness, or mine?", cause: "interpretive", nt: "Neither exactly (Romans 1:17; Galatians 3:11; Hebrews 10:38)", topics: ["reformation"],
  intro: "'The righteous shall live by faith' is the Reformation's key text. The Hebrew says by 'his faithfulness'; the main Septuagint manuscripts say by 'my (God's) faithfulness'; Paul drops the pronoun altogether.",
  diff: { mt: "the righteous shall live by [his] faithfulness", lxx: "the righteous shall live by [my] faithfulness" },
  witnesses: [
    { name: "Masoretic Text", date: "Standard Hebrew", lang: "Hebrew", text: "וְצַדִּיק בֶּאֱמוּנָתוֹ יִחְיֶה", rtl: true, tr: "ve-tsaddiq be-'emunato yiḥyeh", en: "The righteous one shall live by his faithfulness.", side: "trad", note: "'Emunah is steadfastness, faithfulness — the righteous person stays loyal while waiting for God's promised judgment on Babylon." },
    { name: "Septuagint", date: "c. 2nd century BC", lang: "Greek", text: "ὁ δὲ δίκαιος ἐκ πίστεώς μου ζήσεται", rtl: false, tr: "ho de dikaios ek pisteōs mou zēsetai", en: "The righteous one shall live by my faithfulness.", side: "alt", note: "God's own faithfulness sustains the righteous. Codex Alexandrinus reads instead 'my righteous one shall live by faith'." },
    { name: "Paul (Romans 1:17; Galatians 3:11)", date: "1st century", lang: "Greek", text: "ὁ δὲ δίκαιος ἐκ πίστεως ζήσεται", rtl: false, tr: "", en: "The righteous shall live by faith.", side: "ctx", note: "No pronoun — open to both readings. Hebrews 10:38 follows the Alexandrinus order: 'my righteous one shall live by faith'." },
    { name: "Habakkuk Commentary from Qumran (1QpHab 7-8)", date: "1st century BC", lang: "Hebrew", text: "Applies the verse to the Torah-keepers who suffer and stay faithful to the Teacher of Righteousness", rtl: false, tr: "", en: "", side: "ctx", note: "Another first-century Jewish reading focused on faithful endurance." }
  ],
  how: [ { h: "Interpretation, not a different Hebrew", t: "The Hebrew suffix -o ('his') and the Greek mou ('my') differ; the translator either read a yod (י, 'my') for a vav (ו, 'his') — similar letters — or chose to interpret the verse as God's faithfulness." } ],
  why: [
    { h: "Faith as trust or faithfulness", t: "The Hebrew means steady faithfulness, which supports readings of pistis as loyalty and allegiance (Teresa Morgan, Matthew Bates)." },
    { h: "Whose faithfulness saves?", t: "The Greek 'by my faithfulness' supports the view that God's (or Christ's) faithfulness is the ground of salvation — the 'pistis Christou' debate (Richard Hays)." },
    { h: "Faith alone", t: "Paul's form without a pronoun was read by Luther as personal trust in God's promise, received apart from works." }
  ],
  verdict: "Three readings co-existed in the first century: the believer's faithfulness (Hebrew), God's faithfulness (Greek), and 'faith' unspecified (Paul). Paul's choice to leave out the pronoun lets the verse hold both God's faithfulness and the believer's faith.",
  links: [ { t: "Brenton's Septuagint, Habakkuk 2", u: "https://biblehub.com/sep/habakkuk/2.htm" }, { t: "Romans 1:17 (Greek interlinear)", u: "https://biblehub.com/interlinear/romans/1-17.htm" } ] },

{ id: "deut32", ref: "Deuteronomy 32:8", title: "Deuteronomy 32:8: sons of Israel or sons of God?", cause: "vorlage", nt: "Not quoted (background to Acts 17:26; Ephesians 6:12)", topics: ["sovereignty"],
  intro: "When the Most High divided the nations, he fixed their borders 'according to the number of' — whom? The standard Hebrew says the sons of Israel. A Dead Sea Scroll and the Septuagint say the sons (or angels) of God, assigning the nations to heavenly beings.",
  diff: { mt: "he fixed the borders of the peoples according to the number of the [sons of Israel]", lxx: "he fixed the borders of the nations according to the number of the [angels of God]" },
  witnesses: [
    { name: "Masoretic Text", date: "Standard Hebrew", lang: "Hebrew", text: "לְמִסְפַּר בְּנֵי יִשְׂרָאֵל", rtl: true, tr: "le-mispar bene Yisra'el", en: "According to the number of the sons of Israel.", side: "trad", note: "Israel did not yet exist when the nations were divided (Genesis 10-11), which makes this reading odd." },
    { name: "Dead Sea Scroll 4QDeutʲ", date: "1st century BC", lang: "Hebrew", text: "בני אלוהים", rtl: true, tr: "bene 'elohim", en: "Sons of God.", side: "alt", note: "The oldest Hebrew evidence for the verse supports the 'sons of God' reading." },
    { name: "Septuagint", date: "c. 3rd century BC", lang: "Greek", text: "κατὰ ἀριθμὸν ἀγγέλων θεοῦ", rtl: false, tr: "kata arithmon angelōn theou", en: "According to the number of the angels of God.", side: "alt", note: "Some Greek manuscripts read 'sons of God' (huiōn theou)." }
  ],
  how: [ { h: "An early change to avoid many 'gods'", t: "Most scholars think 'sons of God' is original and that a later scribe changed it to 'sons of Israel' to avoid suggesting other divine beings. Modern translations such as the ESV and NRSV now follow the Scroll." } ],
  why: [
    { h: "The warfare worldview", t: "The verse pictures the nations allotted to heavenly powers while Israel remains the LORD's own portion (32:9). Michael Heiser (The Unseen Realm, 2015) and Greg Boyd build on it: rebel powers rule the nations until Christ 'disarmed the rulers and authorities' (Colossians 2:15)." },
    { h: "God's sovereignty in suffering", t: "If spiritual powers really govern nations and can rebel (Psalm 82; Daniel 10:13), then not every event is God's direct will — a key Christus Victor argument." }
  ],
  verdict: "The Qumran evidence makes 'sons of God' the most likely original. That supports a biblical picture of a divine council and rebel powers, used by Christus Victor and warfare theologians against meticulous providence.",
  links: [ { t: "Brenton's Septuagint, Deuteronomy 32", u: "https://biblehub.com/sep/deuteronomy/32.htm" }, { t: "Michael S. Heiser, The Unseen Realm (2015)", u: "https://www.logos.com/product/52637/the-unseen-realm-recovering-the-supernatural-worldview-of-the-bible" } ] },

{ id: "ps2", ref: "Psalm 2:9", title: "Psalm 2:9: break them, or shepherd them?", cause: "consonants", nt: "Greek (Revelation 2:27; 12:5; 19:15)", topics: ["futurism", "hell"],
  intro: "God's anointed king will deal with the rebel nations 'with a rod of iron'. In Hebrew he breaks them; in Greek he shepherds them. Revelation uses the Greek verb all three times.",
  diff: { mt: "You shall [break] them with a rod of iron", lxx: "You shall [shepherd] them with a rod of iron" },
  witnesses: [
    { name: "Masoretic Text", date: "Standard Hebrew", lang: "Hebrew", text: "תְּרֹעֵם בְּשֵׁבֶט בַּרְזֶל", rtl: true, tr: "tero'em be-shevet barzel", en: "You shall break them with a rod of iron; you shall dash them in pieces like a potter's vessel.", side: "trad", note: "From ra'a', 'to break, shatter'." },
    { name: "Septuagint", date: "c. 2nd century BC", lang: "Greek", text: "ποιμανεῖς αὐτοὺς ἐν ῥάβδῳ σιδηρᾷ", rtl: false, tr: "poimaneis autous en rhabdō sidēra", en: "You shall shepherd them with a rod of iron.", side: "alt", note: "Read the same consonants as tir'em, from ra'ah, 'to shepherd'." },
    { name: "Revelation 2:27; 12:5; 19:15", date: "1st century", lang: "Greek", text: "ποιμανεῖ αὐτοὺς ἐν ῥάβδῳ σιδηρᾷ", rtl: false, tr: "", en: "He will shepherd (rule) them with a rod of iron, as when earthen pots are broken.", side: "both", note: "Revelation keeps 'shepherd' but adds the pottery image, holding both senses together." }
  ],
  how: [ { h: "Same letters, two verbs", t: "Unpointed תרעם can be from ra'a' ('break') or ra'ah ('shepherd'). The Masoretic vowels chose 'break'; the Greek translator chose 'shepherd'." } ],
  why: [
    { h: "The Messiah's rule over the nations", t: "Is the King's iron rod for destruction or for rule and care? Universalists and relational readers note Revelation's verb is 'shepherd', and that the Lamb 'will shepherd them and guide them to springs of living water' (Revelation 7:17, same verb)." },
    { h: "Judgment remains", t: "The pottery image, kept in Revelation 2:27, shows real judgment on rebellion; 'shepherd with a rod of iron' is strong, firm rule." }
  ],
  verdict: "The Masoretic 'break' fits the Hebrew parallel ('dash them like pottery'). The Greek 'shepherd' is an ancient alternative reading of the same letters, and Revelation deliberately adopted it — presenting the conquering Christ as a shepherd-king, while keeping the image of judgment.",
  links: [ { t: "Brenton's Septuagint, Psalm 2", u: "https://biblehub.com/sep/psalms/2.htm" }, { t: "Revelation 2:27 (Greek interlinear)", u: "https://biblehub.com/interlinear/revelation/2-27.htm" } ] },

{ id: "hos13", ref: "Hosea 13:14", title: "Hosea 13:14: threat or victory over death?", cause: "consonants", nt: "Greek, adapted (1 Corinthians 15:55)", topics: ["hell"],
  intro: "Hosea's verse can be read as God refusing to rescue Israel from death, or as God defeating death. The Hebrew is ambiguous; the Septuagint reads it as triumph, and Paul turns it into the resurrection's victory cry.",
  diff: { mt: "Shall I ransom them from Sheol?… O Death, [where are your plagues]? O Sheol, [where is your destruction]? [Compassion is hidden from my eyes].", lxx: "From the hand of Hades [I will rescue them]… Where is [your penalty], O death? Where is [your sting], O Hades?" },
  witnesses: [
    { name: "Masoretic Text", date: "Standard Hebrew", lang: "Hebrew", text: "אֱהִי דְבָרֶיךָ מָוֶת אֱהִי קָטָבְךָ שְׁאוֹל נֹחַם יִסָּתֵר מֵעֵינָי", rtl: true, tr: "'ehi devareikha mavet, 'ehi qotobkha she'ol, noḥam yissater me-'einai", en: "O Death, where are your plagues? O Sheol, where is your destruction? Compassion is hidden from my eyes.", side: "trad", note: "In context (13:12-16) many read the first lines as rhetorical questions — no rescue — summoning death against Israel. 'Ehi can mean 'where?' (as in 13:10) or 'I will be'." },
    { name: "Septuagint", date: "c. 2nd century BC", lang: "Greek", text: "ποῦ ἡ δίκη σου, θάνατε; ποῦ τὸ κέντρον σου, ᾅδη;", rtl: false, tr: "pou hē dikē sou, thanate? pou to kentron sou, hadē?", en: "I will rescue them from the hand of Hades… Where is your penalty, O death? Where is your sting, O Hades?", side: "alt", note: "Read as a promise: God taunts death after rescuing his people." },
    { name: "1 Corinthians 15:54-55", date: "1st century", lang: "Greek", text: "ποῦ σου, θάνατε, τὸ νῖκος; ποῦ σου, θάνατε, τὸ κέντρον;", rtl: false, tr: "", en: "Death is swallowed up in victory. O death, where is your victory? O death, where is your sting?", side: "alt", note: "Paul combines Isaiah 25:8 with the Greek Hosea to celebrate resurrection." }
  ],
  how: [ { h: "An ambiguous word and an interpretive choice", t: "Hebrew 'ehi can be 'where?' or 'I will be' (the KJV: 'O death, I will be thy plagues'). The Greek translator took the whole verse as God's victory over death; the Masoretic context reads more like judgment." } ],
  why: [
    { h: "Christus Victor", t: "Paul's use makes the verse a taunt over a defeated enemy: 'thanks be to God, who gives us the victory through our Lord Jesus Christ' (1 Corinthians 15:57)." },
    { h: "Sheol's end", t: "Universalist and conditionalist readers note that in Paul's reading Hades and death lose their power — they are not permanent realms. Traditionalists note the Hebrew context is judgment on unrepentant Israel." }
  ],
  verdict: "The Hebrew is genuinely ambiguous and, in context, probably a threat. The Septuagint's victorious reading, taken up by Paul, shows how the early church read the verse in the light of the resurrection: death itself is the defeated enemy.",
  links: [ { t: "Brenton's Septuagint, Hosea 13", u: "https://biblehub.com/sep/hosea/13.htm" }, { t: "1 Corinthians 15:55 (Greek interlinear)", u: "https://biblehub.com/interlinear/1_corinthians/15-55.htm" } ] },

{ id: "isa45", ref: "Isaiah 45:23", title: "Isaiah 45:23: every tongue swears, or confesses?", cause: "interpretive", nt: "Greek (Romans 14:11; Philippians 2:10-11)", topics: ["hell", "arminian"],
  intro: "'Every knee shall bow' is the climax of Philippians 2. In Hebrew every tongue 'swears' allegiance; in the Greek every tongue 'confesses' — the word Paul uses, which elsewhere means thankful praise.",
  diff: { mt: "To me every knee shall bow, every tongue shall [swear]", lxx: "To me every knee shall bow, and every tongue shall [confess (give praise)] to God" },
  witnesses: [
    { name: "Masoretic Text", date: "Standard Hebrew", lang: "Hebrew", text: "כִּי לִי תִּכְרַע כָּל בֶּרֶךְ תִּשָּׁבַע כָּל לָשׁוֹן", rtl: true, tr: "ki li tikhra' kol berekh, tishava' kol lashon", en: "To me every knee shall bow, every tongue shall swear [allegiance].", side: "trad", note: "Verse 24 adds: 'all who were incensed against him shall come to him and be ashamed'." },
    { name: "Septuagint", date: "c. 2nd century BC", lang: "Greek", text: "ὅτι ἐμοὶ κάμψει πᾶν γόνυ καὶ ἐξομολογήσεται πᾶσα γλῶσσα τῷ θεῷ", rtl: false, tr: "exomologēsetai pasa glōssa tō theō", en: "Every knee shall bow to me and every tongue shall confess to God.", side: "alt", note: "Exomologeō is used in the Greek Psalms for giving thanks and praise (e.g. Psalm 138:1 LXX)." },
    { name: "Philippians 2:10-11; Romans 14:11", date: "1st century", lang: "Greek", text: "πᾶσα γλῶσσα ἐξομολογήσηται ὅτι κύριος Ἰησοῦς Χριστὸς εἰς δόξαν θεοῦ πατρός", rtl: false, tr: "", en: "Every tongue confess that Jesus Christ is Lord, to the glory of God the Father.", side: "alt", note: "Paul applies Isaiah's words for the LORD to Jesus." }
  ],
  how: [ { h: "Interpretive rendering", t: "Swearing by God's name is an act of allegiance; the translator rendered it with the language of confession and praise." } ],
  why: [
    { h: "Universal reconciliation", t: "Universalists argue the confession is joyful, not forced: the context is 'Turn to me and be saved, all the ends of the earth' (45:22), and it is 'to the glory of God the Father'." },
    { h: "Traditional reading", t: "Traditionalists point to 45:24 — enemies come 'and are ashamed' — and argue that bowing includes the defeated who submit unwillingly." }
  ],
  verdict: "Both texts describe universal acknowledgment of God. The Greek 'confess' that Paul uses leans toward praise, and the Hebrew context includes salvation offered to all the earth (45:22) alongside the shame of enemies (45:24). Whether that confession is joyful for everyone is the open question.",
  links: [ { t: "Brenton's Septuagint, Isaiah 45", u: "https://biblehub.com/sep/isaiah/45.htm" }, { t: "Philippians 2:11 (Greek interlinear)", u: "https://biblehub.com/interlinear/philippians/2-11.htm" } ] },

{ id: "isa61", ref: "Isaiah 61:1", title: "Isaiah 61:1: freedom for prisoners, or sight for the blind?", cause: "consonants", nt: "Greek (Luke 4:18)", topics: ["evangelical", "psa"],
  intro: "Jesus' first sermon in Nazareth quotes Isaiah 61. Luke follows the Septuagint's 'recovery of sight to the blind' where the Hebrew has 'opening (of the prison) to those who are bound'.",
  diff: { mt: "to proclaim liberty to the captives, and [opening to those who are bound]", lxx: "to proclaim release to the captives, and [recovery of sight to the blind]" },
  witnesses: [
    { name: "Masoretic Text", date: "Standard Hebrew", lang: "Hebrew", text: "לִקְרֹא לִשְׁבוּיִם דְּרוֹר וְלַאֲסוּרִים פְּקַח קוֹחַ", rtl: true, tr: "liqro lishvuyim deror, ve-la'asurim peqaḥ-qoaḥ", en: "To proclaim liberty (deror, the Jubilee word) to captives, and opening to those who are bound.", side: "trad", note: "Peqaḥ-qoaḥ is a rare double word; its root paqaḥ is normally used of opening eyes." },
    { name: "Septuagint", date: "c. 2nd century BC", lang: "Greek", text: "κηρύξαι αἰχμαλώτοις ἄφεσιν καὶ τυφλοῖς ἀνάβλεψιν", rtl: false, tr: "kēryxai aichmalōtois aphesin kai typhlois anablepsin", en: "To proclaim release (aphesis) to captives and recovery of sight to the blind.", side: "alt", note: "The translator took paqaḥ in its usual sense, opening of the eyes." },
    { name: "Luke 4:18-19", date: "1st century", lang: "Greek", text: "κηρύξαι αἰχμαλώτοις ἄφεσιν καὶ τυφλοῖς ἀνάβλεψιν, ἀποστεῖλαι τεθραυσμένους ἐν ἀφέσει", rtl: false, tr: "", en: "…recovery of sight to the blind, to set at liberty (aphesis) those who are oppressed.", side: "alt", note: "Luke also inserts a line from Isaiah 58:6 — 'release' (aphesis) twice." }
  ],
  how: [ { h: "A rare word read by its usual root", t: "Paqaḥ almost always means opening the eyes (e.g. 2 Kings 6:17), so the Greek 'sight to the blind' is a natural reading of an unusual Hebrew phrase." } ],
  why: [
    { h: "Salvation as release and healing", t: "Jesus defines his mission as Jubilee release (aphesis), healing and liberation — the same word that means 'forgiveness' elsewhere. Relational and Christus Victor readers see forgiveness as release, not payment." },
    { h: "Jesus' ministry", t: "Luke's reading fits what Jesus then does: healing the blind (Luke 7:21-22) and freeing the oppressed." }
  ],
  verdict: "Both texts proclaim liberation. The Greek makes healing explicit, and Luke's combined quotation presents salvation as Jubilee release — forgiveness, freedom and sight together.",
  links: [ { t: "Brenton's Septuagint, Isaiah 61", u: "https://biblehub.com/sep/isaiah/61.htm" }, { t: "Luke 4:18 (Greek interlinear)", u: "https://biblehub.com/interlinear/luke/4-18.htm" } ] },

{ id: "jer31", ref: "Jeremiah 31:32 (LXX 38:32)", title: "Jeremiah 31:32: a husband, or one who turned away?", cause: "letters", nt: "Greek (Hebrews 8:9)", topics: ["sovereignty", "reformation"],
  intro: "The new covenant passage says Israel broke God's covenant. The Hebrew adds 'though I was a husband to them'; the Septuagint, quoted in Hebrews, says 'and I disregarded them'.",
  diff: { mt: "my covenant that they broke, [though I was a husband to them]", lxx: "they did not continue in my covenant, [and I disregarded them]" },
  witnesses: [
    { name: "Masoretic Text", date: "Standard Hebrew", lang: "Hebrew", text: "אֲשֶׁר הֵמָּה הֵפֵרוּ אֶת בְּרִיתִי וְאָנֹכִי בָּעַלְתִּי בָם", rtl: true, tr: "ve-anokhi ba'alti vam", en: "My covenant which they broke, although I was a husband to them.", side: "alt", note: "God's faithfulness as a husband, despite Israel's unfaithfulness — a deeply relational image (compare Hosea 2)." },
    { name: "Septuagint", date: "c. 2nd century BC", lang: "Greek", text: "ὅτι αὐτοὶ οὐκ ἐνέμειναν ἐν τῇ διαθήκῃ μου, καὶ ἐγὼ ἠμέλησα αὐτῶν", rtl: false, tr: "kai egō ēmelēsa autōn", en: "Because they did not continue in my covenant, and I disregarded them.", side: "trad", note: "Probably read ga'alti ('I loathed') for ba'alti — Hebrew g (ג) and b (ב) are similar." },
    { name: "Hebrews 8:9", date: "1st century", lang: "Greek", text: "καὶ ἐγὼ ἠμέλησα αὐτῶν", rtl: false, tr: "", en: "…and I showed no concern for them, declares the Lord.", side: "trad", note: "Hebrews quotes its Greek Bible." }
  ],
  how: [ { h: "One letter", t: "בעלתי ('I was husband/master') and געלתי ('I loathed') differ by one similar-looking letter." } ],
  why: [
    { h: "God's character", t: "The Hebrew stresses God's persistent marital faithfulness even when Israel broke the covenant; the Greek stresses consequence: God let them go. Relational theology draws on the first; judgment-centred readings on the second." },
    { h: "The new covenant", t: "Both lead to the same promise: 'I will put my law within them… I will forgive their iniquity' (31:33-34)." }
  ],
  verdict: "The Masoretic 'I was a husband to them' is likely original. The Greek reflects a different reading of one letter. Hebrews' argument does not depend on the difference; the new covenant is God's answer either way.",
  links: [ { t: "Brenton's Septuagint, Jeremiah 38", u: "https://biblehub.com/sep/jeremiah/38.htm" }, { t: "Hebrews 8:9 (Greek interlinear)", u: "https://biblehub.com/interlinear/hebrews/8-9.htm" } ] },

{ id: "isa7", ref: "Isaiah 7:14", title: "Isaiah 7:14: young woman or virgin?", cause: "interpretive", nt: "Greek (Matthew 1:23)", topics: ["sola"],
  intro: "The best-known Septuagint difference. The Hebrew 'almah means a young woman of marriageable age; the Greek parthenos usually means virgin. Matthew quotes the Greek for Jesus' birth.",
  diff: { mt: "Behold, the [young woman] shall conceive and bear a son", lxx: "Behold, the [virgin] shall conceive and bear a son" },
  witnesses: [
    { name: "Masoretic Text", date: "Standard Hebrew", lang: "Hebrew", text: "הִנֵּה הָעַלְמָה הָרָה וְיֹלֶדֶת בֵּן", rtl: true, tr: "hinneh ha-'almah harah ve-yoledet ben", en: "Behold, the young woman is (or will be) pregnant and will bear a son.", side: "trad", note: "'Almah is used of Rebekah (Genesis 24:43) and Miriam (Exodus 2:8); the specific word for virgin is betulah." },
    { name: "Septuagint", date: "c. 2nd century BC", lang: "Greek", text: "ἰδοὺ ἡ παρθένος ἐν γαστρὶ ἕξει", rtl: false, tr: "idou hē parthenos en gastri hexei", en: "Behold, the virgin shall conceive.", side: "alt", note: "Yet the same Septuagint calls Dinah a parthenos after she was violated (Genesis 34:3), so parthenos could also mean 'girl'." },
    { name: "Matthew 1:23", date: "1st century", lang: "Greek", text: "ἰδοὺ ἡ παρθένος ἐν γαστρὶ ἕξει", rtl: false, tr: "", en: "Behold, the virgin shall conceive and bear a son, and they shall call his name Immanuel.", side: "alt", note: "Matthew reads Isaiah's sign as fulfilled in Jesus' virgin birth." }
  ],
  how: [ { h: "A word choice", t: "The translator used parthenos for 'almah, as the Septuagint also does in Genesis 24:43." } ],
  why: [
    { h: "Scripture and its interpretation", t: "Matthew reads Isaiah's sign (originally given to King Ahaz, 7:16) as having a fuller fulfilment in Christ. This shows the apostles reading the Old Testament through Christ — a point Christ-centred readers make against flat proof-texting." }
  ],
  verdict: "'Young woman' is the Hebrew sense; the Septuagint's 'virgin' prepared the way for Matthew's reading. The virgin birth rests on Matthew and Luke's testimony, not on the word 'almah alone — an example of how the New Testament reads the Old Testament through Christ.",
  links: [ { t: "Brenton's Septuagint, Isaiah 7", u: "https://biblehub.com/sep/isaiah/7.htm" }, { t: "Matthew 1:23 (Greek interlinear)", u: "https://biblehub.com/interlinear/matthew/1-23.htm" } ] },

{ id: "ps8", ref: "Psalm 8:5 (Hebrew 8:6)", title: "Psalm 8:5: a little lower than God, or than the angels?", cause: "interpretive", nt: "Greek (Hebrews 2:7, 9)", topics: ["progressive"],
  intro: "Humanity's dignity: the Hebrew says God made human beings 'a little lower than 'elohim' (God, or divine beings). The Greek says 'than the angels', and Hebrews applies it to Jesus.",
  diff: { mt: "You made him a little lower than [God (ʾelohim)]", lxx: "You made him a little lower than [the angels]" },
  witnesses: [
    { name: "Masoretic Text", date: "Standard Hebrew", lang: "Hebrew", text: "וַתְּחַסְּרֵהוּ מְּעַט מֵאֱלֹהִים", rtl: true, tr: "va-teḥasserehu me'at me-'elohim", en: "You have made him a little less than God, and crowned him with glory and honour.", side: "alt", note: "'Elohim can mean God or heavenly beings." },
    { name: "Septuagint", date: "c. 2nd century BC", lang: "Greek", text: "ἠλάττωσας αὐτὸν βραχύ τι παρ᾽ ἀγγέλους", rtl: false, tr: "ēlattōsas auton brachy ti par' angelous", en: "You made him a little lower than the angels.", side: "trad", note: "A cautious rendering of 'elohim." },
    { name: "Hebrews 2:7-9", date: "1st century", lang: "Greek", text: "ἠλάττωσας αὐτὸν βραχύ τι παρ᾽ ἀγγέλους", rtl: false, tr: "", en: "We see Jesus, who for a little while was made lower than the angels, crowned with glory and honour.", side: "trad", note: "Hebrews reads 'a little' as 'for a little while' (brachy ti), applied to the incarnation." }
  ],
  how: [ { h: "Reverent translation", t: "Translators often rendered 'elohim as 'angels' when it referred to beings other than the one God." } ],
  why: [
    { h: "Human dignity and theosis", t: "The Hebrew 'a little less than God' supports the high view of humanity's vocation that theosis and relational theology emphasise: humans made to share God's glory and rule (8:6)." },
    { h: "Christ as true human", t: "Hebrews reads the psalm as fulfilled in Jesus, the representative human who tastes death 'for everyone' (2:9)." }
  ],
  verdict: "The Hebrew sets humanity just below God; the Greek just below the angels. Hebrews' use is fitted to its argument about Christ. The underlying point — humans crowned with glory to rule creation — is shared.",
  links: [ { t: "Brenton's Septuagint, Psalm 8", u: "https://biblehub.com/sep/psalms/8.htm" }, { t: "Hebrews 2:7 (Greek interlinear)", u: "https://biblehub.com/interlinear/hebrews/2-7.htm" } ] },

{ id: "prov3", ref: "Proverbs 3:34", title: "Proverbs 3:34: God mocks the mockers, or opposes the proud?", cause: "interpretive", nt: "Greek (James 4:6; 1 Peter 5:5)", topics: ["holiness", "progressive"],
  intro: "Two apostles quote 'God opposes the proud but gives grace to the humble'. That is the Septuagint; the Hebrew says God 'scorns the scorners'.",
  diff: { mt: "Toward the [scorners he is scornful], but to the humble he gives favour", lxx: "The Lord [opposes the proud], but gives grace to the humble" },
  witnesses: [
    { name: "Masoretic Text", date: "Standard Hebrew", lang: "Hebrew", text: "אִם לַלֵּצִים הוּא יָלִיץ וְלַעֲנָוִים יִתֶּן חֵן", rtl: true, tr: "im la-letsim hu yalits, ve-la'anavim yitten ḥen", en: "Toward the scorners he is scornful, but to the humble he gives favour.", side: "trad", note: "A wisdom saying of fitting response: God treats mockers as they treat others." },
    { name: "Septuagint", date: "c. 2nd century BC", lang: "Greek", text: "κύριος ὑπερηφάνοις ἀντιτάσσεται, ταπεινοῖς δὲ δίδωσιν χάριν", rtl: false, tr: "kyrios hyperēphanois antitassetai, tapeinois de didōsin charin", en: "The Lord opposes the proud, but gives grace to the humble.", side: "alt", note: "Turns 'scorn' into active opposition to pride." },
    { name: "James 4:6; 1 Peter 5:5", date: "1st century", lang: "Greek", text: "ὁ θεὸς ὑπερηφάνοις ἀντιτάσσεται, ταπεινοῖς δὲ δίδωσιν χάριν", rtl: false, tr: "", en: "God opposes the proud but gives grace to the humble.", side: "alt", note: "Both apostles quote the Greek." }
  ],
  how: [ { h: "A paraphrase", t: "The translator turned a vivid Hebrew wordplay into a clearer moral principle." } ],
  why: [
    { h: "Grace and humility", t: "The verse grounds Christian growth in humility rather than achievement — used against perfectionism and spiritual pride, and by Orthodox spirituality as the path of theosis." }
  ],
  verdict: "The Hebrew speaks of God answering mockery; the Greek generalises it to pride. The apostles' use shows they read the Greek as faithfully conveying the Hebrew's point.",
  links: [ { t: "Brenton's Septuagint, Proverbs 3", u: "https://biblehub.com/sep/proverbs/3.htm" }, { t: "James 4:6 (Greek interlinear)", u: "https://biblehub.com/interlinear/james/4-6.htm" } ] }
];
