import React from 'react'
import { useCart } from '../../Context/Context'

export default function Cart() {
    const GlobalState=useCart()
  return (
    <div>Cart</div>
  )
}
