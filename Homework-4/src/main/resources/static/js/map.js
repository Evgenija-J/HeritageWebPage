var map = L.map('map').setView([41.608635, 21.745275], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const monuments = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "@id": "relation/6620184",
            "access": "yes",
            "castle_type": "fortress",
            "historic": "castle",
            "historic:civilization": "medieval",
            "landuse": "meadow",
            "name": "Маркови Кули",
            "name:en": "Marko\s Towers",
            "name:mk": "Маркови Кули",
            "ruins": "wall",
            "tourism": "attraction",
            "type": "multipolygon",
            "wikidata": "Q1283784",
            "wikipedia": "en:Markovi Kuli",
            "@geometry": "center"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                21.5385014,
                41.361658
            ]
        },
        "id": "relation/6620184"
    },
        {
            "type": "Feature",
            "properties": {
                "@id": "relation/15078753",
                "archaeological_site": "settlement",
                "historic": "archaeological_site",
                "historic:civilization": "prehistoric",
                "name": "Куќата на Мантови",
                "name:en": "House of Mantov",
                "name:mk": "Куќата на Мантови",
                "type": "multipolygon",
                "wikidata": "Q98356997",
                "wikipedia": "mk:Куќата на Мантови (Варош)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5404478,
                    41.3553603
                ]
            },
            "id": "relation/15078753"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/32463336",
                "historic": "archaeological_site",
                "historic:civilization": "ancient_roman",
                "historic:period": "principate",
                "int_name": "Skupi",
                "name": "Скупи",
                "name:en": "Scupi",
                "tourism": "attraction",
                "wikidata": "Q149203",
                "wikimedia_commons": "Category:Scupi",
                "wikipedia": "mk:Скупи",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3925592,
                    42.0165648
                ]
            },
            "id": "way/32463336"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/32885596",
                "historic": "monument",
                "int_name": "Francuski Grobišta",
                "landuse": "cemetery",
                "name": "Француски гробишта",
                "name:en": "French Cemetery",
                "name:pl": "Cmentarz francuski",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4298358,
                    42.008356
                ]
            },
            "id": "way/32885596"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/33100249",
                "historic": "castle",
                "int_name": "Tetovsko Kale",
                "name": "Тетовско Кале",
                "name:en": "Tetovo Fortress",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.960082,
                    42.0193826
                ]
            },
            "id": "way/33100249"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/34093752",
                "castle_type": "fortress",
                "historic": "castle",
                "int_name": "Samuilova tvrdina",
                "name": "Самуилова тврдина",
                "name:en": "Samuil\s Fortress",
                "name:pl": "Twierdza Samuela",
                "tourism": "attraction",
                "wheelchair": "no",
                "wikidata": "Q1283801",
                "wikipedia": "mk:Самуилова тврдина",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7910567,
                    41.1152832
                ]
            },
            "id": "way/34093752"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/34093853",
                "amenity": "theatre",
                "historic": "archaeological_site",
                "int_name": "Antički Teatar",
                "name": "Антички театар",
                "name:en": "Ancient Theatre",
                "name:fr": "Théatre antique",
                "name:lt": "Antikinis Teatras",
                "name:pl": "Teatr Antyczny",
                "name:tr": "Antik Tiyatro",
                "tourism": "attraction",
                "wheelchair": "no",
                "wikidata": "Q3180446",
                "wikipedia": "mk:Антички театар (Охрид)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7938144,
                    41.1146399
                ]
            },
            "id": "way/34093853"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/34094279",
                "archaeological_site": "city",
                "historic": "archaeological_site",
                "int_name": "Plaošnik",
                "name": "Плаошник",
                "name:en": "Plaoshnik",
                "name:fr": "Site dit « Lieu plat sur la colline » (Plaoshnik)",
                "ruins": "wall",
                "tourism": "attraction",
                "wikidata": "Q7201685",
                "wikipedia": "mk:Плаошник",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7908576,
                    41.1128239
                ]
            },
            "id": "way/34094279"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/37748507",
                "addr:city": "Битола",
                "addr:postcode": "7000",
                "amenity": "clock",
                "building": "yes",
                "historic": "tower",
                "int_name": "Saat Kula",
                "man_made": "tower",
                "name": "Саат Кула",
                "name:en": "Clock Tower",
                "name:pl": "Wieża zegarowa",
                "tourism": "attraction",
                "tower:type": "bell_tower",
                "wikipedia": "mk:Саат-кула_(Битола)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3338976,
                    41.0308805
                ]
            },
            "id": "way/37748507"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/37956139",
                "historic": "archaeological_site",
                "int_name": "Heraklea Linkestis",
                "name": "Хераклеа Линкестис",
                "name:en": "Heraclea Lyncestis",
                "name:fr": "Heraclea Lyncestis",
                "ruins": "yes",
                "tourism": "attraction",
                "wikidata": "Q1142395",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3423417,
                    41.011111
                ]
            },
            "id": "way/37956139"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/159068224",
                "building": "yes",
                "historic": "monument",
                "int_name": "Spomenik Kosturnica",
                "name": "Споменик Костурница",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.7226462,
                    42.1453963
                ]
            },
            "id": "way/159068224"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/172186249",
                "addr:city": "Cкoпje",
                "addr:city:en": "Skopje",
                "addr:country": "MK",
                "addr:housenumber": "2",
                "addr:postcode": "1000",
                "addr:street": "Самоилова",
                "addr:street:en": "Samoilova",
                "building": "public",
                "email": "info@holocaustfund.org.mk",
                "fax": "+389 2 3232310",
                "historic": "memorial",
                "int_name": "Memorijalen centar na holokaustot na Evreite na Makedonija",
                "name": "Меморијален центар на холокаустот на Евреите од Македонија",
                "name:en": "Holocaust Memorial Center for the Jews of Macedonia",
                "name:tr": "Holocaust Memorial Center for the Jews of Macedonia",
                "name:zh": "犹太人大屠杀纪念中心",
                "phone": "+389 2 3122697",
                "tourism": "museum",
                "website": "https://www.holocaustfund.org/",
                "wikidata": "Q3333150",
                "wikimedia_commons": "Category:Holocaust Memorial Center for the Jews of Macedonia",
                "wikipedia": "en:Holocaust Memorial Center for the Jews of Macedonia",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4333832,
                    41.9984656
                ]
            },
            "id": "way/172186249"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/179291828",
                "alt_name": "Свети Наум",
                "alt_name:cs": "klášter Svatý Naum",
                "amenity": "place_of_worship",
                "building": "yes",
                "denomination": "macedonian_orthodox",
                "historic": "church",
                "int_name": "Manastir Sveti Naum",
                "name": "Манастир „Свети Наум“",
                "name:cs": "klášter svatého Nauma",
                "name:de": "Kloster Sveti Naum",
                "name:en": "Monastery of Saint Naum",
                "name:fr": "Monastère Saint-Naum",
                "name:mk": "Манастир „Свети Наум“",
                "name:pl": "Monastyr Św. Nauma",
                "name:sq": "Manastiri i Shën Naumit",
                "name:tr": "Aziz Naum Manastırı",
                "religion": "christian",
                "tourism": "attraction",
                "wikidata": "Q164216",
                "wikipedia": "en:Monastery of Saint Naum",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7406423,
                    40.9139505
                ]
            },
            "id": "way/179291828"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/180360206",
                "bridge": "aqueduct",
                "historic": "aqueduct",
                "historic:civilization": "byzantine",
                "int_name": "Akvadukt Skopje",
                "layer": "1",
                "name": "Аквадукт Скопје",
                "name:en": "Skopje Aqueduct",
                "name:pl": "Akwedukt w Skopje",
                "tourism": "attraction",
                "wall": "dry_stone",
                "wikidata": "Q862032",
                "wikimedia_commons": "Category:Skopje Aqueduct",
                "wikipedia": "en:Skopje Aqueduct",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.419311,
                    42.022259
                ]
            },
            "id": "way/180360206"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/181727867",
                "alt_name": "Осоговски Манастир",
                "alt_name:en": "Osogovski Manastir",
                "amenity": "monastery",
                "denomination": "orthodox",
                "historic": "monastery",
                "int_name": "Manastir Sv. Joakim Osogovski",
                "name": "Манастир Св. Јоаким Осоговски",
                "name:en": "Monastery of St. Joakim Osogovski",
                "name:mk": "Манастир Св. Јоаким Осоговски",
                "religion": "christian",
                "tourism": "attraction",
                "wikidata": "Q1283734",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.3623436,
                    42.208794
                ]
            },
            "id": "way/181727867"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/181986735",
                "alt_name": "Манастир „Св. Архангел Михаил“",
                "alt_name:en": "Saint Michael\s Monastery",
                "amenity": "monastery",
                "building": "yes",
                "denomination": "orthodox",
                "historic": "yes",
                "int_name": "Lesnovski Manastir",
                "is_in": "Лесново",
                "name": "Лесновски манастир",
                "name:en": "Lesnovo Monastery",
                "religion": "christian",
                "tourism": "attraction",
                "wikipedia": "mk:Лесновски манастир",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.2284115,
                    42.0132986
                ]
            },
            "id": "way/181986735"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/182927657",
                "amenity": "place_of_worship",
                "denomination": "orthodox",
                "historic": "yes",
                "int_name": "Manastir Sv. Bogorodica",
                "leisure": "garden",
                "name": "Манастир Св. Богородица",
                "name:en": "St. Holy Mother of God Monastery",
                "place_of_worship:type": "monastery",
                "religion": "christian",
                "tourism": "attraction",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4283099,
                    42.1255318
                ]
            },
            "id": "way/182927657"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/182933841",
                "amenity": "place_of_worship",
                "denomination": "orthodox",
                "fenced": "yes",
                "historic": "yes",
                "int_name": "Manastir Sv. Nikola",
                "name": "Манастир Св. Никола",
                "name:en": "Saint Nicholas Monastery",
                "religion": "christian",
                "tourism": "attraction",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4695998,
                    42.1097792
                ]
            },
            "id": "way/182933841"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/184313963",
                "access": "no",
                "building": "yes",
                "historic": "tower",
                "int_name": "Srednovekovna Kula",
                "man_made": "tower",
                "name": "Средновековна Кула",
                "name:en": "Medieval Tower",
                "tower:type": "defensive",
                "wikidata": "Q122459539",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.4120811,
                    41.9234042
                ]
            },
            "id": "way/184313963"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/189909367",
                "historic": "ruins",
                "int_name": "Bargala",
                "name": "Баргала",
                "name:en": "Bargala",
                "tourism": "attraction",
                "wikipedia": "mk:Баргала",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.2905474,
                    41.7990258
                ]
            },
            "id": "way/189909367"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/192121734",
                "addr:city": "Битола",
                "addr:street": "Цане Василев",
                "amenity": "place_of_worship",
                "building": "mosque",
                "historic": "yes",
                "name": "Џамија Ајдар Кади",
                "name:pl": "Meczet Ajdar Kadi",
                "religion": "muslim",
                "tourism": "attraction",
                "wikipedia": "mk:Ајдар-кади_џамија",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3384693,
                    41.0349717
                ]
            },
            "id": "way/192121734"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/192125506",
                "alt_name:mk": "Кичевско кале",
                "building": "yes",
                "historic": "monument",
                "name": "Китино Кале",
                "name:en": "Kita Castle",
                "name:mk": "Китино Кале",
                "name:sq": "Kalaja e Kërçovës",
                "tourism": "attraction",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9663948,
                    41.5129735
                ]
            },
            "id": "way/192125506"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/199052359",
                "historic": "archaeological_site",
                "name": "Стара базилика",
                "name:en": "Old Basilica",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9887439,
                    40.8670435
                ]
            },
            "id": "way/199052359"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/199052629",
                "historic": "archaeological_site",
                "name": "Римска цистерна",
                "name:en": "Roman Cistern",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9904397,
                    40.8681483
                ]
            },
            "id": "way/199052629"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/199056987",
                "historic": "archaeological_site",
                "name": "Старохристијанска базилика",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9907631,
                    40.868899
                ]
            },
            "id": "way/199056987"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/199056990",
                "historic": "archaeological_site",
                "name": "Римска куќа",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.990465,
                    40.8692875
                ]
            },
            "id": "way/199056990"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/199056991",
                "historic": "archaeological_site",
                "name": "Ранохристијанска базилика",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9910802,
                    40.8692252
                ]
            },
            "id": "way/199056991"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/209092691",
                "email": "contact@stobi.mk",
                "facebook": "https://www.facebook.com/Stobaeus/",
                "historic": "archaeological_site",
                "historic:civilization": "ancient_roman;macedonian",
                "int_name": "Stobi",
                "name": "Стоби",
                "name:en": "Stobi",
                "name:pl": "Stobi",
                "opening_hours": "Mo-Sa 08:00-16:00",
                "phone": "+389 75 210 752",
                "tourism": "attraction",
                "website": "http://www.stobi.mk",
                "wikidata": "Q1371168",
                "wikipedia": "mk:Стоби",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9734409,
                    41.5520256
                ]
            },
            "id": "way/209092691"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/212703196",
                "archaeological_site": "fortification",
                "fortification_type": "hill_fort",
                "historic": "archaeological_site",
                "int_name": "Carevi Kuli",
                "name": "Цареви Кули",
                "name:en": "Czar’s Towers",
                "tourism": "attraction",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.6300225,
                    41.4324514
                ]
            },
            "id": "way/212703196"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/217563724",
                "building": "yes",
                "historic": "memorial",
                "name": "Спомен куќа Тоше Проески",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2462721,
                    41.3744382
                ]
            },
            "id": "way/217563724"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/217568679",
                "artist_name": "Jovan Grabulovski;Iskra Grabuloska",
                "building": "yes",
                "historic": "monument",
                "image": "https://upload.wikimedia.org/wikipedia/commons/f/fe/%D0%9C%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D0%B8%D1%83%D0%BC_-_%D0%9A%D1%80%D1%83%D1%88%D0%B5%D0%B2%D0%BE.jpg",
                "name": "Македониум",
                "tourism": "museum",
                "wikidata": "Q2717956",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2483714,
                    41.377408
                ]
            },
            "id": "way/217568679"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/217836998",
                "barrier": "wire_fence",
                "historic": "ruins",
                "name": "Базилика Свети Еразмо",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7630671,
                    41.1406241
                ]
            },
            "id": "way/217836998"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/217849357",
                "building": "yes",
                "historic": "monastery",
                "name": "Манастир „Свети Наум",
                "name:cs": "Klášter sv. Nauma",
                "name:en": "The Monastery of Saint Naum",
                "name:sq": "Manastiri i Shën Naumit",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7406601,
                    40.9138479
                ]
            },
            "id": "way/217849357"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/223008200",
                "historic": "archaeological_site",
                "name": "Кале",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3147229,
                    41.2582098
                ]
            },
            "id": "way/223008200"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/226160304",
                "building": "yes",
                "historic": "ruins",
                "int_name": "Roman Theater of Heraclea Lyncestis",
                "name": "Roman Theater of Heraclea Lyncestis",
                "name:en": "Roman Theater of Heraclea Lyncestis",
                "name:fr": "Théatre romain de Heraclea Lyncestis",
                "wikipedia": "en:Heraclea Lyncestis",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3421911,
                    41.0114425
                ]
            },
            "id": "way/226160304"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/226161294",
                "historic": "ruins",
                "historic:civilization": "ancient_roman",
                "name": "Антички театар",
                "name:en": "ancient theater of Stobi",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.974682,
                    41.5514392
                ]
            },
            "id": "way/226161294"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/227433408",
                "historic": "archaeological_site",
                "int_name": "Vardarski Rid",
                "name": "Вардарски Рид",
                "name:en": "Vardar Hill",
                "tourism": "attraction",
                "wikipedia": "mk:Вардарски рид",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.5217936,
                    41.1485732
                ]
            },
            "id": "way/227433408"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/229632394",
                "area": "yes",
                "historic": "archaeological_site",
                "name": "Isar-Marvinci",
                "website": "https://vici.org/vici/Idomenia",
                "wikipedia": "en:Idomenae",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.4937195,
                    41.2774735
                ]
            },
            "id": "way/229632394"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/231344771",
                "historic": "archaeological_site",
                "historic:civilization": "neolithic",
                "int_name": "Tumba Madžari",
                "name": "Тумба Маџари",
                "name:en": "Tumba Madzhari",
                "tourism": "attraction",
                "wikidata": "Q3408436",
                "wikimedia_commons": "Category:Tumba Madžari",
                "wikipedia": "mk:Тумба (Маџари)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5054395,
                    42.0014931
                ]
            },
            "id": "way/231344771"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/232843018",
                "historic": "castle",
                "name": "Маркови Кули",
                "name:en": "Markovi Kuli",
                "ruins": "yes",
                "tourism": "attraction",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.6992927,
                    41.838076
                ]
            },
            "id": "way/232843018"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/239422349",
                "addr:city": "Cкoпje",
                "addr:city:en": "Skopje",
                "addr:country": "MK",
                "addr:housenumber": "4А",
                "addr:postcode": "1000",
                "addr:street": "11 Октомври",
                "building": "yes",
                "email": "PortaMK@mmb.org.mk",
                "historic": "monument",
                "int_name": "Porta Makedonija",
                "name": "Порта Македонија",
                "name:en": "Porta Macedonia",
                "name:lt": "Triumfo arka",
                "name:tr": "Porta Macedonia",
                "phone": "+389 2 3151141",
                "wikidata": "Q3078453",
                "wikimedia_commons": "Category:Porta Makedonija",
                "wikipedia": "en:Porta Macedonia",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4324253,
                    41.9944541
                ]
            },
            "id": "way/239422349"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/240346454",
                "historic": "archaeological_site",
                "name": "Градиште",
                "name:en": "Gradishte",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2184749,
                    41.2409433
                ]
            },
            "id": "way/240346454"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/240622723",
                "historic": "archaeological_site",
                "name": "Стибера",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3985818,
                    41.2441604
                ]
            },
            "id": "way/240622723"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/241085465",
                "addr:city": "Tetovo",
                "addr:postcode": "1220",
                "addr:street": "Браќа Миладинови",
                "amenity": "place_of_worship",
                "building": "mosque",
                "denomination": "sunni",
                "historic": "yes",
                "name": "Шарена Џамија",
                "name:en": "Pasha\s Mosque",
                "name:pl": "Kolorowy meczet",
                "name:sq": "Xhamia e Pashës (Xh. e Larme)",
                "opening_hours": "24/7",
                "religion": "muslim",
                "tourism": "attraction",
                "wheelchair": "limited",
                "wikidata": "Q1009896",
                "wikipedia": "pl:Kolorowy_Meczet_(Tetowo)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9667591,
                    42.0057279
                ]
            },
            "id": "way/241085465"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/243981081",
                "historic": "archaeological_site",
                "name": "Стибера",
                "name:en": "Stibera",
                "wikidata": "Q12910730",
                "wikipedia": "en:Stymbara (Macedonia)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3975268,
                    41.243788
                ]
            },
            "id": "way/243981081"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/295526114",
                "addr:city": "skopje",
                "historic": "yes",
                "int_name": "Bezisten",
                "name": "Безистен",
                "note": "Bezisten is the core of Skopje\s Old Bazaar",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4370402,
                    42.0014413
                ]
            },
            "id": "way/295526114"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/334649006",
                "historic": "archaeological_site",
                "name": "Антигона",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1002903,
                    41.503403
                ]
            },
            "id": "way/334649006"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/338675543",
                "area": "yes",
                "highway": "pedestrian",
                "historic": "memorial",
                "name": "Могила на непобедените",
                "name:en": "Mound of the undefeated",
                "tourism": "attraction",
                "wikidata": "Q3400797",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5545468,
                    41.3342029
                ]
            },
            "id": "way/338675543"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/356302520",
                "addr:city": "Старо Нагоричане",
                "amenity": "place_of_worship",
                "denomination": "orthodox",
                "historic": "church",
                "landuse": "religious",
                "name": "Св. Великомаченик Георгиј",
                "name:en": "Church of St. George",
                "religion": "christian",
                "tourism": "attraction",
                "wikipedia": "mk:Црква „Св. Великомаченик Георгиј“ - Старо Нагоричане",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.8279922,
                    42.1981803
                ]
            },
            "id": "way/356302520"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/367853384",
                "artist": "Кристина Пауновска",
                "cost": "272.792 euro",
                "description": "Историско значење Питу Гули (1865 - 12 август 1903) — македонски револуционер со влашко потекло, учесник во македонското револуционерно движење, член и војвода на Македонската револуционерна организација.\\nСовременици сведочат дека Питу Гули имал завршено",
                "historic": "monument",
                "investitor": "Општина Центар",
                "learnica": "Уметничка леарница Јеремиќ",
                "name": "Питу Гули",
                "start_date": "2012"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.433319,
                    41.9936737
                ]
            },
            "id": "node/367853384"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/367860262",
                "historic": "monument",
                "name": "Гоце Делчев"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4233737,
                    42.0032812
                ]
            },
            "id": "node/367860262"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/369750026",
                "access": "no",
                "barrier": "entrance",
                "historic": "city_gate",
                "name": "Влез на Скопското кале",
                "name:en": "Skopje Fortress Gate"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4338778,
                    42.0008716
                ]
            },
            "id": "node/369750026"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/373488269",
                "historic": "ruins",
                "name": "Тетовско Кале",
                "name:en": "Tetovo Fortress",
                "wikidata": "Q12910952",
                "wikipedia": "mk:Тетовско кале"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.960153,
                    42.0195738
                ]
            },
            "id": "node/373488269"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/382635381",
                "historic": "monument",
                "name": "Костурница",
                "name:en": "Kosturnica",
                "tourism": "attraction"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.0228463,
                    41.4325212
                ]
            },
            "id": "node/382635381"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/390757439",
                "historic": "archaeological_site",
                "name": "Лихнид",
                "name:la": "Lychnidos",
                "wikipedia": "it:Lychnidos"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7914836,
                    41.1155576
                ]
            },
            "id": "node/390757439"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/396435300",
                "addr:city": "Pustenik",
                "addr:postcode": "71510",
                "addr:street": "Dëshmorët e Lirisë",
                "historic": "memorial",
                "name": "Varrezat e Dëshmorëve",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.263554,
                    42.1627316
                ]
            },
            "id": "way/396435300"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/410115784",
                "historic": "monument",
                "int_name": "Mečkin Kamen",
                "name": "Мечкин Камен",
                "name:en": "Mechkin Kamen",
                "tourism": "attraction"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.257898,
                    41.3377228
                ]
            },
            "id": "node/410115784"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/410115785",
                "historic": "monument",
                "int_name": "Sliva",
                "name": "Слива"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2273776,
                    41.3880768
                ]
            },
            "id": "node/410115785"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/411079115",
                "bridge": "yes",
                "bridge:structure": "arch",
                "foot": "yes",
                "highway": "pedestrian",
                "historic": "monument",
                "layer": "1",
                "lit": "yes",
                "name": "Камен мост",
                "name:bg": "Камен мост",
                "name:de": "Steinbrücke",
                "name:en": "Stone Bridge",
                "name:es": "Puente de Piedra",
                "name:fr": "Pont de pierre",
                "name:pl": "Kamienny Most",
                "name:sq": "Ura e Gurit",
                "name:sr": "Душанов мост",
                "name:tr": "Taşköprü",
                "name:uk": "Кам\яний міст",
                "smoothness": "intermediate",
                "surface": "paving_stones",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4332264,
                    41.9971028
                ]
            },
            "id": "way/411079115"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/414261893",
                "access": "yes",
                "archaeological_site": "fortification",
                "barrier": "city_wall",
                "historic": "archaeological_site",
                "historic:civilization": "medieval",
                "name": "Трескавец",
                "name:en": "Treskavec",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5376682,
                    41.4053138
                ]
            },
            "id": "way/414261893"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/417361056",
                "architect:wikidata": "Q700592",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Меморијален комплекс на паднатите борци на Револуцијата",
                "wikidata": "Q12286474",
                "wikipedia": "mk:Меморијален комплекс на паднатите борци на револуцијата",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1875199,
                    41.7383122
                ]
            },
            "id": "way/417361056"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/417361065",
                "access": "yes",
                "historic": "ruins",
                "historic:civilization": "middle-ages",
                "name": "Исар",
                "wikidata": "Q20570361",
                "wikipedia": "mk:Штипска тврдина",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1867683,
                    41.7387626
                ]
            },
            "id": "way/417361065"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/424490169",
                "historic": "archaeological_site",
                "historic:civilization": "ancient_roman",
                "historic:period": "principate",
                "int_name": "Skupi",
                "name": "Скупи",
                "name:en": "Scupi",
                "wikidata": "Q149203",
                "wikimedia_commons": "Category:Scupi",
                "wikipedia": "mk:Скупи",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3882022,
                    42.0204316
                ]
            },
            "id": "way/424490169"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/444334991",
                "historic": "monument",
                "int_name": "Spomenik na slobodata",
                "name": "Споменик на слободата",
                "name:en": "Monument of Freedom",
                "tourism": "attraction",
                "wikidata": "Q3402642",
                "wikipedia": "mk:Споменик на слободата (Кочани)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.4069917,
                    41.9188903
                ]
            },
            "id": "node/444334991"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/445947375",
                "historic": "monument",
                "name": "Гоце Делчев",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1821051,
                    41.7363105
                ]
            },
            "id": "way/445947375"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/453048240",
                "amenity": "place_of_worship",
                "building": "yes",
                "historic": "monastery",
                "name": "св. Тројица",
                "name:en": "Sv. Trojitca",
                "religion": "christian",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3785429,
                    42.1027654
                ]
            },
            "id": "way/453048240"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/473902990",
                "historic": "monument",
                "name": "WWII Battle - 17th Macedonian Brigade ws Bulgarian army",
                "name:mk": "2ра Светска војна - Битка помеѓу 17та Македонска Ударна Бригада и Бугарската војска"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.3507979,
                    42.2916094
                ]
            },
            "id": "node/473902990"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/474873958",
                "alt_name": "Тврдина Кале",
                "alt_name:mk": "Скопска тврдина",
                "alt_name:sr": "Скопска тврђава",
                "area": "yes",
                "historic": "castle",
                "int_name": "Skopsko Kale",
                "name": "Скопско кале",
                "name:en": "Skopje Fortress",
                "name:ru": "Крепость Скопье",
                "name:sq": "Kalaja e Shkupit",
                "name:sr": "Скопско кале",
                "name:tr": "Üsküp Kalesi",
                "opening_hours": "07:00-19:00",
                "ruins": "yes",
                "tourism": "attraction",
                "wheelchair": "limited",
                "wikidata": "Q1262367",
                "wikimedia_commons": "Category:Skopje Fortress",
                "wikipedia": "mk:Скопско Kале",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4335309,
                    42.0007999
                ]
            },
            "id": "way/474873958"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/477021071",
                "addr:housenumber": "58-a",
                "addr:postcode": "1000",
                "addr:street": "Менделеева",
                "building": "yes",
                "historic": "castle",
                "name": "Штакле",
                "name:en": "Castle Stakle",
                "name:mk": "Штакле",
                "opening_hours": "24/7",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4476483,
                    42.0055287
                ]
            },
            "id": "way/477021071"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/495558836",
                "historic": "monument",
                "int_name": "Spomenik na Revolucijata",
                "name": "Споменик на Револуцијата",
                "name:en": "Monument of the Revolution"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.679835,
                    41.1776616
                ]
            },
            "id": "node/495558836"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/502848605",
                "building": "yes",
                "historic": "ruins",
                "int_name": "Great Basilica",
                "name": "Голема Базилика",
                "name:en": "Great Basilica",
                "name:fr": "Grande basilique",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3424336,
                    41.0110255
                ]
            },
            "id": "way/502848605"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/513644247",
                "historic": "monastery",
                "name": "Света Недела",
                "name:en": "Holy Sunday",
                "ruins": "yes",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2915142,
                    41.9497131
                ]
            },
            "id": "way/513644247"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/514513452",
                "historic": "archaeological_site",
                "name": "Билазора",
                "wikidata": "Q2929164",
                "wikipedia": "bg:Билазора",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9124237,
                    41.8471851
                ]
            },
            "id": "way/514513452"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/553070358",
                "historic": "monument",
                "name": "Колонада",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4357375,
                    41.9963896
                ]
            },
            "id": "way/553070358"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/603405553",
                "historic": "archaeological_site",
                "historic:civilization": "ancient_roman",
                "name": "Roman & Ottoman Bathouse",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.7538513,
                    41.382463
                ]
            },
            "id": "way/603405553"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/625505115",
                "amenity": "cafe",
                "building": "yes",
                "building:levels": "1",
                "building:material": "masonry",
                "building:use": "foodservice",
                "cuisine": "ice_cream",
                "historic": "building",
                "internet_access": "wlan",
                "internet_access:fee": "no",
                "name": "Baptisterium",
                "outdoor_seating": "yes",
                "roof:shape": "pyramidal",
                "toilets": "yes",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7913899,
                    41.1121984
                ]
            },
            "id": "way/625505115"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/677981810",
                "historic": "archaeological_site",
                "name": "Geoglif Sv. Nikole",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9566168,
                    41.8291201
                ]
            },
            "id": "way/677981810"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/679215630",
                "access": "yes",
                "historic": "monument",
                "name": "Александар Македонски",
                "wikimedia_commons": "File:Споменикот на Александар Македонски во Штип.jpg",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1940372,
                    41.7372486
                ]
            },
            "id": "way/679215630"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/698993277",
                "historic": "archaeological_site",
                "name": "Bilazora - Water Reservoir",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9099884,
                    41.8497337
                ]
            },
            "id": "way/698993277"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/704079412",
                "historic": "monument",
                "name": "Велешки Гемиџија",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.7834205,
                    41.7161516
                ]
            },
            "id": "way/704079412"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/807724824",
                "historic": "archaeological_site",
                "name": "Црквиште",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1838994,
                    42.156669
                ]
            },
            "id": "way/807724824"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/808916278",
                "boundary": "protected_area",
                "date": "2001-08-08",
                "historic": "battlefield",
                "name": "Масакр кај Карпалак",
                "name:en": "Karpalak massacre",
                "wikipedia": "mk:Масакр кај Карпалак",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1717901,
                    41.9770017
                ]
            },
            "id": "way/808916278"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/821781063",
                "barrier": "fence",
                "historic": "archaeological_site",
                "name": "Гориче",
                "name:en": "Goriche",
                "wikidata": "Q20565635",
                "wikipedia": "mk:Гориче (Белче)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2008838,
                    41.2380683
                ]
            },
            "id": "way/821781063"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/838638808",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Спомен плоча - Ѓурѓејца",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9661158,
                    41.4530879
                ]
            },
            "id": "way/838638808"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/839150823",
                "historic": "memorial",
                "name": "Споменик на Народоослободителната борба",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9388571,
                    41.8647479
                ]
            },
            "id": "way/839150823"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/839150824",
                "historic": "monument",
                "name": "Споменик „Александар Серафимов“",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9398177,
                    41.8647238
                ]
            },
            "id": "way/839150824"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/858650998",
                "addr:city": "Прилеп",
                "addr:housenumber": "ББ",
                "addr:postcode": "7500",
                "addr:street": "Цар Самоил",
                "historic": "memorial",
                "leisure": "park",
                "memorial": "war_memorial",
                "name": "Могила на непобедените",
                "opening_hours": "24/7",
                "wikidata": "Q3400797",
                "wikipedia": "mk:Могила на непобедените",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5537714,
                    41.3351271
                ]
            },
            "id": "way/858650998"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/875859703",
                "access": "yes",
                "archaeological_site": "fortification",
                "historic": "archaeological_site",
                "historic:civilization": "ancient_roman",
                "name": "Кале",
                "name:en": "Kale",
                "wikidata": "Q23037874",
                "wikipedia": "mk:Кале (Зрзе)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.342199,
                    41.5229304
                ]
            },
            "id": "way/875859703"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/888421002",
                "access": "yes",
                "historic": "archaeological_site",
                "historic:civilization": "early_christian",
                "name": "Archaeological site of Mancevci, Early Christian Basilica 5 AC",
                "religion": "christian",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7934836,
                    41.1128228
                ]
            },
            "id": "way/888421002"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/899302511",
                "access": "yes",
                "archaeological_site": "fortification",
                "historic": "archaeological_site",
                "historic:civilization": "medieval",
                "name": "Пешта",
                "name:en": "Peshta",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.7443349,
                    41.0881076
                ]
            },
            "id": "way/899302511"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/899461223",
                "access": "yes",
                "castle_type": "fortress",
                "historic": "castle",
                "name": "Марков Ѕид",
                "name:en": "Marko\s Wall",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5896205,
                    41.29937
                ]
            },
            "id": "way/899461223"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/899465453",
                "access": "permissive",
                "amenity": "monastery",
                "barrier": "wall",
                "denomination": "orthodox",
                "historic": "archaeological_site",
                "historic:civilization": "medieval",
                "name": "Мариовски Манастир",
                "name:en": "Monastery of Mariovo",
                "name:mk": "Мариовски Манастир",
                "religion": "christian",
                "wikidata": "Q97232594",
                "wikipedia": "mk:Манастир Св. Никола (Манастир)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.7263832,
                    41.165019
                ]
            },
            "id": "way/899465453"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/899472741",
                "archaeological_site": "settlement",
                "historic": "archaeological_site",
                "historic:civilization": "ancient_macedonian;medieval",
                "name": "Градот / Маркови Кули",
                "name:en": "Gradot / Markovi Kuli",
                "wikidata": "Q98793101",
                "wikipedia": "mk:Градок - Маркови Кули",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.7183713,
                    41.2061627
                ]
            },
            "id": "way/899472741"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/899479869",
                "archaeological_site": "fortification",
                "historic": "archaeological_site",
                "name": "Градиште",
                "name:en": "Gradishte",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.6443788,
                    41.204909
                ]
            },
            "id": "way/899479869"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/899479870",
                "archaeological_site": "fortification",
                "historic": "archaeological_site",
                "name": "Бабо",
                "name:en": "Babo",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.652119,
                    41.1967792
                ]
            },
            "id": "way/899479870"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/899481750",
                "archaeological_site": "necropolis",
                "historic": "archaeological_site",
                "historic:civilization": "ancient_macedonian",
                "name": "Старо Бонче",
                "name:en": "Staro Bonche",
                "wikidata": "Q12910706",
                "wikipedia": "mk:Старо Бонче (археолошко наоѓалиште)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5883917,
                    41.2066672
                ]
            },
            "id": "way/899481750"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/899481751",
                "access": "yes",
                "archaeological_site": "city",
                "historic": "archaeological_site",
                "historic:civilization": "ancient_roman",
                "name": "Пелагон",
                "name:en": "Pelagon",
                "wikidata": "Q12909483",
                "wikipedia": "mk:Пелагон (град)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.6162431,
                    41.207884
                ]
            },
            "id": "way/899481751"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/903328344",
                "access": "yes",
                "archaeological_site": "fortification",
                "historic": "archaeological_site",
                "historic:civilization": "medieval",
                "name": "Кула",
                "name:en": "Kula",
                "wikidata": "Q20566679",
                "wikipedia": "mk:Кула (Македонски Брод)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2735584,
                    41.5070505
                ]
            },
            "id": "way/903328344"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/906807150",
                "amenity": "place_of_worship",
                "building": "yes",
                "denomination": "macedonian_orthodox",
                "historic": "tomb",
                "name": "Св. Петар",
                "name:en": "St. Peter",
                "name:mk": "Св. Петар",
                "religion": "christian",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.7860548,
                    40.9306998
                ]
            },
            "id": "way/906807150"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/908273421",
                "artist_name": "Валентина Стефановска",
                "artwork_type": "statue",
                "historic": "monument",
                "int_name": "Voin na Konj",
                "layer": "2",
                "memorial": "statue",
                "name": "Споменик на Александар Македонски",
                "name:en": "Statue of Alexander the Great",
                "start_date": "08.09.2011",
                "tourism": "artwork",
                "wikidata": "Q3497603",
                "wikimedia_commons": "Category:Warrior on Horseback (Skopje)",
                "wikipedia": "mk:Воин на коњ (Скопје)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4314474,
                    41.9959035
                ]
            },
            "id": "node/908273421"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/981848250",
                "archaeological_site": "fortification",
                "historic": "archaeological_site",
                "name": "Лешок",
                "name:en": "Leshok",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.0260841,
                    42.0675908
                ]
            },
            "id": "way/981848250"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/1044325422",
                "historic": "monument",
                "name": "Споменин на Слободата",
                "name:en": "Freedom Monument",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.4069974,
                    41.9189051
                ]
            },
            "id": "way/1044325422"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/1050278253",
                "historic": "archaeological_site",
                "name": "Девини Кули",
                "name:en": "Devini Kuli",
                "name:mk": "Девини Кули",
                "wikidata": "Q20566325",
                "wikipedia": "mk:Девини Кули",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2374131,
                    41.5417536
                ]
            },
            "id": "way/1050278253"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/1054098604",
                "historic": "archaeological_site",
                "name": "Св. Никола",
                "name:en": "St. Nicholas",
                "wikidata": "Q23037880",
                "wikipedia": "mk:Св. Никола (Зрзе)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3499992,
                    41.5183903
                ]
            },
            "id": "way/1054098604"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/1102966574",
                "barrier": "fence",
                "historic": "memorial",
                "material": "stone",
                "memorial": "war_memorial",
                "name": "19.12.1942",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5960669,
                    41.289552
                ]
            },
            "id": "way/1102966574"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/1109661815",
                "access": "yes",
                "historic": "ruins",
                "historic:civilization": "ancient_roman",
                "name": "Viničko Kale",
                "ruins": "castle",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.5026473,
                    41.877182
                ]
            },
            "id": "way/1109661815"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/1126512716",
                "barrier": "fence",
                "historic": "archaeological_site",
                "historic:civilization": "prehistoric",
                "name": "Куќата на Ѓошеви",
                "name:en": "House of Gjoshev",
                "name:mk": "Куќата на Ѓошеви",
                "wikidata": "Q97229810",
                "wikipedia": "mk:Куќата на Ѓошеви (Варош)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5329048,
                    41.3588123
                ]
            },
            "id": "way/1126512716"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/1127758201",
                "access": "unknown",
                "barrier": "city_wall",
                "castle_type": "fortress",
                "historic": "castle",
                "name": "Битолска Тврдина",
                "name:en": "Fortress of Bitola",
                "name:mk": "Битолска Тврдина",
                "wikidata": "Q3078416",
                "wikipedia": "mk:Битолска тврдина",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3312769,
                    41.0155657
                ]
            },
            "id": "way/1127758201"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/1136815836",
                "historic": "archaeological_site",
                "name": "Мучеинци",
                "name:en": "Mucheinci",
                "name:mk": "Мучеинци",
                "wikidata": "Q25553802",
                "wikipedia": "mk:Мучеинци (Лознани)",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4000686,
                    41.2017673
                ]
            },
            "id": "way/1136815836"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "way/1146996488",
                "historic": "monument",
                "name": "Св Кирил и Методи",
                "@geometry": "center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1882958,
                    41.7362861
                ]
            },
            "id": "way/1146996488"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1452854994",
                "historic": "memorial",
                "name": "Lukov",
                "was:natural": "spring"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.5620379,
                    41.6346281
                ]
            },
            "id": "node/1452854994"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1475328742",
                "historic": "archaeological_site",
                "is_in": "Orman",
                "name": "Rimska crkva"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3527926,
                    42.0586697
                ]
            },
            "id": "node/1475328742"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1475331129",
                "archaeological_site": "fortification",
                "historic": "archaeological_site",
                "int_name": "Davina Kula",
                "name": "Давина Кула",
                "name:en": "Davina Kula"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3548716,
                    42.0843452
                ]
            },
            "id": "node/1475331129"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1475333181",
                "historic": "archaeological_site",
                "name": "Голема Кула - Кучково"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2786993,
                    42.0587494
                ]
            },
            "id": "node/1475333181"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1475333182",
                "historic": "archaeological_site",
                "name": "Мала Кула - Кучково"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2844339,
                    42.0585741
                ]
            },
            "id": "node/1475333182"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1612143468",
                "boundary": "marker",
                "ele": "1748.8",
                "historic": "boundary_stone",
                "marker": "stone",
                "name": "Куцолиница / 86",
                "natural": "peak"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.5899869,
                    42.1102442
                ]
            },
            "id": "node/1612143468"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1612143496",
                "boundary": "marker",
                "ele": "1751.78",
                "historic": "boundary_stone",
                "marker": "stone",
                "name": "87"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.5770819,
                    42.1119645
                ]
            },
            "id": "node/1612143496"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1612143672",
                "boundary": "marker",
                "historic": "boundary_stone",
                "marker": "stone",
                "name": "90"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.5104573,
                    42.1551091
                ]
            },
            "id": "node/1612143672"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1612155052",
                "boundary": "marker",
                "ele": "1327.6",
                "historic": "boundary_stone",
                "marker": "stone",
                "name": "Китка",
                "natural": "peak",
                "ref": "105"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.3705411,
                    42.3089612
                ]
            },
            "id": "node/1612155052"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1696045002",
                "alt_name": "PUEH",
                "boundary": "marker",
                "ele": "2251.4",
                "historic": "boundary_stone",
                "importance": "Bulgarian 100",
                "int_name": "Ruen",
                "man_made": "survey_point",
                "marker": "stone",
                "name": "Руен",
                "name:de": "Ruen",
                "name:el": "κορυφή Ρούεν",
                "name:en": "Ruen",
                "name:fr": "Pic Rouen",
                "name:mk": "Руен",
                "natural": "peak",
                "prominence": "1416",
                "source": "bgtopomaps",
                "wikidata": "Q46499",
                "wikipedia": "bg:Руен"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.5162744,
                    42.1580093
                ]
            },
            "id": "node/1696045002"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1708412126",
                "historic": "monument",
                "layer": "2",
                "name": "Zena",
                "name:mk": "Жена"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.7200501,
                    42.1355189
                ]
            },
            "id": "node/1708412126"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1734593430",
                "historic": "archaeological_site",
                "name": "Gradiste kaj s.Brazda"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.398848,
                    42.0766913
                ]
            },
            "id": "node/1734593430"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1831180502",
                "amenity": "place_of_worship",
                "denomination": "orthodox",
                "historic": "monument",
                "int_name": "Manastir Sv. Andrej",
                "name": "Манастир Св. Андреј",
                "name:en": "Monastery St. Andrej",
                "name:pl": "Cerkiew św. Andrzeja",
                "name:tr": "Monastery St. Andrej",
                "place_of_worship:type": "monastery",
                "religion": "christian",
                "tourism": "attraction"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2991931,
                    41.9505936
                ]
            },
            "id": "node/1831180502"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1857486060",
                "historic": "monument",
                "layer": "1",
                "name": "Филип Втори"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4617772,
                    42.0017233
                ]
            },
            "id": "node/1857486060"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1859114111",
                "artwork_type": "statue",
                "historic": "memorial",
                "image": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Philip_II_of_Macedon_monument_in_Skopje.JPG",
                "inscription": "Филип II Македонски",
                "memorial": "statue",
                "name": "Филип II Македонски",
                "name:de": "Philipp II. (Makedonien)",
                "name:en": "Philip II of Macedon",
                "name:pl": "Filip II Macedoński",
                "subject:wikidata": "Q130650",
                "subject:wikipedia": "mk:Филип II Македонски",
                "tourism": "artwork"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4349949,
                    41.9984602
                ]
            },
            "id": "node/1859114111"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1866944575",
                "artwork_type": "statue",
                "historic": "memorial",
                "inscription": "Св. Климент Охридски",
                "int_name": "Sv. Kliment Ohridski",
                "memorial": "statue",
                "name": "Св. Климент Охридски",
                "name:en": "Clement of Ohrid",
                "tourism": "artwork",
                "wikidata": "Q158504",
                "wikipedia": "mk:Свети Климент Охридски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4254968,
                    41.9983057
                ]
            },
            "id": "node/1866944575"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1879436069",
                "historic": "archaeological_site",
                "historic:civilization": "prehistoric",
                "name": "Костоперска Карпа",
                "tourism": "attraction",
                "wikidata": "Q20570399",
                "wikipedia": "mk:Костоперска Карпа"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.809838,
                    42.1706665
                ]
            },
            "id": "node/1879436069"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1879461479",
                "archaeological_site": "megalith",
                "historic": "archaeological_site",
                "historic:period": "Bronze Age",
                "name": "Кокино",
                "name:mk": "Кокино",
                "tourism": "attraction",
                "wikidata": "Q1326977",
                "wikipedia": "mk:Кокино (локалитет)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.953118,
                    42.2633818
                ]
            },
            "id": "node/1879461479"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1969931516",
                "boundary": "marker",
                "historic": "boundary_stone",
                "marker": "stone",
                "name": "2"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.9283963,
                    41.340516
                ]
            },
            "id": "node/1969931516"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1969931594",
                "boundary": "marker",
                "historic": "boundary_stone",
                "marker": "stone",
                "name": "3"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.9317424,
                    41.3404787
                ]
            },
            "id": "node/1969931594"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1969931668",
                "boundary": "marker",
                "historic": "boundary_stone",
                "marker": "stone",
                "name": "4"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.9350736,
                    41.3399583
                ]
            },
            "id": "node/1969931668"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1970006597",
                "boundary": "marker",
                "ele": "1802.3",
                "historic": "boundary_stone",
                "marker": "stone",
                "name": "2"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.9351752,
                    41.340338
                ]
            },
            "id": "node/1970006597"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/1995790447",
                "historic": "monument",
                "int_name": "Josip Broz - Tito",
                "name": "Јосип Броз - Тито"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.7194275,
                    42.1355778
                ]
            },
            "id": "node/1995790447"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2015829492",
                "historic": "ruins",
                "int_name": "Markov Grad",
                "name": "Марков Град",
                "name:en": "Markov Grad"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.2541295,
                    41.4094203
                ]
            },
            "id": "node/2015829492"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2024605291",
                "historic": "memorial",
                "int_name": "Memorijalen centar ASNOM",
                "memorial": "war_memorial",
                "name": "Меморијален центар АСНОМ",
                "name:en": "Memorial Center ASNOM",
                "tourism": "attraction"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.8500367,
                    42.2782511
                ]
            },
            "id": "node/2024605291"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2026119373",
                "historic": "monument",
                "name": "Sahat Kula"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9108574,
                    41.794932
                ]
            },
            "id": "node/2026119373"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2026891418",
                "historic": "ruins",
                "name": "Орашко Кале",
                "name:en": "Orashko Kale"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1545235,
                    42.1068795
                ]
            },
            "id": "node/2026891418"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2026930302",
                "historic": "monument",
                "name": "Саат кула"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.7840512,
                    41.7140782
                ]
            },
            "id": "node/2026930302"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2026975410",
                "historic": "archaeological_site",
                "name": "Isar / Idomenae"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.4937679,
                    41.2775784
                ]
            },
            "id": "node/2026975410"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2136716883",
                "historic": "monument",
                "int_name": "Kude sat",
                "name": "Куде сат"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.7192303,
                    42.1346962
                ]
            },
            "id": "node/2136716883"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2138788013",
                "ele": "727",
                "historic": "memorial",
                "name": "Ножот",
                "natural": "peak",
                "wikidata": "Q12273269",
                "wikipedia": "mk:Битка на Ножот"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.7629669,
                    41.4293251
                ]
            },
            "id": "node/2138788013"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2189840728",
                "historic": "monument",
                "name": "Народен Херој Кузман Јосифоски-Питу",
                "name:en": "People\s hero Kuzman Josifoski-Pitu",
                "name:mk": "Народен Херој Кузман Јосифоски-Питу"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5519842,
                    41.3451182
                ]
            },
            "id": "node/2189840728"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2189840898",
                "historic": "monument",
                "name": "Пеце Атанасоски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.554267,
                    41.3451518
                ]
            },
            "id": "node/2189840898"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2189840958",
                "historic": "monument",
                "name": "Ѓорче Петров",
                "name:en": "Gjorche Petrov"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5522173,
                    41.3452617
                ]
            },
            "id": "node/2189840958"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2268500979",
                "historic": "tomb",
                "name": "Питу Гули",
                "tomb": "tombstone"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2480535,
                    41.3748344
                ]
            },
            "id": "node/2268500979"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2268500995",
                "historic": "tomb",
                "name": "Тоше Проески",
                "tomb": "tombstone"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2482546,
                    41.3748686
                ]
            },
            "id": "node/2268500995"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2269431831",
                "historic": "monument",
                "name": "Никола Карев"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2463296,
                    41.3736665
                ]
            },
            "id": "node/2269431831"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2316156278",
                "historic": "memorial",
                "name": "Стефан Наумов-Стив",
                "name:en": "Stefan Naumov-Stiv"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3368929,
                    41.024615
                ]
            },
            "id": "node/2316156278"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2327281126",
                "historic": "monument",
                "int_name": "Pitu Guli",
                "name": "Споменик на Питу Гули",
                "name:en": "Statue of Pitu Guli"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2497316,
                    41.3649692
                ]
            },
            "id": "node/2327281126"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2330629820",
                "historic": "monument",
                "inscription": "Наум Наумоски-Борче\\n01.09.1920 - 28.09.1960",
                "material": "bronze",
                "memorial": "bust",
                "name": "Наум Наумоски-Борче",
                "name:en": "Naum Naumoski-Borche",
                "name:mk": "Наум Наумоски-Борче"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2484409,
                    41.3653856
                ]
            },
            "id": "node/2330629820"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2350137461",
                "historic": "ruins",
                "name": "Римски театар",
                "name:en": "Roman theater",
                "wikidata": "Q1371168",
                "wikipedia": "en:Stobi"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9751675,
                    41.5516379
                ]
            },
            "id": "node/2350137461"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2359124380",
                "gauge": "600",
                "historic": "locomotive",
                "name": "99.4-053",
                "tourism": "attraction"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.951411,
                    41.5126479
                ]
            },
            "id": "node/2359124380"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2360747213",
                "historic": "monument",
                "name": "Два Коња"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.5001795,
                    41.1458586
                ]
            },
            "id": "node/2360747213"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2373710718",
                "historic": "archaeological_site",
                "int_name": "Cocev Kamen",
                "name": "Цоцев Камен",
                "name:en": "Cocev Kamen",
                "place": "locality",
                "tourism": "attraction",
                "wikidata": "Q599269"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9862589,
                    42.0836218
                ]
            },
            "id": "node/2373710718"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2545342051",
                "historic": "monument",
                "name": "Преспанско Советување"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9119981,
                    40.9765203
                ]
            },
            "id": "node/2545342051"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2598104053",
                "historic": "monument",
                "name": "Карпалак"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5564074,
                    41.3475544
                ]
            },
            "id": "node/2598104053"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2616082758",
                "historic": "memorial",
                "name": "Zebrnjak",
                "name:mk": "Зебрњак",
                "name:sr": "Зебрњак",
                "wikidata": "Q3400817",
                "wikipedia": "en:Zebrnjak"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.7853235,
                    42.1491368
                ]
            },
            "id": "node/2616082758"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2759245083",
                "artwork_type": "statue",
                "historic": "monument",
                "int_name": "Saint Klement of Ohrid",
                "name": "Свети Климент Охридски",
                "name:en": "Monument St. Clement Ohridski",
                "name:fr": "Saint Clément d’Ohrid",
                "name:tr": "Aziz Kliment Anıtı",
                "tourism": "artwork",
                "wikidata": "Q158504",
                "wikipedia": "mk:Свети Климент Охридски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7995376,
                    41.1126936
                ]
            },
            "id": "node/2759245083"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2759253188",
                "artwork_type": "statue",
                "historic": "monument",
                "int_name": "Saints Cyril and Methodius",
                "name": "Свети Кирил и Методиј",
                "name:en": "Monuments of Saints Cyril and Methodius",
                "name:fr": "Saints Cyrille et Méthode",
                "name:mk": "Saints Cyril and Methodius",
                "name:tr": "Aziz Kiril ve Aziz Metodius Anıtı",
                "tourism": "artwork",
                "wikidata": "Q239925",
                "wikipedia": "mk:Св. Кирил и Методиј"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.799994,
                    41.1120476
                ]
            },
            "id": "node/2759253188"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2759263738",
                "artwork_type": "statue",
                "historic": "monument",
                "int_name": "Saint Naum",
                "name": "Свети Наум Охридски Чудотворец",
                "name:en": "Monument to St. Naum of Ohrid",
                "name:fr": "Saint Naum",
                "name:tr": "Aziz Naum Anıtı",
                "tourism": "artwork",
                "wikidata": "Q350061",
                "wikipedia": "mk:Свети Наум Охридски Чудотворец"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7990226,
                    41.1122955
                ]
            },
            "id": "node/2759263738"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2795154377",
                "historic": "city_gate",
                "name": "Долна Порта",
                "name:en": "Lower Gate"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7977703,
                    41.1124606
                ]
            },
            "id": "node/2795154377"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2829462221",
                "historic": "archaeological_site",
                "name": "Мачка камен",
                "name:en": "Macka kamen"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9627449,
                    42.0853984
                ]
            },
            "id": "node/2829462221"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/2851570672",
                "historic": "monument",
                "name": "Христо Узунов",
                "wikidata": "Q3407165",
                "wikipedia": "mk:Христо Узунов"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.0770931,
                    41.4182291
                ]
            },
            "id": "node/2851570672"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3011061690",
                "denomination": "orthodox",
                "historic": "wayside_shrine",
                "name": "Sv. Nikola",
                "religion": "christian",
                "tourism": "attraction"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.8135106,
                    41.0596796
                ]
            },
            "id": "node/3011061690"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3039854149",
                "historic": "monument",
                "name": "Споменик на жртви од НОВ"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9636151,
                    41.9062629
                ]
            },
            "id": "node/3039854149"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3409068903",
                "historic": "monument",
                "name": "Александар Македонски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5524989,
                    41.3460556
                ]
            },
            "id": "node/3409068903"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3409068904",
                "historic": "monument",
                "name": "Методија Андонов-Ченто"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5528281,
                    41.3462544
                ]
            },
            "id": "node/3409068904"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3409074126",
                "historic": "monument",
                "name": "Св. Никола"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.553243,
                    41.3462194
                ]
            },
            "id": "node/3409074126"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3418320912",
                "historic": "memorial",
                "name": "Масакр кај Пуста Кула"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.7360635,
                    41.822914
                ]
            },
            "id": "node/3418320912"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3456913802",
                "historic": "monument",
                "name": "Карпалак 2001"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5479723,
                    41.3434323
                ]
            },
            "id": "node/3456913802"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3457966074",
                "historic": "monument",
                "name": "Крипта",
                "name:en": "Cript"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.554646,
                    41.3341123
                ]
            },
            "id": "node/3457966074"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3642663981",
                "historic": "monument",
                "name": "Итар Пејо",
                "name:en": "Sly Peter"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5548417,
                    41.345456
                ]
            },
            "id": "node/3642663981"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3694881124",
                "historic": "monument",
                "name": "Dedo Jakim - Mill",
                "name:mk": "Воденицата на Дедо Јаким"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.8187714,
                    41.975162
                ]
            },
            "id": "node/3694881124"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3694922580",
                "historic": "monument",
                "name": "Ilin Kamen",
                "name:mk": "Илин Камен"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.8193451,
                    41.9769054
                ]
            },
            "id": "node/3694922580"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3695208787",
                "historic": "monument",
                "name": "Гоце Делчев (Биста)",
                "name:en": "Goce Delchev"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.7768724,
                    41.9668611
                ]
            },
            "id": "node/3695208787"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3695208788",
                "historic": "monument",
                "name": "Гоце Делчев",
                "name:en": "Goce Delchev"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.7742882,
                    41.9643843
                ]
            },
            "id": "node/3695208788"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3695770497",
                "historic": "monument",
                "name": "Споменик на паднати борци во НОБ"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.7716387,
                    41.9653801
                ]
            },
            "id": "node/3695770497"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3696656682",
                "historic": "monument",
                "name": "Кула",
                "name:en": "Kula"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.7954411,
                    41.9425359
                ]
            },
            "id": "node/3696656682"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3713662739",
                "artwork_type": "statue",
                "historic": "memorial",
                "memorial": "statue",
                "name": "Josip Broz Tito",
                "subject:wikidata": "Q9161",
                "tourism": "artwork"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.426153,
                    41.9952169
                ]
            },
            "id": "node/3713662739"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/3951819342",
                "access": "yes",
                "alt_name": "Чрнче",
                "alt_name:en": "Črnče",
                "alt_name:mk": "Чрнче",
                "ele": "515",
                "historic": "ruins",
                "historic:civilization": "byzantine",
                "int_name": "Markovi Kuli",
                "name": "Маркови Кули",
                "name:en": "Markovi Kuli",
                "name:mk": "Маркови Кули",
                "source": "survey;aerial imagery;gps",
                "wikidata": "Q12908439",
                "wikimedia_commons": "Category:Markovi Kuli (Skopje)",
                "wikipedia": "mk:Маркови Кули (Водно)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4313461,
                    41.9682709
                ]
            },
            "id": "node/3951819342"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4128156209",
                "artwork_type": "statue",
                "historic": "memorial",
                "inscription": "Св. Кирил и Методиј",
                "int_name": "Sv. Kiril i Metodi",
                "memorial": "statue",
                "name": "Св. Кирил и Методиј",
                "name:de": "Kyrill und Method",
                "name:en": "Saints Cyril and Methodius",
                "subject:wikidata": "Q239925",
                "subject:wikipedia": "mk:Св. Кирил и Методиј",
                "tourism": "artwork"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4339766,
                    41.9977079
                ]
            },
            "id": "node/4128156209"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4128156210",
                "artwork_type": "statue",
                "historic": "memorial",
                "inscription": "Св. Климент Охридски и Наум Охридски Чудотворец",
                "memorial": "statue",
                "name": "Св. Климент Охридски и Наум Охридски Чудотворец",
                "name:en": "Saints Clement of Ohrid and Naum",
                "tourism": "artwork",
                "wikipedia": "mk:Свети Климент Охридски;mk:Свети Наум Охридски Чудотворец"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4341509,
                    41.9975624
                ]
            },
            "id": "node/4128156210"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4149143991",
                "addr:postcode": "1000",
                "artist_name": "Димитар Филиповски",
                "artwork_type": "statue",
                "historic": "memorial",
                "inscription": "Цар Самоил",
                "memorial": "statue",
                "name": "Цар Самоил",
                "name:de": "Zar Samuil",
                "name:en": "Tsar Samuel",
                "start_date": "28.06.2011",
                "tourism": "artwork",
                "wikidata": "Q12910631",
                "wikimedia_commons": "Category:Samuel\s Monument (Skopje)",
                "wikipedia": "mk:Споменик на Цар Самоил (Скопје)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4313414,
                    41.9953917
                ]
            },
            "id": "node/4149143991"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4161113452",
                "artwork_type": "statue",
                "historic": "memorial",
                "inscription": "Даме Груев",
                "memorial": "statue",
                "name": "Даме Груев",
                "name:de": "Dame Gruew",
                "name:en": "Dame Gruev",
                "name:fr": "Damé Grouev",
                "name:mk": "Даме Груев",
                "name:sr": "Даме Груев",
                "subject:wikidata": "Q983917",
                "subject:wikipedia": "mk:Даме Груев",
                "tourism": "artwork"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4321474,
                    41.9964949
                ]
            },
            "id": "node/4161113452"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4161113453",
                "artist_name": "Роза Павлеска",
                "artwork_type": "statue",
                "historic": "memorial",
                "inscription": "Јустинијан I",
                "int_name": "Justinian I.",
                "memorial": "statue",
                "name": "Јустинијан I",
                "name:de": "Justinian I.",
                "name:en": "Justinian I",
                "name:fr": "Justinien Ier",
                "name:grc": "Ἰουστινιανός Α",
                "start_date": "16.06.2011",
                "tourism": "artwork",
                "wikidata": "Q12910626",
                "wikimedia_commons": "Category:Monument of Iustinianus I (Skopje)",
                "wikipedia": "mk:Споменик на Јустинијан I"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4323054,
                    41.9968799
                ]
            },
            "id": "node/4161113453"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4161249330",
                "artwork_type": "statue",
                "historic": "memorial",
                "inscription": "Олимпија",
                "memorial": "statue",
                "name": "Олимпија",
                "name:de": "Olympias von Epirus",
                "name:en": "Olympias",
                "subject:wikidata": "Q223134",
                "subject:wikipedia": "mk:Олимпија",
                "tourism": "artwork"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4344182,
                    41.9979046
                ]
            },
            "id": "node/4161249330"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4183631289",
                "historic": "monument",
                "name": "Прометеј",
                "name:en": "Prometheus",
                "name:tr": "Prometheus"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4337226,
                    41.993303
                ]
            },
            "id": "node/4183631289"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4234529498",
                "historic": "boundary_stone",
                "name": "Г59"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.517412,
                    41.1274807
                ]
            },
            "id": "node/4234529498"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4242928035",
                "historic": "monument",
                "name": "Тодор Александров"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.439106,
                    41.9834333
                ]
            },
            "id": "node/4242928035"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4266031693",
                "historic": "monument",
                "name": "Стара Рампа"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4369668,
                    41.986749
                ]
            },
            "id": "node/4266031693"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4271160712",
                "historic": "monument",
                "name": "Бегова кула",
                "name:de": "Turm des Bey",
                "name:en": "Bey\s Tower",
                "name:fr": "Tour du Bey",
                "name:tr": "Bey kulesi",
                "tourism": "attraction"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4317487,
                    41.9936684
                ]
            },
            "id": "node/4271160712"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4278022934",
                "historic": "monument",
                "name": "Гоце Делчев"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.7549207,
                    41.4166941
                ]
            },
            "id": "node/4278022934"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4306447780",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Борка Талески-Модерното / Лазо Филиповски-Лавски",
                "name:en": "Borka Taleski / Lazo Filipovski"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.6749495,
                    41.3661079
                ]
            },
            "id": "node/4306447780"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4351691820",
                "historic": "memorial",
                "memorial": "statue",
                "name": "Свети Наум",
                "name:mk": "Свети Наум",
                "name:ru": "Святой Наум",
                "name:sq": "Shën Naumi"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7412554,
                    40.9142149
                ]
            },
            "id": "node/4351691820"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4357166289",
                "historic": "monument",
                "name": "Споменик на загинатите евреи"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1903758,
                    41.736405
                ]
            },
            "id": "node/4357166289"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4365876494",
                "historic": "monument",
                "int_name": "Murat Paşa Camii",
                "name": "Мустафа-пашина џамија",
                "name:en": "Murat Pasha Mosque",
                "name:tr": "Murat Paşa Camii"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4375046,
                    42.000853
                ]
            },
            "id": "node/4365876494"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4378846992",
                "addr:street": "Varvara",
                "historic": "castle",
                "name": "Vila Varvarka",
                "name:en": "Vila Varvarka",
                "name:mk": "Vila Varvarka",
                "phone": "+38975225868"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4333848,
                    41.9130467
                ]
            },
            "id": "node/4378846992"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4380846206",
                "historic": "monument",
                "name": "Споменик на Јуриј Гагарин",
                "name:en": "Yuri Gagarin Monument"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4108745,
                    41.9949279
                ]
            },
            "id": "node/4380846206"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4386764089",
                "historic": "monument",
                "name": "Никола Карев"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4332009,
                    41.9930188
                ]
            },
            "id": "node/4386764089"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4477202789",
                "historic": "monument",
                "name": "Вера Јоциќ",
                "name:en": "Vera Jocik",
                "name:mk": "Вера Јоциќ"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4283664,
                    42.0016804
                ]
            },
            "id": "node/4477202789"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4575831104",
                "access": "yes",
                "historic": "monument",
                "monument": "statue",
                "name": "Марко Мрњавчевиќ",
                "name:en": "Marko Mrnjavchevikj",
                "name:mk": "Марко Мрњавчевиќ"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5532375,
                    41.3455416
                ]
            },
            "id": "node/4575831104"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4575841428",
                "historic": "monument",
                "name": "Круме Кепески"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5505634,
                    41.3450704
                ]
            },
            "id": "node/4575841428"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4575841429",
                "historic": "monument",
                "name": "Блаже Конески"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5506707,
                    41.3451329
                ]
            },
            "id": "node/4575841429"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4575841430",
                "historic": "monument",
                "name": "Марко Цепенков"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5505581,
                    41.3451792
                ]
            },
            "id": "node/4575841430"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4585716598",
                "alt_name:mk": "Кичевско кале",
                "historic": "castle",
                "name": "Китино Кале",
                "name:en": "Kita Castle",
                "name:mk": "Китино Кале",
                "name:sq": "Kalaja Kërçovë",
                "tourism": "attraction"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9663459,
                    41.5130946
                ]
            },
            "id": "node/4585716598"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4589777068",
                "boundary": "marker",
                "ele": "1337",
                "historic": "boundary_stone",
                "marker": "stone",
                "name": "Шуплив Камен",
                "name:sr": "Шупаљ камак",
                "name:sr-Latn": "Šupalj kamak",
                "natural": "peak",
                "ref": "106"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.3602199,
                    42.3110963
                ]
            },
            "id": "node/4589777068"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4601421926",
                "boundary": "marker",
                "historic": "boundary_stone",
                "marker": "stone",
                "name": "1a"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.9282524,
                    41.3413087
                ]
            },
            "id": "node/4601421926"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4745413067",
                "historic": "memorial",
                "name": "Ботун"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7836677,
                    41.2788101
                ]
            },
            "id": "node/4745413067"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4751492691",
                "artist:wikidata": "Q1090724",
                "historic": "monument",
                "name": "Споменик на слободата",
                "name:en": "Monument of freedom",
                "ruins": "yes",
                "start_date": "1969"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.5006786,
                    41.158263
                ]
            },
            "id": "node/4751492691"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4907386415",
                "historic": "monument",
                "name": "Борецот"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5025867,
                    41.3738524
                ]
            },
            "id": "node/4907386415"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/4972835907",
                "historic": "monument",
                "name": "Сергеј Есенин"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.6783749,
                    41.1736526
                ]
            },
            "id": "node/4972835907"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5055432425",
                "historic": "monument",
                "int_name": "Emin-beg Kula",
                "name": "Емин-бегова кула",
                "name:en": "Emin Bey Tower",
                "tourism": "attraction"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1823517,
                    42.0769461
                ]
            },
            "id": "node/5055432425"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5055432426",
                "historic": "monument",
                "int_name": "Ksteva Kula",
                "name": "Крстева кула",
                "name:en": "Krste\s Tower",
                "name:mk": "Крстева кула"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1826261,
                    42.0768838
                ]
            },
            "id": "node/5055432426"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5055444424",
                "historic": "monument",
                "name": "Споменик „Солунски фронт“ од I светска војна",
                "name:en": "World War I Salonica Front memorial",
                "name:nl": "World War I Salonica Front monument"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.6878453,
                    41.1949939
                ]
            },
            "id": "node/5055444424"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5055444426",
                "historic": "monument",
                "int_name": "Hadži Kostova Kula",
                "name": "Хаџикостова кула",
                "name:en": "Hadji Kostov Tower"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1822635,
                    42.0768628
                ]
            },
            "id": "node/5055444426"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5055455123",
                "historic": "monument",
                "int_name": "Saat Kula",
                "name": "Саат-кула",
                "name:en": "Clock Tower"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1818109,
                    42.0792053
                ]
            },
            "id": "node/5055455123"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5055455125",
                "historic": "monument",
                "int_name": "Zlatkovičeva Kula",
                "name": "Златковичева кула",
                "name:en": "Zlatkovich Tower"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1809805,
                    42.0788289
                ]
            },
            "id": "node/5055455125"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5055455126",
                "historic": "monument",
                "int_name": "Simiḱeva Kula",
                "name": "Симиќева кула",
                "name:en": "Simikj Tower"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1794714,
                    42.0786957
                ]
            },
            "id": "node/5055455126"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5098505521",
                "historic": "monument",
                "name": "Струмица-Кристал-64"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.6796979,
                    41.4409796
                ]
            },
            "id": "node/5098505521"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5115436809",
                "historic": "tomb",
                "name": "Григор Прличев",
                "name:en": "Grigor Prlicev grave"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7958058,
                    41.1142035
                ]
            },
            "id": "node/5115436809"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5253858494",
                "boundary": "marker",
                "ele": "1880.5",
                "historic": "boundary_stone",
                "int_name": "Tumba",
                "marker": "stone",
                "name": "Тумба / Τούμπα",
                "name:bg": "Тумба",
                "name:el": "Τούμπα",
                "name:en": "Tumba",
                "name:mk": "Тумба",
                "natural": "peak",
                "ref:Bulgaria": "1",
                "wikidata": "Q2458111",
                "wikipedia": "mk:Тумба (врв)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.9275511,
                    41.3384543
                ]
            },
            "id": "node/5253858494"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5327471601",
                "amenity": "place_of_worship",
                "denomination": "orthodox",
                "historic": "yes",
                "name": "Св. Троица",
                "name:en": "St. Trinity",
                "name:pl": "Cerkiew św. Trójcy",
                "religion": "christian",
                "tourism": "attraction",
                "wikipedia": "mk:Св._Троица_(Битола)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3415263,
                    41.006774
                ]
            },
            "id": "node/5327471601"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5541143272",
                "historic": "memorial",
                "memorial": "yes",
                "name": "Теракота"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.5039935,
                    41.8845661
                ]
            },
            "id": "node/5541143272"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5551392390",
                "historic": "memorial",
                "memorial": "bust",
                "name": "Никола Кукунешоски - Дунѓерски",
                "name:en": "Nikola Kukuneshoski - Dungjerski"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.6778868,
                    41.1745272
                ]
            },
            "id": "node/5551392390"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5551392391",
                "historic": "memorial",
                "memorial": "bust",
                "name": "Крсте Јовановски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.6779485,
                    41.1747311
                ]
            },
            "id": "node/5551392391"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5551392392",
                "historic": "memorial",
                "memorial": "bust",
                "name": "Димче Кошаркоски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.6779833,
                    41.1749451
                ]
            },
            "id": "node/5551392392"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5551410938",
                "historic": "memorial",
                "memorial": "bust",
                "name": "Боро Шаин"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.6782194,
                    41.1756537
                ]
            },
            "id": "node/5551410938"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5551410939",
                "historic": "memorial",
                "memorial": "bust",
                "name": "Јово Стефановски - Риле"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.6781791,
                    41.1755185
                ]
            },
            "id": "node/5551410939"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5551410940",
                "historic": "memorial",
                "memorial": "bust",
                "name": "Разме Малески"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.6781416,
                    41.1753893
                ]
            },
            "id": "node/5551410940"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5551410941",
                "historic": "memorial",
                "memorial": "bust",
                "name": "Петре Гончески - Гиле"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.6781067,
                    41.1752843
                ]
            },
            "id": "node/5551410941"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5596272451",
                "amenity": "church",
                "historic": "wayside_shrine",
                "name": "Св. Благовештение"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.8033957,
                    41.05924
                ]
            },
            "id": "node/5596272451"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5711419372",
                "artwork_type": "statue",
                "historic": "memorial",
                "memorial": "statue",
                "name": "Гоце Делчев",
                "name:de": "Goze Deltschew",
                "name:en": "Goce Delchev",
                "name:fr": "Gotsé Deltchev",
                "name:mk": "Гоце Делчев",
                "name:sr": "Гоце Делчев",
                "tourism": "artwork"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4323793,
                    41.9963577
                ]
            },
            "id": "node/5711419372"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5722266446",
                "historic": "archaeological_site",
                "historic:civilization": "ancient_roman",
                "name": "Konjuh"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9665342,
                    42.1003011
                ]
            },
            "id": "node/5722266446"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5724919828",
                "historic": "ruins",
                "historic:civilization": "ancient_roman",
                "name": "Rotonda Konjuh"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9658672,
                    42.0949995
                ]
            },
            "id": "node/5724919828"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5724929432",
                "historic": "wayside_shrine",
                "name": "Bosko Chapel"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9606298,
                    42.0995746
                ]
            },
            "id": "node/5724929432"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5725139643",
                "historic": "archaeological_site",
                "historic:civilization": "ancient_roman",
                "name": "Bargala"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.289829,
                    41.7995125
                ]
            },
            "id": "node/5725139643"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5728312945",
                "historic": "archaeological_site",
                "name": "Roman Bathhouse",
                "tourism": "attraction"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.7542141,
                    41.3825161
                ]
            },
            "id": "node/5728312945"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5812672954",
                "historic": "monument",
                "name": "Doma",
                "name:tr": "Evim"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4434502,
                    42.0169571
                ]
            },
            "id": "node/5812672954"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5901740885",
                "addr:city": "Skopje",
                "addr:postcode": "1000",
                "historic": "memorial",
                "name": "Спомен плоча на Мајка Тереза",
                "name:de": "Geburtsort von Mutter Teresa",
                "name:en": "Mother Teresa Old House Place",
                "source": "survey"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4319995,
                    41.9952759
                ]
            },
            "id": "node/5901740885"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5926438456",
                "historic": "memorial",
                "int_name": "Aard den Dolaard",
                "memorial": "plaque",
                "name": "Ард ден Долард",
                "name:en": "Aard den Dolaard",
                "name:nl": "Aard den Dolaard"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.8078335,
                    41.1057278
                ]
            },
            "id": "node/5926438456"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/5932385385",
                "addr:housenumber": "292 А",
                "addr:postcode": "1000",
                "addr:street": "Христо Татарчев",
                "email": "aleksglavinov@gmail.com",
                "historic": "castle",
                "name": "Резиденцијата Главинов",
                "name:en": "Residence Glavinov",
                "name:mk": "Резиденција Главинов",
                "opening_hours": "24/7",
                "phone": "+38970403406"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4422187,
                    41.958616
                ]
            },
            "id": "node/5932385385"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/6054048485",
                "historic": "memorial",
                "int_name": "Metodija Andonov - Čento Momument",
                "memorial": "statue",
                "name": "Методија Андонов - Ченто"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4306041,
                    41.9957136
                ]
            },
            "id": "node/6054048485"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/6136130985",
                "historic": "monument",
                "name": "terminal mitnitsa tetovo"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9681527,
                    41.9974433
                ]
            },
            "id": "node/6136130985"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/6136130988",
                "historic": "monument",
                "name": "patarina-160"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2926787,
                    41.9885405
                ]
            },
            "id": "node/6136130988"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/6337100523",
                "historic": "monument",
                "name": "Kanda - Geoglif Sv. Nikole",
                "website": "https://www.ancient-origins.net/news-history-archaeology/astronomical-alignment-geoglyph-republic-macedonia-020170"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9562049,
                    41.8289715
                ]
            },
            "id": "node/6337100523"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/6349721704",
                "historic": "memorial",
                "inscription": "Малешевскиот (Малешки) народноослободителен одред бил територијална партизанска единица на НОВ и ПОМ. Формиран е во месноста Паруца, кота 1356 на пл. Плачковица и делувал од 25 август до ноември 1944. Одредот е формиран од 50 борци од Малешевијата. Ги нап",
                "memorial": "plaque",
                "name": "Споменик на Малешевскиот (Малешки) народноослободителен одред"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.6569551,
                    41.7213441
                ]
            },
            "id": "node/6349721704"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/6418857588",
                "access": "yes",
                "archaeological_site": "fortification",
                "ele": "1181",
                "historic": "archaeological_site",
                "historic:civilization": "byzantine",
                "int_name": "Kale",
                "name": "Кале",
                "name:en": "Kale",
                "name:mk": "Кале",
                "wikidata": "Q20569402",
                "wikipedia": "mk:Кале (Шурленци)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9282003,
                    41.0043725
                ]
            },
            "id": "node/6418857588"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/6471416045",
                "access": "yes",
                "alt_name": "Луковица",
                "alt_name:mk": "Lukovica",
                "archaeological_site": "fortification",
                "ele": "523",
                "historic": "archaeological_site",
                "historic:civilization": "ancient_roman",
                "int_name": "Kalata",
                "name": "Калата",
                "name:en": "Kalata",
                "name:mk": "Калата",
                "source": "survey",
                "source:ele": "https://ossp.katastar.gov.mk/OSSP/",
                "source:type": "http://www.promacedonia.org/im3/im_delchevo.htm",
                "start_date": "3rd century",
                "wikidata": "Q43276459",
                "wikipedia": "mk:Калата"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.5905605,
                    41.9856377
                ]
            },
            "id": "node/6471416045"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/6535106716",
                "access": "yes",
                "archaeological_site": "fortification",
                "ele": "840",
                "historic": "archaeological_site",
                "int_name": "Banjichko Kale",
                "name": "Бањичко Кале",
                "name:en": "Banjica Fortress",
                "wikidata": "Q61121392",
                "wikipedia": "mk:Бањичко Кале"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.628172,
                    41.6952366
                ]
            },
            "id": "node/6535106716"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/6563726510",
                "historic": "monument",
                "inscription": "WWII",
                "name": "Mirče Acev Bataljon",
                "website": "https://en.m.wikipedia.org/wiki/People%27s_Liberation_Army_of_Macedonia"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7630424,
                    41.3747079
                ]
            },
            "id": "node/6563726510"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/6821158694",
                "historic": "memorial",
                "name": "2 musicians and one dancing man"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4307922,
                    41.9943288
                ]
            },
            "id": "node/6821158694"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/6833101185",
                "historic": "memorial",
                "material": "stone",
                "memorial": "stele",
                "name": "Коста Абраш"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.795694,
                    41.1120953
                ]
            },
            "id": "node/6833101185"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/6837039795",
                "historic": "memorial",
                "name": "Henry Dunant"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.8071328,
                    41.1124032
                ]
            },
            "id": "node/6837039795"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/6901630767",
                "historic": "monument",
                "name": "Љубе Грујоски",
                "name:en": "Ljube Grujoski",
                "wikidata": "Q20562690"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3684104,
                    41.2754595
                ]
            },
            "id": "node/6901630767"
        },

        {
            "type": "Feature",
            "properties": {
                "@id": "node/7124138432",
                "access": "yes",
                "historic": "monument",
                "name": "Споменик на Дојрана"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.7227512,
                    41.1857198
                ]
            },
            "id": "node/7124138432"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7124138466",
                "access": "yes",
                "historic": "monument",
                "name": "Чешма Света Петка"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.7233826,
                    41.1825947
                ]
            },
            "id": "node/7124138466"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7473959214",
                "historic": "memorial",
                "memorial": "aircraft",
                "name": "PMK301 / PH-KXL"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.6157628,
                    41.9779001
                ]
            },
            "id": "node/7473959214"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7475537800",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Дабнички масакр",
                "name:en": "Masacre of Dabnica",
                "wikipedia": "mk:Дабнички масакр"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5605466,
                    41.3724643
                ]
            },
            "id": "node/7475537800"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7504362426",
                "access": "yes",
                "historic": "monument",
                "inscription": "1868-1904",
                "name": "Толе Паша",
                "name:en": "Tole Pasha",
                "tomb": "war_grave",
                "wikipedia": "mk:Толе_Паша"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.6536957,
                    41.2064953
                ]
            },
            "id": "node/7504362426"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7508523395",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Ацо Ангеловски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5476216,
                    42.022416
                ]
            },
            "id": "node/7508523395"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7508523396",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Кирил Петрушевски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5480468,
                    42.0225556
                ]
            },
            "id": "node/7508523396"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7508523397",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Ерол Готак"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5486015,
                    42.0227044
                ]
            },
            "id": "node/7508523397"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7564103281",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Нане Наумоски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1660504,
                    41.9764851
                ]
            },
            "id": "node/7564103281"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7564103282",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Сашо Китаноски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1773385,
                    41.977847
                ]
            },
            "id": "node/7564103282"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7564103283",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Бранко Секулоски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1679024,
                    41.97753
                ]
            },
            "id": "node/7564103283"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7564125585",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Горан Миноски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1745241,
                    41.9781971
                ]
            },
            "id": "node/7564125585"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7564125586",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Марко Деспотоски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1713626,
                    41.977893
                ]
            },
            "id": "node/7564125586"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7564125587",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Ердован Шабаноски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1675604,
                    41.9767167
                ]
            },
            "id": "node/7564125587"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7564125588",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Љубе Грујоски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1694976,
                    41.9772958
                ]
            },
            "id": "node/7564125588"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7564125589",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Дарко Велјаноски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1717935,
                    41.9770406
                ]
            },
            "id": "node/7564125589"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7564125590",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Веби Рушитоски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1747438,
                    41.9767893
                ]
            },
            "id": "node/7564125590"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7564125591",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Пеце Секулоски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1770879,
                    41.977042
                ]
            },
            "id": "node/7564125591"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7623493347",
                "historic": "memorial",
                "material": "marble",
                "memorial": "plaque",
                "name": "Карпалак"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.6256855,
                    41.3575814
                ]
            },
            "id": "node/7623493347"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7626158238",
                "historic": "memorial",
                "inscription": "Смртта стана немоќна пред нашата младост исправена, пред очите наши загледани, уште тоа утро во иднината.",
                "material": "reinforced_concrete",
                "memorial": "war_memorial",
                "name": "Масакр во Ваташа",
                "name:en": "Vatasha Massacre",
                "wikidata": "Q12908460",
                "wikipedia": "mk:Масакр во Ваташа",
                "wikipedia:sr": "Масакр у Ваташи"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.0284286,
                    41.4014262
                ]
            },
            "id": "node/7626158238"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7626874879",
                "access": "yes",
                "historic": "tomb",
                "name": "Пере Тошев",
                "name:en": "Pere Toshev",
                "subject:wikipedia": "mk:Пере Тошев",
                "tomb": "tombstone"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5583071,
                    41.3428704
                ]
            },
            "id": "node/7626874879"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7771077503",
                "historic": "memorial",
                "material": "granite",
                "memorial": "war_memorial",
                "name": "Duko Tasev"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.8721449,
                    41.4436592
                ]
            },
            "id": "node/7771077503"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7796229745",
                "historic": "monument",
                "name": "Гоце Делчев"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9229426,
                    41.4831122
                ]
            },
            "id": "node/7796229745"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7796229746",
                "historic": "monument",
                "name": "Христо Узунов",
                "name:en": "Hristo Uzunov"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9222623,
                    41.483575
                ]
            },
            "id": "node/7796229746"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7817956982",
                "entrance": "yes",
                "historic": "city_gate",
                "int_name": "Gorna Porta",
                "name": "Горна Порта",
                "name:en": "Upper Gate",
                "name:fr": "Porte supérieure",
                "tourism": "attraction",
                "wheelchair": "yes"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.7949057,
                    41.1150206
                ]
            },
            "id": "node/7817956982"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7826733791",
                "date": "1904-08-04",
                "historic": "battlefield",
                "name": "Битката на Ѓурѓејца",
                "name:en": "Battle of Gjurgjejca"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9658462,
                    41.4528994
                ]
            },
            "id": "node/7826733791"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7833094677",
                "historic": "monument",
                "name": "Споменик Св. Никола",
                "name:en": "Monument of St. Nicholas"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.942062,
                    41.8646892
                ]
            },
            "id": "node/7833094677"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7833095397",
                "historic": "monument",
                "name": "Споменик „Лазар Колишевски“"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9410121,
                    41.8644645
                ]
            },
            "id": "node/7833095397"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7836134125",
                "historic": "memorial",
                "name": "Св. Илија"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.9386585,
                    41.8627557
                ]
            },
            "id": "node/7836134125"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/7947878810",
                "access": "yes",
                "historic": "monument",
                "name": "Споменик на Никола Карев",
                "name:en": "Monument to Nikola Karev"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.412778,
                    41.9156602
                ]
            },
            "id": "node/7947878810"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8048135011",
                "historic": "memorial",
                "memorial": "war_memorial",
                "name": "Кире Гаврилоски-Јане / Круме Волнароски-Коља",
                "name:en": "Kire Gavriloski-Jane / Krume Volnaroski-Kolja"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5629735,
                    41.3464944
                ]
            },
            "id": "node/8048135011"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8063563409",
                "historic": "memorial",
                "memorial": "plaque",
                "name": "Александар Македонски",
                "name:en": "Alexander The Great"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5572532,
                    41.3421058
                ]
            },
            "id": "node/8063563409"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8193704891",
                "historic": "memorial",
                "memorial": "plaque",
                "name": "Мирослав Јоксимовиќ",
                "name:en": "Miroslav Joksimovikj",
                "name:mk": "Мирослав Јоксимовиќ"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2464617,
                    41.3761727
                ]
            },
            "id": "node/8193704891"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8279921462",
                "historic": "monument",
                "name": "Кица Петрески",
                "name:en": "Kica Petreski"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.2488407,
                    41.3653786
                ]
            },
            "id": "node/8279921462"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8402562316",
                "historic": "monument",
                "name": "VAM-304"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.6650899,
                    41.8668125
                ]
            },
            "id": "node/8402562316"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8402601134",
                "historic": "monument",
                "name": "МАР-7712"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.6491133,
                    41.4498577
                ]
            },
            "id": "node/8402601134"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8412381211",
                "historic": "memorial",
                "name": "1. Бригада",
                "name:en": "1st Brigade",
                "name:mk": "1. Бригада",
                "source": "Mapbox",
                "wikidata": "Q982906",
                "wikipedia": "mk:Прва македонска ударна бригада"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.6489384,
                    41.366045
                ]
            },
            "id": "node/8412381211"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8433354043",
                "access": "yes",
                "historic": "monument",
                "name": "Ослободителите на Скопје",
                "name:en": "Monument to the Liberators of Skopje"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4292436,
                    41.9998632
                ]
            },
            "id": "node/8433354043"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8477829657",
                "historic": "boundary_stone",
                "name": "10-11"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.8312162,
                    41.335769
                ]
            },
            "id": "node/8477829657"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8534237588",
                "historic": "memorial",
                "inscription": "Да се сетиме на тие денови, денови на отпор и гордост, денови на борба и слобода!\\n\\nСеќавање на штрајкот на средношколската младина против бугарскиот фашистички окупатор на 8. Декември 1941 година.",
                "memorial": "plaque",
                "name": "08.12.1941"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.5549177,
                    41.3435127
                ]
            },
            "id": "node/8534237588"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8677386085",
                "historic": "monument",
                "name": "Вејце"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.9185104,
                    42.0673767
                ]
            },
            "id": "node/8677386085"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8880547039",
                "historic": "monument",
                "name": "Генерал Михаило Апостолски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4485415,
                    41.9998618
                ]
            },
            "id": "node/8880547039"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8883349543",
                "historic": "memorial",
                "int_name": "General Mihajlo Apostolski",
                "memorial": "statue",
                "name": "Генерал Михајло Апостолски",
                "name:mk": "Генерал Михајло Апостолски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4506665,
                    41.9988251
                ]
            },
            "id": "node/8883349543"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8883349544",
                "historic": "monument",
                "name": "Krste Petkov Misirkov",
                "name:mk": "Крсте Петков Мисирков"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4412009,
                    41.9960184
                ]
            },
            "id": "node/8883349544"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8883349545",
                "historic": "monument",
                "name": "Blaže Koneski",
                "name:mk": "Блаже Конески"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4408764,
                    41.9960802
                ]
            },
            "id": "node/8883349545"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8901338318",
                "historic": "memorial",
                "name": "Sultana"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.0216359,
                    41.6560282
                ]
            },
            "id": "node/8901338318"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8944545329",
                "denomination": "orthodox",
                "historic": "wayside_shrine",
                "name": "Св. Георгиј",
                "name:en": "St. George",
                "name:mk": "Св. Георгиј",
                "religion": "christian"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3208996,
                    41.0108476
                ]
            },
            "id": "node/8944545329"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/8951219184",
                "access": "yes",
                "historic": "monument",
                "name": "Фаќач на чесниот крст",
                "name:mk": "Фаќач на чесниот крст"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.799333,
                    41.1119818
                ]
            },
            "id": "node/8951219184"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9026624343",
                "historic": "monument",
                "name": "Павел Шатев",
                "name:en": "Pavel Šatev"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4326511,
                    41.9945304
                ]
            },
            "id": "node/9026624343"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9078062189",
                "historic": "memorial",
                "inscription": "Невена Николова Георгиева-Дуња (25 јули 1925 во Скопје — 16 декември 1942 во Нежилово) — македонска комунистка, припадничка на младинското, синдикалното и работничкото движење меѓу двете светски војни, учесник во НОВ од 1941 година. Со своите 16 години би",
                "memorial": "statue",
                "name": "Невена Георгиева-Дуња"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4332709,
                    41.993726
                ]
            },
            "id": "node/9078062189"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9080920713",
                "historic": "monument",
                "name": "Ѓоко Лазаревски",
                "name:en": "Gjoko Lazarevski"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.0288552,
                    42.0640097
                ]
            },
            "id": "node/9080920713"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9080921338",
                "historic": "tomb",
                "name": "Теодорит",
                "tomb": "tombstone"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.027212,
                    42.0700178
                ]
            },
            "id": "node/9080921338"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9086030878",
                "historic": "tomb",
                "name": "Кирил Пејчиновиќ-Тетоец",
                "name:en": "Kiril Pejchinovikj-Tetoec",
                "tomb": "tombstone"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.0282911,
                    42.0669654
                ]
            },
            "id": "node/9086030878"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9086030879",
                "historic": "monument",
                "monument": "war_memorial",
                "name": "Загинати Лешочани во војните 1903-2001"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.0285176,
                    42.0668701
                ]
            },
            "id": "node/9086030879"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9200215821",
                "historic": "memorial",
                "name": "Нада Филева",
                "name:en": "Nada Fileva"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.798276,
                    41.1141534
                ]
            },
            "id": "node/9200215821"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9269907745",
                "historic": "memorial",
                "memorial": "plaque",
                "name": "Атентат на Киро Глигоров",
                "name:en": "Atentat of Kiro Gligorov"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4296159,
                    41.9918182
                ]
            },
            "id": "node/9269907745"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9633312940",
                "access": "yes",
                "denomination": "macedonian_orthodox",
                "historic": "wayside_shrine",
                "name": "Св. Петка",
                "name:en": "St. Parascheva",
                "religion": "christian"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.6070578,
                    41.3643261
                ]
            },
            "id": "node/9633312940"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9653138816",
                "historic": "aircraft",
                "name": "Ф-86Е",
                "name:en": "F-86E",
                "operator": "ВВС на СФРЈ",
                "operator:en": "SFRYAF",
                "ref": "11056",
                "tourism": "attraction",
                "wikipedia": "en:F-86"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3293819,
                    41.018858
                ]
            },
            "id": "node/9653138816"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9653178117",
                "historic": "aircraft",
                "name": "Ф-86Д",
                "name:en": "F-86D",
                "operator": "ВВС на СФРЈ",
                "operator:en": "SFRYAF",
                "ref": "14078",
                "tourism": "attraction",
                "wikipedia": "en:F-86"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3292773,
                    41.0186718
                ]
            },
            "id": "node/9653178117"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9661472617",
                "historic": "monument",
                "name": "Браќата Просветители Св. Кирил и Методиј"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.4105061,
                    41.9135927
                ]
            },
            "id": "node/9661472617"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9661483288",
                "historic": "monument",
                "name": "Љупчо Сантов"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.410612,
                    41.9143473
                ]
            },
            "id": "node/9661483288"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9663795290",
                "historic": "tomb",
                "inscription": "1904 г.\\nВојвода Велко Скочивирчето\\nХристо Романовски, с. Брник\\nДимитирија Берански, с. Беранци\\nДимитар Генимале, Битола\\nКостадин Генимале, Битола\\nВелко Долимановски, с. Српци\\nСтрезо Милески, с. Клепач\\nСтојан Гворчески\\nТасе Костовски, с. Круша",
                "name": "Братска гробница",
                "tomb": "war_grave"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4572557,
                    41.204511
                ]
            },
            "id": "node/9663795290"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9673875423",
                "historic": "aircraft",
                "name": "Сухои Су-25УБ",
                "name:en": "Sukhoi Su25UB",
                "operator": "ВВС на Македонија",
                "operator:en": "MkAF",
                "ref": "VAM-120",
                "tourism": "attraction",
                "wikidata": "Q192137",
                "wikipedia": "mk:Сухој Су-25"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.6216919,
                    41.9755167
                ]
            },
            "id": "node/9673875423"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9673875424",
                "historic": "aircraft",
                "name": "Сухои Су-25К",
                "name:en": "Sukhoi Su25K",
                "operator": "ВВС на Македонија",
                "operator:en": "MkAF",
                "ref": "VAM-121",
                "tourism": "attraction",
                "wikidata": "Q192137",
                "wikipedia": "mk:Сухој Су-25"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.6219516,
                    41.9754577
                ]
            },
            "id": "node/9673875424"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9723408984",
                "historic": "tomb",
                "name": "Игуменија Катерина",
                "tomb": "tombstone"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.6200758,
                    41.4286415
                ]
            },
            "id": "node/9723408984"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9927093810",
                "historic": "monument",
                "name": "Naim Frasheri"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.8876605,
                    41.8781835
                ]
            },
            "id": "node/9927093810"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9927105104",
                "access": "yes",
                "historic": "monument",
                "name": "Naser Ademi"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.8835051,
                    41.878351
                ]
            },
            "id": "node/9927105104"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/9927105105",
                "access": "yes",
                "historic": "monument",
                "name": "Deshmoret e Ushtrise Clirimtare Kombetare"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.883467,
                    41.8782156
                ]
            },
            "id": "node/9927105105"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/10006874002",
                "historic": "memorial",
                "memorial": "bust",
                "name": "Јаким Д Стојковски"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.1778987,
                    42.0001506
                ]
            },
            "id": "node/10006874002"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/10173766195",
                "castle_type": "defensive",
                "historic": "castle",
                "historic:civilization": "ancient_roman",
                "name": "Viničko Kale"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    22.5027575,
                    41.8768098
                ]
            },
            "id": "node/10173766195"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/10204019571",
                "historic": "memorial",
                "memorial": "bust",
                "name": "Нико Нестор-Дживджан"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.6778798,
                    41.1757975
                ]
            },
            "id": "node/10204019571"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/10204019572",
                "amenity": "dentist",
                "healthcare": "dentist",
                "historic": "memorial",
                "int_name": "Drini dent",
                "name": "Дрини дент",
                "opening_hours": "Mo-Fr 10:00-17:00; Sa 09:00-14;00",
                "phone": "+389 46 781 143"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    20.6791018,
                    41.1756353
                ]
            },
            "id": "node/10204019572"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/10733732764",
                "gauge": "600",
                "historic": "locomotive",
                "name": "99.4-025",
                "tourism": "attraction"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.3631045,
                    42.0080767
                ]
            },
            "id": "node/10733732764"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/10733732766",
                "gauge": "760",
                "historic": "locomotive",
                "name": "83-064",
                "tourism": "attraction"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4618597,
                    41.9780627
                ]
            },
            "id": "node/10733732766"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/10913797906",
                "historic": "memorial",
                "name": "Споменик „Солунски атентатори и Гемиџии“",
                "name:de": "Denkmal „Assassinen und Schiffer von Thessaloniki“",
                "source": "survey"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.4328484,
                    41.9964125
                ]
            },
            "id": "node/10913797906"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/10914553383",
                "access": "yes",
                "historic": "ruins",
                "historic:civilization": "ancient_roman",
                "name": "Света Троица и Свети Ѓорѓија",
                "name:en": "Holy Trinity and Holy George",
                "ruins": "church"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.288822,
                    41.9538189
                ]
            },
            "id": "node/10914553383"
        },
        {
            "type": "Feature",
            "properties": {
                "@id": "node/11107939919",
                "archaeological_site": "settlement",
                "historic": "archaeological_site",
                "historic:civilization": "prehistoric",
                "name": "Голема Пеш",
                "name:en": "Golema Pesht",
                "wikidata": "Q20565511",
                "wikipedia": "mk:Голема Пеш"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    21.1617392,
                    41.8117124
                ]
            },
            "id": "node/11107939919"
        }]
};

