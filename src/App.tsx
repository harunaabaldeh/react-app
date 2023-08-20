import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false }
  ])

  const [cartItems, setCartItems] = useState(['Product1', 'Product2'])

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John'
    }
  })

  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  })

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { id: 1, title: 'Product1', quantity: 1 },
      { id: 2, title: 'Product2', quantity: 1 }
    ]
  })


  const handleClick = () => {
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug))
    // setBugs(produce(draft => {
    //   const bug = draft.find(bug => bug.id === 1)
    //   if (bug) bug.fixed = true
    // }))

    setCart(produce(draft => {
      const item = draft.items.find(item => item.quantity === 1)
      if (item) item.quantity++
    }))

    // const newPizza = { ...pizza }

    // pizza.toppings.push('Afrizona')

    // setPizza(newPizza)

    // const newGame = { ...game }

    // newGame.player.name = 'Spiderman'

    // setGame(newGame);
  }

  return (
    <div >
      <ExpandableText>Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Temporibus asperiores reiciendis earum non repellendus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illum.
        Nesciunt minima sapiente suscipit cumque aliquid eaque, provident sed dolor atque
        nobis repudiandae obcaecati architecto reiciendis ratione beatae doloremque vel
        perspiciatis soluta ut veniam esse perferendis in, odio corrupti! Doloribus blanditiis,
        amet explicabo quisquam eius, nam molestias ullam voluptatum ipsam deleniti maxime deserunt
        ipsum architecto quam dolore iusto veritatis, quia error iure? Placeat sed vel asperiores
        minima fugit nam incidunt corporis veritatis, optio nostrum voluptatibus eveniet recusandae
        dignissimos facilis id rem aut, cupiditate error neque sint dolorem maxime nesciunt ab magnam. Vel debitis libero sed atque qui, quia eaque quae!
      </ExpandableText>
    </div>
  )
}

export default App;