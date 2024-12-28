import SubmissionForm from "@/components/publications/forms/SubmissionForm";

export default function page() {
    return (
      <>
        <div className="container flex flex-col mt-32">
          <SubmissionForm />
          
          {/* <CardWrapper header={"Articles"} /> */}
        </div>
      </>
    );
  }