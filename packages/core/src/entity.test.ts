import {
  createDeck,
  createCard,
  assignCardToDeck,
  IDeck,
  ICard
} from "./entity";

const decks: IDeck[] = [];
const cards: ICard[] = [];

const deckCreator = async (deck: IDeck): Promise<IDeck> => {
  decks.push(deck);
  return deck;
};
const cardCreator = async (card: ICard): Promise<ICard> => {
  cards.push(card);
  return card;
};

const deckGetter = async (id: string): Promise<IDeck> =>
  decks.find(deck => deck.id === id) as IDeck;
const cardGetter = async (id: string): Promise<ICard> =>
  cards.find(card => card.id === id) as ICard;

const deckUpdater = async (id: IDeck["id"], newDeck: IDeck) => {
  const oldDeck = await deckGetter(id);
  return {
    ...oldDeck,
    ...newDeck
  };
};

it("Should create a deck", async () => {
  const deck = await createDeck("deck1", "text1", deck => deckCreator(deck));
  expect(deck.text).toBe("text1");
});

it("Should create a card", async () => {
  const deck = await createCard("door", "mén", "门", card => cardCreator(card));
  expect(deck.hanzi).toBe("门");
});

it("Should assign a card to a deck", async () => {
  const deck = await createDeck("deck1", "text1", deck => deckCreator(deck));
  const card = await createCard("door", "mén", "门", card => cardCreator(card));
  const newDeck = await assignCardToDeck(
    card.id,
    deck.id,
    id => cardGetter(id),
    id => deckGetter(id),
    (id, newDeck) => deckUpdater(id, newDeck)
  );
  expect(
    newDeck.cards.find(cardInNewDeck => cardInNewDeck.id === card.id)
  ).toMatchObject(card);
});
