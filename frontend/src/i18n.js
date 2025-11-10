import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        bookNow: "Book Your Move Now",
        phone: "+43 676 6300167",
        email: "office@putzelf.com"
      },
      imprint: {
        title: "Imprint",
        companyNameTitle: "Company name",
        companyNameLine1: "Sebastijan Aleksandar Kerculj",
        companyNameLine2: "UmzugsELF",
        founderTitle: "Founder and owner",
        founderName: "Sebastijan Aleksandar Kerculj",
        purposeTitle: "Corporate purpose",
        purposeBody: "Exceptional Moving Services.",
        vatTitle: "VAT number",
        vatValue: "ATU78448967",
        regNoTitle: "Company registration number",
        regNoValue: "-",
        courtTitle: "Commercial Register Court",
        courtValue: "Vienna Commercial Court, Marxergasse 1a, A-1030 Vienna",
        hqTitle: "Company headquarters",
        hqValue: "Simmeringer Hauptstraße 24, 1110 Vienna",
        contactTitle: "Contact details",
        phoneLabel: "Phone",
        phoneValue: "+43 (0)676 6300167",
        emailLabel: "Email",
        emailValue: "info@putzelf.com",
        membership: "Member of the Vienna Economic Chamber, Vienna Commercial Service Providers Section"
      },
      hero: {
        title: "Professional Moving at Your Fingertips",
        subtitle: "Book reliable and affordable house and office moving in a few clicks.",
        cta: "BOOK HERE",
        jobCta: "Looking for a Job?",
        jobModalTitle: "Join the Umzugself team",
        jobModalBody: "Please email us your contact details and application to {{email}}. We’ll get back to you shortly.",
        jobModalEmailCta: "Send email",
        jobModalClose: "Close"
      },
      profile: {
        title: "Choose your favorite worker",
        subtitle: "Review our trusted professionals and pick the cleaner who fits your booking best.",
        choose: "Choose me",
        rating: "{{rating}} rating · {{reviews}} reviews",
        workers: {
          amelia: "Amelia K.",
          markus: "Markus L.",
          selin: "Selin A.",
          leon: "Leon M.",
          maria: "Maria S.",
          yusuf: "Yusuf T.",
          sofia: "Sofia P.",
          jakob: "Jakob R.",
          noemi: "Noemi F.",
          anna: "Anna D."
        }
      },
      services: {
        standard: { title: "House Moving", desc: "Stress-free moving for apartments and houses." },
        deep: { title: "Office Moving", desc: "Efficient relocations for offices and teams." },
        office: { title: "Apartment Moving", desc: "Professional apartment moves with minimal downtime." },
        reliable: "Reliable",
        reliableLine: "Our movers are vetted and trusted by hundreds of customers.",
        pricing: "Transparent Pricing",
        easy: "Easy Booking",
        priceLine: "Transparent rates, no hidden costs.",
        easyLine: "Book online in less than 2 minutes and relax.",
        homeTitle: "House Moving",
        homeDesc: "From packing to transport — we handle your home move with care and precision.",
        homeCta: "Book House Moving",
        officeTitle: "House Moving",
        officeDesc: "Stress-free moving for apartments and houses.",
        officeCta: "Book House Moving"
      },
      alt: {
        logo: "Umzugself Logo",
        homeCleaning: "House Moving",
        officeCleaning: "Office Moving"
      },
      footer: {
        staff: {
          title: "Employees",
          links: {
            privacySheet: "Privacy Sheet",
            dutyRoster: "Duty Roster",
            masterData: "Master Data Sheet",
            leaveForm: "Leave / Comp Time"
          }
        },
        partners: {
          title: "Partners",
          links: {
            partnerApplication: "Partner Application",
            serviceContract: "Service Agreement",
            subcontract: "Subcontract"
          }
        },
        customers: {
          title: "Customers",
          links: {
            serviceContract: "Service Contract",
            cleaningStandards: "Moving Standards",
            priceList: "Price List",
            calculator: "Price Calculator"
          }
        },
        connect: {
          title: "Connect",
          links: {
            terms: "Terms & Conditions",
            privacy: "Privacy Policy",
            imprint: "Imprint"
          }
        }
      },
      cookies: {
        msg: "We use cookies to improve your experience. By using our site, you agree to our ",
        privacyPolicy: "Privacy Policy",
        decline: "Decline",
        accept: "Accept"
      },
      home: {
        title: "Book Your Move",
        selectType: "Select Moving Type",
        types: {
          standard: "House Moving",
          office: "Office Moving",
          apartmentHotel: "Apartment Move"
        },
        subcategories: {
          title: "Choose Subcategory",
          intensive: "Packing",
          window: "Furniture disassembly"
        },
        descriptions: {
          standard: "Home moves including loading, transport, and unloading.",
          office: "Office moves tailored to workspaces and common areas.",
          apartmentHotel: "Apartment moves between stays or rentals."
        },
        durationLabel: "Hours (min 3)",
        dateLabel: "Date",
        timeLabel: "Time",
        renegotiate: "Willing to renegotiate if job takes longer",
        durationHelp: "Minimum booking is 3 hours.",
        estimated: "Estimated Price",
        rate: "Rate: €{{rate}}/hour",
        submit: "Let's Go",
        alerts: {
          missing: "Please fill date, time and select a cleaning type.",
          createError: "Error creating booking: {{msg}}",
          noWorker: "Please choose your cleaner before completing the booking."
        },
        selectedWorker: {
          label: "Your cleaner",
          selected: "{{name}} is ready to help.",
          change: "Choose a different cleaner",
          missing: "You haven't selected a cleaner yet.",
          choose: "Select your cleaner"
        }
      },
      calculator: {
        title: "Moving Price Calculator",
        subtitle: "Estimate your move based on size and options.",
        typeHeading: "Choose a cleaning type",
        subHeading: "Add premium services",
        areaLabel: "Size (㎡)",
        durationHelp: "Bookings start at 3 hours. Use the arrows to adjust.",
        estimatedTotalLabel: "Estimated total",
        estimatedTotal: "Estimated total: €{{price}}",
        hourlyRate: "Hourly rate: €{{rate}}/h",
        premiumNotice: "Premium add-ons adjust the hourly rate.",
        renegotiateLabel: "Allow renegotiation if the job needs more time",
        resetBtn: "Reset selection",
        cta: "Select a professional",
        disclaimer: "This is an estimate. Final pricing is confirmed during booking."
      },
      order: {
        loading: "Loading booking...",
        confirmTitle: "Confirm Your Booking",
        summary: "Booking Summary",
        date: "Date",
        time: "Time",
        cleaningType: "Moving Type",
        duration: "Duration",
        durationUnit: "hours",
        price: "Price",
        enterDetails: "Enter your details to confirm",
        placeholders: {
          name: "Full name",
          email: "Email",
          address: "Street name & House No. & Door No.",
          phone: "Phone"
        },
        errors: {
          invalidEmail: "Please enter a valid email address.",
          invalidPhone: "Please enter a valid phone number including country code."
        },
        gdprPrefix: "I agree to the processing of my personal data in accordance with the ",
        gdprLink: "Privacy Policy (GDPR)",
        confirming: "Confirming...",
        confirmBtn: "Confirm Booking",
        confirmedTitle: "Booking confirmed ✅",
        confirmedMsg: "A confirmation email has been sent to {{email}}.",
        errorPrefix: ""
      }
    }
  },
  de: {
    translation: {
      nav: {
        bookNow: "Jetzt Umzug buchen",
        phone: "+43 676 6300167",
        email: "office@putzelf.com"
      },
      imprint: {
        title: "Impressum",
        companyNameTitle: "Firmenname",
        companyNameLine1: "Sebastijan Aleksandar Kerculj",
        companyNameLine2: "UmzugsELF",
        founderTitle: "Gründer und Eigentümer",
        founderName: "Sebastijan Aleksandar Kerculj",
        purposeTitle: "werk u. dienstleistung",
        purposeBody: "Außergewöhnliche Umzugsdienstleistungen.",
        vatTitle: "USt-IdNr.",
        vatValue: "ATU78448967",
        regNoTitle: "Firmenbuchnummer",
        regNoValue: "-",
        courtTitle: "Firmenbuchgericht",
        courtValue: "Handelsgericht Wien, Marxergasse 1a, A-1030 Wien",
        hqTitle: "Firmensitz",
        hqValue: "Simmeringer Hauptstraße 24, 1110 Wien",
        contactTitle: "Kontaktdaten",
        phoneLabel: "Telefon",
        phoneValue: "+43 (0)676 6300167",
        emailLabel: "E-Mail",
        emailValue: "info@putzelf.com",
        membership: "Mitglied der Wirtschaftskammer Wien, Fachgruppe Gewerbliche Dienstleister"
      },
      profile: {
        title: "Wählen Sie Ihren Lieblingsmitarbeiter",
        subtitle: "Überprüfen Sie unsere vertrauenswürdigen Fachkräfte und wählen Sie die Reinigungskraft, die am besten zu Ihrer Buchung passt.",
        choose: "Wähle mich",
        rating: "{{rating}} Bewertung · {{reviews}} Bewertungen",
        workers: {
          amelia: "Amelia K.",
          markus: "Markus L.",
          selin: "Selin A.",
          leon: "Leon M.",
          maria: "Maria S.",
          yusuf: "Yusuf T.",
          sofia: "Sofia P.",
          jakob: "Jakob R.",
          noemi: "Noemi F.",
          anna: "Anna D."
        }
      },
      hero: {
        title: "Professionelles Umzugsservices auf Knopfdruck",
        subtitle: "Buchen Sie zuverlässige und preiswerte Umzüge, Entrümpelungen für Haushalt und Büro",
        cta: "JETZT BUCHEN",
        jobCta: "Auf Jobsuche?",
        jobModalTitle: "Werde Teil des Umzugself-Teams",
        jobModalBody: "Bitte senden Sie uns Ihre Kontaktdaten und Bewerbung an {{email}}. Wir melden uns in Kürze.",
        jobModalEmailCta: "E-Mail senden",
        jobModalClose: "Schließen"
      },
      services: {
        standard: { title: "Entrümpelungen", desc: "Professionelle Entrümpelungen für Ihre Adresse" },
        deep: { title: "Büroumzug", desc: "Effizienter Standortwechsel Ihr Business" },
        office: { title: "Apartmentumzug", desc: "Professionelle Apartmentumzüge mit minimaler Ausfallzeit." },
        reliable: "Zuverlässig",
        reliableLine: "Unsere Umzugsteams sind geprüft und von Hunderten Kund:innen vertrauenswürdig.",
        pricing: "Transparente Preise",
        easy: "Einfache Buchung",
        priceLine: "Transparente Tarife, keine versteckten Kosten.",
        easyLine: "In weniger als 2 Minuten online buchen und entspannen.",
        homeTitle: "Haushaltsumzug",
        homeDesc: "Von Verpackung bis Transport — wir kümmern uns sorgfältig um Ihren Umzug.",
        homeCta: "Haushaltsumzug buchen",
        officeTitle: "Entrümpelungen",
        officeDesc: "Professionelle Entrümpelungen für Ihre Adresse",
        officeCta: "Entrümpelungen buchen"
      },
      alt: {
        logo: "Umzugself Logo",
        homeCleaning: "Haushaltsumzug",
        officeCleaning: "Büroumzug"
      },
      footer: {
        staff: {
          title: "Mitarbeiter",
          links: {
            privacySheet: "Datenschutzblatt",
            dutyRoster: "Dienstliste",
            masterData: "Stammdatenblatt",
            leaveForm: "Urlaubsschein / Zeitausgleich"
          }
        },
        partners: {
          title: "Partner",
          links: {
            partnerApplication: "Partnerantrag",
            serviceContract: "Dienstleistungsvertrag",
            subcontract: "Subvertrag"
          }
        },
        customers: {
          title: "Kunden",
          links: {
            serviceContract: "Servicevertrag",
            cleaningStandards: "Umzugsstandards",
            priceList: "Preisliste",
            calculator: "Preiskalkulator"
          }
        },
        connect: {
          title: "Connect",
          links: {
            terms: "AGB",
            privacy: "Datenschutz",
            imprint: "Impressum"
          }
        }
      },
      cookies: {
        msg: "Wir verwenden Cookies, um Ihr Erlebnis zu verbessern. Durch die Nutzung unserer Website stimmen Sie unserer ",
        privacyPolicy: "Datenschutzerklärung",
        decline: "Ablehnen",
        accept: "Akzeptieren"
      },
      home: {
        title: "Umzug buchen",
        selectType: "Umzugsart auswählen",
        types: {
          standard: "Haushaltsumzug",
          office: "Büroumzug",
          apartmentHotel: "Wohnungsumzug"
        },
        subcategories: {
          title: "Unterkategorie wählen",
          intensive: "Verpackung",
          window: "Möbelabbau"
        },
        descriptions: {
          standard: "Umzüge mit Laden, Transport und Entladen.",
          office: "Büroumzüge für Arbeitsplätze und Gemeinschaftsflächen.",
          apartmentHotel: "Wohnungsumzüge zwischen Aufenthalten oder Vermietungen."
        },
        durationLabel: "Arbeitszeit (min. 3)",
        dateLabel: "Datum",
        timeLabel: "Uhrzeit",
        renegotiate: "Wir nehmen zur Kenntnis, dass die Dienstleistung nach tatsächlicher Arbeitszeit verrechnet wird",
        durationHelp: "Mindestbuchung ist 3 Stunden.",
        estimated: "Geschätzter Preis",
        rate: "Preis: €{{rate}}/Stunde",
        submit: "Jetzt anfragen",
        alerts: {
          missing: "Bitte Datum, Uhrzeit ausfüllen und eine Reinigungsart wählen.",
          createError: "Fehler bei der Erstellung der Buchung: {{msg}}",
          noWorker: "Bitte wähle deine Reinigungskraft, bevor du die Buchung abschließt."
        },
        selectedWorker: {
          label: "Deine Reinigungskraft",
          selected: "{{name}} ist bereit zu helfen.",
          change: "Andere Reinigungskraft wählen",
          missing: "Du hast noch keine Reinigungskraft ausgewählt.",
          choose: "Reinigungskraft auswählen"
        }
      },
      calculator: {
        title: "Umzugs-Preisrechner",
        subtitle: "Schätzen Sie Ihren Umzug basierend auf Größe und Optionen.",
        typeHeading: "Reinigungsart wählen",
        subHeading: "Optionale Premium-Services",
        areaLabel: "Größe (㎡)",
        durationHelp: "Buchungen starten bei 3 Stunden. Verwenden Sie die Pfeile zur Anpassung.",
        estimatedTotalLabel: "Geschätzte Gesamtkosten",
        estimatedTotal: "Geschätzte Gesamtkosten: {{price}} €",
        hourlyRate: "Stundensatz: {{rate}} €/h",
        premiumNotice: "Premium-Extras beeinflussen den Stundensatz.",
        renegotiateLabel: "Nachverhandlung erlauben, falls mehr Zeit nötig ist",
        resetBtn: "Auswahl zurücksetzen",
        cta: "Umzugsprofi wählen",
        disclaimer: "Dies ist eine Schätzung. Der finale Preis wird bei der Buchung bestätigt."
      },
      order: {
        loading: "Buchung wird geladen...",
        confirmTitle: "Buchung bestätigen",
        summary: "Buchungsübersicht",
        date: "Datum",
        time: "Uhrzeit",
        cleaningType: "Umzugsart",
        duration: "Dauer",
        durationUnit: "Stunden",
        price: "Preis",
        enterDetails: "Daten eingeben und bestätigen",
        placeholders: {
          name: "Vollständiger Name",
          email: "E-Mail",
          address: "Straße & Hausnummer & Türnummer",
          phone: "Telefon"
        },
        errors: {
          invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
          invalidPhone: "Bitte geben Sie eine gültige Telefonnummer mit Ländervorwahl ein."
        },
        gdprPrefix: "Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß ",
        gdprLink: "Datenschutzerklärung (DSGVO)",
        confirming: "Wird bestätigt...",
        confirmBtn: "Buchung anfragen",
        confirmedTitle: "Buchung bestätigt ✅",
        confirmedMsg: "Eine Bestätigungs-E-Mail wurde an {{email}} gesendet.",
        errorPrefix: ""
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;