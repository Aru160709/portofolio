export default function SectionHeading({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mb-10 max-w-xl">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-mist">{text}</p>}
    </div>
  );
}
