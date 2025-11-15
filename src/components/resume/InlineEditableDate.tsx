import { useState, useRef, useEffect } from "react";
import { useInlineEdit } from "@/contexts/InlineEditContext";
import { cn } from "@/lib/utils";

interface InlineEditableDateProps {
  path: string;
  value: string;
  className?: string;
  placeholder?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  formatDisplay?: (date: string) => string;
}

export const InlineEditableDate = ({
  path,
  value,
  className,
  placeholder = "Click to edit",
  as: Component = "span",
  style,
  formatDisplay,
}: InlineEditableDateProps) => {
  const { updateField } = useInlineEdit();
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    setIsFocused(false);
    if (localValue !== value) {
      updateField(path, localValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleBlur();
    }
    if (e.key === "Escape") {
      setLocalValue(value);
      setIsEditing(false);
      setIsFocused(false);
    }
  };

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        type="month"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={cn(
          "border-2 border-blue-500 bg-white px-2 py-1 outline-none rounded",
          className
        )}
        placeholder={placeholder}
      />
    );
  }

  const displayValue = formatDisplay ? formatDisplay(value) : value;

  return (
    <Component
      onClick={handleClick}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={cn(
        "cursor-pointer transition-all rounded px-1",
        isFocused && "bg-blue-50 outline outline-1 outline-blue-300",
        !value && "text-gray-400 italic",
        className
      )}
      style={style}
      title="Click to edit date"
    >
      {displayValue || placeholder}
    </Component>
  );
};
