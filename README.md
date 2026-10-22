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
| Influence map | Network map: influences → doctrines → challenging lenses |
| Timeline | About 100 dated events from AD 135 to 2019, with filters |
| Flowcharts | Each doctrine's logic chain beside the alternative chain, plus a "Pathfinder" decision tree |
| Matrix | A heatmap of which lens challenges which doctrine |
| Contested texts | 24 key verses, each with the traditional and the alternative reading, searchable |
| Spectrums | Where church fathers and modern theologians stand on four questions |
| Sources | Scholarship and primary texts, including critics of the alternative views |

Seven colour schemes are available from the swatches in the header. The schemes are Follow device, Vellum, Jordan, Olive, Nave, Icon and Ember. The app uses Avenir Next, falling back to Nunito Sans where Avenir Next isn't installed.

## Run

It's a static site with no build step. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Content lives in `js/data.js`, the deep study in `js/study-1.js` to `js/study-3.js`, the word studies in `js/words.js` to `js/words-4.js`, the Isaiah 53:10 textual study in `js/isaiah.js`, and the logic and fallacy analysis in `js/logic.js`, so you can add doctrines, lenses, texts or sources there.
