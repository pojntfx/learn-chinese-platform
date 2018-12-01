# Learn Chinese Platform Service Mockups V1

Blobs are shared using `minio`.

## Entity

Shared entities for the deck and list services.

```plaintext
createDeck(title, description, license) -> deckId
createCard(de, pinyin, hanzi) -> cardId
assignCardToDeck(cardId, deckId) -> deckId
getDeckAsBundle(deckId) -> url
```

## Deck

Anki deck generator using `mkanki`.

```plaintext
createDeck(title, description, license) -> deckId
createCard(de, pinyin, hanzi) -> cardId
assignCardToDeck(cardId, deckId) -> deckId
getDeckAsPackage(deckId) -> url
```

## List

Card list generator using `unified` and `md-to-pdf`.

```plaintext
createDeck(title, description, license) -> deckId
createCard(de, pinyin, hanzi) -> cardId
assignCardToDeck(cardId, deckid) -> deckId
getDeckAsPDF(deckId) -> url
getDeckAsMarkdown(deckId) -> url
getDeckAsHTML(deckId) -> url
```

## Voice

Voice generator using `google-tts`.

```plaintext
createVoiceForHanzi(hanzi) -> voiceId
createVoiceForPinyin(pinyin) -> voiceId
getVoiceAsWebM(voiceId) -> url
```

## Translator

Translates Pinyin and Hanzi to German and the other way round using `mdbg` und `pinyin-utils`.

```plaintext
getHanziForGerman(de) -> hanzi[]
getHanziForPinyin(pinyin) -> hanzi[]
getPinyinForGerman(de) -> pinyin[]
getPinyinForHanzi(hanzi) -> pinyin[]
getGermanForPinyin(pinyin) -> german[]
getGermanForHanzi(hanzi) -> german[]
```

## Hanzi

Gets the stroke and more data about a hanzi using `hanzi-writer`.

```plaintext
getHanziAsSVG(hanzi) -> url
getHanziAsWebM(hanzi) -> url
getHanziAsQuiz(hanzi) -> url
```
