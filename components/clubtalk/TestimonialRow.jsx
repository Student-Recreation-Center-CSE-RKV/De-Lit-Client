import Card from "./Card";

export default function TestimonialRow({first, talk1, talk2, lastAndSingle}) {
    let theegasvg = first ? "theega.svg" : "theega2.svg";
    theegasvg = talk2 === null ? "theega-mobile.svg" : theegasvg;
    return (
        <div className="lg:m-40 mx-10 my-24">
            <img className="w-full" src={theegasvg} alt="Theega" />
            <div className="md:flex md:flex-row block">
                <Card title={talk1.title} description={talk1.description} idno={talk1.idno} cardNum={lastAndSingle ? 4 : (first ? 0 : 2)} />
                {talk2 ? <Card title={talk2.title} description={talk2.description} idno={talk2.idno} cardNum={first ? 1 : 3} /> : null}
            </div>
        </div>
    )
}