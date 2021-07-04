/** A property that can be added to an item. */
interface SingleValuedModifier {
	name: string;
	code: string;
	type: 'single';
	value: number;
}



export type ItemModifier =
	SingleValuedModifier;
