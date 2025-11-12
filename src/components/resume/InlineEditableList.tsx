import { useState } from "react";
import { useInlineEdit } from "@/contexts/InlineEditContext";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface InlineEditableListProps {
  path: string;
  items: any[];
  defaultItem: any;
  renderItem: (item: any, index: number) => React.ReactNode;
  addButtonLabel?: string;
  className?: string;
}

export const InlineEditableList = ({
  path,
  items,
  defaultItem,
  renderItem,
  addButtonLabel = "Add Item",
  className,
}: InlineEditableListProps) => {
  const { addArrayItem, removeArrayItem } = useInlineEdit();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div
          key={item.id || index}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {renderItem(item, index)}
          
          {hoveredIndex === index && (
            <Button
              size="sm"
              variant="destructive"
              className="absolute -right-2 -top-2 h-6 w-6 p-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
              onClick={(e) => {
                e.stopPropagation();
                removeArrayItem(path, index);
              }}
              title="Delete"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          )}
        </div>
      ))}
      
      <Button
        size="sm"
        variant="outline"
        onClick={() => addArrayItem(path, defaultItem)}
        className="w-full border-dashed"
      >
        <Plus className="mr-2 h-4 w-4" />
        {addButtonLabel}
      </Button>
    </div>
  );
};
