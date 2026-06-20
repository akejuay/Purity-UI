import { Label } from "./label";
import { Switch } from "./switch";

export function Toggle() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="remember-me" className="cursor-pointer" />
      <Label htmlFor="remember-me">Remember me</Label>
    </div>
  );
}
