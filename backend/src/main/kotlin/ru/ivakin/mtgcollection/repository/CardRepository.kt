package ru.ivakin.mtgcollection.repository

import ru.ivakin.mtgcollection.model.Card;

import org.springframework.data.relational.core.mapping.Table
import org.springframework.data.annotation.Id

import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.data.jdbc.repository.query.Query
import org.springframework.data.repository.CrudRepository

interface CardRepository: CrudRepository<Card, String> {
    @Query("SELECT * FROM card")
    fun findCards(): List<Card>

    @Query("INSERT INTO card(name) VALUES('Brushwag')")
    fun postCard(card: Card) {
        println(card);
    }

}
