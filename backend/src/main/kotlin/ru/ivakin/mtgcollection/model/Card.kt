package ru.ivakin.mtgcollection.model;

import org.springframework.data.relational.core.mapping.Table
import org.springframework.data.annotation.Id

@Table("card")
data class Card(
    @Id val id: Long,
    val name: String,
    val setCode: String,
    val type: String?,
    var tags: List<String>?,
    var abilities: List<String>?,
    val power: Int?,
    val toughness: Int?,
    val manaNeutral: Int?,
    val manaWhite: Int?,
    val manaBlack: Int?,
    val manaGreen: Int?,
    val manaBlue: Int?,
    val manaRed: Int?,
    val description: String?,
    val commentary: String?,
    val approved: Int?
)
