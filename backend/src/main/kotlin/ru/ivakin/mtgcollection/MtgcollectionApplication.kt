package ru.ivakin.mtgcollection

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.annotation.Id
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

import org.springframework.data.relational.core.mapping.Table
import org.springframework.data.jdbc.repository.query.Query
import org.springframework.data.repository.CrudRepository

import org.springframework.stereotype.Service

import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PathVariable

import ru.ivakin.mtgcollection.model.Card;
import ru.ivakin.mtgcollection.model.Deck;
import ru.ivakin.mtgcollection.repository.CardRepository;
import ru.ivakin.mtgcollection.service.CardService;

@SpringBootApplication
class MtgcollectionApplication

fun main(args: Array<String>) {
	runApplication<MtgcollectionApplication>(*args)
}

@RestController
class CardResource(val service: CardService) {
    @GetMapping(value = ["/cards"])
    fun getCards(): List<Card> {
        var cards = service.findCards();

        for (card in cards) {
            val tags = service.findTags(card.id);
            val abilities = service.findAbilities(card.id);

            card.tags = tags;
            card.abilities = abilities;
        }

        return cards;
        }

    @GetMapping(value = ["/decks"])
    fun getDecks(): List<Deck> = service.findDecks()

    @GetMapping(value = ["/decks/{deck_id}"])
    fun getDeckCards(@PathVariable("deck_id") deck_id: Int): List<Card> = service.getDeckCards(deck_id)

    @PostMapping(value = ["/cards"])
    fun postCard(@RequestBody card: Card) {
        service.postCard(card)
    }
}
