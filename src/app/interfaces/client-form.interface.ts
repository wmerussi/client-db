import { FormControl } from '@angular/forms';

export interface ClientForm {
  name: FormControl<string | null>;
  cnpj: FormControl<string | null>;
  status: FormControl<string | null>;
}
