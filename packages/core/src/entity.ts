interface IDeck {
  id: string;
  title: string;
  text: string;
  cards: ICard[];
}

interface ICard {
  id: string;
  en: string;
  pinyin: string;
  hanzi: string;
}

/**
 * Create a deck
 * @param title Title of the deck
 * @param text Text of the deck
 * @param deckCreator Function that creates a deck
 */
const createDeck = async (
  title: IDeck["title"],
  text: IDeck["text"],
  deckCreator: (deck: IDeck) => Promise<IDeck>
): Promise<IDeck> => {
  const deck = {
    id: `deck-${title}-${text}-${new Date().toString()}`,
    title,
    text,
    cards: []
  };
  return deckCreator(deck);
};

/**
 * Create a card
 * @param en English of the card
 * @param pinyin Pinyin of the card
 * @param hanzi Hanzi of the card
 * @param cardCreator Function that creates a card
 */
const createCard = async (
  en: ICard["en"],
  pinyin: ICard["pinyin"],
  hanzi: ICard["hanzi"],
  cardCreator: (card: ICard) => Promise<ICard>
): Promise<ICard> => {
  const card = {
    id: `card-${en}-${pinyin}-${hanzi}-${new Date().toString()}`,
    en,
    pinyin,
    hanzi
  };
  return cardCreator(card);
};

/**
 * Assign a card to a deck
 * @param cardId ID of the card to assign to the deck
 * @param deckId ID of the deck to assign the card to
 * @param cardGetter Function that returns a card
 * @param deckGetter Function that returns a deck
 * @param deckUpdater Function that updates a deck
 */
const assignCardToDeck = async (
  cardId: ICard["id"],
  deckId: IDeck["id"],
  cardGetter: (id: ICard["id"]) => Promise<ICard>,
  deckGetter: (id: ICard["id"]) => Promise<IDeck>,
  deckUpdater: (id: ICard["id"], newDeck: IDeck) => Promise<IDeck>
): Promise<IDeck> => {
  const card = await cardGetter(cardId);
  const deck = await deckGetter(deckId);
  deck.cards.push(card);
  return await deckUpdater(deckId, deck);
};

export { createDeck, createCard, assignCardToDeck, IDeck, ICard };
