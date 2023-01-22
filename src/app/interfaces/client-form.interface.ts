import { FormControl } from '@angular/forms';

export interface ClientForm {
  id: FormControl<number | null>;
  name: FormControl<string | null>;
  cnpj: FormControl<string | null>;
  status: FormControl<string | null>;
}
