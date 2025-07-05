import { useState, useEffect, useDebugValue } from "react";

export function usePizzaOfTheDay() {
    var [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

    useEffect(function setPizzaOfTheDayArray() {
        fetchPizzaOfTheDay();

        async function fetchPizzaOfTheDay() {
            const response = await fetch("/api/pizza-of-the-day");
            const data = await response.json();
            setPizzaOfTheDay(data);
            // no need for a return function here because it will only run once.
        }
    }, []);

    // used for debuging can be seen in the ReactDevTools
    useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.name}` : "Loading...");
    return pizzaOfTheDay;
};