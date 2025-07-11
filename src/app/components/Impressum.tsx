export default function Impressum() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-4 text-primary space-y-10">
      <h1 className="text-4xl font-bold mb-6">Impressum</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
        <p>
          Rechtsanwaltskanzlei Barth<br />
          Christine Barth<br />
          Hans-Bunte-Str. 8<br />
          69123 Heidelberg
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Kontakt</h2>
        <p>
          Telefon: 06221 757400<br />
          E-Mail: recht@kanzleibarth.de
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Zuständige Aufsichtsbehörde</h2>
        <p>
          Rechtsanwaltskammer Karlsruhe<br />
          Reinhold-Frank-Str. 72<br />
          76133 Karlsruhe<br />
          www.rak-karlsruhe.de
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>
          Berufsbezeichnung: Rechtsanwältin (verliehen in der Bundesrepublik Deutschland)<br />
          Es gelten die folgenden berufsrechtlichen Regelungen:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>BRAO – Bundesrechtsanwaltsordnung</li>
          <li>BORA – Berufsordnung für Rechtsanwälte</li>
          <li>RVG – Rechtsanwaltsvergütungsgesetz</li>
          <li>FAO – Fachanwaltsordnung</li>
        </ul>
        <p className="mt-2">
          Die Regelungen sind einsehbar unter:{" "}
          <a href="https://www.brak.de" target="_blank" className="text-secondary underline">
            www.brak.de
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Datenschutzerklärung</h2>
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden
          vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften behandelt.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Verantwortlich für die Datenverarbeitung</h3>
        <p>
          Rechtsanwaltskanzlei Barth<br />
          Christine Barth<br />
          Hans-Bunte-Str. 8<br />
          69123 Heidelberg<br />
          E-Mail: recht@kanzleibarth.de
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Erhebung und Speicherung personenbezogener Daten</h3>
        <p>
          Beim Besuch unserer Website werden keine personenbezogenen Daten automatisch gespeichert oder verarbeitet,
          außer den technisch notwendigen Informationen, die durch den Hosting-Anbieter übermittelt werden (z. B. IP-Adresse,
          Browsertyp, Datum und Uhrzeit des Zugriffs). Diese Daten dienen ausschließlich der technischen Überwachung und
          Stabilität der Website und werden nicht zur Identifikation von Besuchern verwendet.
        </p>
        <p className="mt-2">
          Es besteht kein Kontaktformular, kein Login-Bereich und keine sonstigen Funktionen zur direkten Datenerfassung
          über die Website.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Datenverarbeitung bei Bewerbungen per E-Mail</h3>
        <p>
          Wenn Sie uns Bewerbungsunterlagen per E-Mail zusenden, werden die darin enthaltenen personenbezogenen Daten
          ausschließlich zur Bearbeitung Ihrer Bewerbung verarbeitet. Ihre Daten werden vertraulich behandelt und nach
          Abschluss des Bewerbungsverfahrens entsprechend den gesetzlichen Aufbewahrungsfristen gelöscht.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Ihre Rechte</h3>
        <ul className="list-disc list-inside">
          <li>Auskunft über Ihre gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung oder Einschränkung der Verarbeitung</li>
          <li>Widerspruch gegen die Datenverarbeitung</li>
          <li>Datenübertragbarkeit</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Widerspruchsrecht</h3>
        <p>
          Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten jederzeit zu widersprechen.
        </p>
      </section>

    </main>
  )
}
