// eslint-disable-next-line @typescript-eslint/naming-convention
export class Usuario_pass2 {
  public password1 = '';
  public password2 = '';

  public validarPassword1(): string {
    if (this.password1.trim() === '') {
      return 'Para restablecar la cuenta debe ingresar la contraseña.';
    }

    if (this.password1.length > 8) {
      return 'La contraseña debe ser numérica de 4 dígitos.';
    }
    return '';
  }

  public validarPassword2(): string {
    if (this.password2.trim() === '') {
      return 'Debe reperir la contraseña.';
    }

    if (this.password2.length > 8) {
      return 'La contraseña debe ser numérica de 4 dígitos.';
    }
    if(this.password2.trim()!==this.password1){
      return 'Las contraseñas deben ser iguales';
    }
    return '';
  }

  public validarpass(): string {
    return this.validarPassword1()
      || this.validarPassword2();
  }
}
