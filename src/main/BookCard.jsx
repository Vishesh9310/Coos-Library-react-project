"use client"
import React from 'react'
import "./BookCard.css"

function BookCard() {
  return (
    <>
      <div id="card_book">
        <div id='inner_card_book'>
          <img class="item_card" id="img_book" src="src/assets/download.png" alt="no image" />
          <div id='bottom_card'>
            <p class="item_card" id='book_name'>The Hidden Hindu</p>
            <p class="item_card" id='author'>Akshat Gupta</p>
            <div class="item_card" id='pricing'>
              <b id="price" class="price_items">199</b><del id="main_price" class="price_items">250</del><strong id="discount" class="price_items">-20%</strong>
            </div>
            <button id='download'>Download</button>          
          </div>
        </div>
      </div>
    </>
  )
}

export default BookCard