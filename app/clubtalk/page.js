import Testimonials from "@/components/clubtalk/Testimonials";

export default function Page() {
    return (
        <div className="container mt-[25vh]">
            <div class="max-md:mb-20">
                <h1 className="md:text-8xl text-6xl text-center tracking-wide">CLUB TALK</h1>
                <p className="text-center mt-5">See what's our club members are talking</p>
            </div>
            <Testimonials />
        </div>
    )
}