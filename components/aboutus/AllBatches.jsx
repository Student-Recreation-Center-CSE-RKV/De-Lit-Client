import BatchSection from "./BatchSection";

export default function AllBatches({ allBatches }) {
  const batchesOrder = Object.keys(allBatches).sort(
    (a, b) => allBatches[a].year - allBatches[b].year
  );
  return (
    <div className="my-10">
      {batchesOrder.map((batch, index) => (
        <BatchSection
          key={index}
          members={allBatches[batch].members}
          batchName={batch}
          year={allBatches[batch].year}
        />
      ))}
    </div>
  );
}
