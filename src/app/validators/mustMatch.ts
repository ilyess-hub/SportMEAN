import { FormGroup } from '@angular/forms';

export function MustMatch(val1: string, val2: string) {
  return (fG: FormGroup) => {
     const name = fG.controls[val1];
     const confirmPwd = fG.controls[val2];

     if (name.value !== confirmPwd.value) {
      confirmPwd.setErrors({ mustMatchError: true });
    } else {
      confirmPwd.setErrors(null);
    }
  };
}
