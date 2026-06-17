import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function Toggle() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="remember-me" className="cursor-pointer" />
      <Label htmlFor="remember-me">Remember me</Label>
    </div>
  );
}
