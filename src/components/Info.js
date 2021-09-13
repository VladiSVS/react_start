const inline = {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 5%"
}
const box = {
    width: "22%",
}

const Info = () => {
    return (
        <section style={inline}>
            <div style={box}>
                <h1>Info</h1>
                <p>Carefully curated online design store. Featuring simple, beautiful and thoughtfully designed products for everyday use.</p>
            </div>
            <div style={box}>
                <h1>Get in touch</h1>
                <a>hello@thedsgnshop.com</a>
                <p style={{ marginTop: "0" }}>Los Angeles, CA</p>
            </div>
            <div style={box}>
                <h1>Newsletter</h1>
                <p><a>Sign up</a> for the latest arrivals, special offers and weekly picks.</p>
            </div>
            <div style={box}>
                <h1>Follow us</h1>
                <p>1234</p>
            </div>
        </section>
    );
}

export default Info;