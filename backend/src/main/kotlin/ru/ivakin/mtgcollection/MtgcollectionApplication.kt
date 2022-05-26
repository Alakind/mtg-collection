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
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.http.HttpHeaders

import ru.ivakin.mtgcollection.model.Card
import ru.ivakin.mtgcollection.model.Deck
import ru.ivakin.mtgcollection.repository.CardRepository
import ru.ivakin.mtgcollection.service.CardService

@SpringBootApplication
class MtgcollectionApplication

fun main(args: Array<String>) {
	runApplication<MtgcollectionApplication>(*args)
}

@RestController
class CardResource(val service: CardService) {
    @GetMapping(value = ["/cards"])
    fun getCards(): ResponseEntity<List<Card>> {
        var cards = service.findCards();

        for (card in cards) {
            val tags = service.findTags(card.id);
            val abilities = service.findAbilities(card.id);

            card.tags = tags;
            card.abilities = abilities;
        }

        var responseHeaders = HttpHeaders();
        responseHeaders.set("Access-Control-Allow-Origin", "*");

        return ResponseEntity(cards, responseHeaders, HttpStatus.OK);
    }

    @GetMapping(value = ["/decks"])
    fun getDecks(): ResponseEntity<List<Deck>> {
        val decks = service.findDecks();

        var responseHeaders = HttpHeaders();
        responseHeaders.set("Access-Control-Allow-Origin", "*");

        return ResponseEntity(decks, responseHeaders, HttpStatus.OK);
    }

    @GetMapping(value = ["/decks/{deck_id}"])
    fun getDeckCards(@PathVariable("deck_id") deck_id: Int): ResponseEntity<List<Card>> {
        val deckCards = service.getDeckCards(deck_id);

        for (card in deckCards) {
            val tags = service.findTags(card.id);
            val abilities = service.findAbilities(card.id);

            card.tags = tags;
            card.abilities = abilities;
        }

        var responseHeaders = HttpHeaders();
        responseHeaders.set("Access-Control-Allow-Origin", "*");

        return ResponseEntity(deckCards, responseHeaders, HttpStatus.OK);
    }

    @PostMapping(value = ["/decks/{deckId}/card/{cardId}"])
    fun addCardToDeck(@PathVariable("deckId") deckId: Int, @PathVariable("cardId") cardId: Int): ResponseEntity<String> {
        println("afksahg")
        service.addCardToDeck(cardId, deckId);

        var responseHeaders = HttpHeaders();
        responseHeaders.set("Access-Control-Allow-Origin", "*");

        return ResponseEntity("", responseHeaders, HttpStatus.OK);
    }

    @PostMapping(value = ["/cards"])
    fun postCard(@RequestBody card: Card) {
        service.postCard(card);
    }

    @PostMapping(value = ["/decks"])
    fun postCard(@RequestBody deck: Deck) {
        service.postDeck(deck)
    }

    @DeleteMapping(value = ["/cards/{cardId}"])
    fun deleteCard(@PathVariable("cardId") cardId: Int) {
        service.deleteCard(cardId);
    }
}
