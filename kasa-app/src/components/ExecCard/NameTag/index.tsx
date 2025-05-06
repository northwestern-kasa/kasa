interface NameTagProps {
  name: string;
}

export default function NameTag({ name }: NameTagProps) {
  return (
    <div className="inline-flex items-center bg-white border border-gray-200 rounded-lg shadow-sm px-5 py-2">
      <span className="text-gray-900 text-lg font-medium">{name}</span>
    </div>
  );
}
