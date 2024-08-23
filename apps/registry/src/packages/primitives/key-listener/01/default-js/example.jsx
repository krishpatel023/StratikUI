"use client";

import {
	KeyListener,
	KeyListenerDisplay,
} from "@registry/packages/primitives/key-listener/01/default-js/KeyListener";

export default function KeyListenerImplementation() {
	const funcCall = () => {
		alert("This is something that may appear");
	};
	return (
		<div className="w-full flex justify-center items-center">
			<KeyListener onKeyDown={funcCall} keys={["Control", "j"]} />
			<KeyListenerDisplay keys={["Control", "j"]} />
		</div>
	);
}
