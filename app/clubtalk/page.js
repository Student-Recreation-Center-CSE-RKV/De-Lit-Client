import Testimonials from "@/components/clubtalk/Testimonials";

export default function Page() {
    return (
        <div className="container mt-[20vh]">
            <div className="max-lg:mb-20 max-lg:-mt-10 -mb-20">
                <h1 className="lg:text-[6rem] md:text-[3rem] text-[2.5rem] text-center tracking-wide">CLUB TALK</h1>
                <p className="text-center">See what's our club members are talking</p>
            </div>
            <Testimonials />
        </div>
    )
}