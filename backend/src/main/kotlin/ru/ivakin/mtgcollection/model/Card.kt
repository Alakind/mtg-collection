package ru.ivakin.mtgcollection.model;

import org.springframework.data.relational.core.mapping.Table
import org.springframework.data.annotation.Id

@Table("card")
data class Card(
    @Id val id: Long,
    val name: String,
    val set_code: String,
    val type: String?,
    var tags: List<String>?,
    var abilities: List<String>?,
    val power: Int?,
    val toughness: Int?,
    val mana_neutral: Int?,
    val mana_white: Int?,
    val mana_black: Int?,
    val mana_green: Int?,
    val mana_blue: Int?,
    val mana_red: Int?,
    val description: String?,
    val commentary: String?,
    val approved: Int?
)
