import { Display } from "./display";
import { Grid } from "./grid";

export function Calculator() {
    return (
        <div className="p-4 m-6 bg-surface-card rounded-lg">
            <Display />
            <Grid />
        </div>
    );
}