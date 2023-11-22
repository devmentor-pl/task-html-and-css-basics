# Czego się nauczyłem:

- Zdobycie praktycznej wiedzy na temat struktury HTML i stylowania CSS.
- Wykorzystanie różnych tagów HTML takich jak `<header>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<ul>`, `<li>`, `<aside>`, itp.
- Implementacja podstawowych stylów CSS, takich jak kolorowanie tekstu, tło, układanie elementów, czy korzystanie z jednostek procentowych i pikselowych.

# Jakich rozwiązań użyłem:

- Poprawienie struktury HTML na podstawie uwag mentora, uwzględniając zalecenia dotyczące semantyki, takie jak zastępowanie niektórych `<div>` tagami bardziej adekwatnymi do znaczenia, np `<header>`, `<aside>`, `<article>`, `<figure>`.

    - Przykład
```
<header>
    <h1>Nagłówek</h1>
</header>
```
- Zaimplementowanie poprawek stylów CSS, aby dostosować wygląd strony do oczekiwań mentora.

    - Przykład
```
/* Ustawienie koloru tekstu na biały */
body {
    color: white;
}
```
- Odpowiednie zastosowanie tagów HTML i CSS w kontekście semantyki i funkcji poszczególnych sekcji strony.

# Na co powinienem zwrócić uwagę:

- Starać się wykorzystywać tagi HTML zgodnie z ich przeznaczeniem semantycznym, co pomaga w zrozumieniu struktury dokumentu.

    - Przykład
```
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```
- Unikać nadmiernego używania `<div>` jako kontenerów i poszukać bardziej sensownego zastąpienia.

    - Przykład
```
<section>
    <article>
        <!-- Treść artykułu -->
    </article>
</section>
```
- Dbać o odpowiednie odstępy i formatowanie kodu, co ułatwia czytanie i zrozumienie struktury dokumentu.

    - Przykład
```
/* Dodanie odstępu między sekcjami */
section {
    margin-bottom: 20px;
}
```
- Regularnie korzystać z narzędzi developerskich przeglądarki, aby śledzić błędy i dostosowywać style.