import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type PasswordInputProps = React.ComponentPropsWithoutRef<typeof Input> & {
  id: string;
};

export function PasswordInput({ id, ...props }: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input
        id={id}
        type={show ? "text" : "password"}
        className="pr-10"
        {...props}
      />
      <span
        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground"
        onClick={() => setShow((v) => !v)}
        tabIndex={0}
        role="button"
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? <Eye size={18} /> : <EyeOff size={18} />}
      </span>
    </div>
  );
}
