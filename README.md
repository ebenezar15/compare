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
| Word studies | 22 Greek and Hebrew terms, such as aiōnios, kolasis, Gehenna, hilastērion, dikaiosynē, genea and apantēsis, each with the traditional and the alternative reading |
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

Content lives in `js/data.js`, the deep study in `js/study-1.js` to `js/study-3.js`, and the word studies in `js/words.js`, so you can add doctrines, lenses, texts or sources there.
