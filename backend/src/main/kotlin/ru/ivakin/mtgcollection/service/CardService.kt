package ru.ivakin.mtgcollection.service;

import ru.ivakin.mtgcollection.model.Card;
import ru.ivakin.mtgcollection.repository.CardRepository;

import org.springframework.stereotype.Service


@Service
class CardService(val db: CardRepository) {
    fun findCards(): List<Card> = db.findCards()

    fun postCard(card: Card) {
        db.save(card)
    }
}
