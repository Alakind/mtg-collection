package ru.ivakin.mtgcollection.service;

import ru.ivakin.mtgcollection.model.Card;
import ru.ivakin.mtgcollection.model.Deck;
import ru.ivakin.mtgcollection.repository.CardRepository;

import org.springframework.stereotype.Service


@Service
class CardService(val db: CardRepository) {
    fun findCards(): List<Card> = db.findCards()

    fun findTags(cardId: Long): List<String> = db.findTags(cardId)

    fun findAbilities(cardId: Long): List<String> = db.findAbilities(cardId)

    fun postCard(card: Card) {
        db.save(card)
    }

    fun findDecks(): List<Deck> = db.findDecks()

    fun getDeckCards(deck_id: Int): List<Card> = db.getDeckCards(deck_id)
}
