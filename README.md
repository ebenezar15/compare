# Theology Compass

An interactive study app that examines ten Western doctrines — Western Evangelicalism, Penal Substitution, the Holiness movement, Reformation theology, Sola Scriptura, Arminian-Wesleyan theology, Progressive Sanctification, God's sovereignty in suffering, Traditional Hell (eternal conscious torment) and Futurism/Dispensationalism. It covers each doctrine's:

- roots, formation and history (with a timeline)
- key scriptures
- pagan, philosophical and cultural influences
- what the church fathers held
- contradictions and tensions critics find in Scripture
- answers from alternative lenses: Relational Gospel, Victorious Eschatology, Christus Victor, Universal Reconciliation, Conditional Immortality, Theosis, and the New Perspective on Paul
- the defenders' reply, so both sides are heard

## Views

| View | What it shows |
| --- | --- |
| Overview | Compass diagram, doctrine and lens cards, a chart of when each doctrine took shape |
| Doctrines | A full dossier for each doctrine, in eight tabs |
| Deep study | 96 proof texts and biblical cases (for example the Passover lamb, Job, Pharaoh, the rich man and Lazarus, Gog and Magog), each with the argument a doctrine's defenders build, 167 counter-readings from the alternative views, and the defenders' reply |
| Logic & fallacies | For each doctrine: its core argument as a syllogism with the failing premise marked, 44 named logical and scriptural fallacies (each with the claim, why the logic fails, what Scripture says and the defenders' reply), 33 strawmen used against the alternative views set beside what those views actually hold, 9 fair-play corrections of strawmen used against the doctrines, and a fallacy glossary with frequency bars |
| Word studies | 106 Greek, Hebrew and Aramaic words often read through legal, evangelical or Calvinist frameworks, such as kolasis, aiōnios, hilastērion, kipper, nasa' 'awon, dakka', ḥaphets, dikaioō, logizomai, pistis, kosmos, pas, eklektos, proorizō, hyper/anti, metanoia, euangelion, basileia, genea and harpazō. Each has its root, both readings, an evidence trail (451 sources in total: classical Greek, Septuagint, Second Temple, Dead Sea Scrolls, rabbinic, papyri and inscriptions, church fathers, lexicons, scholarship) marked by which reading each supports, and a balanced verdict. Opens with a textual study of Isaiah 53:10 comparing the Masoretic text ('crush'), Qumran, the Septuagint ('cleanse him from his wound'), the Targum, the Vulgate and the KJV |
| Hebrew vs Greek | 13 textual studies where the Septuagint and the Hebrew (Masoretic) text differ: Isaiah 53:10, Psalm 40:6, Amos 9:12, Habakkuk 2:4, Deuteronomy 32:8, Psalm 2:9, Hosea 13:14, Isaiah 45:23, Isaiah 61:1, Jeremiah 31:32, Isaiah 7:14, Psalm 8:5 and Proverbs 3:34. Each has the differing words highlighted, the witnesses in their original languages, the cause of the difference, which reading the New Testament quotes, what is at stake for each doctrine, and a verdict. Opens with a text-transmission timeline and the five ways a verse can change |
| Romans 9 review | An illustrated version of the review "15 Inconsistencies in a Calvinist Sermon on Romans 9:6–13": a countdown ring, a diagram of the either/or framing, the statement-of-faith triangle, a map of the Old Testament texts Romans 9 quotes, the "believe for yourself" loop, a what-if grid, and the 15 points with a short Calvinist answer to each |
| Influence map | Network map: influences → doctrines → challenging lenses |
| Timeline | About 100 dated events from AD 135 to 2019, with filters |
| Flowcharts | Each doctrine's logic chain beside the alternative chain, plus a "Pathfinder" decision tree |
| Matrix | A heatmap of which lens challenges which doctrine |
| Contested texts | 24 key verses, each with the traditional and the alternative reading, searchable |
| Spectrums | Where church fathers and modern theologians stand on four questions |
| Sources | Scholarship and primary texts, including critics of the alternative views |

## Design and motion

- **Sidebar navigation** groups the 16 views into Explore, Language, Reason, See it and Check, with icons. On phones it becomes a slide-out drawer.
- **Search everything:** press Ctrl K (⌘ K on Mac) or / to search doctrines, deep-study texts, words, Hebrew vs Greek verses, fallacies, strawmen, Romans 9 points and contested texts, then jump straight to the result.
- **Motion:** an animated constellation hero, view transitions, staggered entrances, diagram lines that draw themselves, numbers that count up, bars that grow, a cursor spotlight on cards, a reading-progress bar and a back-to-top button. Motion switches off when the device asks for reduced motion.

Seven colour schemes are available from the swatches in the header. The schemes are Follow device, Vellum, Jordan, Olive, Nave, Icon and Ember. The app uses Avenir Next, falling back to Nunito Sans where Avenir Next isn't installed.

## Run

It's a static site with no build step. The interface layer is `css/redesign.css` and `js/ui.js`. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Content lives in `js/data.js`, the deep study in `js/study-1.js` to `js/study-3.js`, the word studies in `js/words.js` to `js/words-4.js`, the textual studies in `js/isaiah.js` and `js/lxx.js`, the Romans 9 review in `js/romans9.js`, and the logic and fallacy analysis in `js/logic.js`, so you can add doctrines, lenses, texts or sources there.
