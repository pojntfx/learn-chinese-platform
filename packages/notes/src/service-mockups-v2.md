# Learn Chinese Platform Service Mockups V2

## Stack

- Platform (`@libresat/platform-framework`)
  - `lerna`
  - `commitizen`
  - Site (`@libresat/site-framework`)
    - `react`
    - `semantic-ui`
    - `gatsby`
  - Frontend (`@libresat/frontend-framework`)
    - `react`
    - `semantic-ui`
    - `bundler`
  - Gateway (`@libresat/gateway-framework`)
    - `apollo`
    - `mongoose`
    - `redis`
  - Services (`@libresat/service-framework`)
    - `moleculer`
    - `mongoose`
    - `redis`
    - `minio`
    - `nats`
  - Core (`@libresat/core-framework`)
    - `mkanki`
    - `unified`
    - `md-to-pdf`
    - `google-tts`
    - `mdbg`
    - `pinyin-utils`
    - `hanzi-writer`

## Entity

Shared entities for the deck and list services.

```graphql
type Deck {
  id: String!
  title: String!
  text: String!
  license: String!
}
```

```graphql
type Card {
  id: String!
  en: String!
  pinyin: String!
  hanzi: String!
}
```

```plaintext
entity.
  createDeck(title, text, license) -> deck
  createCard(en, pinyin, hanzi) -> card
  assignCardToDeck(cardId, deckId) -> deck
```

## Deck

Anki deck generator using `mkanki`.

```plaintext
deck.
  createDeck(title, text, license) -> deck
  createCard(en, pinyin, hanzi) -> card
  assignCardToDeck(cardId, deckId) -> deck
  getDeckAsPackage(deckId) -> url
```

## List

Card list generator using `unified` and `md-to-pdf`.

```plaintext
list.
  createDeck(title, text, license) -> deck
  createCard(en, pinyin, hanzi) -> card
  assignCardToDeck(cardId, deckId) -> deck
  getDeckAsPDF(deckId) -> url
  getDeckAsMarkdown(deckId) -> url
  getDeckAsHTML(deckId) -> url
```

## Voice

Voice generator using `google-tts`.

```plaintext
voice.
  getVoiceForHanzi(hanzi) -> url
  getVoiceForPinyin(pinyin) -> url
```

## Translator

Translates Pinyin and Hanzi to English and the other way round using `mdbg` und `pinyin-utils`.

```plaintext
translator.
  getHanziForEnglish(english) -> hanzi
  getHanziForPinyin(pinyin) -> hanzi
  getPinyinForEnglish(english) -> pinyin
  getPinyinForHanzi(hanzi) -> pinyin
  getEnglishForPinyin(pinyin) -> english
  getEnglishForHanzi(hanzi) -> english
```

## Characters

Gets the stroke and more data about a hanzi using `hanzi-writer`.

```plaintext
characters.
  getHanziAsVector(hanzi) -> url
  getHanziAsVideo(hanzi) -> url
  getHanziAsQuiz(hanzi) -> url
```
