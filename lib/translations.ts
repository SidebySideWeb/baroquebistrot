export type Language = "el" | "en"

export const translations = {
  el: {
    nav: {
      home: "Αρχική",
      menu: "Μενού",
      about: "Σχετικά",
      contact: "Επικοινωνία",
    },
    home: {
      title: "Baroque le Bistrot",
      subtitle: "All Day Bar • Restaurant • Bistrot",
      hero: "Ένας χώρος όπου η μέρα ξεκινά με brunch, συνεχίζεται με φαγητό χωρίς βιασύνη και κλείνει με cocktails που συνοδεύουν τη στιγμή.",
      bookButton: "Κάντε Κράτηση",
      viewMenuButton: "Δείτε το Μενού",
      mood1: "No Rush!",
      mood2: "Just Baroque Moments",
      mood3: "All Day!",
      experienceTitle: "Στο Baroque le Bistrot η εμπειρία είναι μοναδική.",
      experienceText: "Καφές, φαγητό και cocktails σε έναν χώρο φτιαγμένο για να επιστρέφεις.",
      menuTitle: "Το Μενού Μας",
      menuSubtitle: "Πιάτα που ακολουθούν τον ρυθμό της ημέρας.",
      breakfastBrunch: "Breakfast & Brunch",
      breakfastDesc: "Για μια αργή και ευχάριστη έναρξη",
      streetFeast: "Street Feast",
      streetDesc: "Γεύσεις που συναντιούνται",
      dinner: "Dinner",
      dinnerDesc: "Για βραδιές που αξίζει να απολαύσεις",
      fullMenu: "Πλήρες Μενού",
      reservationTitle: "Θέλετε να κάνετε κράτηση;",
      callUs: "Καλέστε μας",
      bookingForm: "Φόρμα Κράτησης",
    },
    menu: {
      title: "Το Μενού Μας",
      subtitle:
        "Το μενού μας βασίζεται σε ισορροπημένες γεύσεις, ποιοτικές πρώτες ύλες και πιάτα που συνοδεύουν κάθε στιγμή της ημέρας.",
      dessertShowcase: "Βιτρίνα",
      brunch: "Brunch",
      sweetPancakes: "Sweet & Pancakes",
      streetFeast: "Street Feast",
      saladBowls: "Σαλάτες Bowl",
      breadDip: "Bread, Dip and Platter",
      starters: "Ορεκτικά",
      salads: "Σαλάτες",
      pastaRisotto: "Pasta - Risotto",
      pizza: "Pizza",
      burger: "Burger",
      mainCourses: "Κύρια Πιάτα",
      items: {
        eggsBenedict: {
          name: "Eggs Benedict",
          desc: "Ποσέ αυγά, τραγανό μπέικον, σάλτσα Ολλανδέζ, english muffin",
        },
        avocadoToast: {
          name: "Avocado Toast",
          desc: "Φρέσκο αβοκάντο, cherry ντομάτες, feta mousse, ψωμί σικάλεως",
        },
        pancakes: {
          name: "Pancakes",
          desc: "Fluffy pancakes, φρέσκα φρούτα, μέλι, καρύδια",
        },
        greekOmelette: {
          name: "Greek Omelette",
          desc: "Φέτα, ντομάτα, ελιές, ρίγανη, σέρβις με ψωμάκια",
        },
        pulledPork: {
          name: "Pulled Pork Sandwich",
          desc: "Αργομαγειρεμένο χοιρινό, coleslaw, BBQ sauce, brioche bun",
        },
        koreanChicken: {
          name: "Korean Chicken Tacos",
          desc: "Crispy κοτόπουλο, gochujang mayo, pickled vegetables",
        },
        halloumiBurger: {
          name: "Halloumi Burger",
          desc: "Γριλιαρισμένο χαλούμι, ρόκα, μαρμελάδα καραμελωμένα κρεμμύδια",
        },
        fishChips: {
          name: "Fish & Chips",
          desc: "Μπακαλιάρος σε beer batter, πατάτες, tartar sauce",
        },
        burrataSalad: {
          name: "Burrata Salad",
          desc: "Φρέσκια μπουράτα, heirloom ντομάτες, βασιλικός, balsamic reduction",
        },
        beefCarpaccio: {
          name: "Beef Carpaccio",
          desc: "Φιλέτο βοδινού, παρμεζάνα, ρόκα, τρούφα, κάππαρη",
        },
        octopus: {
          name: "Octopus",
          desc: "Χταπόδι στη σχάρα, fava, cherry ντομάτες, καραμελωμένα κρεμμύδια",
        },
        mushroomRisotto: {
          name: "Mushroom Risotto",
          desc: "Άγρια μανιτάρια, παρμεζάνα, τρούφα",
        },
        ribeyeSteak: {
          name: "Ribeye Steak",
          desc: "300gr ribeye, πατάτες, σάλτσα πιπεριού",
        },
        lambChops: {
          name: "Lamb Chops",
          desc: "Παϊδάκια αρνίσια, πουρέ πατάτας, δενδρολίβανο",
        },
        seaBass: {
          name: "Sea Bass",
          desc: "Λαβράκι φιλέτο, λαχανικά, λεμονάτη σάλτσα",
        },
        pastaCarbonara: {
          name: "Pasta Carbonara",
          desc: "Φρέσκα ζυμαρικά, guanciale, αυγό, παρμεζάνα, μαύρο πιπέρι",
        },
        moussaka: {
          name: "Eggplant Moussaka",
          desc: "Κλασική μουσακά, μπεσαμέλ, σαλάτα",
        },
        lavaCake: {
          name: "Chocolate Lava Cake",
          desc: "Ζεστό σοκολατένιο κέικ, παγωτό βανίλια",
        },
        tiramisu: {
          name: "Tiramisu",
          desc: "Κλασικό ιταλικό γλυκό με μασκαρπόνε",
        },
        cheesecake: {
          name: "Cheesecake",
          desc: "New York style, φρούτα του δάσους",
        },
        cremeBrulee: {
          name: "Crème Brûlée",
          desc: "Κλασική γαλλική κρέμα με καραμελωμένη ζάχαρη",
        },
        baroqueSpritz: {
          name: "Baroque Spritz",
          desc: "Aperol, prosecco, σόδα, πορτοκάλι",
        },
        greekNegroni: {
          name: "Greek Negroni",
          desc: "Μαστίχα, Campari, vermouth, πορτοκάλι",
        },
        lavenderMartini: {
          name: "Lavender Martini",
          desc: "Gin, λεβάντα, λεμόνι, σιρόπι",
        },
        oldFashioned: {
          name: "Old Fashioned",
          desc: "Bourbon, bitters, ζάχαρη, πορτοκάλι",
        },
      },
      showcase: [
        {
          name: "Παρφέ Γιαουρτιού",
          desc: "Γιαούρτι στραγγιστό, φυστικοβούτυρο, μαρμελάδα φρούτα του δάσους",
          price: "3,80€",
        },
        { name: "Γιαούρτι Lila", desc: "Γιαούρτι στραγγιστό, φράουλες, γκανάζ σοκολάτας, γκρανόλα", price: "3,80€" },
        { name: "Κέικ ημέρας με φρόστινγκ", desc: "", price: "3,80€" },
        { name: "Κρουασάν Βουτύρου", desc: "", price: "3,80€" },
        { name: "Κρουασάν Cheesecake", desc: "", price: "4,80€" },
        { name: "Κρουασάν Φυστίκι", desc: "", price: "4,50€" },
        { name: "Κρουασάν σοκολάτα Oreo", desc: "", price: "4,50€" },
        { name: "Κρουασάν Lotus", desc: "Καραμελωμένο μπισκότο Lotus", price: "4,50€" },
      ],
      brunchItems: [
        {
          name: "Healthy Eggs benedict",
          desc: "Ψωμάκι μπριός, καπνιστή γαλοπούλα, αυγό ποσέ, ολλανδέζ αβοκάντο",
          price: "10,80€",
        },
        {
          name: "Shaksuka",
          desc: "Σάτσα τομάτας, ψητά τοματίνια, δύο αυγά μάτια, προζυμένιο ψωμί, φέτα τρίμα",
          price: "10,40€",
        },
        {
          name: "Salmon bagel",
          desc: "Αυγά ποσέ, γουακαμόλε, σολομός graviax, ολλανδέζ γιαούρτι, πράσινη σαλάτα",
          price: "11,20€",
        },
        {
          name: "Truffle Καγιανάς",
          desc: "Αυγά σκραμπλ, πάστα τρούφας, σωτέ μανιτάρια, cottage τυρί, φρυγανισμένο ψωμί",
          price: "11,20€",
        },
        {
          name: "Healthy Omelette",
          desc: "Ασπράδια αυγού, βρώμη, σπαράγγια, ψητά τοματίνια, καλαμπόκι, γαλοπούλα, κατίκι. Σερβίρεται με αβοκάντο και πράσινη σαλάτα.",
          price: "11,20€",
        },
        {
          name: "Signature Omelette",
          desc: "Αυγά, γκούντα, πατάτα τηγανιτή, τηγανητό κρεμμύδι. Σερβίρεται με πράσινη σαλάτα.",
          price: "10,50€",
        },
      ],
      sweetItems: [
        {
          name: "Pancake Mascarpone",
          desc: "Κρέμα μασκαρπόνε, μαρμελάδα φρούτα του δάσους, berries.",
          price: "12,60€",
        },
        { name: "The one with Choco", desc: "Pancakes, κρέμα σοκολάτας, γκανάζ, σοκολάτα πραλίνα", price: "11,40€" },
        { name: 'Pancake "MANTOLA"', desc: "Κρέμα αμυγδάλου, crumble μάντολα, λευκή σοκολάτα", price: "12,40€" },
        {
          name: "Honey Cardamon Toast",
          desc: "Καραμελωμένο μπριός τοστ με μέλι βουτύρου και κάρδαμο, σπιτική σαντιγί καρδάμου, αλμυρή καραμέλα.",
          price: "9,60€",
        },
      ],
      streetItems: [
        { name: "Burgerdict", desc: "Αυγά σκραμπλ, μπέικον, μαγιονέζα, bbq, ψωμί μπριός.", price: "10,40€" },
        {
          name: "Salmon Smile",
          desc: "Καπνιστός σολομός, σιράτσα mayo, iceberg, ψιλικομμένο αγγούρι.",
          price: "9,80€",
        },
        {
          name: "BFC Sandwich",
          desc: "Κοτόπουλο panko, iceberg, flakes παρμεζάνα, chutney τομάτας, μαγιονέζα. Σερβίρεται με πατάτες.",
          price: "9,70€",
        },
        {
          name: "Prosciutto Sandwich",
          desc: "Προσούτο κότο, πεκορίνο, ρόκα, μαγιονέζα, τομάτα, μαρμελάδα φρούτα του δάσους",
          price: "8,80€",
        },
        {
          name: "Focaccia",
          desc: "Μορταδέλα, μπουράτα, πέστο βασιλικού, τοματίνια, φυστίκια Αιγίνης.",
          price: "8,40€",
        },
        {
          name: '"Not a classic" club',
          desc: "Καπνιστό ζαμπόν, τυρί γκούντα, μαρμελάδα μπέικον, iceberg, τομάτα, μαγιονέζα αυγού. Σερβίρεται με πατάτες.",
          price: "12,00€",
        },
        { name: "Hot Dog", desc: "Λουκάνικο, iceberg, πίκλα σως, τηγανητό κρεμμύδι.", price: "9,80€" },
        { name: "Πενιρλί Μπέικον", desc: "Σάλτσα τομάτας, τυρί, ζαμπόν, μπέικον.", price: "9,50€" },
        { name: "Πενιρλί Croque Madam", desc: "Μοτσαρέλα, ζαμπόν fuantre, αυγό, μπεσαμέλ.", price: "10,40€" },
      ],
      saladItems: [
        {
          name: "Caesar's Healthy",
          desc: "Πράσινη σαλάτα, κοτόπουλο, παρμεζάνα, καλαμπόκι, κρουτόν, dressing γιαουρτιού.",
          price: "11,70€",
        },
        {
          name: "Κινόα",
          desc: "Σαλάτα με σολομό, τρίχρωμη κινόα, αυγό βραστό, αβοκάντο, καλαμπόκι, dressing λεμονιού.",
          price: "10,50€",
        },
      ],
      breadItems: [
        { name: "Φρυγανισμένο ψωμί με μους λευκού ταραμά", desc: "", price: "6,00€" },
        { name: "Φρυγανισμένο ψωμί με μους μελιτζανοσαλάτας", desc: "", price: "6,00€" },
        { name: "Φρυγανισμένο ψωμί με μους τυροκαυτερής", desc: "", price: "6,00€" },
        { name: "Φρυγανισμένο ψωμί αφρατεμένο βούτυρο πεκορίνο και μέλι", desc: "", price: "6,00€" },
        { name: "Πλατώ τυριών και αλλαντικών", desc: "", price: "2 άτομα/15,00€" },
        { name: "Πλατώ τυριών και αλλαντικών", desc: "", price: "4 άτομα/25,00€" },
      ],
      starterItems: [
        {
          name: "Gnocchi Πλευρώτους",
          desc: "Τραγανά gnocchi πατάτας, σωτέ πλευρώτους με κρέμα γραβιέρας και λάδι μαϊντανού.",
          price: "9,80€",
        },
        { name: "Crispy Bowl", desc: "Σπαστές πατάτες, μους τυροκαυτερή, μαγιονέζα.", price: "6,80€" },
        {
          name: "Arancini Ossobuco",
          desc: "Τραγανές ρυζοκροκέτες με ossobuco και κρέμα παρμεζάνας μιλανέζε.",
          price: "12,40€",
        },
        {
          name: "Κεμπάπ Γιαουρτλού",
          desc: "Σερβίρεται πάνω σε χειροποίητη πίτα, καρέ τομάτας, κρεμμύδια, σως γιαουρτιού, μαϊντανός.",
          price: "12,90€",
        },
        { name: "Λουκάνικο Βόειο", desc: "Σερβίρεται με σως μουστάρδας και σως BBQ.", price: "11,80€" },
        { name: "Σαγανάκι Caprese", desc: "Μοτσαρέλα με πάνκο, σάλτσα τομάτας, πέστο βασιλικού.", price: "10,40€" },
      ],
      dinnerSalads: [
        {
          name: "Chicken Curry",
          desc: "Iceberg, λόλα, καλαμπόκι, τοματίνια, μπέικον, κοτόπουλο panko, flakes παρμεζάνα, κρουτόν, dressing curry.",
          price: "14,50€",
        },
        {
          name: "Chili Con Carne",
          desc: "Iceberg, λόλα, ραντίτσιο, καλαμπόκι, φασόλια κόκκινα, σωτέ μοσχαρίσιος κιμάς, κρουτόν τορτίγια, flakes πεκορίνο, dressing soya.",
          price: "15,50€",
        },
        {
          name: "Beetroot Burrata",
          desc: "Παντζάρια, raspberry, ραπανάκι, φουντούκια, βινεγκρέτ πορτοκαλιού, πέστο βασιλικού, μπουράτα.",
          price: "15,00€",
        },
      ],
      pastaItems: [
        {
          name: "Beef Carbonara",
          desc: "Σωτέ μοσχάρι, πεκορίνο, παρμεζάνα, κρόκος αυγού, πιπέρι (Spaghetto Quadrato).",
          price: "17,50€",
        },
        {
          name: "Bolognese",
          desc: "Ραγού προβατίνας αλά μπολονέζ, κρέμα γραβιέρας (Mezzi Rigatoni).",
          price: "18,20€",
        },
        {
          name: "Calamarata Chicken",
          desc: "Μπλάνκετ κοτόπουλο, τραγανό λεμονάτο crumble (Calamarata).",
          price: "16,70€",
        },
        { name: "Truffle Grica", desc: "Guanciale, πεκορίνο, μαύρο πιπέρι, πάστα τρούφας (Fusilli).", price: "18,60€" },
        {
          name: 'Risotto "Spetsofai"',
          desc: "Λουκάνκο salsiccia, κρέμα πιπεριάς Φλωρίνης, τομάτα, κατίκι Δομοκού.",
          price: "18,60€",
        },
        { name: 'Risotto "Kastano"', desc: "Πουρέ κάστανο, σωτέ κάστανο, σαλάμι Spinanata.", price: "18,00€" },
        {
          name: "Κριθαρότο Beef Cheeks",
          desc: "Ραγού μοσχαρίσια μάγουλα, κρέμα γραβιέρας, αρωματισμένο λάδι.",
          price: "18,60€",
        },
      ],
      pizzaItems: [
        { name: "Prosciutto", desc: "Μοτσαρέλα, προσούτο, ρόκα, σάλτσα τομάτας, flakes παρμεζάνας.", price: "16,20€" },
        {
          name: "Spianata",
          desc: "Μοτσαρέλα, σαλάμι Ιταλίας spianata, κατίκι Δομοκού, μέλι, σάλτσα τομάτας.",
          price: "16,80€",
        },
        {
          name: "Tuscan Potato",
          desc: "Μοτσαρέλα, κρέμα παρμεζάνας, μπέικον, πατάτες, μαγιονέζα αγιολί.",
          price: "16,50€",
        },
      ],
      burgerItems: [
        {
          name: "Beef Burger",
          desc: "Μοσχαρίσο μπιφτέκι, iceberg, τομάτα, μπέικον, cheddar, πίκλες, μαγιονέζα BBQ.",
          price: "14,20€",
        },
        {
          name: "Crispy Chicken",
          desc: "Κοτόπουλο φιλέτο με πάνκο, γουακαμόλε, μπέικον, τομάτα, flakes παρμεζάνα, μαγιονέζα αγιόλι.",
          price: "13,60€",
        },
      ],
      mainItems: [
        { name: "Φιλέτο κοτόπουλο μπούτι", desc: "Σερβίρεται με πατάτες crispy - (σως λεμονιού).", price: "16,90€" },
        { name: "Μπριζολάκι Λαιμού", desc: "Σερβίρεται με πατάτες crispy - (σως Jack Daniels').", price: "16,30€" },
        {
          name: "Σουβλάκι Μοσχαρίσιο Διάφραγμα",
          desc: "Σερβίρεται με baby πατάτες, ψητά λαχανικά - (σως BBQ).",
          price: "26,00€",
        },
        {
          name: "Μοσχαρίσια Παϊδάκια",
          desc: "Σερβίρεται με baby πατάτες, ψητά λαχανικά - (σως BBQ).",
          price: "28,00€",
        },
        { name: "Ribeye", desc: "Σερβίρεται με baby πατάτες και ψητά λαχανικά.", price: "32,00€" },
      ],
    },
    about: {
      title: "Σχετικά με Εμάς",
      intro:
        "Το Baroque le Bistrot είναι ένας all day χώρος που συνδυάζει σύγχρονη αισθητική, καλές πρώτες ύλες και αυθεντική φιλοξενία.",
      introSub: "Ένας χώρος για κάθε ώρα της ημέρας.",
      philosophyTitle: "Η Φιλοσοφία Μας",
      philosophy:
        "Πιστεύουμε στη δύναμη της απλότητας και της ποιότητας. Κάθε πιάτο, κάθε ποτό, κάθε στιγμή σχεδιάζεται με φροντίδα για να προσφέρει μια αυθεντική εμπειρία.",
      value1Title: "Ποιότητα",
      value1: "Επιλέγουμε προσεκτικά τις πρώτες ύλες μας για να εξασφαλίσουμε την καλύτερη γεύση",
      value2Title: "Φιλοξενία",
      value2: "Κάθε επισκέπτης είναι σημαντικός και αυτό φαίνεται σε κάθε λεπτομέρεια",
      value3Title: "Ατμόσφαιρα",
      value3: "Ένας χώρος που σε κάνει να θέλεις να μείνεις λίγο παραπάνω",
    },
    contact: {
      title: "Επικοινωνία & Κρατήσεις",
      subtitle:
        "Θα χαρούμε να σας υποδεχτούμε στο Baroque le Bistrot. Επικοινωνήστε μαζί μας για κρατήσεις ή οποιαδήποτε απορία.",
      bookingTitle: "Κάντε Κράτηση",
      name: "Ονοματεπώνυμο",
      email: "Email",
      phone: "Τηλέφωνο",
      date: "Ημερομηνία",
      time: "Ώρα",
      guests: "Αριθμός Ατόμων",
      message: "Μήνυμα (προαιρετικό)",
      submit: "Αποστολή Κράτησης",
      contactTitle: "Στοιχεία Επικοινωνίας",
      address: "Διεύθυνση",
      addressValue: "Βαλλιανού 3, 28100 Αργοστόλι, Ελλάδα",
      phoneLabel: "Τηλέφωνο",
      emailLabel: "Email",
      hours: "Ωράριο",
      hoursValue: "Δευτέρα - Παρασκευή: 9:00 AM - 02:00 AM\nΣαββάτο - Κυριακή: 9:00 AM - 3:00 AM",
    },
    footer: {
      description: "All day bar, restaurant και bistrot στην καρδιά του Αργοστολίου.",
      quickLinks: "Σύνδεσμοι",
      contact: "Επικοινωνία",
      address: "Βαλλιανού 3, 28100 Αργοστόλι, Ελλάδα",
      rights: "Όλα τα δικαιώματα κατοχυρωμένα.",
    },
    mobileCta: {
      book: "Κράτηση",
    },
  },
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      about: "About",
      contact: "Contact",
    },
    home: {
      title: "Baroque le Bistrot",
      subtitle: "All Day Bar • Restaurant • Bistrot",
      hero: "A space where the day begins with brunch, continues with unhurried meals, and closes with cocktails that accompany the moment.",
      bookButton: "Make a Reservation",
      viewMenuButton: "View Menu",
      mood1: "No Rush!",
      mood2: "Just Baroque Moments",
      mood3: "All Day!",
      experienceTitle: "At Baroque le Bistrot, the experience is unique.",
      experienceText: "Coffee, food, and cocktails in a space made to return to.",
      menuTitle: "Our Menu",
      menuSubtitle: "Dishes that follow the rhythm of the day.",
      breakfastBrunch: "Breakfast & Brunch",
      breakfastDesc: "For a slow and pleasant start",
      streetFeast: "Street Feast",
      streetDesc: "Flavors that meet",
      dinner: "Dinner",
      dinnerDesc: "For evenings worth savoring",
      fullMenu: "Full Menu",
      reservationTitle: "Would you like to make a reservation?",
      callUs: "Call Us",
      bookingForm: "Booking Form",
    },
    menu: {
      title: "Our Menu",
      subtitle:
        "Our menu is based on balanced flavors, quality ingredients, and dishes that accompany every moment of the day.",
      dessertShowcase: "Dessert Showcase",
      brunch: "Brunch",
      sweetPancakes: "Sweet & Pancakes",
      streetFeast: "Street Feast",
      saladBowls: "Salad Bowls",
      breadDip: "Bread, Dip and Platter",
      starters: "Starters",
      salads: "Salads",
      pastaRisotto: "Pasta - Risotto",
      pizza: "Pizza",
      burger: "Burger",
      mainCourses: "Main Courses",
      items: {
        eggsBenedict: {
          name: "Eggs Benedict",
          desc: "Poached eggs, crispy bacon, hollandaise sauce, english muffin",
        },
        avocadoToast: {
          name: "Avocado Toast",
          desc: "Fresh avocado, cherry tomatoes, feta mousse, rye bread",
        },
        pancakes: {
          name: "Pancakes",
          desc: "Fluffy pancakes, fresh fruit, honey, nuts",
        },
        greekOmelette: {
          name: "Greek Omelette",
          desc: "Feta, tomato, olives, oregano, served with bread",
        },
        pulledPork: {
          name: "Pulled Pork Sandwich",
          desc: "Slow-cooked pork, coleslaw, BBQ sauce, brioche bun",
        },
        koreanChicken: {
          name: "Korean Chicken Tacos",
          desc: "Crispy chicken, gochujang mayo, pickled vegetables",
        },
        halloumiBurger: {
          name: "Halloumi Burger",
          desc: "Grilled halloumi, arugula, caramelized onion jam",
        },
        fishChips: {
          name: "Fish & Chips",
          desc: "Beer battered cod, fries, tartar sauce",
        },
        burrataSalad: {
          name: "Burrata Salad",
          desc: "Fresh burrata, heirloom tomatoes, basil, balsamic reduction",
        },
        beefCarpaccio: {
          name: "Beef Carpaccio",
          desc: "Beef tenderloin, parmesan, arugula, truffle, capers",
        },
        octopus: {
          name: "Octopus",
          desc: "Grilled octopus, fava, cherry tomatoes, caramelized onions",
        },
        mushroomRisotto: {
          name: "Mushroom Risotto",
          desc: "Wild mushrooms, parmesan, truffle",
        },
        ribeyeSteak: {
          name: "Ribeye Steak",
          desc: "300gr ribeye, potatoes, pepper sauce",
        },
        lambChops: {
          name: "Lamb Chops",
          desc: "Lamb chops, mashed potatoes, rosemary",
        },
        seaBass: {
          name: "Sea Bass",
          desc: "Sea bass fillet, vegetables, lemon sauce",
        },
        pastaCarbonara: {
          name: "Pasta Carbonara",
          desc: "Fresh pasta, guanciale, egg, parmesan, black pepper",
        },
        moussaka: {
          name: "Eggplant Moussaka",
          desc: "Classic moussaka, béchamel, salad",
        },
        lavaCake: {
          name: "Chocolate Lava Cake",
          desc: "Warm chocolate cake, vanilla ice cream",
        },
        tiramisu: {
          name: "Tiramisu",
          desc: "Classic Italian dessert with mascarpone",
        },
        cheesecake: {
          name: "Cheesecake",
          desc: "New York style, forest berries",
        },
        cremeBrulee: {
          name: "Crème Brûlée",
          desc: "Classic French cream with caramelized sugar",
        },
        baroqueSpritz: {
          name: "Baroque Spritz",
          desc: "Aperol, prosecco, soda, orange",
        },
        greekNegroni: {
          name: "Greek Negroni",
          desc: "Mastiha, Campari, vermouth, orange",
        },
        lavenderMartini: {
          name: "Lavender Martini",
          desc: "Gin, lavender, lemon, syrup",
        },
        oldFashioned: {
          name: "Old Fashioned",
          desc: "Bourbon, bitters, sugar, orange",
        },
      },
      showcase: [
        { name: "Yogurt Parfait", desc: "Strained Greek yogurt, peanut butter, forest fruit jam.", price: "3,80€" },
        {
          name: "Yogurt Lila",
          desc: "Strained Greek yogurt, strawberries, chocolate ganache, granola.",
          price: "3,80€",
        },
        { name: "Cake of the Day with Frosting", desc: "", price: "3,80€" },
        { name: "Butter Croissant", desc: "", price: "3,80€" },
        { name: "Cheesecake Croissant", desc: "", price: "4,80€" },
        { name: "Pistachio Croissant", desc: "", price: "4,50€" },
        { name: "Oreo Chocolate Croissant", desc: "", price: "4,50€" },
        { name: "Lotus Croissant", desc: "With caramelized Lotus biscuit.", price: "4,50€" },
      ],
      brunchItems: [
        {
          name: "Healthy Eggs Benedict",
          desc: "Brioche bun, smoked turkey, poached egg, avocado hollandaise.",
          price: "10,80€",
        },
        {
          name: "Shaksuka",
          desc: "Tomato sauce, roasted cherry tomatoes, two fried eggs, sourdough bread, grated feta cheese.",
          price: "10,40€",
        },
        {
          name: "Salmon Bagel",
          desc: "Poached eggs, guacamole, salmon gravlax, yogurt hollandaise, served with green salad.",
          price: "11,20€",
        },
        {
          name: "Truffle Scrambled Eggs",
          desc: "Scrambled eggs, truffle paste, sautéed mushrooms, cottage cheese, toasted bread.",
          price: "11,20€",
        },
        {
          name: "Healthy Omelette",
          desc: "Egg whites, oats, asparagus, roasted cherry tomatoes, corn, turkey, katiki cheese. Served with avocado and green salad.",
          price: "11,20€",
        },
        {
          name: "Signature Omelette",
          desc: "Eggs, gouda cheese, fried potatoes, crispy fried onion. Served with green salad.",
          price: "10,50€",
        },
      ],
      sweetItems: [
        { name: "Mascarpone Pancakes", desc: "Mascarpone cream, forest fruit jam, fresh berries.", price: "12,60€" },
        {
          name: "The One with Choco",
          desc: "Pancakes with chocolate cream, ganache & praline chocolate.",
          price: "11,40€",
        },
        { name: '"Mantola" Pancakes', desc: "Almond cream, mantola crumble & white chocolate.", price: "12,40€" },
        {
          name: "Honey Cardamon Toast",
          desc: "Caramelized brioche toast with honey butter & cardamom, homemade cardamom whipped cream & salted caramel.",
          price: "9,60€",
        },
      ],
      streetItems: [
        { name: "Burgerdict", desc: "Scrambled eggs, bacon, mayonnaise, BBQ sauce, brioche bun.", price: "10,40€" },
        {
          name: "Salmon Smile",
          desc: "Smoked salmon, sriracha mayo, iceberg lettuce, finely chopped cucumber.",
          price: "9,80€",
        },
        {
          name: "BFC Sandwich",
          desc: "Panko chicken, iceberg lettuce, parmesan flakes, tomato chutney & mayonnaise. Served with fries.",
          price: "9,70€",
        },
        {
          name: "Prosciutto Sandwich",
          desc: "Turkey prosciutto, pecorino, arugula, mayonnaise, tomato, forest fruit jam.",
          price: "8,80€",
        },
        {
          name: "Focaccia",
          desc: "Mortadella, burrata, basil pesto, cherry tomatoes, Aegina pistachios.",
          price: "8,40€",
        },
        {
          name: '"Not a Classic" Club',
          desc: "Smoked ham, gouda cheese, bacon jam, iceberg lettuce, tomato, egg mayonnaise. Served with fries.",
          price: "12,00€",
        },
        { name: "Hot Dog", desc: "Sausage, iceberg lettuce, pickle sauce, crispy fried onion.", price: "9,80€" },
        { name: "Bacon Peinirli", desc: "Tomato sauce, cheese, ham & bacon.", price: "9,50€" },
        { name: "Peinirli Croque Madam", desc: "Mozzarella, smoked ham, egg & béchamel sauce.", price: "10,40€" },
      ],
      saladItems: [
        {
          name: "Caesar's Healthy",
          desc: "Green salad, chicken, parmesan, corn, croutons & yogurt dressing.",
          price: "11,70€",
        },
        {
          name: "Quinoa Bowl",
          desc: "Salmon, tricolor quinoa, boiled egg, avocado, corn & lemon dressing.",
          price: "10,50€",
        },
      ],
      breadItems: [
        { name: "Toasted Bread with White Taramosalata Mousse", desc: "", price: "6,00€" },
        { name: "Toasted Bread with Eggplant Dip Mousse", desc: "", price: "6,00€" },
        { name: "Toasted Bread with Spicy Cheese Mousse", desc: "", price: "6,00€" },
        { name: "Toasted Bread with Whipped Butter, Pecorino & Honey", desc: "", price: "6,00€" },
        { name: "Cheese & Charcuterie Platter", desc: "", price: "2 persons/15,00€" },
        { name: "Cheese & Charcuterie Platter", desc: "", price: "4 persons/25,00€" },
      ],
      starterItems: [
        {
          name: "Oyster Mushroom Gnocchi",
          desc: "Crispy potato gnocchi, sautéed oyster mushrooms, graviera cream & parsley oil.",
          price: "9,80€",
        },
        { name: "Crispy Bowl", desc: "Smashed potatoes, spicy cheese mousse, mayonnaise.", price: "6,80€" },
        {
          name: "Arancini Ossobuco",
          desc: "Crispy rice croquettes with ossobuco & Milanese parmesan cream.",
          price: "12,40€",
        },
        {
          name: "Kebab Giourtlou",
          desc: "Served on handmade pita bread with tomato dice, onions, yogurt sauce & parsley.",
          price: "12,90€",
        },
        { name: "Grilled Beef Sausage", desc: "Served with mustard sauce & BBQ sauce.", price: "11,80€" },
        { name: "Caprese Saganaki", desc: "Mozzarella with panko, tomato sauce, basil pesto.", price: "10,40€" },
      ],
      dinnerSalads: [
        {
          name: "Chicken Curry",
          desc: "Iceberg lettuce, lollo, corn, cherry tomatoes, bacon, panko chicken, parmesan flakes, croutons & curry dressing.",
          price: "14,50€",
        },
        {
          name: "Chili Con Carne",
          desc: "Iceberg lettuce, lollo, radicchio, corn, red beans, sautéed beef mince, tortilla croutons, pecorino flakes & soy dressing.",
          price: "15,50€",
        },
        {
          name: "Beetroot Burrata",
          desc: "Beetroot, raspberry, radish, hazelnuts, orange vinaigrette, basil pesto & burrata.",
          price: "15,00€",
        },
      ],
      pastaItems: [
        {
          name: "Beef Carbonara",
          desc: "Sautéed beef, pecorino, parmesan, egg yolk & black pepper (Spaghetto Quadrato).",
          price: "17,50€",
        },
        { name: "Bolognese", desc: "Lamb ragù Bolognese style with graviera cream (Mezzi Rigatoni).", price: "18,20€" },
        {
          name: "Calamarata Chicken",
          desc: "Chicken blanquette with crispy lemon crumble (Calamarata pasta).",
          price: "16,70€",
        },
        {
          name: "Truffle Grica",
          desc: "Guanciale, pecorino, black pepper & truffle paste (Fusilli).",
          price: "18,60€",
        },
        {
          name: 'Risotto "Spetsofai"',
          desc: "Salsiccia sausage, Florina pepper cream, tomato & Katiki Domokou cheese.",
          price: "18,60€",
        },
        { name: 'Risotto "Kastano"', desc: "Chestnut purée, sautéed chestnuts & Spianata salami.", price: "18,00€" },
        {
          name: "Orzo Risotto with Beef Cheeks",
          desc: "Beef cheek ragù, graviera cream & aromatic oil.",
          price: "18,60€",
        },
      ],
      pizzaItems: [
        {
          name: "Prosciutto",
          desc: "Mozzarella, prosciutto, arugula, tomato sauce & parmesan flakes.",
          price: "16,20€",
        },
        {
          name: "Spianata",
          desc: "Mozzarella, Italian spianata salami, Katiki Domokou cheese, honey & tomato sauce.",
          price: "16,80€",
        },
        {
          name: "Tuscan Potato",
          desc: "Mozzarella, parmesan cream, bacon, potatoes & aioli mayonnaise.",
          price: "16,50€",
        },
      ],
      burgerItems: [
        {
          name: "Beef Burger",
          desc: "Beef patty, iceberg lettuce, tomato, bacon, cheddar, pickles & BBQ mayonnaise.",
          price: "14,20€",
        },
        {
          name: "Crispy Chicken Burger",
          desc: "Panko-crusted chicken fillet, guacamole, bacon, tomato, parmesan flakes & aioli mayonnaise.",
          price: "13,60€",
        },
      ],
      mainItems: [
        {
          name: "Chicken Thigh Fillet",
          desc: "Served with crispy potatoes & lemon sauce on the side.",
          price: "16,90€",
        },
        {
          name: "Pork Neck Steak",
          desc: "Served with crispy potatoes & Jack Daniel's sauce on the side.",
          price: "16,30€",
        },
        {
          name: "Beef Skirt Souvlaki",
          desc: "Served with baby potatoes, grilled vegetables & BBQ sauce on the side.",
          price: "26,00€",
        },
        {
          name: "Beef Ribs",
          desc: "Served with baby potatoes, grilled vegetables & BBQ sauce on the side.",
          price: "28,00€",
        },
        { name: "Ribeye", desc: "Served with baby potatoes & grilled vegetables.", price: "32,00€" },
      ],
    },
    about: {
      title: "About Us",
      intro:
        "Baroque le Bistrot is an all-day space that combines contemporary aesthetics, quality ingredients, and authentic hospitality.",
      introSub: "A space for every hour of the day. Without rush.",
      philosophyTitle: "Our Philosophy",
      philosophy:
        "We believe in the power of simplicity and quality. Every dish, every drink, every moment is designed with care to offer an authentic experience.",
      value1Title: "Quality",
      value1: "We carefully select our ingredients to ensure the best taste",
      value2Title: "Hospitality",
      value2: "Every visitor matters and this shows in every detail",
      value3Title: "Atmosphere",
      value3: "A space that makes you want to stay a little longer",
    },
    contact: {
      title: "Contact & Reservations",
      subtitle:
        "We would be delighted to welcome you at Baroque le Bistrot. Contact us for reservations or any questions.",
      bookingTitle: "Make a Reservation",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      date: "Date",
      time: "Time",
      guests: "Number of Guests",
      message: "Message (optional)",
      submit: "Submit Reservation",
      contactTitle: "Contact Information",
      address: "Address",
      addressValue: "Vallianou P. 3 28100 Argostóli, Greece",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hours: "Hours",
      hoursValue: "Monday - Friday: 8:00 AM - 3:00 AM\nSaturday - Sunday: 9:00 AM - 3:00 AM",
    },
    footer: {
      description: "All day bar, restaurant and bistrot in the heart of Argostóli.",
      quickLinks: "Quick Links",
      contact: "Contact",
      address: "Vallianou P. 3 28100 Argostóli, Greece",
      rights: "All rights reserved.",
    },
    mobileCta: {
      book: "Book",
    },
  },
} as const
