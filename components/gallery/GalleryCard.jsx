const GalleryCard = ({ image, date, event }) => {
  return (
    <div
      className="w-[20vw] h-[50vh] bg-[green] rounded-[20px] "
    >
      <img
        src={image}
        alt={`Image of event ${event} on ${date}`}
        className="w-[100%] h-full rounded-[20px]"
      />
    </div>
  );
};

export default GalleryCard;
