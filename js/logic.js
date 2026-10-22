/* Logic & fallacies: each doctrine's core argument as a syllogism, the logical and scriptural
   fallacies critics identify, the strawmen its defenders use against other views, and fair-play
   corrections of strawmen used against the doctrine. */

TC.fallacyTypes = {
  "False dilemma": "Presenting two options as the only ones when others exist.",
  "Begging the question": "Assuming the conclusion inside a premise.",
  "Equivocation": "Letting a key word shift meaning in the middle of an argument.",
  "Special pleading": "Applying a rule everywhere except where it would hurt your case.",
  "Proof-texting": "Lifting a verse out of its context so it says something its author did not mean.",
  "Anachronism": "Reading later ideas, debates or technology back into an ancient text.",
  "Internal contradiction": "Holding two claims that cannot both be true.",
  "Appeal to mystery": "Calling a contradiction a mystery to avoid answering it.",
  "Unfalsifiable claim": "A claim set up so that no possible evidence could count against it.",
  "Hasty generalisation": "Turning a few specific cases into a universal rule.",
  "Appeal to tradition": "Treating 'we have always believed it' as proof.",
  "Appeal to consequences": "Rejecting a view because of what might follow if people believed it.",
  "Argument from silence": "Building a doctrine on what the text does not say.",
  "Self-refutation": "A principle that fails its own test.",
  "Circular reasoning": "Proving A by B while proving B by A.",
  "Appeal to popularity": "Treating numbers or success as proof of truth.",
  "Category error": "Applying to one kind of thing what only fits another (for example, money-debt logic to personal guilt).",
  "Selective literalism": "Reading literally when it helps the case and figuratively when it does not.",
  "Moving the goalposts": "Redefining terms so a claim cannot fail.",
  "Anecdotal evidence": "Treating personal experience as proof of a general doctrine.",
  "Tu quoque": "Charging an opponent with a problem your own view shares."
};

