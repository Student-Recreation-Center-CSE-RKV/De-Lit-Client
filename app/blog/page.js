import BlogContainer from "@/components/blog/BlogContainer";


export default function page() {
    return (
      <>
        <div className="flex flex-col mt-32">
          <BlogContainer />
          
          {/* <CardWrapper header={"Articles"} /> */}
        </div>
      </>
    );
  }