import React from "react"
import Contact from "./components/Contact";
import dog_1 from "./images/dog_1.jpg"
import dog_2 from "./images/dog_2.jpg"
import dog_3 from "./images/dog_3.jpg"


export default function App() {
    return (
        <div className="contacts">
            <Contact 
              img={dog_1}
              name="fluffy"
              phone="(212) 555-1234"
              email="mr.fluffs@doggy.whoof"
            />
            <Contact 
              img={dog_2}
              name="brownie"
              phone="(212) 555-2345"
              email="browndane@me.com"
            />
            <Contact 
              img={dog_3}
              name="Queen"
              phone="(212) 555-4567"
              email="thequeen@palace.co.uk"
            />
        </div>
    )
}