// Function to create a marker and set up click event
function createMarker(monument) {
    var marker = L.marker([monument.geometry.coordinates[1], monument.geometry.coordinates[0]])
        .bindPopup('<b>' + monument.properties.name)
        .addTo(map);

    marker.on('click', function () {
        closePopups();
        const popup = this.getPopup();
        updateListings(monument);
        listings.style.display = "block";
        popup.setContent(`<p>${'<b>' + monument.properties.name + '</b><br>' + monument.properties.historic}</p>`);
        popup.openOn(map);
        highlightListing(monument.properties.id);
    });
}

// Function to close all popups
function closePopups() {
    const popups = document.getElementsByClassName('leaflet-popup');
    if (popups[0]) {
        popups[0].classList.add('hidden');
    }
}

// Function to highlight a listing in the sidebar
function highlightListing(id) {
    const listings = document.getElementsByClassName('listing');
    for (const listing of listings) {
        listing.classList.remove('active');
    }
    const listing = document.getElementById(`listing-${id}`);
    if (listing) {
        listing.classList.add('active');
    }
}

//
function updateListings(monument) {
    var listingsDiv = document.getElementById('listings');
    listingsDiv.innerHTML = ''; // Clear previous content

    // Update content in the listings div
    var content = getDescription(monument);
    listingsDiv.innerHTML = `<div>${content}</div>`;
}

