import { useDroppable } from "@dnd-kit/core";

interface DroppableAreaProps {
  id: string;
  children: React.ReactNode;
}
const DroppableArea = ({ id, children }: DroppableAreaProps) => {
  const { setNodeRef } = useDroppable({ id });

  return <div ref={setNodeRef}>{children}</div>;
};

export default DroppableArea;
