import { LogicManager } from "./LogicManager";
/**
 * Module PM2 Action
 */
export interface IModuleAction {
	/** Button Text */
	name?: string;
	/** Runs when the button is pressed */
	script: (Manager?: LogicManager) => unknown;
	/** Button ID (AutoGenerated) */
	id?: string;
}