TC.logic = {
psa: {
  syl: { p: ["God's justice requires that every sin be punished.", "God forgives sinners.", "Therefore someone else must bear the punishment: the Father punishes the Son in our place."], weak: 0,
    why: "Premise 1 is assumed, not shown. Scripture repeatedly shows God forgiving without exacting punishment: 'He does not deal with us according to our sins' (Ps 103:10); 'who pardons iniquity… he does not retain his anger forever, because he delights in steadfast love' (Mic 7:18); the father of the prodigal demands nothing (Luke 15:20-24). And the conclusion breaks God's own law: 'He who justifies the wicked and he who condemns the righteous are both alike an abomination to the LORD' (Prov 17:15); 'the son shall not suffer for the iniquity of the father' (Ezek 18:20).",
    refs: ["Psalm 103:10", "Micah 7:18", "Proverbs 17:15", "Ezekiel 18:20", "Deuteronomy 24:16"] },
  fallacies: [
    { name: "Retribution defined as justice", type: "Begging the question", claim: "God is just, so he must punish every sin retributively.",
      problem: "The argument assumes that justice means retribution, then reads every atonement text through that assumption. In Hebrew, justice (mishpat) and righteousness (tsedaqah) are mostly restorative: setting wrongs right, rescuing the oppressed.",
      scripture: "'The LORD waits to be gracious to you… for the LORD is a God of justice' (Isa 30:18) — his justice is the reason for his grace. 'Seek justice, correct oppression, bring justice to the fatherless' (Isa 1:17).", refs: ["Isaiah 30:18", "Isaiah 1:17", "Psalm 146:7-9"],
      reply: "Defenders reply that Scripture also shows retributive judgment ('he will render to each one according to his works', Rom 2:6) and that God 'will by no means clear the guilty' (Ex 34:7)." },
    { name: "Punishing the innocent", type: "Internal contradiction", claim: "God justly punished the innocent Son so the guilty could go free.",
      problem: "The doctrine claims to protect God's justice, yet its centrepiece is something God's own law calls an abomination: condemning the righteous and acquitting the wicked (Prov 17:15). It cannot be both necessary for justice and contrary to justice.",
      scripture: "Ezekiel 18:20 and Deuteronomy 24:16 forbid transferring punishment from the guilty to the innocent. Abraham: 'Far be it from you to put the righteous to death with the wicked… shall not the Judge of all the earth do what is just?' (Gen 18:25).", refs: ["Proverbs 17:15", "Ezekiel 18:20", "Genesis 18:25"],
      reply: "John Stott answers that it is not a third party but God himself, in the person of the Son, voluntarily bearing the penalty: the Judge takes the sentence. Voluntary self-substitution differs from punishing an unwilling innocent." },
    { name: "Debt or guilt?", type: "Category error", claim: "Christ paid our debt, so we owe nothing.",
      problem: "A money debt can be paid by anyone. Guilt and punishment are personal: they cannot be transferred (Faustus Socinus's classic objection). And if a debt is paid, it is not forgiven — yet Scripture insists we are forgiven (Eph 1:7; Col 2:13).",
      scripture: "Jesus describes God forgiving debts by cancelling them, not collecting them: 'out of pity… he released him and forgave him the debt' (Matt 18:27). He tells us to do the same (Matt 6:12).", refs: ["Matthew 18:23-27", "Luke 7:41-43", "Colossians 2:13-14"],
      reply: "Defenders answer that forgiveness is free to us though costly to God, and that Colossians 2:14 pictures the record of debt nailed to the cross — dealt with, not ignored." },
    { name: "Three days for eternity", type: "Equivocation", claim: "Christ suffered the full penalty for sin, which is eternal hell.",
      problem: "If the penalty for sin is eternal conscious torment, Christ did not pay it: he suffered for hours and rose on the third day. If the penalty is death, then the penalty for the lost is also death, not endless torment. The word 'penalty' shifts meaning.",
      scripture: "'The wages of sin is death' (Rom 6:23); 'Christ died for our sins' (1 Cor 15:3). Scripture names death, not endless torment, as what Christ bore.", refs: ["Romans 6:23", "1 Corinthians 15:3", "Hebrews 2:9"],
      reply: "Defenders reply that because the Son is infinite, his finite suffering has infinite worth and can satisfy an infinite debt." },
    { name: "Double payment", type: "Internal contradiction", claim: "Christ paid for the sins of the whole world (1 John 2:2), and unbelievers will still be punished for those sins in hell.",
      problem: "Either Christ paid for everyone's sins, in which case punishing anyone again is double payment, or he paid only for the elect, which contradicts 1 John 2:2 ('not for ours only but also for the sins of the whole world'). Penal substitution forces a choice between limited atonement and universal salvation.",
      scripture: "1 John 2:2; 2 Corinthians 5:14 ('one has died for all'); 1 Timothy 2:6 ('a ransom for all').", refs: ["1 John 2:2", "2 Corinthians 5:14-15", "1 Timothy 2:6"],
      reply: "Calvinists accept limited atonement (John 10:15, 'for the sheep'). Arminians say the payment is applied only when received by faith, like a pardon that must be accepted." },
    { name: "Father against Son", type: "Internal contradiction", claim: "The Father poured out wrath on the Son and turned his face away.",
      problem: "Nicene faith holds one undivided divine will. If the Father is angry with the Son while the Son loves us, the Trinity is set against itself. If only Christ's human nature is punished, the persons are divided in a way the councils rejected.",
      scripture: "'God was in Christ reconciling the world' (2 Cor 5:19); 'I and the Father are one' (John 10:30); 'the Father is with me' (John 16:32).", refs: ["2 Corinthians 5:19", "John 10:30", "John 16:32"],
      reply: "Defenders say the Father's wrath is against sin borne by the Son, not against the Son himself, whom he loves even on the cross ('this is why the Father loves me, because I lay down my life', John 10:17)." }
  ],
  strawmen: [
    { lens: "cv", say: "If you reject penal substitution, you reject substitution and the cross itself.", real: "Christus Victor and theosis hold that Christ died for us and in our place: he entered death so that we would not stay in it. What they reject is the penal mechanism (the Father punishing the Son), not substitution or the cross.",
      counter: "Representative substitution is everywhere in the fathers: Christ 'tasted death for everyone' and 'through death destroyed the one who has the power of death' (Heb 2:9, 14).", refs: ["Hebrews 2:9,14-15", "Mark 10:45"] },
    { lens: "cv", say: "Christus Victor makes sin trivial — just a problem of 'powers', not of guilt.", real: "Christus Victor treats sin as slavery and death: a power that owns and destroys us. That is more serious, not less.",
      counter: "'Everyone who practises sin is a slave to sin' (John 8:34); 'sin reigned in death' (Rom 5:21). Liberation from a tyrant is a bigger rescue than settling an account.", refs: ["John 8:34", "Romans 5:21", "Romans 6:16-23"] },
    { lens: "rel", say: "Without punishment there is no wrath; you believe in a soft, sentimental God.", real: "Relational theologians affirm God's wrath as love's opposition to everything that destroys his creatures. In Romans 1, wrath is God 'giving them over' to the consequences they choose (1:24, 26, 28).",
      counter: "Wrath is real, but it is the consent of love to our choices, aimed at restoration (Hos 11:8-9: 'my compassion grows warm and tender; I will not execute my burning anger').", refs: ["Romans 1:18,24-28", "Hosea 11:8-9"] },
    { lens: "th", say: "Rejecting penal substitution is liberal theology and Abelard's 'moral example' view.", real: "Christus Victor, recapitulation and theosis are the oldest models in the church (Irenaeus, Athanasius, Gregory of Nyssa) and fully orthodox. They are not the moral-influence theory.",
      counter: "Labelling a view 'liberal' is an ad hominem, not an argument. Athanasius, who defended Nicene orthodoxy, taught incarnational atonement (On the Incarnation 8-10, 54).", refs: ["2 Peter 1:4", "Hebrews 2:14-17"] }
  ]
},
hell: {
  syl: { p: ["Every human soul is naturally immortal.", "No one can repent or be reconciled after death.", "God must punish unrepented sin.", "Therefore the lost suffer consciously for ever."], weak: 0,
    why: "Premises 1 and 2 are not taught in Scripture. Only God 'has immortality' (1 Tim 6:16); immortality is sought and given in Christ (Rom 2:7; 2 Tim 1:10). After the Fall, humans were barred from the tree of life 'lest he… eat, and live forever' (Gen 3:22) — immortality is conditional. And no verse says repentance becomes impossible at death; Peter says the gospel was preached to the dead (1 Pet 4:6).",
    refs: ["1 Timothy 6:16", "Genesis 3:22", "Romans 2:7", "2 Timothy 1:10", "1 Peter 4:6"] },
  fallacies: [
    { name: "Infinite punishment for finite sin", type: "Special pleading", claim: "Sin against an infinitely holy God deserves infinite punishment (Anselm, Edwards).",
      problem: "The argument measures guilt by the rank of the one offended, a medieval honour principle. Scripture measures judgment by deeds, and teaches degrees of punishment — 'few stripes' and 'many stripes' (Luke 12:47-48). Degrees cannot exist if every sin earns infinite punishment.",
      scripture: "God judges 'according to what they had done' (Rev 20:12-13; Rom 2:6). 'More tolerable for Tyre and Sidon' (Matt 11:22). 'An eye for an eye' limits punishment to proportion (Ex 21:23-25).", refs: ["Luke 12:47-48", "Revelation 20:12-13", "Matthew 11:22", "Exodus 21:23-25"],
      reply: "Traditionalists reply that degrees exist within hell's intensity, while its duration is endless because the lost continue to sin and never repent." },
    { name: "Death that is not death", type: "Equivocation", claim: "'Death', 'destruction' and 'perish' mean eternal life in misery.",
      problem: "If 'death' means conscious existence for ever, the contrast in 'the wages of sin is death, but the gift of God is eternal life' (Rom 6:23) collapses: both sides would live for ever. The plain words are redefined to fit the doctrine.",
      scripture: "'Destroy both soul and body in Gehenna' (Matt 10:28); 'should not perish' (John 3:16); 'they will be like ashes under the soles of your feet' (Mal 4:3).", refs: ["Romans 6:23", "Matthew 10:28", "John 3:16", "Malachi 4:1-3"],
      reply: "Traditionalists say biblical 'death' is separation (as in Eph 2:1, 'dead in trespasses' while still alive), so eternal death is eternal separation." },
    { name: "Only two options", type: "False dilemma", claim: "Either eternal conscious torment, or no judgment and no justice.",
      problem: "Conditional immortality and universal reconciliation both affirm a real, just and severe judgment. The choice is about the nature and outcome of judgment, not whether it exists.",
      scripture: "Paul holds judgment and hope together: 'each one's work… will be revealed by fire… he himself will be saved, but only as through fire' (1 Cor 3:13-15).", refs: ["1 Corinthians 3:13-15", "2 Corinthians 5:10"],
      reply: "Traditionalists answer that only endless punishment matches the seriousness Jesus attaches to judgment (Mark 9:43-48)." },
    { name: "'The church has always believed it'", type: "Appeal to tradition", claim: "Eternal torment is the historic, unanimous view of the church.",
      problem: "It was never unanimous. Augustine admitted that 'very many' (plurimi) Christians in his day rejected endless torment (Enchiridion 112). Gregory of Nyssa taught restoration and was honoured as a 'Father of Fathers'. Long-held does not mean biblical — the Reformers made the same point against Rome.",
      scripture: "'You leave the commandment of God and hold to the tradition of men' (Mark 7:8). Test everything (1 Thess 5:21).", refs: ["Mark 7:8", "1 Thessalonians 5:21"],
      reply: "Traditionalists reply that the majority of fathers and the creeds' 'eternal punishment' language (Athanasian Creed) show a strong consensus, and that the 543 and 553 anathemas rejected universalism." },
    { name: "Free to choose hell for ever", type: "Internal contradiction", claim: "Hell's doors are locked from the inside: people freely choose it for ever (C. S. Lewis).",
      problem: "If the damned remain free, they can repent at any point in endless time, so hell cannot be guaranteed eternal. If they cannot repent, they are not free, and God is the one keeping them there. David Bentley Hart adds that a fully informed rational will, made for the good, cannot choose ultimate misery for ever.",
      scripture: "Love 'bears all things… endures all things… never ends' (1 Cor 13:7-8). God 'has consigned all to disobedience, that he may have mercy on all' (Rom 11:32).", refs: ["1 Corinthians 13:7-8", "Romans 11:32", "Lamentations 3:31-33"],
      reply: "Defenders reply that sin hardens character until it becomes permanent, so the lost freely and forever refuse (Rev 22:11: 'let the evildoer still do evil')." },
    { name: "Joy in heaven while loved ones burn", type: "Internal contradiction", claim: "The saints will be perfectly happy, even rejoicing in God's justice on the damned (Aquinas, Summa Suppl. q.94; Edwards).",
      problem: "Perfected saints will be more loving, not less. A love that rejoices over a son or mother tormented for ever is not the love of Christ. Paul wished himself cursed for his lost kinsmen (Rom 9:2-3).",
      scripture: "'I have no pleasure in the death of the wicked' (Ezek 33:11); joy in heaven is over repentance, not punishment (Luke 15:7).", refs: ["Romans 9:2-3", "Ezekiel 33:11", "Luke 15:7"],
      reply: "Some traditionalists say God will wipe away every tear (Rev 21:4) in a way we cannot now imagine; others drop Aquinas's 'rejoicing'." }
  ],
  strawmen: [
    { lens: "ur", say: "Universalists don't believe in hell or judgment.", real: "Christian universalists affirm hell, often as severe, as the purifying fire of God's love that lasts until its work is done.",
      counter: "Gregory of Nyssa described the agony of purification; George MacDonald insisted on 'the consuming fire'. The disagreement is about hell's purpose and end, not its reality.", refs: ["1 Corinthians 3:15", "Malachi 3:2-3", "Hebrews 12:29"] },
    { lens: "ur", say: "Universalism means all religions are equally valid (pluralism).", real: "Christian universalism is Christ-exclusive: everyone is saved only through Christ, by the cross and resurrection, confessing him as Lord.",
      counter: "'Every tongue confess that Jesus Christ is Lord' (Phil 2:11) and 'in Christ shall all be made alive' (1 Cor 15:22): the means is Christ alone, the scope is everyone.", refs: ["Philippians 2:10-11", "1 Corinthians 15:22", "Colossians 1:19-20"] },
    { lens: "ur", say: "If everyone is saved, there is no reason for evangelism or holiness.", real: "The motive for mission is love and the joy of the gospel, not fear. People are invited into life now and spared needless suffering.",
      counter: "This is the appeal-to-consequences fallacy. 'The love of Christ controls us' (2 Cor 5:14); 'perfect love casts out fear' (1 John 4:18). Early universalist fathers were missionaries and ascetics.", refs: ["2 Corinthians 5:14", "1 John 4:18"] },
    { lens: "ci", say: "Annihilationism is a Jehovah's Witness or Adventist heresy.", real: "Conditional immortality is held by evangelical scholars such as John Stott, Edward Fudge, John Wenham and Clark Pinnock, and has roots in the 4th-century writer Arnobius.",
      counter: "Guilt by association is not an argument. The question is what Scripture says about 'perish', 'destroy' and 'death'.", refs: ["Matthew 10:28", "2 Thessalonians 1:9"] },
    { lens: "rel", say: "You only reject eternal torment because modern culture finds it offensive.", real: "Objections to endless torment were made in the 3rd and 4th centuries by Origen, Gregory of Nyssa and the 'merciful' Augustine mentions, long before modern sensibilities.",
      counter: "Questioning motives (poisoning the well) does not answer arguments. Both sides have feelings; the evidence is in the texts.", refs: ["Lamentations 3:31-33", "1 Timothy 4:10"] }
  ]
},
sovereignty: {
  syl: { p: ["God ordains every event that happens.", "Evil events happen.", "Therefore God ordains evil.", "Yet God is not the author of sin."], weak: 0,
    why: "The first premise, combined with the last, produces a contradiction that is then called a mystery. Scripture shows God's will being resisted: the Pharisees 'rejected the purpose (boulē) of God for themselves' (Luke 7:30). God says of child sacrifice, 'I did not command or decree it, nor did it come into my mind' (Jer 19:5). Jesus teaches us to pray 'your will be done on earth' — it is not yet always done (Matt 6:10).",
    refs: ["Luke 7:30", "Jeremiah 19:5", "Matthew 6:10", "Matthew 23:37"] },
  fallacies: [
    { name: "Ordains but isn't responsible", type: "Appeal to mystery", claim: "God ordains every sin but is not morally responsible for any of them.",
      problem: "We do not accept this reasoning anywhere else. When David arranged Uriah's death by enemy swords, God held David responsible: 'you have struck down Uriah… with the sword of the Ammonites' (2 Sam 12:9). Whoever decisively plans an evil act shares its guilt.",
      scripture: "2 Samuel 12:9; 'God cannot be tempted with evil, and he himself tempts no one' (Jas 1:13); 'God is light, and in him is no darkness at all' (1 John 1:5).", refs: ["2 Samuel 12:9", "James 1:13-17", "1 John 1:5"],
      reply: "Compatibilists answer that God's ordaining operates at a different level (primary cause) from human sinful intent (secondary cause), as with Joseph's brothers and the crucifixion (Gen 50:20; Acts 4:27-28)." },
    { name: "Everything happens for a reason", type: "Unfalsifiable claim", claim: "Whatever happens, God planned it for good.",
      problem: "If a child's death, a genocide or a cure are all equally 'God's plan', the claim explains everything and therefore nothing. No conceivable event could count against it.",
      scripture: "Jesus refuses to read tragedy as divine messaging: 'Do you think they were worse sinners…? No' (Luke 13:1-5). 'Time and chance happen to them all' (Eccl 9:11).", refs: ["Luke 13:1-5", "Ecclesiastes 9:11"],
      reply: "Defenders reply that Romans 8:28 makes a specific promise to believers, and that trusting an unseen purpose is faith, not an empirical hypothesis." },
    { name: "From Joseph to everything", type: "Hasty generalisation", claim: "Because God planned Joseph's story, Cyrus and the cross, he plans every event.",
      problem: "God's specific saving interventions do not prove meticulous control of all events. A king who directs key battles does not therefore script every soldier's move.",
      scripture: "Scripture also shows events God did not plan or desire (Jer 19:5; 32:35) and plans God changed in response to people (Jer 18:7-10; Jonah 3:10).", refs: ["Jeremiah 32:35", "Jeremiah 18:7-10", "Jonah 3:10"],
      reply: "Defenders cite comprehensive texts like Ephesians 1:11 ('works all things') and Proverbs 16:33 (even the lot is from the LORD)." },
    { name: "Two meanings of 'sovereign'", type: "Equivocation", claim: "God is sovereign, therefore he controls everything.",
      problem: "In Scripture, sovereignty means kingship. Kings reign over subjects who can rebel (Ps 2:1-3). 'Sovereign' slides from 'supreme ruler' to 'controller of every detail', a later philosophical sense.",
      scripture: "Psalm 2 shows nations raging against the LORD's rule; Christ reigns 'until he has put all enemies under his feet' (1 Cor 15:25) — enemies who still oppose him.", refs: ["Psalm 2:1-6", "1 Corinthians 15:24-26"],
      reply: "Defenders say a ruler who could not ultimately control rebellion would not be fully sovereign; God's rule includes overruling rebels." },
    { name: "Fighting what God ordained", type: "Internal contradiction", claim: "God ordains every evil, and we must resist evil.",
      problem: "If every disease, injustice and temptation is God's decree, then praying against it, healing it or resisting the devil means opposing God's will. Yet we are commanded to do exactly that.",
      scripture: "'Resist the devil' (Jas 4:7); 'put on the whole armour of God… against the spiritual forces of evil' (Eph 6:11-12); Jesus healed every disease (Matt 4:23).", refs: ["James 4:7", "Ephesians 6:11-12", "Matthew 4:23"],
      reply: "Defenders say God ordains the means (our resisting and praying) as well as the ends, so there is no contradiction." }
  ],
  strawmen: [
    { lens: "rel", say: "Relational and open theists believe in a weak God who cannot do anything.", real: "Open and relational theists say God's power is the power of love, which by nature does not coerce. God is mighty to save, redeem and raise the dead.",
      counter: "Christ reveals power as self-giving: 'my power is made perfect in weakness' (2 Cor 12:9); he 'emptied himself' (Phil 2:6-8). Love that refuses to control is a strength.", refs: ["2 Corinthians 12:9", "Philippians 2:6-8", "1 Corinthians 1:25"] },
    { lens: "rel", say: "Open theism denies God's omniscience.", real: "Open theists say God knows everything that can be known, including all possibilities. Future free choices are not yet settled facts to be known.",
      counter: "God speaks of the future as partly open: 'I thought, after she has done all this she will return to me, but she did not' (Jer 3:7); 'now I know that you fear God' (Gen 22:12).", refs: ["Jeremiah 3:7", "Genesis 22:12", "Jeremiah 26:3"] },
    { lens: "cv", say: "The warfare worldview is dualism — two equal gods of good and evil.", real: "Satan is a created rebel, already defeated, operating only for a limited time. There is one Creator.",
      counter: "'He disarmed the rulers and authorities' (Col 2:15); 'I saw Satan fall like lightning' (Luke 10:18). A defeated rebel is no rival god.", refs: ["Colossians 2:15", "Luke 10:18", "Revelation 12:9-12"] },
    { lens: "rel", say: "If God doesn't plan suffering, it is meaningless and we have no hope.", real: "Relational theology holds that God redeems all suffering and guarantees the final outcome. Guaranteeing the ending is different from scripting every scene.",
      counter: "Boyd's analogy: a chess master can guarantee victory without determining every move of the opponent. 'In all things God works for the good' (Rom 8:28); 'he will wipe away every tear' (Rev 21:4).", refs: ["Romans 8:28", "Revelation 21:4-5"] }
  ]
},
futurism: {
  syl: { p: ["Prophecy must be read literally.", "Read literally, Revelation and Matthew 24 describe events that have not happened.", "Therefore they are still future."], weak: 0,
    why: "Futurism does not apply its own rule. It reads 'this generation' (Matt 24:34), 'soon' and 'near' (Rev 1:1, 3; 22:10) non-literally, while reading symbols such as the beast, the 1,000 years and the temple literally. A consistent literal reading of the time statements points to the first century.",
    refs: ["Matthew 24:34", "Revelation 1:1-3", "Revelation 22:10", "Matthew 16:28"] },
  fallacies: [
    { name: "Literal when it helps", type: "Selective literalism", claim: "We read prophecy literally.",
      problem: "'This generation' becomes 'a future race'; 'soon' becomes 'two thousand years'; yet 'a thousand years' and 'the temple' must be literal. The interpretive rule changes to protect the system.",
      scripture: "Daniel was told to seal his prophecy because it was far off (Dan 8:26; 12:4); John is told not to seal his because 'the time is near' (Rev 22:10).", refs: ["Daniel 12:4", "Revelation 22:10", "Matthew 10:23"],
      reply: "Futurists reply that God's timescale differs from ours ('with the Lord one day is as a thousand years', 2 Pet 3:8)." },
    { name: "Failed predictions", type: "Unfalsifiable claim", claim: "We are living in the last days; the signs are being fulfilled now.",
      problem: "Every generation since 1830 has identified the Antichrist and the signs in its own headlines (Napoleon, the Kaiser, Hitler, the USSR, the EU). When predictions fail, the dates are reset. Scripture gives a test for prophecy: if it does not come to pass, it was not from the LORD (Deut 18:22).",
      scripture: "'It is not for you to know times or seasons' (Acts 1:7); Deuteronomy 18:22.", refs: ["Deuteronomy 18:22", "Acts 1:7", "Matthew 24:36"],
      reply: "Scholarly dispensationalists condemn date-setting and argue that misuse by popular writers does not discredit the system." },
    { name: "The 2,000-year gap", type: "Argument from silence", claim: "God's prophetic clock stopped after Daniel's 69th week; the 70th is future. The rapture happens seven years before the return.",
      problem: "No text mentions a gap or a seven-year separation between a rapture and the second coming. Both are inferred from silence to make the system work.",
      scripture: "Daniel 9:24 treats the 70 weeks as one decreed period. Jesus places the gathering of the elect 'after the tribulation' (Matt 24:29-31).", refs: ["Daniel 9:24", "Matthew 24:29-31", "1 Corinthians 15:52"],
      reply: "Futurists point to other prophetic gaps, such as Jesus stopping mid-verse in Isaiah 61:2 (Luke 4:19-20)." },
    { name: "Helicopters and barcodes", type: "Anachronism", claim: "Revelation's locusts are attack helicopters; the mark is a microchip.",
      problem: "Revelation was written to seven first-century churches who were expected to understand it (Rev 1:3; 13:18 'let the one who has understanding calculate'). Reading modern technology into it makes the book meaningless to its first readers.",
      scripture: "'Blessed is the one who reads aloud… and blessed are those who hear, and who keep what is written in it' (Rev 1:3).", refs: ["Revelation 1:3-4", "Revelation 13:18"],
      reply: "Some futurists accept the symbolism but argue it points to future realities whose exact form is unknown." },
    { name: "Literal or liberal", type: "False dilemma", claim: "Either you read prophecy as future and literal, or you are 'spiritualising' and liberal.",
      problem: "Partial preterism is held by conservative scholars (Gentry, DeMar, Sproul in part) who affirm inerrancy and the bodily return. The choice is not between literal and liberal but between readings of genre and timing.",
      scripture: "Jesus himself used apocalyptic imagery for historical events: the sun darkening echoes Isaiah 13:10 on Babylon's fall.", refs: ["Isaiah 13:9-10", "Matthew 24:29"],
      reply: "Futurists respond that preterism allegorises too much and leaves Revelation with little to say to later Christians." }
  ],
  strawmen: [
    { lens: "vic", say: "Preterists deny the second coming and the resurrection.", real: "Partial preterists, including victorious eschatology, affirm Christ's future bodily return, the resurrection and final judgment — everything in the historic creeds. Only full (hyper-) preterism denies them, and partial preterists reject it.",
      counter: "Eberle and Trench divide Matthew 24 at verse 35: the AD 70 judgment before, the final coming after. 'This Jesus… will come in the same way' (Acts 1:11).", refs: ["Acts 1:11", "1 Corinthians 15:23-26", "Matthew 24:36"] },
    { lens: "vic", say: "Postmillennialism is humanistic progress and the social gospel.", real: "Victorious eschatology expects the kingdom to grow by the gospel and the Holy Spirit, not human progress. Historic postmillennialists included Jonathan Edwards and Charles Spurgeon in parts.",
      counter: "'Not by might, nor by power, but by my Spirit' (Zech 4:6). The mustard seed grows because God makes it grow (Mark 4:26-32).", refs: ["Zechariah 4:6", "Mark 4:26-32", "Daniel 2:35"] },
    { lens: "vic", say: "Preterism is antisemitic replacement theology.", real: "The AD 70 judgment was announced by a Jewish prophet, Jesus, who wept over Jerusalem. The church began as Jewish and the remnant of Israel is its foundation. Many partial preterists hope for a large-scale Jewish turning to Christ (Rom 11).",
      counter: "Jesus 'wept over it, saying, Would that you had known… the things that make for peace!' (Luke 19:41-44). One olive tree with Jewish roots (Rom 11:17-24) is fulfilment, not replacement.", refs: ["Luke 19:41-44", "Romans 11:17-26", "Ephesians 2:14-16"] },
    { lens: "vic", say: "You don't take the Bible literally.", real: "Preterists take the time texts literally — 'this generation', 'soon', 'some standing here' — and read symbols as symbols, according to genre.",
      counter: "Jesus' own words: 'Truly, I say to you, there are some standing here who will not taste death until they see the Son of Man coming in his kingdom' (Matt 16:28).", refs: ["Matthew 16:28", "Matthew 24:34"] }
  ]
},
reformation: {
  syl: { p: ["Justification is only a legal declaration.", "That declaration is received by faith alone.", "Therefore works play no role in final justification."], weak: 0,
    why: "The verb dikaioō is wider than a courtroom verdict. Romans 6:7 says 'the one who has died has been justified (dedikaiōtai) from sin', meaning freed from it. Paul also says 'the doers of the law will be justified' (Rom 2:13) and that all will appear before Christ's judgment seat 'so that each may receive what is due for what he has done' (2 Cor 5:10).",
    refs: ["Romans 6:7", "Romans 2:6-13", "2 Corinthians 5:10", "James 2:24"] },
  fallacies: [
    { name: "Faith versus works", type: "False dilemma", claim: "Either we are saved by faith or by works.",
      problem: "Paul joins them: 'faith working through love' (Gal 5:6), 'the obedience of faith' (Rom 1:5), 'created in Christ Jesus for good works' (Eph 2:10). Living faith is active loyalty; the dichotomy is later.",
      scripture: "Galatians 5:6; Romans 1:5; James 2:22: 'faith was active along with his works, and faith was completed by his works'.", refs: ["Galatians 5:6", "Romans 1:5", "James 2:22"],
      reply: "Reformed theology agrees faith works, but insists works are the fruit, not the ground, of justification: 'faith alone justifies, but faith that justifies is never alone' (Calvin)." },
    { name: "Reading Trent into Paul", type: "Anachronism", claim: "Paul's opponents were legalists trying to earn salvation, just like medieval Catholics with indulgences.",
      problem: "Paul's dispute was with Jewish Christians requiring Gentiles to be circumcised and keep food laws (Gal 2:11-14; Acts 15:1). Projecting the 16th-century penance controversy onto first-century Judaism misreads both.",
      scripture: "'Unless you are circumcised according to the custom of Moses, you cannot be saved' (Acts 15:1) — the actual controversy.", refs: ["Acts 15:1-11", "Galatians 2:11-16", "Galatians 5:2-6"],
      reply: "Reformed scholars answer that the boundary-marker issue rests on a deeper principle Paul states universally: 'to the one who works, wages are not counted as a gift' (Rom 4:4)." },
    { name: "Three kinds of 'works'", type: "Equivocation", claim: "Paul says 'not by works', so works never justify.",
      problem: "Paul's 'works of the law' (Torah observance), James's 'works' (faith in action, like Abraham's obedience) and good deeds in general are run together. Paul himself says God will give eternal life 'to those who by patience in well-doing seek glory' (Rom 2:7).",
      scripture: "Romans 2:7; James 2:21-24; Galatians 6:7-9 ('whatever one sows, that will he also reap').", refs: ["Romans 2:7", "James 2:21-24", "Galatians 6:7-9"],
      reply: "Defenders say Romans 2 describes the standard of the law, which no one meets (Rom 3:20), leading to grace." },
    { name: "Imputation assumed", type: "Begging the question", claim: "Christ's righteousness is credited to our account.",
      problem: "No verse says Christ's own law-keeping is imputed to believers. Romans 4 says faith is counted as righteousness. The doctrine is assumed and then read into the texts.",
      scripture: "'His faith is counted as righteousness' (Rom 4:5); 'it will be counted to us who believe' (Rom 4:24).", refs: ["Romans 4:3-5,22-24"],
      reply: "Defenders point to Romans 5:19 ('by the one man's obedience the many will be made righteous') and 2 Corinthians 5:21 as implying imputation." },
    { name: "Scripture alone — except James", type: "Special pleading", claim: "Scripture alone judges doctrine.",
      problem: "Luther judged Scripture by his doctrine: he called James 'an epistle of straw' and moved Hebrews, James, Jude and Revelation to the end of his Bible, using the test 'what promotes Christ' (was Christum treibet). The principle was applied selectively.",
      scripture: "'All Scripture is breathed out by God' (2 Tim 3:16) — including James 2:24.", refs: ["James 2:24", "2 Timothy 3:16"],
      reply: "Later Lutherans and all Reformed churches kept James fully canonical and harmonised it with Paul." }
  ],
  strawmen: [
    { lens: "npp", say: "The New Perspective teaches salvation by works.", real: "Sanders' 'covenantal nomism' says Judaism was a religion of grace: you get in by God's election and stay in by obedience. Wright affirms justification by faith and grace throughout.",
      counter: "Wright: justification is God's declaration that those who believe in Jesus belong to his family — by faith, not works of the law.", refs: ["Galatians 3:26-29", "Romans 3:29-30"] },
    { lens: "th", say: "Theosis means humans become God in essence — pantheism.", real: "Orthodox theosis means sharing in God's life and energies by grace, never his essence (Gregory Palamas). Creature and Creator remain distinct.",
      counter: "'Partakers of the divine nature' (2 Pet 1:4); 'we shall be like him' (1 John 3:2) — like, not identical.", refs: ["2 Peter 1:4", "1 John 3:2", "2 Corinthians 3:18"] },
    { lens: "rel", say: "Questioning 'faith alone' means going back to Rome.", real: "Orthodox, Anglican, Wesleyan, Anabaptist and New Perspective scholars all question aspects of forensic justification without accepting Roman Catholic teaching.",
      counter: "A false dilemma: there are more than two options. The question is what Paul meant, not which institution wins.", refs: ["Acts 17:11"] }
  ]
},
sola: {
  syl: { p: ["Only what Scripture teaches is binding.", "Scripture nowhere teaches sola Scriptura or lists its own books.", "Therefore sola Scriptura and the canon are not binding by their own standard."], weak: 0,
    why: "The principle fails its own test. No verse teaches that Scripture alone is the only infallible authority, and no verse lists the 66 books. Both come from the church's tradition. R. C. Sproul conceded the canon is 'a fallible collection of infallible books'.",
    refs: ["2 Thessalonians 2:15", "1 Timothy 3:15", "John 21:25"] },
  fallacies: [
    { name: "A rule not in the rulebook", type: "Self-refutation", claim: "Only Scripture can bind the conscience.",
      problem: "If only what Scripture teaches binds, then sola Scriptura must be taught in Scripture. It is not explicitly taught, so by its own rule it cannot bind.",
      scripture: "Scripture points to oral tradition alongside letters (2 Thess 2:15) and to the church as 'the pillar and buttress of the truth' (1 Tim 3:15).", refs: ["2 Thessalonians 2:15", "1 Timothy 3:15"],
      reply: "Protestants answer that sola Scriptura is a necessary inference from Scripture's unique God-breathed status (2 Tim 3:16) and Jesus' subordination of tradition to God's word (Mark 7)." },
    { name: "The Bible proves the Bible", type: "Circular reasoning", claim: "Scripture is the final authority because Scripture says it is inspired (2 Tim 3:16).",
      problem: "Using a text to establish its own authority — and to decide which texts belong — is circular. 2 Timothy 3:16 cannot tell us whether 2 Timothy, or Jude, or 3 John, is Scripture.",
      scripture: "The New Testament canon was recognised over centuries (Athanasius, AD 367).", refs: ["2 Timothy 3:16", "2 Peter 3:15-16"],
      reply: "Reformed theologians appeal to the Spirit's inner witness: 'my sheep hear my voice' (John 10:27) — believers recognise Scripture as God's voice." },
    { name: "'The word of God'", type: "Equivocation", claim: "The Bible calls itself 'the word of God', so the word of God means the Bible.",
      problem: "In the New Testament 'the word of God' usually means the spoken gospel or Christ himself. Paul calls his oral preaching 'the word of God' (1 Thess 2:13); John calls Jesus 'the Word' (John 1:1); Hebrews 4:12's living 'word' is God's speech that judges.",
      scripture: "1 Thessalonians 2:13; John 1:1,14; Revelation 19:13 ('his name is called The Word of God').", refs: ["1 Thessalonians 2:13", "John 1:1,14", "Revelation 19:13"],
      reply: "Protestants agree Christ is the Word and say the written Word is the only infallible access to him now." },
    { name: "No tradition — except ours", type: "Special pleading", claim: "We follow the Bible, not human tradition.",
      problem: "Every Protestant reads through a tradition: the Trinity's terms (homoousios, 'person'), infant or believer's baptism, confessions and study-Bible notes. The tradition is unacknowledged rather than absent.",
      scripture: "Acts 15 shows the apostles and elders deciding in council; 'it seemed good to the Holy Spirit and to us' (15:28).", refs: ["Acts 15:6-29", "Acts 8:30-31"],
      reply: "Reformers distinguished sola from solo Scriptura: they accepted creeds and tradition as subordinate, testable authorities." },
    { name: "Clear to everyone", type: "Internal contradiction", claim: "Scripture is clear (perspicuous) on what matters.",
      problem: "Its most committed readers disagree on baptism, communion, election, church order, gifts and the end times. Either these matters do not matter, or Scripture is not clear on them without an interpreter.",
      scripture: "'How can I, unless someone guides me?' (Acts 8:31); Paul's letters contain 'things hard to understand' (2 Pet 3:16).", refs: ["Acts 8:30-31", "2 Peter 3:16"],
      reply: "Protestants limit perspicuity to what is necessary for salvation (WCF 1.7), on which they largely agree." }
  ],
  strawmen: [
    { lens: "rel", say: "A Christ-centred reading of Scripture is just picking and choosing.", real: "The Christ-centred reading follows a single, consistent criterion that Jesus himself gave: all Scripture points to him and is interpreted by him.",
      counter: "'Beginning with Moses and all the Prophets, he interpreted to them in all the Scriptures the things concerning himself' (Luke 24:27); 'Listen to him' (Matt 17:5).", refs: ["Luke 24:27,44-45", "Matthew 17:5", "Hebrews 1:1-3"] },
    { lens: "rel", say: "Questioning inerrancy means denying that the Bible is inspired.", real: "Many who question the 19th-century inerrancy theory affirm full inspiration and authority, following Scripture's own stated purpose: 'wise for salvation through faith in Christ' (2 Tim 3:15).",
      counter: "Inerrancy as defined in the Chicago Statement (1978) is a modern formulation; the church held Scripture inspired for 1,800 years without it.", refs: ["2 Timothy 3:15-16", "John 20:31"] },
    { lens: "th", say: "If you reject sola Scriptura, you must accept the pope.", real: "Orthodox, Anglicans (prima Scriptura) and Wesleyans (the 'quadrilateral' of Scripture, tradition, reason and experience) all reject both papal infallibility and sola Scriptura.",
      counter: "A false dilemma: there are several positions between 'Scripture alone' and 'Rome'.", refs: ["Acts 15:28"] }
  ]
},
arminian: {
  syl: { p: ["God loves every person and wills all to be saved.", "God respects libertarian free will absolutely.", "Many people will freely reject God for ever.", "Therefore God's deepest will is permanently defeated for most of humanity."], weak: 2,
    why: "Premise 3 is the weak point. It assumes rejection can be final and eternal, yet Scripture describes God's love as unfailing and his purposes as certain (Isa 46:10; 1 Cor 13:8). It also assumes freedom ends at death, which premise 2 contradicts.",
    refs: ["Isaiah 46:10", "1 Corinthians 13:8", "1 Timothy 2:4", "1 Timothy 4:10"] },
  fallacies: [
    { name: "Freedom until death", type: "Special pleading", claim: "God respects free will absolutely — but after death no one can choose again.",
      problem: "If libertarian freedom is so sacred that God will not override it, why does the opportunity to use it end at death? The principle is suspended exactly where it would lead to hope.",
      scripture: "1 Peter 4:6: 'the gospel was preached even to those who are dead'. The gates of the city are never shut (Rev 21:25).", refs: ["1 Peter 4:6", "Revelation 21:25", "Revelation 22:17"],
      reply: "Arminians reply that death fixes character (Heb 9:27; Luke 16:26), and that the urgency of 'today' (Heb 3:15) implies a deadline." },
    { name: "Foreknowledge without escape", type: "Tu quoque", claim: "Unlike Calvinism, our God never creates people destined for hell.",
      problem: "In classical Arminianism God foreknows exactly who will reject him for ever, and creates them anyway. The moral objection Arminians raise against Calvinism largely applies to them too.",
      scripture: "'I have no pleasure in the death of anyone' (Ezek 18:32).", refs: ["Ezekiel 18:32", "1 Timothy 2:4"],
      reply: "Arminians answer that foreknowledge does not cause; God permits rather than decrees the loss. Some move to open theism to avoid the problem." },
    { name: "Freedom as the highest good", type: "Category error", claim: "Freedom is so valuable that God allows people to destroy themselves for ever.",
      problem: "In Scripture freedom is a means to love, not an end in itself: 'you were called to freedom… through love serve one another' (Gal 5:13). True freedom is freedom for the good (John 8:36). Choosing eternal ruin is bondage, not freedom's fulfilment.",
      scripture: "John 8:34-36; Galatians 5:1,13; Romans 8:21 ('the freedom of the glory of the children of God').", refs: ["John 8:34-36", "Galatians 5:13", "Romans 8:21"],
      reply: "Arminians respond that love that cannot be refused is not love, so freedom to refuse is necessary." }
  ],
  strawmen: [
    { lens: "ur", say: "Universalism means God forces people into heaven like robots.", real: "Universalists hold that God's love persuades and heals every will until each freely says yes. Persuasion is not coercion.",
      counter: "'Every tongue confess' (Phil 2:11) uses exomologeō, the verb of joyful praise. 'The love of Christ compels us' (2 Cor 5:14). A healed will chooses freely.", refs: ["Philippians 2:10-11", "2 Corinthians 5:14", "Jeremiah 31:3"] },
    { lens: "ur", say: "If everyone is saved, why did Jesus need to die?", real: "Universalists believe everyone is saved because Jesus died and rose. The cross is the means of universal reconciliation, not made redundant by it.",
      counter: "'Through him to reconcile to himself all things… making peace by the blood of his cross' (Col 1:20).", refs: ["Colossians 1:20", "1 John 2:2", "John 12:32"] },
    { lens: "ur", say: "Universalism was condemned as Origenism by the ecumenical councils.", real: "The 15 anathemas against Origenism (543/553) attacked a speculative system (pre-existence of souls, the spherical resurrection body). Whether they were formally ratified by the Fifth Council is debated. Gregory of Nyssa, who taught restoration, was never condemned and was honoured at the Seventh Council (787).",
      counter: "The Nicene Creed confesses 'the life of the world to come' and is silent on endless torment.", refs: ["Acts 3:21", "1 Corinthians 15:28"] }
  ]
},
evangelical: {
  syl: { p: ["Salvation means going to heaven when you die.", "Going to heaven requires a personal decision to accept Christ.", "Therefore the church's main task is securing decisions."], weak: 0,
    why: "Premise 1 replaces the Bible's hope. Scripture's hope is bodily resurrection and new creation on a renewed earth (Rom 8:19-23; Rev 21:1-3), and Jesus' gospel is the kingdom of God arriving 'on earth as it is in heaven' (Mark 1:15; Matt 6:10). Salvation includes healing, liberation and new community now.",
    refs: ["Mark 1:14-15", "Matthew 6:10", "Romans 8:19-23", "Revelation 21:1-3"] },
  fallacies: [
    { name: "Four spiritual laws", type: "Proof-texting", claim: "The gospel can be summed up in a few verses: Romans 3:23, 6:23, 5:8, 10:9.",
      problem: "The 'Romans Road' lifts four verses from a sixteen-chapter argument about God's faithfulness and one family of Jews and Gentiles. Revelation 3:20 ('I stand at the door') is addressed to a church, not to unbelievers. Context is removed.",
      scripture: "Paul's own summary: 'the gospel… concerning his Son, descended from David… declared Son of God in power by his resurrection' (Rom 1:1-4); 1 Corinthians 15:1-8.", refs: ["Romans 1:1-4", "1 Corinthians 15:1-8", "Revelation 3:14-20"],
      reply: "Evangelicals answer that summaries are legitimate and the verses accurately state the core of Paul's teaching." },
    { name: "Numbers prove God's blessing", type: "Appeal to popularity", claim: "Our crusades, megachurches and growth show God is with us.",
      problem: "Size and success are not proof of truth. Jesus warned that many who did mighty works in his name would hear 'I never knew you' (Matt 7:22-23).",
      scripture: "Matthew 7:21-23; 1 Samuel 16:7 ('the LORD looks on the heart').", refs: ["Matthew 7:21-23", "1 Samuel 16:7"],
      reply: "Evangelicals say growth is not proof but fruit (Acts 2:47: 'the Lord added to their number')." },
    { name: "'Just biblical' culture", type: "Begging the question", claim: "We just teach what the Bible says.",
      problem: "Much that is presented as 'biblical' — the altar call, the sinner's prayer, the private 'personal relationship', American nationalism — comes from 19th- and 20th-century revivalism and culture. Calling it biblical assumes what needs proving.",
      scripture: "Acts 2:38-42 shows the apostolic pattern: repentance, baptism, the Spirit, teaching, fellowship, bread and prayer.", refs: ["Acts 2:38-42"],
      reply: "Evangelicals agree methods are cultural but insist the message (repent and believe) is apostolic." }
  ],
  strawmen: [
    { lens: "vic", say: "Kingdom theology replaces personal salvation with the social gospel.", real: "Kingdom theology holds personal repentance and faith together with the renewal of society and creation. The kingdom changes hearts first and then spreads.",
      counter: "Jesus: 'The kingdom of God is at hand; repent and believe' (Mark 1:15) — personal response to a public, world-changing reign.", refs: ["Mark 1:15", "Matthew 13:31-33"] },
    { lens: "rel", say: "Relational theology is liberal and denies the authority of the Bible.", real: "Relational and Trinitarian theologians (T. F. Torrance, Baxter Kruger) are often confessionally orthodox and deeply biblical. They differ on interpretation, not authority.",
      counter: "Labels such as 'liberal' are ad hominem. Test the argument: is 2 Corinthians 5:19 ('God was in Christ reconciling the world… not counting their trespasses') relational or not?", refs: ["2 Corinthians 5:19", "John 17:21-23"] },
    { lens: "ur", say: "Believing that people can be saved without hearing of Jesus means Jesus isn't necessary.", real: "Inclusivists and universalists hold that Jesus is the only Saviour of everyone saved. People may be saved by him without knowing his name now.",
      counter: "In Matthew 25 the righteous ask 'Lord, when did we see you?' — they served Christ without knowing it (25:37-40).", refs: ["Matthew 25:37-40", "Acts 4:12", "1 Timothy 4:10"] }
  ]
},
holiness: {
  syl: { p: ["God commands perfection ('be perfect').", "God never commands what is impossible.", "Therefore sinless perfection is attainable in this life."], weak: 1,
    why: "Premise 2 ('ought implies can') was Pelagius's key argument against Augustine. The law commands perfect love and also exposes our inability: 'by works of the law no human being will be justified… through the law comes knowledge of sin' (Rom 3:20). And 'perfect' (teleios) means complete or mature, so premise 1 equivocates.",
    refs: ["Romans 3:20", "Romans 7:7-12", "Galatians 3:21-24", "Matthew 5:48"] },
  fallacies: [
    { name: "Two meanings of 'perfect'", type: "Equivocation", claim: "Jesus said 'be perfect', so sinless perfection is the goal.",
      problem: "Teleios means complete or mature. Paul in one breath says he is not yet teleios (Phil 3:12) and that 'those of us who are teleioi' should think this way (3:15). Mature and sinless are different things.",
      scripture: "Philippians 3:12,15; Luke 6:36 ('Be merciful, even as your Father is merciful').", refs: ["Philippians 3:12-15", "Luke 6:36", "James 1:4"],
      reply: "Wesleyans agree perfection is perfect love, not sinless infallibility, and say this is exactly what Wesley taught." },
    { name: "Redefining sin", type: "Moving the goalposts", claim: "Christians can be free from all sin (defined as 'a wilful transgression of a known law').",
      problem: "Sin is narrowed to deliberate acts so that perfection can be claimed, while 'involuntary transgressions' are set aside. Scripture counts unintentional sins as sins needing atonement (Lev 4:2; Ps 19:12 'hidden faults').",
      scripture: "'We all stumble in many ways' (Jas 3:2); 'If we say we have no sin, we deceive ourselves' (1 John 1:8).", refs: ["Leviticus 4:2", "Psalm 19:12", "James 3:2", "1 John 1:8"],
      reply: "Wesleyans reply that the distinction is biblical (Num 15:27-31 contrasts unintentional sin with sin 'with a high hand') and pastorally necessary." },
    { name: "I experienced it", type: "Anecdotal evidence", claim: "Thousands have testified to the experience of entire sanctification.",
      problem: "A powerful experience shows that something happened, not what it was. Many later lost the 'experience', and others in every tradition report similar crises of surrender interpreted differently.",
      scripture: "'Test the spirits' (1 John 4:1); 'examine yourselves' (2 Cor 13:5).", refs: ["1 John 4:1", "2 Corinthians 13:5"],
      reply: "Holiness teachers ground the doctrine in Scripture first and treat testimony as confirmation." }
  ],
  strawmen: [
    { lens: "rel", say: "Those who deny entire sanctification are content to keep sinning.", real: "Relational, Orthodox and Reformed believers all pursue holiness seriously. They see it as growth in love and union with God rather than a single crisis.",
      counter: "'We all… are being transformed… from one degree of glory to another' (2 Cor 3:18). Rejecting a second crisis is not accepting sin.", refs: ["2 Corinthians 3:18", "Hebrews 12:14"] },
    { lens: "cv", say: "Teaching that sin's power is already broken is cheap grace and licence to sin.", real: "Christus Victor teaching says that because sin's dominion is broken, believers should live free. Victory is the ground of obedience, not an excuse.",
      counter: "'Shall we sin that grace may abound? By no means! How can we who died to sin still live in it?' (Rom 6:1-2). Grace 'trains us to renounce ungodliness' (Titus 2:11-12).", refs: ["Romans 6:1-14", "Titus 2:11-12"] }
  ]
},
progressive: {
  syl: { p: ["Indwelling sin remains in every believer until death.", "Sanctification is the believer's lifelong fight against that sin.", "Therefore defeat and struggle (Romans 7) are the normal Christian life."], weak: 2,
    why: "The conclusion confuses temptation and weakness with sin's dominion. Paul says 'sin will have no dominion over you, since you are not under law but under grace' (Rom 6:14) and that believers 'have been set free from sin' (6:18). Romans 7's 'I am of the flesh, sold under sin' (7:14) contradicts this if read as normal Christian experience.",
    refs: ["Romans 6:14,18,22", "Romans 7:14", "Romans 8:2-4"] },
  fallacies: [
    { name: "Ignoring the past tenses", type: "Proof-texting", claim: "Sanctification is a process that is never finished.",
      problem: "Most New Testament uses of sanctification are in the past tense: 'you were sanctified' (1 Cor 6:11); 'we have been sanctified… once for all' (Heb 10:10); 'sanctified by faith in me' (Acts 26:18). A purely progressive model selects the present-tense texts.",
      scripture: "1 Corinthians 6:11; Hebrews 10:10,14; Acts 20:32; 26:18.", refs: ["1 Corinthians 6:11", "Hebrews 10:10,14", "Acts 26:18"],
      reply: "Reformed theologians affirm definitive sanctification (John Murray) alongside progressive sanctification; they deny the charge of selectivity." },
    { name: "Description becomes prescription", type: "Hasty generalisation", claim: "Paul struggled in Romans 7, so struggling is normal.",
      problem: "Even if Romans 7 described Paul's Christian experience, it would not follow that defeat is God's design. Paul answers his own cry with 'Thanks be to God through Jesus Christ' and Romans 8's life in the Spirit.",
      scripture: "Romans 7:24-8:4; Galatians 5:16 ('walk by the Spirit, and you will not gratify the desires of the flesh').", refs: ["Romans 7:24-8:4", "Galatians 5:16"],
      reply: "Defenders reply that the struggle itself is evidence of the Spirit's presence, since the unregenerate do not 'delight in the law of God' (7:22)." },
    { name: "Humility that cannot be wrong", type: "Unfalsifiable claim", claim: "Anyone who claims real victory over sin is proud, which proves sin remains.",
      problem: "If any testimony of freedom counts as evidence of pride, no evidence could ever show that grace works. The claim protects itself from correction.",
      scripture: "Paul says, 'Be imitators of me' (1 Cor 11:1) and 'I have fought the good fight… I have kept the faith' (2 Tim 4:7).", refs: ["1 Corinthians 11:1", "2 Timothy 4:7", "Philippians 4:9"],
      reply: "Defenders say Paul's confidence rests on Christ's work, and that he still calls himself 'the foremost' of sinners (1 Tim 1:15)." }
  ],
  strawmen: [
    { lens: "rel", say: "Identity-in-Christ teaching is hyper-grace that ignores repentance.", real: "Relational teachers affirm confession, repentance and discipline. They ground them in being loved and joined to Christ rather than in fear of failing.",
      counter: "'If we confess our sins, he is faithful and just to forgive' (1 John 1:9); the Father's discipline proves we are sons (Heb 12:5-11).", refs: ["1 John 1:9", "Hebrews 12:5-11", "Romans 2:4"] },
    { lens: "th", say: "Theosis is a form of perfectionism and spiritual pride.", real: "Eastern spirituality treats humility and repentance as the heart of growth: the Jesus Prayer ends 'have mercy on me, a sinner'. Growth into God never ends.",
      counter: "'God opposes the proud but gives grace to the humble' (1 Pet 5:5) — the Orthodox path to theosis is through humility.", refs: ["1 Peter 5:5-6", "Philippians 3:12-14"] }
  ]
}
};

