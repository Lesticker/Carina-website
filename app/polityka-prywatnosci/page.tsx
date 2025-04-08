import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka Prywatności - Carina Systemy Rynnowe",
  description: "Polityka prywatności firmy Carina - informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
  keywords: ["polityka prywatności", "RODO", "ochrona danych", "Carina", "prywatność"],
}

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="space-y-2">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              ← Powrót do strony głównej
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Polityka Prywatności</h1>
          <p className="text-muted-foreground">Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Wprowadzenie</h2>
          <p>
            Niniejsza Polityka Prywatności ma na celu poinformowanie o zasadach przetwarzania danych podczas korzystania
            ze strony internetowej firmy Carina (zwanej dalej "Stroną").
          </p>

          <h2>Administrator danych</h2>
          <p>
            Administratorem danych jest Zakład Handlowo - Usługowo - Produkcyjny CARINA z siedzibą w Częstochowie, ul.
            Tatrzańska 15, 42-280 Częstochowa.
          </p>

          <h2>Jakie dane zbieramy</h2>
          <p>
            Nasza strona ma charakter informacyjny i nie zawiera formularzy zbierających dane osobowe. Możemy jednak
            zbierać następujące dane:
          </p>
          <ul>
            <li>
              <strong>Dane techniczne:</strong> Podczas przeglądania naszej strony, automatycznie zbierane mogą być
              informacje takie jak adres IP, typ przeglądarki, czas spędzony na stronie oraz odwiedzone podstrony.
            </li>
            <li>
              <strong>Pliki cookies:</strong> Nasza strona może wykorzystywać pliki cookies w celu poprawy
              funkcjonalności i doświadczenia użytkownika.
            </li>
          </ul>

          <h2>Cel przetwarzania danych</h2>
          <p>Dane techniczne i cookies są wykorzystywane w następujących celach:</p>
          <ul>
            <li>Zapewnienie prawidłowego funkcjonowania strony</li>
            <li>Analiza ruchu na stronie w celu jej optymalizacji</li>
            <li>Dostosowanie treści do preferencji użytkownika</li>
          </ul>

          <h2>Podstawa prawna przetwarzania</h2>
          <p>
            Podstawą prawną przetwarzania danych jest nasz prawnie uzasadniony interes (Art. 6 ust. 1 lit. f RODO),
            polegający na prowadzeniu i zarządzaniu naszą stroną internetową.
          </p>

          <h2>Odbiorcy danych</h2>
          <p>
            Dane mogą być przekazywane podmiotom świadczącym usługi hostingowe, dostawcom usług IT oraz firmom
            analitycznym, jeśli takie usługi są wykorzystywane.
          </p>

          <h2>Okres przechowywania danych</h2>
          <p>
            Dane techniczne i pliki cookies są przechowywane przez okres niezbędny do realizacji celów, dla których
            zostały zebrane, lub do momentu wniesienia sprzeciwu.
          </p>

          <h2>Prawa użytkowników</h2>
          <p>Zgodnie z RODO, przysługują Państwu następujące prawa:</p>
          <ul>
            <li>Prawo dostępu do swoich danych</li>
            <li>Prawo do sprostowania danych</li>
            <li>Prawo do usunięcia danych</li>
            <li>Prawo do ograniczenia przetwarzania</li>
            <li>Prawo do przenoszenia danych</li>
            <li>Prawo do sprzeciwu wobec przetwarzania</li>
            <li>Prawo do niepodlegania zautomatyzowanym decyzjom, w tym profilowaniu</li>
          </ul>

          <h2 id="cookies">Pliki cookies</h2>
          <p>
            Nasza strona wykorzystuje pliki cookies, które są małymi plikami tekstowymi przechowywanymi na urządzeniu
            użytkownika. Cookies nie zawierają danych osobowych i nie są wykorzystywane do identyfikacji użytkowników.
          </p>

          <h3>Rodzaje wykorzystywanych plików cookies</h3>
          <p>Na naszej stronie wykorzystujemy następujące rodzaje plików cookies:</p>
          <ul>
            <li>
              <strong>Cookies niezbędne:</strong> Są to pliki cookies konieczne do prawidłowego funkcjonowania strony.
              Umożliwiają korzystanie z podstawowych funkcji, takich jak zapewnienie bezpieczeństwa, identyfikacja
              użytkowników, czy zapamiętywanie preferencji dotyczących cookies.
            </li>
            <li>
              <strong>Cookies funkcjonalne:</strong> Służą do zapamiętywania wyborów dokonanych przez użytkownika i
              personalizacji interfejsu użytkownika, np. w zakresie wybranego języka lub regionu.
            </li>
          </ul>

          <h3>Zarządzanie plikami cookies</h3>
          <p>
            Użytkownik może zarządzać ustawieniami cookies w swojej przeglądarce, w tym blokować lub usuwać pliki
            cookies. Poniżej znajdują się linki do informacji, jak zarządzać plikami cookies w najpopularniejszych
            przeglądarkach:
          </p>
          <ul>
            <li>
              <a href="https://support.google.com/chrome/answer/95647?hl=pl" target="_blank" rel="noopener noreferrer">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/pl/kb/ciasteczka" target="_blank" rel="noopener noreferrer">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </li>
          </ul>

          <p>
            Należy pamiętać, że ograniczenie lub wyłączenie stosowania plików cookies może spowodować trudności w
            korzystaniu ze strony, jak również z wielu innych stron internetowych, które stosują cookies.
          </p>

          <h2>Zmiany w Polityce Prywatności</h2>
          <p>
            Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. Zmiany będą publikowane na
            tej stronie.
          </p>

          <h2>Kontakt</h2>
          <p>
            W przypadku pytań dotyczących Polityki Prywatności, prosimy o kontakt:
            <br />
            <br />
            Zakład Handlowo - Usługowo - Produkcyjny CARINA
            <br />
            ul. Tatrzańska 15
            <br />
            42-280 Częstochowa
            <br />
            Email: firma-carina@wp.pl
            <br />
            Telefon: +48 572 597 757
          </p>
        </div>
      </div>
    </div>
  )
}
