import Block from "@/components/Block";

export default function BlockSection({ blocksData }) {
  const n = blocksData.length;

  return (
    <>
      <div className="container" style={{ height: `${n * 100}dvh` }} >
        {blocksData.map((block) => (
            <Block
              key={block.slug}
              {...block}
              link={block.slug}
            />
        ))}
      </div>
    </>
  );
}