function getDescription(monument){
    var content = '<h2>' + (monument.properties.name ? monument.properties.name : '') + '</h2>' +
        (monument.properties.description ? '<p>' + monument.properties.description + '</p>' : '') +
        (monument.properties.historic ? '<p>Type: ' + monument.properties.historic + '</p>' : '') +
        (monument.properties.opening_hours ? '<p>Working Hours: ' + monument.properties.opening_hours + '</p>' : '') +
        (monument.properties['addr:city'] ? '<p>City: ' + monument.properties['addr:city'] + '</p>' : '') +
        (monument.properties.phone ? '<p>Phone: ' + monument.properties.phone + '</p>' : '') +
        (monument.properties.website ? '<p>Website: ' + monument.properties.website + '</p>' : '');
    return content;
}

// Function to filter and display listings on button click
function filterAndDisplayListings() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var listings = document.getElementById('listings');
    listings.innerHTML = '';
    listings.style.display = "block";

    map.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    var category = document.getElementById('searchInput').value.toLowerCase();
    var filteredMonuments = monuments.features;

    if(category === "empty") {
        monuments.features.forEach(function (monument) {
            var listing = document.createElement('div');
            listing.className = 'listing';
            listing.textContent = monument.properties.name;
            listings.appendChild(listing);
            createMarker(monument);
        });
    }
    else if (category !== '') {
        filteredMonuments = filteredMonuments.filter(function (monument) {
            return monument.properties.historic === category;
        });
    }

    filteredMonuments.forEach(function (monument) {
        var type = monument.properties.historic.toLowerCase();
        if (type.includes(searchInput)) {
            var listing = document.createElement('div');
            listing.className = 'listing';
            listing.textContent = monument.properties.name;
            listings.appendChild(listing);
            createMarker(monument);
        }
    });
}

// Iterate over libraries and create markers
monuments.features.forEach(createMarker);

// Add click event listener to search button
document.getElementById('search-btn').addEventListener('click', filterAndDisplayListings);

