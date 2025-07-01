import { useState, useEffect, useContext } from "react"; // need useContext
import { CartContext } from "../contexts";
import { createLazyFileRoute } from "@tanstack/react-router";
import Pizza from "../Pizza";
import Cart from "../Cart";

export const Route = createLazyFileRoute("/order")({
    component: Order,
});

const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

function Order() {
    // hooks is userState and they must not be used inside any loops or any conditions as they are first order only
    // and are called in order like this one
    // they take the const or value and the setter of that value in an array
    var [pizzaTypes, setPizzaTypes] = useState([]);
    var [loading, setLoading] = useState(true);
    var [pizzaType, setPizzaType] = useState("pepperoni");
    var [pizzaSize, setPizzaSize] = useState("M");
    var [cart, setCart] = useContext(CartContext);

    var selectedPizza, price;
    if (!loading) {
        selectedPizza = pizzaTypes.find(function getPizza(pizza) {
            return pizzaType === pizza.id;
        });
        price = intl.format(
            selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : ""
        );
    }
    useEffect(function setThePizzaTypeArray() {
        fetchPizzaTypes();

        async function fetchPizzaTypes() {
            var pizzasRes = await fetch("/api/pizzas");
            var pizzasJson = await pizzasRes.json();
            setPizzaTypes(pizzasJson);
            setLoading(false);
        }
    }, []);

    return (
        <div className="order-page">
            <div className="order">
                <h2>Create Order</h2>
                <form
                    onSubmit={function usingTheCart(event) {
                        event.preventDefault();
                        setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }]);
                    }}>
                    <div>
                        <div>
                            <label htmlFor="pizza-type">Pizza Type</label>
                            <select
                                name="pizza-type"
                                value={pizzaType}
                                onChange={function changePizzaType(event) {
                                    setPizzaType(event.target.value);
                                }}>

                                {
                                    pizzaTypes.map(function RenderingPizzaTypes(pizza) {
                                        return (
                                            <option key={pizza.id} value={pizza.id}>
                                                {pizza.name}
                                            </option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="pizza-size">Pizza Size</label>
                            <div>
                                <span>
                                    {
                                        renderSize("S")
                                    }
                                    <label htmlFor="pizza-s">Small</label>
                                </span>
                                <span>
                                    {
                                        renderSize("M")
                                    }
                                    <label htmlFor="pizza-m">Medium</label>
                                </span>
                                <span>
                                    {
                                        renderSize("L")
                                    }
                                    <label htmlFor="pizza-l">Large</label>
                                </span>
                            </div>
                        </div>
                        <button type="submit">Add to Cart</button>
                    </div>
                    {
                        loading ? <h1>Loading</h1>
                            : (
                                <div className="order-pizza">
                                    <Pizza
                                        name={selectedPizza.name}
                                        description={selectedPizza.description}
                                        image={selectedPizza.image}
                                    />
                                    <p>{price}</p>
                                </div>
                            )
                    }
                </form >
            </div>
            {
                loading ? <h2>LOADING …</h2> : <Cart checkout={checkout} cart={cart} />
            }
        </div >
    );

    // All The Needed functions
    async function checkout() {
        setLoading(true);

        await fetch("/api/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cart,
            }),
        });

        setCart([]);
        setLoading(false);
    }

    function renderSize(size) {
        if (size === "S")
            var id = "pizza-s"
        else if (size === "M")
            id = "pizza-m"
        else
            id = "pizza-l"
        return (
            <input
                checked={pizzaSize === size}
                type="radio"
                name="pizza-size"
                value={size}
                id={id}
                onChange={function changePizzaSize(event) {
                    setPizzaSize(event.target.value);
                }}
            />
        )
    }
}