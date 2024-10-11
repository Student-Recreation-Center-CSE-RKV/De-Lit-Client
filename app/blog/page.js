import BlogContent from "@/components/blog/BlogContent";


export default function page() {
    return (
      <>
        <div className="container flex flex-col mt-32">
          <BlogContent />
          
          {/* <CardWrapper header={"Articles"} /> */}
        </div>
      </>
    );
  }