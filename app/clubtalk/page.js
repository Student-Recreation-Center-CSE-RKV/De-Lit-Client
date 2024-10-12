import Testimonials from "@/components/clubtalk/Testimonials";

export default function Page() {
    return (
        <div className="container mt-[25vh]">
            <h1 className="md:text-8xl text-6xl text-center tracking-wide mt-[20vh]">CLUB TALK</h1>
            <p className="text-center mt-5">See what's our club members are talking</p>
            <Testimonials />
        </div>
    )
}