import Card from "./Card";

export default function Theega({first, talk1, talk2}) {
    const theegasvg = first ? "theega.svg" : "theega2.svg";
    return (
        <div className="m-20">
            <img className="w-full" src={theegasvg} alt="Theega" />
            <div className="flex md:flex-row">
                <Card title={talk1.title} description={talk1.description} cardNum={first ? 0: 2} />
                {talk2 ? <Card title={talk2.title} description={talk2.description} cardNum={first ? 1: 3} /> : null}
            </div>
        </div>
    )
}