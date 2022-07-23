import { AbstractControl } from "@angular/forms";

export function forbiddenEmailValidator(control: AbstractControl): {[key: string]: any} | null {
    const forbidden = /capgemini/.test(control.value);
    return forbidden ? { 'forbiddenEmail': {value: control.value}} : null;
}