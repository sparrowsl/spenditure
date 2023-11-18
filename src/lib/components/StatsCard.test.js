import { render } from "@testing-library/svelte";
import { it, expect } from "vitest";
import StatsCard from "./StatsCard.svelte";

it("displays given label and text in stat card", () => {
	const { getByText } = render(StatsCard, { label: "Hello", text: "World" });

	expect(getByText("Hello")).toBeTruthy();
});
