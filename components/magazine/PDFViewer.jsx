import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Sample from "../Sample";

export default function PDFViewer({ children }) {
  return (
    <Dialog>
      <DialogTrigger className=" focus:outline-none">{children}</DialogTrigger>
      <DialogContent
        className={"lg:max-w-screen-lg overflow-y-scroll max-h-screen no-scrollbar"}
      >
        <DialogHeader>
          <DialogTitle className="text-7xl text-center">
            A journey to death
          </DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima
            enim odit explicabo velit blanditiis eaque, sint, dolor assumenda
            neque non. Consectetur odit dolorum sit autem excepturi ad ratione
            nihil!
          </DialogDescription>
        </DialogHeader>
        <Sample />
      </DialogContent>
    </Dialog>
  );
}
