package ru.ivakin.mtgcollection.model;

import org.springframework.data.relational.core.mapping.Table
import org.springframework.data.annotation.Id

@Table("card")
data class Card(@Id val cardId: Long?, val name: String)
