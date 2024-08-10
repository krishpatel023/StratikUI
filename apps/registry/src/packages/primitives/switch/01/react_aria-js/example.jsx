import { Switch } from "@registry/primitives/switch/01/react_aria-js/Switch";

export default function SwitchImplementation() {
  return (
    <div className="grid grid-cols-1 @md:grid-cols-2 gap-4">
      <Switch variant="primary">Primary Switch</Switch>
      <Switch variant="primary" isDisabled>
        Disabled Primary Switch
      </Switch>
      <Switch variant="accent">Accent Switch</Switch>
      <Switch variant="accent" isDisabled>
        Disabled Accent Switch
      </Switch>
      <Switch variant="destructive">Destructive Switch</Switch>
      <Switch variant="destructive" isDisabled>
        Disabled Destructive Switch
      </Switch>
      <Switch variant="outline">Outline Switch</Switch>
      <Switch variant="outline" isDisabled>
        Disabled Outline Switch
      </Switch>
    </div>
  );
}
