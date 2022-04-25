package ru.ivakin.mtgcollection.model;

import org.springframework.data.relational.core.mapping.Table
import org.springframework.data.annotation.Id

@Table("deck")
data class Deck(
    @Id val id: Long?,
    val name: String,
    val description: String?,
    val is_chared: Int?
)
