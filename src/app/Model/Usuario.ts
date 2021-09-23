export class Usuario{;
  public us: string;
  public clave: string;

  public validarNombreUsuario(): string {
    if (this.us.trim() === '') {
      return 'Para ingresar al sistema debes ingresar un tu de usuario.';
    }
    if (this.us.length < 3 || this.us.length > 8) {
      return 'El nombre de usuario debe tener entre 3 y 8 caracteres.';
    }
    if(this.us.trim() !== 'Shinta'){
      return 'Usuario incorrecto';

    }
    return '';
  }

  public validarPassword(): string {
    if (this.clave.trim() === '') {
      return 'Para entrar al sistema debe ingresar la contraseña.';
    }

    if (this.clave.length > 8) {
      return 'La contraseña debe tener minimo 8 dígitos.';
    }
    if(this.clave.trim() !== 'amenaive'){
      return 'La contraseña es incorrecta';
    }
    return '';
  }

  public validarUsuario(): string {
    return this.validarNombreUsuario()
      || this.validarPassword();
  }

}
