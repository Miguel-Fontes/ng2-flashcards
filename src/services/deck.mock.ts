import {Deck} from './../deck/deck'
import {Card} from './../deck/card'

export let DecksMock : Deck[] = [];

let mockCard : Card = {frente: `Frente Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus similique temporibus harum fugit, ratione
        sit ipsa aliquid numquam iure officiis eaque reprehenderit sapiente non, repellat minus modi dolores aliquam eos
        itaque nulla, nam suscipit quibusdam quia corporis! Porro soluta, deleniti! Quam unde reprehenderit cupiditate minima
        quisquam, consequatur molestias perferendis, consectetur eum. Obcaecati, cupiditate tenetur vel reiciendis, ipsam
        eveniet! Natus velit iusto distinctio quo minima eveniet fuga numquam ducimus at repellendus facere iure expedita,
        recusandae qui obcaecati eum magnam fugiat aliquid quam sunt saepe, ipsam laudantium tempora vel! Exercitationem
        repellat, distinctio odit. Quae voluptatum alias qui officia, ipsam dolor tempora dolorem!`,
        verso: `Verso Lorem ipsum dolor sit amet, consectetur adipisicing elit. At repudiandae, fugiat impedit suscipit ipsa iusto
            laborum harum necessitatibus porro cum, sed repellat quis ipsum magnam labore ratione fugit cumque voluptate
            a id adipisci! Rerum veniam sed suscipit nemo maxime commodi est accusamus ut blanditiis qui similique culpa
            tenetur eveniet rem a quisquam atque soluta fuga hic repudiandae provident, iste expedita, esse vitae ab! Itaque
            in id est aliquam non aut doloribus, inventore voluptatem eaque, dolores recusandae perspiciatis nostrum, facilis
            tenetur magni corporis minus saepe assumenda cupiditate suscipit similique. Repellendus illo libero a quos veniam
            exercitationem esse in dolore asperiores eligendi?` }

for (let i = 1; i <= 120; i++) {
    DecksMock.push({id: i, nome: `Deck ${i}`, cards: [mockCard, mockCard, mockCard, mockCard, mockCard ,mockCard]})
};