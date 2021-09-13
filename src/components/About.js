const contentTop = {
    display: "flex",
    justifyContent: "space-between",
    margin: "5% 5%"
}
const card = {
    width: "22%",
}
const topCard = {
    width: "48%",
}
const img = {
    width: "100%",
}
const About = () => {
    return (
        <section>
            <div style={contentTop}>
                <article style={card}>
                    <img style={img} src="/01-Home.png"></img>
                    <h1>Vifa Copenhagen 2.0 Loudspeaker</h1>
                    <p>$799.00</p>
                </article>
                <article style={card}>
                    <img style={img} src="/29-Lifestyle_b-o.png"></img>
                    <h1>Bang & Olufsen Wireless Headphones</h1>
                    <p>$174.00</p>
                </article>
                <article style={card}>
                    <img style={img} src="/01-Books.png"></img>
                    <h1>Poketo: Creative Spaces</h1>
                    <p>$25.00</p>
                </article>
                <article style={card}>
                    <img style={img} src="/02-Lifestyle.png"></img>
                    <h1>Ucon Acrobatics Hajo Backpack</h1>
                    <p>$79.00</p>
                </article>
            </div>
            <div style={contentTop}>
                <article style={topCard}>
                    <img style={img} src="/46-Home_bm.png"></img>
                    <h1>Summer Print by Bratislav Milenkovic</h1>
                    <p>$27.00</p>
                </article>
                <article style={topCard}>
                    <img style={img} src="/45-Home_hem.png"></img>
                    <h1>Palo Modular Corner Sofa by Hem</h1>
                    <p>$3,699.00</p>
                </article>
            </div>
        </section >
    );
}

export default About;