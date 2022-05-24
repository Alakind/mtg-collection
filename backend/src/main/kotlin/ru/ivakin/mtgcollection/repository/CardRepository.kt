package ru.ivakin.mtgcollection.repository

import ru.ivakin.mtgcollection.model.Card;
import ru.ivakin.mtgcollection.model.Deck;

import org.springframework.data.relational.core.mapping.Table
import org.springframework.data.annotation.Id

import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.data.jdbc.repository.query.Query
import org.springframework.data.jdbc.repository.query.Modifying
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param;
// import org.springframework.data.jpa.repository.Modifying;

interface CardRepository: CrudRepository<Card, String> {
    @Query("SELECT * FROM card")
    fun findCards(): List<Card>

    @Query("SELECT tag FROM card_tag WHERE card_id = :needed_card_id")
    fun findTags(@Param("needed_card_id") card_id: Long): List<String>

    @Query("SELECT ability FROM card_ability WHERE card_id = :needed_card_id")
    fun findAbilities(@Param("needed_card_id") card_id: Long): List<String>

    @Query("SELECT * FROM deck")
    fun findDecks(): List<Deck>

    @Query("SELECT * FROM card WHERE id IN (SELECT card_id FROM deck_cards WHERE deck_id = :needed_deck_id)")
    fun getDeckCards(@Param("needed_deck_id") deck_id: Int): List<Card>;

    @Modifying
    @Query("""INSERT INTO deck(
    name,
    description,
    is_shared
    ) 
    VALUES(
        :name,
        :description,
        :isShared
    )""")
    fun postDeck(@Param("name") name: String, @Param("description") description: String, @Param("isShared") isShared: Int)

    @Modifying
    @Query(
        value = "INSERT INTO deck_cards(deck_id, card_id) VALUES(:deckId, :cardId)"
    )
    fun addCardToDeck(@Param("cardId") cardId: Int, @Param("deckId") deckId: Int);

    @Query("INSERT INTO card(name) VALUES('Brushwag')")
    // @Query
    fun postCard(card: Card) {
        println(card);
    }

    @Modifying
    @Query("DELETE FROM card WHERE id = :cardId")
    fun deleteCard(@Param("cardId") cardId: Int);

}