/* Fair play: strawmen often used AGAINST the traditional doctrines, with corrections. */
TC.fairplay = [
  { doc: "psa", say: "Penal substitution is 'cosmic child abuse'.", real: "Penal substitution teaches that the Son, an adult and fully God, freely gives himself in one will with the Father: 'No one takes it from me, but I lay it down of my own accord' (John 10:18).", refs: ["John 10:17-18", "Galatians 2:20"] },
  { doc: "psa", say: "Penal substitution is pagan appeasement of an angry god.", real: "In pagan appeasement humans bribe a hostile deity. In penal substitution God himself provides the sacrifice because he loves: 'God shows his love for us in that while we were still sinners, Christ died for us' (Rom 5:8).", refs: ["Romans 5:8", "John 3:16", "1 John 4:10"] },
  { doc: "hell", say: "Believers in eternal torment enjoy the thought of hell and worship a torturer.", real: "Most traditionalists hold the doctrine soberly and with grief; many (C. S. Lewis, Tim Keller) describe hell as self-chosen separation rather than God actively torturing.", refs: ["Romans 9:2-3"] },
  { doc: "sovereignty", say: "Calvinists believe God made people robots.", real: "Compatibilists affirm that humans make real, willing choices for which they are responsible; they deny only that those choices are outside God's plan.", refs: ["Philippians 2:12-13", "Acts 4:27-28"] },
  { doc: "futurism", say: "All dispensationalists are date-setters and warmongers.", real: "Academic dispensationalists (Charles Ryrie, Darrell Bock, Craig Blaising) reject date-setting, and progressive dispensationalism stresses the kingdom's present inauguration.", refs: ["Matthew 24:36"] },
  { doc: "evangelical", say: "Evangelicals only care about heaven, not justice.", real: "Evangelicals led the abolition of the slave trade (Wilberforce, the Clapham Sect), prison reform and much of modern mission healthcare. The Lausanne Covenant (1974) joins evangelism and social action.", refs: ["Micah 6:8", "James 1:27"] },
  { doc: "reformation", say: "The Reformers invented 'faith alone' in the 16th century.", real: "The phrase appears earlier: Origen's Romans commentary (in Rufinus's Latin, 'sola fide'), Ambrosiaster and others. The Reformers argued they were recovering, not inventing.", refs: ["Romans 3:28", "Romans 4:5"] },
  { doc: "sola", say: "Sola Scriptura means every Christian reads the Bible alone with no tradition.", real: "That is 'solo Scriptura'. The Reformers kept the creeds, the fathers and confessions as subordinate authorities tested by Scripture.", refs: ["Acts 17:11"] },
  { doc: "all", say: "A pagan influence proves a doctrine is false.", real: "That is the genetic fallacy: where an idea came from does not decide whether it is true. John borrows the Greek term 'Logos' (John 1:1) and Paul quotes pagan poets (Acts 17:28). The Influence map in this app shows history, not proof; each doctrine must be tested by Scripture and reason.", refs: ["John 1:1", "Acts 17:28", "Titus 1:12"] }
];
